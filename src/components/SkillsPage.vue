<template>
    <div class="flex justify-center py-20">
        <div class="container max-w-full mx-2  rounded-md flex flex-col items-center">
            <!-- Title and Description -->
            <h1 class="text-4xl text-slate-800 font-bold">My skills</h1>
            <p class="text-customGreen mt-4 px-4">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Nullam ut libero ut lacus
                laoreet varius.</p>

            <!-- Grid of Skill Cards gap-5 mt-8 px-2 flex w-full overflow-x-scroll -->

            <div class="md:grid md:grid-cols-4 gap-5 mt-8 px-4 max-w-4xl flex w-full md:overflow-hidden overflow-x-scroll">
                <!-- Skill Card 1 -->
                <div v-for="skill in skills" :key="skill.name"
                    class="shrink-0 md:w-44 w-32 p-4 rounded-lg border-2 flex flex-col items-center">
                    <img :src="skill.imgSrc" :alt="'img-'+skill.name"
                        class="w-10 h-10 mx-auto rounded-lg mb-4">
                    <h2 class="text-lg font-semibold text-customCyan">{{ skill.name }}</h2>
                    <p class="text-customGreen text-xs text-center">{{ skill.desc }}</p>
                </div>
            </div>

            <div class="max-w-4xl mt-16 w-full px-4">
                <h1 class="text-3xl text-slate-800 font-bold text-center">Additional tecnologies</h1>
                <div class="grid md:grid-cols-4 grid-cols-2 gap-4 mt-8">
                    <div v-for="i in addSkills"
                     class="flex items-baseline gap-2">
                        <span class="bg-customSalmon w-4 h-4 rounded-full"></span>
                        <h3 class="text-lg font-semibold text-customCyan">{{ i }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const addSkills = [
        ".Net Core",
        "Spring Boot",
        "Python",
        "Django",
        "SQL Server",
        "MySQL",
        "Mongo DB",
        "Firebase",
        "JSON",
    ]

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