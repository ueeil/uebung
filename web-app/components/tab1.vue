<template>
  <div style="font-family: monospace, monospace">
    <v-card outlined style="background-color: #f8f8f8">
      <v-card-title style="margin-bottom: -16px">Raw Data</v-card-title>
      <v-container>
        <v-row style="margin-bottom: -16px">
          <v-col cols="4">
            <v-text-field
              style="background-color: #fff"
              readonly
              hide-details
              outlined
              v-model="alpha"
              label="alpha"
              dense
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              style="background-color: #fff"
              readonly
              hide-details
              outlined
              v-model="beta"
              label="beta"
              dense
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              style="background-color: #fff"
              readonly
              hide-details
              outlined
              v-model="gamma"
              label="gamma"
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-text-field
              style="background-color: #fff"
              readonly
              hide-details
              outlined
              v-model="accelerationX"
              label="X-acceleration"
              dense
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              style="background-color: #fff"
              readonly
              hide-details
              outlined
              v-model="accelerationY"
              label="Y-acceleration"
              dense
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              style="background-color: #fff"
              readonly
              hide-details
              outlined
              v-model="accelerationZ"
              label="Z-acceleration"
              dense
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <br />
    <v-card outlined style="background-color: #f8f8f8">
      <v-card-title>Collect Data</v-card-title>

      <v-card-text>
        <v-text-field
          style="background-color: #fff"
          hide-details
          outlined
          v-model="currentHumanId"
          label="Human Identifier"
          dense
        />
        <br />
        <v-select
          style="background-color: #fff"
          :items="possibleActivities"
          hide-details
          v-model="currentActivity"
          outlined
          label="Activity Type"
          dense
        />
        <v-switch
          style="margin-left: 8px"
          @change="executeNextTimer"
          inset
          :label="'Recoding Enabled: ' + currentlyRecoding"
          hide-details
          v-model="currentlyRecoding"
          :disabled="currentActivity === '' || currentHumanId === ''"
        />
      </v-card-text>
    </v-card>
    <br />
    <v-card outlined style="background-color: #f8f8f8">
      <v-card-title>All collected Data</v-card-title>
      <a ref="hiddenRef" />
      <v-card-text>
        <v-btn @click="exportData">Export data</v-btn>
        <v-switch inset label="ShowCSV" hide-details="" v-model="showCSV" />
        <v-textarea
          style="background-color: #fff; margin-top: 16px"
          v-if="showCSV"
          outlined
          label="CSV"
          v-model="csvData"
          readonly
          hide-details=""
        />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alpha: 0,
      beta: 0,
      gamma: 0,
      accelerationX: 0,
      accelerationY: 0,
      accelerationZ: 0,
      currentActivity: "",
      currentlyRecoding: false,
      currentHumanId: "",
      showCSV: false,
      csvData: "activity,alpha,beta,gamma,stamp,x,y,z",
      possibleActivities: ["tableUp", "tableDown", "hands", "walking"]
    };
  },
  mounted() {
    window.addEventListener("deviceorientation", this.handleAngleChange);
    window.addEventListener("devicemotion", this.handleGyroChange);
    console.log("events added");
  },
  methods: {
    exportData() {
      var textToSave = this.csvData;
      var hiddenElement = this.$refs.hiddenRef;
      hiddenElement.href = "data:attachment/text," + encodeURI(textToSave);
      hiddenElement.target = "_blank";
      hiddenElement.download = "csvData.txt";
      hiddenElement.click();
    },
    addItemToCSV() {
      console.log("adding item");

      this.csvData += "\n";
      this.csvData += this.currentActivity + ";";
      this.csvData += this.currentHumanId + ";";
      this.csvData += new Date().getTime() + ";";
      this.csvData += this.alpha + ";";
      this.csvData += this.beta + ";";
      this.csvData += this.gamma + ";";
      this.csvData += this.accelerationX + ";";
      this.csvData += this.accelerationY + ";";
      this.csvData += this.accelerationZ + ";";
    },
    executeNextTimer() {
      if (this.currentlyRecoding) {
        setTimeout(() => {
          this.addItemToCSV();
          this.executeNextTimer();
        }, 10);
      } else {
        clearTimeout(this.timer);
      }
    },
    handleAngleChange(event) {
      //console.log(event);
      if (event === undefined) return;
      this.alpha = +(Math.round(event.alpha + "e+2") + "e-2");
      this.beta = +(Math.round(event.beta + "e+2") + "e-2");
      this.gamma = +(Math.round(event.gamma + "e+2") + "e-2");
    },
    handleGyroChange(event) {
      //console.log(event.acceleration);
      if (event === undefined || event.acceleration === undefined) return;
      this.accelerationX = +(Math.round(event.acceleration.x + "e+2") + "e-2");
      this.accelerationY = +(Math.round(event.acceleration.y + "e+2") + "e-2");
      this.accelerationZ = +(Math.round(event.acceleration.z + "e+2") + "e-2");
    }
  }
};
</script>
