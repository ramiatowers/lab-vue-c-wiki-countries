<template>
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">
      <router-link
        v-for="country in countries"
        :key="country.alpha3Code"
        :to="'/list/' + country.alpha3Code"
        class="list-group-item list-group-item-action"
      >
        <img
          :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
          style="margin-right: 10px"
        />
        {{ country.name.common || country.name }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const countries = ref([]);

onMounted(async () => {
  const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
  countries.value = await response.json();
});
</script>