<!--left -->
<template>
<view-template  class='alarmMonitor'>
  <div class='alarmMonitorTitle'>告警监控</div>
   <div class='alarmMonitor1'>
      <counter :data='val1' :config='indexNumConfig1'></counter>
   </div>
   <div class='g2-label'>2G基站退服</div>
   <div class='alarmMonitor2'>
      <counter :data='val2' :config='indexNumConfig2'></counter>
   </div>
   <div class='g4-label'>4G基站退服</div>
</view-template>
</template>

<script>
export default {
  name: '',
  props: [],
  data() {
    return {
      val1: 2,
      val2: 12,
      indexNumConfig1: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#ffe600',
            fontSize: 36,
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      indexNumConfig2: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#ffe600',
            fontSize: 36,
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      indexNumConfig3: {
        justifyContent: 'flex-start',
        prefix: {
          // 前缀配置项
          content: 'BSC数',
          textStyle: {
            color: '#fff',
            fontSize: 26
          }
        },
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#fff',
            fontSize: 30,
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      indexNumConfig4: {
        justifyContent: 'flex-start',
        prefix: {
          // 前缀配置项
          content: '4G小区数',
          textStyle: {
            color: '#fff',
            fontSize: 26
          }
        },
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#fff',
            fontSize: 30,
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      indexNumConfig5: {
        justifyContent: 'flex-start',
        prefix: {
          // 前缀配置项
          content: '4G基站数',
          textStyle: {
            color: '#fff',
            fontSize: 26
          }
        },
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#fff',
            fontSize: 30,
            fontFamily: 'PixelLCD-7'
          }
        }
      }
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
      this.$http.indi.get('j0032', { region_name: '全省' }, res => {
        this.val1 = res.data.data[0].OUT_2G
        this.val2 = res.data.data[0].OUT_4G
      })
    },
    changeRegion(regionName) {
      if (regionName) {
        this.$http.indi.get('j0032', { region_name: regionName }, res => {
          this.val1 = res.data.data[0].OUT_2G
          this.val2 = res.data.data[0].OUT_4G
        })
      }
    }
  },
  beforeDestroy() {},
  components: {}
}
</script>
