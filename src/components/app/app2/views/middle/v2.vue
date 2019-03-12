<template>
  <view-template class="a1_v21" :interval="5" @interval="loadDatas">
    <div id="baidu_map" class="baidu">
    </div>
    <!-- 高铁站 -->
    <div class="keyunzhan" @click="changekeyun()">
      <div class="keyunicon"></div>
      <div class="keyunword">高铁站</div>
      <div id="keyunArrow" :class="isActive2?'arrow-active2':'arrow2'"></div>
    </div>
    <div class="keyunlistBox" id="keyunlistBox" v-show="keyunview" ref="main">
      <ul class="keyunlist">
        <li class="sonkeyunlist" v-for="(item, index) in keyunlist" :key="item.index" @click="checkkeyun(item, index);changeHide(item.name)" :class="{'active': isactive1 === index}">{{item.name}}</li>
      </ul>
    </div>
    <!-- 高铁线路 -->
    <div class="gaosu" @click="changegaosu()">
      <div class="gaosuicon"></div>
      <div class="gaosuword">高铁线路</div>
      <div :class="isActive?'arrow-active':'arrow'"></div>
    </div>
    <div class="gaosulistBox" v-show="gaosuview">
      <ul class="gaosulist">
        <li class="songaosulist" v-for="(item, index) in gaosulist" :key="item.index" @click="checkline(item, index);changeHide(item.name)" :class="{'active': isactive2 === index}"><span>{{item.name}}</span></li>
      </ul>
    </div>
    <div class="part1">
      <!-- 线路条数 -->
      <div class="lineNum">
        <div class="line">
          <div class="text" id="lineText1" v-show="gaosuLine">{{textLine1}}</div>
          <div class="text" v-show="gaosuStation">{{textStation1}}</div>
          <div class="count">
            <counter :data="para ? num1 : num1S" :config="config1"></counter>
          </div>
        </div>
        <div class="mile">
          <div class="text" id="lineText2" v-show="gaosuLine">{{textLine2}}</div>
          <div class="text" v-show="gaosuStation">{{textStation2}}</div>
          <div class="count">
            <counter :data="paraS ? num2 : num2S" :config="config1"></counter>
          </div>
        </div>
      </div>
      <!-- RRU -->
      <div class="RRU">
        <div class="row1">
          <div class="text">{{textRRU1}}</div>
          <div class="count">
            <counter :data="numS3" :config="config2"></counter>
          </div>
        </div>
        <div class="row2">
          <div class="text">
            <div class="text1">{{textRRU2}}</div>
          </div>
          <div class="count">
            <!-- <counter :data="num3" :config="config2"></counter> -->
            <div class="count1">
                <counter :data="num3" :config="config2"></counter>
            </div>
            <div class="des">
              <div class="des1">{{textRRU5}}</div>
              <div class="des2">{{textRRU6}}</div>
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
          <div class="text">{{textRRU3}}</div>
          <div class="count">
            <counter :data="num6" :config="config2"></counter>
          </div>
        </div>
        <div class="row4">
          <div class="text">{{textRRU4}}</div>
          <div class="count">
            <counter :data="num7" :config="config2"></counter>
          </div>
        </div>
      </div>
      <!-- 当前用户 -->
      <div class="user">
        <div class="text1">{{textUser1}}</div>
        <div class="count1">
          <counter :data="user1" :config="config3"></counter>
        </div>
        <div class="text2">
          <div class="text21">{{textUser2}}</div>
          <div class="text22">{{textUser3}}</div>
          <div class="text23">{{textUser4}}</div>
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
            <div class="text11">{{textTel1}}</div>
            <!-- <div class="text12">(Erl)</div> -->
          </div>
          <div class="count1">
            <counter :data="tel1" :config="config4"></counter>
          </div>
          <div class="text2">
            <div class="text21">{{textTel2}}</div>
            <div class="text22">{{textTel3}}</div>
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
          <div class="text">{{textTel4}}</div>
          <div class="count">
            <counter :data="tel4" :config="config4"></counter>
          </div>
        </div>
      </div>
    </div>
  </view-template>
</template>
<script>
import './v2.scss'
// var shoufeiicon = require('./img/shoufeizhan.png')
var keyunzhanicon = require('./img/keyunzhan.png')
export default {
  data() {
    return {
      map: null,
      shoufeiview: false,
      keyunview: false,
      gaosuview: false,
      isactive: 0,
      isactive1: 0,
      isactive2: 0,
      isActive: 0,
      isActive2: 0,
      // 线路条数
      textLine1: '线路条数',
      textLine2: '专线里程数(公里)',
      textStation1: '车站数量',
      textStation2: 'RRU数量',
      gaosuLine: true,
      gaosuStation: false,
      // 用户数
      textUser1: '当前用户数',
      textUser2: '2G用户数',
      textUser3: '4G用户数',
      textUser4: 'VOLTE用户数',
      // RRU线路
      textRRU1: '线路总数',
      textRRU2: '中断RRU总数',
      textRRU3: '干扰小区数量',
      textRRU4: '故障影响业务质量',
      textRRU5: 'GSM-RRU',
      textRRU6: 'LTE-RRU',
      // 话务量
      textTel1: '话务量(Erl)',
      textTel2: 'GSM话务量',
      textTel3: 'VOLTE话务量',
      textTel4: '流量(GB)',
      // 高铁站信息
      keyunlist: [
        {name: '全部高铁'},
        {name: '吉林站', LAT: 125.15, LNG: 42.97},
        {name: '长春站', LAT: 125.92, LNG: 41.49},
        {name: 'xx站', LAT: 126.42, LNG: 41.93},
        {name: 'xx站', LAT: 126.42, LNG: 41.93},
        {name: 'xx站', LAT: 126.42, LNG: 41.93}
        // {name: 'xx站', LAT: 126.42, LNG: 41.93},
        // {name: 'xx站', LAT: 126.42, LNG: 41.93},
        // {name: 'xx站', LAT: 126.42, LNG: 41.93},
        // {name: 'xx站', LAT: 126.42, LNG: 41.93},
        // {name: 'xx站', LAT: 126.42, LNG: 41.93}
      ],
      // 高速线路信息
      gaosulist: [
        {name: '全部高铁'},
        {name: '长吉高铁', LAT: 125.32, LNG: 43.90},
        // {name: '长吉高铁', LAT: [125.32, 125.98, 126.8], LNG: [43.90, 43.1, 12.6]},
        {name: '哈大高铁', LAT: 124.35, LNG: 43.17},
        {name: '哈大高铁', LAT: 125.13, LNG: 42.88}
        // {name: 'xx高铁', LAT: 125.93, LNG: 41.73},
        // {name: 'xx高铁', LAT: 126.42, LNG: 41.93},
        // {name: 'xx高铁', LAT: 126.42, LNG: 41.93},
        // {name: 'xx高铁', LAT: 126.42, LNG: 41.93},
        // {name: 'xx高铁', LAT: 126.42, LNG: 41.93},
        // {name: 'xx高铁', LAT: 126.42, LNG: 41.93}
      ],
      // 所有收费站经纬度
      allmakerlist: [
        [122.83, 45.62], [125.92, 44.49], [122.83, 45.13]
      ],
      // 所有客运站经纬度 高铁站
      allmakerlist1: [
        [125.15, 42.97], [125.92, 41.49], [126.42, 41.93]
      ],
      // 所有高铁线路经纬度
      allLineList: [
        [125.32, 43.90], [126.55, 43.83], [125.13, 42.88], [126.42, 41.93], [122.83, 45.62], [124.35, 43.17], [125.93, 41.73], [124.82, 45.13], [129.50, 42.88]
      ],
      // allLineList1: [
      //   [125.32, 43.90], [124.35, 43.17], [125.93, 41.73], [124.82, 45.13], [129.50, 42.88]
      // ],
      // allLineList2: [
      //   [126.55, 43.83], [125.13, 42.88], [126.42, 41.93], [122.83, 45.62]
      // ],
      // 存放单个收费站经纬度
      sonmakerlist: [
        []
      ],
      // 存放单个客运站经纬度
      sonmakerlist1: [
        []
      ],
      // 存放收费站maker
      makerbox: [],
      // 存放单条高铁线路
      sonLineList: [
        [125.32, 43.90], [126.55, 43.83], [125.13, 42.88], [126.42, 41.93], [122.83, 45.62], [124.35, 43.17], [125.93, 41.73], [124.82, 45.13], [129.50, 42.88]
      ],
      points1: [
        [125.32, 43.90], [126.55, 43.83], [125.13, 42.88], [126.42, 41.93], [122.83, 45.62], [124.35, 43.17], [125.93, 41.73], [124.82, 45.13], [129.50, 42.88]
      ],
      points2: [
        [125.32, 43.90], [126.55, 43.83], [125.13, 42.88], [126.42, 41.93], [122.83, 45.62], [124.35, 43.17], [125.93, 41.73], [124.82, 45.13], [129.50, 42.88]
      ],
      points3: [
        [125.32, 43.90], [126.55, 43.83], [125.13, 42.88], [126.42, 41.93], [122.83, 45.62], [124.35, 43.17], [125.93, 41.73], [124.82, 45.13], [129.50, 42.88]
      ],
      // sonLineList: [],
      // sonLineList1: [],
      // sonLineList2: [],
      // 存放高铁线路line
      linebox: [],
      // part1
      para: true,
      paraS: true,
      // 线路条数num1、专线里程数num2
      num1: 123,
      num2: 456,
      num1S: 123123,
      num2S: 456456,
      // RRU总数
      numS3: 1233,
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
    this.initMap();
    this.loadMaker(this.allmakerlist1, keyunzhanicon);
    this.initData();
    // this.loadData();
    this.loadAllData();
    // this.loadDatas();
  },
  computed: {
    // belongname() {
    //   return this.$store.state.belongname;
    // }
    activeHighwayParam() {
      return this.$store.state.regionName;
    }
  },
  methods: {
    changeHide(item) {
      if (item === '全部高铁') {
        this.$store.state.regionName = '全部高铁'
      }
      if (item !== '全部高铁') {
        this.$store.state.regionName = item
      }
      // console.log(this.$store.state.regionName)
    },
    loadDatas() {
      this.loadData(this.activeHighwayParam);
      console.log(this.activeHighwayParam)
    },
    // loadDatas() {
    //   this.loadData(this.activeHighwayParam);
    //   console.log(this.activeHighwayParam)
    // },
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
    // 高铁线路 绿色
    loadSonLine1() {
      // 画线
      var a = [];
      var p;
      for (p of this.points1) {
        a.push(new BMap.Point(p[0], p[1]));
      }
      var polyline = new BMap.Polyline(a,
      {strokeColor: '#26dc6f', strokeWeight: 6, strokeOpacity: 0.8, strokeStyle: 'dashed'}
      );
      this.map.addOverlay(polyline);
      this.linebox.push(polyline)
    },
    loadSonLine1s() {
      // 画线
      var a = [];
      var p;
      for (p of this.points1) {
        a.push(new BMap.Point(p[0], p[1]));
      }
      var polyline = new BMap.Polyline(a,
      {strokeColor: '#eee', strokeWeight: 5, strokeOpacity: 1, strokeStyle: 'solid'}
      );
      this.map.addOverlay(polyline);
      this.linebox.push(polyline)
    },
    loadSonLine2() {
      // 画线
      var a = [];
      var p;
      for (p of this.points2) {
        a.push(new BMap.Point(p[0], p[1]));
      }
      var polyline = new BMap.Polyline(a,
      {strokeColor: '#aa4a1d', strokeWeight: 6, strokeOpacity: 0.8, strokeStyle: 'dashed'}
      );
      this.map.addOverlay(polyline);
      this.linebox.push(polyline)
    },
    loadSonLine2s() {
      // 画线
      var a = [];
      var p;
      for (p of this.points2) {
        a.push(new BMap.Point(p[0], p[1]));
      }
      var polyline = new BMap.Polyline(a,
      {strokeColor: '#eee', strokeWeight: 5, strokeOpacity: 1, strokeStyle: 'dashed'}
      );
      this.map.addOverlay(polyline);
      this.linebox.push(polyline)
    },
    loadSonLine3() {
      // 画线
      var a = [];
      var p;
      for (p of this.points3) {
        a.push(new BMap.Point(p[0], p[1]));
      }
      var polyline = new BMap.Polyline(a,
      {strokeColor: '#8e77fb', strokeWeight: 6, strokeOpacity: 0.8, strokeStyle: 'dashed'}
      );
      this.map.addOverlay(polyline);
      this.linebox.push(polyline)
    },
    loadSonLine3s() {
      // 画线
      var a = [];
      var p;
      for (p of this.points3) {
        a.push(new BMap.Point(p[0], p[1]));
      }
      var polyline = new BMap.Polyline(a,
      {strokeColor: '#eee', strokeWeight: 5, strokeOpacity: 1, strokeStyle: 'dashed'}
      );
      this.map.addOverlay(polyline);
      this.linebox.push(polyline)
    },
    loadLine() {
      // 画线
      var a = [];
      // var p1, p2, p3;
      var p1, p2;
      for (p1 of this.points1) {
        a.push(new BMap.Point(p1[0], p1[1]));
      }
      for (p2 of this.points2) {
        a.push(new BMap.Point(p2[0], p2[1]));
      }
      // for (p3 of this.points3) {
      //   a.push(new BMap.Point(p3[0], p3[1]));
      // }
      var polyline1 = new BMap.Polyline(a,
      {strokeColor: '#26dc6f', strokeWeight: 6, strokeOpacity: 0.8, strokeStyle: 'dashed'}
      );
      var polyline2 = new BMap.Polyline(a,
      {strokeColor: '#aa4a1d', strokeWeight: 6, strokeOpacity: 0.8, strokeStyle: 'dashed'}
      );
      // var polyline3 = new BMap.Polyline(a,
      // {strokeColor: '#8e77fb', strokeWeight: 6, strokeOpacity: 0.8, strokeStyle: 'dashed'}
      // );
      var polyline1s = new BMap.Polyline(a,
      {strokeColor: '#eee', strokeWeight: 5, strokeOpacity: 1, strokeStyle: 'solid'}
      );
      var polyline2s = new BMap.Polyline(a,
      {strokeColor: '#eee', strokeWeight: 5, strokeOpacity: 1, strokeStyle: 'solid'}
      );
      // var polyline3s = new BMap.Polyline(a,
      // {strokeColor: '#eee', strokeWeight: 5, strokeOpacity: 1, strokeStyle: 'solid'}
      // );
      this.map.addOverlay(polyline1s);
      this.map.addOverlay(polyline2s);
      // this.map.addOverlay(polyline3s);
      this.map.addOverlay(polyline1);
      this.map.addOverlay(polyline2);
      // this.map.addOverlay(polyline3);
      this.linebox.push(polyline1s);
      this.linebox.push(polyline2s);
      // this.linebox.push(polyline3s);
      this.linebox.push(polyline1);
      this.linebox.push(polyline2);
      // this.linebox.push(polyline3);
    },
    // 选择收费站
    changeshoufei() {
      this.shoufeiview = !this.shoufeiview
      this.keyunview = false
      this.gaosuview = false
    },
    // 选择高铁站
    changekeyun(event) {
      // 改变gaosuview的真假，控制gaosulist的显示与隐藏
      this.keyunview = !this.keyunview
      this.shoufeiview = false
      this.gaosuview = false
      // 改变isActive的真假，为真时，样式名为arrow-active，为假时，样式名为arrow。以此来改变箭头样式
      this.isActive2 = !this.isActive2
      // 改变文本内容
      this.gaosuLine = false;
      this.gaosuStation = true;
      // 改变文本内容
      // var lineText1 = document.getElementById('lineText1');
      // lineText1.innerHTML = '车站数量';
      // var lineText2 = document.getElementById('lineText2');
      // lineText2.innerHTML = 'RRU数量';
      this.para = false;
      this.paraS = false;
      // 取消轮播
      var hide = document.getElementById('hide');
      hide.style.display = 'none';
      var roam3 = document.getElementById('a2-swiper-roam3');
      roam3.style.display = 'none';
      // 设置不轮播页面
      var line2S = document.getElementById('line2S');
      line2S.style.display = 'block';
      // var slide = document.getElementsByTagName()
      // var sp = document.getElementById('keyunArrow')
      // if (sp) {
      //   if (!sp.contains(event.target)) { // 这句是说如果我们点击到了id为keyunArrow以外的区域
      //     this.keyunview = false;
      //   }
      // }
    },
    // 选择高铁线路
    changegaosu() {
      // 改变gaosuview的真假，控制gaosulist的显示与隐藏
      this.gaosuview = !this.gaosuview
      this.keyunview = false
      this.shoufeiview = false
      // 改变isActive的真假，为真时，样式名为arrow-active，为假时，样式名为arrow。以此来改变箭头样式
      this.isActive = !this.isActive
      // 改变文本内容
      this.gaosuLine = true;
      this.gaosuStation = false;
      // 改变文本内容
      // var lineText1 = document.getElementById('lineText1');
      // lineText1.innerHTML = '线路条数';
      // var lineText2 = document.getElementById('lineText2');
      // lineText2.innerHTML = '专线里程数';
      this.para = true;
      this.paraS = true;
      // 隐藏不轮播页面
      var line2S = document.getElementById('line2S');
      line2S.style.display = 'none';
      // 轮播
      var hide = document.getElementById('hide');
      hide.style.display = 'block';
      var roam3 = document.getElementById('a2-swiper-roam3');
      roam3.style.display = 'flex';
    },
    // 选择具体高铁站
    checkkeyun(item, index) {
      this.$store.state.belongname = '高铁车站'
      // console.log(this.$store.state.belongname);
      this.isactive1 = index
      if (index === 0) {
        this.clearMaker(this.makerbox)
        this.loadMaker(this.allmakerlist1, keyunzhanicon)
        // this.loadMaker(this.allmakerlist, shoufeiicon)
        this.isactive2 = 0
      } else {
        this.clearMaker(this.makerbox)
        this.sonmakerlist1[0] = [this.keyunlist[index].LAT, this.keyunlist[index].LNG]
        this.loadMaker(this.sonmakerlist1, keyunzhanicon)
        // this.loadMaker(this.allmakerlist, shoufeiicon)
        this.isactive2 = 0
      }
    },
    checkline(item, index) {
      this.$store.state.belongname = '高铁线路';
      this.isactive2 = index;
      if (index === 0) {
        this.clearLine(this.linebox);
        this.loadLine();
        this.isactive1 = 0;
      }
      if (index === 1) {
        this.clearLine(this.linebox);
        this.loadSonLine1s();
        this.loadSonLine1();
      }
      if (index === 2) {
        this.clearLine(this.linebox);
        this.loadSonLine2s();
        this.loadSonLine2();
      }
      if (index === 3) {
        this.clearLine(this.linebox);
        this.loadSonLine3s();
        this.loadSonLine3();
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
    // 加载数据
    // loadData(regionName) {
    //   // 左上角
    //   // 线路条数-高铁线路
    //   this.$http.indi.get('jgt0043', {dimension_type: regionName}, res => {
    //     if (res.data.data && res.data.data.length > 0) {
    //       this.num1 = res.data.data[0].KPI_VALUE
    //     }
    //   })
    //   // RRU数量-高铁线路
    //   this.$http.indi.get('jgt0044', {dimension_type: regionName}, res => {
    //     if (res.data.data && res.data.data.length > 0) {
    //       this.num2 = res.data.data[0].KPI_VALUE
    //     }
    //   })
    //   // 右上角
    //   this.$http.indi.get('j0126', {dimension_type: regionName}, res => {
    //     if (res.data.data && res.data.data.length > 0) {
    //       this.user1 = res.data.data[0].KPI_VALUE
    //       this.user2 = res.data.data[1].KPI_VALUE
    //       this.user3 = res.data.data[3].KPI_VALUE
    //       this.user4 = res.data.data[4].KPI_VALUE
    //     }
    //   });
    //   // 左下角
    //   this.$http.indi.get('j0127', {dimension_type: regionName}, res => {
    //     if (res.data.data && res.data.data.length > 0) {
    //       this.numS3 = res.data.data[0].KPI_VALUE
    //       this.num3 = res.data.data[1].KPI_VALUE
    //       this.num4 = res.data.data[2].KPI_VALUE
    //       this.num5 = res.data.data[3].KPI_VALUE
    //       this.num6 = res.data.data[4].KPI_VALUE
    //       this.num7 = res.data.data[5].KPI_VALUE
    //     }
    //   });
    //   // 右下角
    //   this.$http.indi.get('j0128', {dimension_type: regionName}, res => {
    //     if (res.data.data && res.data.data.length > 0) {
    //       this.tel1 = res.data.data[0].KPI_VALUE
    //       this.tel2 = res.data.data[1].KPI_VALUE
    //       this.tel3 = res.data.data[2].KPI_VALUE
    //       this.tel4 = res.data.data[3].KPI_VALUE
    //     }
    //   });
    //   // 高铁线路列表
    //   this.$http.indi.get('j0139', {dimension_type: regionName}, res => {
    //     if (res.data.data && res.data.data.length > 0) {
    //       this.gaosulist.forEach((ele, index) => {
    //         ele.name = null;
    //       });
    //       res.data.data.forEach((ele, index) => {
    //         // 高铁线路
    //         this.gaosulist[index].name = ele.KPI_NAME;
    //         // console.log(ele.KPI_NAME)
    //       })
    //     }
    //   });
    //   // 高铁线路菜单
    //   this.$http.indi.get('j0140', {kpi_name: '哈大客运专线'}, res => {
    //     if (res.data.data && res.data.data.length > 0) {
    //       this.points1 = [];
    //       res.data.data.forEach((ele, index) => {
    //         this.points1.push([res.data.data[index].LONGITUDE, res.data.data[index + 1].LATITUDE]);
    //       })
    //     }
    //   });
    //   this.$http.indi.get('j0141', {kpi_name: '长吉城际铁路'}, res => {
    //     if (res.data.data && res.data.data.length > 0) {
    //       this.points2 = [];
    //       res.data.data.forEach((ele, index) => {
    //         this.points2.push([res.data.data[index].LONGITUDE, res.data.data[index + 1].LATITUDE]);
    //       })
    //     }
    //   });
    //   // 高铁车站列表
    //   this.$http.indi.get('j0142', {dimension_type: regionName}, res => {
    //     if (res.data.data && res.data.data.length > 0) {
    //       this.keyunlist.forEach((ele, index) => {
    //         ele.name = null;
    //       });
    //       res.data.data.forEach((ele, index) => {
    //         this.keyunlist[index].name = ele.KPI_NAME;
    //         // console.log(ele.KPI_NAME)
    //       })
    //     }
    //   });
    //   // 高铁车站菜单
    //   this.$http.indi.get('j0143', {kpi_name: '延吉西站'}, res => {
    //     if (res.data.data && res.data.data.length > 0) {
    //       this.sonkeyunlist = [];
    //       this.sonkeyunlist.push([res.data.data[0].LONGITUDE, res.data.data[0].LATITUDE]);
    //     }
    //   });
    //   this.$http.indi.get('j0143', {kpi_name: '吉林市火车站'}, res => {
    //     if (res.data.data && res.data.data.length > 0) {
    //       this.sonkeyunlist = [];
    //       this.sonkeyunlist.push([res.data.data[0].LONGITUDE, res.data.data[0].LATITUDE]);
    //     }
    //   });
    //   this.$http.indi.get('j0143', {kpi_name: '四平东火车站'}, res => {
    //     if (res.data.data && res.data.data.length > 0) {
    //       this.sonkeyunlist = [];
    //       this.sonkeyunlist.push([res.data.data[0].LONGITUDE, res.data.data[0].LATITUDE]);
    //     }
    //   });
    //   this.$http.indi.get('j0143', {kpi_name: '长春西火车站'}, res => {
    //     if (res.data.data && res.data.data.length > 0) {
    //       this.sonkeyunlist = [];
    //       this.sonkeyunlist.push([res.data.data[0].LONGITUDE, res.data.data[0].LATITUDE]);
    //     }
    //   });
    //   this.$http.indi.get('j0144', {kpi_name: '长春火车站'}, res => {
    //     if (res.data.data && res.data.data.length > 0) {
    //       this.sonkeyunlist = [];
    //       res.data.data.forEach((ele, index) => {
    //         this.allmakerlist1.push([res.data.data[index].LONGITUDE, res.data.data[index].LATITUDE]);
    //       })
    //     }
    //   });
    // },
    loadData(regionName) {
      // 车站数量-高铁线路
      this.$http.indi.get('jgt0043', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num1 = res.data.data[0].KPI_VALUE
          this.textLine1 = res.data.data[0].KPI_NAME
        }
      })
      // RRU数量-高铁线路
      this.$http.indi.get('jgt0044', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num2 = res.data.data[0].KPI_VALUE
          this.textLine2 = res.data.data[0].KPI_NAME
        }
      })
      // 车站数量-高铁车站
      this.$http.indi.get('jgt0045', {dimension_type: '全部高铁站'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num1S = res.data.data[0].KPI_VALUE
          this.textStation1 = res.data.data[0].KPI_NAME
        }
      })
      // RRU数量-高铁车站
      this.$http.indi.get('jgt0046', {dimension_type: '全部高铁站'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num2S = res.data.data[0].KPI_VALUE
          this.textStation2 = res.data.data[0].KPI_NAME
        }
      })
      // 当前用户数-高铁线路
      this.$http.indi.get('jgt0047', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.user1 = res.data.data[0].KPI_VALUE
        }
      })
      // 2G用户数-高铁线路
      this.$http.indi.get('jgt0048', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.user2 = res.data.data[0].KPI_VALUE
        }
      })
      // 4G用户数-高铁线路
      this.$http.indi.get('jgt0049', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.user3 = res.data.data[0].KPI_VALUE
          // console.log(this.user3)
        }
      })
      // volte用户数-高铁线路
      this.$http.indi.get('jgt0050', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.user4 = res.data.data[0].KPI_VALUE
        }
      })
      // 待检验
      // RRU 线路总数
      this.$http.indi.get('jgt0051', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numS3 = res.data.data[0].KPI_VALUE
          this.textRRU1 = res.data.data[0].KPI_NAME
        }
      })
      // 中断RRU总数
      this.$http.indi.get('jgt0052', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num3 = res.data.data[0].KPI_VALUE
          this.textRRU2 = res.data.data[0].KPI_NAME
        }
      })
      // GSM-RRU
      this.$http.indi.get('jgt0053', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num4 = res.data.data[0].KPI_VALUE
          this.textRRU5 = res.data.data[0].KPI_NAME
        }
      })
      // LTE-RRU
      this.$http.indi.get('jgt0054', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num5 = res.data.data[0].KPI_VALUE
          this.textRRU6 = res.data.data[0].KPI_NAME
        }
      })
      // 干扰小区数量
      this.$http.indi.get('jgt0055', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num6 = res.data.data[0].KPI_VALUE
          this.textRRU3 = res.data.data[0].KPI_NAME
        }
      })
      // 故障影响业务数量
      this.$http.indi.get('jgt0056', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num7 = res.data.data[0].KPI_VALUE
          this.textRRU4 = res.data.data[0].KPI_NAME
        }
      })
      // 话务量
      this.$http.indi.get('jgt0057', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.tel1 = res.data.data[0].KPI_VALUE
          this.textTel1 = res.data.data[0].KPI_NAME
        }
      })
      // GSM-RRU
      this.$http.indi.get('jgt0058', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.tel2 = res.data.data[0].KPI_VALUE
          this.textTel2 = res.data.data[0].KPI_NAME
        }
      })
      // LTE-RRU
      this.$http.indi.get('jgt0059', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.tel3 = res.data.data[0].KPI_VALUE
          this.textTel3 = res.data.data[0].KPI_NAME
        }
      })
      // 干扰小区数量
      this.$http.indi.get('jgt0060', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.tel4 = res.data.data[0].KPI_VALUE
          this.textTel4 = res.data.data[0].KPI_NAME
        }
      })
      // 线路菜单-全部高铁
      this.$http.indi.get('jgt0061', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.gaosulist.forEach((ele, index) => {
            ele.name = null;
          });
          res.data.data.forEach((ele, index) => {
            // 高铁线路
            this.gaosulist[index].name = ele.KPI_NAME;
          })
        }
      })
      // 线路菜单-具体某条线路，传递经纬度
      this.$http.indi.get('jgt0062', {kpi_name: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.points1 = [];
          res.data.data.forEach((ele, index) => {
            this.points1.push([res.data.data[index].LONGITUDE, res.data.data[index].LATITUDE]);
          })
        }
      });
      // 线路菜单-全部线路
      this.$http.indi.get('jgt0063', {}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.points1 = [];
          res.data.data.forEach((ele, index) => {
            this.points1.push([res.data.data[index].LONGITUDE, res.data.data[index].LATITUDE]);
          })
        }
      });
      // 车站菜单-全部高铁站
      this.$http.indi.get('jgt0064', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.keyunlist.forEach((ele, index) => {
            ele.name = null;
          });
          res.data.data.forEach((ele, index) => {
            this.keyunlist[index].name = ele.KPI_NAME;
            // console.log(ele.KPI_NAME)
          })
        }
      });
      // 车站菜单-具体到某条车站，传递经纬度
      this.$http.indi.get('jgt0065', {kpi_name: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.points2 = [];
          res.data.data.forEach((ele, index) => {
            this.points2.push([res.data.data[index].LONGITUDE, res.data.data[index].LATITUDE]);
          })
        }
      });
      // 车站菜单-全部车站
      this.$http.indi.get('jgt0066', {}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.sonkeyunlist = [];
          this.sonkeyunlist.push([res.data.data[0].LONGITUDE, res.data.data[0].LATITUDE]);
          this.points2 = [];
          res.data.data.forEach((ele, index) => {
            this.points2.push([res.data.data[index].LONGITUDE, res.data.data[index].LATITUDE]);
          })
        }
      });
    },
    loadAllData() {
      // 车站数量-高铁线路
      this.$http.indi.get('jgt0043', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num1 = res.data.data[0].KPI_VALUE
          this.textLine1 = res.data.data[0].KPI_NAME
        }
      })
      // RRU数量-高铁线路
      this.$http.indi.get('jgt0044', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num2 = res.data.data[0].KPI_VALUE
          this.textLine2 = res.data.data[0].KPI_NAME
        }
      })
      // 车站数量-高铁车站
      this.$http.indi.get('jgt0045', {dimension_type: '全部高铁站'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num1S = res.data.data[0].KPI_VALUE
          this.textStation1 = res.data.data[0].KPI_NAME
        }
      })
      // RRU数量-高铁车站
      this.$http.indi.get('jgt0046', {dimension_type: '全部高铁站'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num2S = res.data.data[0].KPI_VALUE
          this.textStation2 = res.data.data[0].KPI_NAME
        }
      })
      // 当前用户数-高铁线路
      this.$http.indi.get('jgt0047', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.user1 = res.data.data[0].KPI_VALUE
        }
      })
      // 2G用户数-高铁线路
      this.$http.indi.get('jgt0048', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.user2 = res.data.data[0].KPI_VALUE
        }
      })
      // 4G用户数-高铁线路
      this.$http.indi.get('jgt0049', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.user3 = res.data.data[0].KPI_VALUE
          // console.log(this.user3)
        }
      })
      // volte用户数-高铁线路
      this.$http.indi.get('jgt0050', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.user4 = res.data.data[0].KPI_VALUE
        }
      })
      // 待检验
      // RRU 线路总数
      this.$http.indi.get('jgt0051', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numS3 = res.data.data[0].KPI_VALUE
          this.textRRU1 = res.data.data[0].KPI_NAME
        }
      })
      // 中断RRU总数
      this.$http.indi.get('jgt0052', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num3 = res.data.data[0].KPI_VALUE
          this.textRRU2 = res.data.data[0].KPI_NAME
        }
      })
      // GSM-RRU
      this.$http.indi.get('jgt0053', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num4 = res.data.data[0].KPI_VALUE
          this.textRRU5 = res.data.data[0].KPI_NAME
        }
      })
      // LTE-RRU
      this.$http.indi.get('jgt0054', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num5 = res.data.data[0].KPI_VALUE
          this.textRRU6 = res.data.data[0].KPI_NAME
        }
      })
      // 干扰小区数量
      this.$http.indi.get('jgt0055', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num6 = res.data.data[0].KPI_VALUE
          this.textRRU3 = res.data.data[0].KPI_NAME
        }
      })
      // 故障影响业务数量
      this.$http.indi.get('jgt0056', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.num7 = res.data.data[0].KPI_VALUE
          this.textRRU4 = res.data.data[0].KPI_NAME
        }
      })
      // 话务量
      this.$http.indi.get('jgt0057', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.tel1 = res.data.data[0].KPI_VALUE
          this.textTel1 = res.data.data[0].KPI_NAME
        }
      })
      // GSM-RRU
      this.$http.indi.get('jgt0058', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.tel2 = res.data.data[0].KPI_VALUE
          this.textTel2 = res.data.data[0].KPI_NAME
        }
      })
      // LTE-RRU
      this.$http.indi.get('jgt0059', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.tel3 = res.data.data[0].KPI_VALUE
          this.textTel3 = res.data.data[0].KPI_NAME
        }
      })
      // 干扰小区数量
      this.$http.indi.get('jgt0060', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.tel4 = res.data.data[0].KPI_VALUE
          this.textTel4 = res.data.data[0].KPI_NAME
        }
      })
    },
    // 初始化菜单数据
    initData() {
      // 线路菜单-全部高铁
      this.$http.indi.get('jgt0061', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.gaosulist.forEach((ele, index) => {
            ele.name = null;
          });
          res.data.data.forEach((ele, index) => {
            // 高铁线路
            this.gaosulist[index].name = ele.KPI_NAME;
          })
        }
        this.$store.state.regionName = this.gaosulist[0].name
        console.log(this.$store.state.regionName)
      })
      // 线路菜单-全部线路
      this.$http.indi.get('jgt0063', {}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.points1 = [];
          res.data.data.forEach((ele, index) => {
            this.points1.push([res.data.data[index].LONGITUDE, res.data.data[index].LATITUDE]);
          })
        }
      });
      // 车站菜单-全部高铁站
      this.$http.indi.get('jgt0064', {dimension_type: '全部高铁站'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.keyunlist.forEach((ele, index) => {
            ele.name = null;
          });
          res.data.data.forEach((ele, index) => {
            this.keyunlist[index].name = ele.KPI_NAME;
            // console.log(ele.KPI_NAME)
          })
        }
      });
      // 车站菜单-全部车站
      this.$http.indi.get('jgt0066', {}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.sonkeyunlist = [];
          this.sonkeyunlist.push([res.data.data[0].LONGITUDE, res.data.data[0].LATITUDE]);
          this.points2 = [];
          res.data.data.forEach((ele, index) => {
            this.points2.push([res.data.data[index].LONGITUDE, res.data.data[index].LATITUDE]);
          })
        }
      });
    }
  },
  watch: {
    // belongname() {
    //   this.loadData();
    // }
    activeHighwayParam(v) {
      this.loadData(v);
    }
  }
}
</script>
