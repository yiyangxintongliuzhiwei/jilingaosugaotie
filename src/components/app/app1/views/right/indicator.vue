<!--left -->
<template>
<view-template  class='indicator'>
  <div class='indicatorTitle'>业务质量</div>
  <div id='in-chart-1'></div>
  <div id="in-chart-2"></div>
   <div class='indicator-label-1'>
      <counter :data='val1' :config='indexNumConfig'></counter>
   </div>
   <div class='indicator-label-2'>
      <counter :data='val2' :config='indexNumConfig'></counter>
   </div>
   <div class='indicator-label-3'>
      <counter :data='val3' :config='indexNumConfig'></counter>
   </div>
   <div class='indicator-label-4'>
      <counter :data='val4' :config='indexNumConfig'></counter>
   </div>
   <div class='indicator-label-5'>
      <counter :data='val5' :config='indexNumConfig'></counter>
   </div>
   <div class='indicator-label-6'>
      <counter :data='val6' :config='indexNumConfig'></counter>
   </div>
   <div class='indicator-label-7'>
      <counter :data='val7' :config='indexNumConfig'></counter>
   </div>
   <div class='indicator-label-8'>
      <counter :data='val8' :config='indexNumConfig'></counter>
   </div>
   <div class='indicator-label-9'>
      <counter :data='val9' :config='indexNumConfig'></counter>
   </div>
   <div class='voltelDiv'>
     <div>volte<br>呼叫建立时延</div>
    <div class='indicator-label-10'>
      <counter :data='val10' :config='indexNumConfig2'></counter>
   </div>
   </div>
</view-template>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'
import 'echarts//lib/component/legend'
import 'echarts//lib/component/title'
import option from './indicatorOption'
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
      val6: 0,
      val7: 0,
      val8: 0,
      val9: 0,
      val10: 0,
      chart1: null,
      chart2: null,
      indexNumConfig: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#03ff00',
            fontSize: 24,
            fontFamily: 'PixelLCD-7'
          }
        },
        suffix: {
          // 前缀配置项
          content: '%',
          textStyle: {
            color: '#03ff00',
            fontSize: 26,
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
            fontSize: 32,
            fontFamily: 'PixelLCD-7'
          }
        },
        suffix: {
          // 前缀配置项
          content: '(s)',
          marginRight: 16,
          textStyle: {
            color: '#f0db09',
            fontSize: 26
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
    this.initChart()
    this.initData()
  },
  methods: {
    initChart() {
      this.chart1 = echarts.init(document.getElementById('in-chart-1'))
      this.chart2 = echarts.init(document.getElementById('in-chart-2'))
    },
    initData() {
      this.changeRegion('全省')
    },
    changeRegion(regionName) {
      this.currentArea = regionName
      this.$http.indi.get('j0053', { region_name: regionName }, res => {
        option.option1.series[0].data[0].value = []
        let data = res.data.data[0]
        option.option1.series[0].data[0].value.push(
          data.VOLTE_RATE,
          data.LTE_RATE,
          data.GSM_RATE,
          data.SCSCF_RATE,
          data.IMS_RATE
        )
        this.chart1.setOption(option.option1)
        this.val1 = data.IMS_RATE
        this.val2 = data.LTE_RATE
        this.val3 = data.GSM_RATE
        this.val4 = data.SCSCF_RATE
        this.val5 = data.VOLTE_RATE
      })
      this.$http.indi.get('j0054', { region_name: regionName }, res => {
        option.option2.series[0].data[0].value = []
        let data = res.data.data[0]
        option.option2.series[0].data[0].value.push(
          100 - data.VOLTE_RATE,
          100 - data.LTE_RATE,
          100 - data.GSM_DROP_RATE,
          100 - data.GSM_CR_RATE
        )
        this.chart2.setOption(option.option2)
        this.val6 = data.LTE_RATE
        this.val7 = data.GSM_DROP_RATE
        this.val8 = data.GSM_CR_RATE
        this.val9 = data.VOLTE_RATE
        this.val10 = data.DELAY_NUM
      })
    }
  },
  beforeDestroy() {},
  components: {}
}
</script>
