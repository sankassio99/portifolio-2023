<template>
    <div id="contact" class="container md:mx-auto h-screen flex items-center">
        <div class="flex flex-col md:flex-row flex-grow md:gap-0 gap-12">

            <div class="call-text flex-1 flex flex-col justify-center items-center md:text-left text-center">
                <div>
                    <h1 class="text-4xl font-bold text-gray-800">Let's chat.<br> Tell me about your<br> project.</h1>
                    <p class="mt-4">Let's craete something amazing! 😍</p>
                </div>
            </div>

            <div class="flex-1 flex items-center justify-center">
                <form class="form-contact shadow-md rounded-md flex flex-col p-4 w-96 bg-white">
                    <h2 class="text-3xl text-slate-800 font-bold">Send me a message 🚀</h2>
                    <div class="form mt-8 flex flex-col">
                        <input class="shadow appearance-none border rounded w-full py-2 px-3
                        text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline 
                        focus:border-customCyan focus:border-2"
                            type="text" placeholder="Full name*" required/>

                        <input class="shadow appearance-none border rounded w-full py-2 px-3
                        text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline 
                        focus:border-customCyan focus:border-2" type="text" placeholder="Email address*" required/>

                        <input class="shadow appearance-none border rounded w-full py-2 px-3
                        text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline 
                        focus:border-customCyan focus:border-2" type="text" placeholder="Subject"/>

                        <label for="" class="font-semibold">Tell me more about your problem</label>
                        <textarea class="shadow appearance-none border rounded w-full py-2 px-3
                        text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline 
                        focus:border-customCyan focus:border-2"></textarea>
                    
                        <button class="mt-6 inline-block px-6 
                            py-3 bg-customCyan text-white 
                            font-semibold rounded-lg hover:bg-customGreen
                            transition duration-300 ease-in-out" type="submit">Send message</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>