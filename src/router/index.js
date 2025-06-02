import { createRouter, createWebHistory } from 'vue-router';
import CountriesList from '../components/CountriesList.vue';
import CountryDetails from '../components/CountryDetails.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: CountriesList,
  },
  {
    path: '/list/:alpha3Code',
    name: 'country-details',
    component: CountryDetails,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  },
});

export default router;