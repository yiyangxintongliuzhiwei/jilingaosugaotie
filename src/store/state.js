import eventList from '../components/app/event-list.js'

const state = {
  handleType: 0, // 0: 无操作模式; 1: 操作模式
  sceneUrl: '', // 场景URL
  userId: '', // 默认当前用户
  handleCmd: '', // 当前ipad命令
  newViewId: '01', // 默认视图ID
  oldViewId: '01', // 上一级viewId
  clickViewId: null, // 点击视图Id
  viewIdLog: [], // 操作日志
  cmd: '', // 当前指令
  cmdAction: 0, // 活动cmd
  cmd_ok: 0, // 确认命令
  cmd_left: 0, // left 命令
  cmd_Right: 0, // right 命令
  cmd_up: 0, // up 命令
  cmd_down: 0, // down 命令
  cmd_back: 0, // 返回命令
  cmd_home: 0, // 返回主页并刷新
  intervalId: null, // 定时器 id
  interval: 0, // 30秒
  borderState: false, // 可单视图加载框显示状态
  viewFlag: false, // 是否是单视图
  messages: {
    'swiper_slide_event': null, // swiper滑动事件
    'view_focus_event': null, // 视图聚焦事件
    'view_pop_event': null // 视图向上居中放大
  }, // 所有消息容器
  belongname: '全部高速',
  // 初始值
  belongname1: '高铁线路',
  regionName: '全省',
  currentProvince: ''
}

eventList.forEach(item => {
  state.messages[item] = {}
})

export default state
