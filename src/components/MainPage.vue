<template>
  <div :class="{ 'dark-mode': darkMode, 'light-mode': !darkMode }">
    <div class="min-h-screen bg-gray-100">
      <!-- Navigation Bar -->
      <div class="flex">
        <NavBar />
        <button @click="toggleTheme" class="rounded-lg focus:outline-none focus:shadow-outline ml-4">
          <i v-if="darkMode" class="fas fa-moon text-white"></i>
          <i v-else class="fas fa-sun text-black"></i>
        </button>
      </div>

      <section id="about-us" class="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">

        <AboutUs />

      </section>

      <section id="designing-cost" class="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
        <OurPrices />
      </section>

      <section id="marketing-cost" class="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">

        <MarketingPage />
      </section>

      <section id="contact" class="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">

        <ContactUs />
      </section>
      <section class="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
        <FooterPage />
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import AboutUs from './AboutUs.vue';
import OurPrices from './OurPrices.vue';
import ContactUs from './ContactUs.vue';
import FooterPage from './FooterPage.vue';
import MarketingPage from './MarketingPage.vue';

export default {
  name: 'MainPage',
  components: {
    NavBar,
    AboutUs,
    OurPrices,
    ContactUs,
    FooterPage,
    MarketingPage

  },
  data() {
    return {
      doneWebsites: [],
      darkMode: false,
    };
  },

  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
      document.documentElement.classList.toggle('dark', this.darkMode);
      localStorage.setItem('darkMode', this.darkMode);
    },
  },
  created() {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
      this.darkMode = JSON.parse(storedDarkMode);
      document.documentElement.classList.toggle('dark', this.darkMode);
    }
  },

};
</script>

<style scoped >
.flex {
  align-items: center;

}


.rounded-lg {
  padding: 8px;

}


.fas.fa-moon {
  font-size: 20px;

}


.fas.fa-sun {
  font-size: 20px;

}
</style>