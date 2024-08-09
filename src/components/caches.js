import {ref,} from 'vue'
import {Pool} from './pool.js'

export const cacheUserInfo = ref({})

export async function triggerLoadUserInfo(uid = '')
{
    const userKey = uid
    const cachedData = cacheUserInfo.value
    if(cachedData[userKey] != null && cachedData[userKey].caching)
        return
    cachedData[userKey] = { caching: true }
    poolUserInfo.update(cachedData)

    let response
    try
    {
        response = await fetch(`https://api.bilibili.com/x/web-interface/card?mid=${uid}`, {
            method: 'GET',
        })

        if(response.ok)
        {
            const json = await response.json()
            const card = json.data.card
            cachedData[userKey] = {
                name: card.name,
                sex: card.sex,
                face: card.face,
            }
        }
        else
        {
            // noinspection ExceptionCaughtLocallyJS
            throw {statusText: 'api denied'}
        }
    }
    catch(any)
    {
        cachedData[userKey] = { error: response?.statusText ?? 'unknown' }
    }
    setTimeout(() => {
        poolUserInfo.update(cachedData)
    }, 250)
}

/** @type {Pool | null} */ let poolUserInfo
export function startUserInfoPool()
{
    stopUserInfoPool()

    poolUserInfo = new Pool('bili-enchanter-cache', cacheUserInfo, {})
}
export function stopUserInfoPool()
{
    if(poolUserInfo == null) return
    poolUserInfo.close()
    poolUserInfo = null
}
export function resetUserInfoPool()
{
    if(poolUserInfo == null) return
    poolUserInfo.reset()
}
