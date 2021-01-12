<template>
  <div class="main">
    <Head />
    <Taskbar />
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Taskbar from "@/components/Taskbar.vue";

export default {
  components: {
    Head,
    Taskbar
  }
};
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .main {
    font-family: 'montserrat';
    color: #707070;
    background-color: #fdfdfd;
    max-width: 100%;
    height: 100vh;
    padding-left: clamp(2rem, 6vw, 16rem);
    padding-right: clamp(2rem, 6vw, 16rem);
    padding-top: clamp(2rem, 4vw, 6rem);
    display: flex;
    flex-direction: column;
  }
</style>
