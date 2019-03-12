import util from './util.js'

export default {
  init(sceneFlag) {
    if (sceneFlag) {
      // 设置场景级别viewport
      this.initSceneViewport();
    } else {
      // 设置视图级别viewport
      this.initViewViewport()
    }
  },
  initSceneViewport() {
    let viewportTag = document.getElementById('viewport');
    if (viewportTag) {
      let scaleX;
      let scaleY;
      let urlParams = util.getUrlParams();
      if (urlParams['browserWidth'] && urlParams['browserHeight']) {
        scaleX = urlParams['browserWidth'] / 4800;
        scaleY = urlParams['browserHeight'] / 1200;
      } else {
        scaleX = (window.screen.availWidth) / 4800;
        scaleY = (window.screen.availHeight) / 1200;
      }
      viewportTag.setAttribute('content', 'width=device-width, initial-scale=' + scaleX + ', minimum-scale=' + scaleX + ', maximum-scale=' + scaleY + ', user-scalable=yes');
    }
  },
  initViewViewport() {
    let mvp = document.getElementById('viewport');
    let params = util.getUrlParams();
    let iPadHeight = params['ipadHeight'];
    let w = params['width'];
    let h = params['height'];
    if (mvp) {
      let scaleY = iPadHeight / h;
      mvp.setAttribute('content', 'width=device-width, initial-scale=' + scaleY + ', minimum-scale=' + scaleY + ', maximum-scale=' + scaleY + ', user-scalable=no');
    }
    let app = document.getElementById('app')
    app.style.width = w + 'px'
    app.style.height = h + 'px'
  }
}
