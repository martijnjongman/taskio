<template>
  <div class="head">
    <h1> Taskio </h1>

    <div class="balls">
      <svg class="ball" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <circle id="Ellipse_5" data-name="Ellipse 5" cx="10" cy="10" r="10" fill="#b19cf5"/>
      </svg>
 
      <svg class="ball" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <circle id="Ellipse_6" data-name="Ellipse 6" cx="10" cy="10" r="10" fill="#f59c9c"/>
      </svg>
  
      <svg class="ball" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <circle id="Ellipse_7" data-name="Ellipse 7" cx="10" cy="10" r="10" fill="#83cd9a"/>
      </svg>

      <svg class="ball" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <ellipse id="Ellipse_8" data-name="Ellipse 8" cx="10" cy="10" rx="10.5" ry="10" fill="#8fb4e0"/>
      </svg>
    </div>
  </div>
</template>

<style scope lang="scss">
.head{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h1{
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    width: 75%;
  }
  .balls{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    .ball{
      width: clamp(20px, 2vw, 60px);
      height: clamp(20px, 2vw, 60px);
    }
  }
}
</style>
