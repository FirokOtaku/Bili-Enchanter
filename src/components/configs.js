

import { ref, watch, } from 'vue'
import {docMain, domFrame, isUnderTamperMonkey, winFrame, winMain} from './constants.js'
import {Pool} from './pool.js'


export const cp = ref('homepage') // homepage, nav, about

export const domBiliMain = document.getElementById('i_cecream')

/**
 * @deprecated 没啥用, 后面删掉
 * */
export const isDialogConfigShow = ref(false)
function refreshOpacity(newValue)
{
    const opacity = newValue ? '1' : '0'
    docMain.body.style.setProperty('--opacity-dialog-bilibili-enchanter', opacity)
    domFrame.style.setProperty('pointer-events', newValue ? 'auto' : 'none')
    domFrame.style.setProperty('z-index', newValue ? '10000' : '-1000')
    if(newValue)
    {
        domBiliMain.classList.add('hidden-by-bili-enchanter')
    }
    else
    {
        domBiliMain.classList.remove('hidden-by-bili-enchanter')
    }
}

export const defaultConfig = {
    hideAd: true,
    hideCarousel: true,
    hideCategory: true,
    hideCategoryRecommend: true,
    hideLiveRecommend: true,
    hideManyLike: false,
    hideManyCoin: false,
    hideFriendFollow: false,
    hideMyFollow: false,
    hideShortVideo: 0,
    listBlacklistUid: [],
    listBlacklistKeyword: '',

    showBtnAnime: true,
    showBtnLive: true,
    showBtnGameCenter: false,
    showBtnShop: false,
    showBtnManga: false,
    showBtnMatch: false,
    showBtnEra: false,
    showBtnDownloadClient: false,
    showBtnSpace: true,
    showBtnBig: false,
    showBtnMessage: true,
    showBtnT: true,
    showBtnFavlist: true,
    showBtnHistory: true,
    showBtnCreative: false,
    showBtnUpload: false,

    enableSearchBarOpacity: true,
    hideSearchBarHistory: false,
    hideSearchBarRecommend: false,

    version: 'v1',
}

export const configReal = ref(null)

export const configEditing = ref(null)

export function showConfigDialog()
{
    isDialogConfigShow.value = true
    configEditing.value = JSON.parse(JSON.stringify(configReal.value))
    refreshOpacity(true)
}
export function hideConfigDialog(shouldSave = false)
{
    refreshOpacity(false)
    isDialogConfigShow.value = false
    if(shouldSave)
    {
        poolConfig.update(configEditing.value)
    }
    configEditing.value = null
}

/** @type {Pool | null} */ let poolConfig
export function startConfigPool()
{
    stopConfigPool()

    poolConfig = new Pool('bili-enchanter-config', configReal, defaultConfig)
    poolConfig.listUpdateListener.push((latestConfig) => {
        let isSame = true
        for(let key of Object.keys(defaultConfig))
        {
            if(defaultConfig[key] === latestConfig[key]) continue
            isSame = false
            break
        }
        if(isSame) return

        if(isDialogConfigShow.value)
        {
            configEditing.value = JSON.parse(JSON.stringify(latestConfig))
        }
    })
}

export function updateConfig(configValue)
{
    if(poolConfig == null) return
    poolConfig.update(configValue)
}
export function stopConfigPool()
{
    if(poolConfig == null) return
    poolConfig.close()
    poolConfig = null
}
export function resetConfigPool()
{
    if(poolConfig == null) return
    poolConfig.reset()
}

export function enchant(counter = 0)
{

}
