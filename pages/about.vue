<template>
    <div>
        <Header :conf="conf" />
        <Info :title="`Lo studio Pagliasotto`">
            <p class=" my-3 flex items-center justify-end"><span>+500 clienti soddisfatti</span> <span
                    class="material-symbols-rounded text-yellow-500 ml-2 -mt-2"> star </span> <b class="text-lg">4.9</b>
            </p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, officiis modi. <br><br>Veritatis
                dolorum fuga quam porro optio deleniti. Ut placeat voluptate quisquam quaerat dolore nisi consectetur
                repellendus assumenda hic quia.</p>

            <NuxtLink to="contacts" class="btn-primary">
                Contattaci
            </NuxtLink>
        </Info>
    </div>
</template>

<script setup>

const conf = {
    bgLight: true,
    bgImage: "p-5172.jpg",
    bgImageAlt: "Il Team Pagliassotto"
}

</script>

<style scoped>

</style>