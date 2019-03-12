<template>
  <!-- 漫入/漫出Top10 -->
  <view-template id="roam-chart-wrapper">
    <div class="title-roam">
      <div class="title-roam-style">
        <span>{{title}}</span>
      </div>
    </div>
    <div id="roam-chart" class="roam-chart"></div>
  </view-template>
</template>
<script>
import './roam.scss'
import echarts from 'echarts';
import _options from './optionForEchartsRoam.js'
export default {
  name: 'roam',
  props: ['title'],
  data() {
    return {
      chart: null,
      provinceRoamInTop10: [],
      provinceNameArr: []
    };
  },
  methods: {
    initCharts() {
      if (!this.chart) {
        this.chart = echarts.init(
          document.getElementById('roam-chart')
        );
      }
      let option = _options.optionForRoam;
      option.yAxis.data = this.provinceNameArr
      option.series[0].data = [
        this.provinceRoamInTop10[0],
        this.provinceRoamInTop10[1],
        this.provinceRoamInTop10[2],
        this.provinceRoamInTop10[3],
        this.provinceRoamInTop10[4],
        this.provinceRoamInTop10[5],
        this.provinceRoamInTop10[6],
        {
          value: this.provinceRoamInTop10[7],
          itemStyle: {
            normal: {
              color: '#f1ef2f'
            }
          }
        },
        {
          value: this.provinceRoamInTop10[8],
          itemStyle: {
            normal: {
              color: '#f1a62f'
            }
          }
        },
        {
          value: this.provinceRoamInTop10[9],
          itemStyle: {
            normal: {
              color: '#2ff1dc'
            }
          }
        }
      ]
      this.chart.clear()
      this.chart.setOption(option);
    },
    changeArea(name) {
      this.$http.indi.get('j0044', {'region_name': name}, (res) => {
        this.provinceRoamInTop10 = []
        this.provinceNameArr = []
        let data = res.data.data.reverse()
        for (var i = 0; i < data.length; i++) {
          this.provinceNameArr.push(data[i].PROVINCE_NAME)
          this.provinceRoamInTop10.push(data[i].KPI_VALUE)
        }
        this.initCharts();
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.changeArea(this.$store.state.regionName);
      bus.$on('REGION_NAME', this.changeArea);
    })
  },
  computed: {
    region() {
      return this.$store.state.regionName
    }
  },
  watch: {
    region(v) {
      this.changeArea(v)
    }
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
