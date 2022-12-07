<template>
    <div>
        <Header :conf="conf" />
        <div class="wrap-shadow"></div>

        <div class="p-5 m-3 md:mx-auto md:max-w-lg md:left-0 md:right-0 text-textLight fixed bottom-32">
            <h2 class="text-6xl font-normal my-4">Lorem<br> Ipsum</h2>
            <p class="font-thin text-textLight text-opacity-80 text-sm drop-shadowxl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti alias ducimus eum, rem inventore ipsa
                soluta nobis, quo suscipit, sapiente quibusdam iste? Magnam quaerat libero expedita nulla a consectetur
                assumenda.</p>
            
            <p class="font-thin text-textLight text-opacity-80 text-sm drop-shadowxl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni numquam molestiae qui dicta rerum similique veritatis voluptatibus. Itaque harum sapiente ex eveniet maxime iure eaque neque veritatis, pariatur, iste similique.</p>


        </div>
        
    </div>
</template>

<script setup>
const conf = {
    'bgLight': false,
    'bgImage': "p-5142.jpg",
    'bgGrad': ["darkGreen", "lightGreen"],
}

</script>

<style scoped>
.wrap-shadow {
    @apply fixed top-0 -z-10 bg-gradient-to-t from-textDark to-transparent w-screen h-screen
}
</style>