<template>
  <div class="col-7" v-if="country">
    <img
      :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
      :alt="country.name.common"
      style="width: 100px"
    />
    <h1>{{ country.name.common || country.name }}</h1>
    <table class="table">
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ country.capital?.[0] }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>
            {{ country.area }} km<sup>2</sup>
          </td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <li v-for="border in country.borders" :key="border">
                <router-link :to="'/list/' + border">{{ border }}</router-link>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const country = ref(null);

const fetchCountry = async (code) => {
  const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${code}`);
  country.value = await response.json();
};

onMounted(() => {
  fetchCountry(route.params.alpha3Code);
});

watch(
  () => route.params.alpha3Code,
  (newCode) => {
    fetchCountry(newCode);
  }
);
</script>