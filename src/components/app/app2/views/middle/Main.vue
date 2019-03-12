<!--middle -->
<template>
<view-template appName='' :interval="60" @interval="" id="middle">
  <img id="title" src="../../assets/img/title.png" alt="">

  <div id="header">
    <div id="scene-btn" :class="{'scene-top-btn-active': sceneOrTop=='scene'}" @click="sceneOrTop='scene'">
      <!-- 保障场景 -->
      重点区域
    </div>
    <div id="top-btn" :class="{'scene-top-btn-active': sceneOrTop!='scene'}" @click="sceneOrTop='top'">
      <!-- 漫入漫出TOP -->
      全省
    </div>
  </div>

  <div id="content" :class="{'content-for-top': sceneOrTop=='top'}">
    <div v-show="sceneOrTop=='scene'" id="scene">
      <scene-safeguard></scene-safeguard>
    </div>
    <div v-show="sceneOrTop=='top'" id="top">
      <top></top>
    </div>
  </div>
</view-template>
</template>

<script>
import './Main.scss'
import SceneSafeguard from './scene/scene-safeguard.vue'
import Top from './top/Top.vue'

export default {
  name: '',
  data() {
    return {
      sceneOrTop: 'scene'
      // sceneOrTop: 'top'
    }
  },
  mounted() {
    // console.log(this.Echarts);
  },
  beforeDestroy() {
  },
  components: {
    SceneSafeguard,
    Top
  }
}
</script>
