<template>
    <BackGround/>
  <div class="text">
      <span>
        {{ presentationTexte.hello['en-US']}}
      </span>
      <span class="text-color">
        {{ presentationTexte.name['name-NAME']}}
      </span>
      <span>
        <br>{{presentationTexte.front['front-FRONT']}}
        <span>
          {{presentationTexte.web['web-WEB']}}
        </span>
        <br>
      </span>
    </div>
</template>

<script>
import BackGround from '../backGround.vue'
export default {
  data  () {
    return {
      presentationTexte: {
        hello: {
          'en-US': "Hello, I'm"
        },
        name: {
          'name-NAME': 'Jules Charles.'
        },
        front: {
          'front-FRONT': "I'm a front-end"
        },
        web: {
          'web-WEB': 'web developer'
        }
      }
    }
  },
  components: { BackGround }
}
</script>

<style lang="css" scoped>

.text {
  color: #FAFAFA;
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
  box-shadow: inset 0 0 0 0 #e31b6d;
  transition: color .8s ease-in-out, box-shadow .8s ease-in-out;
}
.text-color:hover {
  box-shadow: inset 320px 0 0 0 #e31b6d;
  color: #FAFAFA;
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

span:nth-child(4) {
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
