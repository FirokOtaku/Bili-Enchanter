
import 'material-dynamic-colors'

// import { GM_webRequest } from '$'
import { createApp } from 'vue'
import App from './App.vue'

import strStyle from './style.css?raw'
import strJsBeer from 'beercss/dist/cdn/beer.min.js?raw'
import strStyleBeer from 'beercss/dist/cdn/beer.min.css?raw'

import {
    isUnderBilibili,
    docFrame,
    domFrameDiv,
    winFrame,
    winMain,
} from './components/constants.js'
import {injectButton, setStyle} from './components/utils.js'
import {showConfigDialog} from './components/configs.js'



// 检测当前是否运行在 bilibili 的域名底下
const app = createApp(App)

const doc = isUnderBilibili ? docFrame : document
const domDocStyle = doc.createElement('style')
domDocStyle.innerHTML = `${strStyle}
${strStyleBeer}`
doc.head.appendChild(domDocStyle)
const domDocJs = doc.createElement('script')
domDocJs.innerHTML = `${strJsBeer}`
domDocJs.setAttribute('type', 'module')
doc.head.appendChild(domDocJs)

if (isUnderBilibili)
{
    app.mount(domFrameDiv)

    injectButton()

    console.log('bili-enchanter 启动完成')
    winFrame.console = winMain.console
}
else
{
    const domApp = doc.createElement('div')
    doc.body.appendChild(domApp)
    app.mount(domApp)
    const msg = '当前未运行于 Bilibili 站点'
    console.log(msg)
}
