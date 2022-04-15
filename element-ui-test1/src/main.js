import Vue from "vue";
import App from "./App.vue";
import { Button, Message } from "element-ui";
// 引入element-UI 按需加载
Vue.component(Button.name, Button);
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
