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

        <v-btn
            :icon="this.$vuetify.theme.current.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
            size="x-large"
            @click="toggleTheme"
        ></v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import {useTheme} from 'vuetify'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  setup() {
    const theme = useTheme()

    return {
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  }
}
</script>