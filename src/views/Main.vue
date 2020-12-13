<template>
  <div class="task">
    <Head />
    <Taskbar />
    <Tasks />
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Taskbar from "@/components/Taskbar.vue";
import Tasks from "@/components/Tasks.vue"

export default {
  components: {
    Head,
    Taskbar,
    Tasks
  }
};
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .task {
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
