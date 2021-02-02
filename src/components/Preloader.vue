<template>
    <transition name="start">
        <div v-if="open" class="preloader">
            <div class="preloader__purple"></div>
            <div class="preloader__red"></div>
            <div class="preloader__green"></div>
            <div class="preloader__blue"></div>
            <div class="preloader__text">
                <h2>Taskio</h2>
                <h1>Welcome</h1>
            </div>
        </div>
    </transition>
</template>


<script>
import { onMounted, ref } from 'vue'

export default {
  setup () {

    const open = ref(true);

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


<style lang="scss">
 @import "@/assets/variables.scss";

.preloader{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $background;
    z-index: 99;
    top: 0;
    left: 0;
    overflow: hidden;
    h2{
        color:#D9D9D9;
    }
}
.preloader__text{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: fadeIn 4s ease 500ms forwards;
}
@keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
}
.preloader__purple{
    position: absolute;
    transition: ease all .2s;
    width: 60vw;
    height: 65vh;
    background-color: $purple;
    border-radius: 65px;
    transform: rotate(40deg);
    top: -30vh;
    left: -15vw;
    animation: slideInPurple 0.5s ease; 
}
@keyframes slideInPurple {
    0% {
         opacity: 0;
         transform: translate(25px);
    }
    100% {
         opacity: 1;
    }
}
.preloader__red{
    position: absolute;
    transition: ease all .2s;
    width: 80vw;
    height: 80vh;
    background-color: $red;
    border-radius: 65px;
    transform: rotate(120deg);
    top: -20vh;
    left: 90vw;
    animation: slideInRed 0.75s ease;
}
@keyframes slideInRed {
    0% {
         opacity: 0;
         transform: translate(25px);
    }
    100% {
         opacity: 1;
    }
}
.preloader__green{
    position: absolute;
    transition: ease all .2s;
    width: 80vw;
    height: 80vh;
    background-color: $green;
    border-radius: 65px;
    transform: rotate(130deg);
    top: 40vh;
    left: -80vw;
    animation: slideInGreen 1s ease;
}
@keyframes slideInGreen {
    0% {
         opacity: 0;
         transform: translate(25px);
    }
    100% {
         opacity: 1;
    }
}
.preloader__blue{
    position: absolute;
    transition: ease all .2s;
    width: 80vw;
    height: 80vh;
    background-color: $blue;
    border-radius: 65px;
    transform: rotate(115deg);
    top: 65vh;
    left: 90vw;
    animation: slideInBlue 1.25s ease;
}
@keyframes slideInBlue {
    0% {
         opacity: 0;
         transform: translate(25px);
    }
    100% {
         opacity: 1;
    }
}
//Media queries
//Tablet landscape
@media (min-width: 800px) {
    .preloader__purple{
        top: -40vh;
        left: -20vw; 
    }
    .preloader__red{
        top: -60vh;
        left: 60vw; 
    }
    .preloader__green{
        top: 90vh;
        left: -35vw; 
    }
    .preloader__blue{
        top: 95vh;
        left: 50vw; 
    }
}//Small Laptop
@media (min-width: 1439px) {
    .preloader__purple{
        top: -50vh;
        left: -30vw; 
    }
    .preloader__red{
        top: -70vh;
        left: 65vw; 
    }
    .preloader__green{
        top: 100vh;
        left: -40vw; 
    }
    .preloader__blue{
        top: 110vh;
        left: 50vw; 
    }
}
//Text size 4K
@media (min-width: 3839px) {
    h1{
        font-size: 6rem;
    }
    h2{
        font-size: 4rem;
    }
}
//Animation
.start-enter-active,
.start-leave-active {
    transition: opacity 0.5s ease-in;
    h1, h2{
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