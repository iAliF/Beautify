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
            @click:clear="handleInput"
        >
        </v-text-field>
      </v-col>
    </v-row>

    <FontsList :fontsList="fontsList" />
  </div>
</template>

<script>
import beautify from "@/components/utils/fonts";
import FontsList from "@/components/FontsList.vue";

export default {
  components: {FontsList},
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