export default {
  option1: {
    radar: {
      center: ['50%', '53%'],
      radius: '69%',
      splitNumber: 0,
      shape: 'polygon',
      axisLine: {
        lineStyle: {
          color: '#26508e'
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#02253e']
        }
      },
      indicator: [
        {name: '', max: 100},
        {name: '', max: 100},
        {name: '', max: 100},
        {name: '', max: 100},
        {name: '', max: 100},
        {name: '', max: 100},
        {name: '', max: 100},
        {name: '', max: 100},
        {name: '', max: 100}
      ]
    },
    series: [{
      type: 'radar',
      itemStyle: {
        normal: {
          lineStyle: {
            color: 'yellow'
          }
        }
      },
      data: [
        {
          value: [10, 20, 30, 40, 50, 60, 70, 80, 90]
        }
      ]
    }]
  },
  option2: {
    series: [
      {
        type: 'pie',
        radius: ['90%', '100%'],
        silent: true,
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 10,
            itemStyle: {
              normal: {
                color: '#08316e'
              }
            }
          },
          {
            value: 90,
            itemStyle: {
              normal: {
                color: '#00ffff'
              }
            }
          }
        ]
      },
      {
        type: 'pie',
        radius: ['78%', '88%'],
        silent: true,
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 20,
            itemStyle: {
              normal: {
                color: '#08316e'
              }
            }
          },
          {
            value: 80,
            itemStyle: {
              normal: {
                color: '#00ff00'
              }
            }
          }
        ]
      },
      {
        type: 'pie',
        radius: ['66%', '76%'],
        silent: true,
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 30,
            itemStyle: {
              normal: {
                color: '#08316e'
              }
            }
          },
          {
            value: 70,
            itemStyle: {
              normal: {
                color: '#df9f3b'
              }
            }
          }
        ]
      },
      {
        type: 'pie',
        radius: ['54%', '64%'],
        silent: true,
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 40,
            itemStyle: {
              normal: {
                color: '#08316e'
              }
            }
          },
          {
            value: 60,
            itemStyle: {
              normal: {
                color: '#df9f3b'
              }
            }
          }
        ]
      },
      {
        type: 'pie',
        radius: ['42%', '52%'],
        silent: true,
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 50,
            itemStyle: {
              normal: {
                color: '#08316e'
              }
            }
          },
          {
            value: 50,
            itemStyle: {
              normal: {
                color: '#eb601b'
              }
            }
          }
        ]
      }
    ]
  },
  option3: {
    grid: {
      left: 2,
      top: 10,
      right: 20,
      bottom: 2,
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 0,
        fontSize: 16,
        fontFamily: 'Microsoft YaHei',
        color: '#ffffff'
      }
    },
    yAxis: {
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      boundaryGap: true,
      axisLabel: {
        show: true,
        interval: 0,
        fontSize: 16,
        fontFamily: 'Microsoft YaHei',
        color: '#ffffff'
      },
      type: 'category',
      data: ['优酷视频', '网易云音乐', '淘宝', '微信', 'QQ', '虎牙直播']
    },
    series: [
      {
        type: 'bar',
        barWidth: 12,
        itemStyle: {
          normal: {
            color: '#18deea'
          }
        },
        data: [0.1, 0.5, 0.3, 1.2, 0.8, 0.6]
      }
    ]
  },
  option4: {
    series: [
      {
        type: 'pie',
        radius: ['28%', '40%'],
        silent: true,
        label: {
          normal: {
            show: true,
            position: 'outside',
            formatter: '{c}\n\n{d}%',
            fontFamily: 'MF_LangQian',
            color: '#bdc31a',
            fontSize: 14
          }
        },
        labelLine: {
          normal: {
            show: true,
            smooth: false,
            length: 10,
            length2: 45,
            lineStyle: {
              color: '#ffffff',
              width: 1,
              type: 'solid'
            }
          }
        },
        data: [
          {
            value: 10,
            itemStyle: {
              normal: {
                color: '#3393f5'
              }
            }
          },
          {
            value: 18,
            itemStyle: {
              normal: {
                color: '#fc203a'
              }
            }
          },
          {
            value: 20,
            itemStyle: {
              normal: {
                color: '#fc7722'
              }
            }
          },
          {
            value: 20,
            itemStyle: {
              normal: {
                color: '#fbc033'
              }
            }
          },
          {
            value: 15,
            itemStyle: {
              normal: {
                color: '#03bd42'
              }
            }
          },
          {
            value: 15,
            itemStyle: {
              normal: {
                color: '#56eeff'
              }
            }
          }
        ]
      }
    ]
  },
  option5: {
    series: [
      {
        type: 'pie',
        radius: ['90%', '100%'],
        silent: true,
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 10,
            itemStyle: {
              normal: {
                color: '#08316e'
              }
            }
          },
          {
            value: 90,
            itemStyle: {
              normal: {
                color: '#00ffff'
              }
            }
          }
        ]
      },
      {
        type: 'pie',
        radius: ['78%', '88%'],
        silent: true,
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 20,
            itemStyle: {
              normal: {
                color: '#08316e'
              }
            }
          },
          {
            value: 80,
            itemStyle: {
              normal: {
                color: '#00ff00'
              }
            }
          }
        ]
      },
      {
        type: 'pie',
        radius: ['66%', '76%'],
        silent: true,
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 30,
            itemStyle: {
              normal: {
                color: '#08316e'
              }
            }
          },
          {
            value: 70,
            itemStyle: {
              normal: {
                color: '#df9f3b'
              }
            }
          }
        ]
      },
      {
        type: 'pie',
        radius: ['54%', '64%'],
        silent: true,
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 40,
            itemStyle: {
              normal: {
                color: '#08316e'
              }
            }
          },
          {
            value: 60,
            itemStyle: {
              normal: {
                color: '#df9f3b'
              }
            }
          }
        ]
      },
      {
        type: 'pie',
        radius: ['42%', '52%'],
        silent: true,
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 50,
            itemStyle: {
              normal: {
                color: '#08316e'
              }
            }
          },
          {
            value: 50,
            itemStyle: {
              normal: {
                color: '#eb601b'
              }
            }
          }
        ]
      }
    ]
  },
  option6: {
    series: [
      {
        type: 'gauge',
        radius: '96%',
        min: 0,
        max: 100,
        startAngle: 270,
        endAngle: -89,
        // data: [{value: 18}],
        splitNumber: 20,
        axisLine: {
          show: true,
          lineStyle: {
            color: [[0.75, '#18deea'], [1, '#09509c']],
            width: 24
          }
        },
        splitLine: {
          show: true,
          length: 30,
          lineStyle: {
            color: '#000612',
            width: 4,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        pointer: {
          width: 6,
          length: '80%',
          show: false
        },
        itemStyle: {
          normal: {
            color: '#ffffff'
          }
        },
        detail: {
          show: false
        }
      }
    ]
  },
  option7: {
    series: [
      {
        type: 'gauge',
        radius: '97%',
        min: 0,
        max: 100,
        startAngle: 270,
        endAngle: -89,
        // data: [{value: 18}],
        splitNumber: 40,
        axisLine: {
          show: true,
          lineStyle: {
            color: [[0.75, '#18deea'], [1, '#09509c']],
            width: 24
          }
        },
        splitLine: {
          show: true,
          length: 30,
          lineStyle: {
            color: '#000612',
            width: 2.1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        pointer: {
          width: 6,
          length: '80%',
          show: false
        },
        itemStyle: {
          normal: {
            color: '#ffffff'
          }
        },
        detail: {
          show: false
        }
      }
    ]
  },
  option8: {
    series: [
      {
        type: 'pie',
        radius: ['75%', '100%'],
        silent: true,
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 75,
            itemStyle: {
              normal: {
                color: '#09337a'
              }
            }
          },
          {
            value: 25,
            itemStyle: {
              normal: {
                color: '#02aef7'
              }
            }
          }
        ]
      }
    ]
  },
  option9: {
    series: [
      {
        type: 'pie',
        radius: ['75%', '100%'],
        silent: true,
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          {
            value: 75,
            itemStyle: {
              normal: {
                color: '#17deea'
              }
            }
          },
          {
            value: 25,
            itemStyle: {
              normal: {
                color: '#00132e'
              }
            }
          }
        ]
      }
    ]
  },
  option10: {
    series: [
      {
        type: 'gauge',
        radius: '96%',
        min: 0,
        max: 100,
        startAngle: 270,
        endAngle: -89,
        // data: [{value: 18}],
        splitNumber: 20,
        axisLine: {
          show: true,
          lineStyle: {
            color: [[0.75, '#18deea'], [1, '#09509c']],
            width: 24
          }
        },
        splitLine: {
          show: true,
          length: 30,
          lineStyle: {
            color: '#000612',
            width: 4,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        pointer: {
          width: 6,
          length: '80%',
          show: false
        },
        itemStyle: {
          normal: {
            color: '#ffffff'
          }
        },
        detail: {
          show: false
        }
      }
    ]
  },
  option11: {
    grid: {
      left: 24,
      top: 26,
      right: 20,
      bottom: 26,
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#09b9cb',
          width: 1
        }
      },
      boundaryGap: true,
      axisLabel: {
        show: true,
        interval: 0,
        fontSize: 16,
        fontFamily: 'MF_LangQian',
        color: '#ffffff'
      },
      type: 'category',
      data: ['长春', '吉林', '延边州', '四平', '通化', '松原', '白城', '白山', '辽源']
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#09b9cb',
          width: 1
        }
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 0,
        fontSize: 16,
        fontFamily: 'MF_LangQian',
        color: '#ffffff'
      }
    },
    series: [
      {
        type: 'bar',
        barWidth: 18,
        itemStyle: {
          normal: {
            color: '#0ac5d6',
            barBorderRadius: [10, 10, 0, 0]
          }
        },
        data: [20, 40, 40, 50, 40, 20, 20, 10, 60]
      },
      {
        type: 'bar',
        barWidth: 18,
        itemStyle: {
          normal: {
            color: '#f1e40d',
            barBorderRadius: [10, 10, 0, 0]
          }
        },
        data: [20, 30, 40, 50, 40, 30, 20, 10, 60]
      }
    ]
  }
}