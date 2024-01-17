<template>
    <div tabindex="0" class="focus:outline-none">
        <h1 class="font-bold  text-4xl my-4">Our Work</h1>
        <div class="mx-auto container">
            <div class="flex flex-wrap items-center lg:justify-center justify-center shadow-lg">

                <div v-for="website in doneWebsites" :key="website.id" tabindex="0"
                    class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                    <div>
                        <img alt="person capturing an image" :src="website.backgroundImage" tabindex="0"
                            class="focus:outline-none w-full h-44" />
                    </div>
                    <div class="bg-white">
                        <div class="flex items-center justify-between px-4 pt-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" tabindex="0" class="focus:outline-none" width="20"
                                    height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                </svg>
                            </div>
                            <!-- <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                                <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
                            </div> -->
                        </div>
                        <div class="p-4">
                            <div class="flex items-center">
                                <h2 tabindex="0" class="focus:outline-none text-lg font-semibold">{{ website.name }} </h2>

                            </div>
                            <p tabindex="0" class="focus:outline-none text-xs text-gray-600 mt-2">{{
                                website.stackUsed.join(', ') }}</p>

                            <div class="flex items-center justify-between py-4">
                                <a :href="website.previewUrl" target="_blank"
                                    class="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">Preview</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurWork',
    data() {
        return {
            doneWebsites: [],
        };
    },
    methods: {
        async fetchDoneWebsites() {
            try {
                const response = await fetch('/websites.json');
                this.doneWebsites = await response.json();

            } catch (error) {
                console.error('Error fetching done websites:', error);
            }
        },
    },
    mounted() {
        this.fetchDoneWebsites();
    },
}
</script>

<style scoped></style>