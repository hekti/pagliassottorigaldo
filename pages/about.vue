<template>
    <div class="min-h-full flex flex-col pb-36">
        <Header :conf="conf" />
        <div class="wrap-shadow"></div>
        <Info>
            <p class="
            my-3
            flex
            items-center
            justify-end
            ">
                <span>clienti soddisfatti</span>
                <span class="material-symbols-rounded text-yellow-500 ml-2 -mt-2"> star </span>
                <b class="text-lg">5.0</b>
            </p>

            <p>
            Lo Studio Pagliassotto Rigaldo nasce nel 1996 e si avvale
            dell'esperienza ultra trentennale di commercialisti specializzati in
            consulenza societaria, fiscale, amministrativa-contabile utilizzando le
            soluzioni tecnologiche più all'avanguardia.
            </p>
            <br>
            <p>
            Abbiamo consolidati rapporti con professionisti esperti in diritto
            civile e penale, diritto fallimentare e gestione delle paghe e
            contributi, per supportare il cliente in ogni sua necessità.
            </p>
            <br>
            <p>
            Ci distinguiamo per la combinazione unica di dinamismo, innovazione,
            competenza, etica. Il nostro scopo è offrire soluzioni ai clienti con
            professionalità e affidabilità. Siamo pronti a mettere la nostra
            esperienza e competenza al vostro servizio.
            </p>

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
