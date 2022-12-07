<template>
    <div class="fixed bottom-24 md:bottom-0 left-3 md:left-0 right-3 md:right-0 md:top-0 md:h-fit md:m-auto p-5 md:p-7 backdrop-blur lightBackground rounded-2xl text-textDark text-sm font-normal drop-shadow-md border semitransparentBorder md:max-w-md">
        <h3 class="font-bold capitalize container text-left text-xl mt-5">{{ title }}</h3>
        <slot />
    </div>
</template>

<script setup>
    const { title } = defineProps(['title'])
</script>

<style lang="scss" scoped>

</style>