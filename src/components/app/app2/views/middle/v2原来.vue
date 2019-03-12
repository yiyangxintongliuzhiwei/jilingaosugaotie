<template>
  <view-template class="a1_v21">
    <div id="baidu_map" class="baidu">
    </div>
    <!-- 高铁站 -->
    <div class="keyunzhan">
      <div class="keyunicon"></div>
      <div class="keyunword">高铁站</div>
      <div id="keyunArrow" :class="isActive2?'arrow-active2':'arrow2'" @click="changekeyun()"></div>
    </div>
    <div class="keyunlistBox" id="keyunlistBox" v-show="keyunview" ref="main">
      <ul class="keyunlist">
        <li class="sonkeyunlist" v-for="(item, index) in keyunlist" :key="item.index" @click="checkkeyun(item, index)" :class="{'active': isactive1 === index}">{{item.name}}</li>
      </ul>
    </div>
    <!-- 高铁线路 -->
    <div class="gaosu">
      <div class="gaosuicon"></div>
      <div class="gaosuword">高铁线路</div>
      <div :class="isActive?'arrow-active':'arrow'" @click="changegaosu()"></div>
    </div>
    <div class="gaosulistBox" v-show="gaosuview">
      <ul class="gaosulist">
        <li class="songaosulist" v-for="(item, index) in gaosulist" :key="item.index" @click="checkline(item, index)" :class="{'active': isactive2 === index}"><span>{{item.name}}</span></li>
      </ul>
    </div>
    <div class="part1">
      <!-- 线路条数 -->
      <div class="lineNum">
        <div class="line">
          <div class="text" id="lineText1">线路条数</div>
          <div class="count">
            <counter :data="para ? num1 : num1S" :config="config1"></counter>
          </div>
        </div>
        <div class="mile">
          <div class="text" id="lineText2">专线里程数(公里)</div>
          <div class="count">
            <counter :data="paraS ? num2 : num2S" :config="config1"></counter>
          </div>
        </div>
      </div>
      <!-- RRU -->
      <div class="RRU">
        <div class="row1">
          <div class="text">RRU总数</div>
          <div class="count">
            <counter :data="numS3" :config="config2"></counter>
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
      // 高铁站信息
      keyunlist: [
        {name: '全部高铁'},
        {name: '吉林站', LAT: 125.15, LNG: 42.97},
        {name: '长春站', LAT: 125.92, LNG: 41.49},
        {name: 'xx站', LAT: 126.42, LNG: 41.93},
        {name: 'xx站', LAT: 126.42, LNG: 41.93},
        {name: 'xx站', LAT: 126.42, LNG: 41.93},
        {name: 'xx站', LAT: 126.42, LNG: 41.93},
        {name: 'xx站', LAT: 126.42, LNG: 41.93},
        {name: 'xx站', LAT: 126.42, LNG: 41.93},
        {name: 'xx站', LAT: 126.42, LNG: 41.93},
        {name: 'xx站', LAT: 126.42, LNG: 41.93}
      ],
      // 高速线路信息
      gaosulist: [
        {name: '全部高铁'},
        {name: '长吉高铁', LAT: 125.32, LNG: 43.90},
        // {name: '长吉高铁', LAT: [125.32, 125.98, 126.8], LNG: [43.90, 43.1, 12.6]},
        {name: '哈大高铁', LAT: 124.35, LNG: 43.17},
        {name: 'xx高铁', LAT: 125.13, LNG: 42.88},
        {name: 'xx高铁', LAT: 125.93, LNG: 41.73},
        {name: 'xx高铁', LAT: 126.42, LNG: 41.93},
        {name: 'xx高铁', LAT: 126.42, LNG: 41.93},
        {name: 'xx高铁', LAT: 126.42, LNG: 41.93},
        {name: 'xx高铁', LAT: 126.42, LNG: 41.93},
        {name: 'xx高铁', LAT: 126.42, LNG: 41.93}
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
    // this.getBoundary('吉林省', 'black');
    // this.loadMaker(this.allmakerlist, shoufeiicon);
    this.loadMaker(this.allmakerlist1, keyunzhanicon);
    this.loadData();
    // this.loadLine(this.allLineList);
    this.loadLine(this.allLineList, keyunzhanicon);
  },
  computed: {
    belongname() {
      return this.$store.state.belongname;
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
    // 高铁线路
    // loadLine(linetype, icontype) {
    //   for (let i = 0; i < linetype.length; i++) {
    //     // 画线
    //     var polyline = new BMap.Polyline([
    //       new BMap.Point(...linetype[i]),
    //       new BMap.Point(...linetype[0])
    //     ],
    //     {strokeColor: '#26dc6f', strokeWeight: 6, strokeOpacity: 0.8, strokeStyle: 'dashed'}
    //     );
    //     this.map.addOverlay(polyline);
    //     this.linebox.push(polyline)
    //   }
    // },
    // 高铁线路 绿色
    loadSonLine1(linetype, icontype) {
      // 画线
      var a = [];
      var polyline = new BMap.Polyline([
        new BMap.Point(...linetype[2]),
        new BMap.Point(...linetype[1]),
        new BMap.Point(...linetype[0])
      ],
      {strokeColor: '#26dc6f', strokeWeight: 6, strokeOpacity: 1, strokeStyle: 'dashed'}
      );
      this.map.addOverlay(polyline);
      this.linebox.push(polyline)
    },
    // 高铁线路 橘色
    loadSonLine2(linetype, icontype) {
      // 画线
      var polyline = new BMap.Polyline([
        new BMap.Point(...linetype[1]),
        new BMap.Point(...linetype[0])
      ],
      {strokeColor: '#e26227', strokeWeight: 6, strokeOpacity: 1, strokeStyle: 'dashed'}
      );
      this.map.addOverlay(polyline);
      this.linebox.push(polyline)
    },
    // 高铁线路 紫色
    loadSonLine3(linetype, icontype) {
      // 画线
      var polyline = new BMap.Polyline([
        new BMap.Point(...linetype[1]),
        new BMap.Point(...linetype[0])
      ],
      {strokeColor: '#8e77fb', strokeWeight: 6, strokeOpacity: 1, strokeStyle: 'dashed'}
      );
      this.map.addOverlay(polyline);
      this.linebox.push(polyline)
    },
    // 背景 白线
    loadSonLine1s(linetype, icontype) {
      // 画线
      var polyline = new BMap.Polyline([
        new BMap.Point(...linetype[1]),
        new BMap.Point(...linetype[0])
      ],
      {strokeColor: '#eeeeee', fillColor: '#26dc6f', strokeWeight: 5, strokeOpacity: 1, strokeStyle: 'solid'}
      );
      this.map.addOverlay(polyline);
      this.linebox.push(polyline)
    },
    loadSonLine2s(linetype, icontype) {
      // 画线
      var polyline = new BMap.Polyline([
        new BMap.Point(...linetype[1]),
        new BMap.Point(...linetype[0])
      ],
      {strokeColor: '#eeeeee', strokeWeight: 5, strokeOpacity: 1, strokeStyle: 'solid'}
      );
      this.map.addOverlay(polyline);
      this.linebox.push(polyline)
    },
    loadSonLine3s(linetype, icontype) {
      // 画线
      var polyline = new BMap.Polyline([
        new BMap.Point(...linetype[1]),
        new BMap.Point(...linetype[0])
      ],
      {strokeColor: '#eeeeee', strokeWeight: 5, strokeOpacity: 1, strokeStyle: 'solid'}
      );
      this.map.addOverlay(polyline);
      this.linebox.push(polyline)
    },
    // 画线
    loadLine(linetype, icontype) {
      this.loadSonLine1s(this.allLineList, keyunzhanicon);
      this.loadSonLine1(this.allLineList, keyunzhanicon);
    },
    // loadLine(linetype, icontype) {
    //   for (let i = 0; i < linetype.length; i++) {
    //     // 画线
    //     var polyline = new BMap.Polyline([
    //       new BMap.Point(...linetype[i]),
    //       new BMap.Point(...linetype[0])
    //     ],
    //     {strokeColor: '#26dc6f', strokeWeight: 6, strokeOpacity: 0.8, strokeStyle: 'dashed'}
    //     );
    //     this.map.addOverlay(polyline);
    //     this.linebox.push(polyline)
    //   }
    // },
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
      var lineText1 = document.getElementById('lineText1');
      lineText1.innerHTML = '车站数量';
      var lineText2 = document.getElementById('lineText2');
      lineText2.innerHTML = 'RRU数量';
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
      var lineText1 = document.getElementById('lineText1');
      lineText1.innerHTML = '线路条数';
      var lineText2 = document.getElementById('lineText2');
      lineText2.innerHTML = '专线里程数';
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
      console.log(222);
      console.log(this.$store.state.belongname);
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
    // 选择高铁线路
    // checkline(item, index) {
    //   this.$store.state.belongname = '高铁线路';
    //   this.isactive2 = index;
    //   this.clearLine(this.linebox);
    //   var index1 = this.gaosulist.length - 1;
    //   if (index < index1) {
    //     // this.sonLineList[0] = [this.gaosulist[index].LAT[index], this.gaosulist[index].LNG[index]];
    //     // this.sonLineList[1] = [this.gaosulist[index + 1].LAT[index], this.gaosulist[index + 1].LNG[index]];
    //     this.sonLineList[0] = [this.gaosulist[index].LAT, this.gaosulist[index].LNG];
    //     this.sonLineList[1] = [this.gaosulist[index + 1].LAT, this.gaosulist[index + 1].LNG];
    //   }
    //   // this.loadLine(this.sonLineList, keyunzhanicon);
    //   if (index === 0) {
    //   }
    //   // 线路1
    //   if (index === 1) {
    //     this.loadSonLine1s(this.sonLineList, keyunzhanicon);
    //     this.loadSonLine1(this.sonLineList, keyunzhanicon);
    //   }
    //   // 线路2
    //   if (index === 2) {
    //     this.loadSonLine2s(this.sonLineList, keyunzhanicon);
    //     this.loadSonLine2(this.sonLineList, keyunzhanicon);
    //   }
    //   // 线路3
    //   if (index === 3) {
    //     this.loadSonLine3s(this.sonLineList, keyunzhanicon);
    //     this.loadSonLine3(this.sonLineList, keyunzhanicon);
    //   }
    //   this.isactive1 = 0;
    // },
    checkline(item, index) {
      this.$store.state.belongname = '高铁线路';
      this.isactive2 = index;
      if (index === 0) {
        this.clearLine(this.linebox);
        this.loadLine(this.allLineList, keyunzhanicon);
        this.isactive1 = 0;
      } else {
        // this.clearLine(this.linebox);
        var index1 = this.gaosulist.length - 1;
        if (index < index1) {
          // this.sonLineList[0] = [this.gaosulist[index].LAT[index], this.gaosulist[index].LNG[index]];
          // this.sonLineList[1] = [this.gaosulist[index + 1].LAT[index], this.gaosulist[index + 1].LNG[index]];
          this.sonLineList[0] = [this.gaosulist[index].LAT, this.gaosulist[index].LNG];
          this.sonLineList[1] = [this.gaosulist[index + 1].LAT, this.gaosulist[index + 1].LNG];
          this.sonLineList[2] = [this.gaosulist[index + 2].LAT, this.gaosulist[index + 2].LNG];
        }
        // this.loadLine(this.sonLineList, keyunzhanicon);
        // 线路1
        if (index === 1) {
          this.loadSonLine1s(this.sonLineList, keyunzhanicon);
          this.loadSonLine1(this.sonLineList, keyunzhanicon);
        }
        // 线路2
        if (index === 2) {
          this.loadSonLine2s(this.sonLineList, keyunzhanicon);
          this.loadSonLine2(this.sonLineList, keyunzhanicon);
        }
        // 线路3
        if (index === 3) {
          this.loadSonLine3s(this.sonLineList, keyunzhanicon);
          this.loadSonLine3(this.sonLineList, keyunzhanicon);
        }
        this.isactive1 = 0;
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
    loadData() {
      // 左上角
      this.$http.indi.get('j0125', {dimension_type: this.belongname}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // this.lineText1 = res.data.data[0].KPI_NAME
          // this.lineText2 = res.data.data[1].KPI_NAME
          this.num1 = res.data.data[0].KPI_VALUE
          this.num2 = res.data.data[1].KPI_VALUE
          this.num1S = res.data.data[2].KPI_VALUE
          this.num2S = res.data.data[3].KPI_VALUE
        }
      });
      // 右上角
      this.$http.indi.get('j0126', {dimension_type: this.belongname}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.user1 = res.data.data[0].KPI_VALUE
          this.user2 = res.data.data[1].KPI_VALUE
          this.user3 = res.data.data[3].KPI_VALUE
          this.user4 = res.data.data[4].KPI_VALUE
        }
      });
      // 左下角
      this.$http.indi.get('j0127', {dimension_type: this.belongname}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numS3 = res.data.data[0].KPI_VALUE
          this.num3 = res.data.data[1].KPI_VALUE
          this.num4 = res.data.data[2].KPI_VALUE
          this.num5 = res.data.data[3].KPI_VALUE
          this.num6 = res.data.data[4].KPI_VALUE
          this.num7 = res.data.data[5].KPI_VALUE
        }
      });
      // 右下角
      this.$http.indi.get('j0128', {dimension_type: this.belongname}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.tel1 = res.data.data[0].KPI_VALUE
          this.tel2 = res.data.data[1].KPI_VALUE
          this.tel3 = res.data.data[2].KPI_VALUE
          this.tel4 = res.data.data[3].KPI_VALUE
        }
      });
      // 地图
      this.$http.indi.get('j0140', {dimension_type: this.belongname}, res => {
        if (res.data.data && res.data.data.length > 0) {
          res.data.data.forEach((ele, index) => {
            // 高铁站
            this.keyunlist[index].name = res.data.data[index].KPI_NAME;
            this.keyunlist[index].LAT = res.data.data[index].LONGITUDE;
            this.keyunlist[index].LNG = res.data.data[index].LATITUDE;
            // 高铁线路
            this.gaosulist[index].name = res.data.data[index].KPI_NAME;
            this.gaosulist[index].LAT = res.data.data[index].LONGITUDE;
            this.gaosulist[index].LNG = res.data.data[index].LATITUDE;
          })
        }
      })
    }
  },
  watch: {
    belongname() {
      this.loadData();
    }
  }
}
</script>
