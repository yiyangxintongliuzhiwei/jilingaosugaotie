<!--主APP-->
<template>
  <!--场景切换-->
  <div id="app" :class="{'appfilter': vncOpenFlag }">
    <transition name="slide-fade">
      <router-view :class="{'appfilter':centerScaleVisibale}"></router-view>
    </transition>
    <!--居中放大-->
    <center-scale v-if="centerScaleVisibale" :frameList="frameData"></center-scale>
  </div>
</template>

<script>
  import './js-app/core/index.js'
  export default {
    name: 'App',
    data() {
      return {
        centerScaleVisibale: false,
        frameData: null,
        vncOpenFlag: false
      }
    },
    computed: {
      /**
       * @desc 返回主页 并刷新
       */
      cmdHome() {
        return this.$store.state.cmd_home
      },
      /**
       * @desc 返上级回键
       * @returns {computed.cmdBack|number}
       */
      cmdBack() {
        return this.$store.state.cmd_back
      },
      sceneChange() {
        return this.$store.state.sceneUrl
      },
      viewFlowEvent() {
        return this.$store.state.messages['view_pop_event']
      },
      /**
       * 监听vnc事件
       */
      vncMsg() {
        return this.$store.state.messages['vnc_event']
      }
    },
    watch: {
      /**
       * @desc 监听 home 返回主页面并刷新
       */
      cmdHome() {
        this.$router.push({ name: this.$route.matched[0].name })
        window.location.reload();
      },
      cmdBack(newVal, oldVal) {
        this.cmdBackEvent()
      },
      sceneChange(val) {
        this.centerScaleVisibale = false;
        if (this.$route.name.indexOf('appview') === -1) {
          if (window.location.href !== val) {
            window.location.href = val;
            window.location.reload();
          }
        }
      },
      viewFlowEvent(val) {
        let isSingeView = false
        let routeName = this.$route.name
        if (routeName.indexOf('appview') > -1 || routeName.indexOf('appflow') > -1) {
          isSingeView = true
        }
        let viewFlowVisible = false
        let param = val.param
        if (param.flag === 'up') {
          viewFlowVisible = true;
          let urlList = [param];
          urlList.forEach(item => {
            let scaleX = parseFloat((4000 / item.width).toFixed(1))
            let scaleY = parseFloat((1160 / item.height).toFixed(1))
            item.scale = Math.min(scaleX, scaleY)
          })
          this.frameData = urlList
        }
        this.centerScaleVisibale = !isSingeView && viewFlowVisible
      },
      vncMsg(val) {
        if (val.param.act === 'open') {
          this.vncOpenFlag = true;
        }
        if (val.param.act === 'close') {
          this.vncOpenFlag = false;
        }
      }
    },
    mounted() {
      this.escEventHandler()
      this.interval()
      this.urlReplace()
      window.currentProvince = '全省'
    },
    methods: {
      /**
       * @desc  esc 事件
       */
      escEventHandler() {
        // 禁用鼠标右键功能
        document.oncontextmenu = (event) => {
          event.returnValue = false;
        }
        document.onselectstart = (event) => {
          event.returnValue = false;
        }
        document.addEventListener('keyup', (e) => {
          if (e.keyCode === 27) {
            if (this.$store.state.handleType) {
              this.$store.commit(MutationsBridge.MOUSE_CLICK_SSA, { cmd: 'back' })
            }
          } else {
            return false
          }
        }, false)
        document.onmousedown = (e) => {
          let ev = e || window.event
          if (ev.button === 2) {
            if (this.$store.state.handleType) {
              this.$store.commit(MutationsBridge.MOUSE_CLICK_SSA, { cmd: 'back' })
            }
          }
        }
      },
      /**
       * @desc 返回事件
       */
      cmdBackEvent() {
        let routeNames = this.$route.matched
        if (routeNames.length > 1) {
          this.$store.commit(MutationsBridge.NEW_VIEW_ID_SSA, this.$store.state.newViewId.substring(0, (routeNames.length - 1) * 2))
          this.$router.push({ name: routeNames[routeNames.length - 2].name })
        } else {
          this.$store.commit(MutationsBridge.HANDLE_TYPE_SSA, 0)
        }
      },
      /**
       * @desc 全局定时器
       */
      interval() {
        this.$store.commit(MutationsBridge.INTERVAL_SSA, true)
      },
      urlReplace() {
        console.log(window.location.href)
        /* eslint-disable no-useless-escape */
        let href = window.location.href.split('#')[0]
        if (/\%23/g.test(href)) {
          window.location.href = href.replace(/\%23/g, '#');
        }
      }
    }
  }
</script>

<style>
  .appfilter {
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
  }

  .slide-fade-enter-active {
    transition: all .8s ease;
  }

  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-active {
    opacity: 0;
  }
</style>
