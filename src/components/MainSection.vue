<script setup>
import FirstScreen from './FirstScreen.vue'
import AboutMe from './AboutMe.vue'
</script>

<template>
    <FirstScreen/>
    <!--<AboutMe/>-->

    <div class="h-screen flex flex-col pt-16">
        <div class="text-center w-full mt-20 flex flex-col justify-center align-middle items-center text-xl md:text-4xl px-4">
            <p>I'm currently busy making this extremely complex piece of tech.</p>
            <p>For now you can listen to my reggaetton playlist:</p>
            <div class="mt-20 mx-10 md:w-1/3">
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4nPfcOKqe0B8nVtGuEJAII?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
        <!--Needs planning, insert other sections here most likely, copying TheWelcome-->
    </div>
</template>