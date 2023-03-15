<template>
    <div>
        <Header :conf="conf" />
        <div class="mx-3 md:max-w-4xl md:mx-auto p-5">
            <h2 class="text-textDark text-xl md:text-2xl font-semibold mb-5 md:mb-7">Servizi</h2>
            <div class="column-1 md:columns-2 gap-10 md:gap-36 pb-8 md:pb-11">
                <div v-for="service in services" class="break-inside-avoid-column cursor-pointer">
                    <Card class="card" :service="service" @click="showService = service.title" />
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const services =
    [
        {
            title: 'Contabilità e consulenza amministrativa',
            image: 'services/1.jpg',
            description: '\
                <li> Tenuta contabilità con l\'utilizzo di sistemi informatici evoluti </li> \
                <li> Predisposizione bilanci societari </li>\
                <li> Condivisione documentazione on line </li> \
                <li> Assistenza e supporto a favore dei reparti amministrativi aziendali </li> \
                <li> Elaborazione budget e business-plan </li> \
                <li> Check- up e due- diligence contabili </li> \
                <li> Assistenza trasformazione digitale reparto contabile </li> \
                <li> Domiciliazione Società </li> \
            '},
        {
            image: 'services/2.jpg',
            description: '\
                <li> Dichiarazione dei redditi </li>\
                <li> Gestione adempimenti imu </li>\
                <li> Assistenza contratti di locazione </li>\
                <li> Sistemazioni patrimoniali, analisi imposte successioni e donazioni </li>\
                <li> Società semplici per intestazioni patrimoni </li>\
                <li> Dichiarazioni di successione </li>\
            ',
            title: 'Consulenza a privati'
        },
        {
            title: 'Revisione legale e consulenza societaria',
            image: 'services/3.jpg',
            description: '\
                <li> Attività di Sindaco e Revisione legale </li> \
                <li> Analisi adeguati assetti organizzativi </li> \
                <li> Elaborazione indicatori crisi d\'impresa </li> \
                <li> Assistenza per la costituzione di società capitali e persone </li> \
                <li> Consulenza per operazioni straordinarie trasformazioni, fusioni, scissioni </li> \
                <li> Cessioni d\'azienda </li> \
                <li> Liquidazione e cessazione di società </li> \
                <li> Perizie e valutazioni di aziende e quote societarie     </li> \
        '},
        {
            title: 'Settore no profit:  ETS, associazioni, enti sportivi, fondazioni',
            image: 'services/4.jpg',
            description: '\
                <li> Assistenza in fase di costituzione, redazione Statuti </li> \
                <li> Bilanci enti terzo settore </li> \
                <li> Attività dell\'organo di controllo, Revisione Legale </li> \
                <li> Assistenza fiscale, regimi fiscali agevolati enti no profit </li> \
                <li> Passaggio a regime Enti Terzo Settore (ETS) </li> \
                <li> Contabilità ETS </li> \
                <li> Assistenza adempimenti RUNTS </li> \
        '},
        {
            title: 'Professionisti',
            image: 'services/5.jpg',
            description: '\
                <li> Consulenza in fase di inizio attività </li> \
                <li> Apertura partiva iva </li> \
                <li> Regime forfettario e altri regimi agevolati </li> \
                <li> Consulenza e assistenza studi professionali associati </li> \
                <li> Assistenza contabile e fiscale </li> \
                <li> Consulenza per costituzione e gestione STP </li> \
            '},
        {
            title: 'Consulenza fiscale per le imprese',
            image: 'services/6.jpg',
            description: '\
            <li> Assistenza per inizio attività e scelta del regime fiscale </li>\
            <li> Regime forfettario e altri regimi agevolati </li>\
            <li> Pianificazione per ottimizzazione carico fiscale </li>\
            <li> Elaborazione dichiarazioni fiscali Redditi, Iva e sostituti d\'imposta </li>\
            <li> Fatturazione elettronica con piattaforma dedicata </li>\
            <li> Check- up e due- diligence fiscali </li>\
            <li> Assistenza per rimborso o compensazione credito Iva </li>\
            <li> Consulenza  su problematiche fiscali specifiche </li>\
            '},
        {
            title: 'Specializzazioni',
            image: 'services/7.jpg',
            description: '\
            <li> Società Benefit </li>\
            <li> Start-up </li>\
            <li> Area Medica, </li>\
            <li> Imprese edili </li>\
            <li> Imprese ICT </li>\
            '
        }
    ]
const conf = {
    bgLight: true,
    bgImage: false,
    bgImageAlt: "Il Team Pagliassotto"
}


</script>

<style scoped>.card {
    break-inside: avoid-column;
}</style>