<template>
  <!-- 场景保障 -->
  <view-template id="scene-wrapper-one" :interval="3" @interval="loadData(activeParam)">
    <div id="scene-safeguard-wrapper">
      <div class="bg-wrapper">
        <div id="menu-panel" :class="[[isClick===0 ? 'menu-panel-qs' : 'menu-panel'], {'hide-menu': toggleLayer}]">
          <!-- <div class="toggle-menu" @click="toggleLayer = !toggleLayer"></div> -->
          <div class="toggle-menu" @click="toggleLayer = !toggleLayer" :style="{'right': isClick!==0 ? '-18px' : (isClick===0 && !toggleLayer ? '-9px' : '-20px')}"></div>
          <!-- <div :class="[isClick===0 ? 'menu-qs' : 'menu']"> -->
          <div class="menu">
            <div class="menu-one">
              <div v-for="(item, index) in items" :key="index" class="menu-one-item" :class="{'menu-one-item-click':index == isClick}" @click="changeBtnBg(index)">{{item}}</div>
            </div>
            <div class="menu-two">
              <div v-for="(subitem, index) in subitems" :key="index" class="menu-two-item" :class="{'menu-two-item-click':index == isActive}" @click="changeClass(index, subitem)">{{subitem}}</div>
            </div>
          </div>
        </div>
        <div class="scene-bg">
          <user-distribution id="scene-chart1"></user-distribution>
          <roam id="roam-in-chart" :title="'省际用户漫入TOP10'"></roam>
          <roam-right id="roam-in-chart-copy" :title="'省际用户漫出TOP10'"></roam-right>
          <user-roam id="user-roam-in-chart" :title="'省内用户漫入分布'"></user-roam>
          <user-roam-right id="user-roam-in-chart-copy" :title="'省内用户漫出分布'"></user-roam-right>
        </div>
      </div>
    </div>
  </view-template>
</template>
<script>
import UserDistribution from './user-distribution.vue'
import Roam from './roam.vue'
import RoamRight from './roam-right.vue'
import UserRoam from './user-roam.vue'
import UserRoamRight from './user-roam-right.vue'
export default {
  name: 'sceneSafeguard',
  props: [],
  data() {
    return {
      toggleLayer: true,
      items: ['全省', '交通枢纽', '重点景区', '政府机关', '商业展区', '临时活动'],
      subitems: [],
      traArr: [],
      sceneArr: [],
      proviceArr: [],
      govenmentArr: [],
      busnessArr: [],
      temporaryArr: [],
      isClick: 0,
      isActive: 0,
      activeParam: '全省'
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    changeClass(index, param) {
      this.isActive = index;
      this.activeParam = param
      bus.$emit('REGION_NAME', param)
    },
    changeBtnBg(index) {
      this.isClick = index;
      this.isActive = 0;
      if (index === 0) {
        this.subitems = []
        this.activeParam = this.proviceArr[0]
        bus.$emit('REGION_NAME', this.proviceArr[0])
      } else if (index === 2) {
        this.subitems = this.sceneArr
        this.activeParam = this.sceneArr[0]
        bus.$emit('REGION_NAME', this.sceneArr[0])
      } else if (index === 1) {
        this.subitems = this.traArr
        this.activeParam = this.traArr[0]
        bus.$emit('REGION_NAME', this.traArr[0])
      } else if (index === 3) {
        this.subitems = this.govenmentArr
        this.activeParam = this.govenmentArr[0]
        bus.$emit('REGION_NAME', this.govenmentArr[0])
      } else if (index === 4) {
        this.subitems = this.busnessArr
        this.activeParam = this.busnessArr[0]
        bus.$emit('REGION_NAME', this.busnessArr[0])
      } else if (index === 5) {
        this.subitems = this.temporaryArr
        this.activeParam = this.temporaryArr[0]
        bus.$emit('REGION_NAME', this.temporaryArr[0])
      }
    },
    initData() {
      this.$http.indi.get('j0039', null, (res) => {
        let data = res.data.data;
        data.forEach(e => {
          if (e.REGION_TYPE === '交通枢纽') {
            this.traArr.push(e.REGION_NAME)
          } else if (e.REGION_TYPE === '重点景区') {
            this.sceneArr.push(e.REGION_NAME)
          } else if (e.REGION_TYPE === '全省') {
            this.proviceArr.push(e.REGION_NAME)
          } else if (e.REGION_TYPE === '政府机关') {
            this.govenmentArr.push(e.REGION_NAME)
          } else if (e.REGION_TYPE === '商业展区') {
            this.busnessArr.push(e.REGION_NAME)
          } else if (e.REGION_TYPE === '临时活动') {
            this.temporaryArr.push(e.REGION_NAME)
          }
        })
        this.subitems = {}
        this.activeParam = this.proviceArr[0]
        bus.$emit('REGION_NAME', this.proviceArr[0])
      })
    },
    loadData(param) {
      bus.$emit('REGION_NAME', param)
    }
  },
  beforeDestroy() {
  },
  components: {
    UserDistribution,
    Roam,
    RoamRight,
    UserRoam,
    UserRoamRight
  }
}
</script>
<style lang="scss">
  #scene-safeguard-wrapper {
    width: 100%;
    height: 100%;
    background: url('../../../assets/img/bg1.png');
    z-index: 1;
    overflow: hidden;
  }

  .bg-wrapper {
    width: 1990px;
    height: 805px;
    position: relative;
    top: 5px;
    left: 5px;
    overflow: hidden;
  }

  .scene-bg {
    position: absolute;
    width: 1928px;
    height: 767px;
    background: url('../../../assets/img/bg2.png');
    top: 20px;
    left: 30px;
    z-index: 2;
  }

  #scene-chart1 {
    position: absolute;
    width: 920px;
    height: 770px;
    top: 0;
    left: 0;
  }

  #roam-in-chart {
    position: absolute;
    width: 450px;
    height: 380px;
    top: 0;
    left: 950px;
  }

  #roam-in-chart-copy {
    position: absolute;
    width: 450px;
    height: 380px;
    top: 0;
    left: 1400px;
  }

  #user-roam-in-chart {
    position: absolute;
    width: 450px;
    height: 380px;
    top: 380px;
    left: 950px;
  }

  #user-roam-in-chart-copy {
    position: absolute;
    width: 450px;
    height: 380px;
    top: 380px;
    left: 1400px;
  }

  .menu-panel{
    position: relative;
    width: 440px;
    height: 690px;
    left: 0px;
    top: 55px;
    z-index: 3;
    // transition: all 0.3s linear;

    .toggle-menu {
      z-index: 3;
      cursor: pointer;
      // box-sizing: border-box;
      position: absolute;
      top: 218px;
      right: -18px;
      width: 21px;
      height: 248px;
      text-align: center;
      background: url('../../../assets/img/menu-btn.png');
    }

    &.hide-menu {
      left: -436px;
      transition: all 0.3s linear;
    }

    .menu {
      width: 458px;
      height: 688px;
      position: relative;
      background: url('../../../assets/img/menu-bg.png');

      .menu-one {
        position: absolute;
        width: 170px;
        height: 100%;
        // top: 140px;
        left: 12px;
        color: #FFFFFF;
        font-size: 30px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .menu-one-item {
          width: 169px;
          height: 80px;
          line-height: 80px;
          // margin-bottom: 76px;
          cursor: pointer;
        }

        .menu-one-item-click {
          background: url('../../../assets/img/btn-bg.png');
        }
      }

      .menu-two {
        position: absolute;
        width: 220px;
        height: 550px;
        top: 65px;
        left: 202px;
        color: #FFFFFF;
        font-size: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        // overflow: auto;

        .menu-two-item {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 160px;
          padding: 5px;
          height: 50px;
          border-radius: 5px;
          // margin: 0 auto;
        }

        .menu-two-item-click {
          background: #45ab5e;
        }
      }
    }
  }

  .menu-panel-qs {
    position: relative;
    width: 244px;
    height: 690px;
    left: 0px;
    top: 55px;
    z-index: 3;
    // transition: all 0.3s linear;

    .toggle-menu {
      z-index: 3;
      cursor: pointer;
      // box-sizing: border-box;
      position: absolute;
      top: 218px;
      right: -11px;
      width: 21px;
      height: 248px;
      text-align: center;
      background: url('../../../assets/img/menu-btn.png');
    }

    &.hide-menu {
      left: -243px;
      transition: all 0.3s linear;
    }

    .menu {
      width: 253px;
      height: 688px;
      position: relative;
      background: url('../../../assets/img/menu-bg-qs.png');

      .menu-one {
        position: absolute;
        width: 170px;
        height: 100%;
        // top: 140px;
        left: 12px;
        color: #FFFFFF;
        font-size: 30px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .menu-one-item {
          width: 169px;
          height: 80px;
          line-height: 80px;
          // margin-bottom: 76px;
          cursor: pointer;
        }

        .menu-one-item-click {
          background: url('../../../assets/img/btn-bg.png');
        }
      }

      .menu-two {
        position: absolute;
        width: 220px;
        height: 550px;
        top: 65px;
        left: 202px;
        color: #FFFFFF;
        font-size: 20px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        // overflow: auto;

        .menu-two-item {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 180px;
          height: 60px;
          border-radius: 5px;
        }

        .menu-two-item-click {
          background: #45ab5e;
        }
      }
    }
  }
</style>
