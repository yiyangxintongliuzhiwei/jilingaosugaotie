import echarts from 'echarts';
export default {
  // 水球图
  option1: {
    grid: {
      left: '1%',
      right: '1%'
    },
    series: [
      {
        type: 'liquidFill',
        data: [
          {
            value: 0.55,
            itemStyle: {
              color: '#90f6f8'
            }
          },
          {
            value: 0.3,
            itemStyle: {
              color: '#90f6f8'
            }
          }
        ],
        radius: '97%',
        outline: {
          itemStyle: {
            borderWidth: 1,
            borderColor: '#62def5'
          }
        },
        backgroundStyle: {
          color: '#11e4f1',
          borderWidth: 7,
          borderColor: '#018899'
        },
        label: {
          // show: true,
          normal: {
            textStyle: {
              color: '#fc6f12',
              // insideColor: '#fc6f12',
              fontSize: 23,
              fontFamily: 'MFLangQian'
            }
          }
        }
      }
    ]
  },
  option2: {
    grid: {
      left: '1%',
      right: '1%'
    },
    series: [
      {
        type: 'liquidFill',
        data: [
          {
            value: 0.55,
            itemStyle: {
              color: '#90f6f8'
            }
          },
          {
            value: 0.3,
            itemStyle: {
              color: '#90f6f8'
            }
          }
        ],
        radius: '97%',
        outline: {
          itemStyle: {
            borderWidth: 1,
            borderColor: '#62def5'
          }
        },
        backgroundStyle: {
          color: '#11e4f1',
          borderWidth: 7,
          borderColor: '#018899'
        },
        label: {
          // show: true,
          normal: {
            textStyle: {
              color: '#fc6f12',
              // insideColor: '#fc6f12',
              fontSize: 23,
              fontFamily: 'MFLangQian'
            }
          }
        }
      }
    ]
  },
  // 极坐标
  option3: {
    // 角度轴
    angleAxis: {
      show: true,
      startAngle: 180,
      type: 'category',
      // data: ['吉林', '松原', '周三', '周四', '周五', '周六', '长春', '四平'],
      data: [
        {
          value: '吉林',
          // 突出周一
          textStyle: {
            fontSize: 17,
            color: '#e5f1ff',
            padding: [0, 0, 35, 0]
          }
        },
        {
          value: '松原',
          // 突出周一
          textStyle: {
            fontSize: 17,
            color: '#e5f1ff',
            padding: [0, 0, 10, 0]
          }
        },
        {
          value: '长春',
          textStyle: {
            fontSize: 17,
            color: '#e5f1ff',
            padding: [0, 0, 10, 0]
          }
        },
        {
          value: '四平',
          textStyle: {
            fontSize: 17,
            color: '#e5f1ff',
            padding: [0, 0, 10, 0]
          }
        },
        '周三', '周四', '周五', '周六'
      ],
      z: 10,
      axisLine: {
        show: false
      }
    },
    // 径向轴
    radiusAxis: {
      show: false,
      // 径向轴留白
      boundaryGap: ['90%', '90%']
    },
    polar: {
    },
    splitArea: {
      areaStyle: {
        color: ['green', 'rgba(200,200,200,0.3)']
      }
    },
    splitLine: {
      show: false
    },
    tooltip: {
      show: false,
      position: ['10%', '10%']
    },
    dataset: {
      source: [
        ['product', '2019']
      ]
    },
    series: [
      {
        type: 'bar',
        data: [60, 50, 30, 40, 30, 50, 60, 50],
        coordinateSystem: 'polar',
        name: '高负荷小区数',
        stack: 'a',
        itemStyle: {
          // color: '#e65312'
          normal: {
            label: {
              show: true,
              // formatter: '{@2019}',
              color: '#feff42',
              fontSize: 14,
              fontFamily: 'MF_LangQian'
            },
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#e65312'
            }, {
              offset: 0.4,
              color: '#eda70f'
            }])
          }
        }
      },
      {
        type: 'bar',
        data: [50, 40, 60, 30, 30, 60, 30, 40],
        coordinateSystem: 'polar',
        name: '非高负荷小区数',
        stack: 'a',
        itemStyle: {
          // color: '#2cc2d4'
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#2cc2d4'
          }, {
            offset: 0.9,
            color: '#2ceeb6'
          }])
        },
        label: {
          show: true,
          // formatter: '{@2019}',
          color: '#feff42',
          fontSize: 14,
          fontFamily: 'MF_LangQian',
          position: 'inside'
        }
      }
    ],
    legend: {
      show: false,
      data: ['高负荷小区数', '非高负荷小区数'],
      textStyle: {
        color: '#e5f1ff',
        fontSize: 17,
        fontFamily: 'MF_LangQian'
      },
      top: 200
    }
  },
  // 雷达图 1
  option4: {
    title: {
      // text: '基础雷达图'
    },
    tooltip: {},
    legend: {
      show: false,
      data: ['无线利用率', '无线利用率']
      // textStyle: {
      //   show: false
      // }
    },
    radar: {
        // shape: 'circle',
      name: {
        textStyle: {
          color: '#e5f1ff',
          padding: [-3, 0, 0, -3],
          fontFamily: 'MF_LangQian',
          fontSize: 18
        }
      },
      // 设置雷达图中间射线的颜色
      axisLine: {
        lineStyle: {
          color: 'rgba(38,60,142,1)'
        }
      },
      indicator: [
        {name: '长春'},
        {name: '吉林'},
        {name: '松原'},
        {name: '四平'}
      ],
      splitArea: {
        show: true,
        areaStyle: {
          color: 'rgba(1,38,64,1)', // 图表背景的颜色
          borderColor: 'rgba(47,91,162,1)',
          borderWidth: '4'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: 'rgba(131,141,158,0)' // 设置网格的颜色,透明度为0，即隐藏了网格
        }
      }
    },
    series: [
      {
        name: '无线利用率',
        type: 'radar',
        data: [
          {
            value: [4300, 10000, 28000, 32000],
            name: '无线利用率',
            lineStyle: {
              color: '#33ff77'
            },
            // 是否显示数值,此处不显示
            label: {
              normal: {
                show: false,
                formatter: (params, any) => {
                  return params.value
                }
              }
            }
          }
        ]
      }
      // {
      //   name: '预算 vs 开销',
      //   type: 'radar',
      //   data: [
      //     {
      //       value: [5000, 14000, 28000, 31000],
      //       name: '实际开销',
      //       lineStyle: {
      //         color: '#dde2e6'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  // 雷达图2
  option5: {
    title: {
      // text: '基础雷达图'
    },
    tooltip: {},
    legend: {
      show: false,
      data: ['站点完好率', '站点完好率2']

    },
    radar: {
      name: {
        textStyle: {
          color: '#e5f1ff',
          padding: [-3, 0, 0, -3],
          fontFamily: 'MF_LangQian',
          fontSize: 18
        }
      },
      // 设置雷达图中间射线的颜色
      axisLine: {
        lineStyle: {
          color: 'rgba(38,60,142,1)'
        }
      },
      indicator: [
        // {name: '长春', max: 6500},
        // {name: '吉林', max: 16000},
        // {name: '松原', max: 30000},
        // {name: '四平', max: 38000}
        {text: '长春'},
        {text: '吉林'},
        {text: '松原'},
        {text: '四平'}
      ],
      splitArea: {
        show: true,
        areaStyle: {
          color: 'rgba(1,38,64,1)', // 图表背景的颜色
          borderColor: 'rgba(47,91,162,1)',
          borderWidth: '4'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: 'rgba(131,141,158,0)' // 设置网格的颜色,透明度为0，即隐藏了网格
        }
      }
    },
    series: [
      {
        name: '预算 vs 开销',
        type: 'radar',
        data: [
          {
            value: [4300, 10000, 28000, 35000],
            name: '站点完好率',
            lineStyle: {
              // 黄色
              color: '#e0e93b'
            },
            // 是否显示数值,此处不显示
            label: {
              normal: {
                show: false,
                formatter: (params, any) => {
                  return params.value
                }
              }
            }
          }
        ]
      }
      // {
      //   name: '预算 vs 开销',
      //   type: 'radar',
      //   data: [
      //     {
      //       value: [5000, 14000, 28000, 31000],
      //       name: '实际开销',
      //       lineStyle: {
      //         color: '#dde2e6'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  // 柱状图 1
  option21: {
    title: {
      show: true,
      text: '单位(Erl)',
      textStyle: {
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      top: 0,
      right: 15
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      left: '5%',
      top: '10%',
      right: '6%',
      bottom: '30%',
      borderColor: '#0a2549',
      containLabel: true,
      borderWidth: 4
    },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '306',
      height: '44',
      orient: 'vertical',
      bottom: 0,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 16
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '当前GSM话务量'
        },
        {
          name: '当前VOLTE话务量'
        },
        {
          name: '日常GSM话务量',
          icon: 'line'
        },
        {
          name: '日常VOLTE话务量',
          icon: 'line'
        }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      type: 'category',
      // name: '(TB)',
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        lineStyle: {
          color: '#0896a9',
          width: 2,
          fontFamily: 'MF_LangQian'
        }
      },
      // 坐标轴刻度标签的相关设置
      axisLabel: {
        show: true,
        fontSize: 14,
        margin: 12,
        fontFamily: 'Microsoft YaHei',
        color: '#ffffff'
      },
      // 坐标轴刻度相关设置
      axisTick: {
        show: false
      },
      data: ['13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '13:45', '14:00', '14:15', '14:30', '14:45', '15:00', '16:00', '16:15', '16:30']
    },
    // 直角坐标系 grid 中的 y 轴
    yAxis: {
      type: 'value',
      show: true,
      splitNumber: 4,
      // y轴轴线颜色
      axisLine: {
        show: true,
        lineStyle: {
          color: '#0896a9',
          width: 2
        }
      },
      axisLabel: {
        show: true,
        fontSize: 18,
        margin: 15,
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      // 坐标轴在 grid 区域中的分隔线
      splitLine: {
        show: false,
        lineStyle: {
          color: '#294277',
          width: 1,
          type: 'solid'
        }
      },
      axisTick: {
        show: false
      }
    },
    // 系列列表
    series: [
      {
        type: 'bar',
        name: '当前GSM话务量',
        symbolSize: 2,
        // 柱条设置
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 绿色
            color: '#1fff90'
            // borderColor: '#14bf6e',
            // borderWidth: '5'
          }
        },
        // 区域填充样式
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              // color: 'rgba(101, 84, 170, 0.3)' // 0% 处的颜色
              color: '#276d85'
            }, {
              offset: 1,
              // color: 'rgba(16, 27, 77, 0)' // 100% 处的颜色
              color: '#011441'
            }], false)
          }
        },
        data: [46, 45, 58, 79, 46, 45, 58, 79, 46, 45, 58, 79, 46, 45, 58, 79]
      },
      {
        type: 'bar',
        name: '当前VOLTE话务量',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#d9ff40',
            // 拐点边框颜色
            // borderColor: '#94ae29',
            // borderWidth: '4',
            // 线条样式
            lineStyle: {
              normal: {
                // color: '#ac84fe',
                width: 2
              }
            }
          }
        },
        // 区域样式
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              // color: 'rgba(12, 42, 82, 0.8)' // 0% 处的颜色
              color: '#836bcd'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        data: [32, 22, 36, 26, 32, 22, 36, 26, 32, 22, 36, 26, 32, 22, 36, 26]
      },
      // 折线图
      {
        type: 'line',
        name: '日常GSM话务量',
        symbolSize: 2,
        smooth: true,
        // smooth: false,
        itemStyle: {
          normal: {
            color: '#1cef89',
            borderColor: '#1cef89',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                color: '#00ffaa',
                width: 2
              }
            }
          }
        },
        data: [46, 45, 58, 79, 46, 45, 58, 79, 46, 45, 58, 79, 46, 45, 58, 79]
      },
      {
        type: 'line',
        name: '日常VOLTE话务量',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#be8832',
            // 拐点边框颜色
            borderColor: '#be8832',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [32, 22, 36, 26, 32, 22, 36, 26, 32, 22, 36, 26, 32, 22, 36, 26]
      }
    ]
  },
  // 柱状图 2
  option22: {
    title: {
      show: true,
      text: '单位(GB)',
      textStyle: {
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      top: 0,
      right: 50
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      left: '10%',
      top: '10%',
      right: '10%',
      bottom: '30%',
      borderColor: '#0a2549',
      containLabel: true,
      borderWidth: 4
    },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '306',
      height: '44',
      orient: 'horizontal',
      bottom: 20,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 16
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '当前LTE流量'
        },
        {
          name: '日常LTE流量',
          icon: 'line'
        }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      type: 'category',
      // name: '(TB)',
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        lineStyle: {
          color: '#0896a9',
          width: 2,
          fontFamily: 'MF_LangQian'
        }
      },
      // 坐标轴刻度标签的相关设置
      axisLabel: {
        show: true,
        fontSize: 14,
        margin: 12,
        fontFamily: 'Microsoft YaHei',
        color: '#ffffff'
      },
      // 坐标轴刻度相关设置
      axisTick: {
        show: false
      },
      data: ['13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '13:45', '14:00', '14:15', '14:30', '14:45', '15:00', '16:00', '16:15', '16:30']
    },
    // 直角坐标系 grid 中的 y 轴
    yAxis: {
      type: 'value',
      show: true,
      splitNumber: 4,
      // y轴轴线颜色
      axisLine: {
        show: true,
        lineStyle: {
          color: '#0896a9',
          width: 2
        }
      },
      axisLabel: {
        show: true,
        fontSize: 18,
        margin: 15,
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      // 坐标轴在 grid 区域中的分隔线
      splitLine: {
        show: false,
        lineStyle: {
          color: '#294277',
          width: 1,
          type: 'solid'
        }
      },
      axisTick: {
        show: false
      }
    },
    // 系列列表
    series: [
      {
        type: 'bar',
        name: '当前LTE流量',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#d9ff40',
            // 拐点边框颜色
            // borderColor: '#94ae29',
            // borderWidth: '4',
            // 线条样式
            lineStyle: {
              normal: {
                // color: '#ac84fe',
                width: 2
              }
            }
          }
        },
        // 区域样式
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              // color: 'rgba(12, 42, 82, 0.8)' // 0% 处的颜色
              color: '#836bcd'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        data: [32, 22, 36, 26, 32, 22, 36, 26, 32, 22, 36, 26, 32, 22, 36, 26]
      },
      // 折线图
      {
        type: 'line',
        name: '日常LTE流量',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#ab3bdf',
            // 拐点边框颜色
            borderColor: '#ab3bdf',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [32, 22, 36, 26, 32, 22, 36, 26, 32, 22, 36, 26, 32, 22, 36, 26]
      }
    ]
  }
}
