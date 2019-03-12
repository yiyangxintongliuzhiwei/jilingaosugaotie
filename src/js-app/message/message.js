/**
 * 消息管理
 */
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import config from '../../config.js'
import axios from 'axios'
import store from '../../store/'

/**
 * iPad管理器
 */
const ipadManager = {
  ipadHandler: null,
  registerIpadHandler(handler) {
    this.ipadHandler = handler;
  },
  /**
   * objective-c调用javascript
   */
  invokeHTML(obj) {
    if (this.ipadHandler) {
      return this.ipadHandler(obj);
    }
    return '';
  },
  invokeIOS(obj, callback) {
    window.webkit.messageHandlers.NEWVIEW.postMessage(obj);
  }
}

let msgManager = {
  stompClient: null,
  msgListenerMap: {},
  userId: null,
  connect(userId) {
    let self = this
    self.userId = userId
    let socket = new SockJS(config.socketUrl)
    this.stompClient = Stomp.over(socket)
    this.stompClient.connect('guest', 'guest', () => {
      self.connectCallback(userId)
      socket.onclose = () => {
        self.connect(userId)
      }
    }, (err) => {
      self.errorCallback(err)
    })
  },
  connectCallback(userId) {
    let self = this
    this.stompClient.subscribe('/topic/oper/' + userId, (msg) => {
      let oper = JSON.parse(msg.body)
      if (oper.keyType && (oper.keyType === 'direction' || oper.keyType === 'menu')) {
        let hadleFuns = self.msgListenerMap[oper.eventType] || []
        hadleFuns.forEach(fun => {
          fun(oper)
        })
      } else if (oper.eventType === 'APP-CHANGE') {
        store.commit(MutationsBridge.MESSAGE_APP_CHANGE_SSA, oper)
      } else {
        store.commit(MutationsBridge.MESSAGE_CATCH_SSA, oper)
      }
    })
  },
  errorCallback() {
    if (this.reconnectTimeId > 0) {
      clearTimeout(this.reconnectTimeId)
      this.reconnectTimeId = 0
    }
    var self = this
    this.reconnectTimeId = setTimeout(() => {
      console.debug('[socket] reconnecting...')
      self.connect()
    }, 10000)
  },
  registerMsgHandler(eventType, handlerFunction) {
    let handlerArr = this.msgListenerMap[eventType]
    if (!handlerArr) {
      handlerArr = []
      this.msgListenerMap[eventType] = handlerArr
    }
    handlerArr.push(handlerFunction)
  },
  sendMsg(eventType, param) {
    if (!eventType) {
      return
    }
    axios.post(config.sendMsgUrl, {
      userId: this.userId,
      eventType: eventType,
      param: param
    })
  },
  registerIpadHandler(handler) {
    ipadManager.registerIpadHandler(handler);
  },
  // 调用IOS
  invokeIOS(obj, callback) {
    ipadManager.invokeIOS(obj, callback)
  },
  // 调用HTML
  invokeHTML(obj) {
    return ipadManager.invokeHTML(obj)
  }
}

export default msgManager
