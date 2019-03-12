export default {
  option1: {
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
  option2: {
    series: [
      {
        type: 'gauge',
        radius: '96%',
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
          length: '60%',
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
  option3: {
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
                color: '#02aef7'
              }
            }
          },
          {
            value: 25,
            itemStyle: {
              normal: {
                color: '#09337a'
              }
            }
          }
        ]
      }
    ]
  },
  option4: {
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
  option5: {
    grid: {
      left: 20,
      top: 10,
      right: 7,
      bottom: 20,
      containLabel: true
    },
    legend: {
      bottom: '0',
      textStyle: {
        color: '#fff'
      },
      data: [
        {
          name: '高负荷小区数量'
        },
        {name: '无线利用率'}
      ]
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
        fontSize: 12,
        fontFamily: 'MF_LangQian',
        color: '#ffffff',
        rotate: 40
      },
      type: 'category',
      data: []
    },
    yAxis: [
      {
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
          fontSize: 12,
          fontFamily: 'MF_LangQian',
          color: '#ffffff'
        }
      },
      {
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
          // interval: 0,
          fontSize: 12,
          fontFamily: 'MF_LangQian',
          color: '#ffffff',
          formatter: '{value} %'
        }
      }
    ],
    series: [
      {
        type: 'bar',
        name: '高负荷小区数量',
        barWidth: 18,
        itemStyle: {
          normal: {
            color: '#40f5ea',
            barBorderRadius: [10, 10, 0, 0]
          }
        },
        data: []
      },
      {
        type: 'line',
        symbolSize: 10,
        yAxisIndex: 1,
        name: '无线利用率',
        smooth: true,
        lineStyle: {
          normal: {
            color: '#bd4624',
            width: 2
          }
        },
        data: []
      }
    ]
  },
  option6: {
    grid: {
      left: 20,
      top: 10,
      right: 10,
      bottom: 25,
      containLabel: true
    },
    legend: {
      bottom: '0',
      textStyle: {
        color: '#fff'
      },
      data: [
        {
          name: '高掉话'
        },
        {name: '高拥塞'},
        {name: 'GSM最差小区'},
        {name: '日常值'},
        {name: '增幅'}
      ]
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
      data: []
    },
    yAxis: [
      {
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
          fontSize: 12,
          fontFamily: 'MF_LangQian',
          color: '#ffffff'
        }
      },
      {
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
          // interval: 0,
          fontSize: 12,
          fontFamily: 'MF_LangQian',
          color: '#ffffff',
          formatter: '{value} %'
        }
      }
    ],
    series: [
      {
        type: 'bar',
        barWidth: 10,
        name: '高掉话',
        itemStyle: {
          normal: {
            color: '#1165bb',
            barBorderRadius: [10, 10, 0, 0]
          }
        },
        data: [20, 40, 40, 50, 40, 20, 20, 10, 60]
      },
      {
        type: 'bar',
        barWidth: 10,
        name: 'GSM最差小区',
        itemStyle: {
          normal: {
            color: '#5736c6',
            barBorderRadius: [10, 10, 0, 0]
          }
        },
        data: [20, 30, 40, 50, 40, 30, 20, 10, 60]
      },
      {
        type: 'bar',
        name: '高拥塞',
        barWidth: 10,
        itemStyle: {
          normal: {
            color: '#c7ff66',
            barBorderRadius: [10, 10, 0, 0]
          }
        },
        data: [20, 40, 40, 50, 40, 20, 20, 10, 60]
      },
      {
        type: 'line',
        symbolSize: 10,
        yAxisIndex: 1,
        name: '日常值',
        smooth: true,
        lineStyle: {
          normal: {
            color: '#00dc07',
            width: 2
          }
        },
        data: [20, 40, 40, 50, 40, 20, 80, 10, 60]
      },
      {
        type: 'line',
        symbolSize: 10,
        yAxisIndex: 1,
        name: '增幅',
        smooth: true,
        lineStyle: {
          normal: {
            color: '#bd4624',
            width: 2
          }
        },
        data: [20, 10, 30, 60, 20, 50, 66, 70, 60]
      }
    ]
  },
  option7: {
    grid: {
      left: 20,
      top: 10,
      right: 10,
      bottom: 25,
      containLabel: true
    },
    legend: {
      bottom: '0',
      textStyle: {
        color: '#fff'
      },
      data: [
        {
          name: '高掉话'
        },
        {name: '高拥塞'},
        {name: 'LTE最差小区'},
        {name: '日常值'},
        {name: '增幅'}
      ]
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
    yAxis: [
      {
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
          fontSize: 12,
          fontFamily: 'MF_LangQian',
          color: '#ffffff'
        }
      },
      {
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
          // interval: 0,
          fontSize: 12,
          fontFamily: 'MF_LangQian',
          color: '#ffffff',
          formatter: '{value} %'
        }
      }
    ],
    series: [
      {
        type: 'bar',
        barWidth: 10,
        name: '高掉话',
        itemStyle: {
          normal: {
            color: '#1165bb',
            barBorderRadius: [10, 10, 0, 0]
          }
        },
        data: [20, 40, 40, 50, 40, 20, 20, 10, 60]
      },
      {
        type: 'bar',
        name: '高拥塞',
        barWidth: 10,
        itemStyle: {
          normal: {
            color: '#c7ff66',
            barBorderRadius: [10, 10, 0, 0]
          }
        },
        data: [20, 40, 40, 50, 40, 20, 20, 10, 60]
      },
      {
        type: 'bar',
        barWidth: 10,
        name: 'LTE最差小区',
        itemStyle: {
          normal: {
            color: '#5736c6',
            barBorderRadius: [10, 10, 0, 0]
          }
        },
        data: [20, 30, 40, 50, 40, 30, 20, 10, 60]
      },
      {
        type: 'line',
        symbolSize: 10,
        yAxisIndex: 1,
        name: '日常值',
        smooth: true,
        lineStyle: {
          normal: {
            color: '#00dc07',
            width: 2
          }
        },
        data: [20, 40, 40, 50, 40, 20, 80, 10, 60]
      },
      {
        type: 'line',
        symbolSize: 10,
        yAxisIndex: 1,
        name: '增幅',
        smooth: true,
        lineStyle: {
          normal: {
            color: '#bd4624',
            width: 2
          }
        },
        data: [20, 10, 30, 60, 20, 50, 66, 70, 60]
      }
    ]
  },
  option8: {
    grid: {
      left: 17,
      top: 17,
      right: 19,
      bottom: 60,
      containLabel: true
    },
    legend: [
      {
        bottom: '0',
        textStyle: {
          color: '#fff'
        },
        orient: 'horizontal',
        data: [
          {
            name: '日常GSM话务量'
          },
          {name: '日常VOLTE话务量'}
        ]
      },
      {
        bottom: '26',
        textStyle: {
          color: '#fff'
        },
        orient: 'horizontal',
        data: [
          {name: '当前GSM话务量'},
          {name: '当前VOLTE话务量'}
        ]
      }
    ],
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
        fontSize: 10,
        fontFamily: 'MF_LangQian',
        color: '#ffffff'
      },
      type: 'category',
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
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
        fontSize: 12,
        fontFamily: 'MF_LangQian',
        color: '#ffffff'
      }
    },
    series: [
      {
        type: 'bar',
        barWidth: 15,
        name: '当前GSM话务量',
        stack: '总量',
        itemStyle: {
          normal: {
            color: '#00ff90'
            // barBorderRadius: [10, 10, 0, 0]
          }
        },
        data: []
      },
      {
        type: 'bar',
        barWidth: 15,
        name: '当前VOLTE话务量',
        stack: '总量',
        itemStyle: {
          normal: {
            color: '#d9ff03',
            barBorderRadius: [10, 10, 0, 0]
          }
        },
        data: []
      },
      {
        type: 'line',
        symbolSize: 10,
        name: '日常GSM话务量',
        smooth: true,
        lineStyle: {
          normal: {
            color: '#00fa8d',
            width: 2
          }
        },
        data: [2000, 4000, 4000, 5000, 4081, 2088, 8021, 1009, 6066, 2033, 4056, 4088, 5045, 4078]
      },
      {
        type: 'line',
        symbolSize: 10,
        name: '日常VOLTE话务量',
        smooth: true,
        lineStyle: {
          normal: {
            color: '#805b22',
            width: 2
          }
        },
        data: [2000, 4876, 4000, 5000, 4081, 2088, 8056, 2506, 6066, 2033, 4056, 4088, 5045, 4078]
      }
    ]
  },
  option9: {
    grid: {
      left: 17,
      top: 17,
      right: 19,
      bottom: 50,
      containLabel: true
    },
    legend: {
      bottom: '10',
      textStyle: {
        color: '#fff'
      },
      data: [
        {
          name: '当前LTE流量'
        },
        {name: '日常LTE流量'}
      ]
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
        fontSize: 10,
        fontFamily: 'MF_LangQian',
        color: '#ffffff'
      },
      type: 'category',
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
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
        fontSize: 12,
        fontFamily: 'MF_LangQian',
        color: '#ffffff'
      }
    },
    series: [
      {
        type: 'bar',
        barWidth: 15,
        name: '当前LTE流量',
        itemStyle: {
          normal: {
            color: '#d9ff03',
            barBorderRadius: [10, 10, 0, 0]
          }
        },
        data: [4000, 6000, 4000, 5000, 4000, 2000, 2000, 1000, 6000, 2000, 4000, 4000, 3000, 6000]
      },
      {
        type: 'line',
        symbolSize: 10,
        name: '日常LTE流量',
        smooth: true,
        lineStyle: {
          normal: {
            color: '#a83adc',
            width: 2
          }
        },
        data: [2000, 4876, 4000, 5000, 4081, 2088, 8056, 2506, 6066, 2033, 4056, 4088, 5045, 4078]
      }
    ]
  },
  option10: {
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
            value: 1000,
            itemStyle: {
              normal: {
                color: '#08316e'
              }
            }
          },
          {
            value: 451.704,
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
            value: 1000,
            itemStyle: {
              normal: {
                color: '#08316e'
              }
            }
          },
          {
            value: 380.354,
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
            value: 1000,
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
            value: 1000,
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
            value: 500,
            itemStyle: {
              normal: {
                color: '#08316e'
              }
            }
          },
          {
            value: 500,
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
  option11: {
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
            value: 1000,
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
                color: '#3ae9ca'
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
            value: 1000,
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
            value: 1000,
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
            value: 1000,
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
            value: 1000,
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
  }
}