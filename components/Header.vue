<template>
    <div class="flex justify-center pt-6">
        <img :src="`/img/logo.png`" class="w-32 drop-shadow-lg" :alt="`${conf.bgImageAlt}`" />
    </div>
    <h1 :class="`font-medium capitalize container text-center text-4xl md:text-5xl w-screen py-6 mx-auto ${ conf.bgLight ? 'text-textDark' : 'text-textLight' }`">
        {{ studioName }}
    </h1>

    <div class="fixed -z-10 top-0 bottom-0 left-0 right-0  bg-gradient-to-b from-darkGreen to-lightGreen h-screen w-screen">
        <img v-if="conf.bgImage" :src="`/img/${conf.bgImage}`" class="object-cover h-full w-full" :alt="`${conf.bgImageAlt}`" />
    </div>
    
</template>

<script setup>
    const studioName = "Pagliassotto Rigaldo";
    const { conf } = defineProps(['conf']);
</script>

<style scoped>
</style>