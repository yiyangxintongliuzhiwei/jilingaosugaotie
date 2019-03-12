<!--APP 模板-->
<template>
  <div class="app">
    <!--APP-->
    <slot></slot>
    <!--Win 使用弹窗时继承 popup-template -->
    <router-view></router-view>
  </div>
</template>

<script>
  import '@/assets/scss/app.scss'
  import '@/assets/scss/mixin.scss'
  import ipadInit from '../../js-app/core/ipad-init.js'

  export default {
    name: 'AppTemplate',
    props: {
      appName: '' // 场景名称
    },
    beforeCreate() {
      if (this.$route.name.indexOf('appview') > -1) {
        ipadInit.init(false)
      } else {
        ipadInit.init(true)
      }
      // 单视图加载
      if (this.$route.name.indexOf('appview') > -1 || this.$route.name.indexOf('appflow') > -1) {
        this.$store.commit(MutationsBridge.VIEW_SINGLE_FLAG_SSA, true)
      }
    },
    created() {
      this.dataTypeSel()
    },
    mounted() {
      this.userIdState()
    },
    methods: {
      /**
       * @desc 标记当前用户
       * */
      userIdState() {
        let userIdRoute = this.$route.params.userId
        let userIdState = this.$store.state.userId
        if (this.appName) {
          // this.$http.get(`user/apps/${userIdRoute}/${this.appName}`).then((res) => {
          //   console.log(`当前场景--${this.appName}`)
          // })
        } else {
          console.error('请在APP.vue中设置appName')
        }
        if (userIdRoute && userIdRoute !== userIdState) {
          this.$store.commit(MutationsBridge.USER_ID_SSA, userIdRoute)
        }
      },
      /**
       * @desc ajax 请求数据类型 {real: 真实数据, static: 静态数据, mix: 混合数据}
       */
      dataTypeSel() {
        let dataType = this.$route.params.dataType || 'real'
        this.$http.indi.setApiUrl(`api/${dataType}/`)
      }
    }
  }
</script>
