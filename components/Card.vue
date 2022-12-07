<template>
    <div class="w-full flex flex-col col flex-nowrap justify-center items-center pb-5 md:pb-11">
        <div class="rounded-xl overflow-hidden drop-shadow-lg">
            <img :src="`/img/${service.image}`" :alt="`${service.title}`">
        </div>
        <h3 class="text-center leading-none mt-2 mb-1 text-textLight md:text-lg">{{ service.title }}</h3>
        <p class="text-textDark font-semibold drop-shadow-md md:text-lg">€ {{ service.price }}</p>
    </div>
</template>

<script setup>
    const { service } = defineProps(['service'])
</script>

<style lang="scss" scoped>

</style>