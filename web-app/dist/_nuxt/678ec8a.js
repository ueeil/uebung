(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{495:function(e,t,n){"use strict";n.r(t);var r=n(23);n(0),n(3),n(4),n(5),n(74),n(242),n(50),n(10),n(80),n(35),n(53),n(43),n(27),n(28),n(54),n(59),n(44);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,h=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){h=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(h)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var l={head:function(){return{script:[{src:"http://localhost/model.js",type:"text/javascript",body:!0,defer:!0}]}},data:function(){return{model:null,alpha:0,beta:0,gamma:0,accelerationX:0,accelerationY:0,accelerationZ:0,currentlyRecoding:!0,currentTimeframe:[[],[],[],[],[],[]],currentFeatures:[],lastTimeframeTickTime:0,currentPrediction:-1}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e.$nuxt.hi),window.addEventListener("deviceorientation",e.handleAngleChange),window.addEventListener("devicemotion",e.handleGyroChange),console.log("events added"),Array.prototype.median=function(){return this.slice().sort((function(a,b){return a-b}))[Math.floor(this.length/2)]},Array.prototype.stanDeviate=function(){var i,e,t,n=0,r=[];for(i=0;i<this.length;i+=1)n+=this[i];for(t=n/this.length,e=0;e<this.length;e+=1)r.push(Math.pow(this[e]-t,2));return Math.sqrt(r.reduce((function(e,t){return e+t}))/this.length)},console.log("starting"),setTimeout((function(){e.executeNextTimer()}),500);case 8:case"end":return t.stop()}}),t)})))()},methods:{generateFeatures:function(){var e,t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=0,n=o(this.currentTimeframe);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(0===r.length)return;var c=Math.min.apply(Math,r),l=Math.max.apply(Math,r),h=t.median(),m=t.stanDeviate();t[0+i]=c,t[1+i]=l,t[2+i]=h,t[3+i]=m,i+=4}}catch(e){n.e(e)}finally{n.f()}return this.currentFeatures=t,t},addItemToTimeframe:function(){var e=(new Date).getTime();e-this.lastTimeframeTickTime>=3e3?(this.generateFeatures(),this.currentPrediction=this.$nuxt.executeModel(this.currentFeatures),console.log("currentPrediction: "+this.currentPrediction),this.currentTimeframe=[[],[],[],[],[],[]],this.lastTimeframeTickTime=e):(this.currentTimeframe[0].push(this.alpha),this.currentTimeframe[1].push(this.beta),this.currentTimeframe[2].push(this.gamma),this.currentTimeframe[3].push(this.accelerationX),this.currentTimeframe[4].push(this.accelerationY),this.currentTimeframe[5].push(this.accelerationZ))},executeNextTimer:function(){var e=this;this.currentlyRecoding&&setTimeout((function(){e.addItemToTimeframe(),e.executeNextTimer()}),2)},handleAngleChange:function(e){void 0!==e&&(this.alpha=+(Math.round(e.alpha+"e+2")+"e-2"),this.beta=+(Math.round(e.beta+"e+2")+"e-2"),this.gamma=+(Math.round(e.gamma+"e+2")+"e-2"))},handleGyroChange:function(e){void 0!==e&&void 0!==e.acceleration&&(this.accelerationX=+(Math.round(e.acceleration.x+"e+2")+"e-2"),this.accelerationY=+(Math.round(e.acceleration.y+"e+2")+"e-2"),this.accelerationZ=+(Math.round(e.acceleration.z+"e+2")+"e-2"))}}},h=n(84),component=Object(h.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"font-family":"monospace, monospace"}},[n("center",[e._v("\n    result: class "+e._s(e.currentPrediction)+"\n    "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),0==e.currentPrediction?n("div",{staticStyle:{"font-size":"30px"}},[e._v("\n      🤏\n      "),n("br"),e._v("\n      Small Text\n    ")]):1==e.currentPrediction?n("div",{staticStyle:{"font-size":"60px"}},[e._v("\n      🔎\n      "),n("br"),e._v("\n      Big Text\n    ")]):2==e.currentPrediction?n("div",{staticStyle:{"font-size":"90px"}},[e._v("\n      👾\n      "),n("br"),e._v("\n      BIGGER Text\n    ")]):e._e()])],1)}),[],!1,null,null,null);t.default=component.exports}}]);