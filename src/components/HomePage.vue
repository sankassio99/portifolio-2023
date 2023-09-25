<template>
    <div id="home">
        <div class="container mx-auto md:px-20 flex flex-col-reverse md:flex-row items-center gap-16 md:gap-20 justify-center h-screen ">
            <!-- Left side: Text content -->
            <div class="md:w-1/2 text-center md:text-left">
                <h1 class="text-4xl font-bold text-gray-800">Hello, I'm Kássio Santana</h1>
                <p class="text-gray-600 mt-4 text-lg">
                    Full-stack Software Developer, with more than <b>3 years of experience</b> in web development.</p>
                <div class="flex gap-4 md:justify-start justify-center">
                    <a href="#"
                    class="mt-6 inline-block px-6 
                    py-3 bg-customOrange text-white 
                    font-semibold rounded-lg hover:bg-customSalmon
                    transition duration-300 ease-in-out">
                    Hire me</a>
                    <a href="#aboutMe"
                        class="mt-6 inline-block px-6 
                        py-3 bg-customCyan text-white 
                        font-semibold rounded-lg hover:bg-customSalmon
                        transition duration-300 ease-in-out">
                        About me</a>
                </div>
            </div>

            <!-- Right side: Rounded picture -->
            <div class="md:w-1/3 mt-8 md:mt-0">
                <img src="/perfil-2.jpg" alt="Profile Picture"
                    class="w-96 h-96 mx-auto rounded-full border-4 ">
            </div>
    </div>
</div></template>