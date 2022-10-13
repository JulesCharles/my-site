<template>
  <div class="project-page">
    <NavBar />
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue'
export default {
  components: { NavBar }
}
</script>

<style lang="css" scoped>

/* .project-page {
  animation: fadeInAnimation ease 2s;
} */

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
</style>
