<template>
  <div class="Home">
    <v-row class="justify-center mt-16">
      <v-col cols="8">
        <v-text-field
            label="Enter your text"
            placeholder="Beautify"
            v-model="textInput"
            clearable
            color="primary"
            variant="outlined"
            @keyup="handleInput"
        >
        </v-text-field>
      </v-col>
    </v-row>

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
import beautify from "@/components/utils/fonts";

export default {
  data: () => ({
    textInput: '',
    fontsList: []
  }),
  methods: {
    handleInput() {
      if (!this.textInput || !this.textInput.length) {
        this.fontsList = []
        return
      }

      this.fontsList = beautify(this.textInput)
    }
  }
}
</script>