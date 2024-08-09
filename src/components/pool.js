import * as vue from 'vue'
import {isUnderTamperMonkey} from './constants.js'

export class Pool
{
    /**
     * @param {string} name 频道名称
     * @param {vue.Ref} ref 需要同步的 vue Ref
     * @param {any} defaultData 默认值
     * */
    constructor(name , ref, defaultData = {})
    {
        this.name = name
        this.ref = ref
        this.listUpdateListener = []
        Object.defineProperty(this, 'defaultData', {
            get: () => {
                return defaultData == null ? null : JSON.parse(JSON.stringify(defaultData))
            },
        })
        this.channel = new BroadcastChannel(name)
        this.channel.addEventListener('message', event => {
            this._load()
            const valueLatest = this.ref.value
            for(let updateListener of this.listUpdateListener)
            {
                if(typeof updateListener !== 'function') continue

                updateListener(valueLatest)
            }
        })
        this._load()
    }

    update(value)
    {
        this.ref.value = value
        this._save()
        setTimeout(() => {
            this.channel.postMessage('update,' + Date.now())
        }, 250)
    }

    _load()
    {
        let data
        if(isUnderTamperMonkey)
        {
            data = GM_getValue(this.name, this.defaultData)
        }
        else
        {
            data = localStorage.getItem('bili-enchanter-cache')
        }
        if(data === null || data === '')
            data = this.defaultData
        this.ref.value = typeof data === 'string' ? JSON.parse(data) : JSON.parse(JSON.stringify(data))
    }
    _save()
    {
        const data = JSON.stringify(this.ref.value)
        if(isUnderTamperMonkey)
        {
            GM_setValue(this.name, data)
        }
        else
        {
            localStorage.setItem(this.name, data)
        }
    }

    reset()
    {
        this.ref.value = this.defaultData
        this._save()
        setTimeout(() => {
            this.channel.postMessage('reset,' + Date.now())
        }, 250)
    }

    close()
    {
        this.channel.close()
    }
}
