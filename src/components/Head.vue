<template>
  <div class="head">
    <h1 @click="switchBack()" id="switch"> Taskio </h1>

    <div class="head__balls">
      <svg @click="animatePurple()" id="animationPurple" class="head__balls--ball" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <circle id="Ellipse_5" data-name="Ellipse 5" cx="10" cy="10" r="10" fill="#b19cf5"/>
      </svg>
 
      <svg @click="animateRed()" id="animationRed" class="head__balls--ball" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <circle id="Ellipse_6" data-name="Ellipse 6" cx="10" cy="10" r="10" fill="#f59c9c"/>
      </svg>
  
      <svg @click="animateGreen()" id="animationGreen" class="head__balls--ball" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <circle id="Ellipse_7" data-name="Ellipse 7" cx="10" cy="10" r="10" fill="#83cd9a"/>
      </svg>

      <svg @click="animateBlue()" id="animationBlue" class="head__balls--ball" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <ellipse id="Ellipse_8" data-name="Ellipse 8" cx="10" cy="10" r="10" ry="10" fill="#8fb4e0"/>
      </svg>
    </div>
  </div>
</template>

<script>
  export default{
    setup(){
      
      function switchBack(){
        document.getElementById("switch").style.color = "";
      }
      function animatePurple(){
        document.getElementById("animationPurple").style.animation = "animate 1s ease";
        document.getElementById("switch").style.color = "#b19cf5";
        setTimeout(function(){
              document.getElementById("animationPurple").style.animation = "";
        }, 1000);
      }

      function animateRed(){
        document.getElementById("animationRed").style.animation = "animate 1s ease";
        document.getElementById("switch").style.color = "#f59c9c";
        setTimeout(function(){
        	  document.getElementById("animationRed").style.animation = "";
        }, 1000);
      }

      
      function animateGreen(){
        document.getElementById("animationGreen").style.animation = "animate 1s ease";
        document.getElementById("switch").style.color = "#83cd9a";
        setTimeout(function(){
        	  document.getElementById("animationGreen").style.animation = "";
        }, 1000);
      }

      
      function animateBlue(){
        document.getElementById("animationBlue").style.animation = "animate 1s ease";
        document.getElementById("switch").style.color = "#8fb4e0";
        setTimeout(function(){
        	    document.getElementById("animationBlue").style.animation = "";
        }, 1000);
      }
  
      return{
        switchBack,
        animatePurple,
        animateRed,
        animateGreen,
        animateBlue
      }
    }
  }
</script>

<style scope lang="scss">
.head{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
   h1{
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    width: 75%;
    transition: all 1s ease;
  }
  .head__balls{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    .head__balls--ball{
      width: clamp(20px, 2vw, 60px);
      height: clamp(20px, 2vw, 60px);
      cursor: pointer;
    }
  }
}

//Animation class
@keyframes animate {
  0%{
    transform: translateY(0px) scale(1);

  }
  50%{
    transform: translateY(-25px) scale(1.25);
  }
  100%{
    transform: translateY(0px) scale(1);
  }
}
</style>

