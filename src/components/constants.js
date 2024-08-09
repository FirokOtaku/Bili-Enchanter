import {setStyle} from './utils.js'
import {GM_addStyle} from '$'
import cssSub from '../assets/css-enchantment.css?raw'

import { version } from '../../package.json'

export const pluginVersion = version

export const isUnderTamperMonkey =
    typeof GM_setValue === 'function' &&
    typeof GM_getValue === 'function'

export const isUnderBilibili = (location?.hostname ?? '').includes('bilibili.com')

export const IdDomApp = 'bili-enchanter'

export const domFrame = document.createElement('iframe')
domFrame.id = IdDomApp
domFrame.width = '100%'
domFrame.height = '100%'
setStyle({
    'position': 'fixed',
    'top': '0',
    'left': '0',
    'background': 'transparent',
    'opacity': 'var(--opacity-dialog-bilibili-enchanter, 0)',
    'pointer-events': 'none',
    'z-index': '-1000',
    'transition': 'opacity 0.5s ease',
}, domFrame)
document.body.appendChild(domFrame)

export const winMain = window
export const winFrame = domFrame.contentWindow
export const docFrame = winFrame.document
export const docMain = document

export const domBili = {
    /**
     * @return {HTMLElement | null}
     * */
    get domRightButtonContainer() {
        return isUnderBilibili ?
            [...docMain.getElementsByClassName('palette-button-wrap')][0]
            /*??
            [...docMain.getElementsByClassName('fixed-sidenav-storage')][0]*/
            ?? null :
            null
    }
}

export const domFrameDiv = docFrame.createElement('div')
docFrame.body.appendChild(domFrameDiv)

export const strImgEnchantTable = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC0UlEQVR4Xu2UP2/TUBTFI8V59nuOk+ZPW5W2tEgUVIHKVAESC1LFgAQDUxEDC1KHDGFgY0Ag8QkQYmHKN+CDMPApmFhZHz7PPs7LjW3aNEVC6pWO7Ngv7/zevSdpNC7rsv7X2v383vqS7y+sRo2Gvf39m33864ed/P7phHs8wzu5fmmFzaHJrX37LtSlwjuuk99fuHxj6M3VbXu8vlYqvOO6c4NIY2n2Ny0MgkBxxmyr3Py04riYkdqwbr4duQUohouzlRufVkU28v1Q8ICX9G/0nh7Z4ctnbgGI2YFlAHA/7N15eM+2Dw/mAWBOHZUEry58Ulzv5+AgFcwp6e8AJpOJPfn6yQFQMoh1IHwnjalHo1d2PB6XA2x9eO3MCXCcxJUgDJf8D6gyfqCjAgAaPH8yD9BqRfbOl49OuCdEGQhn6v8TQmXGNG82W3b35IUT7qW/A6CM6borAXwQdIphZTFcOJlvTMFQSvo7ABhTcbwy0wUKHWJY8ctBohksnE6aAygMk9RUWaV0em/qAWBsDJR1QeYBAMgJAksABAuzBYCcO8xg3GyGNgiiegAszAA6RScI4Y+IYUUXcHKGy2+xb66USY27DiAxg2qAGzt33eIpAGD6zjSKEnffSzaKsBKA4cLmYRgXp8Q1CNB6AMR2a/1m3o0KAJjubR/m5oTouyu+aExiB93NohMIJILHU2PWMFUqTtV291dW93IACN2I6wFgYMwwlbGxhnknb6O2WmdQWqMb2Xh40syYVwBkp98YXnedYXfwvBLAD2IQhA4GZkopNx7mAgbzANnmUwid7hHYbrI6A8BuSf+ifJAoahftx2jY/v1r9+cAcNrMOL2qbBR4FuteEbxaY1k+CE611t/Jx4NgTrOATdnqTnvoPsOQIzizsSyCrKTpnwJkEARA0KZtNsXzcxnLIogPMZsBs1irz1r+aHyACzeWRZB/brzs+gOuaT2zfG4CCAAAAABJRU5ErkJggg=='


// 追加 CSS
GM_addStyle(`${cssSub}`)
// 追加监听器 Worker
// const blobJsWorker = new Blob([jsWorkerSub], {type: 'application/javascript'})
// const urlJsWorker = URL.createObjectURL(blobJsWorker)
// const jsWorker = 'data:application/javascript;base64,' + btoa(jsWorkerSub)

// navigator.serviceWorker.register(urlJsWorker, {
//     scope: './',
//     type: 'classic',
//     name: 'bili-enchanter-worker-http-interceptor',
// }).then(res => {
//     console.log('Bili Enchanter Web 监听器注册完成', res)
// }).catch(err => {
//     console.error('Bili Enchanter Web 监听器注册失败', err)
// })

// const strJsWorker = 'data:text/javascript;base64,' + btoa(jsWorkerSub)
// new unsafeWindow.Worker(strJsWorker, {
//     scope: './',
//     type: 'classic',
//     name: 'bili-enchanter-worker-http-interceptor',
// })

