<template>
  <div>
    <v-app-bar color="primary" elevation="2" app dark height="46px">
      <center>Übung zu Kontextsensitive Systeme</center>
      <template v-slot:extension>
        <v-tabs size="1" v-model="tab" fixed-tabs>
          <v-tab value="0">Collect Data</v-tab>
          <v-tab value="1">tab 2</v-tab>
          <v-tab value="2">tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <div>
      <v-tabs-items v-model="tab" touchless>
        <v-tab-item>
          <tab-1 />
        </v-tab-item>
        <v-tab-item>
          <tab-2 />
        </v-tab-item>
        <v-tab-item>
          <tab-3 />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0
    };
  },
  methods: {}
};
</script>
