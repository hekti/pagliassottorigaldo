<template>
    <div class="min-h-full">
        <Header :conf="conf" />
        <div class="wrap-shadow"></div>
        <Info :title="`I nostri contatti`">
            <ul class="w-fit mx-auto mt-5">
                <li>
                    <span class="material-symbols-rounded">call</span> <a href="tel:+390115171224">+39 011 517 1224</a>
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
                    <span class="material-symbols-rounded">schedule</span> <span ref="el" ></span>
                </li>

            </ul>
        </Info>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const conf = {
    'bgLight': true,
    'bgImage': "p-5159.jpg",
    'bgGrad': ["darkGreen", "lightGreen"],
}

const hours = [
    [],
    [9, 13, 14.5, 17.5],
    [9, 13, 14.5, 17.5],
    [9, 13, 14.5, 17.5],
    [9, 13, 14.5, 17.5],
    [9, 13],
    [],
]

var date = new Date();
var today = date.getDay();
var current_hour = date.getHours() + date.getMinutes() / 60;
console.log(current_hour);

const weekDay = (i) => {
    switch (i) {
        case 0: return "Domenica";
        case 1: return "Lunedì";
        case 2: return "Martedì";
        case 3: return "Mercoledì";
        case 4: return "Giovedì";
        case 5: return "Venerdì";
        case 6: return "Sabato";
        default: return "" 
    }
}

const is_open = () => {    
    //check if the current hour is between opening (even positions) and closing (odd positions) hours
    for (var i = 0; i < hours[today].length - 1; i+=2) {
        if ((current_hour < hours[today][i+1] && current_hour > hours[today][i]) || (i % 2 != 0 && current_hour > hours[today][i])) {
            var hh = Math.floor(hours[today][i+1]);
            var mm = hours[today][i+1] - hh;
            if (mm < 10) mm = "0"+mm;
            return "<b>Aperto</b> Chiude alle "+hh+":"+mm;
        } else if (current_hour < hours[today][i]){
            // check if it is a infra-day break
            var hh = Math.floor(hours[today][i]);
            var mm = hours[today][i] - hh;
            if (mm < 10) mm = "0"+mm;
            return "<b>Chiuso</b> Apre alle "+hh+":"+mm;
        }
    }

    // check if tomorrow is open
    if( (typeof hours[today+1] !== 'undefined') && hours[today+1].length > 0){
        var hh = Math.floor(hours[today+1][0]);
        var mm = hours[today+1][0] - hh;
        if (mm < 10) mm = "0"+mm;
        return "<b>Chiuso</b> Apre domani alle "+hh+":"+mm;
    } else if ( (typeof hours[today+1] === 'undefined') && hours[0].length > 0) {
        var hh = Math.floor(hours[0][0]);
        var mm = hours[0][0] - hh;
        if (mm < 10) mm = "0"+mm;
        return "<b>Chiuso</b> Apre domani alle "+hh+":"+mm;
    }


    // today is closed, find next opening
    var i = today+2;
    while ( (typeof hours[i] === 'undefined') || hours[i].length == 0){
        if (typeof hours[i] === 'undefined') i = 0
        else i += 1
    }

    var hh = Math.floor(hours[i][0]);
    var mm = hours[i][0] - hh;
    if (mm < 10) mm = "0"+mm;
    return "<b>Chiuso</b> Apre "+weekDay(i)+" alle "+hh+":"+mm;
};

const el = ref();

onMounted(()=>{
    el.value.innerHTML = is_open();
})

</script>

<style scoped>
.material-symbols-rounded {
    @apply text-lg text-textDark mr-2
}

li {
    @apply my-3 flex items-center
}

.wrap-shadow {
    @apply fixed top-0 -z-10 bg-gradient-to-b from-darkYellow via-transparent to-transparent w-screen h-screen
}
</style>

