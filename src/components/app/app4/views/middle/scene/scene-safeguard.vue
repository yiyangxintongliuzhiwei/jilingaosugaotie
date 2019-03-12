<template>
  <!-- 场景保障 -->
  <view-template id="scene-wrapper-one">
    <div id="scene-safeguard-wrapper">
      <div class="bg-wrapper">
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
    }
  },
  mounted() {
  },
  methods: {
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
</style>
