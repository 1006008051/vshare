<template>
  <div class="bdsharebuttonbox">
    <a v-for="item in defaultConfig.shareList" :key="item.id" :class="'bds_'+item" :data-cmd="item"></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      defaultConfig: {
        shareList: ['more','qzone','tsina','tqq','renren','weixin'],
        share: [{bdSize: 24}],
        slide: false,
        image: false,
        selectShare: false
      }
    }
  },
  props: ['vshareConfig'],
  mounted () {
    console.log(this.vshareConfig)
    if (this.vshareConfig) {
      this.vshareConfig.shareList ? this.defaultConfig.shareList = this.vshareConfig.shareList :'';
      if (this.vshareConfig.shareList) {

      }
      if (this.vshareConfig.share) {
        this.defaultConfig.share = this.vshareConfig.share
      }
      if (this.vshareConfig.slide) {
        this.defaultConfig.slide = this.vshareConfig.slide
      }
      if (this.vshareConfig.image) {
        this.defaultConfig.image = this.vshareConfig.image
      }
      if (this.vshareConfig.selectShare) {
        this.defaultConfig.selectShare = this.vshareConfig.selectShare
      }
    }
    window._bd_share_config = this.defaultConfig
    document.getElementsByTagName('body')[0].appendChild(document.createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)
  }
}
</script>
