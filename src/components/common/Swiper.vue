<template>
  <div class="swiper-container">
    <slot name="parallax-bg"></slot>
    <div :class="defaultSwiperClasses.wrapperClass">
      <slot></slot>
    </div>
    <slot name="pagination"></slot>
    <slot name="button-prev"></slot>
    <slot name="button-next"></slot>
    <slot name="scrollbar"></slot>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import ipsmsg from '../../js-app/message/message.js'
//  import util from '../../js-app/core/util.js'
  export default {
    name: 'Swiper',
    props: {
      swiperId: {
        type: String,
        default: null
      },
      defaultIndex: {
        type: Number,
        default: 0
      },
      options: {
        type: Object,
        default() {
          return {
            autoplay: 3500
          }
        }
      }
    },
    data() {
      return {
        swiper: null,
        turnFLag: true, // 是否在轮播
        showFlag: false, // 演示模式
        defaultSwiperClasses: {
          wrapperClass: 'swiper-wrapper'
        }
      }
    },
    computed: {
      slideSync() {
        return this.$store.state.messages['swiper_slide_event']
      },
      focusEvent() {
        return this.$store.state.messages['view_focus_event']
      }
    },
    watch: {
      slideSync(val) {
        if (this.swiper) {
          if (val.param.autoplayAllFlag === 1) {
            this.swiper.slideTo(this.defaultIndex);
            this.swiper.startAutoplay();
            this.showFlag = false;
            this.turnFLag = true;
          } else if (val.param.autoplayAllFlag === -1) {
            this.swiper.stopAutoplay();
            this.showFlag = true;
            this.turnFLag = false;
            this.swiper.slideTo(this.defaultIndex)
          } else {
            if (val.param.swiperId === this.swiperId) {
              this.swiper.slideTo(val.param.index)
            }
          }
        }
      },
      focusEvent(val) {
        if (val.param.viewId === this.swiperId) {
          this.turnFLag = false;
          this.swiper.stopAutoplay();
        }
        if (val.param.viewId === 'disable-all' && !this.turnFLag && !this.showFlag) {
          this.swiper.slideTo(this.defaultIndex);
          this.swiper.startAutoplay();
          this.turnFLag = true;
        }
      }
    },
    mounted() {
      let self = this
      let appviewFlag = this.$store.state.viewFlag
      if (appviewFlag) {
        this.swiper.stopAutoplay();
        let fun = this.options.onSlideChangeEnd
        self.options.onSlideChangeEnd = (swiper) => {
          if (fun) {
            fun(swiper)
          }
          if (self.swiperId && appviewFlag) {
            ipsmsg.sendMsg('swiper_slide_event', { autoplayAllFlag: 0, swiperId: self.swiperId, index: swiper.activeIndex })
          }
        }
      }
      let mount = () => {
        if (!self.swiper) {
          delete self.options.notNextTick
          let setClassName = false
          for (let className in self.defaultSwiperClasses) {
            if (self.defaultSwiperClasses.hasOwnProperty(className)) {
              if (self.options[className]) {
                setClassName = true
                self.defaultSwiperClasses[className] = self.options[className]
              }
            }
          }
          let mountInstance = () => {
            self.swiper = new Swiper(self.$el, self.options)
          }
          setClassName ? self.$nextTick(mountInstance) : mountInstance()
        }
      }
      this.options.notNextTick ? mount() : this.$nextTick(mount)
    },
    updated() {
      if (this.swiper) {
        this.swiper.update()
      }
    },
    beforeDestroy() {
      if (this.swiper) {
        this.swiper.destroy()
        delete this.swiper
      }
    }
  }
</script>
