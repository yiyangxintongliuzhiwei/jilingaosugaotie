<!--视图模板-->
<template>
  <div class="view" :style="{width:width+'px',height:height+'px'}" :class="{'view-focus':focusFlag}">
    <slot></slot>
    <div class="view-border" v-if="optional && borderState" @click="viewClickHandle"></div>
  </div>
</template>

<script>
  import config from '../../config.js'
  import ipsmsg from '../../js-app/message/message.js'
  export default {
    data() {
      return {
        focusFlag: false
      }
    },
    props: {
      /**
       * @desc 可操控视图Id
       */
      viewId: {
        default: '',
        type: String
      },
      /**
       * @desc 定时器间隔时间
       */
      interval: {
        default: 0,
        type: Number
      },
      /**
       * @desc 是否支持iPad可视化操作
       */
      optional: {
        default: false,
        type: Boolean
      },
      width: {
        default: null,
        type: Number,
        validator(val) {
          return val > 0
        }
      },
      height: {
        default: null,
        type: Number,
        validator(val) {
          return val > 0
        }
      }
    },
    computed: {
      /**
       * @desc 定时器监听
       */
      intervalState() {
        return this.$store.state.interval * 5
      },
      /**
       * @desc 红框状态
       */
      borderState() {
        return this.$store.state.borderState
      },
      viewFocus() {
        return this.$store.state.messages['view_focus_event']
      }
    },
    watch: {
      /**
       * @desc  定时器触发器 当设定 props.interval 即触发
       */
      intervalState() {
        if (this.interval) {
          if (!(this.intervalState % this.interval)) {
            this.$emit('interval')
          }
        }
      },
      viewFocus(val) {
        if (val.param) {
          this.focusFlag = val.param.viewId === this.viewId
        }
      }
    },
    methods: {
      viewClickHandle() {
        if (this.viewId !== '' && this.width && this.height) {
          // 发送视图聚焦消息
          ipsmsg.sendMsg('view_focus_event', { viewId: this.viewId });
          let msg = {
            event_type: 'NEW-VIEW',
            url: config.appviewUrl + '/0/' + this.viewId + '?width=' + this.width + '&height=' + this.height,
            viewWidth: this.width,
            viewHeight: this.height,
            modal: 'true'
          };
          ipsmsg.invokeIOS(msg, null);
        }
      }
    }
  }
</script>

<style>
  .view-border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #06F5E8;
    z-index: 1000;
  }
  
  .view-focus {
    border: 2px solid #06F5E8;
    box-shadow: inset 0px 0px 80px #66b3ff;
    -webkit-animation-name: ips-heartbeat;
    -webkit-animation-duration: 1000ms;
    -webkit-animation-timing-function: ease-in-out;
  }
  
  @-webkit-keyframes ips-heartbeat {
    from {
      transform: none;
    }
    50% {
      transform: scale(1.1);
    }
    to {
      transform: none;
    }
  }
</style>
