<template>
  <div class="app">
    <NavBar />
    <div class="container">
      <div class="row">
        <CountriesList />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import CountriesList from './components/CountriesList.vue';
</script>