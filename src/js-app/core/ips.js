import store from '../../store/'
import message from '../message/message.js'
import util from '../core/util.js'

export default {
  ipadHandler(data) {
    if (data.cmd === 'OPERABLE-VIEW') {
      if (data.action === 'open') {
        store.commit(MutationsBridge.VIEW_BORDER_STATE_SSA, true)
      } else if (data.action === 'close') {
        store.commit(MutationsBridge.VIEW_BORDER_STATE_SSA, false)
      }
    } else if (data.cmd === 'CENTER-VIEW') {
      let urlParams = util.getUrlParams(data.url)
      message.sendMsg('view_pop_event', {
        flag: data.action,
        url: data.url.replace('/0/', '/appflow/'),
        src: data.url,
        height: urlParams.height,
        width: urlParams.width
      })
    } else if (data.cmd === 'SWIPER_EVENT') {
      message.sendMsg('swiper_slide_event', {
        autoplayAllFlag: data.autoplayAllFlag
      })
    }
  }
}
