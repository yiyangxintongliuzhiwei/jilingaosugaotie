<!--left -->
<template>
<view-template  id="left" >
  <vip-profile></vip-profile>
  <resource></resource>
  <alarm></alarm>
</view-template>
</template>

<script>
import './Main.scss'
import vipProfile from './vipProfile'
import resource from './resourceProfile'
import alarm from './alarmMornitor'
export default {
  name: '',
  props: [],
  data() {
    return {}
  },
  mounted() {
    this.$nextTick(() => {
      bus.$on('changeRegion', 'from left')
    })
  },
  beforeDestroy() {},
  components: {
    vipProfile,
    resource,
    alarm
  }
}
</script>
