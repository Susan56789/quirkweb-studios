<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navigation Bar -->
    <nav class="bg-blue-500 p-4 text-white">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-semibold">QuirkWeb Studios</h1>
        <div class="flex space-x-4">
          <a href="#done-websites">Our Work</a>
          <a href="#about-us">About Us</a>

          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <button @click="toggleTheme" class="text-lg focus:outline-none">
            {{ darkMode ? "Light Mode" : "Dark Mode" }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Sections -->
    <section id="about-us" class="p-8 bg-gray-200">
      <!-- ... About Us section ... -->
      <h2 class="text-2xl font-semibold mb-4">About Us</h2>
      <span>
        QuirkWeb Studios understands that each client is distinct, and so should be their digital footprint. We thrive on
        collaboration, working closely with our clients to understand their unique vision and goals. Our tailor-made
        solutions ensure that your website is not just a digital placeholder but a dynamic extension of your brand
        identity.
      </span>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <!-- Mission Card -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Mission</h3>
          <p class="text-gray-600">At QuirkWeb Studios, our mission is to redefine digital experiences by seamlessly
            blending creativity and functionality. We are dedicated to crafting unique, visually stunning, and
            user-centric websites that not only reflect the essence of our clients' brands but also elevate their online
            presence. Through innovation, collaboration, and a touch of quirkiness, we aim to empower businesses with
            compelling digital solutions that leave a lasting impression.</p>
        </div>

        <!-- Vision Card -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Vision</h3>
          <p class="text-gray-600">QuirkWeb Studios envisions a digital landscape where every online presence is a work of
            art, capturing attention and sparking engagement. We aspire to be at the forefront of the ever-evolving web
            design industry, pushing boundaries and setting new standards for creativity and excellence. Our vision is to
            be the go-to destination for businesses seeking not just a website, but a digital masterpiece that resonates
            with their audience and propels them towards unparalleled success.</p>
        </div>
      </div>
    </section>
    <section id="done-websites" class="p-8">
      <!-- ... Done Websites section ... -->
      <h2 class="text-2xl font-semibold mb-4">Done Websites</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Fetch and display websites from the JSON file -->
        <div v-for="website in doneWebsites" :key="website.id"
          class="bg-cover bg-center h-64 rounded-lg overflow-hidden relative"
          :style="{ backgroundImage: 'url(/' + website.backgroundImage + ')' }">
          <div class="bg-black bg-opacity-50 absolute inset-0"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-white text-center">
              <h3 class="text-xl font-semibold mb-2">{{ website.name }}</h3>
              <p class="text-sm">{{ website.stackUsed.join(', ') }}</p>
              <a :href="website.previewUrl" target="_blank"
                class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Preview</a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section id="pricing" class="p-8 bg-gray-200">
      <!-- ... Pricing section ... -->
      <h2 class="text-2xl font-semibold mb-4">Pricing</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <!-- Pricing Card 1 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Basic Plan</h3>
          <p class="text-gray-600">Ideal for small businesses</p>
          <p class="text-2xl font-bold mt-4">$19.99/month</p>
          <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
        </div>

        <!-- Pricing Card 2 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Standard Plan</h3>
          <p class="text-gray-600">Perfect for growing businesses</p>
          <p class="text-2xl font-bold mt-4">$49.99/month</p>
          <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
        </div>

        <!-- Pricing Card 3 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Pro Plan</h3>
          <p class="text-gray-600">For established enterprises</p>
          <p class="text-2xl font-bold mt-4">$99.99/month</p>
          <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
        </div>

        <!-- Pricing Card 4 -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-3">Custom Plan</h3>
          <p class="text-gray-600">Tailored to your needs</p>
          <p class="text-2xl font-bold mt-4">Contact Us</p>
          <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Contact Us</button>
        </div>
      </div>
    </section>

    <section id="contact" class="p-8">
      <!-- ... Contact section ... -->
      <h2 class="text-2xl font-semibold mb-4">Contact</h2>

      <div class="flex items-center space-x-4">
        <!-- Phone -->
        <div>
          <span class="text-lg font-semibold">Phone:</span>
          <p class="text-gray-600">+254 733 546 830</p>
        </div>

        <!-- Email -->
        <div>
          <span class="text-lg font-semibold">Email:</span>
          <p class="text-gray-600">quirkwebstudios@gmail.com</p>
        </div>

        <!-- Social Icons -->
        <div class="flex items-center space-x-4">
          <a href="#" target="_blank" class="text-gray-600">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="#" target="_blank" class="text-gray-600">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="#" target="_blank" class="text-gray-600">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
    <!-- Scroll to Top Button -->
    <button @click="scrollToTop" id="scrollToTopBtn" title="Scroll to Top">
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script>


export default {

  data() {
    return {
      doneWebsites: [],
      darkMode: false,
    };
  },
  mounted() {
    this.fetchDoneWebsites();
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    async fetchDoneWebsites() {
      try {
        const response = await fetch('/websites.json');
        this.doneWebsites = await response.json();
        console.log('doneWebsites:', this.doneWebsites);
      } catch (error) {
        console.error('Error fetching done websites:', error);
      }
    },
    toggleTheme() {
      this.darkMode = !this.darkMode;
      document.documentElement.classList.toggle('dark', this.darkMode);
    },
  },

};
</script>

<style ></style>