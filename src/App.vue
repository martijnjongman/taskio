<template>
  <div class="main">
    <div class="main__preloader">
      <Preloader />
    </div>
    <div class="main__header">
      <Head />
    </div>
    <div class="main__tasks">
      <Taskbar />
    </div>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader.vue";
import Head from "@/components/Head.vue";
import Taskbar from "@/components/Taskbar.vue";

export default {
  components: {
    Preloader,
    Head,
    Taskbar
  }
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  font-family: "montserrat";
  color: #707070;
  background-color: $background;
  max-width: 100vw;
  height: 100vh;
  padding-left: clamp(2rem, 6vw, 16rem);
  padding-right: clamp(2rem, 6vw, 16rem);
  padding-top: clamp(2rem, 4vw, 6rem);
  display: flex;
  flex-direction: column;
  .main__header {
    flex: none;
  }
  .main__tasks {
    display: flex;
    flex-direction: column;
    flex: auto;
  }
}
</style>
