// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-default/index.css'

import {
  Tree

} from 'element-ui'

Vue.component(Tree.name, Tree)

import flexible from "./assets/js/flexible.js"

Vue.config.productionTip = false

/*
 @全局封装toast组件
 @msg 传入参数
 */

import  { ToastPlugin ,AjaxPlugin} from 'vux'
Vue.use(ToastPlugin)
Vue.prototype.msg=function (msg) {
  return Vue.$vux.toast.show({
    type:"text",
    text: msg,
    position:"bottom",
    width:"8rem"
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
