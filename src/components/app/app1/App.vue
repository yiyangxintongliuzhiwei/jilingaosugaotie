<template>
<app-template class="a1" appName="matrix">
  <left></left>
  <middle></middle>
  <right></right>
</app-template>
</template>
<script>
import './assets/scss/app.scss'
import Left from './views/left/Main.vue'
import Middle from './views/middle/Main.vue'
import Right from './views/right/Main.vue'

export default {
  data() {
    return {
    }
  },
  mounted() {
    bus.$on('changeRegion', (params) => {
      console.log(params);
    });
  },
  methods: {

  },
  components: {
    Left,
    Middle,
    Right
  }
}
</script>

<style>
@font-face {
  font-family: 'DigifaceWide';
  src: url('../../../assets/fonts/DigifaceWide.ttf');
}

@font-face {
  font-family: 'PixelLCD-7';
  src: url('../../../assets/fonts/PixelLCD-7.ttf')
}

.bounce-enter-active {
  animation: bounce-in .6s;
}

.bounce-leave-active {
  animation: bounce-out .4s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
    margin-left: 100%;
  }
  /*50% {
          transform: scale(1.5);
        }*/
  100% {
    margin-left: 0;
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    margin-left: 0;
    transform: scale(1);
  }
  /*50% {
          transform: scale(1.5);
        }*/
  100% {
    margin-left: -100%;
    transform: scale(0);
  }
}
</style>
