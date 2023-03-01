<template >
    <div class="fixed bottom-3 right-3 left-3 p-5 py-4 md:py-3 h-fit rounded-2xl lightBackground md:w-fit max-w-screen-sm mx-auto border semitransparentBorder backdrop-blur-md z-15">
        <ul class="flex justify-around items-center">
            <li class="h-fit">
                <NuxtLink to="/" class="h-fit">
                    <span class="material-symbols-rounded align-middle">home</span>
                </NuxtLink>
                <div class="semitransparentBorder">Home</div>
            </li>
            <li>
                <NuxtLink to="/services">
                    <span class="material-symbols-rounded align-middle">file_copy</span>
                </NuxtLink>
                <div class="semitransparentBorder">Servizi</div>
            </li>
            <li>
                <NuxtLink to="/about">
                    <span class="material-symbols-rounded align-middle">group</span>
                </NuxtLink>
                <div class="semitransparentBorder">Chi siamo</div>
            </li>
            <li>
                <NuxtLink to="/contacts">
                    <span class="material-symbols-rounded align-middle"> chat_bubble </span>
                </NuxtLink>
                <div class="semitransparentBorder">Contatti</div>
            </li>
        </ul>
    </div>
</template>


<style  scoped>
    span{
        @apply align-middle;
    }
    li {
        @apply relative mx-6 text-center
    }




    li > a > span{
        @apply  font-light md:text-3xl text-textDark;
    }


    li > a > span::before{
        @apply content-[''] w-1 h-1 bg-textDark -bottom-2 absolute rounded-full left-1/2 right-1/2 mx-auto -translate-x-1/2 hidden
    }



    li > div{
        @apply hidden absolute bottom-16 right-1/2 left-1/2 px-2 py-1 text-center rounded-lg text-textDark h-fit w-fit bg-textLight border whitespace-nowrap mx-auto -translate-x-1/2 drop-shadow-sm;
    }

    li > div::before{
        @apply content-[''] absolute -bottom-1 w-2 h-2 left-0 right-0 rotate-45 bg-textLight -z-20 mx-auto
    }

    li:hover > div{
        @apply md:block
    }
    li > .router-link-exact-active > span::before{
        @apply block;
    }
</style>

<script>

</script>