<template>
  <div class="bdsharebuttonbox">
    <a v-for="item in vshareConfig.shareList" :key="item.id" :class="'bds_'+item" :data-cmd="item"></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['vshareConfig'],
  mounted () {
    window._bd_share_config = this.vshareConfig
    document.getElementsByTagName('body')[0].appendChild(document.createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)
  }
}
</script>
