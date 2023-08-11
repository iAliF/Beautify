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
                <v-btn
                    icon="mdi-content-copy"
                    variant="flat"
                    @click="copy(index)"
                ></v-btn>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar
        v-model="snackbar"
        timeout="2000"
        color="primary"
    >
      Text copied to clipboard

      <template v-slot:actions>
        <v-btn
            color="white"
            variant="text"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "FontsList",
  props: ['fontsList'],
  data: () => ({
    snackbar: false
  }),
  methods: {
    copy(index) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(this.fontsList[index])
        this.snackbar = true
      }
    }
  }
}
</script>