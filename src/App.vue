<script setup>
import HomeView from "@/views/HomeView.vue";
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="blue">
      <v-app-bar-title>Beautify</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-github" href="https://github.com/iAliF/Beautify" size="x-large"></v-btn>
      </template>
    </v-app-bar>

    <v-main class=" align-center justify-center" style="min-height: 300px;">
      <v-container>
        <HomeView />
      </v-container>
    </v-main>
  </v-layout>
</template>