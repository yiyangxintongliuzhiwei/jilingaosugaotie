<template>
  <view-template class="a1_v11">
    <swiper :options="swiperOption" class="left-part">
      <swiper-slide>
        <div class="title1">业务质量</div>
        <!-- volte -->
        <div class="left-top">VOLTE</div>
        <div class="left-tops">
          <div class="shuzi1" :style="{width: width1 + 'px'}">
            <counter :data="num1" :config="config1"></counter>
          </div>
          <span class="word1">无线接通率(语音)</span>
          <div class="shuzi2" :style="{width: width2 + 'px'}">
            <counter :data="num2" :config="config1"></counter>
          </div>
          <span class="word2">E-RAB掉线率(语音)</span>
          <div class="shuzi3" :style="{width: width3 + 'px'}">
            <counter :data="num3" :config="config1"></counter>
          </div>
          <span class="word3">无线接通率(视频)</span>
          <div class="shuzi4" :style="{width: width4 + 'px'}">
            <counter :data="num4" :config="config1"></counter>
          </div>
          <span class="word4">E-RAB掉线率(视频)</span>
          <div class="shuzi5" :style="{width: width5 + 'px'}">
            <counter :data="num5" :config="config1"></counter>
          </div>
          <span class="word5">用户切换成功率(语音)</span>
          <div class="shuzi6" :style="{width: width6 + 'px'}">
            <counter :data="num6" :config="config1"></counter>
          </div>
          <span class="word6">下行平均时延</span>
        </div>
        <div class="left-tops-center">
          <div class="zhuanquan"></div>
        </div>
        <!-- lte -->
        <div class="left-bottom">LTE</div>
        <div class="left-bottoms">
          <div>切换成功率</div>
          <div>{{num9}}%</div>
          <div>无线掉线率</div>
          <div>{{num10}}%</div>
          <div>无线接通率</div>
          <div>{{num11}}%</div>
          <div>PRC建立成功率</div>
          <div>{{num12}}%</div>
          <div>RAB建立成功率</div>
          <div>{{num13}}%</div>
        </div>
        <!-- gsm -->
        <div class="left-bottom1">GSM</div>
        <div class="left-centers">
          <div id="echarts-1" class="left-centers1"></div>
          <div id="echarts-2" class="left-centers2"></div>
          <div id="echarts-3" class="left-centers3"></div>
          <div id="echarts-4" class="left-centers4"></div>
          <div class="shuzi11">{{num14}}%</div>
          <div class="shuzi21">{{num15}}%</div>
          <div class="shuzi31">{{num16}}%</div>
          <div class="shuzi41">{{num17}}%</div>
        </div>
        <div class="wengzi1">无线接通率</div>
        <div class="wengzi2">TCH拥塞率<br>(不含切换)</div>
        <div class="wengzi3">TCH拥塞率<br>(含切换)</div>
        <div class="wengzi4">SDCCH拥塞率</div>
      </swiper-slide>
      <swiper-slide>
        <div class="title1">业务量</div>
        <div class="huawuliang">话务量</div>
        <div class="danwei">单位(Erl)</div>
        <div id="echarts-8"></div>
        <div class="liuliang">流量</div>
        <div id="echarts-9"></div>
        <div class="danwei1">单位(GB)</div>
        <swiper :options="swiperOption1" class="huawuliangtop5">
          <swiper-slide>
            <div class="wenzi">话务量TOP5</div>
            <div class="yuanhuan">
              <div id="echarts-10"></div>
              <span class="span1">1</span>
              <span class="span2">2</span>
              <span class="span3">3</span>
              <span class="span4">4</span>
              <span class="span5">5</span>
            </div>
            <ul class="liebiaotop5s">
              <li v-for="(item, index) in huawulianglist">
                <div>{{index + 1}}</div>
                <div class="second">{{item.name}}</div>
                <div>{{item.region}}</div>
                <div>{{item.value}}Erl</div>
                <div>{{item.percent}}%</div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <div class="wenzi">流量TOP5</div>
            <div class="yuanhuan">
              <div id="echarts-11"></div>
              <span class="span1">1</span>
              <span class="span2">2</span>
              <span class="span3">3</span>
              <span class="span4">4</span>
              <span class="span5">5</span>
            </div>
            <ul class="liebiaotop5s">
              <li v-for="(item, index) in liulianglist">
                <div>{{index + 1}}</div>
                <div class="second">{{item.name}}</div>
                <div>{{item.region}}</div>
                <div>{{item.value}}Erl</div>
                <div>{{item.percent}}%</div>
              </li>
            </ul>
          </swiper-slide>
        </swiper>
        <span class="a2-swiper-roam1"></span>
      </swiper-slide> 
    </swiper>
    <span class="a2-swiper-roam"></span>
    <!-- 热点 -->
    <div class="redian" v-if="belongname.indexOf('高速') !== -1">热点线路情况</div>
    <div class="redian" v-else-if="belongname.indexOf('收费') !== -1">热点收费站情况</div>
    <div class="redian" v-else>热点客运站情况</div>
    <div class="redianbox">
      <div class="boxhead">
        <div>名称</div>
        <div>用户数</div>
        <div v-if="belongname.indexOf('高速') === -1">所属线路</div>
        <div v-else></div>
      </div>
      <ul class="boxbody">
        <li v-for="item in boxbodylist">
          <div>
            <div :style="{'background': item.color}"></div>
          </div>
          <div>{{item.name}}</div>
          <div>{{item.usernum}}</div>
          <div v-if="belongname.indexOf('高速') === -1">{{item.region}}</div>
          <div v-else></div>
        </li>
      </ul>
    </div>
    <!-- 网络容量 -->
    <div class="rongliang" v-if="belongname.indexOf('高速') !== -1">高速线路网络容量</div>
    <div class="rongliang" v-else-if="belongname.indexOf('收费') !== -1">收费站网络容量</div>
    <div class="rongliang" v-else>客运站网络容量</div>
    <div id="echarts-5"></div>
    <!-- 小区 -->
    <swiper :options="swiperOption1" class="zuichaxiaoqu">
      <swiper-slide>
        <div class="zongshu">总数</div>
        <div class="zongshunum">
          <counter :data="num7" :config="config2"></counter> 
        </div>
        <div class="xiaoqu">GSM最差小区</div>
        <div id="echarts-6"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="zongshu">总数</div>
        <div class="zongshunum">
          <counter :data="num8" :config="config2"></counter> 
        </div>
        <div class="xiaoqu">LTE最差小区</div>
        <div id="echarts-7"></div>
      </swiper-slide>
    </swiper>
  </view-template>
</template>
<script>
import './v11.scss'
import echarts from 'echarts';
import options from './options.js';
export default {
  data() {
    return {
      // 轮播设置
      swiperOption: {
        autoplay: 30000,
        setWrapperSize: true,
        autoplayDisableOnInteraction: false,
        observeParents: true,
        direction: 'horizontal',
        pagination: '.a2-swiper-roam',
        paginationClickable: true
      },
      swiperOption1: {
        autoplay: 30000,
        setWrapperSize: true,
        autoplayDisableOnInteraction: false,
        observeParents: true,
        direction: 'horizontal',
        // pagination: '.a2-swiper-roam',
        paginationClickable: true
      },
      swiperOption2: {
        autoplay: 30000,
        setWrapperSize: true,
        autoplayDisableOnInteraction: false,
        observeParents: true,
        direction: 'horizontal',
        pagination: '.a2-swiper-roam1',
        paginationClickable: true
      },
      chart1: null,
      chart2: null,
      chart3: null,
      chart4: null,
      chart5: null,
      chart6: null,
      chart7: null,
      chart8: null,
      chart9: null,
      chart10: null,
      chart11: null,
      num1: 98.35,
      num2: 80.56,
      num3: 88.88,
      num4: 76.09,
      num5: 59.99,
      num6: 88.99,
      num7: 12223,
      num8: 32321,
      num9: 18.92,
      num10: 18.92,
      num11: 18.92,
      num12: 18.92,
      num13: 18.92,
      num14: 18.92,
      num15: 18.92,
      num16: 18.92,
      num17: 18.92,
      width1: 112,
      width2: 112,
      width3: 112,
      width4: 112,
      width5: 112,
      width6: 112,
      config1: {
        justifyContent: 'center',
        // alignitems: 'center',
        numbers: { // 数字配置项
          textStyle: {
            color: '#f4fe4c',
            fontSize: 22,
            fontFamily: 'MF_LangQian'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        }
      },
      config2: {
        justifyContent: 'center',
        // alignitems: 'center',
        numbers: { // 数字配置项
          textStyle: {
            color: '#f4fe4c',
            fontSize: 20,
            fontFamily: 'MF_LangQian'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 0 // 数字之间间距
        },
        suffix: { // 后缀配置项
          content: '个',
          marginLeft: 0,
          textStyle: {
            color: 'yellow',
            fontSize: 20,
            // fontWeight: 'bold',
            fontFamily: 'MF_LangQian'
          }
        }
      },
      config3: {
        justifyContent: 'center',
        // alignitems: 'center',
        numbers: { // 数字配置项
          textStyle: {
            color: '#f4fe4c',
            fontSize: 18,
            fontFamily: 'MF_LangQian'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 0 // 数字之间间距
        },
        suffix: { // 后缀配置项
          content: '%',
          marginLeft: 0,
          textStyle: {
            color: 'yellow',
            fontSize: 18,
            // fontWeight: 'bold',
            fontFamily: 'MF_LangQian'
          }
        }
      },
      boxbodylist: [
        {color: '#fd4157', name: '朝阳区收费站', usernum: 65537, region: '榆沪高速'},
        {color: '#fd9e41', name: '朝阳区收费站', usernum: 65537, region: '榆沪高速'},
        {color: '#fdfb41', name: '朝阳区收费站', usernum: 65537, region: '榆沪高速'},
        {color: '#41fd89', name: '朝阳区收费站', usernum: 65537, region: '榆沪高速'},
        {color: '#a7f3c4', name: '朝阳区收费站', usernum: 65537, region: '榆沪高速'}
      ],
      huawulianglist: [
        {name: '幸福小区幸福小区幸福小区幸福小区幸福小区幸福小区幸福小区', region: '长吉', value: 451.704, percent: 20},
        {name: '幸福小区幸福小区幸福小区幸福小区幸福小区幸福小区幸福小区', region: '长吉', value: 451.704, percent: 20},
        {name: '幸福小区幸福小区幸福小区幸福小区幸福小区幸福小区幸福小区', region: '长吉', value: 451.704, percent: 20},
        {name: '幸福小区幸福小区幸福小区幸福小区幸福小区幸福小区幸福小区', region: '长吉', value: 451.704, percent: 20},
        {name: '幸福小区幸福小区幸福小区幸福小区幸福小区幸福小区幸福小区', region: '长吉', value: 451.704, percent: 20}
      ],
      liulianglist: [
        {name: '幸福小区', region: '长吉', value: 451.704, percent: 20},
        {name: '幸福小区', region: '长吉', value: 451.704, percent: 20},
        {name: '幸福小区', region: '长吉', value: 451.704, percent: 20},
        {name: '幸福小区', region: '长吉', value: 451.704, percent: 20},
        {name: '幸福小区', region: '长吉', value: 451.704, percent: 20}
      ]
    }
  },
  mounted() {
    this.init()
    this.loaddata()
  },
  computed: {
    belongname() {
      return this.$store.state.belongname
    }
  },
  methods: {
    // 小区名字
    init() {
      this.chart1 = echarts.init(document.getElementById('echarts-1'));
      this.chart2 = echarts.init(document.getElementById('echarts-2'));
      this.chart3 = echarts.init(document.getElementById('echarts-3'));
      this.chart4 = echarts.init(document.getElementById('echarts-4'));
      this.chart5 = echarts.init(document.getElementById('echarts-5'));
      this.chart6 = echarts.init(document.getElementById('echarts-6'));
      this.chart7 = echarts.init(document.getElementById('echarts-7'));
      this.chart8 = echarts.init(document.getElementById('echarts-8'));
      this.chart9 = echarts.init(document.getElementById('echarts-9'));
      this.chart10 = echarts.init(document.getElementById('echarts-10'));
      this.chart11 = echarts.init(document.getElementById('echarts-11'));
    },
    loaddata() {
      // volte
      this.$http.indi.get('jgs0001', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            this.num1 = res.data.data[0].KPI_VALUE
          })
        }
      })
      this.$http.indi.get('jgs0002', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            this.num2 = res.data.data[0].KPI_VALUE
          })
        }
      })
      this.$http.indi.get('jgs0003', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            this.num3 = res.data.data[0].KPI_VALUE
          })
        }
      })
      this.$http.indi.get('jgs0004', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            this.num4 = res.data.data[0].KPI_VALUE
          })
        }
      })
      this.$http.indi.get('jgs0005', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            this.num5 = res.data.data[0].KPI_VALUE
          })
        }
      })
      this.$http.indi.get('jgs0006', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            this.num6 = res.data.data[0].KPI_VALUE
          })
        }
      })
      if (this.num1 === 100) {
        this.width1 = 86
      } else if (this.num1.toString().length === 1) {
        this.width1 = 40
      } else if (this.num1.toString().length === 2) {
        this.width1 = 64
      } else if (this.num1.toString().length === 3) {
        this.width1 = 64
      } else if (this.num1.toString().length === 4) {
        this.width1 = 90
      } else if (this.num1.toString().length === 5) {
        this.width1 = 112
      } else if (this.num1.toString().length > 5) {
        this.num1 = Number(this.num1.toFixed(2))
        // this.loaddata()
      }
      if (this.num2 === 100) {
        this.width2 = 86
      } else if (this.num2.toString().length === 1) {
        this.width2 = 40
      } else if (this.num2.toString().length === 2) {
        this.width2 = 64
      } else if (this.num2.toString().length === 3) {
        this.width2 = 64
      } else if (this.num2.toString().length === 4) {
        this.width2 = 90
      } else if (this.num2.toString().length === 5) {
        this.width2 = 112
      } else if (this.num2.toString().length > 5) {
        this.num2 = Number(this.num2.toFixed(2))
        // this.loaddata()
      }
      if (this.num3 === 100) {
        this.width3 = 86
      } else if (this.num3.toString().length === 1) {
        this.width3 = 40
      } else if (this.num3.toString().length === 2) {
        this.width3 = 64
      } else if (this.num3.toString().length === 3) {
        this.width3 = 64
      } else if (this.num3.toString().length === 4) {
        this.width3 = 90
      } else if (this.num3.toString().length === 5) {
        this.width3 = 112
      } else if (this.num3.toString().length > 5) {
        this.num3 = Number(this.num3.toFixed(2))
        // this.loaddata()
      }
      if (this.num4 === 100) {
        this.width4 = 86
      } else if (this.num4.toString().length === 1) {
        this.width4 = 40
      } else if (this.num4.toString().length === 2) {
        this.width4 = 64
      } else if (this.num4.toString().length === 3) {
        this.width4 = 64
      } else if (this.num4.toString().length === 4) {
        this.width4 = 90
      } else if (this.num4.toString().length === 5) {
        this.width4 = 112
      } else if (this.num4.toString().length > 5) {
        this.num4 = Number(this.num4.toFixed(2))
        // this.loaddata()
      }
      if (this.num5 === 100) {
        this.width5 = 86
      } else if (this.num5.toString().length === 1) {
        this.width5 = 40
      } else if (this.num5.toString().length === 2) {
        this.width5 = 64
      } else if (this.num5.toString().length === 3) {
        this.width5 = 64
      } else if (this.num5.toString().length === 4) {
        this.width5 = 90
      } else if (this.num5.toString().length === 5) {
        this.width5 = 112
      } else if (this.num5.toString().length > 5) {
        this.num5 = Number(this.num5.toFixed(2))
        // this.loaddata()
      }
      if (this.num6 === 100) {
        this.width6 = 86
      } else if (this.num6.toString().length === 1) {
        this.width6 = 40
      } else if (this.num6.toString().length === 2) {
        this.width6 = 64
      } else if (this.num6.toString().length === 3) {
        this.width6 = 64
      } else if (this.num6.toString().length === 4) {
        this.width6 = 90
      } else if (this.num6.toString().length === 5) {
        this.width6 = 112
      } else if (this.num6.toString().length > 5) {
        this.num6 = Number(this.num6.toFixed(2))
        // this.loaddata()
      }
      // lte
      this.$http.indi.get('jgs0007', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            this.num9 = res.data.data[0].KPI_VALUE
          })
        }
      })
      this.$http.indi.get('jgs0008', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            this.num10 = res.data.data[0].KPI_VALUE
          })
        }
      })
      this.$http.indi.get('jgs0009', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            this.num11 = res.data.data[0].KPI_VALUE
          })
        }
      })
      this.$http.indi.get('jgs0010', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            this.num12 = res.data.data[0].KPI_VALUE
          })
        }
      })
      this.$http.indi.get('jgs0011', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            this.num13 = res.data.data[0].KPI_VALUE
          })
        }
      })
      // gsm
      this.$http.indi.get('jgs0012', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            options.option1.series[0].axisLine.lineStyle.color[0][0] = res.data.data[0].KPI_VALUE / 100
            this.num14 = res.data.data[0].KPI_VALUE
            this.chart1.setOption(options.option1)
          })
        }
      })
      this.$http.indi.get('jgs0013', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            options.option2.series[0].axisLine.lineStyle.color[0][0] = res.data.data[0].KPI_VALUE / 100
            this.num15 = res.data.data[0].KPI_VALUE
            this.chart2.setOption(options.option2)
          })
        }
      })
      this.$http.indi.get('jgs0014', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            options.option3.series[0].data[0].value = res.data.data[0].KPI_VALUE
            options.option3.series[0].data[1].value = 100 - res.data.data[0].KPI_VALUE
            this.num16 = res.data.data[0].KPI_VALUE
            this.chart3.setOption(options.option3)
          })
        }
      })
      this.$http.indi.get('jgs0015', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.$nextTick(() => {
            options.option4.series[0].data[0].value = res.data.data[0].KPI_VALUE
            options.option4.series[0].data[1].value = 100 - res.data.data[0].KPI_VALUE
            this.num17 = res.data.data[0].KPI_VALUE
            this.chart4.setOption(options.option4)
          })
        }
      })
      // 话务量
      this.$http.indi.get('jgs0016', {dimension_type: this.belongname}, res => {
        // console.log(res)
        let dangqiangsmarr = []
        let dangqianvolte = []
        let richanggsm = []
        let richangvolte = []
        options.option8.xAxis.data = []
        for (let i = 0; i < res.data.data.length; i++) {
          dangqiangsmarr.push(res.data.data[i].KPI_VALUE1)
          dangqianvolte.push(res.data.data[i].KPI_VALUE2)
          richanggsm.push(res.data.data[i].KPI_VALUE3)
          richangvolte.push(res.data.data[i].KPI_VALUE4)
          options.option8.xAxis.data.push(res.data.data[i].X_AXIS)
        }
        options.option8.series[0].data = []
        options.option8.series[1].data = []
        options.option8.series[2].data = []
        options.option8.series[3].data = []
        function putin(arr, num) {
          arr.forEach(ele => {
            options.option8.series[num].data.push(ele)
          })
        }
        putin(dangqiangsmarr, 0)
        putin(dangqianvolte, 1)
        putin(richanggsm, 2)
        putin(richangvolte, 3)
        this.chart8.setOption(options.option8)
      })
      // 流量
      this.$http.indi.get('jgs0017', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          let dangqianlte = []
          let richanglte = []
          options.option9.xAxis.data = []
          for (let i = 0; i < res.data.data.length; i++) {
            dangqianlte.push(res.data.data[i].KPI_VALUE1)
            richanglte.push(res.data.data[i].KPI_VALUE2)
            options.option9.xAxis.data.push(res.data.data[i].X_AXIS)
          }
          options.option9.series[0].data = []
          options.option9.series[1].data = []
          dangqianlte.forEach(element => {
            options.option9.series[0].data.push(element)
          })
          richanglte.forEach(element => {
            options.option9.series[1].data.push(element)
          })
          this.chart9.setOption(options.option9)
        }
      })
      // 话务量top5
      this.$http.indi.get('jgs0018', {dimension_type: this.belongname}, res => {
        // console.log(res)
        for (let i = 0; i < res.data.data.length; i++) {
          this.huawulianglist[i].name = res.data.data[i].KPI_NAME
          this.huawulianglist[i].region = res.data.data[i].AREA_NAME
          this.huawulianglist[i].value = res.data.data[i].KPI_VALUE
          this.huawulianglist[i].percent = ((res.data.data[i].KPI_VALUE / 1000) * 100).toFixed(2)
          options.option10.series[i].data[1].value = res.data.data[i].KPI_VALUE
          options.option10.series[i].data[0].value = 1000 - res.data.data[i].KPI_VALUE
        }
        this.chart10.setOption(options.option10)
      })
      // 流量top5
      this.$http.indi.get('jgs0019', {dimension_type: this.belongname}, res => {
        // console.log(res)
        for (let i = 0; i < res.data.data.length; i++) {
          this.liulianglist[i].name = res.data.data[i].KPI_NAME
          this.liulianglist[i].region = res.data.data[i].AREA_NAME
          this.liulianglist[i].value = res.data.data[i].KPI_VALUE
          this.liulianglist[i].percent = ((res.data.data[i].KPI_VALUE / 1000) * 100).toFixed(2)
          options.option11.series[i].data[1].value = res.data.data[i].KPI_VALUE
          options.option11.series[i].data[0].value = 1000 - res.data.data[i].KPI_VALUE
        }
        this.chart11.setOption(options.option11)
      })
      // 高速网络容量
      this.$http.indi.get('jgs0020', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          let rongliangarr = []
          let liyongarr = []
          options.option5.xAxis.data = []
          for (let i = 0; i < res.data.data.length; i++) {
            rongliangarr.push(res.data.data[i].KPI_VALUE1)
            liyongarr.push(res.data.data[i].KPI_VALUE2)
            options.option5.xAxis.data.push(res.data.data[i].X_AXIS)
          }
          options.option5.series[0].data = []
          options.option5.series[1].data = []
          rongliangarr.forEach(element => {
            options.option5.series[0].data.push(element)
          });
          liyongarr.forEach(element => {
            options.option5.series[1].data.push(element)
          })
          this.chart5.setOption(options.option5)
        }
      })
      // 热点线路情况
      this.$http.indi.get('jgs0023', {dimension_type: this.belongname}, res => {
        // console.log(res)
        // 没有返回所属线路
        for (let i = 0; i < res.data.data.length; i++) {
          this.boxbodylist[i].name = res.data.data[i].KPI_NAME
          this.boxbodylist[i].usernum = res.data.data[i].KPI_VALUE
          this.boxbodylist[i].region = res.data.data[i].LINE_NAME
        }
      })
      // lte最差小区
      this.$http.indi.get('jgs0027', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          let gaodiaohua = []
          let gaoyongsai = []
          let zuichalte = []
          let richangzhi = []
          let zengfu = []
          options.option7.xAxis.data = []
          for (let i = 0; i < res.data.data.length; i++) {
            gaodiaohua.push(res.data.data[i].KPI_VALUE1)
            gaoyongsai.push(res.data.data[i].KPI_VALUE2)
            zuichalte.push(res.data.data[i].KPI_VALUE3)
            richangzhi.push(res.data.data[i].KPI_VALUE4)
            zengfu.push(res.data.data[i].KPI_VALUE5)
            options.option7.xAxis.data.push(res.data.data[i].X_AXIS)
          }
          options.option7.series[0].data = []
          options.option7.series[1].data = []
          options.option7.series[2].data = []
          options.option7.series[3].data = []
          options.option7.series[4].data = []
          gaodiaohua.forEach(ele => {
            options.option7.series[0].data.push(ele)
          })
          gaoyongsai.forEach(ele => {
            options.option7.series[1].data.push(ele)
          })
          zuichalte.forEach(ele => {
            options.option7.series[2].data.push(ele)
          })
          richangzhi.forEach(ele => {
            options.option7.series[3].data.push(ele)
          })
          zengfu.forEach(ele => {
            options.option7.series[4].data.push(ele)
          })
        }
        this.chart7.setOption(options.option7)
      })
      // lte最差小区总数
      this.$http.indi.get('jgs0026', {dimension_type: this.belongname}, res => {
        if (res.data.data.length > 0) {
          this.num8 = res.data.data[0].KPI_VALUE
        }
      })
      // gsm最差小区
      this.$http.indi.get('jgs0029', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          let gaodiaohuas = []
          let gaoyongsais = []
          let zuichagsm = []
          let richangzhis = []
          let zengfus = []
          options.option6.xAxis.data = []
          for (let i = 0; i < res.data.data.length; i++) {
            gaodiaohuas.push(res.data.data[i].KPI_VALUE1)
            gaoyongsais.push(res.data.data[i].KPI_VALUE2)
            zuichagsm.push(res.data.data[i].KPI_VALUE3)
            richangzhis.push(res.data.data[i].KPI_VALUE4)
            zengfus.push(res.data.data[i].KPI_VALUE5)
            options.option6.xAxis.data.push(res.data.data[i].X_AXIS)
          }
          options.option6.series[0].data = []
          options.option6.series[1].data = []
          options.option6.series[2].data = []
          options.option6.series[3].data = []
          options.option6.series[4].data = []
          gaodiaohuas.forEach(ele => {
            options.option6.series[0].data.push(ele)
          })
          gaoyongsais.forEach(ele => {
            options.option6.series[1].data.push(ele)
          })
          zuichagsm.forEach(ele => {
            options.option6.series[2].data.push(ele)
          })
          richangzhis.forEach(ele => {
            options.option6.series[3].data.push(ele)
          })
          zengfus.forEach(ele => {
            options.option6.series[4].data.push(ele)
          })
        }
        this.chart6.setOption(options.option6)
      })
      // gsm最差小区总数
      this.$http.indi.get('jgs0028', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          this.num7 = res.data.data[0].KPI_VALUE
        }
      })
    }
  },
  watch: {
    belongname() {
      this.loaddata()
      // console.log(this.belongname)
    }
  }
}
</script>
