<template>
  <!-- 用户漫入/漫出 -->
  <view-template id="user-roam-chart-wrapper">
    <div class="title-user-roam">
      <div class="title-user-roam-style">
        <span>{{title}}</span>
      </div>
    </div>
    <div id="user-roam-chart" class="user-roam-chart"></div>
    <div class="numList">
      <!-- <div v-for="(item, index) in cityData" :key="index" class="num-style" :style="{'color': color[index]}"> -->
      <div v-for="(item, index) in cityData" :key="index" class="num-style">
        <counter :data="item.value" :config="indexNumConfig"></counter>
      </div>
    </div>
  </view-template>
</template>
<script>
import './user-roam.scss'
import echarts from 'echarts';
import _options from './optionForEchartsRoam.js'
export default {
  name: 'roam',
  props: ['title'],
  data() {
    return {
      cityNameArr: [],
      cityData: [],
      color: ['#60d8ff', '#d48a49', '#347cac', '#c5d449', '#49d484', '#fe5d5d', '#d4498d', '#614fbb', '#386ce8'],
      indexNumConfig: {
        justifyContent: 'center',
        numbers: { // 数字配置项
          animateFlag: true,
          animateType: 'scroll',
          textStyle: {
            // color: 'inherit',
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: '100',
            fontFamily: 'DigifaceWide'
          },
          letterSpacing: 0.5 // 数字之间间距
        }
      }
    }
  },
  methods: {
    initCharts() {
      let chart = echarts.getInstanceByDom(
        document.getElementById('user-roam-chart')
      );
      let option = _options.optionForUserRoam;
      option.color = this.color
      option.legend.data = this.cityNameArr
      option.series[0].data = this.cityData
      chart.clear()
      chart.setOption(option);
    },
    changeArea(name) {
      this.$http.indi.get('j0046', {'region_name': name}, (res) => {
        this.cityNameArr = []
        this.cityData = []
        let data = res.data.data
        for (var i = 0; i < data.length; i++) {
          this.cityNameArr.push(data[i].CITY_NAME)
          let obj = {
            value: data[i].KPI_VALUE,
            name: data[i].CITY_NAME
          }
          this.cityData.push(obj)
        }
        this.initCharts();
      })
    }
  },
  mounted() {
    echarts.init(document.getElementById('user-roam-chart'));
    bus.$on('REGION_NAME', this.changeArea);
  },
  beforeDestroy() {
    if (this.chart && !this.chart.isDisposed()) {
      this.chart.clear();
      this.chart.dispose();
    }
  }
};
</script>
