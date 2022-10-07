<template>
  <div class="home-ctn">
    <WelcomeCompo />
  </div>
</template>

<script>
import WelcomeCompo from '../components/welcome/WelcomeCompo.vue'

export default {
  name: 'HomeView',
  components: {
    WelcomeCompo
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
