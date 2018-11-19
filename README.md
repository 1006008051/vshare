# vshare
![markdown](http://file.gcx365.com:8090/group1/M00/00/A2/d1ozqVvyUPCAWam4AAAQsow7OYo872.png "markdown")
>基于百度分享开发的支持VUE2.X的分享插件,为您带来更多的流量！提供多种风格按钮，代码加载更快，引入社会化流量，提升网页抓取速度等优点。

# 安装
> `npm install vshare -S`

# 使用
**注入**
> // ES6</br>
`import vshare from 'vshare'`</br>
> //or require</br>
`var vshare = require('vshare')`</br>

> `Vue.use(vshare)`

**组件使用**
> `<vshare></vshare>`

# 默认展示
![markdown](http://file.gcx365.com:8090/group1/M00/00/A3/d1ozqVvyireAC6hrAAAMYeZOs9s609.jpg "markdown")

# 配置

```
// 组件
<vshare
  :vshareConfig="vshareConfig"
>
</vshare>
// 数据
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
```
# vshareConfig

### shareList

|  配置项名称  |  说明   |  类型 |  可选值 |  默认值 |
| :--------:|:-----:| :----:  |:----:  |:----:|
| ---- |此处放分享列表（ID）   |   array     |mshare（一键分享	）<br>qzone（QQ空间）<br>tsina（新浪微博	）<br>renren（人人网	）<br>tqq（腾讯微博	）<br>bdxc（百度相册	）<br>kaixin001（开心网	）<br>tqf（腾讯朋友	）<br>tieba（百度贴吧	）<br>douban（豆瓣网	）<br>tsohu（搜狐微博	）<br>bdhome（百度新首页	）<br>sqq（QQ好友	）<br>thx（和讯微博	）<br>bdysc（百度云收藏	）<br>meilishuo（美丽说	）<br>mogujie（蘑菇街	）<br>diandian（点点网	）<br>huaban（花瓣	）<br>duitang（堆糖	）<br>hx（和讯	）<br>fx（飞信	）<br>youdao（有道云笔记	）<br>sdo（麦库记事	）<br>qingbiji（轻笔记	）<br>people（人民微博	）<br>xinhua（新华微博	）<br>mail（邮件分享	）<br>isohu（我的搜狐	）<br>yaolan（摇篮空间	）<br>wealink（若邻网	）<br>ty（天涯社区	）<br>fbook（Facebook	）<br>twi（Twitter）<br>linkedin（linkedin）<br>copy（复制网址	）<br>print（打印	）<br>ibaidu（百度个人中心	）<br>weixin（微信	）<br>iguba（股吧	）|['more',<br>'qzone',<br>'tsina',<br>'tqq',<br>'renren',<br>'weixin']|

### common
|  配置项名称 |  说明   |  类型 |  可选值 |  默认值 |
| :--------:|:-----:| :----:  |:----:  |:----:|
|bdText|分享的内容|string|自定义||
|bdDesc|分享的摘要|string|自定义||
|bdUrl|分享的Url地址|string|自定义||
|bdPic|分享的图片|string|自定义||
|bdSign|'on': 默认值，使用正常方式挂载回流签名（#[数字签名]）'off': 关闭数字签名，不统计回流量'normal': 使用&符号连接数字签名，不破坏原始url中的#锚点|string|on<br>off<br>normal||
|bdMini|下拉浮层中分享按钮的列数|int|1<br>2<br>3||
|bdMiniList|自定义下拉浮层中的分享按钮类型和排列顺序。|array|同shareList||
|onBeforeClick|在用户点击分享按钮时执行代码，更改配置。cmd为分享目标id，config为当前设置，返回值为更新后的设置。|function|function(cmd,config){}||
|onAfterClick|在用户点击分享按钮后执行代码，cmd为分享目标id。可用于统计等。|function|function(cmd){}||
|bdPopupOffsetLeft|下拉浮层的y偏移量|int|正｜负数||
|bdPopupOffsetTop|下拉浮层的x偏移量|int|正｜负数|||

### share
|  配置项名称 |  说明   |  类型 |  可选值 |  默认值 |
| :--------:|:-----:| :----:  |:----:  |:----:|
|tag|表示该配置只会应用于data-tag值一致的分享按钮。如果不设置tag，该配置将应用于所有分享按钮。|string|与data-tag一致||
|bdSize|分享按钮的尺寸|int|16<br>24<br>32||
|bdCustomStyle|自定义样式，引入样式文件|string|样式文件地址||

### slide （如不需要不传参数或者传false）
|  配置项名称 |  说明   |  类型 |  可选值 |  默认值 |
| :--------:|:-----:| :----:  |:----:  |:----:|
|bdImg|分享浮窗图标的颜色。|string|0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8||
|bdPos|分享浮窗的位置|string|left<br>right||
|bdTop|分享浮窗与可是区域顶部的距离(px)|int|||

### image（如不需要不传参数或者传false）
|  配置项名称 |  说明   |  类型 |  可选值 |  默认值 |
| :--------:|:-----:| :----:  |:----:  |:----:|
|tag|表示该配置只会应用于data-tag值一致的图片。如果不设置tag，该配置将应用于所有图片。|string|与data-tag一致||
|viewType|图片分享按钮样式。|string|list<br>collection||
|viewPos|图片分享展示层的位置。|string|top<br>bottom||
|viewColor|图片分享展示层的背景颜色。|string|black<br>white||
|viewSize|图片分享展示层的图标大小。|int|16<br>24<br>32||
|viewList|自定义展示层中的分享按钮类型和排列顺序。|array|同shareList||

### selectShare（如不需要不传参数或者传false）
|  配置项名称 |  说明   |  类型 |  可选值 |  默认值 |
| :--------:|:-----:| :----:  |:----:  |:----:|
|bdSelectMiniList|自定义弹出浮层中的分享按钮类型和排列顺序。|array|同shareList||
|bdContainerClass|自定义划词分享的激活区域。|string|myclassname||
