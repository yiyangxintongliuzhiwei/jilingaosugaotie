import echarts from 'echarts';
export default {
  // 省粒度 轮播1-折线图
  option1: {
    title: {
      show: false,
      text: '单位(Erl)',
      textStyle: {
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      top: 0,
      right: 15
    },
    // // 柱条宽度
    // barWidth: 14,
    // barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      left: 25,
      top: 50,
      right: 0,
      bottom: 10,
      borderColor: '#0a2549',
      containLabel: true,
      borderWidth: 4
    },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '450',
      height: '40',
      // orient: 'vertical',
      orient: 'horizontal',
      top: 10,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '2G用户数',
          icon: 'line'
        },
        {
          name: '4G用户数',
          icon: 'line'
        },
        {
          name: 'volte用户数',
          icon: 'line'
        }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
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
          color: '#265e8d',
          width: 3,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
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
          color: '#265e8d',
          width: 3
        }
      },
      axisLabel: {
        show: true,
        fontSize: 18,
        margin: 15,
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      // 坐标轴在 grid 区域中的分隔线 背景分分隔线
      splitLine: {
        show: true,
        lineStyle: {
          color: '#43698d',
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
        type: 'line',
        name: '2G用户数',
        symbolSize: 2,
        smooth: true,
        // smooth: false,
        itemStyle: {
          normal: {
            color: '#f8ff80',
            borderColor: '#dfef58',
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
        name: '4G用户数',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#00aee1',
            // 拐点边框颜色
            borderColor: '#00aee1',
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
      },
      {
        type: 'line',
        name: 'volte用户数',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#01c98b',
            // 拐点边框颜色
            borderColor: '#01da89',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [72, 32, 15, 52, 67, 63, 14, 53, 25, 14, 36, 26, 32, 22, 36, 26]
      }
    ]
  },
  // 省粒度 轮播1-柱状图
  option2: {
    title: {
      show: false,
      text: '单位(GB)',
      textStyle: {
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      top: 0,
      right: 0
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      width: 385,
      // left: '18%',
      top: '26%',
      right: '15%',
      left: '20%',
      bottom: '16%',
      borderColor: '#0a2549',
      containLabel: false,
      borderWidth: 4
    },
    // grid: {
    //   show: false,
    //   width: 455,
    //   left: 25,
    //   top: 50,
    //   right: 0,
    //   bottom: 10,
    //   // bottom: 160,
    //   borderColor: '#0a2549',
    //   containLabel: true,
    //   borderWidth: 4
    // },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '550',
      height: '44',
      orient: 'horizontal',
      top: 10,
      right: 230,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '2G流量'
        },
        {
          name: '2G流量日常值',
          icon: 'line'
        }
        // {
        //   name: '4G流量'
        // },
        // {
        //   name: '4G流量日常值',
        //   icon: 'line'
        // }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      show: false,
      type: 'category',
      // position: 'top',
      // name: '(TB)',
      silent: false,
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        // 位于+-y轴中间 onZero
        onZero: true,
        // show: true,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
    },
    yAxis:
    [
      {
        type: 'value',
        // name: '4G',
        inverse: true,
        // interval: 3,
        // min: 20,
        splitArea: {show: false},
        show: true,
        splitNumber: 4,
        // position: 'right',
        // y轴轴线颜色
        axisLine: {
          show: true,
          lineStyle: {
            // color: '#0896a9',
            color: '#406987',
            width: 2
          }
        },
        axisLabel: {
          onZero: true, // x轴或者y轴是否显示在另一个轴的0刻度处
          show: true,
          fontSize: 18,
          margin: 15,
          fontFamily: 'MF_LangQian',
          color: '#e5f1ff',
          formatter: function(value, index) {
            if (value < 0) {
              return -value;
            } else {
              return value;
            }
          }
        },
        // 坐标轴在 grid 区域中的分隔线
        splitLine: {
          show: true,
          lineStyle: {
            color: '#43698d',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    // 直角坐标系 grid 中的 y 轴
    // yAxis: {
    //   type: 'value',
    //   name: '4G',
    //   inverse: true,
    //   splitArea: {show: false},
    //   show: true,
    //   splitNumber: 4,
    //   // position: 'right',
    //   // y轴轴线颜色
    //   axisLine: {
    //     show: true,
    //     lineStyle: {
    //       // color: '#0896a9',
    //       color: '#406987',
    //       width: 2
    //     }
    //   },
    //   axisLabel: {
    //     onZero: false, // x轴或者y轴是否显示在另一个轴的0刻度处
    //     show: true,
    //     fontSize: 18,
    //     margin: 15,
    //     fontFamily: 'MF_LangQian',
    //     color: '#e5f1ff',
    //     formatter: function(value, index) {
    //       if (value < 0) {
    //         return -value;
    //       }
    //     }
    //   },
    //   // 坐标轴在 grid 区域中的分隔线
    //   splitLine: {
    //     show: true,
    //     lineStyle: {
    //       color: '#43698d',
    //       width: 1,
    //       type: 'solid'
    //     }
    //   },
    //   axisTick: {
    //     show: false
    //   }
    // },
    // 系列列表
    series: [
      // 柱状图
      {
        type: 'bar',
        name: '2G流量',
        stack: 'one',
        // stack: '流量',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#1cb3ff',
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
              color: '#1cb3ff'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        label: {
          normal: {
            show: false,
            formatter: function(value) {
              if (value.data < 0) {
                return -value.data;
              }
            }
          }
        },
        data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
      },
      // 折线图
      {
        type: 'line',
        name: '2G流量日常值',
        stack: 'one',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#ffe267',
            // 拐点边框颜色
            borderColor: '#ffe267',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [-52, -32, -39, -16, -62, -12, -66, -66]
        // data: [32, 22, 36, 26, 32, 22, 36, 26]
      }
      // // 柱状图
      // {
      //   type: 'bar',
      //   name: '4G流量',
      //   // stack: '流量',
      //   stack: 'two',
      //   symbolSize: 2,
      //   smooth: true,
      //   // 柱条边框设置
      //   itemStyle: {
      //     normal: {
      //       // 圆角半径 上右下左
      //       // barBorderRadius: [6, 6, 0, 0],
      //       // 柱条颜色 黄色
      //       color: '#cbda0b',
      //       // 拐点边框颜色
      //       // borderColor: '#94ae29',
      //       // borderWidth: '4',
      //       // 线条样式
      //       lineStyle: {
      //         normal: {
      //           // color: '#ac84fe',
      //           width: 2
      //         }
      //       }
      //     }
      //   },
      //   // 区域样式
      //   areaStyle: {
      //     normal: {
      //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //         offset: 0,
      //         // color: 'rgba(12, 42, 82, 0.8)' // 0% 处的颜色
      //         color: '#cbda0b'
      //       }, {
      //         offset: 1,
      //         // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
      //         color: '#00123b'
      //       }], false)
      //     }
      //   },
      //   // data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
      //   data: [32, 22, 36, 26, 32, 22, 36, 26]
      // },
      // // 折线图
      // {
      //   type: 'line',
      //   name: '4G流量日常值',
      //   stack: 'two',
      //   symbolSize: 2,
      //   smooth: true,
      //   // 拐点样式
      //   itemStyle: {
      //     normal: {
      //       // 本应该是拐点颜色,此处线条颜色也是它
      //       color: '#b780f8',
      //       // 拐点边框颜色
      //       borderColor: '#b780f8',
      //       borderWidth: '8',
      //       // 线条样式
      //       lineStyle: {
      //         normal: {
      //           width: 2
      //         }
      //       }
      //     }
      //   },
      //   data: [32, 22, 36, 26, 32, 22, 36, 26]
      // }
    ]
  },
  option2test: {
    title: {
      show: false,
      text: '单位(GB)',
      textStyle: {
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      top: 0,
      right: 0
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      width: 385,
      // left: '18%',
      top: '56%',
      right: '15%',
      bottom: '10%',
      left: '20%',
      borderColor: '#0a2549',
      containLabel: false,
      borderWidth: 4
    },
    // grid: {
    //   show: false,
    //   width: 455,
    //   left: 25,
    //   // top: 50,
    //   top: 160,
    //   right: 0,
    //   bottom: 10,
    //   borderColor: '#0a2549',
    //   containLabel: true,
    //   borderWidth: 4
    // },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '250',
      height: '44',
      orient: 'horizontal',
      top: 10,
      left: 230,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '4G流量'
        },
        {
          name: '4G流量日常值',
          icon: 'line'
        }
        // {
        //   name: '4G流量'
        // },
        // {
        //   name: '4G流量日常值',
        //   icon: 'line'
        // }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      // show: false,
      // position: 'bottom',
      offset: 3,
      type: 'category',
      // position: 'top',
      // name: '(TB)',
      silent: false,
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        // 位于+-y轴中间 onZero
        onZero: true,
        // show: true,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
    },
    yAxis:
    [
      {
        type: 'value',
        // name: '4G',
        // interval: 3,
        inverse: true,
        splitArea: {show: false},
        show: true,
        splitNumber: 4,
        // interval: 3,
        // position: 'right',
        // y轴轴线颜色
        axisLine: {
          show: true,
          lineStyle: {
            // color: '#0896a9',
            color: '#406987',
            width: 2
          }
        },
        axisLabel: {
          onZero: true, // x轴或者y轴是否显示在另一个轴的0刻度处
          show: true,
          fontSize: 18,
          margin: 15,
          fontFamily: 'MF_LangQian',
          color: '#e5f1ff',
          formatter: function(value, index) {
            if (value < 0) {
              return -value;
            } else {
              return value;
            }
          }
        },
        // 坐标轴在 grid 区域中的分隔线
        splitLine: {
          show: true,
          lineStyle: {
            color: '#43698d',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    // 系列列表
    series: [
      // // 柱状图
      {
        type: 'bar',
        name: '4G流量',
        // stack: '流量',
        stack: 'two',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#cbda0b',
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
              color: '#cbda0b'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        // data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
        data: [32, 22, 36, 26, 32, 22, 36, 26]
      },
      // 折线图
      {
        type: 'line',
        name: '4G流量日常值',
        stack: 'two',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#b780f8',
            // 拐点边框颜色
            borderColor: '#b780f8',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [32, 22, 36, 26, 32, 22, 36, 26]
      }
    ]
  },
  // 省粒度 轮播1-柱状图
  option3: {
    title: {
      show: false
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      width: 385,
      // left: '18%',
      top: '26%',
      right: '15%',
      left: '15%',
      bottom: '16%',
      borderColor: '#0a2549',
      containLabel: false,
      borderWidth: 4
    },
    // grid: {
    //   show: false,
    //   // width: 455,
    //   width: 455,
    //   left: 90,
    //   top: 50,
    //   right: 0,
    //   bottom: 35,
    //   borderColor: '#0a2549',
    //   containLabel: false,
    //   borderWidth: 4
    // },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '550',
      height: '44',
      orient: 'horizontal',
      top: 10,
      right: 230,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '2G当前值'
        },
        {
          name: '2G日常值',
          icon: 'line'
        }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      show: false,
      offset: 6,
      type: 'category',
      // position: 'top',
      // name: '(TB)',
      silent: false,
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        // 位于+-y轴中间 onZero
        onZero: true,
        // show: true,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
    },
    yAxis:
    [
      {
        type: 'value',
        // name: '2G话务量',
        inverse: true,
        splitArea: {show: false},
        show: true,
        splitNumber: 4,
        // position: 'right',
        // y轴轴线颜色
        axisLine: {
          show: true,
          lineStyle: {
            // color: '#0896a9',
            color: '#406987',
            width: 2
          }
        },
        axisLabel: {
          onZero: false, // x轴或者y轴是否显示在另一个轴的0刻度处
          show: true,
          fontSize: 18,
          margin: 15,
          fontFamily: 'MF_LangQian',
          color: '#e5f1ff',
          formatter: function(value, index) {
            if (value < 0) {
              return -value;
            } else {
              return value;
            }
          }
        },
        // 坐标轴在 grid 区域中的分隔线
        splitLine: {
          show: true,
          lineStyle: {
            color: '#43698d',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    // 系列列表
    series: [
      // 柱状图
      {
        type: 'bar',
        name: '2G当前值',
        stack: 'one',
        // stack: '流量',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#7fe040',
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
              color: '#1cb3ff'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        label: {
          normal: {
            show: false,
            formatter: function(value) {
              if (value.data < 0) {
                return -value.data;
              } else {
                return value;
              }
            }
          }
        },
        data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
      },
      // 折线图
      {
        type: 'line',
        name: '2G日常值',
        stack: 'one',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#68b8d9',
            // 拐点边框颜色
            borderColor: '#68b8d9',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [-52, -32, -39, -16, -62, -12, -66, -66]
        // data: [32, 22, 36, 26, 32, 22, 36, 26]
      }
      // 柱状图
      // {
      //   type: 'bar',
      //   name: 'volte当前值',
      //   // stack: '流量',
      //   stack: 'two',
      //   symbolSize: 2,
      //   smooth: true,
      //   // 柱条边框设置
      //   itemStyle: {
      //     normal: {
      //       // 圆角半径 上右下左
      //       // barBorderRadius: [6, 6, 0, 0],
      //       // 柱条颜色 黄色
      //       color: '#62aedc',
      //       // 拐点边框颜色
      //       // borderColor: '#94ae29',
      //       // borderWidth: '4',
      //       // 线条样式
      //       lineStyle: {
      //         normal: {
      //           // color: '#ac84fe',
      //           width: 2
      //         }
      //       }
      //     }
      //   },
      //   // 区域样式
      //   areaStyle: {
      //     normal: {
      //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //         offset: 0,
      //         // color: 'rgba(12, 42, 82, 0.8)' // 0% 处的颜色
      //         color: '#cbda0b'
      //       }, {
      //         offset: 1,
      //         // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
      //         color: '#00123b'
      //       }], false)
      //     }
      //   },
      //   // data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
      //   data: [32, 22, 36, 26, 32, 22, 36, 26]
      // },
      // // 折线图
      // {
      //   type: 'line',
      //   name: 'volte日常值',
      //   stack: 'two',
      //   symbolSize: 2,
      //   smooth: true,
      //   // 拐点样式
      //   itemStyle: {
      //     normal: {
      //       // 本应该是拐点颜色,此处线条颜色也是它
      //       color: '#fefb6f',
      //       // 拐点边框颜色
      //       borderColor: '#fefb6f',
      //       borderWidth: '8',
      //       // 线条样式
      //       lineStyle: {
      //         normal: {
      //           width: 2
      //         }
      //       }
      //     }
      //   },
      //   data: [32, 22, 36, 26, 32, 22, 36, 26]
      // }
    ]
  },
  // option3test: {
  //   title: {
  //     show: false
  //   },
  //   // 柱条宽度
  //   barWidth: 14,
  //   barCategoryGap: '10',
  //   // barGap: '-100%',
  //   // 直角坐标系内绘制表格，表格与legend距离也在此调整
  //   grid: {
  //     show: false,
  //     width: 455,
  //     left: 25,
  //     // top: 50,
  //     top: 160,
  //     right: 0,
  //     bottom: 10,
  //     borderColor: '#0a2549',
  //     containLabel: true,
  //     borderWidth: 4
  //   },
  //   // 图例组件
  //   legend: {
  //     show: true,
  //     // left: 'center',
  //     width: '550',
  //     height: '44',
  //     orient: 'horizontal',
  //     top: 10,
  //     textStyle: {
  //       color: '#e5f1ff',
  //       fontSize: 14
  //     },
  //     // 图例每项的间隔
  //     // itemGap: 14,
  //     // 图例的数据数组
  //     data: [
  //       {
  //         name: 'volte当前值'
  //       },
  //       {
  //         name: 'volte日常值',
  //         icon: 'line'
  //       }
  //     ]
  //   },
  //   // 图例的 tooltip 配置
  //   tooltip: {
  //     show: true,
  //     // trigger: 'axis',
  //     axisPointer: {
  //       type: 'line'
  //     },
  //     formatter: function(value) {
  //       if (value.data < 0) {
  //         return -value.data;
  //       } else {
  //         return value.data;
  //       }
  //     }
  //   },
  //   // 直角坐标系 grid 中的 x 轴
  //   xAxis: {
  //     type: 'category',
  //     offset: 6,
  //     // position: 'top',
  //     // name: '(TB)',
  //     silent: false,
  //     nameLocation: 'start',
  //     nameGap: 30,
  //     // x轴留白
  //     boundaryGap: true,
  //     // 坐标轴轴线相关设置
  //     axisLine: {
  //       show: true,
  //       // 位于+-y轴中间 onZero
  //       onZero: true,
  //       // show: true,
  //       lineStyle: {
  //         color: '#0896a9',
  //         width: 2,
  //         fontFamily: 'MF_LangQian'
  //       }
  //     },
  //     // 坐标轴刻度标签的相关设置
  //     axisLabel: {
  //       show: true,
  //       fontSize: 14,
  //       margin: 12,
  //       fontFamily: 'Microsoft YaHei',
  //       color: '#ffffff'
  //     },
  //     // 坐标轴刻度相关设置
  //     axisTick: {
  //       show: false
  //     },
  //     data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
  //   },
  //   yAxis:
  //   [
  //     {
  //       type: 'value',
  //       // name: '2G话务量',
  //       inverse: true,
  //       splitArea: {show: false},
  //       show: true,
  //       splitNumber: 3,
  //       // position: 'right',
  //       // y轴轴线颜色
  //       axisLine: {
  //         show: true,
  //         lineStyle: {
  //           // color: '#0896a9',
  //           color: '#406987',
  //           width: 2
  //         }
  //       },
  //       axisLabel: {
  //         onZero: false, // x轴或者y轴是否显示在另一个轴的0刻度处
  //         show: true,
  //         fontSize: 18,
  //         margin: 15,
  //         fontFamily: 'MF_LangQian',
  //         color: '#e5f1ff',
  //         formatter: function(value, index) {
  //           if (value < 0) {
  //             return -value;
  //           } else {
  //             return value;
  //           }
  //         }
  //       },
  //       // 坐标轴在 grid 区域中的分隔线
  //       splitLine: {
  //         show: true,
  //         lineStyle: {
  //           color: '#43698d',
  //           width: 1,
  //           type: 'solid'
  //         }
  //       },
  //       axisTick: {
  //         show: false
  //       }
  //     }
  //   ],
  //   // 系列列表
  //   series: [
  //     // 柱状图
  //     // {
  //     //   type: 'bar',
  //     //   name: '2G当前值',
  //     //   stack: 'one',
  //     //   // stack: '流量',
  //     //   symbolSize: 2,
  //     //   smooth: true,
  //     //   // 柱条边框设置
  //     //   itemStyle: {
  //     //     normal: {
  //     //       // 圆角半径 上右下左
  //     //       // barBorderRadius: [6, 6, 0, 0],
  //     //       // 柱条颜色 黄色
  //     //       color: '#7fe040',
  //     //       // 拐点边框颜色
  //     //       // borderColor: '#94ae29',
  //     //       // borderWidth: '4',
  //     //       // 线条样式
  //     //       lineStyle: {
  //     //         normal: {
  //     //           // color: '#ac84fe',
  //     //           width: 2
  //     //         }
  //     //       }
  //     //     }
  //     //   },
  //     //   // 区域样式
  //     //   areaStyle: {
  //     //     normal: {
  //     //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  //     //         offset: 0,
  //     //         // color: 'rgba(12, 42, 82, 0.8)' // 0% 处的颜色
  //     //         color: '#1cb3ff'
  //     //       }, {
  //     //         offset: 1,
  //     //         // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
  //     //         color: '#00123b'
  //     //       }], false)
  //     //     }
  //     //   },
  //     //   label: {
  //     //     normal: {
  //     //       show: false,
  //     //       formatter: function(value) {
  //     //         if (value.data < 0) {
  //     //           return -value.data;
  //     //         } else {
  //     //           return value;
  //     //         }
  //     //       }
  //     //     }
  //     //   },
  //     //   data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
  //     // },
  //     // // 折线图
  //     // {
  //     //   type: 'line',
  //     //   name: '2G日常值',
  //     //   stack: 'one',
  //     //   symbolSize: 2,
  //     //   smooth: true,
  //     //   // 拐点样式
  //     //   itemStyle: {
  //     //     normal: {
  //     //       // 本应该是拐点颜色,此处线条颜色也是它
  //     //       color: '#68b8d9',
  //     //       // 拐点边框颜色
  //     //       borderColor: '#68b8d9',
  //     //       borderWidth: '8',
  //     //       // 线条样式
  //     //       lineStyle: {
  //     //         normal: {
  //     //           width: 2
  //     //         }
  //     //       }
  //     //     }
  //     //   },
  //     //   data: [-52, -32, -39, -16, -62, -12, -66, -66]
  //     //   // data: [32, 22, 36, 26, 32, 22, 36, 26]
  //     // }
  //     // 柱状图
  //     {
  //       type: 'bar',
  //       name: 'volte当前值',
  //       // stack: '流量',
  //       stack: 'two',
  //       symbolSize: 2,
  //       smooth: true,
  //       // 柱条边框设置
  //       itemStyle: {
  //         normal: {
  //           // 圆角半径 上右下左
  //           // barBorderRadius: [6, 6, 0, 0],
  //           // 柱条颜色 黄色
  //           color: '#62aedc',
  //           // 拐点边框颜色
  //           // borderColor: '#94ae29',
  //           // borderWidth: '4',
  //           // 线条样式
  //           lineStyle: {
  //             normal: {
  //               // color: '#ac84fe',
  //               width: 2
  //             }
  //           }
  //         }
  //       },
  //       // 区域样式
  //       areaStyle: {
  //         normal: {
  //           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
  //             offset: 0,
  //             // color: 'rgba(12, 42, 82, 0.8)' // 0% 处的颜色
  //             color: '#cbda0b'
  //           }, {
  //             offset: 1,
  //             // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
  //             color: '#00123b'
  //           }], false)
  //         }
  //       },
  //       // data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
  //       data: [32, 22, 36, 26, 32, 22, 36, 26]
  //     },
  //     // 折线图
  //     {
  //       type: 'line',
  //       name: 'volte日常值',
  //       stack: 'two',
  //       symbolSize: 2,
  //       smooth: true,
  //       // 拐点样式
  //       itemStyle: {
  //         normal: {
  //           // 本应该是拐点颜色,此处线条颜色也是它
  //           color: '#fefb6f',
  //           // 拐点边框颜色
  //           borderColor: '#fefb6f',
  //           borderWidth: '8',
  //           // 线条样式
  //           lineStyle: {
  //             normal: {
  //               width: 2
  //             }
  //           }
  //         }
  //       },
  //       data: [32, 22, 36, 26, 32, 22, 36, 26]
  //     }
  //   ]
  // },
  option3test: {
    title: {
      show: false
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      width: 385,
      // left: '18%',
      top: '56%',
      right: '15%',
      bottom: '10%',
      left: '15%',
      borderColor: '#0a2549',
      containLabel: false,
      borderWidth: 4
    },
    // grid: {
    //   show: false,
    //   width: 455,
    //   left: 90,
    //   // left: 25,
    //   // top: 50,
    //   top: 160,
    //   right: 0,
    //   bottom: 30,
    //   borderColor: '#0a2549',
    //   containLabel: false,
    //   borderWidth: 4
    // },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '250',
      height: '44',
      orient: 'horizontal',
      top: 10,
      left: 230,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: 'volte当前值'
        },
        {
          name: 'volte日常值',
          icon: 'line'
        }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      type: 'category',
      // position: 'top',
      // name: '(TB)',
      silent: false,
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        // 位于+-y轴中间 onZero
        onZero: true,
        // show: true,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
    },
    yAxis:
    [
      {
        type: 'value',
        // name: '2G话务量',
        inverse: true,
        splitArea: {show: false},
        show: true,
        splitNumber: 4,
        // position: 'right',
        // y轴轴线颜色
        axisLine: {
          show: true,
          lineStyle: {
            // color: '#0896a9',
            color: '#406987',
            width: 2
          }
        },
        axisLabel: {
          onZero: false, // x轴或者y轴是否显示在另一个轴的0刻度处
          show: true,
          fontSize: 18,
          margin: 15,
          fontFamily: 'MF_LangQian',
          color: '#e5f1ff',
          formatter: function(value, index) {
            if (value < 0) {
              return -value;
            } else {
              return value;
            }
          }
        },
        // 坐标轴在 grid 区域中的分隔线
        splitLine: {
          show: true,
          lineStyle: {
            color: '#43698d',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    // 系列列表
    series: [
      // 柱状图
      {
        type: 'bar',
        name: 'volte当前值',
        // stack: '流量',
        stack: 'two',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#62aedc',
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
              color: '#cbda0b'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        // data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
        data: [32, 22, 36, 26, 32, 22, 36, 26]
      },
      // 折线图
      {
        type: 'line',
        name: 'volte日常值',
        stack: 'two',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#fefb6f',
            // 拐点边框颜色
            borderColor: '#fefb6f',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [32, 22, 36, 26, 32, 22, 36, 26]
      }
    ]
  },
  // 省粒度 轮播2-折线图
  option11: {
    title: {
      show: false
    },
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      left: 25,
      top: 50,
      right: 0,
      bottom: 10,
      borderColor: '#0a2549',
      containLabel: true,
      borderWidth: 4
    },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '450',
      height: '40',
      // orient: 'vertical',
      orient: 'horizontal',
      top: 10,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '家宽在线用户数',
          icon: 'line'
        },
        {
          name: 'OTT在线用户数',
          icon: 'line'
        },
        {
          name: 'IPTV在线用户数',
          icon: 'line'
        }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
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
          color: '#265e8d',
          width: 3,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
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
          color: '#265e8d',
          width: 3
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
        show: true,
        lineStyle: {
          color: '#43698d',
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
        type: 'line',
        name: '家宽在线用户数',
        symbolSize: 2,
        smooth: true,
        // smooth: false,
        itemStyle: {
          normal: {
            color: '#b693f8',
            borderColor: '#b693f8',
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
        name: 'OTT在线用户数',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#eccd48',
            // 拐点边框颜色
            borderColor: '#eccd48',
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
      },
      {
        type: 'line',
        name: 'IPTV在线用户数',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#5494ee',
            // 拐点边框颜色
            borderColor: '#5494ee',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [72, 32, 15, 52, 67, 63, 14, 53, 25, 14, 36, 26, 32, 22, 36, 26]
      }
    ]
  },
  // 省粒度 轮播2-柱状图
  option22: {
    title: {
      show: false,
      text: '单位(GB)',
      textStyle: {
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      top: 0,
      right: 0
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      width: 385,
      // left: '18%',
      top: '26%',
      right: '15%',
      left: '15%',
      bottom: '16%',
      borderColor: '#0a2549',
      containLabel: false,
      borderWidth: 4
    },
    // grid: {
    //   show: false,
    //   // width: 455,
    //   width: 455,
    //   left: 90,
    //   top: 50,
    //   right: 0,
    //   bottom: 35,
    //   borderColor: '#0a2549',
    //   containLabel: false,
    //   borderWidth: 4
    // },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '550',
      height: '44',
      orient: 'horizontal',
      top: 10,
      right: 230,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '彩信量'
        },
        {
          name: '彩信量日常值',
          icon: 'line'
        }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      show: false,
      type: 'category',
      // position: 'top',
      // name: '(TB)',
      silent: false,
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        // 位于+-y轴中间 onZero
        onZero: true,
        // show: true,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
    },
    yAxis:
    [
      {
        type: 'value',
        // name: '4G',
        inverse: true,
        // interval: 3,
        // min: 20,
        splitArea: {show: false},
        show: true,
        splitNumber: 4,
        // position: 'right',
        // y轴轴线颜色
        axisLine: {
          show: true,
          lineStyle: {
            // color: '#0896a9',
            color: '#406987',
            width: 2
          }
        },
        axisLabel: {
          onZero: true, // x轴或者y轴是否显示在另一个轴的0刻度处
          show: true,
          fontSize: 18,
          margin: 15,
          fontFamily: 'MF_LangQian',
          color: '#e5f1ff',
          formatter: function(value, index) {
            if (value < 0) {
              return -value;
            } else {
              return value;
            }
          }
        },
        // 坐标轴在 grid 区域中的分隔线
        splitLine: {
          show: true,
          lineStyle: {
            color: '#43698d',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    // 系列列表
    series: [
      // 柱状图
      {
        type: 'bar',
        name: '彩信量',
        // stack: '流量',
        stack: 'two',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            color: '#eccf76',
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
              color: '#cbda0b'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        // data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
        data: [32, 22, 36, 26, 32, 22, 36, 26]
      },
      // 折线图
      {
        type: 'line',
        name: '彩信量日常值',
        stack: 'two',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#86cde5',
            // 拐点边框颜色
            borderColor: '#86cde5',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [32, 22, 36, 26, 32, 22, 36, 26]
      }
    ]
  },
  option22test: {
    title: {
      show: false,
      text: '单位(GB)',
      textStyle: {
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      top: 0,
      right: 0
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      width: 385,
      // left: '18%',
      top: '56%',
      right: '15%',
      bottom: '10%',
      left: '15%',
      borderColor: '#0a2549',
      containLabel: false,
      borderWidth: 4
    },
    // grid: {
    //   show: false,
    //   width: 455,
    //   left: 90,
    //   // left: 25,
    //   // top: 50,
    //   top: 160,
    //   right: 0,
    //   bottom: 30,
    //   borderColor: '#0a2549',
    //   containLabel: false,
    //   borderWidth: 4
    // },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '250',
      height: '44',
      orient: 'horizontal',
      top: 10,
      left: 230,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '短信量'
        },
        {
          name: '短信量日常值',
          icon: 'line'
        }
        // {
        //   name: '4G流量'
        // },
        // {
        //   name: '4G流量日常值',
        //   icon: 'line'
        // }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      // show: false,
      // position: 'bottom',
      offset: 6,
      type: 'category',
      // position: 'top',
      // name: '(TB)',
      silent: false,
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        // 位于+-y轴中间 onZero
        onZero: true,
        // show: true,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
    },
    yAxis:
    [
      {
        type: 'value',
        // name: '4G',
        // interval: 3,
        inverse: true,
        splitArea: {show: false},
        show: true,
        splitNumber: 4,
        // interval: 3,
        // position: 'right',
        // y轴轴线颜色
        axisLine: {
          show: true,
          lineStyle: {
            // color: '#0896a9',
            color: '#406987',
            width: 2
          }
        },
        axisLabel: {
          onZero: true, // x轴或者y轴是否显示在另一个轴的0刻度处
          show: true,
          fontSize: 18,
          margin: 15,
          fontFamily: 'MF_LangQian',
          color: '#e5f1ff',
          formatter: function(value, index) {
            if (value < 0) {
              return -value;
            } else {
              return value;
            }
          }
        },
        // 坐标轴在 grid 区域中的分隔线
        splitLine: {
          show: true,
          lineStyle: {
            color: '#43698d',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    // 系列列表
    series: [
      {
        type: 'bar',
        name: '短信量',
        stack: 'one',
        // stack: '流量',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            color: '#457af7',
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
              color: '#1cb3ff'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        label: {
          normal: {
            show: false,
            formatter: function(value) {
              if (value.data < 0) {
                return -value.data;
              }
            }
          }
        },
        data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
      },
      // 折线图
      {
        type: 'line',
        name: '短信量日常值',
        stack: 'one',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#97fa77',
            // 拐点边框颜色
            borderColor: '#97fa77',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [-52, -32, -39, -16, -62, -12, -66, -66]
        // data: [32, 22, 36, 26, 32, 22, 36, 26]
      }
    ]
  },
  // 省粒度 轮播2-折线图
  option33: {
    title: {
      show: false
    },
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      left: 25,
      top: 50,
      right: 0,
      bottom: 10,
      borderColor: '#0a2549',
      containLabel: true,
      borderWidth: 4
    },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '450',
      height: '40',
      // orient: 'vertical',
      orient: 'horizontal',
      top: 10,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '长途话务量',
          icon: 'line'
        },
        {
          name: '长途话务量日常值',
          icon: 'line'
        }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
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
          color: '#265e8d',
          width: 3,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
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
          color: '#265e8d',
          width: 3
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
        show: true,
        lineStyle: {
          color: '#43698d',
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
        type: 'line',
        name: '长途话务量',
        symbolSize: 2,
        smooth: true,
        // smooth: false,
        itemStyle: {
          normal: {
            color: '#fdf966',
            borderColor: '#fdf966',
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
        name: '长途话务量日常值',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#78d490',
            // 拐点边框颜色
            borderColor: '#78d490',
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
  // 区域粒度 折线图
  option111: {
    title: {
      show: false,
      text: '单位(Erl)',
      textStyle: {
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      top: 0,
      right: 15
    },
    // // 柱条宽度
    // barWidth: 14,
    // barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      left: 25,
      top: 50,
      right: 0,
      bottom: 10,
      borderColor: '#0a2549',
      containLabel: true,
      borderWidth: 4
    },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '450',
      height: '40',
      // orient: 'vertical',
      orient: 'horizontal',
      top: 10,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '2G用户数',
          icon: 'line'
        },
        {
          name: '4G用户数',
          icon: 'line'
        },
        {
          name: 'volte用户数',
          icon: 'line'
        }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
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
          color: '#265e8d',
          width: 3,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
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
          color: '#265e8d',
          width: 3
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
        show: true,
        lineStyle: {
          color: '#43698d',
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
        type: 'line',
        name: '2G用户数',
        symbolSize: 2,
        smooth: true,
        // smooth: false,
        itemStyle: {
          normal: {
            color: '#f8ff80',
            borderColor: '#dfef58',
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
        name: '4G用户数',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#00aee1',
            // 拐点边框颜色
            borderColor: '#00aee1',
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
      },
      {
        type: 'line',
        name: 'volte用户数',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#01c98b',
            // 拐点边框颜色
            borderColor: '#01da89',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [72, 32, 15, 52, 67, 63, 14, 53, 25, 14, 36, 26, 32, 22, 36, 26]
      }
    ]
  },
  // 区域粒度 柱状图
  option222原来: {
    title: {
      show: false,
      text: '单位(GB)',
      textStyle: {
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      top: 0,
      right: 0
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      left: 25,
      top: 50,
      right: 0,
      bottom: 10,
      borderColor: '#0a2549',
      containLabel: true,
      borderWidth: 4
    },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '550',
      height: '44',
      orient: 'horizontal',
      top: 10,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '2G流量'
        },
        {
          name: '2G流量日常值',
          icon: 'line'
        },
        {
          name: '4G流量'
        },
        {
          name: '4G流量日常值',
          icon: 'line'
        }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      type: 'category',
      // position: 'top',
      // name: '(TB)',
      silent: false,
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        // 位于+-y轴中间 onZero
        onZero: true,
        // show: true,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
    },
    yAxis:
    [
      {
        type: 'value',
        // name: '4G',
        inverse: true,
        splitArea: {show: false},
        show: true,
        splitNumber: 4,
        // position: 'right',
        // y轴轴线颜色
        axisLine: {
          show: true,
          lineStyle: {
            // color: '#0896a9',
            color: '#406987',
            width: 2
          }
        },
        axisLabel: {
          onZero: false, // x轴或者y轴是否显示在另一个轴的0刻度处
          show: true,
          fontSize: 18,
          margin: 15,
          fontFamily: 'MF_LangQian',
          color: '#e5f1ff',
          formatter: function(value, index) {
            if (value < 0) {
              return -value;
            } else {
              return value;
            }
          }
        },
        // 坐标轴在 grid 区域中的分隔线
        splitLine: {
          show: true,
          lineStyle: {
            color: '#43698d',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    // 系列列表
    series: [
      // 柱状图
      {
        type: 'bar',
        name: '2G流量',
        stack: 'one',
        // stack: '流量',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#1cb3ff',
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
              color: '#1cb3ff'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        label: {
          normal: {
            show: false,
            formatter: function(value) {
              if (value.data < 0) {
                return -value.data;
              }
            }
          }
        },
        data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
      },
      // 折线图
      {
        type: 'line',
        name: '2G流量日常值',
        stack: 'one',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#ffe267',
            // 拐点边框颜色
            borderColor: '#ffe267',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [-52, -32, -39, -16, -62, -12, -66, -66]
        // data: [32, 22, 36, 26, 32, 22, 36, 26]
      },
      // 柱状图
      {
        type: 'bar',
        name: '4G流量',
        // stack: '流量',
        stack: 'two',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#cbda0b',
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
              color: '#cbda0b'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        // data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
        data: [32, 22, 36, 26, 32, 22, 36, 26]
      },
      // 折线图
      {
        type: 'line',
        name: '4G流量日常值',
        stack: 'two',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#b780f8',
            // 拐点边框颜色
            borderColor: '#b780f8',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [32, 22, 36, 26, 32, 22, 36, 26]
      }
    ]
  },
  option222: {
    title: {
      show: false,
      text: '单位(GB)',
      textStyle: {
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      top: 0,
      right: 0
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      width: 385,
      // left: '18%',
      top: '26%',
      right: '15%',
      left: '15%',
      bottom: '16%',
      borderColor: '#0a2549',
      containLabel: false,
      borderWidth: 4
    },
    // grid: {
    //   show: false,
    //   width: 455,
    //   left: 90,
    //   top: 50,
    //   right: 0,
    //   bottom: 35,
    //   borderColor: '#0a2549',
    //   containLabel: false,
    //   borderWidth: 4
    // },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '550',
      height: '44',
      orient: 'horizontal',
      top: 10,
      right: 230,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '2G流量'
        },
        {
          name: '2G流量日常值',
          icon: 'line'
        }
        // {
        //   name: '4G流量'
        // },
        // {
        //   name: '4G流量日常值',
        //   icon: 'line'
        // }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      show: false,
      type: 'category',
      // position: 'top',
      // name: '(TB)',
      silent: false,
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        // 位于+-y轴中间 onZero
        onZero: true,
        // show: true,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
    },
    yAxis:
    [
      {
        type: 'value',
        // name: '4G',
        inverse: true,
        // interval: 3,
        // min: 20,
        splitArea: {show: false},
        show: true,
        splitNumber: 4,
        // position: 'right',
        // y轴轴线颜色
        axisLine: {
          show: true,
          lineStyle: {
            // color: '#0896a9',
            color: '#406987',
            width: 2
          }
        },
        axisLabel: {
          onZero: true, // x轴或者y轴是否显示在另一个轴的0刻度处
          show: true,
          fontSize: 18,
          margin: 15,
          fontFamily: 'MF_LangQian',
          color: '#e5f1ff',
          formatter: function(value, index) {
            if (value < 0) {
              return -value;
            } else {
              return value;
            }
          }
        },
        // 坐标轴在 grid 区域中的分隔线
        splitLine: {
          show: true,
          lineStyle: {
            color: '#43698d',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    // 直角坐标系 grid 中的 y 轴
    // yAxis: {
    //   type: 'value',
    //   name: '4G',
    //   inverse: true,
    //   splitArea: {show: false},
    //   show: true,
    //   splitNumber: 4,
    //   // position: 'right',
    //   // y轴轴线颜色
    //   axisLine: {
    //     show: true,
    //     lineStyle: {
    //       // color: '#0896a9',
    //       color: '#406987',
    //       width: 2
    //     }
    //   },
    //   axisLabel: {
    //     onZero: false, // x轴或者y轴是否显示在另一个轴的0刻度处
    //     show: true,
    //     fontSize: 18,
    //     margin: 15,
    //     fontFamily: 'MF_LangQian',
    //     color: '#e5f1ff',
    //     formatter: function(value, index) {
    //       if (value < 0) {
    //         return -value;
    //       }
    //     }
    //   },
    //   // 坐标轴在 grid 区域中的分隔线
    //   splitLine: {
    //     show: true,
    //     lineStyle: {
    //       color: '#43698d',
    //       width: 1,
    //       type: 'solid'
    //     }
    //   },
    //   axisTick: {
    //     show: false
    //   }
    // },
    // 系列列表
    series: [
      // 柱状图
      {
        type: 'bar',
        name: '2G流量',
        stack: 'one',
        // stack: '流量',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#1cb3ff',
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
              color: '#1cb3ff'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        label: {
          normal: {
            show: false,
            formatter: function(value) {
              if (value.data < 0) {
                return -value.data;
              }
            }
          }
        },
        data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
      },
      // 折线图
      {
        type: 'line',
        name: '2G流量日常值',
        stack: 'one',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#ffe267',
            // 拐点边框颜色
            borderColor: '#ffe267',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [-52, -32, -39, -16, -62, -12, -66, -66]
        // data: [32, 22, 36, 26, 32, 22, 36, 26]
      }
      // // 柱状图
      // {
      //   type: 'bar',
      //   name: '4G流量',
      //   // stack: '流量',
      //   stack: 'two',
      //   symbolSize: 2,
      //   smooth: true,
      //   // 柱条边框设置
      //   itemStyle: {
      //     normal: {
      //       // 圆角半径 上右下左
      //       // barBorderRadius: [6, 6, 0, 0],
      //       // 柱条颜色 黄色
      //       color: '#cbda0b',
      //       // 拐点边框颜色
      //       // borderColor: '#94ae29',
      //       // borderWidth: '4',
      //       // 线条样式
      //       lineStyle: {
      //         normal: {
      //           // color: '#ac84fe',
      //           width: 2
      //         }
      //       }
      //     }
      //   },
      //   // 区域样式
      //   areaStyle: {
      //     normal: {
      //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //         offset: 0,
      //         // color: 'rgba(12, 42, 82, 0.8)' // 0% 处的颜色
      //         color: '#cbda0b'
      //       }, {
      //         offset: 1,
      //         // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
      //         color: '#00123b'
      //       }], false)
      //     }
      //   },
      //   // data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
      //   data: [32, 22, 36, 26, 32, 22, 36, 26]
      // },
      // // 折线图
      // {
      //   type: 'line',
      //   name: '4G流量日常值',
      //   stack: 'two',
      //   symbolSize: 2,
      //   smooth: true,
      //   // 拐点样式
      //   itemStyle: {
      //     normal: {
      //       // 本应该是拐点颜色,此处线条颜色也是它
      //       color: '#b780f8',
      //       // 拐点边框颜色
      //       borderColor: '#b780f8',
      //       borderWidth: '8',
      //       // 线条样式
      //       lineStyle: {
      //         normal: {
      //           width: 2
      //         }
      //       }
      //     }
      //   },
      //   data: [32, 22, 36, 26, 32, 22, 36, 26]
      // }
    ]
  },
  option222test: {
    title: {
      show: false,
      text: '单位(GB)',
      textStyle: {
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      top: 0,
      right: 0
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      width: 385,
      // left: '18%',
      top: '56%',
      right: '15%',
      bottom: '10%',
      left: '15%',
      borderColor: '#0a2549',
      containLabel: false,
      borderWidth: 4
    },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '250',
      height: '44',
      orient: 'horizontal',
      top: 10,
      left: 230,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '4G流量'
        },
        {
          name: '4G流量日常值',
          icon: 'line'
        }
        // {
        //   name: '4G流量'
        // },
        // {
        //   name: '4G流量日常值',
        //   icon: 'line'
        // }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      // show: false,
      // position: 'bottom',
      offset: 6,
      type: 'category',
      // position: 'top',
      // name: '(TB)',
      silent: false,
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        // 位于+-y轴中间 onZero
        onZero: true,
        // show: true,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
    },
    yAxis:
    [
      {
        type: 'value',
        // name: '4G',
        // interval: 3,
        inverse: true,
        splitArea: {show: false},
        show: true,
        splitNumber: 4,
        // interval: 3,
        // position: 'right',
        // y轴轴线颜色
        axisLine: {
          show: true,
          lineStyle: {
            // color: '#0896a9',
            color: '#406987',
            width: 2
          }
        },
        axisLabel: {
          onZero: true, // x轴或者y轴是否显示在另一个轴的0刻度处
          show: true,
          fontSize: 18,
          margin: 15,
          fontFamily: 'MF_LangQian',
          color: '#e5f1ff',
          formatter: function(value, index) {
            if (value < 0) {
              return -value;
            } else {
              return value;
            }
          }
        },
        // 坐标轴在 grid 区域中的分隔线
        splitLine: {
          show: true,
          lineStyle: {
            color: '#43698d',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    // 系列列表
    series: [
      // // 柱状图
      {
        type: 'bar',
        name: '4G流量',
        // stack: '流量',
        stack: 'two',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#cbda0b',
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
              color: '#cbda0b'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        // data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
        data: [32, 22, 36, 26, 32, 22, 36, 26]
      },
      // 折线图
      {
        type: 'line',
        name: '4G流量日常值',
        stack: 'two',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#b780f8',
            // 拐点边框颜色
            borderColor: '#b780f8',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [32, 22, 36, 26, 32, 22, 36, 26]
      }
    ]
  },
  // 区域粒度 柱状图
  option333原来: {
    title: {
      show: false
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      left: 25,
      top: 50,
      right: 0,
      bottom: 10,
      borderColor: '#0a2549',
      containLabel: true,
      borderWidth: 4
    },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '700',
      height: '44',
      orient: 'horizontal',
      top: 10,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '2G话务量'
        },
        {
          name: '2G话务量日常值',
          icon: 'line'
        },
        {
          name: '4G话务量'
        },
        {
          name: '4G话务量日常',
          icon: 'line'
        }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      type: 'category',
      // position: 'top',
      // name: '(TB)',
      silent: false,
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        // 位于+-y轴中间 onZero
        onZero: true,
        // show: true,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
    },
    yAxis:
    [
      {
        type: 'value',
        // name: '2G话务量',
        inverse: true,
        splitArea: {show: false},
        show: true,
        splitNumber: 4,
        // position: 'right',
        // y轴轴线颜色
        axisLine: {
          show: true,
          lineStyle: {
            // color: '#0896a9',
            color: '#406987',
            width: 2
          }
        },
        axisLabel: {
          onZero: false, // x轴或者y轴是否显示在另一个轴的0刻度处
          show: true,
          fontSize: 18,
          margin: 15,
          fontFamily: 'MF_LangQian',
          color: '#e5f1ff',
          formatter: function(value, index) {
            if (value < 0) {
              return -value;
            } else {
              return value;
            }
          }
        },
        // 坐标轴在 grid 区域中的分隔线
        splitLine: {
          show: true,
          lineStyle: {
            color: '#43698d',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    // 系列列表
    series: [
      // 柱状图
      {
        type: 'bar',
        name: '2G话务量',
        stack: 'one',
        // stack: '流量',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            color: '#5393f3',
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
              color: '#1cb3ff'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        label: {
          normal: {
            show: false,
            formatter: function(value) {
              if (value.data < 0) {
                return -value.data;
              } else {
                return value;
              }
            }
          }
        },
        data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
      },
      // 折线图
      {
        type: 'line',
        name: '2G话务量日常值',
        stack: 'one',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#a3fd90',
            // 拐点边框颜色
            borderColor: '#a3fd90',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [-52, -32, -39, -16, -62, -12, -66, -66]
        // data: [32, 22, 36, 26, 32, 22, 36, 26]
      },
      // 柱状图
      {
        type: 'bar',
        name: '4G话务量',
        // stack: '流量',
        stack: 'two',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            color: '#eecf71',
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
              color: '#cbda0b'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        // data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
        data: [32, 22, 36, 26, 32, 22, 36, 26]
      },
      // 折线图
      {
        type: 'line',
        name: '4G话务量日常',
        stack: 'two',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#5da5db',
            // 拐点边框颜色
            borderColor: '#5da5db',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [32, 22, 36, 26, 32, 22, 36, 26]
      }
    ]
  },
  option333: {
    title: {
      show: false
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      width: 385,
      // left: '18%',
      top: '26%',
      right: '15%',
      left: '20%',
      bottom: '16%',
      borderColor: '#0a2549',
      containLabel: false,
      borderWidth: 4
    },
    // grid: {
    //   show: false,
    //   // width: 455,
    //   width: 455,
    //   left: 90,
    //   top: 50,
    //   right: 0,
    //   bottom: 35,
    //   borderColor: '#0a2549',
    //   containLabel: false,
    //   borderWidth: 4
    // },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '550',
      height: '44',
      orient: 'horizontal',
      top: 10,
      right: 230,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '2G话务量'
        },
        {
          name: '2G话务量日常值',
          icon: 'line'
        }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      show: false,
      offset: 6,
      type: 'category',
      // position: 'top',
      // name: '(TB)',
      silent: false,
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        // 位于+-y轴中间 onZero
        onZero: true,
        // show: true,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
    },
    yAxis:
    [
      {
        type: 'value',
        // name: '2G话务量',
        inverse: true,
        splitArea: {show: false},
        show: true,
        splitNumber: 4,
        // position: 'right',
        // y轴轴线颜色
        axisLine: {
          show: true,
          lineStyle: {
            // color: '#0896a9',
            color: '#406987',
            width: 2
          }
        },
        axisLabel: {
          onZero: false, // x轴或者y轴是否显示在另一个轴的0刻度处
          show: true,
          fontSize: 18,
          margin: 15,
          fontFamily: 'MF_LangQian',
          color: '#e5f1ff',
          formatter: function(value, index) {
            if (value < 0) {
              return -value;
            } else {
              return value;
            }
          }
        },
        // 坐标轴在 grid 区域中的分隔线
        splitLine: {
          show: true,
          lineStyle: {
            color: '#43698d',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    // 系列列表
    series: [
      // 柱状图
      {
        type: 'bar',
        name: '2G话务量',
        stack: 'one',
        // stack: '流量',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            color: '#5393f3',
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
              color: '#1cb3ff'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        label: {
          normal: {
            show: false,
            formatter: function(value) {
              if (value.data < 0) {
                return -value.data;
              } else {
                return value;
              }
            }
          }
        },
        data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
      },
      // 折线图
      {
        type: 'line',
        name: '2G话务量日常值',
        stack: 'one',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#a3fd90',
            // 拐点边框颜色
            borderColor: '#a3fd90',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [-52, -32, -39, -16, -62, -12, -66, -66]
        // data: [32, 22, 36, 26, 32, 22, 36, 26]
      }
    ]
  },
  option333test: {
    title: {
      show: false
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      width: 385,
      // left: '18%',
      top: '56%',
      right: '15%',
      bottom: '10%',
      left: '20%',
      borderColor: '#0a2549',
      containLabel: false,
      borderWidth: 4
    },
    // grid: {
    //   show: false,
    //   width: 455,
    //   left: 90,
    //   // left: 25,
    //   // top: 50,
    //   top: 160,
    //   right: 0,
    //   bottom: 30,
    //   borderColor: '#0a2549',
    //   containLabel: false,
    //   borderWidth: 4
    // },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '250',
      height: '44',
      orient: 'horizontal',
      top: 10,
      left: 230,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: 'volte当前值'
        },
        {
          name: 'volte日常值',
          icon: 'line'
        }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: true,
      // trigger: 'axis',
      axisPointer: {
        type: 'line'
      },
      formatter: function(value) {
        if (value.data < 0) {
          return -value.data;
        } else {
          return value.data;
        }
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      type: 'category',
      // position: 'top',
      // name: '(TB)',
      silent: false,
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        // 位于+-y轴中间 onZero
        onZero: true,
        // show: true,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24']
    },
    yAxis:
    [
      {
        type: 'value',
        // name: '2G话务量',
        inverse: true,
        splitArea: {show: false},
        show: true,
        splitNumber: 4,
        // position: 'right',
        // y轴轴线颜色
        axisLine: {
          show: true,
          lineStyle: {
            // color: '#0896a9',
            color: '#406987',
            width: 2
          }
        },
        axisLabel: {
          onZero: false, // x轴或者y轴是否显示在另一个轴的0刻度处
          show: true,
          fontSize: 18,
          margin: 15,
          fontFamily: 'MF_LangQian',
          color: '#e5f1ff',
          formatter: function(value, index) {
            if (value < 0) {
              return -value;
            } else {
              return value;
            }
          }
        },
        // 坐标轴在 grid 区域中的分隔线
        splitLine: {
          show: true,
          lineStyle: {
            color: '#43698d',
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    // 系列列表
    series: [
      // 柱状图
      {
        type: 'bar',
        name: 'volte当前值',
        // stack: '流量',
        stack: 'two',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#62aedc',
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
              color: '#cbda0b'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        // data: [-12, -42, -26, -16, -52, -32, -16, -36, -12]
        data: [32, 22, 36, 26, 32, 22, 36, 26]
      },
      // 折线图
      {
        type: 'line',
        name: 'volte日常值',
        stack: 'two',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#fefb6f',
            // 拐点边框颜色
            borderColor: '#fefb6f',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [32, 22, 36, 26, 32, 22, 36, 26]
      }
    ]
  },
  // 水球图
  option81: {
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
              // color: '#90f6f8'
              color: '#3f6aa9'
            }
          },
          {
            value: 0.3,
            itemStyle: {
              // color: '#90f6f8'
              color: '#3f6aa9'
            }
          }
        ],
        radius: '97%',
        outline: {
          itemStyle: {
            borderWidth: 0
            // borderColor: '#62def5'
          }
        },
        backgroundStyle: {
          // color: '#11e4f1',
          color: '#253d76'
          // borderWidth: 7,
          // borderColor: '#018899'
        },
        label: {
          // show: true,
          normal: {
            textStyle: {
              color: '#8cef83',
              // insideColor: '#fc6f12',
              fontSize: 23,
              fontFamily: 'PixelLCD-7'
            }
          }
        }
      }
    ]
  },
  option91: {
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
              color: '#5391b6'
            }
          },
          {
            value: 0.3,
            itemStyle: {
              color: '#3e6e9f'
            }
          }
        ],
        radius: '97%',
        outline: {
          itemStyle: {
            // borderWidth: 1,
            borderWidth: 0
            // borderColor: '#62def5'
          }
        },
        backgroundStyle: {
          // color: '#11e4f1',
          color: '#2c4e7a'
          // borderWidth: 7,
          // borderColor: '#018899'
        },
        label: {
          // show: true,
          normal: {
            textStyle: {
              color: '#8cef83',
              // insideColor: '#fc6f12',
              fontSize: 26,
              fontFamily: 'MicrosoftYaHei'
            }
          }
        }
      }
    ]
  },
  // 官方实例
  option222222222: {
    backgroundColor: '#eee',
    legend: {
      data: ['bar', 'bar2', 'bar3', 'bar4'],
      align: 'left',
      left: 10
    },
    brush: {
      toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
      xAxisIndex: 0
    },
    toolbox: {
      feature: {
        magicType: {
          type: ['stack', 'tiled']
        },
        dataView: {}
      }
    },
    tooltip: {},
    xAxis: {
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
      name: 'X Axis',
      silent: false,
      axisLine: {onZero: true},
      splitLine: {show: false},
      splitArea: {show: false}
    },
    yAxis: {
      inverse: true,
      splitArea: {show: false}
    },
    grid: {
      left: 100
    },
    visualMap: {
      type: 'continuous',
      dimension: 1,
      text: ['High', 'Low'],
      inverse: true,
      itemHeight: 200,
      calculable: true,
      min: -2,
      max: 6,
      top: 60,
      left: 10,
      inRange: {
        colorLightness: [0.4, 0.8]
      },
      outOfRange: {
        color: '#bbb'
      },
      controller: {
        inRange: {
          color: '#2f4554'
        }
      }
    },
    series: [
      {
        name: 'bar',
        type: 'bar',
        stack: 'one',
        // itemStyle: itemStyle,
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#1cb3ff',
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
        data: [32, 22, 36, 26, 32, 22, 36, 26, 32, 22, 36, 26, 32, 22, 36, 26]
      },
      {
        name: 'bar2',
        type: 'bar',
        stack: 'one',
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#1cb3ff',
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
        data: [32, 22, 36, 26, 32, 22, 36, 26, 32, 22, 36, 26, 32, 22, 36, 26]
      },
      {
        name: 'bar3',
        type: 'line',
        stack: 'two',
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#1cb3ff',
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
        data: [-12, -42, -26, -16, -52, -32, -16]
      },
      {
        name: 'bar4',
        type: 'bar',
        stack: 'two',
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#1cb3ff',
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
        data: [52, 32, 39, 16, 62, 12, 66, 66, 22, 12, 36, 26, 32, 22, 36, 26]
      }
    ]
  },
  option3333: {
    title: {
      show: false,
      text: '单位(GB)',
      textStyle: {
        fontFamily: 'MF_LangQian',
        color: '#e5f1ff'
      },
      top: 0,
      right: 0
    },
    // 柱条宽度
    barWidth: 14,
    barCategoryGap: '10',
    // barGap: '-100%',
    // 直角坐标系内绘制表格，表格与legend距离也在此调整
    grid: {
      show: false,
      left: 25,
      top: 50,
      right: 0,
      bottom: 10,
      borderColor: '#0a2549',
      containLabel: true,
      borderWidth: 4
    },
    // 图例组件
    legend: {
      show: true,
      // left: 'center',
      width: '550',
      height: '44',
      orient: 'horizontal',
      top: 10,
      textStyle: {
        color: '#e5f1ff',
        fontSize: 14
      },
      // 图例每项的间隔
      // itemGap: 14,
      // 图例的数据数组
      data: [
        {
          name: '2G话务量'
        },
        {
          name: '2G话务量日常值',
          icon: 'line'
        },
        {
          name: '4G话务量'
        },
        {
          name: '4G话务量日常值',
          icon: 'line'
        }
      ]
    },
    // 图例的 tooltip 配置
    tooltip: {
      show: false,
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      }
    },
    // 直角坐标系 grid 中的 x 轴
    xAxis: {
      type: 'category',
      // position: 'top',
      // name: '(TB)',
      silent: false,
      nameLocation: 'start',
      nameGap: 30,
      // x轴留白
      boundaryGap: true,
      // 坐标轴轴线相关设置
      axisLine: {
        show: true,
        // show: true,
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
      data: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20']
    },
    // 直角坐标系 grid 中的 y 轴
    yAxis: [
      {
        type: 'value',
        name: '4G流量',
        show: true,
        splitNumber: 4,
        // position: 'left',
        // y轴轴线颜色
        axisLine: {
          // onZero: false, // x轴或者y轴是否显示在另一个轴的0刻度处
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
      {
        type: 'value',
        name: '4G流量日常值',
        inverse: true,
        show: true,
        splitNumber: 4,
        // position: 'right',
        // y轴轴线颜色
        axisLine: {
          show: true,
          lineStyle: {
            color: '#0896a9',
            width: 2
          }
        },
        axisLabel: {
          onZero: false, // x轴或者y轴是否显示在另一个轴的0刻度处
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
      }
    ],
    // yAxis: {
    //   type: 'value',
    //   inverse: true,
    //   show: true,
    //   splitNumber: 4,
    //   // y轴轴线颜色
    //   axisLine: {
    //     show: true,
    //     lineStyle: {
    //       color: '#0896a9',
    //       width: 2
    //     }
    //   },
    //   axisLabel: {
    //     show: true,
    //     fontSize: 18,
    //     margin: 15,
    //     fontFamily: 'MF_LangQian',
    //     color: '#e5f1ff'
    //   },
    //   // 坐标轴在 grid 区域中的分隔线
    //   splitLine: {
    //     show: false,
    //     lineStyle: {
    //       color: '#294277',
    //       width: 1,
    //       type: 'solid'
    //     }
    //   },
    //   axisTick: {
    //     show: false
    //   }
    // },
    // 系列列表
    series: [
      // 柱状图
      {
        type: 'bar',
        name: '2G话务量',
        // stack: '流量',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#7ee040',
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
              color: '#1cb3ff'
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
        name: '2G话务量日常值',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#67b6d7',
            // 拐点边框颜色
            borderColor: '#67b6d7',
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
      },
      // 柱状图
      {
        type: 'bar',
        name: '4G话务量',
        // stack: '流量',
        symbolSize: 2,
        smooth: true,
        // 柱条边框设置
        itemStyle: {
          normal: {
            // 圆角半径 上右下左
            // barBorderRadius: [6, 6, 0, 0],
            // 柱条颜色 黄色
            color: '#63b0dd',
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
              color: '#cbda0b'
            }, {
              offset: 1,
              // color: 'rgba(3, 243, 167, 0)' // 100% 处的颜色
              color: '#00123b'
            }], false)
          }
        },
        data: [12, 42, 26, 16, 52, 32, 16, 36, 12, 52, 36, 26, 32, 22, 36, 26]
      },
      // 折线图
      {
        type: 'line',
        name: '4G话务量日常值',
        symbolSize: 2,
        smooth: true,
        // 拐点样式
        itemStyle: {
          normal: {
            // 本应该是拐点颜色,此处线条颜色也是它
            color: '#fefb6f',
            // 拐点边框颜色
            borderColor: '#fefb6f',
            borderWidth: '8',
            // 线条样式
            lineStyle: {
              normal: {
                width: 2
              }
            }
          }
        },
        data: [52, 32, 39, 16, 62, 12, 66, 66, 22, 12, 36, 26, 32, 22, 36, 26]
      }
    ]
  }
}
