<template>
    <div class="min-h-full">
        <Header :conf="conf" />
        <div class="wrap-shadow"></div>

        <div class="
        p-8
        m-3
        md:m-auto
        md:h-fit
        md:max-w-sm
        md:left-0
        md:right-0
        md:top-0
        md:bottom-0
        text-textLight
        fixed bottom-16
        ">
            <h2 class="text-4xl font-normal my-4">
                Perch&eacute;
                <br>
                sceglierci
            </h2>
            <p class="font-thin text-textLight text-opacity-80 text-sm drop-shadowxl">
                Competenza, etica, attenzione al cliente e innovazione continua per
                nuove opportunità di crescita
            </p>
            <NuxtLink to="services" class="btn-primary w-full box-border md:max-w-sm mx-auto">
                Servizi
            </NuxtLink>

        </div>

    </div>
</template>

<script setup>
const conf = {
    'bgLight': false,
    'bgImage': "p-5142.jpg",
    'bgGrad': ["darkGreen", "lightGreen"],
}
</script>

<style scoped>
.wrap-shadow {
    @apply fixed top-0 -z-10 bg-gradient-to-t from-textDark to-transparent w-screen h-screen
}
</style>
