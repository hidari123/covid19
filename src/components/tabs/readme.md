# Tabs切换组件

## 渲染格式和使用格式
1. 渲染格式
```html
<div> ->Tabs(最外层需要包裹一个容器 让ul和div在一起)
    <ul>
        <li>tab1</li>
        <li>tab2</li>
        <li>tab3</li>
    </ul>
    <div>
        <div>content1</div>
        <div>content2</div>
        <div>content3</div>
    </div>
</div>
```
2. 使用格式
···js
<tabs currentIndex = '1' changeIndex = 'changeIndexHandle'>
    <tab index = '1' label= 'tab1'>content1</tab>
    <tab index = '2' label= 'tab2'>content2</tab>
    <tab index = '3' label= 'tab3'>content3</tab>
</tabs>

<script>
export default {
    data () {
        return {
            currentIndex: '1'
        }
    },
    methods: {
        getIndex (index) {
            // index 下标
        }
    }
}
</script>
```

## 组件分离
tabs -> VueComponment
tab -> VueComponment
content -> VueComponment
index.js -> 主入口组件文件

## 第三方组件方式全局引用
1. index.js
```js
export default (Vue) => {
  Vue.component(Tabs.name, Tabs)
  Vue.component(Tab.name, Tab)
}
```
2. main.js
```js
import Tabs from './components/tabs'
Vue.use(Tabs)
```