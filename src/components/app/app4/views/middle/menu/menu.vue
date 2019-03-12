<template>
  <view-template :interval="60" @interval="loadData" id="public_menu">
    <div id="menu-panel" :class="[[isClick===0 ? 'menu-panel-qs' : 'menu-panel'], {'hide-menu': toggleLayer}]">
      <div class="menu">
        <div class="menu-one">
          <div v-for="(item, index) in items" :key="index" class="menu-one-item" :class="{'menu-one-item-click':index == isClick}" @click="changeBtnBg(index)">{{item}}</div>
        </div>
        <div class="menu-two" v-if="isClick">
          <div v-for="(subitem, index) in subitems" :key="index" class="menu-two-item" :class="{'menu-two-item-click':index == isActive}" @click="changeClass(index, subitem)">{{subitem}}</div>
        </div>
        <div class="toggle-menu" @click="toggleLayer = !toggleLayer"></div>
      </div>
    </div>
  </view-template>
</template>
<script>
export default {
  name: 'MenuPanel',
  props: ['provinceFlag'],
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
      isActive: 0
    }
  },
  methods: {
    loadData() {
      bus.$emit('REGION_NAME', this.$store.state.regionName)
    },
    changeClass(index, param) {
      this.isActive = index;
      this.$store.state.regionName = param;
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
        this.$store.state.regionName = this.proviceArr[0]
      })
    },
    changeBtnBg(index) {
      this.isClick = index;
      this.isActive = 0;
      if (index === 0) {
        this.subitems = [];
        this.$store.state.regionName = this.proviceArr[0]
      } else if (index === 2) {
        this.subitems = this.sceneArr
        this.$store.state.regionName = this.sceneArr[0]
      } else if (index === 1) {
        this.subitems = this.traArr
        this.$store.state.regionName = this.traArr[0]
      } else if (index === 3) {
        this.subitems = this.govenmentArr
        this.$store.state.regionName = this.govenmentArr[0]
      } else if (index === 4) {
        this.subitems = this.busnessArr
        this.$store.state.regionName = this.busnessArr[0]
      } else if (index === 5) {
        this.subitems = this.temporaryArr
        this.$store.state.regionName = this.temporaryArr[0]
      }
    }
  },
  mounted() {
    this.initData();
    bus.$on('changeRegion', this.changeBtnBg(0))
  },
  computed: {
    activeParam() {
      return this.$store.state.regionName;
    }
  },
  watch: {
    activeParam(v) {
      if (v === '全省' && this.isClick) {
        this.isClick = 0;
        this.isActive = 0;
        this.subitems = [];
      }
    }
  }
}
</script>
<style lang="scss">
  #public_menu {
    position: absolute;
    width: 21px;
    height: 690px;
    left: 0px;
    top: 55px;
    z-index: 99;
  }
  .toggle-menu {
      cursor: pointer;
      // box-sizing: border-box;
      position: absolute;
      top: 218px;
      right: 0;
      width: 21px;
      height: 248px;
      text-align: center;
      background: url('../../../assets/img/menu-btn.png');
    }
  .menu-panel {
    position: absolute;
    width: 440px;
    height: 690px;
    left: 0px;
    top: 0;
    transition: all 0.3s linear;
    &.hide-menu {
      left: -436px;
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

        .menu-two-item {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 160px;
          padding: 5px;
          height: 50px;
          border-radius: 5px;
        }

        .menu-two-item-click {
          background: #45ab5e;
        }
      }
    }
  }

  .menu-panel-qs {
    position: absolute;
    width: 235px;
    height: 690px;
    left: 0px;
    top: 0;
    z-index: 3;
    transition: all 0.3s linear;

    &.hide-menu {
      left: -235px;
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