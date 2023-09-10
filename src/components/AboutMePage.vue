<template>
    <div class="container flex justify-center h-auto pb-24">
        <div class="w-2/4 flex flex-col items-center justify-center">
            <h1 class="text-4xl font-bold mb-8">About me</h1>
            <p>
                Graduated in Internet Systems, with more than <b>3 years of experience</b> in web development, 
                I thrive in collaborative environments and am dedicated to staying up-to-date with the latest industry trends, working 
                in high performance to deliver impact results.
            </p>
            <div class="flex mt-8 gap-3">
                <a v-for="social in socials"
                 :href="social.link" class="social-item flex items-center flex-col p-2 rounded-lg shadow-md hover:shadow-sm w-20">
                    <img :src="social.imgSrc" alt="Profile Picture"
                      class="w-6 h-6 ">
                    <span class="text-xs font-bold">{{ social.name }}</span>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
    const socials = [
        {
            name: "GitHub",
            link: '#',
            imgSrc: "/social/git.png"
        },
        {
            name: "Linkedin",
            link: '#',
            imgSrc: "/social/linkedin.png"
        },
        {
            name: "Instagram",
            link: '#',
            imgSrc: "/social/insta.png"
        },
        {
            name: "Blog",
            link: '#',
            imgSrc: "/social/wordpress.png"
        },
    ]
</script>