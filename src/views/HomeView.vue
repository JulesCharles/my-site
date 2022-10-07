<template>
  <div class="home-ctn">
    <div class="text"><span>{{ presentationTexte.hello['en-US']}}</span>
      <span class="text-color">{{ presentationTexte.name['name-NAME']}}</span>
      <span><br>{{presentationTexte.front['front-FRONT']}}<br></span></div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  data () {
    return {
      presentationTexte: {
        hello: {
          'en-US': "Hello, I'm"
        },
        name: {
          'name-NAME': 'Jules Charles.'
        },
        front: {
          'front-FRONT': "I'm a front-end web developer"
        }
      }
    }
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

.text {
  font-size: 32pt;
  line-height: 36pt;
  font-family: "Raleway-semibold";
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}

.text-color {
  color: #e31b6d;
  font-family: "Raleway-semibold";
  margin-left: 0.8rem;
}

span {
  opacity: 0;
  filter: blur(4px);
}

span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}
@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

@keyframes scale {
  100% {
    transform: scale(1);
  }
}
</style>
