<template>
  <view-template class="a1_v21">
      <div id="baidu_map" class="baidu">
      </div>
      <!-- 收费站 -->
      <div class="shoufeizhan" @click="changeshoufei()">
        <div class="shoufeiicon"></div>
        <div class="shoufeiword">收费站</div>
      </div>
      <div class="shoufeilist" v-show="shoufeiview">
        <div class="sonshoufeilist" v-for="(item, index) in shoufeilist" @click="checkshoufei(item, index)" :class="{'active': isactive === index}">{{item.name}}</div>
      </div>
      <!-- 客运站 -->
      <div class="keyunzhan"  @click="changekeyun()">
        <div class="keyunicon"></div>
        <div class="keyunword">客运站</div>
      </div>
      <div class="keyunlist" v-show="keyunview">
        <div class="sonkeyunlist" v-for="(item, index) in keyunlist" @click="checkkeyun(item, index)" :class="{'active': isactive1 === index}">{{item.name}}</div>
      </div>
      <!-- 高铁线路 -->
      <div class="gaosu" @click="changegaosu()">
        <div class="gaosuicon"></div>
        <div class="gaosuword">高速线路</div>
      </div>
      <div class="gaosulist" v-show="gaosuview">
        <div class="songaosulist" v-for="(item, index) in gaosulist" @click="checkgaosu(item, index)" :class="{'active': isactive2 === index}"><span>{{item.name}}</span></div>
      </div>
      <!-- 四个框 -->
      <div class="kuang1">
        <div>线路条数</div>
        <div>专线总里程(公里)</div>
        <div>{{num1}}</div>
        <div>{{num2}}</div>
      </div>
      <div class="kuang2">
        <div>当前用户数</div>
        <div>{{num3}}</div>
        <div>2G用户数</div>
        <div>4G用户数</div>
        <div>VOLTE用户数</div>
        <div>{{num4}}</div>
        <div>{{num5}}</div>
        <div>{{num6}}</div>
      </div>
      <div class="kuang4">
        <div>话务量<br>(Erl)</div>
        <div>流量(GB)</div>
        <div>{{num7}}</div>
        <div>GSM话务量</div>
        <div>VOLTE话务量</div>
        <div>{{num8}}</div>
        <div>{{num9}}</div>
        <div>{{num10}}</div>
      </div>
      <div class="kuang3">
        <div>退服基站<br>总数</div>
        <div>干扰小区数量</div>
        <div>故障影响业务数量</div>
        <div>{{num11}}</div>
        <div>GSM-RRU</div>
        <div>LTE-RRU</div>
        <div>{{num12}}</div>
        <div>{{num13}}</div>
        <div>{{num14}}</div>
        <div>{{num15}}</div>
      </div>
  </view-template>
</template>
<script>
import './v21.scss'
var shoufeiicon = require('./img/shoufeizhan.png')
var keyunzhanicon = require('./img/keyunzhan.png')
// var gaosuluicon = require('./img/shoufei.png')
export default {
  data() {
    return {
      map: null,
      shoufeiview: false,
      keyunview: false,
      gaosuview: false,
      isactive: -1,
      isactive1: -1,
      isactive2: -1,
      num1: 2,
      num2: 12316,
      num3: 2,
      num4: 12316,
      num5: 2,
      num6: 12316,
      num7: 2,
      num8: 12316,
      num9: 2,
      num10: 12316,
      num11: 12316,
      num12: 2,
      num13: 12316,
      num14: 2,
      num15: 12316,
      // 收费站信息
      shoufeilist: [
        {name: '全部收费站'},
        {name: '东北虎收费站', LAT: 122.83, LNG: 45.62},
        {name: '东北虎收费站', LAT: 125.92, LNG: 44.49},
        {name: '东北虎收费站', LAT: 122.83, LNG: 45.13},
        {name: '东北虎收费站'},
        {name: '东北虎收费站'},
        {name: '东北虎收费站'},
        {name: '东北虎收费站'},
        {name: '东北虎收费站'},
        {name: '东北虎收费站'},
        {name: '东北虎收费站'}
      ],
      // 客运站信息
      keyunlist: [
        {name: '全部客运站'},
        {name: '东北虎客运站1', LAT: 125.15, LNG: 42.97},
        {name: '东北虎客运站2', LAT: 125.92, LNG: 41.49},
        {name: '东北虎客运站3', LAT: 126.42, LNG: 41.93},
        {name: '东北虎收费站收费站'},
        {name: '东北虎收费站'},
        {name: '东北虎收费站'},
        {name: '东北虎收费站'},
        {name: '东北虎收费站'},
        {name: '东北虎收费站'},
        {name: '东北虎收费站'}
      ],
      // 高速站信息
      gaosulist: [
        {name: '全部高速'},
        {name: '东北虎高速1', pos: [[126.57, 43.87], [124.35, 47.88], [123.57, 46.87]]}
      ],
      // 所有收费站经纬度
      allmakerlist: [
        [122.83, 45.62], [125.92, 44.49], [122.83, 45.13]
      ],
      // 所有客运站经纬度
      allmakerlist1: [
        [125.15, 42.97], [125.92, 41.49], [126.42, 41.93]
      ],
      // 存放线路
      posarr: [
        [125.35, 43.88],
        [126.57, 43.87],
        [124.35, 47.88],
        [123.57, 46.87]
      ],
      // 存放单个收费站经纬度
      sonmakerlist: [
        []
      ],
      // 存放单个客运站经纬度
      sonmakerlist1: [
        []
      ],
      // 存放单条路线
      sonmakerlist2: [
        []
      ],
      // 存放收费站maker
      makerbox: [],
      linebox: []
    }
  },
  mounted() {
    this.initMap()
    this.loaddata()
    // this.getBoundary('吉林省', 'black');
    this.loadMaker(this.allmakerlist, shoufeiicon)
    this.loadMaker(this.allmakerlist1, keyunzhanicon)
    this.addPolyline(this.posarr, '#26dc6f')
  },
  computed: {
    belongname() {
      return this.$store.state.belongname
    }
  },
  methods: {
    initMap() {
      this.map = new BMap.Map('baidu_map', {
        mapType: BMAP_HYBRID_MAP
        // mapType: BMAP_NORMAL_MAP
      });
      this.map.centerAndZoom(new BMap.Point(123.762448, 44.54470), 8);
      this.map.enableScrollWheelZoom(true)
    },
    // 获取边界
    getBoundary(name, color) {
      let bdary = new BMap.Boundary();
      bdary.get(name, (rs) => {
        // console.log(rs)
        this.map.clearOverlays();
        let count = rs.boundaries.length;
        if (count === 0) {
          alert('未能获取当前输入行政区域');
          return;
        }
        let pointArray = [];
        for (let i = 0; i < count; i++) {
          let ply = new BMap.Polygon(rs.boundaries[i], {strokeWeight: 5, strokeColor: color, fillColor: 'transparent'});
          this.map.addOverlay(ply)
          pointArray = pointArray.concat(ply.getPath());
        }
        this.map.setViewport(pointArray);
      })
    },
    // 数据打点
    loadMaker(makertype, icontype) {
      for (let i = 0; i < makertype.length; i++) {
        var pt = new BMap.Point(...makertype[i])
        var icon = new BMap.Icon(icontype, new BMap.Size(100, 100))
        var maker = new BMap.Marker(pt, {icon: icon});
        this.map.addOverlay(maker);
        this.makerbox.push(maker)
      }
    },
    // 划线
    addPolyline(polylineArray, color) {
      var pois = []
      for (let i = 0; i < polylineArray.length; i++) {
        pois.push(new BMap.Point(...polylineArray[i]))
      }
      var polyline = new BMap.Polyline(pois, {
        strokeColor: color,
        strokeWeight: 6,
        strokeOpacity: 0.8,
        strokeStyle: 'dashed'
      })
      this.map.addOverlay(polyline)
      this.linebox.push(polyline)
    },
    // 选择收费站
    changeshoufei() {
      this.$store.state.belongname = '全部收费'
      this.shoufeiview = !this.shoufeiview
      this.keyunview = false
      this.gaosuview = false
      this.$http.indi.get('jgs0036', {dimension_type: '全部收费'}, res => {
        this.num3 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0037', {dimension_type: '全部收费'}, res => {
        this.num4 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0038', {dimension_type: '全部收费'}, res => {
        this.num5 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0039', {dimension_type: '全部收费'}, res => {
        this.num6 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0040', {dimension_type: '全部收费'}, res => {
        this.num11 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0041', {dimension_type: '全部收费'}, res => {
        this.num12 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0042', {dimension_type: '全部收费'}, res => {
        this.num13 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0043', {dimension_type: '全部收费'}, res => {
        this.num14 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0044', {dimension_type: '全部收费'}, res => {
        this.num15 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0045', {dimension_type: '全部收费'}, res => {
        this.num7 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0046', {dimension_type: '全部收费'}, res => {
        this.num8 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0047', {dimension_type: '全部收费'}, res => {
        this.num9 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0048', {dimension_type: '全部收费'}, res => {
        this.num10 = res.data.data[0].KPI_VALUE
      })
    },
    // 选择客运
    changekeyun() {
      this.$store.state.belongname = '全部客运'
      this.keyunview = !this.keyunview
      this.shoufeiview = false
      this.gaosuview = false
      this.$http.indi.get('jgs0036', {dimension_type: '全部客运'}, res => {
        this.num3 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0037', {dimension_type: '全部客运'}, res => {
        this.num4 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0038', {dimension_type: '全部客运'}, res => {
        this.num5 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0039', {dimension_type: '全部客运'}, res => {
        this.num6 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0040', {dimension_type: '全部客运'}, res => {
        this.num11 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0041', {dimension_type: '全部客运'}, res => {
        this.num12 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0042', {dimension_type: '全部客运'}, res => {
        this.num13 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0043', {dimension_type: '全部客运'}, res => {
        this.num14 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0044', {dimension_type: '全部客运'}, res => {
        this.num15 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0044', {dimension_type: '全部客运'}, res => {
        this.num15 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0045', {dimension_type: '全部客运'}, res => {
        this.num7 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0046', {dimension_type: '全部客运'}, res => {
        this.num8 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0047', {dimension_type: '全部客运'}, res => {
        this.num9 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0048', {dimension_type: '全部客运'}, res => {
        this.num10 = res.data.data[0].KPI_VALUE
      })
    },
    // 选择高速
    changegaosu() {
      this.$store.state.belongname = '全部高速'
      this.gaosuview = !this.gaosuview
      this.keyunview = false
      this.shoufeiview = false
    },
    // 选择具体收费站
    checkshoufei(item, index) {
      this.isactive = index
      this.$store.state.belongname = `${item.name}`
      if (index === 0) {
        this.clearMaker(this.makerbox)
        this.clearLine(this.linebox)
        this.loadMaker(this.allmakerlist1, keyunzhanicon)
        this.isactive1 = 0
        this.isactive2 = 0
        this.$http.indi.get('jgs0054', {kpi_name: '全部收费站'}, res => {
          // console.log(res)
          this.allmakerlist = []
          if (res.data.data.length > 0) {
            for (let i = 0; i < res.data.data.length; i++) {
              this.allmakerlist.push([res.data.data[i].LONGITUDE, res.data.data[i].LATITUDE])
            }
            this.loadMaker(this.allmakerlist, shoufeiicon)
          }
        })
      } else {
        this.clearMaker(this.makerbox)
        this.clearLine(this.linebox)
        this.sonmakerlist[0] = [this.shoufeilist[index].LAT, this.shoufeilist[index].LNG]
        // this.loadMaker(this.sonmakerlist, shoufeiicon)
        this.loadMaker(this.allmakerlist1, keyunzhanicon)
        this.isactive1 = 0
        this.isactive2 = 0
        this.sonmakerlist[0] = []
        this.$http.indi.get('jgs0053', {kpi_name: `${item.name}`}, res => {
          // console.log(res)
          if (res.data.data.length > 0) {
            this.sonmakerlist[0].push(res.data.data[0].LONGITUDE, res.data.data[0].LATITUDE)
          }
          this.loadMaker(this.sonmakerlist, shoufeiicon)
        })
      }
    },
    // 选择具体客运站
    checkkeyun(item, index) {
      this.isactive1 = index
      this.$store.state.belongname = `${item.name}`
      if (index === 0) {
        this.clearMaker(this.makerbox)
        this.clearLine(this.linebox)
        this.loadMaker(this.allmakerlist, shoufeiicon)
        this.isactive = 0
        this.isactive2 = 0
        this.$http.indi.get('jgs0057', {kpi_name: '全部客运站'}, res => {
          // console.log(res)
          this.allmakerlist1 = []
          if (res.data.data.length > 0) {
            for (let i = 0; i < res.data.data.length; i++) {
              this.allmakerlist1.push([res.data.data[i].LONGITUDE, res.data.data[i].LATITUDE])
            }
            this.loadMaker(this.allmakerlist1, keyunzhanicon)
          }
        })
      } else {
        this.clearMaker(this.makerbox)
        this.clearLine(this.linebox)
        // this.sonmakerlist1[0] = [this.keyunlist[index].LAT, this.keyunlist[index].LNG]
        this.loadMaker(this.allmakerlist, shoufeiicon)
        this.isactive = 0
        this.isactive2 = 0
        this.sonmakerlist1[0] = []
        this.$http.indi.get('jgs0056', {kpi_name: `${item.name}`}, res => {
          // console.log(res)
          if (res.data.data.length > 0) {
            this.sonmakerlist1[0].push(res.data.data[0].LONGITUDE, res.data.data[0].LATITUDE)
          }
          this.loadMaker(this.sonmakerlist1, keyunzhanicon)
        })
      }
    },
    // 选择具体线路
    checkgaosu(item, index) {
      this.isactive2 = index
      this.$store.state.belongname = `${item.name}`
      if (index === 0) {
        this.clearMaker(this.makerbox)
        this.clearLine(this.linebox)
        this.loadMaker(this.allmakerlist1, keyunzhanicon)
        this.loadMaker(this.allmakerlist, shoufeiicon)
        // this.addPolyline(this.posarr, '#26dc6f')
        this.isactive = 0
        this.isactive1 = 0
        this.$http.indi.get('jgs0051', {kpi_name: '全部高速'}, res => {
          // console.log(res)
          if (res.data.data.length > 0) {
            this.posarr = []
            for (let i = 0; i < res.data.data.length; i++) {
              this.posarr.push([res.data.data[i].LONGITUDE, res.data.data[i].LATITUDE])
            }
            this.addPolyline(this.posarr, '#7C6CDB')
          }
        })
      } else {
        this.clearMaker(this.makerbox)
        this.clearLine(this.linebox)
        // this.sonmakerlist2 = this.gaosulist[index].pos
        this.loadMaker(this.allmakerlist1, keyunzhanicon)
        this.loadMaker(this.allmakerlist, shoufeiicon)
        // this.addPolyline(this.sonmakerlist2, '#26dc6f')
        this.isactive = 0
        this.isactive1 = 0
        // 获取具体高速
        this.$http.indi.get('jgs0050', {kpi_name: `${item.name}`}, res => {
          // console.log(res)
          if (res.data.data.length > 0) {
            this.sonmakerlist2 = []
            for (let i = 0; i < res.data.data.length; i++) {
              this.sonmakerlist2.push([res.data.data[i].LONGITUDE, res.data.data[i].LATITUDE])
            }
            this.addPolyline(this.sonmakerlist2, '#7C6CDB')
          }
        })
      }
    },
    // 清理打点
    clearMaker(makertype) {
      for (let i = 0; i < makertype.length; i++) {
        this.map.removeOverlay(makertype[i])
      }
      makertype = []
    },
    // 清理画线
    clearLine(linetype) {
      for (let i = 0; i < linetype.length; i++) {
        this.map.removeOverlay(linetype[i])
      }
      linetype = []
    },
    loaddata() {
      this.$http.indi.get('jgs0030', {dimension_type: '全部高速'}, res => {
        this.num1 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0031', {dimension_type: '全部高速'}, res => {
        this.num2 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0036', {dimension_type: '全部高速'}, res => {
        this.num3 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0037', {dimension_type: '全部高速'}, res => {
        this.num4 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0038', {dimension_type: '全部高速'}, res => {
        this.num5 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0039', {dimension_type: '全部高速'}, res => {
        this.num6 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0040', {dimension_type: '全部高速'}, res => {
        this.num11 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0041', {dimension_type: '全部高速'}, res => {
        this.num12 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0042', {dimension_type: '全部高速'}, res => {
        this.num13 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0043', {dimension_type: '全部高速'}, res => {
        this.num14 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0044', {dimension_type: '全部高速'}, res => {
        this.num15 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0045', {dimension_type: '全部高速'}, res => {
        this.num7 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0046', {dimension_type: '全部高速'}, res => {
        this.num8 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0047', {dimension_type: '全部高速'}, res => {
        this.num9 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0048', {dimension_type: '全部高速'}, res => {
        this.num10 = res.data.data[0].KPI_VALUE
      })
      this.$http.indi.get('jgs0049', {}, res => {
        // console.log(res)
        this.gaosulist = []
        if (res.data.data.length > 0) {
          for (let i = 0; i < res.data.data.length; i++) {
            this.gaosulist.push({'name': res.data.data[i].KPI_NAME})
          }
          this.gaosulist.unshift({'name': '全部高速'})
        }
      })
      this.$http.indi.get('jgs0052', {}, res => {
        // console.log(res)
        this.shoufeilist = []
        if (res.data.data.length > 0) {
          for (let i = 0; i < res.data.data.length; i++) {
            this.shoufeilist.push({'name': res.data.data[i].KPI_NAME})
          }
          this.shoufeilist.unshift({'name': '全部收费站'})
        }
      })
      this.$http.indi.get('jgs0055', {}, res => {
        // console.log(res)
        this.keyunlist = []
        if (res.data.data.length > 0) {
          for (let i = 0; i < res.data.data.length; i++) {
            this.keyunlist.push({'name': res.data.data[i].KPI_NAME})
          }
          this.keyunlist.unshift({'name': '全部客运站'})
        }
      })
    }
  }
}
</script>
