<!--middle -->
<template>
<view-template appName='' :interval="60" @interval="loadData" id="">
  <div id="top-chart-bg"></div>
  <div id="top-chart"></div>

  <transition name="switch">
    <div v-if="countryOrProvince=='country'">
      <div id="china-roam-in-user-number">
        <div class="user-number-title">
          省际漫入用户总数
        </div>
        <counter class="user-number-value" :data="chinaRoamInUserNumber" :config="indexNumConfigForChina"></counter>
      </div>
      <div id="china-roam-out-user-number">
        <div class="user-number-title">
          省际漫出用户总数
        </div>
        <counter class="user-number-value" :data="chinaRoamOutUserNumber" :config="indexNumConfigForChina"></counter>
      </div>
    </div>
  </transition>
  <!-- 国际漫入漫出用户统计 -->
  <transition name="switch">
    <div v-if="countryOrProvince=='world'">
      <div id="world-roam-in-user-number">
        <div class="user-number-title">
          国际漫入用户总数
        </div>
        <counter class="user-number-value" :data="worldRoaminUserCount" :config="indexNumConfigForChina"></counter>
      </div>
      <div id="world-roam-out-user-number">
        <div class="user-number-title">
          国际漫出用户总数
        </div>
        <counter class="user-number-value" :data="worldRoamoutUserCount" :config="indexNumConfigForChina"></counter>
      </div>
    </div>
  </transition>

  <transition name="switch">
    <div v-if="countryOrProvince=='province'">
      <div id="jilin-roam-user-number">
        <div class="user-number-title">
          省内漫游用户总数
        </div>
        <counter class="user-number-value" :data="jilinRoamUserNumber" :config="indexNumConfigForJilin"></counter>
      </div>
      <!-- <div id="jilin-roam-in-user-number">
        <div class="user-number-title">
          省内漫入用户总数
        </div>
        <counter class="user-number-value" :data="jilinRoamInUserNumber" :config="indexNumConfig"></counter>
      </div>
      <div id="jilin-roam-out-user-number">
        <div class="user-number-title">
          省内漫出用户总数
        </div>
        <counter class="user-number-value" :data="jilinRoamOutUserNumber" :config="indexNumConfig"></counter>
      </div> -->
    </div>
  </transition>

  <transition name="switch1">
    <div v-if="countryOrProvince=='country'" id="china-in-out-top">
      <div id="in-top">
        <div class="top-title">
          漫入TOP10
        </div>
        <div class="top-content">
          <div class="table">
            <div class="table-header">
              <div class="rank">
                排名
              </div>
              <div class="province">
                省份
              </div>
              <div class="user-number">
                用户数
              </div>
            </div>
            <div class="table-body">
              <div class="table-body-item" v-for="(item, index) in topInListForChina">
                <div class="rank" v-text="index+1">
                  <!-- {{item}} -->
                </div>
                <div class="province" v-text="item.PROVINCE_NAME">
                  <!-- 省份 -->
                </div>
                <div class="user-number" v-text="item.KPI_VALUE">
                  <!-- 用户数 -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="out-top">
        <div class="top-title">
          漫出TOP10
        </div>
        <div class="top-content">
          <div class="table">
            <div class="table-header">
              <div class="rank">
                排名
              </div>
              <div class="province">
                省份
              </div>
              <div class="user-number">
                用户数
              </div>
            </div>
            <div class="table-body">
              <div class="table-body-item" v-for="(item, index) in topOutListForChina">
                <div class="rank" v-text="index+1">
                  <!-- {{item}} -->
                </div>
                <div class="province" v-text="item.PROVINCE_NAME">
                  <!-- 省份 -->
                </div>
                <div class="user-number" v-text="item.KPI_VALUE">
                  <!-- 用户数 -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <!-- 国际漫入漫出统计数据 -->
  <transition name="switch1">
    <div v-if="countryOrProvince=='world'" id="world-in-out-top">
      <div id="world-in-top">
        <div class="top-title">
          漫入TOP10
        </div>
        <div class="top-content">
          <div class="table">
            <div class="table-header">
              <div class="rank">
                排名
              </div>
              <div class="province">
                国家
              </div>
              <div class="user-number">
                用户数
              </div>
            </div>
            <div class="table-body">
              <div class="table-body-item" v-for="(item, index) in worldRoaminData" :key="index">
                <div class="rank" v-text="index+1">
                  <!-- {{item}} -->
                </div>
                <div class="province" v-text="item.KPI_NAME">
                  <!-- 省份 -->
                </div>
                <div class="user-number" v-text="item.KPI_VALUE">
                  <!-- 用户数 -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="world-out-top">
        <div class="top-title">
          漫出TOP10
        </div>
        <div class="top-content">
          <div class="table">
            <div class="table-header">
              <div class="rank">
                排名
              </div>
              <div class="province">
                国家
              </div>
              <div class="user-number">
                用户数
              </div>
            </div>
            <div class="table-body">
              <div class="table-body-item" v-for="(item, index) in worldRoamoutData" :key="index">
                <div class="rank" v-text="index+1">
                  <!-- {{item}} -->
                </div>
                <div class="province" v-text="item.KPI_NAME">
                  <!-- 省份 -->
                </div>
                <div class="user-number" v-text="item.KPI_VALUE">
                  <!-- 用户数 -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <transition name="switch1">
    <div v-if="countryOrProvince=='province'" id="jilin-in-out-top">
      <div id="in-top">
        <div class="top-title">
          漫入排名
        </div>
        <div class="top-content">
          <div class="table">
            <div class="table-header">
              <div class="rank">
                排名
              </div>
              <div class="province">
                地市
              </div>
              <div class="user-number">
                用户数
              </div>
            </div>
            <div class="table-body">
              <div class="table-body-item" v-for="(item, index) in topInListForJilin">
                <div class="rank" v-text="index+1">
                  <!-- {{item}} -->
                </div>
                <div class="province" v-text="item.CITY_NAME">
                  <!-- 省份 -->
                </div>
                <div class="user-number" v-text="item.KPI_VALUE">
                  <!-- 用户数 -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="out-top">
        <div class="top-title">
          漫出排名
        </div>
        <div class="top-content">
          <div class="table">
            <div class="table-header">
              <div class="rank">
                排名
              </div>
              <div class="province">
                地市
              </div>
              <div class="user-number">
                用户数
              </div>
            </div>
            <div class="table-body">
              <div class="table-body-item" v-for="(item, index) in topOutListForJilin">
                <div class="rank" v-text="index+1">
                  <!-- {{item}} -->
                </div>
                <div class="province" v-text="item.CITY_NAME">
                  <!-- 省份 -->
                </div>
                <div class="user-number" v-text="item.KPI_VALUE">
                  <!-- 用户数 -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <div id="country-btn" :class="{'country-province-btn-active': countryOrProvince=='country'}" @click="countryOrProvince='country'">
    <div class="word">
      省际漫游
    </div>
  </div>
  <div id="province-btn" :class="{'country-province-btn-active': countryOrProvince=='province'}" @click="countryOrProvince='province'">
    <div class="word">
      省内漫游
    </div>
  </div>
  <div id="world-btn" :class="{'country-province-btn-active': countryOrProvince=='world'}" @click="countryOrProvince='world'">
    <div class="word">
      国际漫游
    </div>
  </div>

  <img v-if="jilinSymbol" src="../../../assets/img/jilin-position.png" alt="" id="jilin-position">
  <img v-if="jilinSymbol1" src="../../../assets/img/jilin-position.png" alt="" id="jilin-position1">

</view-template>
</template>

<script>
/* eslint-disable */
import './Top.scss'
import region from '../../../../../../../static/mapdata/region.js'
import _options from './optionForEcharts'
import _jilin from '../../../../../../../static/mapdata/jilin.json'
import world from '../../../../../../../static/mapdata/world_geo.json'

export default {
  name: '',
  data() {
    return {
      countryOrProvince: 'country',
      // countryOrProvince: 'jilin',
      myChartBg: null,
      myChart: null,
      topInListForChina: [],
      topOutListForChina: [],
      topInListForJilin: [],
      topOutListForJilin: [],
      chinaRoamInUserNumber: 0,
      chinaRoamOutUserNumber: 0,
      worldRoaminUserCount: 999,
      worldRoamoutUserCount: 888,
      // jilinRoamInUserNumber: 0,
      // jilinRoamOutUserNumber: 0,
      jilinRoamUserNumber: 0,
      jilinSymbol: false,
      jilinSymbol1: false,
      currentChinaRange: [],
      throttleTimer: -1,
      currentJilinRange: [],
      // test: 15000,
      worldRoaminData:[],
      worldRoamoutData:[],

      indexNumConfigForChina: {
        justifyContent: 'center',
        numbers: { // 数字配置项
          animateFlag: true,
          animateType: 'scroll',
          textStyle: {
            color: '#f0db09',
            fontSize: 36,
            fontWeight: '100',
            fontFamily: 'DigifaceWide'
          },
          letterSpacing: 0.5 // 数字之间间距
        },
        suffix: {
          content: '(万人)',
          marginLeft: 8,
          textStyle: {
            color: '#f0db09',
            fontSize: 26,
            fontWeight: '',
            fontFamily: ''
          }
        }
      },
      indexNumConfigForJilin: {
        justifyContent: 'center',
        numbers: { // 数字配置项
          animateFlag: true,
          animateType: 'scroll',
          textStyle: {
            color: '#f0db09',
            fontSize: 46,
            fontWeight: '100',
            fontFamily: 'DigifaceWide'
          },
          letterSpacing: 0.5 // 数字之间间距
        },
        suffix: {
          content: '(万人)',
          marginLeft: 8,
          textStyle: {
            color: '#f0db09',
            fontSize: 36,
            fontWeight: '',
            fontFamily: ''
          }
        }
      }
    }
  },
  watch: {
    'countryOrProvince'(val) {
      this.myChart && this.myChart.dispose();
      this.myChartBg && this.myChartBg.dispose();
      this.myChart = this.Echarts.init(document.getElementById('top-chart'));
      this.myChartBg = this.Echarts.init(document.getElementById('top-chart-bg'));
      // this.currentChinaRange = [];
      // this.currentJilinRange = [];
      this.getDateAndRender(val);
    }
  },
  methods: {
    loadData() {
      this.getDateAndRender(this.countryOrProvince, true);
      this.loadInternatalData();
    },
    getDateAndRender(countryOrProvince, reloadDataFlag) {
      // this.myChart.clear();
      // this.myChartBg.clear();
      if (countryOrProvince === 'country') {
        let option = _options.optionForChina;
        let optionBg = _options.optionBgForChina;
        this.$http.indi.get('j0034', null, (res) => {
          this.topInListForChina = res.data.data;
          option.title.text = `统计时间：${new Date(res.data.data[0].DATA_TIME).pattern('yyyy-MM-dd hh:mm')}`
          // this.test += 1000;
          // res.data.data[0].KPI_VALUE = this.test;
          option.visualMap.min = res.data.data[9].KPI_VALUE;
          option.visualMap.max = res.data.data[0].KPI_VALUE;
          // console.log(reloadDataFlag);
          if (reloadDataFlag) {
            option.visualMap.range = [option.visualMap.min, option.visualMap.max];
            this.currentChinaRange = [option.visualMap.min, option.visualMap.max];
          } else if (this.currentChinaRange.length) {
            option.visualMap.range = this.currentChinaRange;
          }

          option.series[0].data = [];
          option.series[1].data = [];
          for (let x of res.data.data) {
            let value = x.KPI_VALUE;
            if (value <= this.currentChinaRange[1] && value >= this.currentChinaRange[0]) {
            // if (value <= option.visualMap.max && value >= option.visualMap.min) {
              for (let y in region.geoCoordMap) {
                if (y.includes(x.PROVINCE_NAME) || x.PROVINCE_NAME.includes(y)) {
                  option.series[0].data.push({
                    coords: [
                      region.geoCoordMap[y],
                      region.geoCoordMap['吉林']
                    ],
                    value: x.KPI_VALUE
                  });
                  option.series[1].data.push({
                    name: x.PROVINCE_NAME,
                    value: [region.geoCoordMap[y][0], region.geoCoordMap[y][1], x.KPI_VALUE]
                  });
                }
              }
            }
          }
          this.myChart.setOption(option);
          this.jilinSymbol = true;
          this.jilinSymbol1 = false;
          this.myChartBg.setOption(optionBg);

          this.myChart.on('datarangeselected', (range) => {
            clearTimeout(this.throttleTimer);
            this.throttleTimer = setTimeout(() => {
              this.currentChinaRange = range.selected;
              option.visualMap.range = this.currentChinaRange;
              option.series[0].data = [];
              option.series[1].data = [];
              for (let x of res.data.data) {
                for (let y in region.geoCoordMap) {
                  if (y.includes(x.PROVINCE_NAME) || x.PROVINCE_NAME.includes(y)) {
                    let value = x.KPI_VALUE
                    if (value <= range.selected[1] && value >= range.selected[0]) {
                      option.series[0].data.push({
                        coords: [
                          region.geoCoordMap[y],
                          region.geoCoordMap['吉林']
                        ],
                        value: x.KPI_VALUE
                      });
                      option.series[1].data.push({
                        name: x.PROVINCE_NAME,
                        value: [region.geoCoordMap[y][0], region.geoCoordMap[y][1], x.KPI_VALUE]
                      });
                    }
                  }
                }
              }
              this.myChart.setOption(option);
            }, 300);
          })
        })
        this.$http.indi.get('j0035', null, (res) => {
          this.topOutListForChina = res.data.data;
        })

        this.$http.indi.get('j0033', null, (res) => {
          this.chinaRoamInUserNumber = res.data.data[0].IN_NUM;
          this.chinaRoamOutUserNumber = res.data.data[0].OUT_NUM;
        })
        //省内漫游的数据
      } else if (countryOrProvince === 'province') {
        this.jilinSymbol = false;
        this.jilinSymbol1 = false;
        let option = _options.optionForJilin;
        let optionBg = _options.optionBgForJilin;
        // this.myChart.setOption(option);
        // this.myChartBg.setOption(optionBg);

        // console.log(this.myChart.getOption());

        this.$http.indi.get('j0037', null, (res) => {
          this.topInListForJilin = res.data.data;
          option.title.text = `统计时间：${new Date(res.data.data[0].DATA_TIME).pattern('yyyy-MM-dd hh:mm')}`
          option.visualMap.min = res.data.data[8].KPI_VALUE;
          option.visualMap.max = res.data.data[0].KPI_VALUE;
          if (reloadDataFlag) {
            option.visualMap.range = [option.visualMap.min, option.visualMap.max];
          } else if (this.currentJilinRange.length) {
            option.visualMap.range = this.currentJilinRange;
          }
          // if (this.currentJilinRange.length) {
          //   option.visualMap.range = this.currentJilinRange;
          // } else {
          //   this.currentJilinRange = [option.visualMap.min, option.visualMap.max];
          // }
          option.series[0].data = [];
          for (let x of res.data.data) {
            option.series[0].data.push({
              name: x.CITY_NAME,
              value: x.KPI_VALUE
            });
          }
          this.myChart.setOption(option);
          this.myChartBg.setOption(optionBg);

          this.myChart.on('datarangeselected', (range) => {
            this.currentJilinRange = range.selected;
          })
        })

        this.$http.indi.get('j0038', null, (res) => {
          this.topOutListForJilin = res.data.data;
        })

        this.$http.indi.get('j0036', null, (res) => {
          this.jilinRoamUserNumber = res.data.data[0].OUT_NUM;
          // this.jilinRoamInUserNumber = res.data.data[0].IN_NUM;
          // this.jilinRoamOutUserNumber = res.data.data[0].OUT_NUM;
        })
      }
      // this.$http.indi.get('j0040', {region_name: '长春龙嘉机场'}, (res) => {
      //   console.log(res.data.data);
      // })
      else if(countryOrProvince === 'world'){
        let option = _options.optionForWorld;
        let optionBg = _options.optionBgForWorld;
        //装载数据
        this.$http.indi.get('j0087', null, (res) => {//j0089
          if(res.data.data && res.data.data.length){
          this.worldRoaminData = res.data.data.slice(0,10);
          option.title.text = `统计时间：${new Date(res.data.data[0].DATA_TIME).pattern('yyyy-MM-dd hh:mm')}`
          let localData=res.data.data.sort((a,b)=>{
              return a.KPI_VALUE-b.KPI_VALUE
          })
          option.visualMap.min = localData[0].KPI_VALUE;
          option.visualMap.max = localData[localData.length-1].KPI_VALUE;
          option.series[0].data = [];
          option.series[1].data = [];
          for (let x of res.data.data) {
                if (region.geoCoordMap[x.KPI_NAME]) {
                  option.series[0].data.push({
                    coords: [
                      region.geoCoordMap[x.KPI_NAME],
                      region.geoCoordMap['吉林']
                    ],
                    value: x.KPI_VALUE
                  });
                  option.series[1].data.push({
                    name: x.KPI_NAME,
                    value: [ ...region.geoCoordMap[x.KPI_NAME], x.KPI_VALUE]
                  });
                }
          }
          this.myChart.setOption(option);
          this.myChartBg.setOption(optionBg);
          this.jilinSymbol = false;
          this.jilinSymbol1 = true;
        //   this.myChart.on('datarangeselected', (range) => {
        //     clearTimeout(this.throttleTimer);
        //     this.throttleTimer = setTimeout(() => {
        //       this.currentChinaRange = range.selected;
        //       option.visualMap.range = this.currentChinaRange;
        //       option.series[0].data = [];
        //       option.series[1].data = [];
        //       for (let x of res.data.data) {
        //         for (let y in region.geoCoordMap) {
        //           if (y.includes(x.PROVINCE_NAME) || x.PROVINCE_NAME.includes(y)) {
        //             let value = x.KPI_VALUE
        //             if (value <= range.selected[1] && value >= range.selected[0]) {
        //               option.series[0].data.push({
        //                 coords: [
        //                   region.geoCoordMap[y],
        //                   region.geoCoordMap['吉林']
        //                 ],
        //                 value: x.KPI_VALUE
        //               });
        //               option.series[1].data.push({
        //                 name: x.PROVINCE_NAME,
        //                 value: [region.geoCoordMap[y][0], region.geoCoordMap[y][1], x.KPI_VALUE]
        //               });
        //             }
        //           }
        //         }
        //       }
        //       this.myChart.setOption(option);
        //     }, 300);
        //   })

            }
          
        })
        this.$http.indi.get('j0088', null, (res) => {//j0090
          this.worldRoamoutData = res.data.data.slice(0,10);
        })

        // this.$http.indi.get('j0033', null, (res) => {
        //   this.chinaRoamInUserNumber = res.data.data[0].IN_NUM;
        //   this.chinaRoamOutUserNumber = res.data.data[0].OUT_NUM;
        // })
      }
    },
    //装载国际漫入漫出数据和统计数据
    loadInternatalData(){
        //漫入统计
        this.worldRoaminUserCount = this.worldRoamoutUserCount = 0;
        this.$http.indi.get('j0086' , null, res=>{//本地测试id j0088
            if(res.data.data && res.data.data.length){
                this.worldRoaminUserCount=res.data.data[0].KPI_VALUE;
                this.worldRoamoutUserCount=res.data.data[1].KPI_VALUE;
            }
        })
    }
  },
  mounted() {
    this.Echarts.registerMap('jilin', _jilin); // 注册吉林地图
    this.Echarts.registerMap('world', world); // 世界地图注册
    this.myChart = this.Echarts.init(document.getElementById('top-chart'));
    this.myChartBg = this.Echarts.init(document.getElementById('top-chart-bg'));

    // let option = _options.optionForChina;
    // let optionBg = _options.optionBgForChina;
    // this.myChart.setOption(option);
    // this.myChartBg.setOption(optionBg);

    this.getDateAndRender(this.countryOrProvince, true);
    this.loadInternatalData();
  },
  beforeDestroy() {
    this.myChart && this.myChart.dispose();
    this.myChartBg && this.myChartBg.dispose();
  },
  components: {

  }
}
</script>
