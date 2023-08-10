<script setup>
import HomeView from "@/views/HomeView.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <v-layout class="rounded rounded-md">
    <Navbar/>

    <v-main>
      <v-container>
        <HomeView/>
      </v-container>
    </v-main>
  </v-layout>
</template>