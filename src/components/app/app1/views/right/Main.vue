<!--left -->
<template>
<view-template   id="right">
  <indicator></indicator>
  <bus-volme></bus-volme>
</view-template>
</template>

<script>
import './Main.scss'
import indicator from './indicator.vue'
import busVolme from './businessVolume.vue'
export default {
  name: '',
  props: [],
  data() {
    return {}
  },
  mounted() {},
  beforeDestroy() {},
  components: {
    indicator,
    busVolme
  }
}
</script>
