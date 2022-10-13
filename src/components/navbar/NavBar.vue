<template>
  <div class="nav-ctn">
    <div class="flex-nav">
      <div class="nav">
      <a href="./index.html" class="header__link">Home</a>
      <a href="./index.html#about" class="header__link">About</a>
      <a href="./index.html#project" class="header__link">Projects</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.nav-ctn {
  width: 100%;
  height: 7vh;
  color: white;
  background-color: #FAFAFA;
}

.flex-nav {
width: 95%;
height: 100%;
display: flex;
justify-content: flex-end;
}
.nav {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header__link {
  color: black;
  text-decoration: none;
  font-size: 1.7rem;
  font-family: 'Raleway-SemiBold'
}

</style>
