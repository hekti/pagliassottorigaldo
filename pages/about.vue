<template>
    <div class="min-h-full">
        <Header :conf="conf" />
        <div class="wrap-shadow"></div>
        <Info :title="`Lo studio Pagliasotto`">
            <p class=" my-3 flex items-center justify-end"><span>clienti soddisfatti</span> <span
                    class="material-symbols-rounded text-yellow-500 ml-2 -mt-2"> star </span> <b class="text-lg">5.0</b>
            </p>

            <p>Come studio, offriamo un servizio personalizzato e attento ai nostri clienti, garantendo professionalità, tempestività e precisione in ogni attività. Il nostro obiettivo è supportare la crescita delle PMI del settore <b>ICT</b>, delle imprese non delocalizzabili, delle <b>start-up</b>, e degli enti <b>no profit</b> di media dimensione, così come fornire assistenza a professionisti, associazioni professionali e STP dell'area medica e a privati con patrimoni immobiliari sia in Italia che all'estero. </p><br><p>Siamo impegnati nell'<b>aggiornamento professionale continuo</b> e nell'innovazione per garantire sempre il massimo livello di servizi ai nostri clienti.</p>

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