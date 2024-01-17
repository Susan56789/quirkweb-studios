<template>
  <MainPage />
</template>

<script>

import '@fortawesome/fontawesome-free/css/all.css';
import './main.css'
import MainPage from './components/MainPage.vue';


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
    MainPage
  },

}


</script>

<style scoped></style>
