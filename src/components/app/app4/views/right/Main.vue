<template>
  <view-template>
    <view-template :interval="60" @interval="loadData">
      <div class="a4_right_container">
        <!-- 区域粒度 -->
        <div class="top3" v-show="region!== '全省'">
          <div class="topTitle">业务量趋势</div>
          <div class="content">
            <div class="left">
              <div class="icon"></div>
              <div class="text"></div>
              <div class="chart1_" id="chart111"></div>
              <div class="num" v-for="item in items111" :key="item.index" :style="item.style">
                <div class="des">{{item.text}}</div>
                <div class="count">
                  <counter :data="item.num" :config="config111"></counter>
                </div>
              </div>
            </div>
            <div class="middle">
              <div class="icon"></div>
              <div class="text"></div>
               <div class="testChart2_" id="testChart222"></div>
              <div class="chart2_" id="chart222"></div>
              <div class="num" v-for="item in items222" :key="item.index" :style="item.style">
                <div class="des">{{item.text}}</div>
                <div class="count">
                  <counter :data="item.num" :config="config2"></counter>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="icon"></div>
              <div class="text"></div>
              <div class="testChart3_" id="testChart333"></div>
              <div class="chart3_" id="chart333"></div>
              <div class="num" v-for="item in items333" :key="item.index" :style="item.style">
                <div class="des">{{item.text}}</div>
                <div class="count">
                  <counter :data="item.num" :config="config3"></counter>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 省粒度 -->
        <swiper :options="swiperOptionTop" class="swiperTop" v-show="region==='全省'">
          <swiper-slide>
            <div class="top">
              <div class="topTitle">业务量趋势</div>
              <div class="content">
                <div class="left">
                  <div class="icon"></div>
                  <div class="text"></div>
                  <div class="chart1_" id="chart1_"></div>
                  <div class="num" v-for="item in items1" :key="item.index" :style="item.style">
                    <div class="des">{{item.text}}</div>
                    <div class="count">
                      <counter :data="item.num" :config="config1"></counter>
                    </div>
                  </div>
                </div>
                <div class="middle">
                  <div class="icon"></div>
                  <div class="text"></div>
                  <div class="testChart2_" id="testChart2_"></div>
                  <div class="chart2_" id="chart2_"></div>
                  <div class="num" v-for="item in items2" :key="item.index" :style="item.style">
                    <div class="des">{{item.text}}</div>
                    <div class="count">
                      <counter :data="item.num" :config="config2"></counter>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="icon"></div>
                  <div class="text"></div>
                  <div class="testChart3_" id="testChart3_"></div>
                  <div class="chart3_" id="chart3_"></div>
                  <div class="num" v-for="item in items3" :key="item.index" :style="item.style">
                    <div class="des">{{item.text}}</div>
                    <div class="count">
                      <counter :data="item.num" :config="config3"></counter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="top2">
              <div class="topTitle">业务量趋势</div>
              <div class="content">
                <div class="left">
                  <div class="icon"></div>
                  <div class="text"></div>
                  <div class="chart1_" id="chart11_"></div>
                  <div class="num" v-for="item in items11" :key="item.index" :style="item.style">
                    <div class="des">{{item.text}}</div>
                    <div class="count">
                      <counter :data="item.num" :config="config1"></counter>
                    </div>
                  </div>
                </div>
                <div class="middle">
                  <div class="icon"></div>
                  <div class="text"></div>
                  <div class="testChart2_" id="testChart22_"></div>
                  <div class="chart2_" id="chart22_"></div>
                  <div class="num" v-for="item in items22" :key="item.index" :style="item.style">
                    <div class="des">{{item.text}}</div>
                    <div class="count">
                      <counter :data="item.num" :config="config2C"></counter>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="icon"></div>
                  <div class="text"></div>
                  <div class="chart3_" id="chart33_"></div>
                  <div class="num" v-for="item in items33" :key="item.index" :style="item.style">
                    <div class="des" :style="item.style2">{{item.text}}</div>
                    <div class="count" :style="item.style3">
                      <counter :data="item.num" :config="config3"></counter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!-- 区域粒度 -->
        <div class="bottom" v-show="region!=='全省'">
          <div class="bottomTitle">网络质量
          <div class="content">
            <div class="left">
              <div class="text1" v-for="item in text" :key="item.index" :style="item.style">{{item.text}}</div>
              <div class="text2" v-for="item in text2" :key="item.index" :style="item.style">
                <div class="text2Content">{{item.text}}<br/>{{item.text2}}
                </div>
              </div>
              <div class="progressBox">
                <div class="circleProgress">
                  <circleProgress v-bind="options1q"></circleProgress>
                  <div class="count">
                    <!-- numtest测试 -->
                    <counter :data="options1q.data" :config="config4"></counter>
                  </div>
                </div>
                <div class="circleProgress2">
                  <circleProgress v-bind="options1qq"></circleProgress>
                  <div class="count">
                    <counter :data="options1qq.data" :config="config4"></counter>
                  </div>
                </div>
                <div class="circleProgress3">
                  <circleProgress v-bind="options1qqq"></circleProgress>
                  <div class="count">
                    <counter :data="options1qqq.data" :config="config4"></counter>
                  </div>
                </div>
              </div>
              <div class="progressBox2">
                <div class="circleProgress">
                  <circleProgress v-bind="options1w"></circleProgress>
                  <div class="count">
                    <counter :data="options1w.data" :config="config4"></counter>
                  </div>
                </div>
                <div class="circleProgress2">
                  <circleProgress v-bind="options1ww"></circleProgress>
                  <div class="count">
                    <counter :data="options1ww.data" :config="config4"></counter>
                  </div>
                </div>
                <div class="circleProgress3">
                  <circleProgress v-bind="options1www"></circleProgress>
                  <div class="count">
                    <counter :data="options1www.data" :config="config4"></counter>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="text" v-for="item in text3" :key="item.index" :style="item.style">
                {{item.text1}}<br/>{{item.text2}}
              </div>
              <!-- 区域粒度 LTE上行REB利用率 -->
              <div class="circleProgress">
                <circleProgress v-bind="options11"></circleProgress>
                <div class="count">
                  <counter :data="options11.data" :config="config4Q"></counter>
                </div>
              </div>
              <div class="circleProgress2">
                <circleProgress v-bind="options12"></circleProgress>
                <div class="count">
                  <counter :data="options12.data" :config="config4Q"></counter>
                </div>
              </div>
              <div class="lineProgress" v-for="item in lineProgress" :key="item.index">
                <div class="progressBox" :style="item.style">
                  <div class="progressMain" :style="'width:' + item.num + '%'"></div>
                </div>
                <div class="count" :style="item.style2">
                  <counter :data="item.num" :config="config4Q"></counter>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <span class="swiper-roam-top" v-show="region==='全省'"></span>
        <span class="swiper-roam" v-show="region==='全省'"></span>
        <!-- 省粒度 -->
        <swiper :options="swiperOption" class="swiperRight" v-show="region==='全省'">
          <swiper-slide>
            <div class="bottom3">
              <div class="bottomTitle">网络质量
              <div class="content">
                <div class="left">
                  <div class="text1" v-for="item in text" :key="item.index" :style="item.style">{{item.text}}</div>
                  <div class="text2" v-for="item in text2" :key="item.index" :style="item.style">
                    <div class="text2Content">{{item.text}}<br/>{{item.text2}}
                    </div>
                  </div>
                  <div class="progressBox">
                    <div class="circleProgress">
                      <circleProgress v-bind="options1"></circleProgress>
                      <div class="count">
                        <counter :data="options1.data" :config="config4"></counter>
                      </div>
                    </div>
                    <div class="circleProgress2">
                      <circleProgress v-bind="options1s"></circleProgress>
                      <div class="count">
                        <counter :data="options1s.data" :config="config4"></counter>
                      </div>
                    </div>
                    <div class="circleProgress3">
                      <circleProgress v-bind="options1ss"></circleProgress>
                      <div class="count">
                        <counter :data="options1ss.data" :config="config4"></counter>
                      </div>
                    </div>
                  </div>
                  <div class="progressBox2">
                    <div class="circleProgress">
                      <circleProgress v-bind="options1x"></circleProgress>
                      <div class="count">
                        <counter :data="options1x.data" :config="config4"></counter>
                      </div>
                    </div>
                    <div class="circleProgress2">
                      <circleProgress v-bind="options1xx"></circleProgress>
                      <div class="count">
                        <counter :data="options1xx.data" :config="config4"></counter>
                      </div>
                    </div>
                    <div class="circleProgress3">
                      <circleProgress v-bind="options1xxx"></circleProgress>
                      <div class="count">
                        <counter :data="options1xxx.data" :config="config4"></counter>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="progressBox2">
                    <div class="circleProgress" v-for="item in circleProgress2" :key="item.index" :style="item.style">
                      <circleProgress v-bind="options1"></circleProgress>
                      <div class="count" :style="item.style2">
                        <counter :data="options1.data" :config="config4"></counter>
                      </div>
                    </div>
                  </div> -->
                </div>
                <div class="right">
                  <!-- 右 左侧 -->
                  <div class="text">
                    {{text16}}
                  </div>
                  <div class="circleProgress">
                    <div class="circle"></div>
                    <!-- 水球图 -->
                    <div class="chart91" id="chart91"></div>
                  </div>
                  <div class="circleProgress2">
                    <div class="circle"></div>
                    <circleProgress v-bind="options117"></circleProgress>
                  </div>
                  <circleProgress v-bind="options118"></circleProgress>
                  <div class="circleText">{{text19}}</div>
                  <div class="desGreen">
                    <div class="green"></div>
                    <div class="greenText">{{text17}}</div>
                    <div class="greenCount">
                      <counter :data="options117.data" :config="config7"></counter>
                    </div>
                  </div>
                  <div class="desYellow">
                    <div class="yellow"></div>
                    <div class="yellowText">{{text18}}</div>
                    <div class="yellowCount">
                      <!-- options118.data -->
                      <counter :data="options118.data" :config="config8"></counter>
                    </div>
                  </div>
                  <!-- 右 右侧 -->
                  <div class="ddosBox">
                    <div class="ddos">{{text20}}</div>
                    <div class="ddosCount">
                      <counter :data="num20" :config="config20"></counter>
                    </div>
                  </div>
                  <div class="ddosBox2">
                    <div class="ddos">{{text21}}</div>
                    <div class="ddosCount">
                      <counter :data="num21" :config="config20"></counter>
                    </div>
                  </div>
                  <div class="ddosItemBox">
                    <div class="item" v-for="item in ddosItems" :key="item.index" :style="item.style">
                      <div class="ddosText">{{item.text}}</div>
                      <div class="ddosCount">
                        <counter :data="item.num" :config="item.config"></counter>
                      </div>
                      <div class="ddosProgressBox">
                        <div class="ddosProgress" :style="'width:' + item.num + '%'"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="bottom2">
              <div class="bottomTitle">网络质量</div>
              <div class="content">
                <div class="left">
                  <div class="textBox">
                    <div class="text" v-for="item in text4" :key="item.index">{{item.text1}}<br>{{item.text2}}</div>
                  </div>
                  <div class="circleProgress3Box">
                    <circleProgress v-bind="options111" class="circleProgress"></circleProgress>
                    <circleProgress v-bind="options112" class="circleProgress"></circleProgress>
                    <circleProgress v-bind="options113" class="circleProgress"></circleProgress>
                    <circleProgress v-bind="options114" class="circleProgress"></circleProgress>
                  </div>
                  <div class="countBox">
                    <div class="count" v-for="item in count" :key="item.index">
                      <counter :data="item.num" :config="config5"></counter>
                    </div>
                  </div>
                  <div class="itemBox1">
                    <div class="item">
                      <div class="textBox">{{text11}}<br>{{text12}}</div>
                      <div class="countBox">
                        <counter :data="num11" :config="config11"></counter>
                      </div>
                      <div class="progressBox">
                        <div class="progress" :style="'width:' + num11 + '%'"></div>
                      </div>
                    </div>
                  </div>
                  <div class="itemBox2">
                    <div class="item">
                      <div class="textBox">{{text13}}</div>
                      <div class="countBox">
                        <counter :data="num12" :config="config11"></counter>
                      </div>
                      <div class="progressBox">
                        <div class="progress" :style="'width:' + num12 + '%'"></div>
                      </div>
                    </div>
                  </div>
                  <div class="itemBox3">
                    <div class="item">
                      <div class="textBox">{{text14}}</div>
                      <div class="countBox">
                        <counter :data="num13" :config="config11"></counter>
                      </div>
                      <div class="progressBox">
                        <div class="progress" :style="'width:' + num13 + '%'"></div>
                      </div>
                    </div>
                  </div>
                  <div class="itemBox4">
                    <div class="item">
                      <div class="textBox">{{text15}}</div>
                      <div class="countBox">
                        <counter :data="num14" :config="config11"></counter>
                      </div>
                      <div class="progressBox">
                        <div class="progress" :style="'width:' + num14 + '%'"></div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="itemBox">
                    <div class="item" v-for="item in percent" :key="item.index">
                      <div class="textBox"></div>
                      <div class="countBox"></div>
                      <div class="progressBox"></div>
                    </div>
                  </div> -->
                </div>
                <div class="right">
                  <!-- 峰值流速 -->
                  <div class="rightCircleProgress1">
                    <circleProgress v-bind="options115" class="circleProgress"></circleProgress>
                  </div>
                  <circleProgress v-bind="options116"></circleProgress>
                  <div class="mountainText">峰值速率</div>
                  <div class="des">
                    <div class="green"></div>
                    <div class="text">IPTV</div>
                    <div class="count">
                      <counter :data="options115.data" :config="config6"></counter>
                    </div>
                  </div>
                  <div class="des2">
                    <div class="yellow"></div>
                    <div class="text">OTT</div>
                    <div class="count">
                      <counter :data="options116.data" :config="config6"></counter>
                    </div>
                  </div>
                  <!-- IDC出口、入口 -->
                  <div class="rightCircleProgress1r">
                    <circleProgress v-bind="options115r"></circleProgress>
                  </div>
                  <div class="rightCircleProgress2r">
                    <circleProgress v-bind="options116r"></circleProgress>
                  </div>
                  <div class="mountainTextr">宽带利用率</div>
                  <div class="des3">
                    <div class="green"></div>
                    <div class="text">IDC出口输出值</div>
                    <div class="count">
                      <counter :data="options115r.data" :config="config6r"></counter>
                    </div>
                  </div>
                  <div class="des4">
                    <div class="yellow"></div>
                    <div class="text">IDC出口输入值</div>
                    <div class="count">
                      <counter :data="options116r.data" :config="config6r"></counter>
                    </div>
                  </div>
                  <!-- 水球图 -->
                  <!-- <div class="rightCircleProgress2"></div>
                  <div class="des3">IDC出口输出峰值带宽利用率</div>
                  <div class="des4">IDC出口输入峰值带宽利用率</div>
                  <div class="circle"></div>
                  <div class="chart81" id="chart81"></div> -->
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </view-template>
  </view-template>
</template>
<script>
import './Main.scss';
import echarts from 'echarts';
import options from './options.js';
import 'echarts-liquidfill/src/liquidFill.js';
export default {
  /* eslint-disabled */
  data() {
    return {
      swiperOption: {
        // autoplay: false,
        autoplay: 30 * 1000,
        setWrapperSize: true,
        autoplayDisableOnInteraction: false,
        observeParents: true,
        direction: 'horizontal',
        pagination: '.swiper-roam',
        paginationClickable: true
      },
      swiperOptionTop: {
        // autoplay: false,
        autoplay: 30 * 1000,
        setWrapperSize: true,
        autoplayDisableOnInteraction: false,
        observeParents: true,
        direction: 'horizontal',
        pagination: '.swiper-roam-top',
        paginationClickable: true
      },
      testData: 888.6,
      numtest: 33.33,
      num: 66,
      num2: 66,
      num11: 66,
      num12: 66,
      num13: 66,
      num14: 66,
      num17: 66,
      num18: 66666,
      num20: 66666,
      num21: 66666,
      text11: 'MME排除用户',
      text12: '原因的附着成功率',
      text13: 'PGW计费请求成功率',
      text14: 'OTT播放成功率',
      text15: '策略控制发起成功率',
      text16: 'ONU弱光占比',
      text17: '上行PRB利用率',
      text18: '下行PRB利用率',
      text19: 'LTE',
      text20: 'DDOS攻击事件数',
      text21: 'DDOS解决事件数',
      ddosItems: [
        {
          text: '流量越限OLT数量',
          num: 66,
          style: 'top: 0;',
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#95fe80',
                fontSize: 26,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 7 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: '个',
              marginLeft: 0,
              textStyle: {
                color: '#95fe80',
                fontSize: 26,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        },
        {
          text: '长途来话通话率',
          num: 66,
          style: 'top: 80px;',
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#95fe80',
                fontSize: 26,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 7 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: '%',
              marginLeft: 0,
              textStyle: {
                color: '#95fe80',
                fontSize: 26,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        },
        {
          text: '短信全程接通率',
          num: 66,
          style: 'top: 164px;',
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#95fe80',
                fontSize: 26,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 7 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: '%',
              marginLeft: 0,
              textStyle: {
                color: '#95fe80',
                fontSize: 26,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        }
      ],
      // 进度圆环 省粒度
      options1: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 200,
        canvasWidth: 250,
        // 圆心坐标
        coordinates: [73, 80],
        // coordinates: [-28, 80],
        radius: 54, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        // data: 100,
        data: 100,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          // lineDash: [10, 14]
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options1s: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 200,
        canvasWidth: 250,
        // 圆心坐标
        coordinates: [73, 80],
        // coordinates: [-28, 80],
        radius: 54, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        // data: 100,
        data: 20,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          // lineDash: [10, 14]
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options1ss: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 200,
        canvasWidth: 250,
        // 圆心坐标
        coordinates: [73, 80],
        // coordinates: [-28, 80],
        radius: 54, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        // data: 100,
        data: 30,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          // lineDash: [10, 14]
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options1x: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 200,
        canvasWidth: 250,
        // 圆心坐标
        coordinates: [73, 80],
        // coordinates: [-28, 80],
        radius: 54, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        // data: 100,
        data: 50,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          // lineDash: [10, 14]
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options1xx: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 200,
        canvasWidth: 250,
        // 圆心坐标
        coordinates: [73, 80],
        // coordinates: [-28, 80],
        radius: 54, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        // data: 100,
        data: 50,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          // lineDash: [10, 14]
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options1xxx: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 200,
        canvasWidth: 250,
        // 圆心坐标
        coordinates: [73, 80],
        // coordinates: [-28, 80],
        radius: 54, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        // data: 100,
        data: 50,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          // lineDash: [10, 14]
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      // 区域粒度
      options1w: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 200,
        canvasWidth: 250,
        // 圆心坐标
        coordinates: [73, 80],
        // coordinates: [-28, 80],
        radius: 54, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        // data: 100,
        data: 100,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          // lineDash: [10, 14]
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options1ww: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 200,
        canvasWidth: 250,
        // 圆心坐标
        coordinates: [73, 80],
        // coordinates: [-28, 80],
        radius: 54, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        // data: 100,
        data: 20,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          // lineDash: [10, 14]
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options1www: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 200,
        canvasWidth: 250,
        // 圆心坐标
        coordinates: [73, 80],
        // coordinates: [-28, 80],
        radius: 54, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        // data: 100,
        data: 30,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          // lineDash: [10, 14]
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options1q: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 200,
        canvasWidth: 250,
        // 圆心坐标
        coordinates: [73, 80],
        // coordinates: [-28, 80],
        radius: 54, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        // data: 100,
        data: 100,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          // lineDash: [10, 14]
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options1qq: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 200,
        canvasWidth: 250,
        // 圆心坐标
        coordinates: [73, 80],
        // coordinates: [-28, 80],
        radius: 54, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        // data: 100,
        data: 20,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          // lineDash: [10, 14]
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options1qqq: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 200,
        canvasWidth: 250,
        // 圆心坐标
        coordinates: [73, 80],
        // coordinates: [-28, 80],
        radius: 54, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        // data: 100,
        data: 30,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          // lineDash: [10, 14]
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options111: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 1000,
        canvasWidth: 1000,
        coordinates: [82, 92], // 圆心坐标
        radius: 62, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        data: 100,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options112: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 1000,
        canvasWidth: 1000,
        coordinates: [83, 91], // 圆心坐标
        radius: 62, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        data: 100,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options113: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 1000,
        canvasWidth: 1000,
        coordinates: [88, 92], // 圆心坐标
        radius: 62, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        data: 100,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options114: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 1000,
        canvasWidth: 1000,
        coordinates: [84, 92], // 圆心坐标
        radius: 62, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        data: 100,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options115: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 1000,
        canvasWidth: 1000,
        coordinates: [120, 142], // 圆心坐标
        radius: 86, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        data: 100,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          // 0: 'rgba(20, 222, 235, 0.99)'
          0: '#96ff83'
        },
        lineStyle: {
          lineWidth: 14,
          lineCap: 'butt',
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options116: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 300,
        canvasWidth: 300,
        coordinates: [175, 202], // 圆心坐标
        radius: 68, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        data: 100,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          // 0: 'rgba(20, 222, 235, 0.99)'
          0: '#d3dd34'
        },
        lineStyle: {
          lineWidth: 14,
          lineCap: 'butt',
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options117: {
        id: 'cricleProgress3',
        /* 基础配置 */
        canvasHeight: 1000,
        canvasWidth: 1000,
        coordinates: [75, 82], // 圆心坐标
        radius: 48, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        data: 100,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          // 0: 'rgba(20, 222, 235, 0.99)'
          0: '#96ff7e'
        },
        lineStyle: {
          lineWidth: 6,
          lineCap: 'butt',
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options118: {
        id: 'cricleProgress2',
        /* 基础配置 */
        canvasHeight: 1000,
        canvasWidth: 1000,
        coordinates: [146, 282], // 圆心坐标
        radius: 38, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        data: 100.0,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          // 0: 'rgba(20, 222, 235, 0.99)'
          0: '#ebaa2d'
        },
        lineStyle: {
          lineWidth: 6,
          lineCap: 'butt',
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options115r: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 1000,
        canvasWidth: 1000,
        coordinates: [120, 142], // 圆心坐标
        radius: 86, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        data: 100,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          // 0: 'rgba(20, 222, 235, 0.99)'
          0: '#96ff83'
        },
        lineStyle: {
          lineWidth: 14,
          lineCap: 'butt',
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options116r: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 300,
        canvasWidth: 300,
        coordinates: [120, 144], // 圆心坐标
        radius: 68, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        data: 100,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          // 0: 'rgba(20, 222, 235, 0.99)'
          0: '#d3dd34'
        },
        lineStyle: {
          lineWidth: 14,
          lineCap: 'butt',
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      // 省粒度
      items1: [
        {text: '2G', num: 2222.2, style: 'left: 10px'},
        {text: '4G', num: 2222.2, style: 'left: 166px'},
        {text: 'volte', num: 2222.2, style: 'left: 327px'}
      ],
      items11: [
        {text: '家宽', num: 2222.2, style: 'left: 10px'},
        {text: 'OTT', num: 2222.2, style: 'left: 166px'},
        {text: 'IPTV', num: 2222.2, style: 'left: 327px'}
      ],
      // 区域粒度
      items111: [
        {text: '2G', num: 2222.2, style: 'left: 10px'},
        {text: '4G', num: 2222.2, style: 'left: 166px'},
        {text: 'volte', num: 2222.2, style: 'left: 327px'}
      ],
      // 省粒度
      items2: [
        {text: '2G', num: 2222.2, style: 'left: 75px'},
        {text: '4G', num: 2222.2, style: 'left: 260px;'}
      ],
      items22: [
        {text: '短信', num: 2222.2, style: 'left: 75px'},
        {text: '彩信', num: 2222.2, style: 'left: 260px;'}
      ],
      // 区域粒度
      items222: [
        {text: '2G', num: 2222.2, style: 'left: 75px'},
        {text: '4G', num: 2222.2, style: 'left: 260px;'}
      ],
      // 省粒度
      items3: [
        {text: '2G', num: 2222.2, style: 'left: 35px'},
        {text: 'volte', num: 2222.2, style: 'left: 260px;'}
      ],
      items33: [
        // {text: '2G', num: 22, style: 'left: 205px'},
        {text: '长途话务量', num: 2222.2, style: 'left: 132px; width: 236px', style2: 'width: 106px', style3: 'width: 124px'}
      ],
      // 区域粒度
      items333: [
        {text: '2G', num: 2222.2, style: 'left: 75px'},
        {text: 'volte', num: 2222.2, style: 'left: 260px;'}
      ],
      text: [
        {text: 'GSM', style: 'position: absolute; left: 260px; top: 30px'},
        {text: 'LTE', style: 'position: absolute; left: 400px; top: 30px'},
        {text: 'VOLTE', style: 'position: absolute; left: 540px; top: 30px'}
      ],
      text2: [
        {text: '接通', text2: '成功率', style: 'position: absolute; left: 62px; top: 92px'},
        {text: '掉话率', style: 'position: absolute; left: 62px; top: 266px'}
      ],
      text3: [
        {text1: 'LTE上行PRB利用率', style: 'position: absolute; left: 62px; top: 20px'},
        {text1: 'LTE下行PRB利用率', style: 'position: absolute; left: 62px; top: 226px'},
        {text1: 'MME排除用户原因的', style: 'position: absolute; left: 250px; top: 60px'},
        {text1: '缺省承载激活成功率', style: 'position: absolute; left: 250px; top: 190px'},
        {text1: '专用承载激活成功率', style: 'position: absolute; left: 250px; top: 320px'}
      ],
      text4: [
        {text1: 'volte初始', text2: '注册成功率', style: 'position: absolute; left: 62px; top: 20px'},
        {text1: 'Diamter业务', text2: '转发成功率', style: 'position: absolute; left: 62px; top: 226px'},
        {text1: '彩信端到端', text2: '成功率', style: 'position: absolute; left: 250px; top: 60px'},
        {text1: 'SGW缺省', text2: '承载建立成功率', style: 'position: absolute; left: 250px; top: 190px'}
      ],
      count: [
        {num: 88},
        {num: 88},
        {num: 88},
        {num: 88}
      ],
      percent: [
        {text1: 'MME排除用户'},
        {text1: 'MME排除用户'},
        {text1: 'MME排除用户'},
        {text1: 'MME排除用户'}
      ],
      // circleProgress
      circleProgress: [
        {num: 99, style: 'position: absolute; left: 0; top: 0px;', style2: 'position: absolute; left: 10px; top: 56px;'},
        {num: 99, style: 'position: absolute; left: 146px; top: 0;', style2: 'position: absolute; left: 10px; top: 56px;'},
        {num: 99, style: 'position: absolute; left: 292px; top: 0;', style2: 'position: absolute; left: 10px; top: 56px;'}
      ],
      circleProgress2: [
        {num: 99, style: 'position: absolute; left: 0; top: 0px;', style2: 'position: absolute; left: 10px; top: 56px;'},
        {num: 99, style: 'position: absolute; left: 146px; top: 0;', style2: 'position: absolute; left: 10px; top: 56px;'},
        {num: 99, style: 'position: absolute; left: 292px; top: 0;', style2: 'position: absolute; left: 10px; top: 56px;'}
      ],
      lineProgress: [
        {num: 50, style: 'position: absolute; top: 110px; left: 252px;', style2: 'position: absolute; top: 60px; left: 470px;'},
        {num: 50, style: 'position: absolute; top: 240px; left: 252px;', style2: 'position: absolute; top: 190px; left: 470px;'},
        {num: 50, style: 'position: absolute; top: 370px; left: 252px;', style2: 'position: absolute; top: 320px; left: 470px;'}
      ],
      // 进度圆环
      options11: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 1000,
        canvasWidth: 1000,
        coordinates: [76, 78], // 圆心坐标
        radius: 70, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        // data: 100,
        data: 50,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          // lineDash: [10, 14]
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options12: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 1000,
        canvasWidth: 1000,
        coordinates: [76, 78], // 圆心坐标
        radius: 70, // 圆半径
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        // data: 100,
        data: 50,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 10,
          lineCap: 'butt',
          // lineDash: [10, 14]
          lineDash: [10, 0]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      config1: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#faf365',
            fontSize: 14,
            fontFamily: 'MicrosoftYaHei',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '万',
          marginLeft: 0,
          textStyle: {
            color: '#faf365',
            fontSize: 14,
            fontWeight: 'normal',
            fontFamily: 'MicrosoftYaHei'
          }
        }
      },
      config2: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#faf365',
            fontSize: 14,
            fontFamily: 'MicrosoftYaHei',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: 'GB',
          marginLeft: 0,
          textStyle: {
            color: '#faf365',
            fontSize: 14,
            fontWeight: 'normal',
            fontFamily: 'MicrosoftYaHei'
          }
        }
      },
      config3: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#faf365',
            fontSize: 14,
            fontFamily: 'MicrosoftYaHei',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '万ERL',
          marginLeft: 0,
          textStyle: {
            color: '#faf365',
            fontSize: 14,
            fontWeight: 'normal',
            fontFamily: 'MicrosoftYaHei'
          }
        }
      },
      config4: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#20ff97',
            fontSize: 16,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 0 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '%',
          marginLeft: 2,
          textStyle: {
            color: '#20ff97',
            fontSize: 16,
            fontWeight: 'normal',
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      config4Q: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#20ff97',
            fontSize: 24,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 0 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '%',
          marginLeft: 2,
          textStyle: {
            color: '#20ff97',
            fontSize: 24,
            fontWeight: 'normal',
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      config5: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#91f9a4',
            fontSize: 18,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '%',
          marginLeft: 0,
          textStyle: {
            color: '#91f9a4',
            fontSize: 18,
            fontWeight: 'normal',
            fontFamily: 'MicrosoftYaHei'
          }
        }
      },
      config6: {
        justifyContent: 'flex-start',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#94ff78',
            fontSize: 18,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: 'Gbps',
          marginLeft: 2,
          textStyle: {
            color: '#94ff78',
            fontSize: 18,
            fontWeight: 'normal',
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      config6r: {
        justifyContent: 'flex-start',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#94ff78',
            fontSize: 18,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '%',
          marginLeft: 2,
          textStyle: {
            color: '#94ff78',
            fontSize: 18,
            fontWeight: 'normal',
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      config11: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#93f984',
            fontSize: 24,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '%',
          marginLeft: 4,
          textStyle: {
            color: '#93f984',
            fontSize: 24,
            fontWeight: 'normal',
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      config111: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#faf365',
            fontSize: 14,
            fontFamily: 'MicrosoftYaHei',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '人',
          marginLeft: 0,
          textStyle: {
            color: '#faf365',
            fontSize: 14,
            fontWeight: 'normal',
            fontFamily: 'MicrosoftYaHei'
          }
        }
      },
      config7: {
        justifyContent: 'flex-end',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#95fe80',
            fontSize: 18,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '%',
          marginLeft: 4,
          textStyle: {
            color: '#95fe80',
            fontSize: 18,
            fontWeight: 'normal',
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      config8: {
        justifyContent: 'flex-end',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#95fe80',
            fontSize: 18,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '%',
          marginLeft: 4,
          textStyle: {
            color: '#95fe80',
            fontSize: 18,
            fontWeight: 'normal',
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      config20: {
        justifyContent: 'flex-end',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#95fe80',
            fontSize: 26,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 7 // 数字之间间距
        }
      },
      configDDOS: {
        justifyContent: 'flex-end',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#95fe80',
            fontSize: 26,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 7 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '%',
          marginLeft: 0,
          textStyle: {
            color: '#95fe80',
            fontSize: 26,
            fontWeight: 'normal',
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      config2C: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#faf365',
            fontSize: 12,
            fontFamily: 'MicrosoftYaHei',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '万条',
          marginLeft: 4,
          textStyle: {
            color: '#faf365',
            fontSize: 12,
            fontWeight: 'normal',
            fontFamily: 'MicrosoftYaHei'
          }
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
    })
    this.init();
    this.initData();
  },
  methods: {
    loadData() {
      this.changeRegion(this.region);
    },
    init() {
      // 折线图
      this.chart1 = echarts.init(document.getElementById('chart1_'));
      // this.chart1.setOption(options.option1);
      // 柱状图
      this.chart2 = echarts.init(document.getElementById('chart2_'));
      this.testChart2 = echarts.init(document.getElementById('testChart2_'));
      // this.testChart2.setOption(options.option2test);
      // 柱状图
      this.chart3 = echarts.init(document.getElementById('chart3_'));
      this.testChart3 = echarts.init(document.getElementById('testChart3_'));
      // this.chart3.setOption(options.option3);
      // this.testChart3.setOption(options.option3test);
      // 折线图
      this.chart11 = echarts.init(document.getElementById('chart11_'));
      this.chart11.setOption(options.option11);
      // 柱状图
      this.chart22 = echarts.init(document.getElementById('chart22_'));
      this.testChart22 = echarts.init(document.getElementById('testChart22_'));
      // this.testChart22.setOption(options.option22test);
      // 柱状图
      this.chart33 = echarts.init(document.getElementById('chart33_'));
      this.chart33.setOption(options.option33);
      // 折线图
      this.chart111 = echarts.init(document.getElementById('chart111'));
      this.chart111.setOption(options.option111);
      // 柱状图
      this.testChart222 = echarts.init(document.getElementById('testChart222'));
      this.chart222 = echarts.init(document.getElementById('chart222'));
      this.chart222.setOption(options.option222);
      this.testChart222.setOption(options.option222test);
      // 柱状图
      this.chart333 = echarts.init(document.getElementById('chart333'));
      this.chart333.setOption(options.option333);
      this.testChart333 = echarts.init(document.getElementById('testChart333'));
      this.testChart333.setOption(options.option333test);
      // 水球图
      // this.chart81 = echarts.init(document.getElementById('chart81'));
      // this.chart81.setOption(options.option81);
      // 水球图
      this.chart91 = echarts.init(document.getElementById('chart91'));
      // this.chart91.setOption(options.option91);
    },
    // 省粒度
    initData() {
      // option1
      // 数据清零
      options.option1.series[0].data = [];
      options.option1.series[1].data = [];
      options.option1.series[2].data = [];
      options.option1.xAxis.data = [];
      this.$http.indi.get('jzb0007', { second_area_name: '全省' }, res => {
        for ( var index = 0; index < res.data.data.length; index++) {
          if (res.data.data[index].KPI_NAME === '2G用户数') {
            options.option1.series[0].data.push(res.data.data[index].KPI_VALUE);
          }
          if (res.data.data[index].KPI_NAME === '4G用户数') {
            options.option1.series[1].data.push(res.data.data[index].KPI_VALUE);
          }
          if (res.data.data[index].KPI_NAME === 'volte用户数') {
            options.option1.series[2].data.push(res.data.data[index].KPI_VALUE);
          }
        }
        for (var i = 0; i < res.data.data.length - 1; i += 3) {
          options.option1.xAxis.data.push(res.data.data[i].X_AXIS);
        }
        this.chart1.clear();
        this.chart1.setOption(options.option1);
      });
      // option2
      this.$http.indi.get('jzb0009', { second_area_name: '全省' }, res => {
        options.option2.series[0].data = [];
        options.option2.series[1].data = [];
        options.option2test.series[0].data = [];
        options.option2test.series[1].data = [];
        options.option2.xAxis.data = [];
        options.option2test.xAxis.data = [];
        for ( var j = 0; j < res.data.data.length; j++) {
          if (res.data.data[j].KPI_NAME === '2G流量') {
            options.option2.series[0].data.push(-res.data.data[j].KPI_VALUE);
          }
          if (res.data.data[j].KPI_NAME === '2G流量日常值') {
            options.option2.series[1].data.push(-res.data.data[j].KPI_VALUE);
          }
          if (res.data.data[j].KPI_NAME === '4G流量') {
            options.option2test.series[0].data.push(res.data.data[j].KPI_VALUE);
          }
          if (res.data.data[j].KPI_NAME === '4G流量日常值') {
            options.option2test.series[1].data.push(res.data.data[j].KPI_VALUE);
          }
        }
        for (var i = 0; i < res.data.data.length - 1; i += 4) {
          options.option2.xAxis.data.push(res.data.data[i].X_AXIS);
          options.option2test.xAxis.data.push(res.data.data[i].X_AXIS);
        }
        this.chart2.clear();
        this.testChart2.clear();
        this.chart2.setOption(options.option2);
        this.testChart2.setOption(options.option2test);
      });
      // option3
      this.$http.indi.get('jzb0011', { second_area_name: '全省' }, res => {
        options.option3.series[0].data = [];
        options.option3.series[1].data = [];
        options.option3test.series[0].data = [];
        options.option3test.series[1].data = [];
        options.option3test.xAxis.data = [];
        for ( var j = 0; j < res.data.data.length; j++) {
          if (res.data.data[j].KPI_NAME === '2G话务量') {
            options.option3.series[0].data.push(-res.data.data[j].KPI_VALUE);
            // console.log(res.data.data[j].KPI_VALUE)
          }
          if (res.data.data[j].KPI_NAME === '2G话务量日常值') {
            options.option3.series[1].data.push(-res.data.data[j].KPI_VALUE);
          }
          if (res.data.data[j].KPI_NAME === '4G话务量') {
            options.option3test.series[0].data.push(res.data.data[j].KPI_VALUE);
          }
          if (res.data.data[j].KPI_NAME === '4G话务量日常值') {
            options.option3test.series[1].data.push(res.data.data[j].KPI_VALUE);
          }
          // options.option2.series[0].data.push(-res.data.data[j].KPI_VALUE);
          // options.option2.series[1].data.push(-res.data.data[j + 1].KPI_VALUE);
          // options.option2.series[2].data.push(res.data.data[j + 2].KPI_VALUE);
          // options.option2.series[3].data.push(res.data.data[j + 3].KPI_VALUE);
        }
        for (var i = 0; i < res.data.data.length - 1; i += 4) {
          options.option3test.xAxis.data.push(res.data.data[i].X_AXIS);
        }
        this.chart3.clear();
        this.testChart3.clear();
        this.chart3.setOption(options.option3);
        this.testChart3.setOption(options.option3test);
      })
      // option11
      this.$http.indi.get('jzb0013', { second_area_name: '全省' }, res => {
        options.option11.series[0].data = [];
        options.option11.series[1].data = [];
        options.option11.series[2].data = [];
        options.option11.xAxis.data = [];
        for ( var index = 0; index < res.data.data.length; index++) {
          if (res.data.data[index].KPI_NAME === '家宽在线用户数') {
            options.option11.series[0].data.push(res.data.data[index].KPI_VALUE);
          }
          if (res.data.data[index].KPI_NAME === 'OTT在线用户数') {
            options.option11.series[1].data.push(res.data.data[index].KPI_VALUE);
          }
          if (res.data.data[index].KPI_NAME === 'IPTV在线用户数') {
            options.option11.series[2].data.push(res.data.data[index].KPI_VALUE);
          }
        }
        for (var i = 0; i < res.data.data.length - 1; i += 3) {
          options.option11.xAxis.data.push(res.data.data[i].X_AXIS);
        }
        this.chart11.clear();
        this.chart11.setOption(options.option11);
      });
      // option22
      this.$http.indi.get('jzb0015', { second_area_name: '全省' }, res => {
        options.option22.series[0].data = [];
        options.option22.series[1].data = [];
        options.option22test.series[0].data = [];
        options.option22test.series[1].data = [];
        options.option22test.xAxis.data = [];
        for ( var j = 0; j < res.data.data.length; j++) {
          if (res.data.data[j].KPI_NAME === '短信量') {
            options.option22.series[0].data.push(-res.data.data[j].KPI_VALUE);
            // console.log(res.data.data[j].KPI_VALUE)
          }
          if (res.data.data[j].KPI_NAME === '短信量日常值') {
            options.option22.series[1].data.push(-res.data.data[j].KPI_VALUE);
          }
          if (res.data.data[j].KPI_NAME === '彩信量') {
            options.option22test.series[0].data.push(res.data.data[j].KPI_VALUE);
          }
          if (res.data.data[j].KPI_NAME === '彩信量日常值') {
            options.option22test.series[1].data.push(res.data.data[j].KPI_VALUE);
          }
          // options.option2.series[0].data.push(-res.data.data[j].KPI_VALUE);
          // options.option2.series[1].data.push(-res.data.data[j + 1].KPI_VALUE);
          // options.option2.series[2].data.push(res.data.data[j + 2].KPI_VALUE);
          // options.option2.series[3].data.push(res.data.data[j + 3].KPI_VALUE);
        }
        for (var i = 0; i < res.data.data.length - 1; i += 4) {
          options.option22test.xAxis.data.push(res.data.data[i].X_AXIS);
        }
        this.chart22.clear();
        this.testChart22.clear();
        this.chart22.setOption(options.option22);
        this.testChart22.setOption(options.option22test);
      });
      // option33
      this.$http.indi.get('jzb0017', { second_area_name: '全省' }, res => {
        options.option33.series[0].data = [];
        options.option33.series[1].data = [];
        options.option33.xAxis.data = [];
        for ( var j = 0; j < res.data.data.length; j++) {
          if (res.data.data[j].KPI_NAME === '长途话务量') {
            options.option33.series[0].data.push(res.data.data[j].KPI_VALUE);
            // console.log(res.data.data[j].KPI_VALUE)
          }
          if (res.data.data[j].KPI_NAME === '长途话务量日常值') {
            options.option33.series[1].data.push(res.data.data[j].KPI_VALUE);
          }
        }
        for (var i = 0; i < res.data.data.length - 1; i += 2) {
          options.option33.xAxis.data.push(res.data.data[i].X_AXIS);
        }
        this.chart33.clear();
        this.chart33.setOption(options.option33);
      })
      // 省粒度 2G用户数
      // 数据清零
      for (var i = 0; i < this.items1.length; i++) {
        this.items1[i].num = 0;
      }
      for (var j = 0; j < this.items2.length; j++) {
        this.items2[j].num = 0;
      }
      for (var k = 0; k < this.items3.length; k++) {
        this.items3[k].num = 0;
      }
      for (var a = 0; a < this.items11.length; a++) {
        this.items11[a].num = 0;
      }
      for (var b = 0; b < this.items22.length; b++) {
        this.items22[b].num = 0;
      }
      for (var d = 0; d < this.items33.length; d++) {
        this.items33[d].num = 0;
      }
      this.$http.indi.get('jzb0006', { second_area_name: '全省' }, res => {
        res.data.data.forEach(ele => {
          if (ele.ORDER_NAME === 1) {
            this.items1[0].num = ele.KPI_VALUE;
          }
          if (ele.ORDER_NAME === 2) {
            this.items1[1].num = ele.KPI_VALUE;
          }
          if (ele.ORDER_NAME === 3) {
            this.items1[2].num = ele.KPI_VALUE;
          }
        });

        // console.log(res.data.data[0].KPI_VALUE)
      });
      this.$http.indi.get('jzb0008', { second_area_name: '全省' }, res => {
        res.data.data.forEach(ele => {
          if (ele.ORDER_NAME === 1) {
            this.items2[0].num = ele.KPI_VALUE;
          }
          if (ele.ORDER_NAME === 2) {
            this.items2[1].num = ele.KPI_VALUE;
          }
        })
      });
      this.$http.indi.get('jzb0010', { second_area_name: '全省' }, res => {
        res.data.data.forEach(ele => {
          if (ele.ORDER_NAME === 1) {
            this.items3[0].num = ele.KPI_VALUE;
          }
          if (ele.ORDER_NAME === 2) {
            this.items3[1].num = ele.KPI_VALUE;
          }
        })
      });
      this.$http.indi.get('jzb0012', { second_area_name: '全省' }, res => {
        res.data.data.forEach(ele => {
          if (ele.ORDER_NAME === 1) {
            this.items11[0].num = ele.KPI_VALUE;
          }
          if (ele.ORDER_NAME === 2) {
            this.items11[1].num = ele.KPI_VALUE;
          }
          if (ele.ORDER_NAME === 3) {
            this.items11[2].num = ele.KPI_VALUE;
          }
        });
      });
      this.$http.indi.get('jzb0014', { second_area_name: '全省' }, res => {
        res.data.data.forEach(ele => {
          if (ele.ORDER_NAME === 1) {
            this.items22[0].num = ele.KPI_VALUE;
          }
          if (ele.ORDER_NAME === 2) {
            this.items22[1].num = ele.KPI_VALUE;
          }
        })
      });
      this.$http.indi.get('jzb0016', { second_area_name: '全省' }, res => {
        this.items33[0].num = res.data.data[0].KPI_VALUE;
      });
      // GSM ITE VOLTE
      // 数据清零
      this.options1.data = 0;
      this.options1s.data = 0;
      this.options1ss.data = 0;
      this.options1x.data = 0;
      this.options1xx.data = 0;
      this.options1xxx.data = 0;
      this.$http.indi.get('jzb0018', { second_area_name: '全省' }, res => {
        res.data.data.forEach(ele => {
          switch (ele.NAME_ORDER) {
            case 1: this.options1.data = ele.KPI_VALUE; break;
            case 2: this.options1s.data = ele.KPI_VALUE; break;
            case 3: this.options1ss.data = ele.KPI_VALUE; break;
            case 4: this.options1x.data = ele.KPI_VALUE; break;
            case 5: this.options1xx.data = ele.KPI_VALUE; break;
            case 6: this.options1xxx.data = ele.KPI_VALUE; break;
            // case 2: this.options1.data = ele.KPI_VALUE; break;
            // case 1: this.options1s.data = ele.KPI_VALUE; break;
            // case 3: this.options1ss.data = ele.KPI_VALUE; break;
            // case 4: this.options1x.data = ele.KPI_VALUE; break;
            // case 6: this.options1xx.data = ele.KPI_VALUE; break;
            // case 5: this.options1xxx.data = ele.KPI_VALUE; break;
          }
        })
      })
      // volte初始注册成功率
      // 数据清零
      this.options113.data = 0;
      this.options111.data = 0;
      this.options112.data = 0;
      this.options114.data = 0;
      this.num11 = 0;
      this.num12 = 0;
      this.num13 = 0;
      this.num14 = 0;
      this.$http.indi.get('jzb0021', { second_area_name: '全省' }, res => {
        res.data.data.forEach((ele, index) => {
          if (ele.NAME_ORDER === 3) {
            this.options113.data = ele.KPI_VALUE;
            this.count[2].num = ele.KPI_VALUE;
          }
          if (ele.NAME_ORDER === 1) {
            this.options111.data = ele.KPI_VALUE;
            this.count[0].num = ele.KPI_VALUE;
          }
          if (ele.NAME_ORDER === 2) {
            this.options112.data = ele.KPI_VALUE;
            this.count[1].num = ele.KPI_VALUE;
          }
          if (ele.NAME_ORDER === 4) {
            this.options114.data = ele.KPI_VALUE;
            this.count[3].num = ele.KPI_VALUE;
          }
          if (ele.NAME_ORDER === 5) {
            this.num11 = ele.KPI_VALUE
          }
          if (ele.NAME_ORDER === 6) {
            this.num12 = ele.KPI_VALUE
          }
          if (ele.NAME_ORDER === 7) {
            this.num13 = ele.KPI_VALUE
          }
          if (ele.NAME_ORDER === 8) {
            this.num14 = ele.KPI_VALUE
          }
        });
      });
      // IPTV、OTT、IDC输入、IDC输出
      // 数据清零
      this.options115r.data = 0;
      this.options116r.data = 0;
      this.options116.data = 0;
      this.options115.data = 0;
      this.$http.indi.get('jzb0022', { second_area_name: '全省' }, res => {
        res.data.data.forEach((ele, index) => {
          if (ele.NAME_ORDER === 4) {
            this.options116r.data = ele.KPI_VALUE
          }
          if (ele.NAME_ORDER === 3) {
            this.options115r.data = ele.KPI_VALUE
          }
          if (ele.NAME_ORDER === 1) {
            this.options115.data = ele.KPI_VALUE
          }
          if (ele.NAME_ORDER === 2) {
            this.options116.data = ele.KPI_VALUE
          }
        });
      });
      // DDOS攻击数、解决数、上行、下行
      // 数据清零
      this.num20 = 0;
      this.num21 = 0;
      this.options117.data = 0;
      this.options118.data = 0;
      options.option91.series[0].data[0].value = 0;
      for (var z = 0; z < this.ddosItems.length; z++) {
        this.ddosItems[z].num = 0;
      }
      this.$http.indi.get('jzb0020', { second_area_name: '全省' }, res => {
        // DDOS攻击数、解决数
        // console.log(res.data.data)
        res.data.data.forEach(ele => {
          if (ele.NAME_ORDER === 4) {
            this.num20 = ele.KPI_VALUE;
          }
          if (ele.NAME_ORDER === 5) {
            this.num21 = ele.KPI_VALUE;
          }
          // 上行、下行
          if (ele.NAME_ORDER === 2) {
            this.options117.data = ele.KPI_VALUE;
          }
          if (ele.NAME_ORDER === 3) {
            this.options118.data = ele.KPI_VALUE;
          }
          // 弱光占比
          if (ele.NAME_ORDER === 1) {
            options.option91.series[0].data[0].value = ele.KPI_VALUE / 100;
            this.chart91.setOption(options.option91);
          }
          // 流量越线
          if (ele.NAME_ORDER === 6) {
            this.ddosItems[0].num = ele.KPI_VALUE;
            this.ddosItems[0].text = ele.KPI_NAME;
          }
          // 长途来话
          if (ele.NAME_ORDER === 7) {
            this.ddosItems[1].num = ele.KPI_VALUE;
            this.ddosItems[1].text = ele.KPI_NAME;
          }
          if (ele.NAME_ORDER === 8) {
            this.ddosItems[2].num = ele.KPI_VALUE;
            this.ddosItems[2].text = ele.KPI_NAME;
          }
        })
      })
    },
    // 区域粒度
    changeRegion(regionName) {
      this.currentArea = regionName;
      if (!regionName) return;
      if (regionName !== '全省') {
        // option111， 222， 333
        // console.log(regionName)
        this.$http.indi.get('jzb0007', { second_area_name: regionName }, res => {
          options.option111.series[0].data = [];
          options.option111.series[1].data = [];
          options.option111.series[2].data = [];
          options.option111.xAxis.data = [];
          for ( var index = 0; index < res.data.data.length; index++) {
            if (res.data.data[index].KPI_NAME === '2G用户数') {
              options.option111.series[0].data.push(res.data.data[index].KPI_VALUE);
            }
            if (res.data.data[index].KPI_NAME === '4G用户数') {
              options.option111.series[1].data.push(res.data.data[index].KPI_VALUE);
            }
            if (res.data.data[index].KPI_NAME === 'volte用户数') {
              options.option111.series[2].data.push(res.data.data[index].KPI_VALUE);
            }
          }
          for (var i = 0; i < res.data.data.length - 1; i += 3) {
            options.option111.xAxis.data.push(res.data.data[i].X_AXIS);
            // console.log(res.data.data[i].X_AXIS)
          }
          this.chart111.clear();
          this.chart111.setOption(options.option111);
        })
        this.$http.indi.get('jzb0009', { second_area_name: regionName }, res => {
          options.option222.series[0].data = [];
          options.option222.series[1].data = [];
          options.option222test.series[0].data = [];
          options.option222test.series[1].data = [];
          options.option222test.xAxis.data = [];
          for ( var j = 0; j < res.data.data.length; j++) {
            if (res.data.data[j].KPI_NAME === '2G流量') {
              options.option222.series[0].data.push(-res.data.data[j].KPI_VALUE);
              // console.log(res.data.data[j].KPI_VALUE)
            }
            if (res.data.data[j].KPI_NAME === '2G流量日常值') {
              options.option222.series[1].data.push(-res.data.data[j].KPI_VALUE);
            }
            if (res.data.data[j].KPI_NAME === '4G流量') {
              options.option222test.series[0].data.push(res.data.data[j].KPI_VALUE);
            }
            if (res.data.data[j].KPI_NAME === '4G流量日常值') {
              options.option222test.series[1].data.push(res.data.data[j].KPI_VALUE);
            }
            // options.option2.series[0].data.push(-res.data.data[j].KPI_VALUE);
            // options.option2.series[1].data.push(-res.data.data[j + 1].KPI_VALUE);
            // options.option2.series[2].data.push(res.data.data[j + 2].KPI_VALUE);
            // options.option2.series[3].data.push(res.data.data[j + 3].KPI_VALUE);
          }
          for (var i = 0; i < res.data.data.length - 1; i += 4) {
            options.option222test.xAxis.data.push(res.data.data[i].X_AXIS);
          }
          this.chart222.clear();
          this.testChart222.clear();
          this.chart222.setOption(options.option222);
          this.testChart222.setOption(options.option222test);
        })
        this.$http.indi.get('jzb0011', { second_area_name: regionName }, res => {
          options.option333.series[0].data = [];
          options.option333.series[1].data = [];
          options.option333test.series[0].data = [];
          options.option333test.series[1].data = [];
          options.option333test.xAxis.data = [];
          for ( var j = 0; j < res.data.data.length; j++) {
            if (res.data.data[j].KPI_NAME === '2G话务量') {
              options.option333.series[0].data.push(-res.data.data[j].KPI_VALUE);
              // console.log(res.data.data[j].KPI_VALUE)
            }
            if (res.data.data[j].KPI_NAME === '2G话务量日常值') {
              options.option333.series[1].data.push(-res.data.data[j].KPI_VALUE);
            }
            if (res.data.data[j].KPI_NAME === '4G话务量') {
              options.option333test.series[0].data.push(res.data.data[j].KPI_VALUE);
            }
            if (res.data.data[j].KPI_NAME === '4G话务量日常值') {
              options.option333test.series[1].data.push(res.data.data[j].KPI_VALUE);
            }
            // options.option2.series[0].data.push(-res.data.data[j].KPI_VALUE);
            // options.option2.series[1].data.push(-res.data.data[j + 1].KPI_VALUE);
            // options.option2.series[2].data.push(res.data.data[j + 2].KPI_VALUE);
            // options.option2.series[3].data.push(res.data.data[j + 3].KPI_VALUE);
          }
          for (var i = 0; i < res.data.data.length - 1; i += 4) {
            options.option333test.xAxis.data.push(res.data.data[i].X_AXIS);
          }
          this.chart333.clear();
          this.testChart333.clear();
          this.chart333.setOption(options.option333);
          this.testChart333.setOption(options.option333test);
        })
        // 2G用户数
        // 数据清零
        for (var e = 0; e < this.items111.length; e++) {
          this.items111[e].num = 0;
        }
        for (var f = 0; f < this.items222.length; f++) {
          this.items222[f].num = 0;
        }
        for (var g = 0; g < this.items333.length; g++) {
          this.items333[g].num = 0;
        }
        this.$http.indi.get('jzb0006', { second_area_name: regionName }, res => {
          res.data.data.forEach(ele => {
            if (ele.ORDER_NAME === 1) {
              this.items111[0].num = ele.KPI_VALUE;
            }
            if (ele.ORDER_NAME === 2) {
              this.items111[1].num = ele.KPI_VALUE;
            }
            if (ele.ORDER_NAME === 3) {
              this.items111[2].num = ele.KPI_VALUE;
            }
          })
        })
        this.$http.indi.get('jzb0008', { second_area_name: regionName }, res => {
          res.data.data.forEach(ele => {
            if (ele.ORDER_NAME === 1) {
              this.items222[0].num = ele.KPI_VALUE;
            }
            if (ele.ORDER_NAME === 2) {
              this.items222[1].num = ele.KPI_VALUE;
            }
          })
        })
        this.$http.indi.get('jzb0010', { second_area_name: regionName }, res => {
          res.data.data.forEach(ele => {
            if (ele.ORDER_NAME === 1) {
              this.items333[0].num = ele.KPI_VALUE;
            }
            if (ele.ORDER_NAME === 2) {
              this.items333[1].num = ele.KPI_VALUE;
            }
          })
        })
        // GSM ITE VOLTE
        this.$http.indi.get('jzb0018', { second_area_name: regionName }, res => {
          // this.options1q.data = null;
          // this.options1qq.data = null;
          // this.options1qqq.data = null;
          // this.options1w.data = null;
          // this.options1ww.data = null;
          res.data.data.forEach((ele) => {
            // console.log(ele)
            if (ele.NAME_ORDER === 1) {
              this.options1q.data = ele.KPI_VALUE;
            }
            if (ele.NAME_ORDER === 2) {
              this.options1qq.data = ele.KPI_VALUE;
            }
            if (ele.NAME_ORDER === 3) {
              this.options1qqq.data = ele.KPI_VALUE;
            }
            if (ele.NAME_ORDER === 4) {
              this.options1w.data = ele.KPI_VALUE;
            }
            if (ele.NAME_ORDER === 5) {
              this.options1ww.data = ele.KPI_VALUE;
            }
            if (ele.NAME_ORDER === 6) {
              this.options1www.data = ele.KPI_VALUE;
            }
            // switch (ele.NAME_ORDER) {
            //   case 1: this.options1qq.data = ele.KPI_VALUE; break;
            //   case 2: this.options1q.data = ele.KPI_VALUE; break;
            //   case 3: this.options1qqq.data = ele.KPI_VALUE; break;
            //   case 4: this.options1w.data = ele.KPI_VALUE; break;
            //   case 5: this.options1www.data = ele.KPI_VALUE; break;
            //   case 6: this.options1ww.data = ele.KPI_VALUE; break;
            // }
          })
        })
        // 上行利用率 options11、12
        this.$http.indi.get('jzb0019', { second_area_name: regionName }, res => {
          // console.log(res.data.data);
          // console.log(regionName)
          this.options11.data = null;
          this.options12.data = null;
          res.data.data.forEach((ele) => {
            if (ele.NAME_ORDER === 0) {
              this.options11.data = ele.KPI_VALUE;
              this.text3[0].text1 = ele.KPI_NAME;
            }
            if (ele.NAME_ORDER === 1) {
              this.options11.data = ele.KPI_VALUE;
              this.text3[0].text1 = ele.KPI_NAME;
            }
            if (ele.NAME_ORDER === 2) {
              this.options12.data = ele.KPI_VALUE;
              this.text3[1].text1 = ele.KPI_NAME;
            }
            if (ele.NAME_ORDER === 3) {
              this.lineProgress[0].num = ele.KPI_VALUE
              this.text3[2].text1 = ele.KPI_NAME
            }
            if (ele.NAME_ORDER === 4) {
              this.lineProgress[1].num = ele.KPI_VALUE
              this.text3[3].text1 = ele.KPI_NAME
            }
            if (ele.NAME_ORDER === 5) {
              this.lineProgress[2].num = ele.KPI_VALUE
              this.text3[4].text1 = ele.KPI_NAME
              // console.log(ele.KPI_VALUE)
            }
          });
        })
      } else {
        this.initData();
      }
    }
  },
  computed: {
    region() {
      return this.$store.state.regionName;
    }
  },
  watch: {
    region(v) {
      this.changeRegion(v)
    }
  },
  beforeDestroy() {
    if (this.chart1) {
      this.chart1.dispose();
    }
    if (this.chart2) {
      this.chart2.dispose();
    }
    if (this.chart3) {
      this.chart3.dispose();
    }
    if (this.chart11) {
      this.chart11.dispose();
    }
    if (this.chart22) {
      this.chart22.dispose();
    }
    if (this.chart33) {
      this.chart33.dispose();
    }
    if (this.chart111) {
      this.chart111.dispose();
    }
    if (this.chart222) {
      this.chart222.dispose();
    }
    if (this.chart333) {
      this.chart333.dispose();
    }
    if (this.chart81) {
      this.chart81.dispose();
    }
    if (this.chart91) {
      this.chart91.dispose();
    }
  }
}
</script>
