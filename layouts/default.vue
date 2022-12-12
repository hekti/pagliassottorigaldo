<template>
  <Swipe class="h-screen w-screen">
    <slot />
    <Menu />
  </Swipe>
</template>

<style>
.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 200ms linear;
}

.page-left-enter-from,
.page-right-leave-to {
  transform: translateX(100%);
}

.page-left-leave-to,
.page-right-enter-from {
  transform: translateX(-100%);
}

.page-left-enter-to,
.page-right-enter-to {
  transform: translateX(0);
}
</style>

<script setup>
import { useNuxtApp, useRoute, navigateTo } from '#app'

const nuxtApp = useNuxtApp()
const routes = ['/', '/services', '/about', '/contacts']

nuxtApp.$bus.$on('swipe', (direction) => {
    let indexCurrentRoute = routes.indexOf(useRoute().path)
    if (direction === 'left' && routes[indexCurrentRoute + 1]) {
        indexCurrentRoute += 1
    }
    if (direction === 'right' && routes[indexCurrentRoute - 1]) {
        indexCurrentRoute -= 1
    }
    return navigateTo(routes[indexCurrentRoute])
})

</script>