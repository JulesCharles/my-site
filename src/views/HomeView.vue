<template>
  <div class="home-ctn">
    <WelcomeCompo />
    <ViewProject />
  </div>
</template>

<script>
import WelcomeCompo from '../components/welcome/WelcomeCompo.vue'
import ViewProject from './ViewProject.vue'

export default {
  name: 'HomeView',
  components: {
    WelcomeCompo,
    ViewProject
  }
}
</script>

<style lang="css" scoped>
.home-ctn{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway-semibold";
}
</style>
