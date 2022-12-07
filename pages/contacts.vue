<template>
    <div>
        <Header :conf="conf" />
        <Info :title="`I nostri contatti`">
            <ul class="w-fit mx-auto mt-5">
                <li>
                    <span class="material-symbols-rounded">call</span> <a href="tel:+393427003628">+39 342 700 3628</a>
                </li>
                <li>
                    <span class="material-symbols-rounded">mail</span> <a
                        href="mailto:studiopagliassotto">info@studiopagliassotto.com</a>
                </li>
                <li>
                    <span class="material-symbols-rounded">location_on</span> <a href="link_to_maps">Torino, Corso
                        Vinzaglio, 29</a>
                </li>
                <li>
                    <span class="material-symbols-rounded">schedule</span> <span> <b>Chiuso</b> Apre domani alle
                        9:00</span>
                </li>

            </ul>
        </Info>
    </div>
</template>

<script setup>

const conf = {
    'bgLight': true,
    'bgImage': "p-5159.jpg",
    'bgGrad': ["darkGreen", "lightGreen"],
}


</script>

<style scoped>
.material-symbols-rounded {
    @apply text-lg text-textDark mr-2
}

li {
    @apply my-3 flex items-center
}
</style>

