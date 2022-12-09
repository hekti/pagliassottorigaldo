<template>
  <div id="touchable">
    <slot />
    <Menu />
  </div>
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

<script>

import TouchEvent from '@/TouchEvent'

let touchEvent = null;

document.addEventListener('touchstart', (event) => {
  touchEvent = new TouchEvent(event);
});

document.addEventListener('touchend', handleSwipe);

function handleSwipe(event) {
  if (!touchEvent) {
    return;
  }

  touchEvent.setEndEvent(event);

  if (touchEvent.isSwipeRight()) {
    // Do something
  } else if (touchEvent.isSwipeLeft()) {
    // Do something different
  }

  // Reset event for next touch
  touchEvent = null;
}

</script>