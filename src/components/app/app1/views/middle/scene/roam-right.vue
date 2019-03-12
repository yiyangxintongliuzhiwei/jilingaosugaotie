<template>
  <!-- 漫入/漫出Top10 -->
  <view-template id="roam-chart-wrapper">
    <div class="title-roam">
      <div class="title-roam-style">
        <span>{{title}}</span>
      </div>
    </div>
    <div id="roam-chart-right" class="roam-chart"></div>
  </view-template>
</template>
<script>
import './roam.scss'
import echarts from 'echarts';
import _options from './optionForEchartsRoam.js'
export default {
  name: 'roamRight',
  props: ['title'],
  data() {
    return {
      provinceRoamOutTop10: [],
      provinceNameArr: []
    };
  },
  methods: {
    initCharts() {
      let chart = echarts.getInstanceByDom(
        document.getElementById('roam-chart-right')
      );
      let option = _options.optionForRoam;
      option.yAxis.data = this.provinceNameArr
      option.series[0].data = [
        this.provinceRoamOutTop10[0],
        this.provinceRoamOutTop10[1],
        this.provinceRoamOutTop10[2],
        this.provinceRoamOutTop10[3],
        this.provinceRoamOutTop10[4],
        this.provinceRoamOutTop10[5],
        this.provinceRoamOutTop10[6],
        {
          value: this.provinceRoamOutTop10[7],
          itemStyle: {
            normal: {
              color: '#f1ef2f'
            }
          }
        },
        {
          value: this.provinceRoamOutTop10[8],
          itemStyle: {
            normal: {
              color: '#f1a62f'
            }
          }
        },
        {
          value: this.provinceRoamOutTop10[9],
          itemStyle: {
            normal: {
              color: '#2ff1dc'
            }
          }
        }
      ]
      chart.clear()
      chart.setOption(option);
    },
    changeArea(name) {
      this.$http.indi.get('j0045', {'region_name': name}, (res) => {
        this.provinceRoamOutTop10 = []
        this.provinceNameArr = []
        let data = res.data.data.reverse()
        for (var i = 0; i < data.length; i++) {
          this.provinceNameArr.push(data[i].PROVINCE_NAME)
          this.provinceRoamOutTop10.push(data[i].KPI_VALUE)
        }
        this.initCharts();
      })
    }
  },
  mounted() {
    echarts.init(document.getElementById('roam-chart-right'));
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
