<template>
    <div>
        <Header :conf="conf" />
        <div class="mx-3 md:max-w-lg md:mx-auto p-5">
            <h2 class="text-textLight text-xl md:text-2xl font-semibold mb-5 md:mb-7">Servizi</h2>
            <div class="columns-2 gap-10 md:gap-20 pb-8">
                <div v-for="service in services">
                    <Card class="card" :service="service" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const services =
    [
        { title: 'Crisi d\'impresa ', price: '250', image: 'p-5172.jpg' },
        { title: 'Generale amministrazione', price: '350', image: 'p-5077.jpg' },
        { title: 'Consulenza Contabile e Tenuta Contabilità', price: '250', image: 'p-5142.jpg' },
        { title: 'fiscalita', price: '250', image: 'p-5136.jpg' },
        { title: 'fiscalita', price: '250', image: 'p-5161.jpg' },
    ]
const conf = {
    bgLight: false,
    bgImage: false,
    bgImageAlt: "Il Team Pagliassotto"
}


</script>

<style scoped>
    .card{
        break-inside: avoid-column;
    }
</style>