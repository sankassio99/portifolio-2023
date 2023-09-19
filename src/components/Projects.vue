<template>
    <div class="container mx-auto p-20">
        <h1 class="text-4xl font-bold">My personal projects</h1>

        <div class="grid grid-cols-3 gap-4 mt-8">

            <div v-for="project in projects" class="p-2 rounded-lg border-2 h-auto w-96 flex-col flex items-center">
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
    ]

</script>