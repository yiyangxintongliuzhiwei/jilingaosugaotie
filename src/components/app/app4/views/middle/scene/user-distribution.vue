<template>
  <!-- 用户分布 -->
  <view-template id="chart-wrapper-one">
    <div class="title">
      <div class="title-style">
        <span>{{title}}</span>
      </div>
    </div>
    <div class="sub-title">
      <span class="sub-title-style">统计时间：{{time}}</span>
    </div>
    <div id="user-chart" class="user-chart"></div>
    <div id="chart-title">
      10小时内漫入漫出峰值
    </div>
  </view-template>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'userDistribution',
  props: [],
  data() {
    return {
      time: '2018-01-14 11:00',
      timeArr: [],
      clock: [],
      chart: null,
      provinceOutRoamIn: [],   // 省际漫入
      provinceInRoamIn: [],    // 省内漫入
      provinceOutRoamOut: [],   // 省际漫出
      provinceInRoamOut: []     // 省内漫出
    };
  },
  methods: {
    initCharts() {
      if (!this.chart) {
        this.chart = echarts.init(
          document.getElementById('user-chart')
        );
      }
      let option = {
        color: [
          '#ff8b0f',
          '#ffea01',
          '#2c8acb',
          '#0de5d3'
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: [
            '省际漫入',
            '省内漫入',
            '省际漫出',
            '省内漫出'
          ],
          bottom: 0,
          textStyle: {
            color: '#FFFFFF',
            fontSize: 16
          },
          itemWidth: 14,
          itemGap: 24
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '4%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.clock,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#96c4ff'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#FFFFFF',
                fontSize: 16
              },
              padding: [15, 0, 15, 0]
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '(万人)',
            nameLocation: 'start',
            nameGap: 19,
            nameTextStyle: {
              color: '#FFFFFF',
              fontSize: 20,
              align: 'left',
              padding: [0, 40, 0, 0]
            },
            axisLabel: {
              textStyle: {
                color: '#FFFFFF',
                fontSize: 16
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#96c4ff'
              }
            },
            splitLine: {
              lineStyle: {
                color: '#0c3f88',
                shadowColor: '#FFFFFF'
              }
            }
          }
        ],
        series: [
          {
            name: '省际漫入',
            type: 'bar',
            stack: '广告1',
            barWidth: '22px',
            itemStyle: {
              normal: {
                barBorderRadius: [0, 0, 5, 5]
              }
            },
            data: this.provinceOutRoamIn
          },
          {
            name: '省内漫入',
            type: 'bar',
            stack: '广告1',
            barWidth: '22px',
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 0, 0]
              }
            },
            data: this.provinceInRoamIn
          },
          {
            name: '省际漫出',
            type: 'bar',
            stack: '广告2',
            barWidth: '22px',
            itemStyle: {
              normal: {
                barBorderRadius: [0, 0, 5, 5]
              }
            },
            data: this.provinceOutRoamOut
          },
          {
            name: '省内漫出',
            type: 'bar',
            stack: '广告2',
            barWidth: '22px',
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 0, 0]
              }
            },
            data: this.provinceInRoamOut
          }
        ]
      }
      this.chart.clear()
      this.chart.setOption(option);
    },
    changeArea(name) {
      let p1 = new Promise((resolve, reject) => {
        this.$http.indi.get('j0040', {'region_name': name}, (res) => {
          // console.log(res.data.data);
          if (res.data.data) {
            this.provinceOutRoamIn = []
            this.clock = []
            this.timeArr = []
            let data = res.data.data
            for (var i = 0; i < data.length; i++) {
              this.provinceOutRoamIn.push((data[i].KPI_VALUE / 10000).toFixed(2))
              // this.clock.push(data[i].DATA_TIME.slice(11, 16))
              this.clock.push(new Date(Date.parse(data[i].DATA_TIME)).pattern('HH:mm'))
              // this.clock.push(new Date(Date.parse(data[i].DATA_TIME)).pattern('M月d日'))
              this.timeArr.push(data[i].DATA_TIME)
            }
            this.time = this.timeArr[this.timeArr.length - 1]
          }
          resolve();
        })
      });
      let p2 = new Promise((resolve, reject) => {
        this.$http.indi.get('j0042', {'region_name': name}, (res) => {
          if (res.data.data) {
            this.provinceInRoamIn = []
            let data = res.data.data
            for (var i = 0; i < data.length; i++) {
              this.provinceInRoamIn.push((data[i].KPI_VALUE / 10000).toFixed(2))
            }
          }
          resolve();
        })
      });
      let p3 = new Promise((resolve, reject) => {
        this.$http.indi.get('j0041', {'region_name': name}, (res) => {
          if (res.data.data) {
            this.provinceOutRoamOut = []
            let data = res.data.data
            for (var i = 0; i < data.length; i++) {
              this.provinceOutRoamOut.push((data[i].KPI_VALUE / 10000).toFixed(2))
            }
          }
          resolve();
        })
      });
      let p4 = new Promise((resolve, reject) => {
        this.$http.indi.get('j0043', {'region_name': name}, (res) => {
          if (res.data.data) {
            this.provinceInRoamOut = []
            let data = res.data.data
            for (var i = 0; i < data.length; i++) {
              this.provinceInRoamOut.push((data[i].KPI_VALUE / 10000).toFixed(2))
            }
          }
          resolve();
        })
      });
      Promise.all([p1, p2, p3, p4]).then(() => {
        this.initCharts();
      });
    }
  },
  computed: {
    title() {
      return this.$store.state.regionName;
    }
  },
  watch: {
    title(v) {
      this.changeArea(v)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.changeArea(this.$store.state.regionName);
      bus.$on('REGION_NAME', this.changeArea);
    })
  },
  beforeDestroy() {
    if (this.chart && !this.chart.isDisposed()) {
      this.chart.clear();
      this.chart.dispose();
      this.chart = null;
    }
    bus.$off('REGION_NAME');
  }
};
</script>
<style lang='scss' scoped>
#chart-wrapper-one {
  width: 100%;
  height: 100%;
  position: relative;
}

.title {
  position: absolute;
  width: 489px;
  height: 84px;
  top: 32px;
  left: 110px;
  background: url('../../../assets/img/title-bg.png')
}

.title-style {
  margin: 0 auto;
  text-align: center;
  margin-top: 15px;
  font-size: 34px;
  color: #FFFFFF;
  text-shadow: 3px 3px 3px #000000;
}

.sub-title {
  position: absolute;
  width: 500px;
  height: 50px;
  top: 120px;
  left: 120px;
  font-size: 24px;
  line-height: 50px;
  color: #FFFFFF;
}

#user-chart {
  position: absolute;
  width: 830px;
  height: 552px;
  top: 155px;
  left: 90px;
}

#chart-title{
  position: absolute;
  width: 500px;
  height: 50px;
  bottom: 10px;
  left: 380px;
  font-size: 24px;
  line-height: 50px;
  color: #FFFFFF;
}
</style>
