<template>
    <div class="container flex h-auto md:items-start flex-wrap justify-center md:gap-24 gap-8 md:mt-24 mt-52" id="aboutMe">
        <div class="md:mx-40 px-8 flex flex-col items-center justify-center">
            <TitleCommon title="About me" sub-title="Get To Know More"></TitleCommon>

            <div class="flex md:flex-row-reverse flex-col mt-6 gap-16 justify-center items-center">

                <div class="flex gap-4 flex-col items-center">
                    <p class="text-center">
                        Graduated in Internet Systems, with more than <b>3 years of experience</b> in web development, 
                        I thrive in collaborative environments and am dedicated to staying up-to-date with the latest industry trends, working 
                        in high performance to deliver impact results.
                    </p> 

                    <!-- Social  -->
                    <div class="flex mt-8 gap-3">
                        <a v-for="social in socials"
                        :href="social.link" class="social-item border-2 rounded-3xl p-4 flex flex-col items-center w-20">
                            <i class="text-2xl" :class="social.icon"></i>
                            <span class="text-xs font-bold">{{ social.name }}</span>
                        </a>
                    </div>
                </div>

                <!-- Boxes -->
                <div class="flex gap-4 flex-col">
                    <div class="border-2 rounded-3xl p-8 flex flex-col items-center w-96 h-40">
                        <i class="ph ph-certificate text-3xl"></i>
                        <p class="text-xl font-bold">Experience</p>
                        <p class="text-gray-600">3+ years as Software Development</p>
                    </div>

                    <div class="border-2 rounded-3xl p-8 flex flex-col items-center w-96 h-40">
                        <i class="ph ph-graduation-cap text-3xl"></i>
                        <p class="text-xl font-bold">Education</p>
                        <p class="text-gray-600 text-center">Bachelors Degree in Systems for Internet</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>
<script setup>
    import TitleCommon from './TitleCommon.vue';

    const socials = [
        {
            name: "GitHub",
            link: '#',
            icon: "ph ph-github-logo"
        },
        {
            name: "Linkedin",
            link: '#',
            icon: "ph ph-linkedin-logo"
        },
        {
            name: "Instagram",
            link: '#',
            icon: "ph ph-instagram-logo"
        },
        {
            name: "Blog",
            link: '#',
            icon: "ph ph-article"
        },
    ]
</script>