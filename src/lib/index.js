import vshare from './vshare.vue' // 导入组件
vshare.install = function (Vue) {
  Vue.component('vshare',vshare)
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vshare);
  }
}
export default vshare
