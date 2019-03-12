export default {
  optionBgForChina: {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data: ['北京 Top10'],
      textStyle: {
        color: '#fff'
      },
      selectedMode: 'single'
    },
    geo: {
      map: 'china',
      label: {
        normal: {
          show: false,
          color: '#cfdef7'
        },
        emphasis: {
          show: false
        }
      },
      left: 170,
      top: 98,
      zoom: 1.1,
      roam: false,
      itemStyle: {
        normal: {
          areaColor: '#0e2f71',
          borderColor: '#134193',
          borderWidth: 2
        }
      },
      regions: [{
        name: '南海诸岛',
        value: 0,
        itemStyle: {
          normal: {
            show: false,
            opacity: 0
          },
          emphasis: {
            show: false
          }
        },
        label: {
          normal: {
            show: false,
            opacity: 0
          },
          emphasis: {
            show: false
          }
        }
      }],
      silent: true
    },
    series: {
      // name: 'Top10',
      type: 'lines'
      // zlevel: 1,
      // effect: {
      //   show: true,
      //   period: 6,
      //   trailLength: 0.7,
      //   color: '#fff',
      //   symbolSize: 3
      // },
      // lineStyle: {
      //   normal: {
      //     color: 'red',
      //     width: 0,
      //     curveness: 0.2
      //   }
      // },
      // data: {
      //   coords: [
      //     [120, 66], // 起点
      //     [122, 67] // 终点
      //   ],
      //   lineStyle: {}
      // }
    }
  },
  optionForChina: {
    title: {
      text: '统计时间：截止20XX年XX月XX日',
      left: 50,
      top: 32,
      textStyle: {
        color: '#caddff',
        fontSize: 18
        // lineHeight: 24
      }
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data: ['北京 Top10'],
      textStyle: {
        color: '#fff'
      },
      selectedMode: 'single'
    },
    geo: {
      map: 'china',
      label: {
        normal: {
          show: true,
          color: '#cfdef7',
          fontSize: 17,
          fontWeight: 200
        },
        emphasis: {
          show: true,
          color: '#cfdef7',
          fontSize: 17,
          fontWeight: 200
        }
      },
      left: 180,
      top: 68,
      zoom: 1.1,
      roam: false,
      itemStyle: {
        normal: {
          areaColor: '#1956c3',
          borderColor: '#6f99e9',
          borderWidth: 2
        },
        emphasis: {
          areaColor: '#1956c3',
          borderColor: '#ccc',
          borderWidth: 2
        }
      },
      regions: [{
        name: '南海诸岛',
        value: 0,
        itemStyle: {
          normal: {
            show: false,
            opacity: 0
          },
          emphasis: {
            show: false
          }
        },
        label: {
          normal: {
            show: false,
            opacity: 0
          },
          emphasis: {
            show: false
          }
        }
      }],
      silent: true
    },
    visualMap: {
      min: 0,
      max: 500,
      calculable: true,
      inRange: {
        color: ['#19fe3e', '#d9e308', '#fc1300']
      },
      textStyle: {
        color: '#fff',
        fontFamily: 'PixelLCD'
      },
      // dimension: 0,
      itemWidth: 14,
      itemHeight: 160,
      left: 48,
      bottom: 16,
      hoverLink: false
    },
    series: [
      {
        name: '',
        type: 'lines',
        zlevel: 1,
        // coordinateSystem: 'geo',
        effect: {
          show: true,
          period: 6,
          trailLength: 0.8,
          color: '#ccc',
          symbol: 'pin',
          symbolSize: 12
        },
        lineStyle: {
          normal: {
            // color: '#23e725',
            width: 1,
            curveness: 0.2
          }
        },
        data: [
          {
            coords: [
              [125.03, 46.58],
              [127.9688, 45.368]
            ],
            value: 0
          },
          {
            coords: [
              [125.03, 46.58],
              [105.03, 26.58]
            ],
            value: 400
          }
        ],
        symbolSize: 10
      },
      {
        name: '',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: [
          {
            name: '111111',
            value: [132.5, 46.5, 100]
          },
          {
            name: '222222',
            value: [115.03, 36.58, 200]
          },
          {
            name: '333333',
            value: [105.03, 26.58, 300]
          }
        ],
        symbolSize: function(val) {
          // return val[2] / 10;
          return 12;
        },
        tooltip: {
          formatter: function(params) {
            // console.log(params);
            return `省份：${params.data.name}<br>漫入总数：${params.data.value[2]}`
          }
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        // hoverAnimation: true,
        label: {
          normal: {
            formatter: function(params) {
              return params.data.value[2];
            },
            position: [-10, 24],
            show: true,
            // color: '#ffd800',
            textBorderColor: 'black',
            textBorderWidth: 4,
            textShadowColor: 'black',
            textShadowBlur: 4,
            fontSize: 20,
            fontWeight: 400
          }
        },
        itemStyle: {
          normal: {
            color: '#f4e925',
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        zlevel: 1
      }
    ]
  },
  optionBgForJilin: {
    tooltip: {
      trigger: 'item'
    },
    geo: {
      map: 'jilin',
      label: {
        normal: {
          show: false,
          color: '#cfdef7'
        },
        emphasis: {
          show: false
        }
      },
      left: 170,
      top: 128,
      zoom: 1.05,
      roam: false,
      itemStyle: {
        normal: {
          areaColor: '#0e2f71',
          borderColor: '#134193',
          borderWidth: 2
        }
      },
      silent: true
    },
    series: {
      // name: 'Top10',
      type: 'lines'
      // zlevel: 1,
      // effect: {
      //   show: true,
      //   period: 6,
      //   trailLength: 0.7,
      //   color: '#fff',
      //   symbolSize: 3
      // },
      // lineStyle: {
      //   normal: {
      //     color: 'red',
      //     width: 0,
      //     curveness: 0.2
      //   }
      // },
      // data: {
      //   coords: [
      //     [120, 66], // 起点
      //     [122, 67] // 终点
      //   ],
      //   lineStyle: {}
      // }
    }
  },
  optionForJilin: {
    title: {
      text: '统计时间：截止20XX年XX月XX日',
      left: 50,
      top: 32,
      textStyle: {
        color: '#caddff',
        fontSize: 18
        // lineHeight: 24
      }
    },
    tooltip: {
      trigger: 'item'
    },
    // geo: [
    //   {
    //     map: 'jilin',
    //     label: {
    //       normal: {
    //         show: true,
    //         color: 'black',
    //         fontSize: 20,
    //         fontWeight: 500,
    //         // textShadowColor: 'black',
    //         // textShadowBlur: 6,
    //         formatter: (params) => {
    //           // console.log(params);
    //         }
    //       },
    //       emphasis: {
    //         show: true,
    //         color: 'black',
    //         fontSize: 27,
    //         fontWeight: 500
    //       }
    //     },
    //     left: 180,
    //     top: 68,
    //     zoom: 1.1,
    //     roam: false,
    //     itemStyle: {
    //       normal: {
    //         // areaColor: '#1956c3',
    //         borderColor: '#6f99e9',
    //         borderWidth: 2
    //       },
    //       emphasis: {
    //         // areaColor: '#1956c3',
    //         borderColor: '#6f99e9',
    //         borderWidth: 2
    //       }
    //     }
    //     // silent: true
    //   }
    // ],
    visualMap: {
      min: 0,
      max: 500,
      calculable: true,
      inRange: {
        color: ['#19fe3e', '#d9e308', '#fc1300']
      },
      textStyle: {
        color: '#fff',
        fontFamily: 'PixelLCD'
      },
      // dimension: 0,
      itemWidth: 14,
      itemHeight: 160,
      left: 48,
      bottom: 16,
      hoverLink: false
    },
    series: [
      {
        name: '',
        type: 'map',
        mapType: 'jilin',
        // geoIndex: 0,
        left: 180,
        top: 96,
        zoom: 1.05,
        roam: false,
        showLegendSymbol: false,
        label: {
          normal: {
            show: true,
            color: 'black',
            fontSize: 20,
            fontWeight: 500,
            position: 'inside',
            // textBorderColor: 'black',
            // textBorderWidth: 2
            // textShadowColor: 'black',
            // textShadowBlur: 6,
            // formatter: '{b0}: <br />{c0}'
            formatter: ['{a|{b0}}', '{b|{c0}}'].join('\n'),
            rich: {
              a: {
                color: 'black',
                fontSize: 20
                // lineHeight: 10
              },
              b: {
                color: 'black',
                height: 30,
                fontSize: 20
              }
            }
          },
          emphasis: {
            show: false,
            color: 'black',
            fontSize: 27,
            fontWeight: 500
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#1956c3',
            borderColor: '#6f99e9',
            borderWidth: 2
          },
          emphasis: {
            areaColor: 'white',
            borderColor: 'white',
            borderWidth: 2
          }
        },
        silent: true,
        // tooltip: {show: false},
        data: [
          {
            name: '白城',
            value: Math.floor(500 * Math.random())
          },
          {
            name: '松原',
            value: Math.floor(500 * Math.random())
          },
          {
            name: '长春',
            value: Math.floor(500 * Math.random())
          },
          {
            name: '四平',
            value: Math.floor(500 * Math.random())
          },
          {
            name: '辽源',
            value: Math.floor(500 * Math.random())
          },
          {
            name: '吉林',
            value: Math.floor(500 * Math.random())
          },
          {
            name: '通化',
            value: Math.floor(500 * Math.random())
          },
          {
            name: '白山',
            value: Math.floor(500 * Math.random())
          },
          {
            name: '延吉',
            value: Math.floor(500 * Math.random())
          }
        ]
      }
      // {
      //   name: '',
      //   type: 'lines',
      //   zlevel: 1,
      //   // coordinateSystem: 'geo',
      //   effect: {
      //     show: true,
      //     period: 6,
      //     trailLength: 0.8,
      //     // color: 'white',
      //     symbol: 'pin',
      //     symbolSize: 14
      //   },
      //   lineStyle: {
      //     normal: {
      //       // color: '#23e725',
      //       width: 1,
      //       curveness: 0.2
      //     }
      //   },
      //   data: [
      //     {
      //       coords: [
      //         [125.03, 46.58],
      //         [115.03, 36.58]
      //       ],
      //       value: 0
      //     },
      //     {
      //       coords: [
      //         [125.03, 46.58],
      //         [105.03, 26.58]
      //       ],
      //       value: 400
      //     }
      //   ],
      //   symbolSize: 10
      // },
      // {
      //   name: 'Top 5',
      //   type: 'effectScatter',
      //   coordinateSystem: 'geo',
      //   data: [
      //     {
      //       name: '222222',
      //       value: [115.03, 36.58, 200]
      //     },
      //     {
      //       name: '333333',
      //       value: [105.03, 26.58, 300]
      //     }
      //   ],
      //   symbolSize: function(val) {
      //     return val[2] / 10;
      //   },
      //   showEffectOn: 'render',
      //   rippleEffect: {
      //     brushType: 'stroke'
      //   },
      //   hoverAnimation: true,
      //   label: {
      //     normal: {
      //       formatter: '{b}',
      //       position: 'right',
      //       show: true
      //     }
      //   },
      //   itemStyle: {
      //     normal: {
      //       color: '#f4e925',
      //       shadowBlur: 10,
      //       shadowColor: '#333'
      //     }
      //   },
      //   zlevel: 1
      // }
    ]
  }
}
