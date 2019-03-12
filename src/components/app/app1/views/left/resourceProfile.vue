<!--left -->
<template>
<view-template  class='resourceProfile'>
  <div class='resourceProfileTitle'>资源概况</div>
   <div class='resProfile1'>
      <counter :data='val1' :config='indexNumConfig1'></counter>
   </div>
   <div class='resProfile2'>
      <counter :data='val2' :config='indexNumConfig2'></counter>
   </div>
   <div class='resProfile3'>
      <counter :data='val3' :config='indexNumConfig3'></counter>
   </div>
   <div class='resProfile4'>
      <counter :data='val4' :config='indexNumConfig4'></counter>
   </div>
  <div class='resProfile5'>
      <counter :data='val5' :config='indexNumConfig5'></counter>
   </div>
</view-template>
</template>

<script>
export default {
  name: '',
  props: [],
  data() {
    return {
      val1: 0,
      val2: 0,
      val3: 0,
      val4: 0,
      val5: 0,
      indexNumConfig1: {
        justifyContent: 'center',
        prefix: {
          // 前缀配置项
          content: '2G小区数',
          marginRight: 8,
          textStyle: {
            color: '#fff',
            fontSize: 23
          }
        },
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#fff',
            fontSize: 27,
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      indexNumConfig2: {
        justifyContent: 'center',
        prefix: {
          // 前缀配置项
          content: '2G基站数',
          marginRight: 8,
          textStyle: {
            color: '#fff',
            fontSize: 23
          }
        },
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#fff',
            fontSize: 27,
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      indexNumConfig3: {
        justifyContent: 'center',
        prefix: {
          // 前缀配置项
          content: 'BSC数',
          marginRight: 8,
          textStyle: {
            color: '#fff',
            fontSize: 23
          }
        },
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#fff',
            fontSize: 27,
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      indexNumConfig4: {
        justifyContent: 'center',
        prefix: {
          // 前缀配置项
          content: '4G小区数',
          marginRight: 8,
          textStyle: {
            color: '#fff',
            fontSize: 23
          }
        },
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#fff',
            fontSize: 27,
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      indexNumConfig5: {
        justifyContent: 'center',
        prefix: {
          // 前缀配置项
          content: '4G基站数',
          marginRight: 8,
          textStyle: {
            color: '#fff',
            fontSize: 23
          }
        },
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#fff',
            fontSize: 27,
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
      this.$http.indi.get('j0031', { region_name: '全省' }, res => {
        this.val1 = res.data.data[0].PLOT_2G
        this.val2 = res.data.data[0].BTS_2G
        this.val3 = res.data.data[0].BSC_NUM
        this.val4 = res.data.data[0].PLOT_4G
        this.val5 = res.data.data[0].BTS_4G
      })
    },
    changeRegion(regionName) {
      if (regionName) {
        this.$http.indi.get('j0031', { region_name: regionName }, res => {
          this.val1 = res.data.data[0].PLOT_2G
          this.val2 = res.data.data[0].BTS_2G
          this.val3 = res.data.data[0].BSC_NUM
          this.val4 = res.data.data[0].PLOT_4G
          this.val5 = res.data.data[0].BTS_4G
        })
      }
    }
  },
  beforeDestroy() {},
  components: {}
}
</script>
