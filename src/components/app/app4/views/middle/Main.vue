<!--middle -->
<template>
<view-template appName='' id="middle">
  <img id="title" src="../../assets/img/title.png" alt="">

  <div id="header">
    <div id="heatmap-btn" :class="{'scene-top-btn-active': sceneOrTop=='heatmap'}" @click="sceneOrTop='heatmap';">场景热力图</div>
    <div id="scene-btn" :class="{'scene-top-btn-active': sceneOrTop=='scene'}" @click="sceneOrTop='scene'">
      <!-- 保障场景 -->
      重点区域
    </div>
    <div id="top-btn" :class="{'scene-top-btn-active': sceneOrTop=='top'}" @click="changeHide">
      <!-- 漫入漫出TOP -->
      漫入漫出TOP10
    </div>
  </div>

  <div id="content" :class="{'content-for-top': sceneOrTop=='top'}">
    <MenuPanel :provinceFlag="provinceFlag" v-show="sceneOrTop!=='top'"></MenuPanel>
    <div v-if="sceneOrTop=='scene'" id="scene">
      <scene-safeguard></scene-safeguard>
    </div>
    <div v-if="sceneOrTop=='top'" id="top">
      <top></top>
    </div>
    <div v-if="sceneOrTop === 'heatmap'">
      <heatmap></heatmap>
    </div>
  </div>
</view-template>
</template>

<script>
import './Main.scss'
import SceneSafeguard from './scene/scene-safeguard.vue'
import Top from './top/Top.vue'
import heatmap from './heatmap/heatmap.vue'
import MenuPanel from './menu/menu.vue'

export default {
  name: '',
  data() {
    return {
      sceneOrTop: 'scene',
      provinceFlag: false
      // sceneOrTop: 'top'
    }
  },
  mounted() {
  },
  methods: {
    changeHide() {
      this.sceneOrTop = 'top';
      this.provinceFlag = true;
      this.$store.state.regionName = '全省';
    }
  },
  beforeDestroy() {
  },
  components: {
    SceneSafeguard,
    Top,
    heatmap,
    MenuPanel
  }
}
</script>
