
import {docMain, domBili, strImgEnchantTable, winMain,} from './constants.js'
import {showConfigDialog} from './configs.js'

/**
 * @param {Object} styles
 * @param {HTMLElement} dom
 * */
export function setStyle(styles, dom)
{
    const style = dom.style
    for (const key in styles)
    {
        style[key] = styles[key]
    }
}

export function injectButton()
{
    docMain.addEventListener('readystatechange', event => {

        if(docMain.readyState !== 'complete' || !event.target.location.host.includes('www.bilibili.com')) return

        const domBtnEnchanter = docMain.createElement('div')
        setStyle({
            'width': '40px',
            'height': '40px',
            'display': 'flex',
            'justify-content': 'flex-end',
            'align-items': 'center',
            'cursor': 'pointer',
            'border': '1px solid silver',
            'border-radius': '6px',
            'text-align': 'center',
            'vertical-align': 'center',
            'margin-top': '10px',
        }, domBtnEnchanter)
        domBtnEnchanter.classList.add('btn-bili-enchanter')
        domBtnEnchanter.innerHTML = `
<img src="${strImgEnchantTable}" style="width: 36px; height: 36px; margin: auto"/>
`
        domBtnEnchanter.onclick = showConfigDialog
        let dom = domBili.domRightButtonContainer
        if(!dom)
        {
            console.log('发生一次奇怪的调用', event)
            console.trace()
            return
        }
        console.log('成功注入 button', event)
        dom.appendChild(domBtnEnchanter)
    })
}
