<!--轮播插件-->
<template>
    <div>
        <!--轮播主题-->
        <div class="carousel-main">
            <transition name="carousel-slide-fade">
                <div :is="ele" v-if="index === options.initIndex" v-for="(ele, index) of options.elements"></div>
            </transition>

        </div>
    </div>
</template>
<script>
  export default{
    data() {
      return {}
    },
    props: {
      options: {
        type: Object,
        default: {
          interval: 100000,
          initIndex: 0,
          elements: []
        }
      }
    },
    mounted() {
      this.intervalFun()
    },
    methods: {
      intervalFun() {
        setInterval(() => {
          if (this.options.initIndex < this.options.elements.length - 1) {
            this.options.initIndex++
          } else {
            this.options.initIndex = 0
          }
        }, this.options.interval)
      }
    }
  }
</script>
<style>
    .carousel-main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .carousel-slide-fade-enter-active {
        transition: all 1s cubic-bezier(1, 0);
    }

    .carousel-slide-fade-leave-active {
        transition: all 1s cubic-bezier(0, 1);
    }

    .carousel-slide-fade-enter,
    .carousel-slide-fade-leave-active {
        transform: translateX(50px);
        opacity: 1;
    }
</style>