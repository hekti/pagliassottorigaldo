<template>
    <div class="
        p-5
        backdrop-blur
        lightBackground
        rounded-2xl
        text-textDark
        text-sm
        font-normal
        drop-shadow-md
        border
        semitransparentBorder
        m-auto
        w-screen
        max-w-sm
        md:h-fit
        md:p-7
    ">
        <h3
            v-if="title"
            class="
            font-bold
            capitalize
            container
            text-left
            text-xl
            mt-5
        ">{{ title }}</h3>
        <slot />
    </div>
</template>

<script setup>
    const { title } = defineProps(['title'])
</script>

<style lang="scss" scoped>

</style>
