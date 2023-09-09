<template>
    <div class="flex justify-center my-24 items-center ">
        <div class="container max-w-full mx-2 bg-customDark p-12 rounded-md flex flex-col items-center">
            <!-- Title and Description -->
            <h1 class="text-4xl font-semibold text-customCyan">My Skills</h1>
            <p class="text-customGreen mt-4">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Nullam ut libero ut lacus
                laoreet varius.</p>

            <!-- Grid of Skill Cards -->
            <div class="grid grid-cols-6 gap-8 mt-8">
                <!-- Skill Card 1 -->
                <div v-for="skill in skills" :key="skill.name"
                class=" p-4 rounded-lg shadow-md flex flex-col items-center">
                    <img :src="skill.imgSrc" :alt="'img-'+skill.name"
                        class="w-20 h-20 mx-auto rounded-lg mb-4">
                    <h2 class="text-lg font-semibold text-customOrange">{{ skill.name }}</h2>
                    <p class="text-gray-600 ">{{ skill.desc }}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
    const skills = [
        {
            name: "C#",
            imgSrc: '/skills/c-sharp.png',
            desc: "Description of skill 1."
        },
        {
            name: "JavaScript",
            imgSrc: "/skills/javascript.png",
            desc: "Description of skill 1."
        },
        {
            name: "Java",
            imgSrc: "/skills/java.png",
            desc: "Description of skill 1."
        },
        {
            name: "Flutter",
            imgSrc: "/skills/flutter.png",
            desc: "Description of skill 1."
        },
        {
            name: "TypeScript",
            imgSrc: "/skills/typescript.png",
            desc: "Description of skill 1."
        },
        {
            name: "CSS",
            imgSrc: "/skills/css.png",
            desc: "Description of skill 1."
        }
    ]
</script>