export default {
  option1: {
    title: {
      text: ''
    },
    tooltip: {},
    legend: {
      top: 20,
      itemWidth: 12,
      itemHeight: 12,
      data: [],
      textStyle: {
        color: '#fff'
      }
    },
    radar: {
      radius: '60%',
      splitNumber: 4,
      startAngle: 18,
      name: {
        color: '#ffffff',
        fontSize: 22,
        fontFamily: 'langqianNormal'
      },
      axisLine: {
        symbol: ['none', 'image://' + require('../../assets/img/circle1.png')],
        symbolSize: 10,
        lineStyle: {
          color: '#fff',
          opacity: 0.7,
          width: 2,
          type: 'dashed'
        }
      },
      splitLine: {
        lineStyle: {
          width: 2,
          color: '#1c5abc',
          opacity: 0.9
        }
      },
      splitArea: {
        areaStyle: {
          opacity: 0.35,
          color: 'rgba(0, 125, 250, 0.5)',
          shadowBlur: 45,
          shadowOffsetX: 0,
          shadowOffsetY: 15
        }
      },
      // axisLabel: {
      //   show: true,
      //   color: '#9ac4ff',
      //   fontSize: 22
      // },
      indicator: [
        {
          name: 'VOLTE接通率',
          max: 100,
          min: 80
        },
        {
          name: 'LTE无线接通率',
          max: 100,
          min: 80
        },
        {
          name: 'GSM   \n无线接通率',
          max: 100,
          min: 80
        },
        {
          name: 'S-CSCF     \n初始注册成功率',
          max: 100,
          min: 80
        },
        {
          name: 'IMS专用承载\n  建立成功率',
          max: 100,
          min: 80
        }
      ]
    },
    series: [
      {
        name: '业务质量',
        type: 'radar',
        symbolSize: 10,
        symbol: 'circle',
        label: {
          normal: {
            show: false,
            formatter: ['{c}%'].join('\n'),
            rich: {
              a: {
                color: 'black',
                fontSize: '20'
              },
              bb: {
                color: 'blue',
                fontSize: '10'
              }
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#fff',
            // borderColor: 'yellow',
            broderWidth: 0,
            opacity: 0
          }
        },
        areaStyle: {
          normal: {
            shadowBlur: 13,
            // color: 'rgba(3, 255, 0, 0.3)',
            color: 'rgba(251, 94, 97, 0.3)',
            shadowColor: 'rgba(34,57,75,0.6)',
            shadowOffsetX: 0,
            shadowOffsetY: 10,
            opacity: 0.7
          }
        },
        lineStyle: {
          normal: {
            // color: '#03ff00',
            color: 'rgba(251, 94, 97, 1)',
            width: 2
          }
        },
        data: [
          {
            value: [92, 85, 87, 90, 82],
            name: '业务质量'
          }
        ]
      }
    ]
  },
  option2: {
    title: {
      text: ''
    },
    tooltip: {
      formatter: function(c) {
        let t = ''
        t = '业务质量' + '<br>' +
          'VOLTE无线掉话率：' + (100 - c.value[0]).toFixed(2) + '%' + '<br>' +
          'LTE无线掉话率：' + (100 - c.value[1]).toFixed(2) + '%' + '<br>' +
          'GSM无线掉话率：' + (100 - c.value[2]).toFixed(2) + '%' + '<br>' +
          'GSM无线拥塞率：' + (100 - c.value[3]).toFixed(2) + '%'
        return t
      }
    },
    legend: {
      top: 20,
      itemWidth: 12,
      itemHeight: 12,
      data: [],
      textStyle: {
        color: '#fff'
      }
    },
    radar: {
      radius: '60%',
      splitNumber: 4,
      startAngle: 0,
      name: {
        color: '#ffffff',
        fontSize: 22,
        fontFamily: 'langqianNormal'
      },
      axisLine: {
        symbol: ['none', 'image://' + require('../../assets/img/circle1.png')],
        symbolSize: 10,
        lineStyle: {
          color: '#fff',
          opacity: 0.7,
          width: 2,
          type: 'dashed'
        }
      },
      splitLine: {
        lineStyle: {
          width: 2,
          color: '#1c5abc',
          opacity: 0.9
        }
      },
      splitArea: {
        areaStyle: {
          opacity: 0.35,
          color: 'rgba(0, 125, 250, 0.5)',
          shadowBlur: 45,
          shadowOffsetX: 0,
          shadowOffsetY: 15
        }
      },
      // axisLabel: {
      //   show: true,
      //   color: '#9ac4ff',
      //   fontSize: 22
      // },
      indicator: [
        {
          name: 'VOLTE   \n无线掉话率',
          max: 100,
          min: 80
        },
        {
          name: '   LTE\n无线掉话率',
          max: 100,
          min: 80
        },
        {
          name: 'GSM\n  无线掉话率',
          max: 100,
          min: 80
        },
        {
          name: 'GSM   \n无线拥塞率',
          max: 100,
          min: 80
        }
      ]
    },
    series: [
      {
        name: '业务质量',
        type: 'radar',
        symbolSize: 10,
        symbol: 'circle',
        label: {
          normal: {
            show: false,
            formatter: ['{c}%'].join('\n'),
            rich: {
              a: {
                color: 'black',
                fontSize: '20'
              },
              bb: {
                color: 'blue',
                fontSize: '10'
              }
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#fff',
            // borderColor: 'yellow',
            broderWidth: 0,
            opacity: 0
          }
        },
        areaStyle: {
          normal: {
            shadowBlur: 13,
            // color: 'rgba(254, 225, 0, 0.3)',
            color: 'rgba(235, 134, 6, 0.3)',
            shadowColor: 'rgba(34,57,75,0.6)',
            shadowOffsetX: 0,
            shadowOffsetY: 10,
            opacity: 0.7
          }
        },
        lineStyle: {
          normal: {
            // color: '#fee100',
            color: 'rgba(235, 134, 6, 1)',
            width: 2
          }
        },
        data: [
          {
            value: [92, 85, 87, 90],
            name: '业务质量'
          }
        ]
      }
    ]
  }
}
