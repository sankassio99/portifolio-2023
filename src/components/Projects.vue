<template>
    <div id="projects" class="container mx-auto md:p-20 py-20 flex flex-col items-center">
        <h1 class="text-4xl font-bold text-center">Projects</h1>

        <div class="md:grid md:grid-cols-3 w-2/3 gap-4 mt-8 flex items-center flex-col">

            <div v-for="project in projects" class="p-2 rounded-lg border-2 h-auto md:w-64 w-96 flex-col flex items-center">
                <img :src="project.imgSrc" alt="Profile Picture"
                      class="h-40 w-full object-cover">
                <h2 class="text-2xl text-slate-800 font-bold text-center pt-2">{{ project.name }}</h2>
                <a :href="project.link" target="_blank" class="text-cyan-500 underline">Access Here</a>
            </div>

        </div>
    </div>
</template>

<script setup>
    const projects = [
        {
            name: "New blog concept",
            imgSrc: '/projects/new-blog.png',
            desc: "Nuxt, Tailwind CSS, atomic design",
            link: "https://new-blog-neon.vercel.app/"
        },
        {
            name: "Goals tracker",
            imgSrc: '/projects/goals-3.png',
            desc: "Flutter",
            link: "https://sankassio99.github.io/goals_tracker/#/home"
        },
        {
            name: "Real Eleitor",
            imgSrc: '/projects/real-voter.png',
            desc: "Nuxt, Tailwind CSS",
            link: "https://www.realeleitor.com.br/"
        },
        {
            name: "My personal blog",
            imgSrc: '/projects/my-blog.png',
            desc: "Nuxt, Tailwind CSS, PHP for back end",
            link: "https://meu-blog-bice.vercel.app/"
        },
        {
            name: "Sury Whiteboard",
            imgSrc: '/projects/sury.png',
            desc: "Flutter, Dart, .Net && C# for back end",
            link: "https://sury.stratws.com/"
        },
    ]

</script>