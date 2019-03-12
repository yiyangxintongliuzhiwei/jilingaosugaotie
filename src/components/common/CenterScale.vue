<template>
  <div class="iframe-container">
    <iframe class="view-iframe" v-for="(item,index) in frameList" :style="{transform:'scale(' + item.scale + ',' + item.scale + ')'}" key="index" :src="item.url" :width="item.width" :height="item.height" frameborder=0 scrolling=0></iframe>
  </div>
</template>

<script>
  export default {
    props: {
      frameList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  .iframe-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 4800px;
    height: 1200px;
    z-index: 10000;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
  }
  
  .view-iframe-item {
    margin: 0 20px;
  }
</style>
