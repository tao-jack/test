import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 加载全局样式文件
import './styles/index.less'

Vue.config.productionTip = false;
// 创建vue 跟事例
// 吧router 配置到跟示例中
// 利用render方法 吧APP跟组件渲染到#APP入口节点
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
