<template>
  <view-template :interval="5" @interval="loadDatas">
    <div class="a2_v1">
      <!-- 整个页面标题 -->
      <div class="a2_title">吉林移动高铁场景</div>
      <!-- v1页面内容 -->
      <div class="v1_content">
        <!-- 轮播 -->
        <swiper :options="swiperOption" class="a2-swiper">
          <!-- 轮播页面2 -->
          <swiper-slide>
            <!-- 左侧：业务量 -->
            <div class="quantity">
              <div class="title">业务量</div>
              <!-- tel -->
              <div class="tel">
                <div class="title">话务量</div>
                <div class="content">
                  <!-- 柱状图1 -->
                  <div class="chart21" id="chart21"></div>
                </div>
              </div>
              <!-- flux_流量 -->
              <div class="flux_">
                <div class="title">流量</div>
                <!-- 柱状图2 -->
                <div class="chart22" id="chart22"></div>
              </div>
              <!-- 轮播分椰器 a2-swiper-roam2 -->
              <span class="a2-swiper-roam2" id="a2-swiper-roam2">
              </span>
              <!-- 此处一维度下轮播 -->
              <swiper :options="swiperOption2" class="teletraffic-gsm">
                <swiper-slide>
                  <div class="teletraffic">
                    <!-- 话务量TOP5 teletraffic -->
                    <div class="title">话务量TOP5</div>
                    <div class="content">
                      <div class="chart31">
                        <!-- 五环图 -->
                        <canvas id="chart31" width="250px" height="252px"></canvas>
                      </div>
                      <!-- 表格 -->
                      <div class="des">
                        <div class="desItem" v-for="item in teletrafficData" :key="item.index">
                          <div class="index">{{item.index}}</div>
                          <div class="name">
                            <div class="name_">{{item.name}}</div>
                          </div>
                          <div class="address">{{item.address}}</div>
                          <div class="num">
                            <div class="count">
                              <counter :data="item.num" :config="configNum"></counter>
                            </div>
                          </div>
                          <div class="percent">
                            <div class="count">
                              <counter :data="item.percent" :config="configPercent"></counter>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="teletraffic1">
                    <!-- 话务量TOP5 teletraffic -->
                    <div class="title">流量TOP5</div>
                    <div class="content">
                      <div class="chart41">
                        <!-- 五环图 -->
                        <canvas id="chart41" width="250px" height="252px"></canvas>
                      </div>
                      <!-- 表格 -->
                      <div class="des">
                        <div class="desItem" v-for="item in teletrafficDataS" :key="item.index">
                          <div class="index">{{item.index}}</div>
                          <div class="name">
                            <div class="name_">{{item.name}}</div>
                          </div>
                          <div class="address">{{item.address}}</div>
                          <div class="num">
                            <div class="count">
                              <counter :data="item.num" :config="configNum"></counter>
                            </div>
                          </div>
                          <div class="percent">
                            <div class="count">
                              <counter :data="item.percent" :config="configPercent"></counter>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
                <!-- <span class="a2-swiper-roam2" id="a2-swiper-roam2">
                </span> -->
              </swiper>
            </div>
          </swiper-slide>
          <!-- 轮播页面1 -->
          <swiper-slide>
            <div class="quality1">
              <div class="title">业务质量</div>
              <!-- VOLTE -->
              <div class="volte">
                <div class="title">VOLTE</div>
                <div class="content">
                  <div class="item" v-for="item in itemData" :key="item.index">
                    <div class="count">
                      <counter :data="item.num" :config="config_volte"></counter>
                      <span class="config_volte_percent">%</span>
                    </div>
                    <div class="des">{{item.des}}</div>
                  </div>
                </div>
              </div>
              <!-- LTE -->
              <div class="lte">
                <div class="title">LTE</div>
                <div class="item" v-for="item in itemDatas" :key="item.index" :style="item.style">
                  <div class="des">
                    {{item.des}}
                  </div>
                  <div class="count">
                    <counter :data="item.num" :config="config_lte"></counter>
                  </div>
                </div>
                <div class="item2" v-for="item in itemDatas2" :key="item.index" :style="item.style">
                  <div class="des">
                    <div class="box">
                      <div class="box_content">{{item.des}}</div>
                    </div>
                  </div>
                  <div class="count">
                    <counter :data="item.num" :config="config_lte"></counter>
                  </div>
                </div>
              </div>
              <!-- GSM -->
              <div class="teletraffic-gsm">
                <div class="gsm">
                  <!-- GSM -->
                  <div class="title">GSM</div>
                  <div class="content">
                    <div class="item1">
                      <div class="progressBox">
                        <div>
                          <circleProgress v-bind="options11" id="cricleProgress11"></circleProgress>
                        </div>
                        <div class="count12">
                          <counter :data="options11.data" :config="config12"></counter>
                          <span>%</span>
                        </div>
                      </div>
                      <div class="des">无线接通率</div>
                    </div>
                    <div class="item2">
                      <div class="progressBox2">
                        <div>
                          <circleProgress v-bind="options12" id="cricleProgress12"></circleProgress>
                        </div>
                        <div class="count13">
                          <counter :data="options12.data" :config="config12"></counter>
                          <span>%</span>
                        </div>
                      </div>
                      <div class="des">TCH拥塞率[不含切换]</div>
                    </div>
                    <div class="item3">
                      <div class="progressBox3">
                          <div>
                            <circleProgress v-bind="options13" id="cricleProgress13"></circleProgress>
                          </div>
                          <div class="count14">
                            <counter :data="options13.data" :config="config12"></counter>
                            <span>%</span>
                          </div>
                      </div>
                      <div class="des">TCH掉话率[含切换]</div>
                    </div>
                    <div class="item4">
                      <div class="progressBox4">
                        <div>
                          <circleProgress v-bind="options14" id="cricleProgress14"></circleProgress>
                        </div>
                        <div class="count15">
                          <counter :data="options14.data" :config="config12"></counter>
                          <span>%</span>
                        </div>
                      </div>
                      <div class="des">SDCCH拥塞率</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
         <!-- 轮播分页器 -->
        <span class="a2-swiper-roam">
        </span>
        <!-- 轮播分页器3 -->
        <span class="a2-swiper-roam3" id="a2-swiper-roam3">
        </span>
        <!-- 高负荷小区 -->
        <div class="charge">
          <div class="title">高负荷小区</div>
          <div class="content">
            <div class="box">
              <div class="chart3" id="chart3"></div>
              <div class="semiCircle"></div>
              <!-- 长春 -->
              <!-- 外圈 非高负荷 -->
              <div class="count1" v-for="item in numList1" :key="item.index" :style="item.style">
                <counter :data="item.num" :config="config1_"></counter>
              </div>
              <!-- 里圈 高负荷 -->
              <div class="count2" v-for="item in numList2" :key="item.index" :style="item.style">
                <counter :data="item.num" :config="config2_"></counter>
              </div>
            </div>
            <!-- 水球图 -->
            <div class="chart1">
              <div class="water1" id="water1"></div>
              <span class="des">{{text1}}</span>
            </div>
            <div class="chart2">
              <div class="water2" id="water2"></div>
              <span class="des">{{text2}}</span>
            </div>
          </div>
        </div>
        <div class="legend"></div>
        <div class="chargeProgress">
          <div class="box">
            <!-- 前两个样式是黄色 -->
            <div class="chargeItem" v-for="item in chargeData" :key="item.index">
              <div class="name">{{item.name}}</div>
              <div class="progressBox">
                <div class="progress" :style="item.style"></div>
              </div>
              <div class="num">
                <div class="count">
                  <counter :data="item.num" :config="config_pro"></counter>
                </div>
              </div>
            </div>
            <!-- 后三个样式是蓝色 -->
            <div class="chargeItems" v-for="item in chargeDatas" :key="item.index">
              <div class="name">{{item.name}}</div>
              <div class="progressBox">
                <div class="progress" :style="item.style"></div>
              </div>
              <div class="num">
                <div class="count">
                  <counter :data="item.num" :config="config_pros"></counter>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 轮播3 -->
        <swiper :options="swiperOption3" class="a2-swiper3" id="hide">
          <swiper-slide>
            <!-- 站点完好率 2-->
            <div class="line2" id="line2">
              <div class="title">站点完好率</div>
              <div class="content">
                <!-- 雷达图 -->
                <div class="lineChart">
                  <div class="chartLine" id="chart5"></div>
                </div>
                <!-- 雷达图四个数据 -->
                <div class="chartNum">
                  <div class="chartNum1">
                    <div class="count">
                      <counter :data="numLine3" :config="config_line3"></counter>
                    </div>
                  </div>
                  <div class="chartNum2">
                    <div class="count">
                      <counter :data="numLine4" :config="config_line3"></counter>
                    </div>
                  </div>
                  <div class="chartNum3">
                    <div class="count">
                      <counter :data="numLine5" :config="config_line3"></counter>
                    </div>
                  </div>
                  <div class="chartNum4">
                    <div class="count">
                      <counter :data="numLine6" :config="config_line3"></counter>
                    </div>
                  </div>
                </div>
                <!-- 哈达、长谷无线利用率 -->
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
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <!-- 无线利用率 1-->
            <div class="line">
              <div class="title">无线利用率</div>
              <div class="content">
                <!-- 雷达图 -->
                <div class="lineChart">
                  <div class="chartLine" id="chart4"></div>
                </div>
                <!-- 雷达图四个数据 -->
                <div class="chartNum">
                  <div class="chartNum1">
                    <div class="count">
                      <counter :data="numLine3S" :config="config_line2"></counter>
                    </div>
                  </div>
                  <div class="chartNum2">
                    <div class="count">
                      <counter :data="numLine4S" :config="config_line2"></counter>
                    </div>
                  </div>
                  <div class="chartNum3">
                    <div class="count">
                      <counter :data="numLine5S" :config="config_line2"></counter>
                    </div>
                  </div>
                  <div class="chartNum4">
                    <div class="count">
                      <counter :data="numLine6S" :config="config_line2"></counter>
                    </div>
                  </div>
                </div>
                <!-- 哈达、长谷无线利用率 -->
                <div class="lineNum">
                  <div class="lineItem">
                    <div class="num">
                      <div class="count">
                        <counter :data="numLine1S" :config="config_line"></counter>
                      </div>
                    </div>
                    <div class="text">哈达无线利用率</div>
                  </div>
                  <div class="lineItem">
                    <div class="num">
                      <div class="count">
                        <counter :data="numLine2S" :config="config_line"></counter>
                      </div>
                    </div>
                    <div class="text">长谷无线利用率</div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!-- 站点完好率 不轮播-->
        <div class="line2" id="line2S">
          <div class="title">站点完好率</div>
          <div class="content">
            <!-- 雷达图 -->
            <div class="lineChart">
              <div class="chartLine" id="chart5S"></div>
            </div>
            <!-- 雷达图四个数据 -->
            <div class="chartNum">
              <div class="chartNum1">
                <div class="count">
                  <counter :data="numLine3" :config="config_line3"></counter>
                </div>
              </div>
              <div class="chartNum2">
                <div class="count">
                  <counter :data="numLine4" :config="config_line3"></counter>
                </div>
              </div>
              <div class="chartNum3">
                <div class="count">
                  <counter :data="numLine5" :config="config_line3"></counter>
                </div>
              </div>
              <div class="chartNum4">
                <div class="count">
                  <counter :data="numLine6" :config="config_line3"></counter>
                </div>
              </div>
            </div>
            <!-- 哈达、长谷无线利用率 -->
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
          </div>
        </div>
      </div>
    </div>
  </view-template>
</template>
<script>
import './v1.scss';
import echarts from 'echarts';
import 'echarts-liquidfill/src/liquidFill.js';
import options from './options.js';
export default {
  data() {
    return {
      // parameter: '高铁线路',
      // 业务量与业务质量轮播
      swiperOption: {
        // autoplay: false,
        autoplay: 30 * 1000,
        setWrapperSize: true,
        autoplayDisableOnInteraction: false,
        observeParents: true,
        direction: 'horizontal',
        pagination: '.a2-swiper-roam',
        paginationClickable: true
      },
      swiperOption2: {
        // autoplay: false,
        autoplay: 30 * 1000,
        setWrapperSize: true,
        autoplayDisableOnInteraction: false,
        observeParents: true,
        direction: 'horizontal',
        pagination: '.a2-swiper-roam2',
        paginationClickable: true
      },
      swiperOption3: {
        // autoplay: false,
        autoplay: 30 * 1000,
        setWrapperSize: true,
        autoplayDisableOnInteraction: false,
        observer: true,
        observeParents: true,
        direction: 'horizontal',
        pagination: '.a2-swiper-roam3',
        paginationClickable: true
      },
      // gam 与 话务量轮播
      // 5环图
      // pre1: null,
      // pre2: null,
      // pre3: null,
      // pre4: null,
      // pre5: null,
      // 非高负荷小区
      numList1: [
        // 现在是1234
        // 顺序应该是4321
        // 1
        {num: 4, style: 'position: absolute; bottom: 47px; left: -13px;'},
        {num: 2, style: 'position: absolute; bottom: 150px; left: 50px;'},
        {num: 3, style: 'position: absolute; bottom: 150px; left: 293px;'},
        {num: 1, style: 'position: absolute; bottom: 47px; left: 340px;'}
      ],
      // 高负荷小区
      numList2: [
        {num: 4, style: 'position: absolute; bottom: 4px; left: 80px;'},
        {num: 2, style: 'position: absolute; bottom: 92px; left: 105px;'},
        {num: 3, style: 'position: absolute; bottom: 92px; left: 220px;'},
        {num: 1, style: 'position: absolute; bottom: 4px; left: 240px;'}
      ],
      pre1: 10,
      pre2: 20,
      pre3: 30,
      pre4: 30,
      pre5: 30,
      text1: '哈大高负荷小区占比',
      text2: '长谷高负荷小区占比',
      // cricleProgess gsm
      options11: {
        id: 'cricleProgress11',
        /* 基础配置 */
        canvasHeight: 220,
        canvasWidth: 142,
        coordinates: [76, 120],
        radius: 54,
        startAngle: -Math.PI * 0.5,
        endAngle: Math.PI * 3 / 2,
        data: 50,
        speed: 100,
        anticlockwise: false,
        /* 样式配置 */
        gradientDirection: 'to bottom left',
        gradientColor: {
          0: 'rgba(20, 222, 235, 0.99)'
        },
        lineStyle: {
          lineWidth: 23,
          lineCap: 'butt',
          lineDash: [10, 12]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options12: {
        id: 'cricleProgress12',
        /* 基础配置 */
        canvasHeight: 180,                     // 设置canvas 大小，不可在css中配置
        canvasWidth: 142,
        coordinates: [74, 123],                 // 圆心坐标
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
          lineDash: [2, 3]                 // 第一项表示线条分段长度，第二项表示分段间隔
        },
        circleBackground: '',                  // 环形进度条的背景配置；其他样式默认和动画进度条相同；
        enableCircleBackground: true           // 默认开启环形背景
      },
      options13: {
        id: 'cricleProgress13',
        /* 基础配置 */
        canvasHeight: 180,                     // 设置canvas 大小，不可在css中配置
        canvasWidth: 142,
        coordinates: [76, 122],                 // 圆心坐标
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
          lineWidth: 12,                     // 线条宽度
          lineCap: 'butt',                   // butt:默认,向线条的每个末端添加平直的边缘; round :向线条的每个末端添加圆形线帽; square :向线条的每个末端添加正方形线帽。
          lineDash: [10, 0]                 // 第一项表示线条分段长度，第二项表示分段间隔
        },
        circleBackground: '',                  // 环形进度条的背景配置；其他样式默认和动画进度条相同；
        enableCircleBackground: true           // 默认开启环形背景
      },
      options14: {
        id: 'cricleProgress14',
        /* 基础配置 */
        canvasHeight: 180,                     // 设置canvas 大小，不可在css中配置
        canvasWidth: 142,
        coordinates: [76, 122],               // 圆心坐标
        radius: 42,                            // 圆环半径
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
      // cricleProgess gsm
      options15: {
        id: 'cricleProgress15',
        /* 基础配置 */
        canvasHeight: 220,                     // 设置canvas 大小，不可在css中配置
        canvasWidth: 142,
        coordinates: [76, 120],                // 圆心坐标
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
          lineDash: [10, 12]                 // 第一项表示线条分段长度，第二项表示分段间隔
        },
        circleBackground: '',                  // 环形进度条的背景配置；其他样式默认和动画进度条相同；
        enableCircleBackground: true           // 默认开启环形背景
      },
      options16: {
        id: 'cricleProgress16',
        /* 基础配置 */
        canvasHeight: 180,                     // 设置canvas 大小，不可在css中配置
        canvasWidth: 142,
        coordinates: [76, 120],                 // 圆心坐标
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
          lineDash: [3, 3]                 // 第一项表示线条分段长度，第二项表示分段间隔
        },
        circleBackground: '',                  // 环形进度条的背景配置；其他样式默认和动画进度条相同；
        enableCircleBackground: true           // 默认开启环形背景
      },
      options17: {
        id: 'cricleProgress17',
        /* 基础配置 */
        canvasHeight: 180,                     // 设置canvas 大小，不可在css中配置
        canvasWidth: 142,
        coordinates: [76, 122],                 // 圆心坐标
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
          lineWidth: 12,                     // 线条宽度
          lineCap: 'butt',                   // butt:默认,向线条的每个末端添加平直的边缘; round :向线条的每个末端添加圆形线帽; square :向线条的每个末端添加正方形线帽。
          lineDash: [10, 0]                 // 第一项表示线条分段长度，第二项表示分段间隔
        },
        circleBackground: '',                  // 环形进度条的背景配置；其他样式默认和动画进度条相同；
        enableCircleBackground: true           // 默认开启环形背景
      },
      options18: {
        id: 'cricleProgress18',
        /* 基础配置 */
        canvasHeight: 180,                     // 设置canvas 大小，不可在css中配置
        canvasWidth: 142,
        coordinates: [76, 122],               // 圆心坐标
        radius: 42,                            // 圆环半径
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
      // 高负荷小区 极坐标
      num1_: 88.88,
      num2_: 88.88,
      num3_: 88.88,
      num4_: 88.88,
      num5_: 88.88,
      num6_: 88.88,
      num7_: 88.88,
      num8_: 88.88,
      numLine1: 11.02,
      numLine2: 222.2,
      numLine3: 22.2,
      numLine4: 22.2,
      numLine5: 22.2,
      numLine6: 22.2,
      numLine1S: 11.02,
      numLine2S: 222.2,
      numLine3S: 22.2,
      numLine4S: 22.2,
      numLine5S: 22.2,
      numLine6S: 22.2,
      // 水球图
      chart1: null,
      chart2: null,
      // 极坐标
      chart3: null,
      // 话务量
      teletrafficData: [
        {index: 1, name: '小区名称小区名称小区名称小区名称小区名称', address: '长吉', num: 123, percent: 45},
        {index: 2, name: '小区名称小区名称小区名称小区名称小区名称', address: '长吉', num: 123, percent: 45},
        {index: 3, name: '小区名称小区名称小区名称小区名称小区名称', address: '长吉', num: 123, percent: 45},
        {index: 4, name: '小区名称小区名称小区名称小区名称小区名称', address: '长吉', num: 123, percent: 45},
        {index: 5, name: '小区名称小区名称小区名称小区名称小区名称', address: '长吉', num: 123, percent: 45}
      ],
      // 流量
      teletrafficDataS: [
        {index: 1, name: '小区名称小区名称小区名称小区名称小区名称', address: '长吉', num: 123, percent: 45},
        {index: 2, name: '小区名称小区名称小区名称小区名称小区名称', address: '长吉', num: 123, percent: 45},
        {index: 3, name: '小区名称小区名称小区名称小区名称小区名称', address: '长吉', num: 123, percent: 45},
        {index: 4, name: '小区名称小区名称小区名称小区名称小区名称', address: '长吉', num: 123, percent: 45},
        {index: 5, name: '小区名称小区名称小区名称小区名称小区名称', address: '长吉', num: 123, percent: 45}
      ],
      // VOLTE
      itemData: [
        {num: 22.2, des: '无线接通率[语音]'},
        {num: 22.2, des: '无线接通率[视频]'},
        {num: 22.22, des: '用户切换成功率[语音]'},
        {num: 22.22, des: 'E-RAB掉线率[语音]'},
        {num: 22.22, des: 'E-RAB掉线率[视频]'},
        {num: 22.22, des: '下行平均延时'}
      ],
      // LTE
      itemDatas: [
        {num: 22.22, des: '切换成功率', style: 'left: 0px; top: 60px'},
        {num: 22.22, des: '无线掉线率', style: 'left: 224px; top: 60px'},
        {num: 22.22, des: '无线接通率', style: 'left: 444px; top: 60px'}
      ],
      itemDatas2: [
        {num: 22.22, des: 'PRC连接建立成功率', style: 'left: 100px; top: 164px'},
        {num: 88.88, des: 'E-RAB建立成功率', style: 'left: 320px; top: 164px'}
      ],
      // 高负荷小区 进度条
      chargeData: [
        {name: '小区名字', num: 1234, style: 'width: 80%'},
        {name: '小区名字', num: 1234, style: 'width: 70%'}
      ],
      chargeDatas: [
        {name: '小区名字', num: 1234, style: 'width: 60%'},
        {name: '小区名字', num: 1234, style: 'width: 50%'},
        {name: '小区名字', num: 1234, style: 'width: 40%'}
      ],
      // volte
      config_volte: {
        // justifyContent: 'center',
        justifyContent: 'flex-end',
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
      // config_volte: {
      //   // justifyContent: 'flex-start',
      //   justifyContent: 'flex-end',
      //   numbers: {
      //     // 数字配置项
      //     textStyle: {
      //       color: '#f4fe4c',
      //       fontSize: 20,
      //       fontFamily: 'PixelLCD7',
      //       fontWeight: 'normal'
      //     },
      //     animateFlag: true,
      //     animateType: 'scroll',
      //     letterSpacing: 0 // 数字之间间距，
      //   }
      // },
      // lte
      config_lte: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#f4fe4c',
            fontSize: 18,
            fontFamily: 'PixelLCD7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 4 // 数字之间间距
        },
        suffix: {
          // 后缀配置项
          content: '%',
          marginLeft: 0,
          textStyle: {
            color: '#f4fe4c',
            fontSize: 14,
            fontWeight: 'normal',
            fontFamily: 'PixelLCD7'
          }
        }
      },
      // GSM 5环
      config12: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#f4fe4c',
            fontSize: 12,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 0 // 数字之间间距
        }
      },
      // 高负荷小区 极坐标
      config1_: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#2cc2d4',
            fontSize: 18,
            fontFamily: 'PixelLCD7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 0 // 数字之间间距
        }
      },
      config2_: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#e5f1ff',
            fontSize: 18,
            fontFamily: 'PixelLCD7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 0 // 数字之间间距
        }
      },
      // 高负荷小区 进度条
      config_pro: {
        justifyContent: 'flex-start',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#ecc62d',
            fontSize: 20,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 0 // 数字之间间距
        }
      },
      config_pros: {
        justifyContent: 'flex-start',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#25bff2',
            fontSize: 20,
            fontFamily: 'MF_LangQian',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 0 // 数字之间间距
        }
      },
      // 无线利用率
      config_line: {
        // justifyContent: 'center',
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
      // config_line: {
      //   justifyContent: 'flex-end',
      //   numbers: {
      //     // 数字配置项
      //     textStyle: {
      //       color: '#33ff77',
      //       fontSize: 36,
      //       fontFamily: 'PixelLCD-7',
      //       fontWeight: 'normal'
      //     },
      //     animateFlag: true,
      //     animateType: 'scroll',
      //     letterSpacing: 14 // 数字之间间距
      //   }
      // },
      // 无线利用率-2
      config_line1: {
        // justifyContent: 'center',
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
      // 雷达图 4个数据
      config_line2: {
        justifyContent: 'flex-start',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#33ff77',
            fontSize: 18,
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
            color: '#33ff77',
            fontSize: 18,
            fontWeight: 'normal',
            fontFamily: 'MF_LangQian'
          }
        }
      },
      // 雷达图 4个数据=2
      config_line3: {
        justifyContent: 'flex-start',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#e0e93b',
            fontSize: 18,
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
            color: '#e0e93b',
            fontSize: 18,
            fontWeight: 'normal',
            fontFamily: 'MF_LangQian'
          }
        }
      },
      // 表格-num
      configNum: {
        justifyContent: 'flex-end',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#0ad9db',
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
          content: 'Erl',
          marginLeft: 0,
          textStyle: {
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 'normal',
            fontFamily: 'MF_LangQian'
          }
        }
      },
      // 表格-percent
      configPercent: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#dce8f6',
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
          marginLeft: 0,
          textStyle: {
            color: '#dce8f6',
            fontSize: 14,
            fontWeight: 'normal',
            fontFamily: 'MF_LangQian'
          }
        }
      }
    }
  },
  mounted() {
    // 接数据
    this.init();
    this.initBar();
    this.initChart_(this.pre1, this.pre2, this.pre3, this.pre4, this.pre5);
    this.initChart(this.pre1, this.pre2, this.pre3, this.pre4, this.pre5);
    this.loadDatas();
    this.loadAllData();
  },
  computed: {
    // belongname() {
    //   return this.$store.state.belongname
    // },
    region() {
      return this.$store.state.regionName;
    }
  },
  methods: {
    loadDatas() {
      this.loadData(this.region);
      // console.log(this.region)
    },
    init() {
      this.chart1 = echarts.init(document.getElementById('water1'));
      this.chart2 = echarts.init(document.getElementById('water2'));
      this.chart3 = echarts.init(document.getElementById('chart3'));
      // 雷达图
      this.chart4 = echarts.init(document.getElementById('chart4'));
      this.chart5 = echarts.init(document.getElementById('chart5'));
      this.chart5S = echarts.init(document.getElementById('chart5S'));
      this.chart1.setOption(options.option1);
      this.chart2.setOption(options.option2);
      this.chart3.setOption(options.option3);
      this.chart4.setOption(options.option4);
      this.chart5.setOption(options.option5);
      this.chart5S.setOption(options.option5);
    },
    initBar() {
      // 轮播页面2-柱状图1、柱状图2
      this.chart21 = echarts.init(document.getElementById('chart21'));
      this.chart21.setOption(options.option21);
      this.chart22 = echarts.init(document.getElementById('chart22'));
      this.chart22.setOption(options.option22);
    },
    // 5环图
    initChart_(arg1_, arg2_, arg3_, arg4_, arg5_) {
      var canvas = document.getElementById('chart31');
      if (canvas.getContext('2d')) {
        var ctx = canvas.getContext('2d');
        // 样式
        ctx.lineCap = 'round';
        ctx.lineWidth = 13;
        // 第一个环
        ctx.beginPath();
        ctx.strokeStyle = '#eb601c';
        ctx.arc(129, 148, 36, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg1_ / 100), true);
        ctx.stroke();
        // 第二个环
        ctx.beginPath();
        ctx.strokeStyle = '#ffff42';
        ctx.arc(129, 148, 50, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg2_ / 100), true);
        ctx.stroke();
        // 第三个环
        ctx.beginPath();
        ctx.strokeStyle = '#e0a13b';
        ctx.arc(129, 148, 64, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg3_ / 100), true);
        ctx.stroke();
        // 第四个环
        ctx.beginPath();
        ctx.strokeStyle = '#22ff3d';
        ctx.arc(129, 148, 78, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg4_ / 100), true);
        ctx.stroke();
        // 第五个环
        ctx.beginPath();
        ctx.strokeStyle = '#0ffffe';
        ctx.arc(129, 148, 92, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg5_ / 100), true);
        ctx.stroke();
      }
    },
    initChart(arg1, arg2, arg3, arg4, arg5) {
      var canvas = document.getElementById('chart41');
      if (canvas.getContext('2d')) {
        var ctx = canvas.getContext('2d');
        // 样式
        ctx.lineCap = 'round';
        ctx.lineWidth = 13;
        // 第一个环
        ctx.beginPath();
        ctx.strokeStyle = '#eb601c';
        ctx.arc(129, 148, 36, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg1 / 100), true);
        ctx.stroke();
        // 第二个环
        ctx.beginPath();
        ctx.strokeStyle = '#ffff42';
        ctx.arc(129, 148, 50, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg2 / 100), true);
        ctx.stroke();
        // 第三个环
        ctx.beginPath();
        ctx.strokeStyle = '#e0a13b';
        ctx.arc(129, 148, 64, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg3 / 100), true);
        ctx.stroke();
        // 第四个环
        ctx.beginPath();
        ctx.strokeStyle = '#22ff3d';
        ctx.arc(129, 148, 78, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg4 / 100), true);
        ctx.stroke();
        // 第五个环
        ctx.beginPath();
        ctx.strokeStyle = '#0ffffe';
        ctx.arc(129, 148, 92, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg5 / 100), true);
        ctx.stroke();
      }
      // if (canvas.getContext('2d')) {
      //   var ctx = canvas.getContext('2d');
      //   // 样式
      //   ctx.lineCap = 'round';
      //   ctx.lineWidth = 13;
      //   // 第一个环
      //   ctx.beginPath();
      //   ctx.strokeStyle = '#eb601c';
      //   ctx.arc(130, 145, 35, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg1 / 100), true);
      //   ctx.stroke();
      //   // 第二个环
      //   ctx.beginPath();
      //   ctx.strokeStyle = '#ffff42';
      //   ctx.arc(130, 145, 50, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg2 / 100), true);
      //   ctx.stroke();
      //   // 第三个环
      //   ctx.beginPath();
      //   ctx.strokeStyle = '#e0a13b';
      //   ctx.arc(130, 145, 65, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg3 / 100), true);
      //   ctx.stroke();
      //   // 第四个环
      //   ctx.beginPath();
      //   ctx.strokeStyle = '#22ff3d';
      //   ctx.arc(130, 145, 80, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg4 / 100), true);
      //   ctx.stroke();
      //   // 第五个环
      //   ctx.beginPath();
      //   ctx.strokeStyle = '#0ffffe';
      //   ctx.arc(130, 145, 95, Math.PI * 3 / 2, Math.PI * (3 / 2 - 2 * arg5 / 100), true);
      //   ctx.stroke();
      // }
    },
    loadData(regionName) {
      // 柱状图1
      // 当前GSM话物量
      this.$http.indi.get('jgt0001', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // 清空数据
          options.option21.series[0].data = [];
          options.option21.series[1].data = [];
          options.option21.series[2].data = [];
          options.option21.series[3].data = [];
          options.option21.xAxis.data = [];
          res.data.data.forEach((ele, index) => {
            options.option21.series[0].data.push({
              value: ele.KPI_VALUE1
            });
            options.option21.series[1].data.push({
              value: ele.KPI_VALUE2
            });
            options.option21.series[2].data.push({
              value: ele.KPI_VALUE3
            });
            options.option21.series[3].data.push({
              value: ele.KPI_VALUE4
            });
            // x轴
            options.option21.xAxis.data.push({
              value: ele.X_AXIS
            })
          })
        }
        this.chart21.setOption(options.option21);
      });
      // console.log(options.option21.series[0].data)
      // console.log(options.option21.series[1].data)
      // 柱状图2
      // 当前LTE流量
      this.$http.indi.get('jgt0002', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // 数据清空
          options.option22.series[0].data = [];
          options.option22.series[1].data = [];
          options.option22.xAxis.data = [];
          res.data.data.forEach((ele, index) => {
            options.option22.series[0].data.push({
              value: ele.KPI_VALUE1
            });
            options.option22.series[1].data.push({
              value: ele.KPI_VALUE2
            });
            // x轴
            options.option22.xAxis.data.push({
              value: ele.X_AXIS
            })
          })
          this.chart22.setOption(options.option22);
        }
      });
      // console.log(options.option22.series[0].data)
      // console.log(options.option22.series[1].data)
      // 话务量TOP5 业务量
      this.$http.indi.get('jgt0007', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          res.data.data.forEach((ele, index) => {
            // 表格
            this.teletrafficData[index].name = ele.KPI_NAME;
            this.teletrafficData[index].address = ele.AREA_NAME;
            this.teletrafficData[index].num = ele.KPI_VALUE;
            this.teletrafficData[index].percent = ele.RATIO;
            // 5环图
            this.pre5 = null;
            this.pre4 = null;
            this.pre3 = null;
            this.pre2 = null;
            this.pre1 = null;
            this.pre5 = res.data.data[0].RATIO;
            this.pre4 = res.data.data[1].RATIO;
            this.pre3 = res.data.data[2].RATIO;
            this.pre2 = res.data.data[3].RATIO;
            this.pre1 = res.data.data[4].RATIO;
          })
          // console.log(this.pre5)
          // console.log(this.pre4)
          // console.log(this.pre3)
          this.initChart_(this.pre1, this.pre2, this.pre3, this.pre4, this.pre5);
        }
      })
      // 话务量TOP5 流量
      this.$http.indi.get('jgt0008', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          res.data.data.forEach((ele, index) => {
            // 表格
            this.teletrafficDataS[index].name = ele.KPI_NAME;
            this.teletrafficDataS[index].address = ele.AREA_NAME;
            this.teletrafficDataS[index].num = ele.KPI_VALUE;
            this.teletrafficDataS[index].percent = ele.RATIO;
            // 5环图
            this.pre5 = null;
            this.pre4 = null;
            this.pre3 = null;
            this.pre2 = null;
            this.pre1 = null;
            this.pre5 = res.data.data[0].RATIO;
            this.pre4 = res.data.data[1].RATIO;
            this.pre3 = res.data.data[2].RATIO;
            this.pre2 = res.data.data[3].RATIO;
            this.pre1 = res.data.data[4].RATIO;
          })
          // console.log(this.pre5)
          // console.log(this.pre4)
          // console.log(this.pre3)
          this.initChart_(this.pre1, this.pre2, this.pre3, this.pre4, this.pre5);
        }
      })
      // 业务质量: 无线接通率（语音）
      this.$http.indi.get('jgt0009', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemData[3].num = res.data.data[0].KPI_VALUE;
          this.itemData[3].des = res.data.data[0].KPI_NAME;
        }
      })
      // 业务质量: 无线接通率（视频）
      this.$http.indi.get('jgt0010', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemData[4].num = res.data.data[0].KPI_VALUE;
          this.itemData[4].des = res.data.data[0].KPI_NAME;
        }
      })
      // 业务质量: 用户切换成功率(语音)
      this.$http.indi.get('jgt0011', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemData[2].num = res.data.data[0].KPI_VALUE;
          this.itemData[2].des = res.data.data[0].KPI_NAME;
        }
      })
      // 业务质量: E-RAB掉线率(语音) 无线接通率（语音）
      this.$http.indi.get('jgt0012', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemData[0].num = res.data.data[0].KPI_VALUE;
          this.itemData[0].des = res.data.data[0].KPI_NAME;
        }
      })
       // 业务质量: E-RAB掉线率(视频) 无线接通率（视频）
      this.$http.indi.get('jgt0013', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemData[1].num = res.data.data[0].KPI_VALUE;
          this.itemData[1].des = res.data.data[0].KPI_NAME;
        }
      })
      // 业务质量: 下行平均时延
      this.$http.indi.get('jgt0014', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemData[5].num = res.data.data[0].KPI_VALUE;
          this.itemData[5].des = res.data.data[0].KPI_NAME;
        }
      })
      // VOLTE 切换成功率
      this.$http.indi.get('jgt0015', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemDatas[0].num = res.data.data[0].KPI_VALUE;
          this.itemDatas[0].des = res.data.data[0].KPI_NAME;
        }
      })
      // VOLTE 无限掉线率
      this.$http.indi.get('jgt0016', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemDatas[1].num = res.data.data[0].KPI_VALUE;
          this.itemDatas[1].des = res.data.data[0].KPI_NAME;
        }
      })
      // VOLTE 无限接通率
      this.$http.indi.get('jgt0017', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemDatas[2].num = res.data.data[0].KPI_VALUE;
          this.itemDatas[2].des = res.data.data[0].KPI_NAME;
        }
      })
      // VOLTE PRC连接建立成功率
      this.$http.indi.get('jgt0018', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemDatas2[0].num = res.data.data[0].KPI_VALUE;
          this.itemDatas2[0].des = res.data.data[0].KPI_NAME;
        }
      })
      // VOLTE E-RAB连接建立成功率
      this.$http.indi.get('jgt0019', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemDatas2[1].num = res.data.data[0].KPI_VALUE;
          this.itemDatas2[1].des = res.data.data[0].KPI_NAME;
        }
      })
      // GSM-4个进度条-无限接通率
      this.$http.indi.get('jgt0020', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options11.data = res.data.data[0].KPI_VALUE;
          // console.log(this.options11.data)
        }
      })
      // GSM TCH拥塞率(不含切换)
      this.$http.indi.get('jgt0021', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options12.data = res.data.data[0].KPI_VALUE;
        }
      })
      // GSM TCH掉话率(含切换)
      this.$http.indi.get('jgt0022', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options13.data = res.data.data[0].KPI_VALUE;
        }
      })
      // GSM SDCCH拥塞率
      this.$http.indi.get('jgt0023', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options14.data = res.data.data[0].KPI_VALUE;
        }
      })
      // 高负荷小区 极坐标-长春
      this.$http.indi.get('jgt0024', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          options.option3.series[0].data = [];
          options.option3.series[1].data = [];
          res.data.data.forEach((ele, index) => {
            options.option3.series[0].data.push({
              value: ele.KPI_VALUE1
            });
            options.option3.series[1].data.push({
              value: ele.KPI_VALUE2
            });
            options.option3.angleAxis.data[index].value = ele.KPI_NAME;
            this.numList1[index].num = ele.KPI_VALUE2;
            this.numList2[index].num = ele.KPI_VALUE1;
          })
          options.option3.series[0].data.push(60, 20, 30, 40)
          options.option3.series[1].data.push(60, 20, 30, 40)
          this.chart3.setOption(options.option3)
        }
      })
      // 哈大高负荷小区占比
      this.$http.indi.get('jgt0025', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // console.log(res.data.data[0].KPI_VALUE)
          // console.log(options.option1.series[0].data[0].value)
          options.option1.series[0].data[0].value = res.data.data[0].KPI_VALUE / 100;
          this.chart1.setOption(options.option1)
          this.text1 = res.data.data[0].KPI_NAME
        }
      })
      // 长谷高负荷小区占比
      this.$http.indi.get('jgt0026', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          options.option2.series[0].data[0].value = res.data.data[0].KPI_VALUE / 100;
          this.chart2.setOption(options.option2)
          this.text2 = res.data.data[0].KPI_NAME
        }
      })
      // 小区名字
      this.$http.indi.get('jgt0030', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // name
          this.chargeData[0].name = res.data.data[0].KPI_NAME
          this.chargeData[1].name = res.data.data[1].KPI_NAME
          this.chargeDatas[0].name = res.data.data[2].KPI_NAME
          this.chargeDatas[1].name = res.data.data[3].KPI_NAME
          this.chargeDatas[2].name = res.data.data[4].KPI_NAME
          // num
          this.chargeData[0].num = res.data.data[0].KPI_VALUE
          this.chargeData[1].num = res.data.data[1].KPI_VALUE
          this.chargeDatas[0].num = res.data.data[2].KPI_VALUE
          this.chargeDatas[1].num = res.data.data[3].KPI_VALUE
          this.chargeDatas[2].num = res.data.data[4].KPI_VALUE
        }
      })
      // 站点完好率
      this.$http.indi.get('jgt0031', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          options.option5.series[0].data[0].value = [];
          // 吉林
          this.numLine6 = res.data.data[0].KPI_VALUE;
          options.option5.radar.indicator[3].name = res.data.data[0].KPI_NAME;
          // 长春
          this.numLine3 = res.data.data[1].KPI_VALUE;
          options.option5.radar.indicator[0].name = res.data.data[1].KPI_NAME;
          // 四平
          this.numLine4 = res.data.data[2].KPI_VALUE;
          options.option5.radar.indicator[1].name = res.data.data[2].KPI_NAME;
          // 松原
          this.numLine5 = res.data.data[3].KPI_VALUE;
          options.option5.radar.indicator[2].name = res.data.data[3].KPI_NAME;
        }
        options.option5.series[0].data[0].value = [this.numLine3, this.numLine4, this.numLine5, this.numLine6]
        this.chart5.setOption(options.option5);
      })
      // 站点完好率
      this.$http.indi.get('jgt0032', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numLine1 = res.data.data[0].KPI_VALUE;
        }
      })
      // 影响里程
      this.$http.indi.get('jgt0033', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numLine2 = res.data.data[0].KPI_VALUE;
        }
      })
      // 无线利用率
      this.$http.indi.get('jgt0034', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          options.option4.series[0].data[0].value = [];
          // 吉林
          this.numLine6S = res.data.data[0].KPI_VALUE;
          options.option4.radar.indicator[1].name = res.data.data[0].KPI_NAME;
          // 长春
          this.numLine3S = res.data.data[1].KPI_VALUE;
          options.option4.radar.indicator[0].name = res.data.data[1].KPI_NAME;
          // 四平
          this.numLine4S = res.data.data[2].KPI_VALUE;
          options.option4.radar.indicator[3].name = res.data.data[2].KPI_NAME;
          // 松原
          this.numLine5S = res.data.data[3].KPI_VALUE;
          options.option4.radar.indicator[2].name = res.data.data[3].KPI_NAME;
        }
        options.option5.series[0].data[0].value = [this.numLine3S, this.numLine4S, this.numLine5S, this.numLine6S]
        this.chart4.setOption(options.option4);
      })
      // 站点完好率
      this.$http.indi.get('jgt0035', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numLine1S = res.data.data[0].KPI_VALUE;
        }
      })
      // 影响里程
      this.$http.indi.get('jgt0036', {dimension_type: regionName}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numLine2S = res.data.data[0].KPI_VALUE;
        }
      })
    },
    // 默认加载全部高铁数据
    loadAllData() {
      // 柱状图1
      // 当前GSM话物量
      this.$http.indi.get('jgt0001', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // 清空数据
          options.option21.series[0].data = [];
          options.option21.series[1].data = [];
          options.option21.series[2].data = [];
          options.option21.series[3].data = [];
          options.option21.xAxis.data = [];
          res.data.data.forEach((ele, index) => {
            options.option21.series[0].data.push({
              value: ele.KPI_VALUE1
            });
            options.option21.series[1].data.push({
              value: ele.KPI_VALUE2
            });
            options.option21.series[2].data.push({
              value: ele.KPI_VALUE3
            });
            options.option21.series[3].data.push({
              value: ele.KPI_VALUE4
            });
            // x轴
            options.option21.xAxis.data.push({
              value: ele.X_AXIS
            })
          })
        }
        this.chart21.setOption(options.option21);
      });
      // 柱状图2
      // 当前、日常VOLTE流量
      this.$http.indi.get('jgt0002', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // 数据清空
          options.option22.series[0].data = [];
          options.option22.series[1].data = [];
          options.option22.xAxis.data = [];
          res.data.data.forEach((ele, index) => {
            options.option22.series[0].data.push({
              value: ele.KPI_VALUE1
            });
            options.option22.series[1].data.push({
              value: ele.KPI_VALUE2
            });
            // x轴
            options.option22.xAxis.data.push({
              value: ele.X_AXIS
            })
          })
          this.chart22.setOption(options.option22);
        }
      });
      // console.log(options.option22.series[0].data)
      // console.log(options.option22.series[1].data)
      // 话务量TOP5 业务量
      this.$http.indi.get('jgt0007', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          res.data.data.forEach((ele, index) => {
            // 表格
            this.teletrafficData[index].name = ele.KPI_NAME;
            this.teletrafficData[index].address = ele.AREA_NAME;
            this.teletrafficData[index].num = ele.KPI_VALUE;
            this.teletrafficData[index].percent = ele.RATIO;
            // 5环图
            this.pre5 = null;
            this.pre4 = null;
            this.pre3 = null;
            this.pre2 = null;
            this.pre1 = null;
            this.pre5 = res.data.data[0].RATIO;
            this.pre4 = res.data.data[1].RATIO;
            this.pre3 = res.data.data[2].RATIO;
            this.pre2 = res.data.data[3].RATIO;
            this.pre1 = res.data.data[4].RATIO;
          })
          // console.log(this.pre5)
          // console.log(this.pre4)
          // console.log(this.pre3)
          this.initChart_(this.pre1, this.pre2, this.pre3, this.pre4, this.pre5);
        }
      })
      // 话务量TOP5 流量
      this.$http.indi.get('jgt0008', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          res.data.data.forEach((ele, index) => {
            // 表格
            this.teletrafficDataS[index].name = ele.KPI_NAME;
            this.teletrafficDataS[index].address = ele.AREA_NAME;
            this.teletrafficDataS[index].num = ele.KPI_VALUE;
            this.teletrafficDataS[index].percent = ele.RATIO;
            // 5环图
            this.pre5 = null;
            this.pre4 = null;
            this.pre3 = null;
            this.pre2 = null;
            this.pre1 = null;
            this.pre5 = res.data.data[0].RATIO;
            this.pre4 = res.data.data[1].RATIO;
            this.pre3 = res.data.data[2].RATIO;
            this.pre2 = res.data.data[3].RATIO;
            this.pre1 = res.data.data[4].RATIO;
          })
          // console.log(this.pre5)
          // console.log(this.pre4)
          // console.log(this.pre3)
          this.initChart_(this.pre1, this.pre2, this.pre3, this.pre4, this.pre5);
        }
      })
      // 业务质量: 无线接通率（语音）
      this.$http.indi.get('jgt0009', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemData[3].num = res.data.data[0].KPI_VALUE;
          this.itemData[3].des = res.data.data[0].KPI_NAME;
        }
      })
      // 业务质量: 无线接通率（视频）
      this.$http.indi.get('jgt0010', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemData[4].num = res.data.data[0].KPI_VALUE;
          this.itemData[4].des = res.data.data[0].KPI_NAME;
        }
      })
      // 业务质量: 用户切换成功率(语音)
      this.$http.indi.get('jgt0011', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemData[2].num = res.data.data[0].KPI_VALUE;
          this.itemData[2].des = res.data.data[0].KPI_NAME;
        }
      })
      // 业务质量: E-RAB掉线率(语音) 无线接通率（语音）
      this.$http.indi.get('jgt0012', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemData[0].num = res.data.data[0].KPI_VALUE;
          this.itemData[0].des = res.data.data[0].KPI_NAME;
        }
      })
       // 业务质量: E-RAB掉线率(视频) 无线接通率（视频）
      this.$http.indi.get('jgt0013', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemData[1].num = res.data.data[0].KPI_VALUE;
          this.itemData[1].des = res.data.data[0].KPI_NAME;
        }
      })
      // 业务质量: 下行平均时延
      this.$http.indi.get('jgt0014', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemData[5].num = res.data.data[0].KPI_VALUE;
          this.itemData[5].des = res.data.data[0].KPI_NAME;
        }
      })
      // VOLTE 切换成功率
      this.$http.indi.get('jgt0015', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemDatas[0].num = res.data.data[0].KPI_VALUE;
          this.itemDatas[0].des = res.data.data[0].KPI_NAME;
        }
      })
      // VOLTE 无限掉线率
      this.$http.indi.get('jgt0016', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemDatas[1].num = res.data.data[0].KPI_VALUE;
          this.itemDatas[1].des = res.data.data[0].KPI_NAME;
        }
      })
      // VOLTE 无限接通率
      this.$http.indi.get('jgt0017', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemDatas[2].num = res.data.data[0].KPI_VALUE;
          this.itemDatas[2].des = res.data.data[0].KPI_NAME;
        }
      })
      // VOLTE PRC连接建立成功率
      this.$http.indi.get('jgt0018', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemDatas2[0].num = res.data.data[0].KPI_VALUE;
          this.itemDatas2[0].des = res.data.data[0].KPI_NAME;
        }
      })
      // VOLTE E-RAB连接建立成功率
      this.$http.indi.get('jgt0019', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.itemDatas2[1].num = res.data.data[0].KPI_VALUE;
          this.itemDatas2[1].des = res.data.data[0].KPI_NAME;
        }
      })
      // GSM-4个进度条-无限接通率
      this.$http.indi.get('jgt0020', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options11.data = res.data.data[0].KPI_VALUE;
          // console.log(this.options11.data)
        }
      })
      // GSM TCH拥塞率(不含切换)
      this.$http.indi.get('jgt0021', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options12.data = res.data.data[0].KPI_VALUE;
        }
      })
      // GSM TCH掉话率(含切换)
      this.$http.indi.get('jgt0022', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options13.data = res.data.data[0].KPI_VALUE;
        }
      })
      // GSM SDCCH拥塞率
      this.$http.indi.get('jgt0023', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.options14.data = res.data.data[0].KPI_VALUE;
        }
      })
      // 高负荷小区 极坐标-长春
      this.$http.indi.get('jgt0024', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          options.option3.series[0].data = [];
          options.option3.series[1].data = [];
          res.data.data.forEach((ele, index) => {
            options.option3.series[0].data.push({
              value: ele.KPI_VALUE1
            });
            options.option3.series[1].data.push({
              value: ele.KPI_VALUE2
            });
            options.option3.angleAxis.data[index].value = ele.KPI_NAME;
            this.numList1[index].num = ele.KPI_VALUE2;
            this.numList2[index].num = ele.KPI_VALUE1;
          })
          options.option3.series[0].data.push(60, 20, 30, 40)
          options.option3.series[1].data.push(60, 20, 30, 40)
          this.chart3.setOption(options.option3)
        }
      })
      // 哈大高负荷小区占比
      this.$http.indi.get('jgt0025', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // console.log(res.data.data[0].KPI_VALUE)
          // console.log(options.option1.series[0].data[0].value)
          options.option1.series[0].data[0].value = res.data.data[0].KPI_VALUE / 100;
          this.chart1.setOption(options.option1)
          this.text1 = res.data.data[0].KPI_NAME
        }
      })
      // 长谷高负荷小区占比
      this.$http.indi.get('jgt0026', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          options.option2.series[0].data[0].value = res.data.data[0].KPI_VALUE / 100;
          this.chart2.setOption(options.option2)
          this.text2 = res.data.data[0].KPI_NAME
        }
      })
      // 小区名字
      this.$http.indi.get('jgt0030', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          // name
          this.chargeData[0].name = res.data.data[0].KPI_NAME
          this.chargeData[1].name = res.data.data[1].KPI_NAME
          this.chargeDatas[0].name = res.data.data[2].KPI_NAME
          this.chargeDatas[1].name = res.data.data[3].KPI_NAME
          this.chargeDatas[2].name = res.data.data[4].KPI_NAME
          // num
          this.chargeData[0].num = res.data.data[0].KPI_VALUE
          this.chargeData[1].num = res.data.data[1].KPI_VALUE
          this.chargeDatas[0].num = res.data.data[2].KPI_VALUE
          this.chargeDatas[1].num = res.data.data[3].KPI_VALUE
          this.chargeDatas[2].num = res.data.data[4].KPI_VALUE
        }
      })
      // 站点完好率
      this.$http.indi.get('jgt0031', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          options.option5.series[0].data[0].value = [];
          // 吉林--四平
          this.numLine6 = res.data.data[0].KPI_VALUE;
          options.option5.radar.indicator[3].name = res.data.data[0].KPI_NAME;
          // 长春
          this.numLine3 = res.data.data[1].KPI_VALUE;
          options.option5.radar.indicator[0].name = res.data.data[1].KPI_NAME;
          // 四平--吉林
          this.numLine4 = res.data.data[2].KPI_VALUE;
          options.option5.radar.indicator[1].name = res.data.data[2].KPI_NAME;
          // 松原
          this.numLine5 = res.data.data[3].KPI_VALUE;
          options.option5.radar.indicator[2].name = res.data.data[3].KPI_NAME;
        }
        options.option5.series[0].data[0].value.push(this.numLine3, this.numLine4, this.numLine5, this.numLine6)
        this.chart5.setOption(options.option5);
      })
      // 站点完好率
      this.$http.indi.get('jgt0032', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numLine1 = res.data.data[0].KPI_VALUE;
        }
      })
      // 影响里程
      this.$http.indi.get('jgt0033', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numLine2 = res.data.data[0].KPI_VALUE;
        }
      })
      // 无线利用率
      this.$http.indi.get('jgt0034', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          options.option4.series[0].data[0].value = [];
          // 吉林
          this.numLine6S = res.data.data[0].KPI_VALUE;
          options.option4.radar.indicator[1].name = res.data.data[0].KPI_NAME;
          // 长春
          this.numLine3S = res.data.data[1].KPI_VALUE;
          options.option4.radar.indicator[0].name = res.data.data[1].KPI_NAME;
          // 四平
          this.numLine4S = res.data.data[2].KPI_VALUE;
          options.option4.radar.indicator[3].name = res.data.data[2].KPI_NAME;
          // 松原
          this.numLine5S = res.data.data[3].KPI_VALUE;
          options.option4.radar.indicator[2].name = res.data.data[3].KPI_NAME;
        }
        options.option4.series[0].data[0].value = [this.numLine3S, this.numLine4S, this.numLine5S, this.numLine6S]
        this.chart4.setOption(options.option4);
      })
      // 站点完好率
      this.$http.indi.get('jgt0035', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numLine1S = res.data.data[0].KPI_VALUE;
        }
      })
      // 影响里程
      this.$http.indi.get('jgt0036', {dimension_type: '全部高铁'}, res => {
        if (res.data.data && res.data.data.length > 0) {
          this.numLine2S = res.data.data[0].KPI_VALUE;
        }
      })
    }
  },
  watch: {
    // belongname() {
    //   this.loadData();
    // }
    region(v) {
      this.loadData(v)
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
    if (this.chart4) {
      this.chart4.dispose();
    }
    if (this.chart5) {
      this.chart5.dispose();
    }
    if (this.chart21) {
      this.chart21.dispose();
    }
    if (this.chart22) {
      this.chart22.dispose();
    }
  }
}
</script>
