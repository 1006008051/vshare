# vshare
![](){src}{/assets/logo.png}
> a Vue component to share
>基于百度分享开发的支持VUE2.X的分享插件

#安装
> npm install vshare -S

#使用
// ES6
import vshare from 'vshare'
// require
var vshare = require('vshare')

Vue.use(vshare)

// 或者直接使用script导入
<script src="./node_modules/vshare/dist/vshare.js"></script>

// 作为组件的方式使用
<vshare></vshare>

##配置
<vshare
  :vshareConfig="vshareConfig"
></vshare>

data () {
  vshareConfig: {
          shareList: [
            // 此处放分享列表（ID）
          ],
          common : {
            //此处放置通用设置
          },
          share : [{
            //此处放置分享按钮设置
            }
          ],
          slide : [
            //此处放置浮窗分享设置
          ],
          image : [
            //此处放置图片分享设置
          ],
          selectShare : [
            //此处放置划词分享设置
          ]
        }
}
