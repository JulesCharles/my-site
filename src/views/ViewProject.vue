<template>
  <div class="project-page">
    <router-link to = '/'>
      <div class="return-home">HOME</div>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>

.project-page {
  animation: fadeInAnimation ease 2s;
}
.return-home {
  color: white;
}

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
</style>
