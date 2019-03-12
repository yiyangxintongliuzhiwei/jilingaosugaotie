import echarts from 'echarts';
export default {
  // 柱状图
  option1: {
    // 柱条宽度
    barWidth: 20,
    barCategoryGap: '10',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      // left: 23,
      // top: 25,
      // right: 24,
      bottom: 40,
      borderColor: '#0a2549',
      containLabel: true,
      borderWidth: 4
    },
    // 图例组件
    legend: {
      show: true,
      left: 'center',
      bottom: 0,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 16
      },
      // 图例每项的间隔
      itemGap: 104,
      // 图例的数据数组
      data: [
        {
          name: '超长退服RRU'
        },
        {name: '超频退服RRU'}
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
      data: ['长春', '四平', '吉林', '松原']
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
        name: '超长退服RRU',
        symbolSize: 2,
        // smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            color: '#0ac5d6'
            // borderColor: 'rgba(4, 115, 136, 0.8)',
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
        data: [36, 25, 28, 39]
      },
      {
        type: 'bar',
        name: '超频退服RRU',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 本应该是拐点颜色，此处成了线条颜色，不知道啥原因
            color: '#f1e40d',
            // 拐点边框颜色
            // borderColor: 'rgba(163, 151, 5, 0.7)',
            // borderWidth: '5',
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
        data: [32, 22, 36, 26]
      }
    ]
  },
  // app使用次数-饼图
  option9: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    // 图表与图例的距离，此处无用，咋回事？
    grid: {
      show: false,
      // left: 23,
      // top: 25,
      // right: 24,
      bottom: 40
    },
    // 图例组件
    legend: {
      show: true,
      bottom: 4,
      // 图例：垂直布局
      orient: 'vertical',
      // 图例每项的间隔
      // itemGap: 36,
      width: 320,
      height: 52,
      textStyle: {
        color: '#ffffff',
        fontSize: 16
      },
      // 控制块的宽高
      itemWidth: 12,
      itemHeight: 12,
      // 图例的数据数组
      data: ['VIVO', 'LG', '三星', '荣耀', '华为', '中兴']
      // data: [
      //   {
      //     name: '超长退服RRU'
      //   },
      //   {name: '超频退服RRU'}
      // ]
    },
    dataset: {
      source: [
        ['product', '2019']
        // ['VIVO', 41.1],
        // ['荣耀', 86.5],
        // ['LG', 24.1],
        // ['华为', 55.21],
        // ['三星', 25.21],
        // ['中兴', 35.21]
        // [42],
        // [56],
        // [12],
        // [24],
        // [36],
        // [45]
      ]
    },
    series: [
      {
        // dimensions: ['VIVO', '荣耀', 'LG', '华为', '三星', '中兴'],
        name: '终端比例',
        type: 'pie',
        radius: ['24%', '38%'],
        // center: ['50%', '56%'],
        center: ['48%', '45%'],
        avoidLabelOverlap: false,
        legendHoverLink: true,
        hoverAnimation: true,
        // 标签，与引导线labelLine联合使用
        label: {
          show: true,
          formatter: '{@2019}\n\n{d}%',
          color: '#feff42',
          fontSize: 14,
          fontFamily: 'MF_LangQian'
          // normal: {
          //   // position: 'center'
          //   position: 'outside',
          //   textStyle: {
          //     color: 'rgba(255, 255, 255, 1)'
          //   }
          //   // formatter: '{@2012}\n{d}%'
          // }
        },
        // 引导线
        labelLine: {
          normal: {
            show: true,
            lineStyle: {
              color: '#eee',
              width: 2,
              type: 'solid'
            },
            smooth: 0.2,
            length: 15,
            length2: 20
          }
        },
        data: [
          {
            value: 24,
            name: 'VIVO',
            itemStyle: {
              normal: {
                color: '#56eeff'
              }
            }
          },
          {
            value: 24,
            name: '荣耀',
            itemStyle: {
              normal: {
                color: '#03bd42'
              }
            }
          },
          {
            value: 24,
            name: 'LG',
            itemStyle: {
              normal: {
                color: '#fbc033'
              }
            }
          },
          {
            value: 24,
            name: '华为',
            itemStyle: {
              normal: {
                color: '#fc7722'
              }
            }
          },
          {
            value: 24,
            name: '三星',
            itemStyle: {
              normal: {
                color: '#fc203a'
              }
            }
          },
          {
            value: 24,
            name: '中兴',
            itemStyle: {
              normal: {
                color: '#3393f5'
              }
            }
          }
        ]
      }
    ]
  },
  // 倒着的柱状图
  option60: {
    // 柱条宽度
    barWidth: 8,
    barCategoryGap: '30',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      // left: 23,
      // top: 25,
      // right: 24,
      bottom: 40,
      borderColor: '#0a2549',
      containLabel: true,
      borderWidth: 4
    },
    // 图例组件
    // legend: {
    //   show: false,
    //   left: 'center',
    //   bottom: 0,
    //   textStyle: {
    //     color: '#e5f1ff',
    //     fontSize: 16
    //   },
    //   // 图例的数据数组
    //   data: [
    //     {
    //       name: 'app使用次数'
    //     }
    //   ]
    // },
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
      type: 'value',
      // name: '(TB)',
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: false,
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
      // 坐标轴-x轴在网格区域的线
      splitLine: {
        show: false,
        lineStyle: {
          color: '#294277',
          width: 1,
          type: 'solid'
        }
      }
      // data: ['长春', '四平', '吉林', '松原']
    },
    // 直角坐标系 grid 中的 y 轴
    yAxis: {
      type: 'category',
      show: true,
      // splitNumber: 4,
      interval: 6,
      boundaryGap: true,
      // y轴轴线颜色
      axisLine: {
        show: false,
        lineStyle: {
          color: '#0896a9',
          width: 2
        }
      },
      axisLabel: {
        show: true,
        fontSize: 16,
        // margin: 5,
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
      },
      data: ['优酷', '淘宝', '网易云音乐', '微信', 'QQ', '虎牙直播']
    },
    // 系列列表
    series: [
      {
        type: 'bar',
        name: 'app使用次数',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 本应该是拐点颜色，此处成了线条颜色，不知道啥原因
            color: '#14deeb',
            // 拐点边框颜色
            // borderColor: 'rgba(163, 151, 5, 0.7)',
            // borderWidth: '5',
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
        data: [3, 4, 5, 6, 7, 3]
      }
    ]
  }
}
