<template>
    <div>
        <Header :conf="conf" />
        <div class="mx-3 md:max-w-4xl md:mx-auto p-5">
            <h2 class="text-textDark text-xl md:text-2xl font-semibold mb-5 md:mb-7">Servizi</h2>
            <div class="column-1 md:columns-2 gap-10 md:gap-36 pb-8 md:pb-11">
                <div v-for="service in services" class="break-inside-avoid-column cursor-pointer">
                    <Card class="card" :service="service" @click="showService = service.title"/>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const services =
    [
        { title: 'Contabilità e consulenza amministrativa', description: ' loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non molestie augue, sed lacinia nisl. Aenean tincidunt euismod facilisis. Ut facilisis vehicula accumsan. Cras sapien purus, semper ac dolor sit amet, imperdiet facilisis erat. Aliquam mauris est, porttitor ut lacus vel, pharetra elementum dui. Nulla facilisi.  ', image: 'services/1.jpg' },
        { title: 'Bilanci e consulenza societaria, comprese le operazioni straordinarie', price: '350', image: 'services/2.jpg' },
        { title: 'Consulenza Contabile e Tenuta Contabilità', description: ' loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non molestie augue, sed lacinia nisl. Aenean tincidunt euismod facilisis. Ut facilisis vehicula accumsan. Cras sapien purus, semper ac dolor sit amet, imperdiet facilisis erat. Aliquam mauris est, porttitor ut lacus vel, pharetra elementum dui. Nulla facilisi.  ', image: 'services/3.jpg' },
        { title: 'Consulenza fiscale', description: ' loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non molestie augue, sed lacinia nisl. Aenean tincidunt euismod facilisis. Ut facilisis vehicula accumsan. Cras sapien purus, semper ac dolor sit amet, imperdiet facilisis erat. Aliquam mauris est, porttitor ut lacus vel, pharetra elementum dui. Nulla facilisi.  ', image: 'services/4.jpg' },
        { title: 'Consulenza a privati', description: ' loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non molestie augue, sed lacinia nisl. Aenean tincidunt euismod facilisis. Ut facilisis vehicula accumsan. Cras sapien purus, semper ac dolor sit amet, imperdiet facilisis erat. Aliquam mauris est, porttitor ut lacus vel, pharetra elementum dui. Nulla facilisi.  ', image: 'services/5.jpg' },
        { title: 'Settore no profit: associazioni con o senza personalità giuridica, enti sportivi fondazioni', description: ' loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non molestie augue, sed lacinia nisl. Aenean tincidunt euismod facilisis. Ut facilisis vehicula accumsan. Cras sapien purus, semper ac dolor sit amet, imperdiet facilisis erat. Aliquam mauris est, porttitor ut lacus vel, pharetra elementum dui. Nulla facilisi.  ', image: 'services/6.jpg' },
        { title: 'Start-up, professionisti area medica, imprese edili', description: ' loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non molestie augue, sed lacinia nisl. Aenean tincidunt euismod facilisis. Ut facilisis vehicula accumsan. Cras sapien purus, semper ac dolor sit amet, imperdiet facilisis erat. Aliquam mauris est, porttitor ut lacus vel, pharetra elementum dui. Nulla facilisi.  ', image: 'services/7.jpg' }
    ]
const conf = {
    bgLight: true,
    bgImage: false,
    bgImageAlt: "Il Team Pagliassotto"
}


</script>

<style scoped>
    .card{
        break-inside: avoid-column;
    }



</style>