<template>
    <div class="flex flex-col items-center w-screen min-h-screen bg-white">

        <div class="container mx-auto my-4 px-4 lg:px-20">

            <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-lg">
                <div class="flex flex-col text-black">
                    <h1 class="font-bold uppercase text-5xl">Send us a <br /> message</h1>
                </div>
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                    <input
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text" placeholder="First Name*" />
                    <input
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Last Name*" />
                    <input
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="email" placeholder="Email*" />
                    <input
                        class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="number" placeholder="Phone*" />
                </div>
                <div class="my-4">
                    <textarea placeholder="Message*"
                        class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div class="my-2 w-1/2 lg:w-1/4">
                    <button class="uppercase text-sm font-bold tracking-wide bg-purple-900 text-gray-100 p-3 rounded-lg w-full 
                          focus:outline-none focus:shadow-outline">
                        Send Message
                    </button>
                </div>
            </div>

            <div class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-purple-900 rounded-2xl shadow-lg">
                <div class="flex flex-col text-white">
                    <h1 class="font-bold uppercase text-4xl my-4">Get in touch</h1>
                    <p class="text-gray-400"> Send Us a message
                    </p>

                    <div class="flex my-4 w-2/3 lg:w-1/2">
                        <div class="flex flex-col">
                            <i class="fas fa-map-marker-alt pt-2 pr-2" />
                        </div>
                        <div class="flex flex-col">
                            <h2 class="text-2xl">Main Office</h2>
                            <p class="text-gray-400">Nairobi,Kenya</p>
                        </div>
                    </div>

                    <div class="flex my-4 w-2/3 lg:w-1/2">
                        <div class="flex flex-col">
                            <i class="fas fa-phone-alt pt-2 pr-2" />
                        </div>
                        <div class="flex flex-col">
                            <h2 class="text-2xl">Call Us</h2>
                            <p class="text-gray-400">Tel: +254701546830</p>
                            <!-- <p class="text-gray-400">Fax: xxx-xxx-xxx</p> -->
                        </div>
                    </div>

                    <div class="flex my-4 w-2/3 lg:w-1/2">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"
                            class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                            <i class="fab fa-facebook-f text-purple-900" />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
                            class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                            <i class="fab fa-linkedin-in text-purple-900" />
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"
                            class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                            <i class="fab fa-twitter text-purple-900" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ContactUs'
}
</script>