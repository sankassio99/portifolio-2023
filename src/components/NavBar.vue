<script setup>
    import { ref } from "vue";

    const showMenu = ref(false);

    function toggleMenu(){
        showMenu.value = !showMenu.value
    }
</script>

<template>
    <div>
        <nav class="bg-customDark p-4 md:fixed md:w-full">
            <div class="container mx-auto flex justify-between items-center">
                <!-- Logo or Branding (You can replace this with your own logo) -->
                <a href="#" class="text-white text-lg font-semibold">My Portfolio</a>

                <!-- Menu Items -->
                <ul class="md:flex space-x-4 hidden">
                    <li><a href="#home" class="text-white hover:text-gray-400">Home</a></li>
                    <li><a href="#aboutMe" class="text-white hover:text-gray-400">About</a></li>
                    <li><a href="#skills" class="text-white hover:text-gray-400">Skills</a></li>
                    <li><a href="#projects" class="text-white hover:text-gray-400">Projects</a></li>
                    <li><a href="#contact" class="text-white hover:text-gray-400">Contact</a></li>
                </ul>

                <!-- Hamburguer button -->
                <button @click="toggleMenu" class="text-white hover:text-gray-400 focus:outline-none md:hidden block">
                    <svg v-if="!showMenu" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>

                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu (hidden by default) -->
            <div v-show="showMenu" 
                class="bg-customDark w-full top-10 h-screen mt-8">
                <ul class="flex flex-col items-center pt-40 h-full text-lg gap-4 font-bold text-slate-200">
                    <li><a href="#home" class="text-white hover:text-gray-400 border-b-2">Home</a></li>
                    <li><a href="#aboutMe" class="text-white hover:text-gray-400">About</a></li>
                    <li><a href="#skills" class="text-white hover:text-gray-400">Skills</a></li>
                    <li><a href="#projects" class="text-white hover:text-gray-400">Projects</a></li>
                    <li><a href="#experiences" class="text-white hover:text-gray-400">Experiences</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>