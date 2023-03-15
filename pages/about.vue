<template>
    <div class="min-h-full">
        <Header :conf="conf" />
        <div class="wrap-shadow"></div>
        <Info :title="`Lo studio Pagliasotto`">
            <p class=" my-3 flex items-center justify-end"><span>clienti soddisfatti</span> <span
                    class="material-symbols-rounded text-yellow-500 ml-2 -mt-2"> star </span> <b class="text-lg">5.0</b>
            </p>

            <p>Da sempre attenti alla formazione e all'aggiornamento professionale
continuo offriamo un servizio personalizzato ed attento alle esigenze
dei clienti. Assistiamo le aziende sin dalla fase di start-up, per la
gestione ordinaria e per quella straordinaria. Il nostro settore
dedicato alla clientela privata fornisce assistenza in materia fiscale,
contrattuale di sistemazione patrimoniale anche in fase successoria.
</p><br><p>
Abbiamo consolidati rapporti con professionisti esperti in diritto
civile e penale, diritto fallimentare e gestione delle paghe e
contributi, per supportare il cliente in ogni sua necessit&agrave;.</p>

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