<!--业务量-->
<template>
  <view-template id="volume">
  <h3>业务量</h3>
  <div v-if="currentArea==='全省'" class='g2-num'>
      <counter :data='val1' :config='indexNumConfig1'></counter>
   </div>
   <div v-if="currentArea==='全省'" class='g4-num'>
     <counter :data='val2' :config='indexNumConfig2'></counter>
   </div>
    <div id="vBar"></div>
    <div class='flow-unit'>(TB)</div>
    <div class='topic-unit'>(万Erl)</div>
  </view-template>
</template>
<style lang="scss" rel="stylesheet/scss">
#volume {
  width: 1363px;
  height: 475px;
  position: absolute;
  left: 0;
  top: 50px;
  text-shadow: 1px 1px 1px #000;
  h3 {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 62px;
    position: absolute;
    left: 0;
    top: 31px;
    color: #fff;
    font-size: 32px;
    text-align: center;
    line-height: 62px;
    font-weight: normal;
    text-shadow: 0 3px 0 #000;
  }
  .flow-unit {
    position: absolute;
    top: 400px;
    left: 73px;
    height: 16px;
    color: #fff;
  }
  .topic-unit {
    position: absolute;
    left: 1290px;
    top: 400px;
    height: 16px;
    color: #fff;
  }
  .g2-num {
    position: absolute;
    height: 60px;
    left: 320px;
    top: 110px;
  }
  .g4-num {
    position: absolute;
    height: 60px;
    left: 750px;
    top: 110px;
  }
  #vBar {
    width: 1336px;
    height: 297px;
    position: absolute;
    left: 27px;
    top: 176px;
  }
  #vBar1 {
    width: 1336px;
    height: 297px;
    position: absolute;
    left: 27px;
    top: 135px;
  }
}
</style>
<script>
import echarts from 'echarts'

export default {
  data() {
    return {
      val1: 45262098,
      val2: 47894066,
      currentArea: '全省',
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: 60,
          width: 1200,
          height: 200,
          top: 10
        },
        legend: {
          left: 360,
          bottom: 20,
          itemGap: 50,
          itemWidth: 28,
          itemHeight: 22,
          orient: 'vertical',
          width: 114,
          height: 24,
          textStyle: {
            color: '#cce6ff',
            fontSize: 20
          },
          data: ['4G流量', '2G流量', '2G话务量', 'VOLTE话务量']
        },
        xAxis: [
          {
            axisLine: {
              lineStyle: {
                color: '#96c4ff'
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fff',
              fontSize: 16
            },
            data: [
              '1:00',
              '2:00',
              '3:00',
              '4:00',
              '5:00',
              '6:00',
              '7:00',
              '8:00',
              '9:00',
              '10:00',
              '11:00',
              '12:00'
            ]
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            name: 'GB',
            splitLine: {
              lineStyle: {
                color: '#0b3f8f'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#96c4ff'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fff',
              fontSize: 16
            }
          },
          {
            type: 'value',
            min: 0,
            name: '万Erl',
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#96c4ff'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fff',
              fontSize: 16
            }
          }
        ],
        series: [
          {
            name: '4G流量',
            yAxisIndex: 0,
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            itemStyle: {
              normal: {
                color: '#21ae45',
                barBorderRadius: [0, 0, 10, 10],
                shadowColor: '#000',
                shadowBlur: 15
                // shadowOffsetX: -15,
                // shadowOffsetY: -15
              }
            },
            data: [10, 20, 30, 40, 20, 34, 25, 10, 20, 30, 40, 20]
          },
          {
            name: '2G流量',
            yAxisIndex: 0,
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            itemStyle: {
              normal: {
                color: '#c9c982',
                barBorderRadius: [10, 10, 0, 0],
                shadowColor: '#000',
                shadowBlur: 15
                //                shadowBlur: 10,
                //                shadowOffsetX: -15,
                //                shadowOffsetY: -15
              }
            },
            data: [10, 20, 30, 40, 20, 34, 25, 10, 20, 30, 40, 20]
          },
          {
            name: '2G话务量',
            type: 'line',
            yAxisIndex: 1,
            symbolSize: 4,
            symbol: 'circle',
            lineStyle: {
              normal: {
                color: '#00f6ff',
                width: 4,
                shadowColor: '#000',
                shadowBlur: 3,
                shadowOffsetX: 2,
                shadowOffsetY: 2
              }
            },
            itemStyle: {
              normal: {
                color: '#00f6ff'
              }
            },
            data: [300, 400, 300, 500, 330, 220, 300, 400, 300, 500, 330, 220]
          },
          {
            name: 'VOLTE话务量',
            type: 'line',
            yAxisIndex: 1,
            symbolSize: 4,
            symbol: 'circle',
            lineStyle: {
              normal: {
                color: '#ea21fc',
                width: 4,
                shadowColor: '#000',
                shadowBlur: 3,
                shadowOffsetX: 2,
                shadowOffsetY: 2
              }
            },
            itemStyle: {
              normal: {
                color: '#ea21fc'
              }
            },
            data: [600, 700, 300, 400, 330, 520, 400, 400, 200, 550, 300, 220]
          }
        ]
      },
      indexNumConfig1: {
        justifyContent: 'flex-start',
        prefix: {
          // 前缀配置项
          content: '用户总数',
          marginRight: 18,
          textStyle: {
            color: '#fff',
            fontSize: 26
          }
        },
        suffix: {
          // 前缀配置项
          content: '(万)',
          marginRight: 16,
          textStyle: {
            color: '#f0db09',
            fontSize: 26
          }
        },
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#f0db09',
            fontSize: 30
          }
        }
      },
      indexNumConfig2: {
        justifyContent: 'flex-start',
        prefix: {
          // 前缀配置项
          content: '4G用户数',
          marginRight: 18,
          textStyle: {
            color: '#fff',
            fontSize: 26
          }
        },
        suffix: {
          // 前缀配置项
          content: '(万)',
          marginRight: 16,
          textStyle: {
            color: '#f0db09',
            fontSize: 26
          }
        },
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#f0db09',
            fontSize: 30
          }
        }
      }
    }
  },
  methods: {
    init() {
      this.chart = echarts.init(document.getElementById('vBar'))
    },
    initData() {
      this.changeRegion('全省')
    },
    changeRegion(regionName) {
      this.currentArea = regionName
      this.$http.indi.get(
        ['j0050', 'j0049', 'j0051', 'j0052'],
        {
          j0049: { region_name: regionName },
          j0050: { region_name: regionName },
          j0051: { region_name: regionName },
          j0052: { region_name: regionName }
        },
        (res1, res2, res3, res4) => {
          if (
            res1.data.data ||
            res2.data.data ||
            res3.data.data ||
            res4.data.data
          ) {
            this.option.xAxis[0].data = []
            this.option.series[0].data = []
            this.option.series[1].data = []
            this.option.series[2].data = []
            this.option.series[3].data = []
            res1.data.data.forEach(item => {
              this.option.xAxis[0].data.push(
                new Date(item.DATA_TIME).pattern('hh:mm')
              )
              this.option.series[0].data.push(item.KPI_VALUE)
            })
            res2.data.data.forEach(item => {
              this.option.series[1].data.push(item.KPI_VALUE)
            })
            res3.data.data.forEach(item => {
              this.option.series[2].data.push(item.KPI_VALUE)
            })
            res4.data.data.forEach(item => {
              this.option.series[3].data.push(item.KPI_VALUE)
            })
            this.chart.setOption(this.option)
          }
        }
      )
      if (regionName === '全省') {
        this.$http.indi.get('j0048', { region_name: regionName }, res => {
          this.val1 = res.data.data[0].USER_2G
          this.val2 = res.data.data[0].USER_4G
        })
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      bus.$on('REGION_NAME', this.changeRegion)
    })
    this.init()
    this.initData()
  }
}
</script>
