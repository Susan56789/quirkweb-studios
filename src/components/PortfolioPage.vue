<template>
    <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
        <div class="container">
            <h2 class="text-2xl font-semibold relative inline-block title-with-stroke">
                Our Portfolio
            </h2>
            <div class="flex flex-wrap items-center lg:justify-center justify-center shadow-2xl">
                <div v-for="(site, index) in websites" :key="index"
                    class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 shadow-lg">
                    <div class="bg-white rounded-lg overflow-hidden mb-10">
                        <img :src="site.backgroundImage" :alt="`image-${index + 1}`" class="w-full" />
                        <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3>
                                <a :href="site.reviewUrl" class="
                     font-semibold
                     text-dark text-xl
                     sm:text-[22px]
                     md:text-xl
                     lg:text-[22px]
                     xl:text-xl
                     2xl:text-[22px]
                     mb-4
                     block
                     hover:text-primary
                     ">
                                    {{ site.name }}
                                </a>
                            </h3>
                            <p class="text-base text-body-color leading-relaxed mb-7">
                                {{ site.stackUsed.join(', ') }}
                            </p>
                            <a href="javascript:void(0)" class="
                  inline-block
                  py-2
                  px-7
                  border border-[#E5E7EB]
                  rounded-full
                  text-base text-body-color
                  font-medium
                  hover:border-primary hover:bg-purple hover:text-black
                  transition
                  ">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'OurWork',
    data() {
        return {
            websites: [],
        };
    },
    async created() {

        try {
            const response = await fetch('/websites.json');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            this.websites = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    },
};
</script>
  

<style scoped>
.title-with-stroke::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;

    background-color: #000;

    z-index: -1;
}
</style>