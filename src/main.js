import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from '@/App.vue'
import router from '@/router'

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(ElementUI);

//自定义指令
Vue.directive('color',{
  bind: function (el) {
    el.style.color='#'+Math.random().toString(16 ).slice(2,8);
  }
});
Vue.directive('width',{
  bind: function (el,binding) {
    if(binding.value==='wide'){
      el.style.width='1280px'
    }else if(binding.value==='narrow'){
      alert('narrow');
      el.style.width='520px'
    }
  }
});
//自定义过滤器
Vue.filter('to-uppercase',function (value) {
  return value.toUpperCase()
});
Vue.filter('snippet',function (value) {
  return value.slice(0,50)+'...'
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
