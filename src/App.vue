<template>
  <div id="app">
    <vshare :vshareConfig="vshareConfig"></vshare>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      vshareConfig: {
        shareList: ['mshare', 'qzone' , 'tsina', 'renren', 'more'],
        common : {
          bdMini: 2
        },
        share : [{
          "bdSize": 24
          }
        ],
        slide : false,
        image : [
          //此处放置图片分享设置
        ],
        selectShare : [
          //此处放置划词分享设置
        ]
      }
    }
  }
}
</script>

<style>
</style>
