<template>
  <div class="FontsList">
    <v-row class="justify-center">
      <v-col
          cols="8"
          v-if="fontsList.length"
      >
        <v-card
            class="pa-2"
            rounded="xl"
        >
          <v-list
              density="comfortable"
          >
            <v-list-subheader>Result</v-list-subheader>

            <v-list-item
                v-for="(value, index) in fontsList"
                :key="index"
                :value="value"
                :title="value"
                color="primary"
                rounded="xl"
                class="pa-4"
            >
              <template v-slot:append>
                test
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FontsList",
  props: ['fontsList']
}
</script>