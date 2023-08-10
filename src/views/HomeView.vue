<template>
  <div class="Home">
    <v-row class="justify-center pt-16">
      <v-col cols="8">
        <v-text-field
            label="Enter your text"
            placeholder="Beautify"
            v-model="textInput"
            clearable
            color="primary"
            variant="outlined"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    textInput: ''
  })
}
</script>