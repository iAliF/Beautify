<template>
  <div class="Navbar">
    <v-app-bar color="primary">
      <v-app-bar-title>Beautify</v-app-bar-title>

      <template v-slot:append>
        <v-btn
            icon="mdi-github"
            href="https://github.com/iAliF/Beautify"
            size="x-large"
        ></v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
}
</script>