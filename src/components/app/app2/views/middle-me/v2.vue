<template>
  <view-template>
    <div class="a2_v2">
      <div class="part1">
        <!-- 线路条数 -->
        <div class="lineNum">
          <div class="line">
            <div class="text">线路条数</div>
            <div class="count">
              <counter :data="num1" :config="config1"></counter>
            </div>
          </div>
          <div class="mile">
            <div class="text">专线里程数(公里)</div>
            <div class="count">
              <counter :data="num2" :config="config1"></counter>
            </div>
          </div>
        </div>
        <!-- RRU -->
        <div class="RRU">
          <div class="row1">
            <div class="text">RRU总数</div>
            <div class="count">
              <counter :data="num3" :config="config2"></counter>
            </div>
          </div>
          <div class="row2">
            <div class="text">
              <div class="text1">中断RRU</div>
              <div class="text2">总数</div>
            </div>
            <div class="count">
              <!-- <counter :data="num3" :config="config2"></counter> -->
              <div class="count1">
                 <counter :data="num3" :config="config2"></counter>
              </div>
              <div class="des">
                <div class="des1">GSM-RRU</div>
                <div class="des2">LTE-RRU</div>
              </div>
              <div class="count3">
                <div class="count31">
                    <counter :data="num4" :config="config2"></counter>
                </div>
                <div class="count32">
                  <counter :data="num5" :config="config2"></counter>
                </div>
              </div>
            </div>
          </div>
          <div class="row3">
            <div class="text">干扰小区数量</div>
            <div class="count">
              <counter :data="num6" :config="config2"></counter>
            </div>
          </div>
          <div class="row4">
            <div class="text">故障影响业务数量</div>
            <div class="count">
              <counter :data="num7" :config="config2"></counter>
            </div>
          </div>
        </div>
        <!-- 当前用户 -->
        <div class="user">
          <div class="text1">当前用户数</div>
          <div class="count1">
            <counter :data="user1" :config="config3"></counter>
          </div>
          <div class="text2">
            <div class="text21">2G用户数</div>
            <div class="text22">4G用户数</div>
            <div class="text23">VOLTE用户数</div>
          </div>
          <div class="count2">
            <div class="count21">
                <counter :data="user2" :config="config3"></counter>
            </div>
            <div class="count22">
                <counter :data="user3" :config="config3"></counter>
            </div>
            <div class="count23">
                <counter :data="user4" :config="config3"></counter>
            </div>
          </div>
        </div>
        <!-- 话务量 -->
        <div class="tel">
          <div class="top">
            <div class="text1">
              <div class="text11">话务量</div>
              <div class="text12">(Erl)</div>
            </div>
            <div class="count1">
              <counter :data="tel1" :config="config4"></counter>
            </div>
            <div class="text2">
              <div class="text21">GSM话务量</div>
              <div class="text22">VOLTE话务量</div>
            </div>
            <div class="count2">
              <div class="count21">
                <counter :data="tel2" :config="config4"></counter>
              </div>
              <div class="count22">
                <counter :data="tel3" :config="config4"></counter>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="text">流量(GB)</div>
            <div class="count">
              <counter :data="tel4" :config="config4"></counter>
            </div>
          </div>
        </div>
        <!-- 高铁线路 -->
        <div class="highway">
          <div class="text">高铁线路</div>
          <div class="button"></div>
        </div>
        <!-- 高铁站 -->
        <div class="station">
          <div class="text">高铁站</div>
          <div class="button"></div>
        </div>
      </div>
      <div class="baidu_map" id="baidu_map"></div>
      <div class='legend-div'>
        <div :class="{'cut-active':active1}" @click="changeActive1">
          <div><img src='../../assets/img/middle/gis_1.png'></div>
          <span>2G基站退服</span>
        </div>
        <div :class="{'cut-active':active2}" @click="changeActive2">
          <div><img src='../../assets/img/middle/gis_2.png'></div>
          <span>4G基站退服</span>
        </div>
        <div :class="{'cut-active':active3}" @click="changeActive3">
          <div><img src='../../assets/img/middle/gis_3.png'></div>
          <span>OLT基站退服</span>
        </div>
      </div>
    </div>
  </view-template>
</template>
<script>
import './v2.scss';
// import echarts from 'echarts';
// import BMap from 'Bmap';
// import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT'
var icon1 = require('../../assets/img/middle/gis_2.png');
var icon2 = require('../../assets/img/middle/gis_2.png');
var icon3 = require('../../assets/img/middle/gis_3.png');
export default {
  data() {
    return {
      // baidu_map
      map: null,
      active1: false,
      active2: false,
      active3: false,
      gather: {
        p1: {points: [[125, 43], [125.1, 43.1], [125.2, 43.2]], pointsStore: [], icon: icon1}, // 2G
        p2: {points: [[126, 43], [126.1, 43.1], [126.2, 43.2]], pointsStore: [], icon: icon2}, // 4G
        p3: {points: [[124, 43], [124.1, 43.1], [124.2, 43.2]], pointsStore: [], icon: icon3} // OLT
      },
      center: [
        {
          name: '吉林市',
          pos: [126.55, 43.83]
        },
        {
          name: '四平市',
          pos: [124.35, 43.17]
        },
        {
          name: '辽源市',
          pos: [125.13, 42.88]
        },
        {
          name: '通化市',
          pos: [125.93, 41.73]
        },
        {
          name: '白山市',
          pos: [126.42, 41.93]
        },
        {
          name: '松原市',
          pos: [124.82, 45.13]
        },
        {
          name: '白城市',
          pos: [122.83, 45.62]
        },
        {
          name: '延边朝鲜族自治州',
          pos: [129.50, 42.88]
        }
      ],
      // 线路条数num1、专线里程数num2
      num1: 123,
      num2: 456,
      // RRU总数
      num3: 123,
      num4: 456,
      num5: 789,
      num6: 123,
      num7: 456,
      // 用户总数
      user1: 123,
      user2: 123,
      user3: 123,
      user4: 123,
      // 话务量
      tel1: 123,
      tel2: 123,
      tel3: 123,
      tel4: 123,
      // 线路条数
      config1: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#e5f0ff',
            fontSize: 20,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 4 // 数字之间间距
        }
        // suffix: {
        //   // 后缀配置项
        //   content: '%',
        //   marginLeft: 0,
        //   textStyle: {
        //     color: '#e5f0ff',
        //     fontSize: 14,
        //     fontWeight: 'normal',
        //     fontFamily: 'MF_LangQian'
        //   }
        // }
      },
      // RRU
      config2: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#e5f0ff',
            fontSize: 20,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 4 // 数字之间间距
        }
      },
      // 用户总数
      config3: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#e5f0ff',
            fontSize: 20,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 4 // 数字之间间距
        }
      },
      // 话务量
      config4: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#e5f0ff',
            fontSize: 20,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 4 // 数字之间间距
        }
      }
    }
  },
  mounted() {
    this.baiduMap();
  },
  methods: {
    goback() {
      this.$router.go(-1)
    },
    baiduMap() {
      this.map = new BMap.Map('baidu_map', {
        mapType: BMAP_HYBRID_MAP
      });
      this.map.centerAndZoom(new BMap.Point(125.32, 43.90), 7);
      this.map.enableScrollWheelZoom(true);
    },
    // 选中样式调节
    changeActive1() {
      this.active1 = !this.active1;
      if (this.active1) {
        this.addMaker(this.gather.p1)
      } else {
        this.clearMaker(this.gather.p1);
      }
    },
    changeActive2() {
      this.active2 = !this.active2;
      if (this.active2) {
        this.addMaker(this.gather.p2)
      } else {
        this.clearMaker(this.gather.p2);
      }
    },
    changeActive3() {
      this.active3 = !this.active3;
      if (this.active3) {
        this.addMaker(this.gather.p3)
      } else {
        this.clearMaker(this.gather.p3);
      }
    },
    // 获取行政地界
    getBoundary() {
      let self = this;
      var bdary = new BMap.Boundary();
      bdary.get('吉林省', function(res) {
        if (res.boundaries.length) {
          for (var i = 0; i < res.boundaries.length; i++) {
            var ply = new BMap.Polyline(res.boundaries[i], {
              strokeWeight: 1,
              strokeColor: '#34f9dc',
              enableClicking: false
            });
            self.map.addOverlay(ply);
          }
          // console.log(this)
        }
      })
    },
    // 打点函数
    addMaker(item) {
      for (var i = 0; i < item.points.length; i++) {
        var p = new BMap.Point(...item.points[i]);
        var icon = new BMap.Icon(item.icon, new BMap.Size(50, 50));
        var maker = new BMap.Marker(p, {icon: icon});
        item.pointsStore.push(maker);
        this.map.addOverlay(maker);
      }
    }
  },
  computed: {
    cityName() {
      return this.$store.state.cityName
    }
  },
  watch: {
    cityName() {
      if (this.cityName === '吉林市') {
        this.map.panTo(new BMap.Point(126.55, 43.83))
        this.map.setZoom(11)
      }
      if (this.cityName === '四平市') {
        this.map.panTo(new BMap.Point(124.35, 43.17))
        this.map.setZoom(11)
      }
      if (this.cityName === '辽源市') {
        this.map.panTo(new BMap.Point(125.13, 42.88))
        this.map.setZoom(11)
      }
      if (this.cityName === '通化市') {
        this.map.panTo(new BMap.Point(125.93, 41.73))
        this.map.setZoom(11)
      }
      if (this.cityName === '白山市') {
        this.map.panTo(new BMap.Point(126.42, 41.93))
        this.map.setZoom(11)
      }
      if (this.cityName === '松原市') {
        this.map.panTo(new BMap.Point(124.82, 45.13))
        this.map.setZoom(11)
      }
      if (this.cityName === '白城市') {
        this.map.panTo(new BMap.Point(122.83, 45.62))
        this.map.setZoom(11)
      }
      if (this.cityName === '延边朝鲜族自治州') {
        this.map.panTo(new BMap.Point(129.50, 42.88))
        this.map.setZoom(11)
      }
    }
  }
}
</script>
