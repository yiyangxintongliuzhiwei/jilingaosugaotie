<template>
  <app-template class="a1" appName="matrix">
    <div is="v11"></div>
    <div is="v21"></div>
    <div is="v31"></div>
  </app-template>
</template>
<script>
  import './assets/scss/app.scss';
  import v11 from './views/v11/v11.vue';
  import v21 from './views/v21/v21.vue';
  import v31 from './views/v31/v31.vue';
  export default {
    mounted() {
      document.title = '吉林高速大屏';
    },
    components: {
      v11,
      v21,
      v31
    }
  }
</script>
