<template>
  <view-template class="a1_v31">
    <div class="zhandianwanhaolv">站点完好率</div>
    <div class="xinweifenxi">
      <div class="xinweifenxi-one">行为分析-</div>
      <div class="xinweifenxi-two">【{{Harea}}-{{Farea}}】</div>
    </div>
    <div class="chaochangtuifu">超长/超频退服</div>
    <!-- 雷达 -->
    <div class="leida">
      <div id="v31echarts-1"></div>
      <!--  -->
      <div class="lineNum">
        <div class="lineItem">
          <div class="num">
            <div class="count">
              <counter :data="numLine1" :config="config_line1"></counter>
            </div>
          </div>
          <div class="text">站点完好率</div>
        </div>
        <div class="lineItem">
          <div class="num">
            <div class="count">
              <counter :data="numLine2" :config="config_line1"></counter>
            </div>
          </div>
          <div class="text">影响里程</div>
        </div>
      </div>
      <!--  -->
      <div class="word-one">长春</div>
      <div class="num-one">
        <counter :data="num1" :config="config1"></counter>
      </div>
      <div class="word-two">延边州</div>
      <div class="num-two">
        <counter :data="num2" :config="config1"></counter>
      </div>
      <div class="word-three">白山</div>
      <div class="num-three">
        <counter :data="num3" :config="config1"></counter>
      </div>
      <div class="word-four">白城</div>
      <div class="num-four">
        <counter :data="num4" :config="config1"></counter>
      </div>
      <div class="word-five">松原</div>
      <div class="num-five">
        <counter :data="num5" :config="config1"></counter>
      </div>
      <div class="word-six">四平</div>
      <div class="num-six">
        <counter :data="num6" :config="config1"></counter>
      </div>
      <div class="word-seven">通化</div>
      <div class="num-seven">
        <counter :data="num7" :config="config1"></counter>
      </div>
      <div class="word-eight">辽源</div>
      <div class="num-eight">
        <counter :data="num8" :config="config1"></counter>
      </div>
      <div class="word-nine">吉林</div>
      <div class="num-nine">
        <counter :data="num9" :config="config1"></counter>
      </div>
    </div>
    <!-- 行为分析 -->
    <div class='xingwei'>
      <div class="total">总数</div>
      <div class="totalnum">
        <counter :data="numt1" :config="configt1"></counter>
      </div>
      <div class="huan1">
        <div id="v31echarts-2"></div>
        <span class="span1">1</span>
        <span class="span2">2</span>
        <span class="span3">3</span>
        <span class="span4">4</span>
        <span class="span5">5</span>
      </div>
      <div class="yonghushu">用户数</div>
      <ul class="top5">
        <li v-for="(items, index) in top5list">
          <div>{{index + 1}}</div>
          <div>{{items.name}}</div>
          <div>{{items.value}}个</div>
        </li>
      </ul>
      <!-- app使用次数 -->
      <div class="shiyongcishu">APP使用次数</div>
      <div class="shiyongshuzuobiao">
        <div id="v31echarts-3"></div>
      </div>
      <!-- 手机品牌占比 -->
      <div class="pingpai">
        <div class="zhongduan">
          终端<br>比例
        </div>
        <div id="v31echarts-4"></div>
        <div class="legend">
          <div class="legend1">
            <div class="legend1s">
              <div></div>
              <span>VIVO</span>
            </div>
            <div class="legend2s">
              <div></div>
              <span>LG</span>
            </div>
            <div class="legend3s">
              <div></div>
              <span>三星</span>
            </div>
          </div>
          <div class="legend2">
            <div class="legend1s">
              <div></div>
              <span>荣耀</span>
            </div>
            <div class="legend2s">
              <div></div>
              <span>华为</span>
            </div>
            <div class="legend3s">
              <div></div>
              <span>中兴</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="xingwei2">
       <div class="total">总数</div>
       <div class="totalnum">
        <counter :data="numt2" :config="configt1"></counter>
      </div>
      <div class="huan2">
        <div id="v31echarts-5"></div>
        <span class="span1">1</span>
        <span class="span2">2</span>
        <span class="span3">3</span>
        <span class="span4">4</span>
        <span class="span5">5</span>
      </div>
      <!-- 流量 -->
      <div class="yonghushu">流量</div>
      <ul class="top5">
        <li v-for="(items, index) in top5lists">
          <div>{{index + 1}}</div>
          <div>{{items.name}}</div>
          <div>{{items.value}}GB</div>
        </li>
      </ul>
      <div class="yonghufengbu">用户分布</div>
      <div class="women">女性</div>
      <div class="womenzhanbi">
        <div class="wzhezhao" :style="{width: width1 + 'px'}"></div>
      </div>
      <div class="womennum">
        <counter :data="womennum" :config="config2"></counter>
      </div>
      <!-- 男性 -->
      <div class="man">男性</div>
      <div class="manzhanbi">
        <div class="mzhezhao" :style="{width: width2 + 'px'}"></div>
      </div>
      <div class="mannum">
        <counter :data="mannum" :config="config2"></counter>
      </div>
      <div class="yibiaopan">
        <div id="v31echarts-6"></div>
        <div id="v31echarts-7"></div>
        <div id="v31echarts-8"></div>
        <div id="v31echarts-9"></div>
        <div id="v31echarts-10"></div>
        <div class="shuzi111">{{num10}}%</div>
        <div class="shuzi211">{{num11}}%</div>
        <div class="shuzi311">{{num12}}%</div>
        <div class="shuzi411">{{num13}}%</div>
        <div class="shuzi511">{{num14}}%</div>
        <div class="word1">19岁及以下</div>
        <div class="word2">20-29岁</div>
        <div class="word3">30-39岁</div>
        <div class="word4">40-49岁</div>
        <div class="word5">50岁以上</div>
      </div>
    </div>
    <!-- 超长退服 -->
    <div class="tuifu">
      <div id="v31echarts-11"></div>
      <div class="danwei">单位(个)</div>
      <div class="fang1"></div>
      <div class="fang1s">超长退服RRU</div>
      <div class="fang2"></div>
      <div class="fang2s">超频退服RRU</div>
    </div>
  </view-template>
</template>
<script>
import './v31.scss'
import echarts from 'echarts';
import options from './options.js';
export default {
  data() {
    return {
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
      num1: 21.1,
      num2: 21.1,
      num3: 21.1,
      num4: 21.1,
      num5: 21.1,
      num6: 21.1,
      num7: 21.1,
      num8: 21.1,
      num9: 21.1,
      num10: 13.32,
      num11: 13.32,
      num12: 13.32,
      num13: 13.32,
      num14: 13.32,
      numt1: 123456,
      numt2: 123456,
      womennum: 36.72,
      mannum: 36.72,
      numLine1: 90.88,
      numLine2: 102.1,
      Harea: '金港',
      Farea: '武广',
      width1: 0,
      width2: 0,
      config1: {
        justifyContent: 'center',
        numbers: { // 数字配置项
          textStyle: {
            color: 'yellow',
            fontSize: 12,
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
            fontSize: 12,
            // fontWeight: 'bold',
            fontFamily: 'MF_LangQian'
          }
        }
      },
      config2: {
        justifyContent: 'center',
        numbers: { // 数字配置项
          textStyle: {
            color: 'yellow',
            fontSize: 16,
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
            fontSize: 16,
            // fontWeight: 'bold',
            fontFamily: 'MF_LangQian'
          }
        }
      },
      config_line1: {
        justifyContent: 'flex-end',
        // alignitems: 'center',
        numbers: { // 数字配置项
          textStyle: {
            color: '#f4fe4c',
            fontSize: 34,
            fontFamily: 'MF_LangQian'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 6 // 数字之间间距
        }
      },
      configt1: {
        justifyContent: 'center',
        numbers: { // 数字配置项
          textStyle: {
            color: 'yellow',
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
      top5list: [
        {name: '优酷视频', value: 75104},
        {name: '优酷视频', value: 75104},
        {name: '优酷视频', value: 75104},
        {name: '优酷视频', value: 75104},
        {name: '优酷视频', value: 75104}
      ],
      top5lists: [
        {name: '网易云音乐', value: 75104},
        {name: '今日头条', value: 75104},
        {name: '淘宝', value: 75104},
        {name: '虎牙直播', value: 75104},
        {name: '腾讯视频', value: 75104}
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
    init() {
      this.chart1 = echarts.init(document.getElementById('v31echarts-1'));
      this.chart2 = echarts.init(document.getElementById('v31echarts-2'));
      this.chart3 = echarts.init(document.getElementById('v31echarts-3'));
      this.chart4 = echarts.init(document.getElementById('v31echarts-4'));
      this.chart5 = echarts.init(document.getElementById('v31echarts-5'));
      this.chart6 = echarts.init(document.getElementById('v31echarts-6'));
      this.chart7 = echarts.init(document.getElementById('v31echarts-7'));
      this.chart8 = echarts.init(document.getElementById('v31echarts-8'));
      this.chart9 = echarts.init(document.getElementById('v31echarts-9'));
      this.chart10 = echarts.init(document.getElementById('v31echarts-10'));
      this.chart11 = echarts.init(document.getElementById('v31echarts-11'));
    },
    loaddata() {
      // 超长退服
      this.$http.indi.get('jgs0061', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          let chaochangtuifu = []
          let chaopingtuifu = []
          options.option11.xAxis.data = []
          for (let i = 0; i < res.data.data.length; i++) {
            chaochangtuifu.push(res.data.data[i].KPI_VALUE1)
            chaopingtuifu.push(res.data.data[i].KPI_VALUE2)
            options.option11.xAxis.data.push(res.data.data[i].X_AXIS)
          }
          options.option11.series[0].data = []
          options.option11.series[1].data = []
          chaochangtuifu.forEach(element => {
            options.option11.series[0].data.push(element)
          });
          chaopingtuifu.forEach(element => {
            options.option11.series[1].data.push(element)
          });
          this.chart11.setOption(options.option11)
        }
      })
      // 行为分析
      this.$http.indi.get('jgs0062', {dimension_type: this.belongname}, res => {
        if (res.data.data.length > 0) {
          this.numt1 = res.data.data[0].KPI_VALUE
        }
      })
      this.$http.indi.get('jgs0063', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          for (let i = 0; i < res.data.data.length; i++) {
            this.top5list[i].name = res.data.data[i].KPI_NAME
            this.top5list[i].value = res.data.data[i].KPI_VALUE
            options.option2.series[i].data[1].value = res.data.data[i].KPI_VALUE
            options.option2.series[i].data[0].value = 1000 - res.data.data[i].KPI_VALUE
          }
          this.chart2.setOption(options.option2)
        }
      })
      // app使用次数
      this.$http.indi.get('jgs0064', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          options.option3.yAxis.data = []
          options.option3.series[0].data = []
          res.data.data.forEach(ele => {
            options.option3.yAxis.data.push(ele.KPI_NAME)
            options.option3.series[0].data.push(ele.KPI_VALUE)
          })
        }
        this.chart3.setOption(options.option3)
      })
      // 终端比例
      this.$http.indi.get('jgs0065', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          options.option4.series[0].data[0].value = res.data.data[5].KPI_VALUE
          options.option4.series[0].data[1].value = res.data.data[1].KPI_VALUE
          options.option4.series[0].data[2].value = res.data.data[4].KPI_VALUE
          options.option4.series[0].data[3].value = res.data.data[2].KPI_VALUE
          options.option4.series[0].data[4].value = res.data.data[3].KPI_VALUE
          options.option4.series[0].data[5].value = res.data.data[0].KPI_VALUE
        }
        this.chart4.setOption(options.option4)
      })
      // 流量
      this.$http.indi.get('jgs0066', {dimension_type: this.belongname}, res => {
        if (res.data.data.length > 0) {
          this.numt2 = res.data.data[0].KPI_VALUE
        }
      })
      this.$http.indi.get('jgs0067', {dimension_type: this.belongname}, res => {
        // console.log(res)
        if (res.data.data.length > 0) {
          for (let i = 0; i < res.data.data.length; i++) {
            this.top5lists[i].name = res.data.data[i].KPI_NAME
            this.top5lists[i].value = res.data.data[i].KPI_VALUE
            options.option5.series[i].data[1].value = res.data.data[i].KPI_VALUE
            options.option5.series[i].data[0].value = 1000 - res.data.data[i].KPI_VALUE
          }
          this.chart5.setOption(options.option5)
        }
      })
      // 用户分布
      this.$http.indi.get('jgs0068', {dimension_type: this.belongname}, res => {
        if (res.data.data.length > 0) {
          // console.log(res)
          this.womennum = res.data.data[0].KPI_VALUE
          this.width1 = 159 - 159 * (this.womennum / 100)
        }
      })
      this.$http.indi.get('jgs0069', {dimension_type: this.belongname}, res => {
        if (res.data.data.length > 0) {
          // console.log(res)
          this.mannum = res.data.data[0].KPI_VALUE
          this.width2 = 159 - 159 * (this.mannum / 100)
        }
      })
      this.$http.indi.get('jgs0070', {dimension_type: this.belongname}, res => {
        if (res.data.data.length > 0) {
          // console.log(res)
          options.option6.series[0].axisLine.lineStyle.color[0][0] = res.data.data[0].KPI_VALUE / 100
          this.num10 = res.data.data[0].KPI_VALUE
          this.chart6.setOption(options.option6)
        }
      })
      this.$http.indi.get('jgs0071', {dimension_type: this.belongname}, res => {
        if (res.data.data.length > 0) {
          // console.log(res)
          options.option7.series[0].axisLine.lineStyle.color[0][0] = res.data.data[0].KPI_VALUE / 100
          this.num11 = res.data.data[0].KPI_VALUE
          this.chart7.setOption(options.option7)
        }
      })
      this.$http.indi.get('jgs0072', {dimension_type: this.belongname}, res => {
        if (res.data.data.length > 0) {
          // console.log(res)
          options.option8.series[0].data[0].value = res.data.data[0].KPI_VALUE
          options.option8.series[0].data[1].value = 100 - res.data.data[0].KPI_VALUE
          this.num12 = res.data.data[0].KPI_VALUE
          this.chart8.setOption(options.option8)
        }
      })
      this.$http.indi.get('jgs0073', {dimension_type: this.belongname}, res => {
        if (res.data.data.length > 0) {
          // console.log(res)
          options.option9.series[0].data[0].value = res.data.data[0].KPI_VALUE
          options.option9.series[0].data[1].value = 100 - res.data.data[0].KPI_VALUE
          this.num13 = res.data.data[0].KPI_VALUE
          this.chart9.setOption(options.option9)
        }
      })
      this.$http.indi.get('jgs0074', {dimension_type: this.belongname}, res => {
        if (res.data.data.length > 0) {
          // console.log(res)
          options.option10.series[0].axisLine.lineStyle.color[0][0] = res.data.data[0].KPI_VALUE / 100
          this.num14 = res.data.data[0].KPI_VALUE
          this.chart10.setOption(options.option10)
        }
      })
      // 完好率
      this.$http.indi.get('jgs0058', {dimension_type: this.belongname}, res => {
        // console.log(res)
        let totals = res.data.data[0].KPI_VALUE + res.data.data[1].KPI_VALUE + res.data.data[2].KPI_VALUE + res.data.data[3].KPI_VALUE + res.data.data[4].KPI_VALUE +
        res.data.data[5].KPI_VALUE + res.data.data[6].KPI_VALUE + res.data.data[7].KPI_VALUE + res.data.data[8].KPI_VALUE
        if (res.data.data.length > 0) {
          this.num1 = res.data.data[0].KPI_VALUE
          this.num2 = res.data.data[1].KPI_VALUE
          this.num3 = res.data.data[2].KPI_VALUE
          this.num4 = res.data.data[3].KPI_VALUE
          this.num5 = res.data.data[4].KPI_VALUE
          this.num6 = res.data.data[5].KPI_VALUE
          this.num7 = res.data.data[6].KPI_VALUE
          this.num8 = res.data.data[7].KPI_VALUE
          this.num9 = res.data.data[8].KPI_VALUE
          options.option1.series[0].data[0].value = []
          for (let i = 0; i < options.option1.radar.indicator.length; i++) {
            options.option1.radar.indicator[i].max = totals
          }
          res.data.data.forEach(ele => {
            options.option1.series[0].data[0].value.push(ele.KPI_VALUE)
          })
        }
        this.chart1.setOption(options.option1)
      })
      this.$http.indi.get('jgs0059', {dimension_type: this.belongname}, res => {
        if (res.data.data.length > 0) {
          this.numLine1 = res.data.data[0].KPI_VALUE
        }
      })
      this.$http.indi.get('jgs0060', {dimension_type: this.belongname}, res => {
        if (res.data.data.length > 0) {
          this.numLine2 = res.data.data[0].KPI_VALUE
        }
      })
    }
  },
  watch: {
    belongname() {
      this.loaddata()
    }
  }
}
</script>
