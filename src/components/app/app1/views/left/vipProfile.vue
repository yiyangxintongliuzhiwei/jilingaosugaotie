<!--left -->
<template>
<view-template  class='vipProfile'>
   <div class='vipProfileTitle'>场景概况</div>
   <div class='vipProfileDiv1'>保障区域：{{currentArea}}</div>
   <div class='vipProfileDiv2'>{{currentAreaInfo}}
   </div>
</view-template>
</template>

<script>
export default {
  name: '',
  props: [],
  data() {
    return {
      currentArea: '全省',
      currentAreaInfo: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      bus.$on('REGION_NAME', this.changeRegion)
    })
    this.initData()
  },
  methods: {
    initData() {
      this.$http.indi.get('j0030', { region_name: '全省' }, res => {
        console.log(res.data.data[0])
        this.currentArea = res.data.data[0].REGION_NAME
        this.currentAreaInfo = res.data.data[0].AREA_DESCRIPTION
      })
    },
    changeRegion(regionName) {
      this.currentArea = regionName
      if (regionName) {
        this.$http.indi.get('j0030', { region_name: regionName }, res => {
          this.currentAreaInfo = res.data.data[0].AREA_DESCRIPTION
        })
      }
    }
  },
  beforeDestroy() {},
  components: {}
}
</script>
