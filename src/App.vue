<template>
  <div id="app">
    <MainPage />
    <ScrollToTopButton />
  </div>
</template>

<script>

import '@fortawesome/fontawesome-free/css/all.css';
import './main.css'
import MainPage from '@/components/MainPage'
import ScrollToTopButton from './components/ScrollToTopButton.vue';

export default {
  name: 'App',

  components: {
    MainPage,
    ScrollToTopButton
  },

}


</script>

<style scoped></style>
