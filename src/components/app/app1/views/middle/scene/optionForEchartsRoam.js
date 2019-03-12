export default {
  optionForRoam: {
    grid: {
      top: '1%',
      left: '3%',
      right: '6%',
      bottom: '0.1%',
      width: 350,         // bar宽
      containLabel: true
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}'
    },
    xAxis: {
      show: false,
      name: '（条）',
      type: 'value',
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff'
        }
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      data: [],
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff'
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 14
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        type: 'bar',
        data: [],
        barWidth: 15,
        barGap: 15,
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{c}',
            color: '#fff',
            fontSize: 14,
            fontFamily: 'DigifaceWide'
          }
        },
        itemStyle: {
          normal: {
            barBorderRadius: 15,
            color: '#0873f4'
          }
        }
      }
    ]
  },
  optionForUserRoam: {
    color: [],
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: '1%',
      top: '5%',
      icon: 'circle',
      data: [],
      textStyle: {
        color: '#FFFFFF',
        fontSize: 16
      },
      itemGap: 16,
      itemWidth: 10,
      itemHeight: 10
    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['25%', '85%'],
        center: ['40%', '50%'],
        startAngle: 145,
        roseType: 'radius',
        avoidLabelOverlap: false,
        itemStyle: {
          normal: {
            borderColor: '#0a2e5c',
            borderWidth: 3
          }
        },
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: []
      }
    ]
  }
}
