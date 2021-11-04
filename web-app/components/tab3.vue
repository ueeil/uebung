<template>
  <div style="font-family: monospace, monospace">
    <center>
      result: class {{ currentPrediction }}
      <br />
      <br />
      <br />
      <div v-if="currentPrediction == 0" style="font-size: 30px">
        🤏
        <br />
        Small Text
      </div>
      <div v-else-if="currentPrediction == 1" style="font-size: 60px">
        🔎
        <br />
        Big Text
      </div>
      <div v-else-if="currentPrediction == 2" style="font-size: 90px">
        👾
        <br />
        BIGGER Text
      </div>
    </center>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: "https://test.forum-wi.de/model.js", type: "text/javascript", body: true, defer: true }]
    };
  },
  data() {
    return {
      model: null,
      alpha: 0,
      beta: 0,
      gamma: 0,
      accelerationX: 0,
      accelerationY: 0,
      accelerationZ: 0,
      currentlyRecoding: true,
      currentTimeframe: [[], [], [], [], [], []],
      currentFeatures: [],
      lastTimeframeTickTime: 0,
      currentPrediction: -1
    };
  },
  async mounted() {
    console.log(this.$nuxt.hi);

    window.addEventListener("deviceorientation", this.handleAngleChange);
    window.addEventListener("devicemotion", this.handleGyroChange);
    console.log("events added");

    // add median & std function to arrays
    Array.prototype.median = function () {
      return this.slice().sort((a, b) => a - b)[Math.floor(this.length / 2)];
    };
    Array.prototype.stanDeviate = function () {
      var i,
        j,
        total = 0,
        mean = 0,
        diffSqredArr = [];
      for (i = 0; i < this.length; i += 1) {
        total += this[i];
      }
      mean = total / this.length;
      for (j = 0; j < this.length; j += 1) {
        diffSqredArr.push(Math.pow(this[j] - mean, 2));
      }
      return Math.sqrt(
        diffSqredArr.reduce(function (firstEl, nextEl) {
          return firstEl + nextEl;
        }) / this.length
      );
    };

    console.log("starting");
    setTimeout(() => {
      this.executeNextTimer();
    }, 500);
  },
  methods: {
    generateFeatures() {
      // this.alpha, this.beta, this.gamma, this.accelerationX, this.accelerationY, this.accelerationZ
      // =>
      // alpha_min	alpha_max	alpha_median	alpha_std	beta_min	beta_max	beta_median	beta_std ...
      let arrayToReturn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      let i = 0;
      for (let dataPoints of this.currentTimeframe) {
        if (dataPoints.length === 0) return;

        //console.log("dataPoints", dataPoints);
        let min = Math.min.apply(Math, dataPoints);
        let max = Math.max.apply(Math, dataPoints);
        let median = arrayToReturn.median();
        let std = arrayToReturn.stanDeviate();

        arrayToReturn[0 + i] = min;
        arrayToReturn[1 + i] = max;
        arrayToReturn[2 + i] = median;
        arrayToReturn[3 + i] = std;

        i += 4;
      }
      this.currentFeatures = arrayToReturn;
      return arrayToReturn;
    },
    addItemToTimeframe() {
      // check if we collected 1000ms of data
      let now = new Date().getTime();
      if (now - this.lastTimeframeTickTime >= 3000) {
        // execute model
        this.generateFeatures();
        this.currentPrediction = this.$nuxt.executeModel(this.currentFeatures);
        console.log("currentPrediction: " + this.currentPrediction);

        // reset array & time for comparison
        this.currentTimeframe = [[], [], [], [], [], []];
        this.lastTimeframeTickTime = now;
      } else {
        this.currentTimeframe[0].push(this.alpha);
        this.currentTimeframe[1].push(this.beta);
        this.currentTimeframe[2].push(this.gamma);
        this.currentTimeframe[3].push(this.accelerationX);
        this.currentTimeframe[4].push(this.accelerationY);
        this.currentTimeframe[5].push(this.accelerationZ);
      }
    },
    executeNextTimer() {
      if (this.currentlyRecoding) {
        setTimeout(() => {
          //console.log("timer");
          this.addItemToTimeframe();
          this.executeNextTimer();
        }, 2);
      }
    },
    handleAngleChange(event) {
      if (event === undefined) return;
      this.alpha = +(Math.round(event.alpha + "e+2") + "e-2");
      this.beta = +(Math.round(event.beta + "e+2") + "e-2");
      this.gamma = +(Math.round(event.gamma + "e+2") + "e-2");
    },
    handleGyroChange(event) {
      if (event === undefined || event.acceleration === undefined) return;
      this.accelerationX = +(Math.round(event.acceleration.x + "e+2") + "e-2");
      this.accelerationY = +(Math.round(event.acceleration.y + "e+2") + "e-2");
      this.accelerationZ = +(Math.round(event.acceleration.z + "e+2") + "e-2");
    }
  }
};
</script>
