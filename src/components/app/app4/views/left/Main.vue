<template>
    <view-template :interval="60" @interval="loadData">
      <div class="a4_left_container">
        <div class="mainTitle"></div>
        <div class="top">
          <div class="topTitle">{{currentArea}}</div>
          <div class="description">
            <!-- <div class="text" v-show="scrollShow" id="textScroll" v-model="currentAreaInfo">{{currentAreaInfo | ellipsis}}</div> -->
            <div class="text" v-show="scrollShow" id="textScroll" v-model="currentAreaInfo">{{currentAreaInfo}}</div>
            <div class="text" v-show="!scrollShow" id="textScroll2">
              <marquee direction="up" scrollamount="2" width="90%" height="100%" onmouseover="stop()" onmouseout="start()">{{currentAreaInfo}}</marquee>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottomTitle">实时业务质量监控</div>
          <swiper :options="swiperOption10" class="swiper" id="hide" v-show="region==='全省'">
            <swiper-slide>
              <div class="content">
                <div class="part1">
                  <div class="icon"></div>
                  <div class="contentTitle"></div>
                </div>
                <div class="part2">
                  <div class="chart1Box">
                    <div class="text">HTTP访问成功率</div>
                    <circleProgress v-bind="options1" class="chart1"></circleProgress>
                    <div class="count">
                      <counter :data="options1.data" :config="config2"></counter>
                    </div>
                  </div>
                  <div class="chart2Box">
                    <div class="text">TCP建立成功率</div>
                      <circleProgress v-bind="options2" class="chart2"></circleProgress>
                      <div class="count">
                        <counter :data="options2.data" :config="config2"></counter>
                      </div>
                  </div>
                  <!-- 访问时延 -->
                  <div class="time" v-for="item in items" :key="item.index" :style="item.style1">
                    <div class="text1">{{item.text1}}</div>
                    <div class="text2">{{item.text2}}</div>
                    <div class="text3">{{item.text3}}</div>
                    <div class="progressBox">
                      <div class="progress" :style="'width:' + item.num + '%'"></div>
                    </div>
                    <div class="count">
                      <counter :data="item.num" :config="item.config"></counter>
                    </div>
                  </div>
                  <!-- <div class="unitShiyan">({{unitShiyan}})</div> -->
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="content2">
                <div class="title2"></div>
                <!-- 表头 -->
                <div class="gaugeBox">
                  <div class="gauge" v-for="item in gauge" :key="item.index" :style="item.style">
                    {{item.text1}}
                    <br/>
                    ({{item.text2}})
                  </div>
                </div>
                <div class="itemBox">
                  <div class="item" v-for="item in table1" :key="item.index">
                    <div class="des">
                      <img :src="item.url" alt="通用" :onerror="errorImg" :style="item.styleTop">
                      <!-- {{item.text}} -->
                      <div class="text">{{item.text}}</div>
                    </div>
                      <div class="count">
                          <counter :data="item.num1" :config="config4"></counter>
                      </div>
                      <div class="count">
                          <counter :data="item.num2" :config="config5"></counter>
                      </div>
                      <div class="count">
                          <counter :data="item.num3" :config="config6"></counter>
                      </div>
                      <div class="count">
                          <counter :data="item.num4" :config="config4"></counter>
                      </div>
                      <div class="count">
                          <counter :data="item.num5" :config="config6"></counter>
                      </div>
                  </div>
                  <!-- <div class="itemBg"></div> -->
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <!-- 热门业务质量 -->
              <div class="content3">
                <div class="title3"></div>
                <div class="item" v-for="item in quality" :key="item.index">
                  <div class="itemTitle" :style="item.style1">{{item.title}}</div>
                  <div class="imgBox">
                    <img :src="item.url" alt="支付宝红包">
                  </div>
                </div>
                <div class="table">
                  <div class="tableItem" v-for="item in tableItem" :key="item.index">
                    <div class="text">{{item.text}}</div>
                    <div class="countBox">
                      <div class="count">
                        <counter :data="item.num" :config="item.config"></counter>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table2">
                  <div class="tableItem" v-for="item in tableItem2" :key="item.index">
                    <div class="text">{{item.text}}</div>
                    <div class="countBox">
                      <div class="count">
                        <counter :data="item.num" :config="item.config"></counter>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table3">
                  <div class="tableItem" v-for="item in tableItem3" :key="item.index">
                    <div class="text">{{item.text}}</div>
                    <div class="countBox">
                      <div class="count">
                        <counter :data="item.num" :config="item.config"></counter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div class="content" id="block" v-show="region!=='全省'">
            <div class="part1">
              <div class="icon"></div>
              <div class="contentTitle"></div>
            </div>
            <div class="part2">
              <div class="chart1Box">
                <div class="text">HTTP访问成功率</div>
                <circleProgress v-bind="options1" class="chart1"></circleProgress>
                <div class="count">
                  <counter :data="options1.data" :config="config2"></counter>
                </div>
              </div>
              <div class="chart2Box">
                <div class="text">TCP建立成功率</div>
                  <circleProgress v-bind="options2" class="chart2"></circleProgress>
                  <div class="count">
                    <counter :data="options2.data" :config="config2"></counter>
                  </div>
              </div>
              <!-- 访问时延 -->
              <div class="time" v-for="item in items" :key="item.index" :style="item.style1">
                <div class="text1">{{item.text1}}</div>
                <div class="text2">{{item.text2}}</div>
                <div class="text3">{{item.text3}}</div>
                <div class="progressBox">
                  <div class="progress" :style="'width:' + item.num + '%'"></div>
                </div>
                <div class="count">
                  <counter :data="item.num" :config="item.config"></counter>
                </div>
              </div>
              <!-- <div class="unitShiyan">({{unitShiyan}})</div> -->
            </div>
          </div>
          <span class="a2-swiper-roam10" id="roam" v-show="region === '全省'"></span>
        </div>
      </div>
    </view-template>
</template>
<script>
import './Main.scss'
export default {
  data() {
    return {
      swiperOption10: {
        // autoplay: false,
        autoplay: 30 * 1000,
        setWrapperSize: true,
        autoplayDisableOnInteraction: false,
        observeParents: true,
        direction: 'horizontal',
        pagination: '.a2-swiper-roam10',
        paginationClickable: true
      },
      currentArea: '全省',
      currentAreaInfo: '',
      // scrollShow: true,
      // unitShiyan: 'kpbs',
      errorImg: 'this.src="' + require('../../../../../../static/img/通用.png') + '"',
      text: '吉林移动场景监控大屏吉林移动场景监控大屏吉林移动场景监控大屏吉林移动场景监控大屏吉林移动场景监控大屏吉林移动场景监控大屏吉林移动场景监控大屏吉林移动场景监控大屏吉林移动场景监控大屏吉林移动场景监控大屏',
      items: [
        {
          num: 22,
          text1: 'HTTP',
          text2: '访问时延',
          text3: '(ms)',
          style1: 'position: absolute; top: 128px; left: 300px;',
          config: {
            justifyContent: 'center',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#20ff88',
                fontSize: 30,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 4 // 数字之间间距
            }
          }
        },
        {
          num: 22,
          text1: 'HTTP',
          text2: '下载速率',
          text3: '(kpbs)',
          style1: 'position: absolute; top: 128px; left: 690px;',
          config: {
            justifyContent: 'center',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#20ff88',
                fontSize: 30,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 4 // 数字之间间距
            }
          }
        },
        {
          num: 66,
          text1: 'TCP',
          text2: '建立时延',
          text3: '(ms)',
          style1: 'position: absolute; top: 325px; left: 300px;',
          config: {
            justifyContent: 'center',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#20ff88',
                fontSize: 30,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 4 // 数字之间间距
            }
          }
        },
        {
          num: 66,
          text1: 'HTTP',
          text2: '下载速率',
          text3: '(包>500kb)',
          style1: 'position: absolute; top: 325px; left: 690px;',
          config: {
            justifyContent: 'center',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#20ff88',
                fontSize: 30,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 4 // 数字之间间距
            }
          }
        }
      ],
      config1: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#20ff88',
            fontSize: 30,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 4 // 数字之间间距
        }
      },
      config2: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#e6f63b',
            fontSize: 27,
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
            color: '#e6f63b',
            fontSize: 27,
            fontWeight: 'normal',
            fontFamily: 'PixelLCD-7'
          }
        }
      },
      config3: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#20ff88',
            fontSize: 30,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 4 // 数字之间间距
        }
      },
      config4: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#8df9fb',
            fontSize: 27,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        }
      },
      config5: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#91f87c',
            fontSize: 27,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        }
      },
      config6: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#fbf155',
            fontSize: 27,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        }
      },
      config8: {
        justifyContent: 'center',
        numbers: {
          // 数字配置项
          textStyle: {
            color: '#fbf155',
            fontSize: 27,
            fontFamily: 'PixelLCD-7',
            fontWeight: 'normal'
          },
          animateFlag: true,
          animateType: 'scroll',
          letterSpacing: 3 // 数字之间间距
        }
      },
      // 进度圆环
      options1: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 1000,
        canvasWidth: 1000,
        coordinates: [96, 90], // 圆心坐标
        radius: 46, // 圆半径
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
          lineWidth: 16,
          lineCap: 'butt',
          lineDash: [10, 14]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      options2: {
        id: 'cricleProgress',
        /* 基础配置 */
        canvasHeight: 1000,
        canvasWidth: 1000,
        coordinates: [96, 90], // 圆心坐标
        radius: 46, // 圆半径
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
          lineWidth: 16,
          lineCap: 'butt',
          lineDash: [10, 14]
        },
        circleBackground: '',
        enableCircleBackground: true
      },
      gauge: [
        {text1: '当前在线用户数', text2: '万', style: 'color: #8ffdfc'},
        {text1: '流量', text2: 'GB', style: 'color: #94ff74'},
        {text1: '流量累计', text2: 'GB', style: 'color: #dbe26c'},
        {text1: 'HTTP响应成功率', text2: '%', style: 'color: #90fcff'},
        {text1: 'HTTP响应时延', text2: 'ms', style: 'color: #f5e164'}
        // {text1: '当前在线', text2: '用户数(万)', style: 'color: #8ffdfc'},
        // {text1: '流量', text2: '(GB)', style: 'color: #94ff74'},
        // {text1: '流量累计', text2: '(GB)', style: 'color: #dbe26c'},
        // {text1: 'HTTP响应', text2: '成功率(%)', style: 'color: #90fcff'},
        // {text1: 'HTTP响应', text2: '时延(ms)', style: 'color: #f5e164'}
      ],
      table1: [
        {text: '淘宝', num1: 22, num2: 33, num3: 44, num4: 55, url: require('../../../../../../static/img/通用.png'), styleTop: 'top: 207px;'},
        {text: '微信', num1: 22, num2: 33, num3: 44, num4: 55, url: require('../../../../../../static/img/通用.png'), styleTop: 'top: 277px;'},
        {text: '支付宝', num1: 22, num2: 33, num3: 44, num4: 55, url: require('../../../../../../static/img/通用.png'), styleTop: 'top: 347px;'},
        // {text: '网易云音乐', num1: 22, num2: 33, num3: 44, num4: 55, url: require('../../assets/img/' + 'taobao' + '.png'), styleTop: 'top: 420px;'},
        {text: '网易云音乐', num1: 22, num2: 33, num3: 44, num4: 55, url: require('../../../../../../static/img/' + '通用' + '.png'), styleTop: 'top: 420px;'},
        // {text: '网易云音乐', num1: 22, num2: 33, num3: 44, num4: 55, url: require('../../../../../../static/img/' + urlName + '.png'), styleTop: 'top: 420px;'},
        {text: '新浪微博', num1: 22, num2: 33, num3: 44, num4: 55, url: require('../../../../../../static/img/通用.png'), styleTop: 'top: 494px;'}
      ],
      quality: [
        // {title: '支付宝红包', style1: 'color: #65aff5', url: '../../assets/img/Alipay.png'},
        {title: '支付宝红包', style1: 'color: #65aff5', url: require('../../assets/img/Alipay.png')},
        {title: '微信红包', style1: 'color: #80e379', url: require('../../assets/img/wechat.png')},
        {title: '咪咕视频', style1: 'color: #af47db', url: require('../../assets/img/video.png')}
      ],
      tableItem: [
        { text: '在线用户数',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 3 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: '万人',
              marginLeft: 0,
              textStyle: {
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        },
        { text: '流量',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 3 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: 'G',
              marginLeft: 0,
              textStyle: {
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        },
        { text: '流量累计',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 3 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: 'G',
              marginLeft: 0,
              textStyle: {
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        },
        { text: '响应成功率',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
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
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        },
        { text: '响应时延',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 3 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: 'ms',
              marginLeft: 0,
              textStyle: {
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        }
      ],
      tableItem2: [
        { text: '在线用户数',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 3 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: '万人',
              marginLeft: 0,
              textStyle: {
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        },
        { text: '流量',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 3 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: 'G',
              marginLeft: 0,
              textStyle: {
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        },
        { text: '流量累计',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 3 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: 'G',
              marginLeft: 0,
              textStyle: {
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        },
        { text: '响应成功率',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
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
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        },
        { text: '响应时延',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 3 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: 'ms',
              marginLeft: 0,
              textStyle: {
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        }
      ],
      tableItem3: [
        { text: '在线用户数',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 3 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: '万人',
              marginLeft: 0,
              textStyle: {
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        },
        { text: '流量',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 3 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: 'G',
              marginLeft: 0,
              textStyle: {
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        },
        { text: '流量累计',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 3 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: 'G',
              marginLeft: 0,
              textStyle: {
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        },
        { text: '响应成功率',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
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
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        },
        { text: '响应时延',
          num: 88,
          config: {
            justifyContent: 'flex-end',
            numbers: {
              // 数字配置项
              textStyle: {
                color: '#fbf155',
                fontSize: 27,
                fontFamily: 'PixelLCD-7',
                fontWeight: 'normal'
              },
              animateFlag: true,
              animateType: 'scroll',
              letterSpacing: 3 // 数字之间间距
            },
            suffix: {
              // 后缀配置项
              content: 'ms',
              marginLeft: 0,
              textStyle: {
                color: '#fbf155',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'PixelLCD-7'
              }
            }
          }
        }
      ]
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    loadData() {
      this.changeRegion(this.region);
    },
    // 全省粒度
    initData() {
      // top部分：标题与文字
      this.$http.indi.get('jzb0001', { second_area_name: '全省' }, res => {
        this.currentArea = res.data.data[0].SECOND_AREA_NAME
        this.currentAreaInfo = res.data.data[0].KPI_VALUE
      })
      // 互联网业务质量
      // 清零
      this.items[0].num = 0;
      this.items[1].num = 0;
      this.items[2].num = 0;
      this.items[3].num = 0;
      this.options1.data = 0;
      this.options2.data = 0;
      this.$http.indi.get('jzb0002', { second_area_name: '全省' }, res => {
        res.data.data.forEach((ele, index) => {
          if (ele.NAME_ORDER === 1) {
            this.options1.data = ele.KPI_VALUE
          }
          if (ele.NAME_ORDER === 4) {
            this.options2.data = ele.KPI_VALUE
          }
          if (ele.NAME_ORDER === 2) {
            this.items[0].num = ele.KPI_VALUE
          }
          if (ele.NAME_ORDER === 3) {
            this.items[1].num = ele.KPI_VALUE
          }
          if (ele.NAME_ORDER === 5) {
            this.items[2].num = ele.KPI_VALUE
          }
          if (ele.NAME_ORDER === 6) {
            this.items[3].num = ele.KPI_VALUE
            // this.unitShiyan = ele.UNIT
          }
        });
      })
      // 流量App Top5
      // 数据清零
      for (var j = 0; j < this.table1.length; j++) {
        this.table1[j].num1 = 0;
        this.table1[j].num2 = 0;
        this.table1[j].num3 = 0;
        this.table1[j].num4 = 0;
        this.table1[j].num5 = 0;
      }
      this.$http.indi.get('jzb0003', { second_area_name: '全省' }, res => {
        res.data.data.forEach((ele, index) => {
          if (index < 5) {
            if (ele.ORDER_NAME === 1) {
              this.table1[0].num1 = ele.KPI_VALUE
              this.table1[0].text = ele.APP_TYPE
              this.gauge[0].text1 = ele.KPI_NAME
              this.gauge[0].text2 = ele.UNIT
              try {
                this.table1[0].url = require('../../../../../../static/img/' + ele.APP_TYPE + '.png')
              } catch (err) {
                console.log('jzb0003 img[0] does not exist')
              }
            }
            if (ele.ORDER_NAME === 2) {
              this.table1[0].num2 = ele.KPI_VALUE
              this.gauge[1].text1 = ele.KPI_NAME
              this.gauge[1].text2 = ele.UNIT
            }
            if (ele.ORDER_NAME === 3) {
              this.table1[0].num3 = ele.KPI_VALUE
              this.gauge[2].text1 = ele.KPI_NAME
              this.gauge[2].text2 = ele.UNIT
            }
            if (ele.ORDER_NAME === 4) {
              this.table1[0].num4 = ele.KPI_VALUE
              this.gauge[3].text1 = ele.KPI_NAME
              this.gauge[3].text2 = ele.UNIT
            }
            if (ele.ORDER_NAME === 5) {
              this.table1[0].num5 = ele.KPI_VALUE
              this.gauge[4].text1 = ele.KPI_NAME
              this.gauge[4].text2 = ele.UNIT
            }
          }
          if (index > 4 && index < 10) {
            if (ele.ORDER_NAME === 1) {
              this.table1[1].num1 = ele.KPI_VALUE
              this.table1[1].text = ele.APP_TYPE
              try {
                this.table1[1].url = require('../../../../../../static/img/' + ele.APP_TYPE + '.png')
              } catch (err) {
                console.log('jzb0003 img[1] does not exist')
              }
            }
            if (ele.ORDER_NAME === 2) {
              this.table1[1].num2 = ele.KPI_VALUE
            }
            if (ele.ORDER_NAME === 3) {
              this.table1[1].num3 = ele.KPI_VALUE
            }
            if (ele.ORDER_NAME === 4) {
              this.table1[1].num4 = ele.KPI_VALUE
            }
            if (ele.ORDER_NAME === 5) {
              this.table1[1].num5 = ele.KPI_VALUE
            }
          }
          if (index > 9 && index < 15) {
            if (ele.ORDER_NAME === 1) {
              this.table1[2].num1 = ele.KPI_VALUE
              this.table1[2].text = ele.APP_TYPE
              try {
                this.table1[2].url = require('../../../../../../static/img/' + ele.APP_TYPE + '.png')
              } catch (err) {
                console.log('jzb0003 img[1] does not exist')
              }
            }
            if (ele.ORDER_NAME === 2) {
              this.table1[2].num2 = ele.KPI_VALUE
            }
            if (ele.ORDER_NAME === 3) {
              this.table1[2].num3 = ele.KPI_VALUE
            }
            if (ele.ORDER_NAME === 4) {
              this.table1[2].num4 = ele.KPI_VALUE
            }
            if (ele.ORDER_NAME === 5) {
              this.table1[2].num5 = ele.KPI_VALUE
            }
          }
          if (index > 14 && index < 20) {
            if (ele.ORDER_NAME === 1) {
              this.table1[3].num1 = ele.KPI_VALUE
              this.table1[3].text = ele.APP_TYPE
              try {
                this.table1[3].url = require('../../../../../../static/img/' + ele.APP_TYPE + '.png')
              } catch (err) {
                console.log('jzb0003 img[1] does not exist')
              }
            }
            if (ele.ORDER_NAME === 2) {
              this.table1[3].num2 = ele.KPI_VALUE
            }
            if (ele.ORDER_NAME === 3) {
              this.table1[3].num3 = ele.KPI_VALUE
            }
            if (ele.ORDER_NAME === 4) {
              this.table1[3].num4 = ele.KPI_VALUE
            }
            if (ele.ORDER_NAME === 5) {
              this.table1[3].num5 = ele.KPI_VALUE
            }
          }
          if (index > 19 && index < 25) {
            if (ele.ORDER_NAME === 1) {
              this.table1[4].num1 = ele.KPI_VALUE
              this.table1[4].text = ele.APP_TYPE
              try {
                this.table1[4].url = require('../../../../../../static/img/' + ele.APP_TYPE + '.png')
              } catch (err) {
                console.log('jzb0003 img[1] does not exist')
              }
            }
            if (ele.ORDER_NAME === 2) {
              this.table1[4].num2 = ele.KPI_VALUE
            }
            if (ele.ORDER_NAME === 3) {
              this.table1[4].num3 = ele.KPI_VALUE
            }
            if (ele.ORDER_NAME === 4) {
              this.table1[4].num4 = ele.KPI_VALUE
            }
            if (ele.ORDER_NAME === 5) {
              this.table1[4].num5 = ele.KPI_VALUE
            }
          }
        });
      })
      // 热门业务质量
      // 数据清零
      for (var i = 0; i < this.tableItem.length; i++) {
        this.tableItem[i].num = 0;
        this.tableItem2[i].num = 0;
        this.tableItem3[i].num = 0;
      }
      this.$http.indi.get('jzb0004', { second_area_name: '全省' }, res => {
        res.data.data.forEach((ele) => {
          if (ele.ORDER_NAME === 1) {
            this.tableItem[0].num = ele.KPI_VALUE
          }
          if (ele.ORDER_NAME === 2) {
            this.tableItem[1].num = ele.KPI_VALUE
          }
          if (ele.ORDER_NAME === 3) {
            this.tableItem[2].num = ele.KPI_VALUE
          }
          if (ele.ORDER_NAME === 4) {
            this.tableItem[3].num = ele.KPI_VALUE
          }
          if (ele.ORDER_NAME === 5) {
            this.tableItem[4].num = ele.KPI_VALUE
          }
        });
      })
      this.$http.indi.get('jzb0023', { second_area_name: '全省' }, res => {
        res.data.data.forEach((ele) => {
          if (ele.ORDER_NAME === 1) {
            this.tableItem2[0].num = ele.KPI_VALUE
          }
          if (ele.ORDER_NAME === 2) {
            this.tableItem2[1].num = ele.KPI_VALUE
          }
          if (ele.ORDER_NAME === 3) {
            this.tableItem2[2].num = ele.KPI_VALUE
          }
          if (ele.ORDER_NAME === 4) {
            this.tableItem2[3].num = ele.KPI_VALUE
          }
          if (ele.ORDER_NAME === 5) {
            this.tableItem2[4].num = ele.KPI_VALUE
          }
        });
      })
      this.$http.indi.get('jzb0024', { second_area_name: '全省' }, res => {
        res.data.data.forEach((ele) => {
          if (ele.ORDER_NAME === 1) {
            this.tableItem3[0].num = ele.KPI_VALUE
          }
          if (ele.ORDER_NAME === 2) {
            this.tableItem3[1].num = ele.KPI_VALUE
          }
          if (ele.ORDER_NAME === 3) {
            this.tableItem3[2].num = ele.KPI_VALUE
          }
          if (ele.ORDER_NAME === 4) {
            this.tableItem3[3].num = ele.KPI_VALUE
          }
          if (ele.ORDER_NAME === 5) {
            this.tableItem3[4].num = ele.KPI_VALUE
          }
        });
      })
    },
    // 区域粒度
    changeRegion(regionName) {
      this.currentArea = regionName;
      if (!regionName) return;
      if (regionName !== '全省') {
        // top部分：标题与文字
        this.$http.indi.get('jzb0001', { second_area_name: regionName }, res => {
          this.currentAreaInfo = res.data.data[0].KPI_VALUE
        })
        // 互联网业务质量
        // 数据清零
        this.items[0].num = 0;
        this.items[1].num = 0;
        this.items[2].num = 0;
        this.items[3].num = 0;
        this.options1.data = 0;
        this.options2.data = 0;
        this.$http.indi.get('jzb0002', { second_area_name: regionName }, res => {
          res.data.data.forEach((ele, index) => {
            if (ele.NAME_ORDER === 1) {
              this.options1.data = ele.KPI_VALUE
            }
            if (ele.NAME_ORDER === 4) {
              this.options2.data = ele.KPI_VALUE
            }
            if (ele.NAME_ORDER === 2) {
              this.items[0].num = ele.KPI_VALUE
            }
            if (ele.NAME_ORDER === 3) {
              this.items[1].num = ele.KPI_VALUE
            }
            if (ele.NAME_ORDER === 5) {
              this.items[2].num = ele.KPI_VALUE
            }
            if (ele.NAME_ORDER === 6) {
              this.items[3].num = ele.KPI_VALUE
              // this.unitShiyan = ele.UNIT
            }
          })
        })
      } else {
        this.initData();
      }
    }
  },
  beforeDestroy() {},
  watch: {
    region(v) {
      this.changeRegion(v)
    }
  },
  computed: {
    region() {
      return this.$store.state.regionName;
    },
    scrollShow() {
      return this.currentAreaInfo.length < 100
    }
  },
  components: {}
}
</script>
