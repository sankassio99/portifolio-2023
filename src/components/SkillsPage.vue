<template>
    <div class="flex justify-center h-screen bg-customDark">
        <div class="container max-w-full mx-2 bg-customDark p-12 rounded-md flex flex-col items-center">
            <!-- Title and Description -->
            <h1 class="text-4xl font-semibold text-customOrange">My Skills</h1>
            <p class="text-customGreen mt-4">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Nullam ut libero ut lacus
                laoreet varius.</p>

            <!-- Grid of Skill Cards -->
            <div class="grid grid-cols-8 gap-8 mt-8">
                <!-- Skill Card 1 -->
                <div v-for="skill in skills" :key="skill.name"
                class=" p-4 rounded-lg shadow-md flex flex-col items-center">
                    <img :src="skill.imgSrc" :alt="'img-'+skill.name"
                        class="w-16 h-16 mx-auto rounded-lg mb-4">
                    <h2 class="text-lg font-semibold text-customGreen">{{ skill.name }}</h2>
                    <p class="text-customGreen text-xs text-center">{{ skill.desc }}</p>
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
            desc: "More than 1 year"
        },
        {
            name: "JavaScript",
            imgSrc: "/skills/javascript.png",
            desc: "More than 3 years"
        },
        {
            name: "Java",
            imgSrc: "/skills/java.png",
            desc: "Graduation"
        },
        {
            name: "Flutter",
            imgSrc: "/skills/flutter.png",
            desc: "More than 1 year"
        },
        {
            name: "TypeScript",
            imgSrc: "/skills/typescript.png",
            desc: "More than 1 year"
        },
        {
            name: "CSS",
            imgSrc: "/skills/css.png",
            desc: "Graduation and More than 3 years"
        },
        {
            name: "Azure",
            imgSrc: "/skills/azure.png",
            desc: "More than 1 year"
        },
        {
            name: "GitHub",
            imgSrc: "/skills/git.png",
            desc: "More than 3 years"
        },
    ]
</script>