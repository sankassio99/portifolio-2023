<script setup>
    import { onMounted, ref } from "vue";

    const showMenu = ref(false);
    const showBackgroundMenu = ref(false);

    function toggleMenu(){
        showMenu.value = !showMenu.value
    }

    onMounted(()=>{
        document.addEventListener("scroll", (event) => {
            showBackgroundMenu.value = window.scrollY >= 100;
        });
    })
</script>

<template>
    <div>
        <nav class="md:py-12 md:px-40 px-4 py-6 fixed w-full" :class="{ 'bg-white md:py-4 shadow-sm' : showBackgroundMenu }">
            <div class="container mx-auto flex justify-between items-center">
                <!-- Logo or Branding (You can replace this with your own logo) -->
                <a href="#" class="text-4xl">Kássio Dev</a>

                <!-- Menu Items -->
                <ul class="md:flex space-x-6 hidden text-xl">
                    <li><a href="#home" class="hover:text-gray-400 hover:underline">Home</a></li>
                    <li><a href="#aboutMe" class="hover:text-gray-400 hover:underline">About</a></li>
                    <li><a href="#skills" class="hover:text-gray-400 hover:underline">Skills</a></li>
                    <li><a href="#projects" class="hover:text-gray-400 hover:underline">Projects</a></li>
                    <li><a href="#contact" class="hover:text-gray-400 hover:underline">Contact</a></li>
                </ul>

                <!-- Hamburguer button -->
                <button @click="toggleMenu" class="hover:text-gray-400 focus:outline-none md:hidden block">
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
                class="bg-white w-full top-10 h-screen mt-8">
                <ul class="flex flex-col items-center pt-40 h-full text-xl gap-4 font-bold text-slate-200">
                    <li><a href="#home" @click="toggleMenu" class="text-black hover:text-gray-400 border-b-2">Home</a></li>
                    <li><a href="#aboutMe" @click="toggleMenu" class="text-black hover:text-gray-400">About</a></li>
                    <li><a href="#skills" @click="toggleMenu" class="text-black hover:text-gray-400">Skills</a></li>
                    <li><a href="#projects" @click="toggleMenu" class="text-black hover:text-gray-400">Projects</a></li>
                    <li><a href="#contact" @click="toggleMenu" class="text-black hover:text-gray-400">Experiences</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>