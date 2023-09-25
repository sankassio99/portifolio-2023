<template>
    <div id="experiences" class="container mx-auto my-24 md:p-20 px-4">
        <h1 class="text-4xl font-bold text-gray-800 mb-16">My Experiences</h1>
        <!-- Job entries -->
        <div class="md:flex space-y-6 md:space-y-0 md:space-x-8 justify-between items-center">
            
            <div class="md:w-1/2">
                <div v-for="item in experiences"
                    class="bg-white border-2 p-6 rounded-lg">
                    <h2 class="text-xl font-semibold text-gray-800">{{ item.name }}</h2>
                    <p class="text-gray-600 mt-2">{{ item.company }}</p>
                    <p class="text-gray-600 mt-2">{{ item.time }}</p>
                    <p class="text-gray-700 mt-4">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    const experiences = [
        {
            name: "Software Engineer",
            company: "Siteware Solutions",
            time: "January 2018 - Present",
            desc: "Responsible for developing and maintaining software applications..."
        },
    ]
</script>