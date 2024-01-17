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


  metaInfo: {
    title: 'QuirkWeb Studios - Where Digital Delight Meets Distinction!',
    meta: [
      {
        name: 'description',
        content: 'QuirkWeb Studios - Offering stunning website design solutions for businesses.'
      },
      {
        name: 'keywords',
        content: 'web design, website development, QuirkWeb Studios, software developer, price of wesite'
      },
      {
        name: 'author',
        content: 'Susan Wairimu'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      },
    ],
  },
  components: {
    MainPage,
    ScrollToTopButton
  },

}


</script>

<style scoped></style>
