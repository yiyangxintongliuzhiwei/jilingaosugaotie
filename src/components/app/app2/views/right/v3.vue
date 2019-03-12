<template>
  <view-template>
    <div class="a2_v3">
      <!-- v3页面内容 -->
      <div class="v3_content">
        <!-- 超长退服 -->
        <div class="retire">
          <div class="title">超长/超频退服</div>
          <!-- 柱状图 -->
          <div class="bar">
            <div class="chart11" id="chart11"></div>
          </div>
          <!-- TOP5 -->
          <div class="top5">
            <!-- 表格数据：超长、超频 -->
            <!-- 超长 -->
            <div class="overLong">
              <div class="title">超长退服TOP5</div>
              <div class="lineFirst">
                <div class="address">地市</div>
                <div class="line">高铁线路</div>
                <div class="name">RRU名称</div>
                <div class="time">时长(小时)</div>
              </div>
              <div class="lineOther">
                <div class="lineItem" v-for="item in lineData" :key="item.index">
                  <div class="address">{{item.address}}</div>
                  <div class="line">{{item.line}}</div>
                  <div class="name">
                    <div class="name_">{{item.name}}</div>
                  </div>
                  <div class="time">
                    <div class="count">
                      <counter :data="item.time" :config="config1"></counter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 超频-->
            <div class="overClocking">
              <div class="title">超频退服TOP5</div>
              <div class="lineFirst">
                <div class="address">地市</div>
                <div class="line">高铁线路</div>
                <div class="name">RRU名称</div>
                <div class="time">频次</div>
              </div>
              <div class="lineOther">
                <div class="lineItem" v-for="item in lineDatas" :key="item.index">
                  <div class="address">{{item.address}}</div>
                  <div class="line">{{item.line}}</div>
                  <div class="name">
                    <div class="name_">{{item.name}}</div>
                  </div>
                  <div class="time">
                    <div class="count">
                      <counter :data="item.time" :config="config1"></counter>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 行为分析 -->
        <div class="action">
          <div class="title">
            行为分析
            <span>-[京港-武广]</span>
          </div>
          <div class="content">
            <div class="top">
              <!-- 流量总数 -->
              <div class="fluxTotal">{{textFluxTotal}}</div>
              <div class="fluxTotalCount">
                <counter :data="numFluxTotal" :config="configFluxTotal"></counter>
              </div>
              <!-- 饼图 -->
              <div class="chartBox">
                <div class="chart12">
                   <canvas id="chart12" width="270px" height="230px"></canvas>
                </div>
              </div>
              <!-- 流量 -->
              <div class="flux">
                <div class="title">流量</div>
                <div class="flexItem" v-for="item in flexData" :key="item.index">
                  <div class="index">{{item.index}}</div>
                  <div class="text">{{item.text}}</div>
                  <div class="num">
                    <div class="count">
                      <counter :data="item.num" :config="config2"></counter>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 用户 -->
              <div class="user">
                <div class="title">用户分布</div>
                <!-- 女性 -->
                <div class="female">
                  <div class="text">女性</div>
                  <div class="progressBox">
                    <div class="progress" :style="femaleStyle"></div>
                  </div>
                  <div class="num">
                    <div class="count">
                      <counter :data="numFemale" :config="config3"></counter>
                    </div>
                  </div>
                </div>
                <!-- 男性 -->
                <div class="male">
                  <div class="text">男性</div>
                  <div class="progressBox">
                    <div class="progress" :style="maleStyle"></div>
                  </div>
                  <div class="num">
                    <div class="count">
                      <counter :data="numMale" :config="config3"></counter>
                    </div>
                  </div>
                </div>
                <!-- 进度饼图、canvas绘制 -->
                <div class="progressBox">
                  <div>
                    <circleProgress v-bind="options1" id="cricleProgress1"></circleProgress>
                  </div>
                  <div class="count12">
                    <counter :data="options1.data" :config="config12"></counter>
                    <span>%</span>
                  </div>
                  <!-- <span>%</span> -->
                </div>
                <div class="progressBox2">
                  <div>
                     <circleProgress v-bind="options2" id="cricleProgress2"></circleProgress>
                  </div>
                  <div class="count13">
                    <counter :data="options2.data" :config="config12"></counter>
                    <span>%</span>
                  </div>
                </div>
                <div class="progressBox3">
                  <div>
                    <circleProgress v-bind="options3" id="cricleProgress3"></circleProgress>
                  </div>
                  <div class="count14">
                    <counter :data="options3.data" :config="config12"></counter>
                    <span>%</span>
                  </div>
                </div>
                 <div class="progressBox4">
                  <div>
                    <circleProgress v-bind="options4" id="cricleProgress4"></circleProgress>
                  </div>
                  <div class="count15">
                    <counter :data="options4.data" :config="config12"></counter>
                    <span>%</span>
                  </div>
                </div>
                <div class="progressBox5">
                  <div>
                    <circleProgress v-bind="options5" id="cricleProgress5"></circleProgress>
                  </div>
                  <div class="count16">
                    <counter :data="options5.data" :config="config12"></counter>
                    <span>%</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom">
              <!-- 饼图-5个环，canvas绘制 -->
              <!-- 用户总数 -->
              <div class="userTotal">{{textFluxTotal}}</div>
              <div class="userTotalCount">
                <counter :data="numUserTotal" :config="configUserTotal"></counter>
              </div>
              <div class="chart10">
                <canvas id="chart10" width="248px" height="300px"></canvas>
              </div>
              <!-- 用户数 -->
              <div class="flux">
                <div class="title">用户数</div>
                <div class="flexItem" v-for="item in flexData2" :key="item.index">
                  <div class="index">{{item.index}}</div>
                  <div class="text">{{item.text}}</div>
                  <div class="num">
                    <div class="count">
                      <counter :data="item.num" :config="config22"></counter>
                    </div>
                  </div>
                </div>
              </div>
              <!-- APP 使用次数 -->
              <div class="app">
                <div class="title">APP使用次数</div>
                <!-- 进度条 柱状图 -->
                <div class="chargeProgress">
                  <div class="chart60" id="chart60"></div>
                </div>
                <!-- <div class="chargeProgress">
                  <div class="box">
                    <div class="chargeItem" v-for="item in chargeData" :key="item.index">
                      <div class="name">{{item.name}}</div>
                      <div class="progressBox">
                        <div class="progress" :style="item.style"></div>
                      </div>
                    </div>
                  </div>
                </div> -->
                <!-- 饼图 -->
                <div class="pie">
                  <!-- <div class="pieBackground"></div> -->
                  <!-- <div class="percent">
                    <div class="count1">
                      <counter :data="num1" :config="config1_"></counter>
                    </div>
                        <div class="count2">
                      <counter :data="num2" :config="config1_"></counter>
                    </div>
                        <div class="count3">
                      <counter :data="num3" :config="config1_"></counter>
                    </div>
                        <div class="count4">
                      <counter :data="num4" :config="config1_"></counter>
                    </div>
                        <div class="count5">
                      <counter :data="num5" :config="config1_"></counter>
                    </div>
                        <div class="count6">
                      <counter :data="num6" :config="config1_"></counter>
                    </div>
                  </div>
                  <div class="num">
                    <div class="num1_">
                      <counter :data="num1_" :config="config2_"></counter>
                    </div>
                    <div class="num2_">
                      <counter :data="num2_" :config="config2_"></counter>
                    </div>
                    <div class="num3_">
                      <counter :data="num3_" :config="config2_"></counter>
                    </div>
                    <div class="num4_">
                      <counter :data="num4_" :config="config2_"></counter>
                    </div>
                    <div class="num5_">
                      <counter :data="num5_" :config="config2_"></counter>
                    </div>
                    <div class="num6_">
                      <counter :data="num6_" :config="config2_"></counter>
                    </div>
                  </div> -->
                  <div class="text">终端比例</div>
                  <div class="chartPie" id="chart9"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </view-template>
</template>
<script>
import './v3.scss';
import echarts from 'echarts';
// import 'echarts-liquidfill/src/liquidFill.js';
import options from './options.js';
export default {
  data() {
    return {
      // 进度饼图 百分数：num，数字：num_
      num: 80,
      num1: 22,
      num2: 22,
      num3: 22,
      num4: 22,
      num5: 22,
      num6: 22,
      time: 2222,
      num1_: 123,
      num2_: 123,
      num3_: 123,
      num4_: 123,
      num5_: 123,
      num6_: 123,
      textFluxTotal: '总数',
      numFluxTotal: 22,
      textUserTotal: '总数',
      numUserTotal: 22,
      // 饼图-5个环
      pre1: 50,
      pre2: 60,
      pre3: 70,
      pre4: 80,
      pre5: 90,
      // 饼图-5环2
      pre1_: 50,
      pre2_: 60,
      pre3_: 70,
      pre4_: 80,
      pre5_: 90,
      // 女性、男性
      numFemale: 22.22,
      numMale: 22.22,
      // femaleStyle: {width: '50%'},
      // maleStyle: {width: '50%'},
      femaleStyle: {width: 'numFemaleS'},
      maleStyle: {width: 'numMaleS'},
      // cricleProgess
      options1: {
        id: 'cricleProgress1',
        /* 基础配置 */
        canvasHeight: 180,                     // 设置canvas 大小，不可在css中配置
        canvasWidth: 142,
        coordinates: [72, 93],                // 圆心坐标
        radius: 54,                            // 圆环半径
        startAngle: -Math.PI * 0.5,              // 3点钟反向为0弧度；或者 2PI 弧度；结束角度必须大于起始角度！
        endAngle: Math.PI * 3 / 2,               // end 结束角度 必须大于start起始角度
        data: 50,                              // 数据配置
        speed: 100,                            // 此为requestAnimateFrame接口,速度为浏览器刷新频率20ms绘制的整体进度条除以speed的粒度；可调试选择合适速度
        anticlockwise: false,                  // false 为顺时针；
        /* 样式配置 */
        gradientDirection: 'to bottom left',  // 支持css语法规范 默认to left
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'       // 支持css颜色名，梯度颜色配置 0~1； 只设置0 表示只使用一个颜色；放射性渐变暂不支持；
        },
        lineStyle: {
          lineWidth: 23,                     // 线条宽度
          lineCap: 'butt',                   // butt:默认,向线条的每个末端添加平直的边缘; round :向线条的每个末端添加圆形线帽; square :向线条的每个末端添加正方形线帽。
          lineDash: [10, 10]                 // 第一项表示线条分段长度，第二项表示分段间隔
        },
        circleBackground: '',                  // 环形进度条的背景配置；其他样式默认和动画进度条相同；
        enableCircleBackground: true           // 默认开启环形背景
      },
      options2: {
        id: 'cricleProgress2',
        /* 基础配置 */
        canvasHeight: 180,                     // 设置canvas 大小，不可在css中配置
        canvasWidth: 142,
        coordinates: [72, 93],                // 圆心坐标
        radius: 38,                            // 圆环半径
        startAngle: -Math.PI * 0.5,              // 3点钟反向为0弧度；或者 2PI 弧度；结束角度必须大于起始角度！
        endAngle: Math.PI * 3 / 2,               // end 结束角度 必须大于start起始角度
        data: 50,                              // 数据配置
        speed: 100,                            // 此为requestAnimateFrame接口,速度为浏览器刷新频率20ms绘制的整体进度条除以speed的粒度；可调试选择合适速度
        anticlockwise: false,                  // false 为顺时针；
        /* 样式配置 */
        gradientDirection: 'to bottom left',  // 支持css语法规范 默认to left
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'       // 支持css颜色名，梯度颜色配置 0~1； 只设置0 表示只使用一个颜色；放射性渐变暂不支持；
        },
        lineStyle: {
          lineWidth: 20,                     // 线条宽度
          lineCap: 'butt',                   // butt:默认,向线条的每个末端添加平直的边缘; round :向线条的每个末端添加圆形线帽; square :向线条的每个末端添加正方形线帽。
          lineDash: [3, 4]                 // 第一项表示线条分段长度，第二项表示分段间隔
        },
        circleBackground: '',                  // 环形进度条的背景配置；其他样式默认和动画进度条相同；
        enableCircleBackground: true           // 默认开启环形背景
      },
      options3: {
        id: 'cricleProgress3',
        /* 基础配置 */
        canvasHeight: 180,                     // 设置canvas 大小，不可在css中配置
        canvasWidth: 142,
        coordinates: [72, 93],                // 圆心坐标
        radius: 44,                            // 圆环半径
        startAngle: -Math.PI * 0.5,              // 3点钟反向为0弧度；或者 2PI 弧度；结束角度必须大于起始角度！
        endAngle: Math.PI * 3 / 2,               // end 结束角度 必须大于start起始角度
        data: 50,                              // 数据配置
        speed: 100,                            // 此为requestAnimateFrame接口,速度为浏览器刷新频率20ms绘制的整体进度条除以speed的粒度；可调试选择合适速度
        anticlockwise: false,                  // false 为顺时针；
        /* 样式配置 */
        gradientDirection: 'to bottom left',  // 支持css语法规范 默认to left
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'       // 支持css颜色名，梯度颜色配置 0~1； 只设置0 表示只使用一个颜色；放射性渐变暂不支持；
        },
        lineStyle: {
          lineWidth: 16,                     // 线条宽度
          lineCap: 'butt',                   // butt:默认,向线条的每个末端添加平直的边缘; round :向线条的每个末端添加圆形线帽; square :向线条的每个末端添加正方形线帽。
          lineDash: [10, 0]                 // 第一项表示线条分段长度，第二项表示分段间隔
        },
        circleBackground: '',                  // 环形进度条的背景配置；其他样式默认和动画进度条相同；
        enableCircleBackground: true           // 默认开启环形背景
      },
      options4: {
        id: 'cricleProgress4',
        /* 基础配置 */
        canvasHeight: 180,                     // 设置canvas 大小，不可在css中配置
        canvasWidth: 142,
        coordinates: [72, 93],                // 圆心坐标
        radius: 36,                            // 圆环半径
        startAngle: -Math.PI * 0.5,              // 3点钟反向为0弧度；或者 2PI 弧度；结束角度必须大于起始角度！
        endAngle: Math.PI * 3 / 2,               // end 结束角度 必须大于start起始角度
        data: 50,                              // 数据配置
        speed: 100,                            // 此为requestAnimateFrame接口,速度为浏览器刷新频率20ms绘制的整体进度条除以speed的粒度；可调试选择合适速度
        anticlockwise: false,                  // false 为顺时针；
        /* 样式配置 */
        gradientDirection: 'to bottom left',  // 支持css语法规范 默认to left
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'       // 支持css颜色名，梯度颜色配置 0~1； 只设置0 表示只使用一个颜色；放射性渐变暂不支持；
        },
        lineStyle: {
          lineWidth: 16,                     // 线条宽度
          lineCap: 'butt',                   // butt:默认,向线条的每个末端添加平直的边缘; round :向线条的每个末端添加圆形线帽; square :向线条的每个末端添加正方形线帽。
          lineDash: [10, 0]                 // 第一项表示线条分段长度，第二项表示分段间隔
        },
        circleBackground: '',                  // 环形进度条的背景配置；其他样式默认和动画进度条相同；
        enableCircleBackground: true           // 默认开启环形背景
      },
      options5: {
        id: 'cricleProgress5',
        /* 基础配置 */
        canvasHeight: 180,                     // 设置canvas 大小，不可在css中配置
        canvasWidth: 142,
        coordinates: [72, 93],                // 圆心坐标
        radius: 54,                            // 圆环半径
        startAngle: -Math.PI * 0.5,              // 3点钟反向为0弧度；或者 2PI 弧度；结束角度必须大于起始角度！
        endAngle: Math.PI * 3 / 2,               // end 结束角度 必须大于start起始角度
        data: 100,                              // 数据配置
        speed: 100,                            // 此为requestAnimateFrame接口,速度为浏览器刷新频率20ms绘制的整体进度条除以speed的粒度；可调试选择合适速度
        anticlockwise: false,                  // false 为顺时针；
        /* 样式配置 */
        gradientDirection: 'to bottom left',  // 支持css语法规范 默认to left
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'       // 支持css颜色名，梯度颜色配置 0~1； 只设置0 表示只使用一个颜色；放射性渐变暂不支持；
        },
        lineStyle: {
          lineWidth: 23,                     // 线条宽度
          lineCap: 'butt',                   // butt:默认,向线条的每个末端添加平直的边缘; round :向线条的每个末端添加圆形线帽; square :向线条的每个末端添加正方形线帽。
          lineDash: [10, 10]                 // 第一项表示线条分段长度，第二项表示分段间隔
        },
        circleBackground: '',                  // 环形进度条的背景配置；其他样式默认和动画进度条相同；
        enableCircleBackground: true           // 默认开启环形背景
      },
      // 超长退服
      lineData: [
        {address: '吉林市', line: '高铁线路', name: 'JLJL_长吉高铁孤甸子_HGR_G1_1_RRU2_孤甸子以西1.5公里-65030', time: 22},
        {address: '长春市', line: '高铁线路', name: 'JLJL_长吉高铁孤甸子_HGR_G1_1_RRU2_孤甸子以西1.5公里-65030', time: 22},
        {address: '地市', line: '高铁线路', name: 'JLJL_长吉高铁三道岭_HGR_G1_1_RRU2_三道岭-7824', time: 22},
        {address: '地市', line: '高铁线路', name: 'JLJL_长吉高铁三道岭_HGR_G1_1_RRU2_三道岭-7824', time: 22},
        {address: '地市', line: '高铁线路', name: 'JLJL_长吉高铁三道岭_HGR_G1_1_RRU2_三道岭-7824', time: 22}
      ],
      // 超频退服
      lineDatas: [
        {address: '地市', line: '高铁线路', name: 'JLJL_长吉高铁孤甸子_HGR_G1_1_RRU2_孤甸子以西1.5公里-65030', time: 22},
        {address: '地市', line: '高铁线路', name: 'JLJL_长吉高铁孤甸子_HGR_G1_1_RRU2_孤甸子以西1.5公里-65030', time: 22},
        {address: '地市', line: '高铁线路', name: 'JLJL_长吉高铁三道岭_HGR_G1_1_RRU2_三道岭-7824', time: 22},
        {address: '地市', line: '高铁线路', name: 'JLJL_长吉高铁三道岭_HGR_G1_1_RRU2_三道岭-7824', time: 22},
        {address: '地市', line: '高铁线路', name: 'JLJL_长吉高铁三道岭_HGR_G1_1_RRU2_三道岭-7824', time: 22}
      ],
      // 流量
      flexData: [
        {index: 1, text: '网易云音乐', num: 750.0},
        {index: 2, text: '网易云音乐', num: 750.0},
        {index: 3, text: '网易云音乐', num: 750.0},
        {index: 4, text: '网易云音乐', num: 750.0},
        {index: 5, text: '网易云音乐', num: 750.0}

      ],
      // 用户数
      flexData2: [
        {index: 1, text: '优酷视频', num: 750.0},
        {index: 2, text: '熊猫直播', num: 750.0},
        {index: 3, text: '爱奇艺视频', num: 750.0},
        {index: 4, text: '喜马拉雅', num: 750.0},
        {index: 5, text: '淘宝', num: 750.0}

      ],
      // app使用次数
      chargeData: [
        {name: '优酷视频', style: 'width: 80%'},
        {name: '淘宝', style: 'width: 50%'},
        {name: '网易云音乐', style: 'width: 70%'},
        {name: '微信', style: 'width: 20%'},
        {name: 'QQ', style: 'width: 40%'},
        {name: '虎牙直播', style: 'width: 90%'}
      ],
      configFluxTotal: {
        justifyContent: 'flex-start',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#f3fe4d',
            fontSize: 20,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 2 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: 'GB',
          marginLeft: 2,
          textStyle: {
            color: '#f3fe4d',
            fontSize: 20,
            fontWeight: 'normal',
            fontFamily: 'MF_LangQian'
          }
        }
      },
      configUserTotal: {
        justifyContent: 'flex-start',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#f3fe4d',
            fontSize: 20,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 2 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '个',
          marginLeft: 2,
          textStyle: {
            color: '#f3fe4d',
            fontSize: 20,
            fontWeight: 'normal',
            fontFamily: 'MF_LangQian'
          }
        }
      },
      config1: {
        justifyContent: 'center ',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#e5f0ff',
            fontSize: 11,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 2 // 数字之间间距
        }
      },
      config2: {
        justifyContent: 'flex-start',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#00ffff',
            fontSize: 14,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 2 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: 'GB',
          marginLeft: 2,
          textStyle: {
            color: '#e5f1ff',
            fontSize: 14,
            fontWeight: 'normal',
            fontFamily: 'MF_LangQian'
          }
        }
      },
      // 用户数
      config22: {
        justifyContent: 'flex-start ',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#00ffff',
            fontSize: 14,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 2 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '个',
          marginLeft: 2,
          textStyle: {
            color: '#e5f1ff',
            fontSize: 14,
            fontWeight: 'normal',
            fontFamily: 'MF_LangQian'
          }
        }
      },
      // 女性
      config3: {
        justifyContent: 'flex-start',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#f3fe4d',
            fontSize: 16,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 2 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '%',
          marginLeft: 2,
          textStyle: {
            color: '#f3fe4d',
            fontSize: 16,
            fontWeight: 'normal',
            fontFamily: 'MF_LangQian'
          }
        }
      },
      // 饼图num
      config1_: {
        justifyContent: 'flex-start ',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#ffffff',
            fontSize: 14,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 1 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '%',
          marginLeft: 2,
          textStyle: {
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 'normal',
            fontFamily: 'MF_LangQian'
          }
        }
      },
      config2_: {
        justifyContent: 'flex-start',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#feff42',
            fontSize: 14,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 1 // 数字之间间距
        }
      },
      // 5环
      config12: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#f4fe4c',
            fontSize: 16,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 0 // 数字之间间距
        }
      }
    }
  },
  mounted() {
    this.init();
    // 饼图-5个环
    this.initChart(this.pre1, this.pre2, this.pre3, this.pre4, this.pre5);
    this.initChart_(this.pre1_, this.pre2_, this.pre3_, this.pre4_, this.pre5_);
    // this.loadData();
    // this.loadDatas();
    this.loadAllData();
  },
  methods: {
    loadDatas() {
      this.loadData(this.region)
    },
    // 柱状图
    init() {
      // 柱状图chart11
      this.chart11 = echarts.init(document.getElementById('chart11'));
      this.chart11.setOption(options.option1);
      // app使用次数-饼图 chart3
      this.chart9 = echarts.init(document.getElementById('chart9'));
      // app使用次数-饼图 chart3
      this.chart9.setOption(options.option9);
      // 倒立柱状图
      this.chart60 = echarts.init(document.getElementById('chart60'));
      this.chart60.setOption(options.option60);
    },
    // 饼图-5环
    initChart(arg1, arg2, arg3, arg4, arg5) {
      var canvas3 = document.getElementById('chart12');
      if (canvas3.getContext('2d')) {
        var ctx = canvas3.getContext('2d');
        // 样式
        ctx.lineCap = 'round';
        ctx.lineWidth = 11;
        // 第一个环
        ctx.beginPath();
        ctx.strokeStyle = '#ff7752';
        ctx.arc(134, 120, 42, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg1 / 100), true);
        ctx.stroke();
        // 第二个环
        ctx.beginPath();
        ctx.strokeStyle = '#e71c98';
        ctx.arc(134, 120, 54, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg2 / 100), true);
        ctx.stroke();
        // 第三个环
        ctx.beginPath();
        ctx.strokeStyle = '#0030ff';
        ctx.arc(134, 120, 68, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg3 / 100), true);
        ctx.stroke();
        // 第四个环
        ctx.beginPath();
        ctx.strokeStyle = '#0090ff';
        ctx.arc(134, 120, 80, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg4 / 100), true);
        ctx.stroke();
        // 第五个环
        ctx.beginPath();
        ctx.strokeStyle = '#3ae9ca';
        ctx.arc(134, 120, 92, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg5 / 100), true);
        ctx.stroke();
      }
    },
    // i饼图-5环2
    initChart_(arg1, arg2, arg3, arg4, arg5) {
      var canvas = document.getElementById('chart10');
      if (canvas.getContext('2d')) {
        var ctx = canvas.getContext('2d');
        // 样式
        ctx.lineCap = 'round';
        ctx.lineWidth = 11;
        // 第一个环
        ctx.beginPath();
        ctx.strokeStyle = '#eb601b';
        ctx.arc(114, 150, 43, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg1 / 100), true);
        ctx.stroke();
        // 第二个环
        ctx.beginPath();
        ctx.strokeStyle = '#ffff00';
        ctx.arc(114, 150, 56, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg2 / 100), true);
        ctx.stroke();
        // 第三个环
        ctx.beginPath();
        ctx.strokeStyle = '#df9f3b';
        ctx.arc(114, 150, 68, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg3 / 100), true);
        ctx.stroke();
        // 第四个环
        ctx.beginPath();
        ctx.strokeStyle = '#00ff00';
        ctx.arc(114, 150, 80, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg4 / 100), true);
        ctx.stroke();
        // 第五个环
        ctx.beginPath();
        ctx.strokeStyle = '#00ffff';
        ctx.arc(114, 150, 92, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg5 / 100), true);
        ctx.stroke();
      }
    },
    loadData() {
      // 柱状图
      this.$http.indi.get('jgt0067', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // 清空数据
          options.option1.series[0].data = [];
          options.option1.series[1].data = [];
          options.option1.xAxis.data = [];
          // 遍历数据
          res.data.data.forEach((ele, index) => {
            // 当前GSM话物量
            options.option1.series[0].data.push({
              value: ele.KPI_VALUE1
            });
            // x轴
            options.option1.xAxis.data.push({
              value: ele.REGION_NAME
            })
            options.option1.series[1].data.push({
              value: ele.KPI_VALUE2
            })
          })
          // console.log(options.option1.series[0].data);
          this.chart11.setOption(options.option1);
        }
      });
      // 超长退服
      this.$http.indi.get('jgt0075', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          res.data.data.forEach((ele, index) => {
            // 地市
            this.lineData[index].address = res.data.data[index].REGION_NAME
            // 高铁线路
            this.lineData[index].line = res.data.data[index].DIMENSION_TYPE
            // RRU名称
            this.lineData[index].name = res.data.data[index].KPI_NAME
            // 时长
            this.lineData[index].time = res.data.data[index].KPI_VALUE
          })
        }
      });
      // 超频退服
      this.$http.indi.get('jgt0076', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          res.data.data.forEach((ele, index) => {
            // 地市
            this.lineDatas[index].address = res.data.data[index].REGION_NAME
            // 高铁线路
            this.lineDatas[index].line = res.data.data[index].DIMENSION_TYPE
            // RRU名称
            this.lineDatas[index].name = res.data.data[index].KPI_NAME
            // 时长
            this.lineDatas[index].time = res.data.data[index].KPI_VALUE
          })
        }
      });
      // 流量总数
      this.$http.indi.get('jgt0077', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numFluxTotal = res.data.data[0].KPI_VALUE
          this.configFluxTotal.suffix.content = res.data.data[0].UNIT
        }
      });
      // 5环 行为分析
      this.$http.indi.get('jgt0078', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // 5环
          this.pre1 = res.data.data[0].KPI_VALUE / 100
          this.pre2 = res.data.data[1].KPI_VALUE / 100
          this.pre3 = res.data.data[2].KPI_VALUE / 100
          this.pre4 = res.data.data[3].KPI_VALUE / 100
          this.pre5 = res.data.data[4].KPI_VALUE / 100
          this.initChart(this.pre1, this.pre2, this.pre3, this.pre4, this.pre5)
          // 流量
          res.data.data.forEach((ele, index) => {
            this.flexData[index].text = res.data.data[index].KPI_NAME
            this.flexData[index].num = res.data.data[index].KPI_VALUE
          })
        }
      });
      // 用户分布 女性
      this.$http.indi.get('jgt0079', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numFemale = res.data.data[0].KPI_VALUE
          this.numFemaleS = this.numFemale / 100 + '%'
        }
      });
      // 用户分布 男性
      this.$http.indi.get('jgt0080', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numMale = res.data.data[0].KPI_VALUE
          this.numMaleS = this.numMale / 100 + '%'
          // console.log(this.numMaleS)
        }
      });
      // 5个进度条
      this.$http.indi.get('jgt0081', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options1.data = res.data.data[0].KPI_VALUE;
        }
      });
      this.$http.indi.get('jgt0082', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options2.data = res.data.data[0].KPI_VALUE;
        }
      });
      this.$http.indi.get('jgt0083', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options3.data = res.data.data[0].KPI_VALUE;
        }
      });
      this.$http.indi.get('jgt0084', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options4.data = res.data.data[0].KPI_VALUE;
        }
      });
      this.$http.indi.get('jgt0085', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options5.data = res.data.data[0].KPI_VALUE;
        }
      });
      // 用户总数
      this.$http.indi.get('jgt0086', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numUserTotal = res.data.data[0].KPI_VALUE
          this.configUserTotal.suffix.content = res.data.data[0].UNIT
        }
      });
      // 5环 用户数
      this.$http.indi.get('jgt0087', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // 5环
          this.pre1_ = res.data.data[0].KPI_VALUE / 100
          this.pre2_ = res.data.data[1].KPI_VALUE / 100
          this.pre3_ = res.data.data[2].KPI_VALUE / 100
          this.pre4_ = res.data.data[3].KPI_VALUE / 100
          this.pre5_ = res.data.data[4].KPI_VALUE / 100
          this.initChart_(this.pre1_, this.pre2_, this.pre3_, this.pre4_, this.pre5_)
          // 流量
          res.data.data.forEach((ele, index) => {
            this.flexData2[index].text = res.data.data[index].KPI_NAME
            this.flexData2[index].num = res.data.data[index].KPI_VALUE
          })
        }
      });
      // APP使用次数 柱状图
      this.$http.indi.get('jgt0088', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // 清空数据
          options.option60.series[0].data = [];
          options.option60.yAxis.data = [];
          // 遍历数据
          for (var p = res.data.data.length - 1; p > 0; p--) {
            options.option60.series[0].data.push({
              value: res.data.data[p].KPI_VALUE
            });
            options.option60.yAxis.data.push({
              value: res.data.data[p].KPI_NAME
            });
          }
          this.chart60.setOption(options.option60);
        }
      });
      // 饼图
      this.$http.indi.get('jgt0089', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // 清空数据
          for (var p = 0; p < options.option9.series[0].length; p++) {
            options.option9.series[0].data[p].value = null;
            options.option9.series[0].data[p].name = null;
            options.option9.legend.data = null;
          }
          res.data.data.forEach((ele, index) => {
            options.option9.series[0].data[index].value = ele.KPI_VALUE
            options.option9.series[0].data[index].name = ele.KPI_NAME
            options.option9.legend.data.push(ele.KPI_NAME)
          })
        }
        this.chart9.setOption(options.option9);
      });
    },
    loadAllData() {
      // 柱状图
      this.$http.indi.get('jgt0067', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // 清空数据
          options.option1.series[0].data = [];
          options.option1.series[1].data = [];
          options.option1.xAxis.data = [];
          // 遍历数据
          res.data.data.forEach((ele, index) => {
            // 当前GSM话物量
            options.option1.series[0].data.push({
              value: ele.KPI_VALUE1
            });
            // x轴
            options.option1.xAxis.data.push({
              value: ele.REGION_NAME
            })
            options.option1.series[1].data.push({
              value: ele.KPI_VALUE2
            })
          })
          // console.log(options.option1.series[0].data);
          this.chart11.setOption(options.option1);
        }
      });
      // 超长退服
      this.$http.indi.get('jgt0075', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          res.data.data.forEach((ele, index) => {
            // 地市
            this.lineData[index].address = res.data.data[index].REGION_NAME
            // 高铁线路
            this.lineData[index].line = res.data.data[index].DIMENSION_TYPE
            // RRU名称
            this.lineData[index].name = res.data.data[index].KPI_NAME
            // 时长
            this.lineData[index].time = res.data.data[index].KPI_VALUE
          })
        }
      });
      // 超频退服
      this.$http.indi.get('jgt0076', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          res.data.data.forEach((ele, index) => {
            // 地市
            this.lineDatas[index].address = res.data.data[index].REGION_NAME
            // 高铁线路
            this.lineDatas[index].line = res.data.data[index].DIMENSION_TYPE
            // RRU名称
            this.lineDatas[index].name = res.data.data[index].KPI_NAME
            // 时长
            this.lineDatas[index].time = res.data.data[index].KPI_VALUE
          })
        }
      });
      // 流量总数
      this.$http.indi.get('jgt0077', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numFluxTotal = res.data.data[0].KPI_VALUE
          this.configFluxTotal.suffix.content = res.data.data[0].UNIT
        }
      });
      // 5环 行为分析
      this.$http.indi.get('jgt0078', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // 5环
          this.pre1 = res.data.data[0].KPI_VALUE / 100
          this.pre2 = res.data.data[1].KPI_VALUE / 100
          this.pre3 = res.data.data[2].KPI_VALUE / 100
          this.pre4 = res.data.data[3].KPI_VALUE / 100
          this.pre5 = res.data.data[4].KPI_VALUE / 100
          this.initChart(this.pre1, this.pre2, this.pre3, this.pre4, this.pre5)
          // 流量
          res.data.data.forEach((ele, index) => {
            this.flexData[index].text = res.data.data[index].KPI_NAME
            this.flexData[index].num = res.data.data[index].KPI_VALUE
          })
        }
      });
      // 用户分布 女性
      this.$http.indi.get('jgt0079', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numFemale = res.data.data[0].KPI_VALUE
          this.numFemaleS = this.numFemale / 100 + '%'
        }
      });
      // 用户分布 男性
      this.$http.indi.get('jgt0080', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numMale = res.data.data[0].KPI_VALUE
          this.numMaleS = this.numMale / 100 + '%'
          // console.log(this.numMaleS)
        }
      });
      // 5个进度条
      this.$http.indi.get('jgt0081', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options1.data = res.data.data[0].KPI_VALUE;
        }
      });
      this.$http.indi.get('jgt0082', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options2.data = res.data.data[0].KPI_VALUE;
        }
      });
      this.$http.indi.get('jgt0083', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options3.data = res.data.data[0].KPI_VALUE;
        }
      });
      this.$http.indi.get('jgt0084', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options4.data = res.data.data[0].KPI_VALUE;
        }
      });
      this.$http.indi.get('jgt0085', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options5.data = res.data.data[0].KPI_VALUE;
        }
      });
      // 用户总数
      this.$http.indi.get('jgt0086', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numUserTotal = res.data.data[0].KPI_VALUE
          this.configUserTotal.suffix.content = res.data.data[0].UNIT
        }
      });
      // 5环 用户数
      this.$http.indi.get('jgt0087', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // 5环
          this.pre1_ = res.data.data[0].KPI_VALUE / 100
          this.pre2_ = res.data.data[1].KPI_VALUE / 100
          this.pre3_ = res.data.data[2].KPI_VALUE / 100
          this.pre4_ = res.data.data[3].KPI_VALUE / 100
          this.pre5_ = res.data.data[4].KPI_VALUE / 100
          this.initChart_(this.pre1_, this.pre2_, this.pre3_, this.pre4_, this.pre5_)
          // 流量
          res.data.data.forEach((ele, index) => {
            this.flexData2[index].text = res.data.data[index].KPI_NAME
            this.flexData2[index].num = res.data.data[index].KPI_VALUE
          })
        }
      });
      // APP使用次数 柱状图
      this.$http.indi.get('jgt0088', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // 清空数据
          options.option60.series[0].data = [];
          options.option60.yAxis.data = [];
          // 遍历数据
          for (var p = res.data.data.length - 1; p > 0; p--) {
            options.option60.series[0].data.push({
              value: res.data.data[p].KPI_VALUE
            });
            options.option60.yAxis.data.push({
              value: res.data.data[p].KPI_NAME
            });
          }
          this.chart60.setOption(options.option60);
        }
      });
      // 饼图
      this.$http.indi.get('jgt0089', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // 清空数据
          for (var p = 0; p < options.option9.series[0].length; p++) {
            options.option9.series[0].data[p].value = null;
            options.option9.series[0].data[p].name = null;
            options.option9.legend.data = null;
          }
          res.data.data.forEach((ele, index) => {
            options.option9.series[0].data[index].value = ele.KPI_VALUE
            options.option9.series[0].data[index].name = ele.KPI_NAME
            options.option9.legend.data.push(ele.KPI_NAME)
          })
        }
        this.chart9.setOption(options.option9);
      });
    }
  },
  computed: {
    // belongname() {
    //   return this.$store.state.belongname;
    // }
    region() {
      return this.$store.state.regionName;
    }
  },
  watch: {
    // belongname() {
    //   this.loadData();
    // }
    // region(v) {
    //   this.loadData(v);
    // }
  },
  beforeDestroy() {
    if (this.chart1) {
      this.chart1.dispose();
    }
    if (this.chart9) {
      this.chart9.dispose();
    }
    if (this.chart60) {
      this.chart60.dispose();
    }
  }
}
</script>
