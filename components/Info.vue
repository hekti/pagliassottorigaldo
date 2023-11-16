<template>
    <div class="
        fixed
        bottom-24
        left-3
        right-3
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
        md:max-w-sm
        md:right-0
        md:top-0
        md:h-fit
        md:m-auto
        md:p-7
        md:left-0
        md:bottom-0
    ">
        <h3 class="font-bold capitalize container text-left text-xl mt-5">{{ title }}</h3>
        <slot />
    </div>
</template>

<script setup>
    const { title } = defineProps(['title'])
</script>

<style lang="scss" scoped>

</style>
