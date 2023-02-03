<template>
    <div class="min-h-full">
        <Header :conf="conf" />
        <div class="wrap-shadow"></div>
        <Info :title="`Lo studio Pagliasotto`">
            <p class=" my-3 flex items-center justify-end"><span>clienti soddisfatti</span> <span
                    class="material-symbols-rounded text-yellow-500 ml-2 -mt-2"> star </span> <b class="text-lg">5.0</b>
            </p>

            <p>Lo studio offre un servizio attento e personalizzato ai propri clienti, garantendo <strong>professionalità, tempestività e precisione</strong> in ogni attività svolta.</p>
            <br>
            <p>L'obiettivo è quello di fornire un supporto continuo alla crescita delle PMI del settore <b>ICT</b>, delle imprese non delocalizzabili, delle <b>start-up</b> e degli <b>enti no profit</b> di media dimensione. Inoltre, lo studio offre assistenza a professionisti, associazioni professionali e STP dell'<b>area medica</b>, a privati con <b>patrimoni immobiliari</b> sia in Italia che all'estero.</p>
            <br>
            <p>L'aggiornamento professionale continuo e l'innovazione sono al centro della filosofia dello studio Pagliasotto-Rigaldo, per garantire sempre il massimo livello di servizi ai propri clienti.</p>

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
.wrap-shadow {
    @apply fixed top-0 -z-10 bg-gradient-to-b  from-darkYellow via-transparent to-transparent w-screen h-screen
}
</style>