<template>
    <transition name="start">
        <div v-if="open" class="preloader">
            <h1>Taskio</h1>
        </div>
    </transition>
</template>


<script>
import { onMounted, ref } from 'vue'

export default {
  setup () {

    let open = ref(true);

    onMounted(() => {
        onload();
    })

    function onload(){
        setTimeout(() =>{
            open.value = false;
        }, 2000)  
    }

    return {
      open, 
      onload
    }
  }
}
</script>


<style scoped lang="scss">
.preloader{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 99;
    top: 0;
    left: 0;
}
//Animation
.start-enter-active,
.start-leave-active {
    transition: opacity 0.5s ease-in;
    h1{
        animation: zoomOut 1s ease;
    }
}
.start-enter-to,
.start-leave-to {
    opacity: 0;
}

@keyframes zoomOut {
    0% {
        transform: scale(1)
    }

    100% {
        transform: scale(0)
    }
}
</style>