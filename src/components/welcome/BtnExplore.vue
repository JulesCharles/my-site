<template>
<a href="./index.html#project" class="header__link">
<div class="btn-explo">
  <div class="texte">{{explore['en-US']}}
    <img src="../../assets/Groupe4136.png" />
  </div>
</div>
</a>
</template>

<script>
export default {
  data () {
    return {
      explore: {
        'en-US': 'Explore my profil'
      }
    }
  }
}
</script>

<style lang="css" scoped>

.btn-explo {
  border: 1px solid #FAFAFA;
  width: 22vw;
  height: 3.5vh;
  position: absolute;
  margin-left: 12.5rem;
  top: 2rem;
  font-size: 14pt;
}

.texte {
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
  color: #FAFAFA;
}

img {
width: 30px;
height: 15px;
filter: invert(100%);
position: absolute;
right: 15px;
top: 17px;
transform: rotateZ(90deg);
}
</style>
