<template>
    <div class="w-full flex flex-col col flex-nowrap justify-center items-center pb-5 md:pb-11" @click="showElement = service.title">
        <div class="rounded-xl overflow-hidden drop-shadow-lg">
            <img :src="`/img/${service.image}`" :alt="`${service.title}`">
        </div>
        <h3 class="text-center leading-none mt-2 mb-1 text-textLight md:text-lg">{{ service.title }}</h3>
        <!-- <p class="text-textDark font-semibold drop-shadow-md md:text-lg">€ {{ service.price }}</p> -->
    </div>

    <div v-if="showElement == service.title" class="popup cursor-auto">
        <div class="fixed w-screen h-screen backdrop-blur-sm top-0 bottom-0 right-0 left-0 z-10 brightness-75 cursor-pointer" @click="showElement = 0"></div>
        <Info :title="`${service.title}`" class="z-20">
            <p>{{ service.description }}</p>
        </Info>
    </div>  

    <div>
        
    </div>
</template>



<script setup>
const showElement = useState('showElement', () => 0)
const { service } = defineProps(['service'])


</script>

<style lang="scss" scoped></style>