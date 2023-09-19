<template>
    <div class="container mx-auto p-20">
        <h1 class="text-4xl font-bold text-gray-800 mb-16">My Experiences</h1>
        <!-- Job Experience Timeline -->
        <div class="relative">
            <!-- Timeline connector line -->
            <div class="absolute w-2 bg-gray-400 h-full top-0 left-6 md:left-1/2"></div>

            <!-- Job entries -->
            <div class="md:flex space-y-6 md:space-y-0 md:space-x-8 justify-between items-center">
                <!-- Job Entry 1 -->
                <div class="md:w-1/2">
                    <div class="bg-white shadow-lg p-6 rounded-lg">
                        <h2 class="text-xl font-semibold text-gray-800">Software Engineer</h2>
                        <p class="text-gray-600 mt-2">Company XYZ</p>
                        <p class="text-gray-600 mt-2">January 2018 - Present</p>
                        <p class="text-gray-700 mt-4">Responsible for developing and maintaining software applications...
                        </p>
                    </div>
                </div>

                <!-- Job Entry 2 -->
                <div class="md:w-1/2">
                    <div class="bg-white shadow-lg p-6 rounded-lg">
                        <h2 class="text-xl font-semibold text-gray-800">Frontend Developer</h2>
                        <p class="text-gray-600 mt-2">Company ABC</p>
                        <p class="text-gray-600 mt-2">June 2015 - December 2017</p>
                        <p class="text-gray-700 mt-4">Designed and developed user interfaces for web applications...</p>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
</template>