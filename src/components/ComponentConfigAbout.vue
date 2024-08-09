<style scoped>

</style>

<template>
  <div class="page bottom padding" :class="cp === 'about' ? 'active' : ''">
    <main class="medium-width auto-margin full-height">
      <fieldset class="full-width top-margin">

        <div class="center-align">
          <button class="primary small small-round" @click="onClickExportConfig">
            <i>upload</i>
            导出配置
          </button>
          <button class="secondary small small-round">
            <i>download</i>
            <input type="file" @change="onClickImportConfig">
            导入配置
          </button>
        </div>

        <hr class="bottom-margin top-margin">

        <div class="center-align">
          <button class="error small small-round small-margin" @click="showConfirmBtn">
            <i>delete</i>
            <span>重置配置</span>
          </button>
          <div>如果插件使用时出现问题, 可尝试重置配置</div>
          
          <div class="margin" v-if="isShowingConfirmBtn">
            <button class="error vertical no-round" @click="onClickResetConfig">
              <span>确认重置</span>
              <i>check_circle</i>
            </button>
          </div>
        </div>

        <hr class="bottom-margin top-margin">

        <div class="center-align">
          <div>
            <img :src="strImgEnchantTable" class="extra" style="image-rendering: pixelated">
          </div>
          <div class="italic">醒醒, 让我们把垃圾烧成灰</div>
        </div>

        <div class="middle-align">
          v{{pluginVersion}}
          by <a href="https://github.com/FirokOtaku"
                target="_blank"
                class="link tiny-margin">
            Firok
            <i class="no-margin tiny">open_in_new</i>
          </a>
        </div>
        <div class="middle-align">
          基于
          <a href="https://www.tampermonkey.net/" class="link" target="_blank">
            Tamper Monkey
            <i class="no-margin tiny">open_in_new</i>
          </a>,&ensp;
          <a href="https://vuejs.org/" class="link" target="_blank">
            Vue3
            <i class="no-margin tiny">open_in_new</i>
          </a>,&ensp;
          <a href="https://www.beercss.com/" class="link" target="_blank">
            Beer.css
            <i class="no-margin tiny">open_in_new</i>
          </a>
        </div>
        <div class="middle-align">
          源码以木兰宽松许可证 (第2版) 协议开源于
          <a href="https://github.com/FirokOtaku/bili-enchanter"
             target="_blank"
             class="link tiny-margin">
            GitHub
            <i class="no-margin tiny">open_in_new</i>
          </a>
        </div>
        <div class="middle-align">
          图标来自 Minecraft
        </div>

      </fieldset>
    </main>
  </div>
</template>

<script setup>

import {configReal, cp, resetConfigPool, showConfigDialog, updateConfig} from './configs.js'
import {ref} from 'vue'
import {pluginVersion, strImgEnchantTable} from './constants.js'

const isShowingConfirmBtn = ref(false)
const keyHideConfirmBtn = ref(null)

let threadHideConfigBtn = null
function showConfirmBtn()
{
  isShowingConfirmBtn.value = true

  const key = Math.random() + ':' + Math.random()
  keyHideConfirmBtn.value = key

  if(threadHideConfigBtn != null)
    clearTimeout(threadHideConfigBtn)
  threadHideConfigBtn = setTimeout(() => {
    if (keyHideConfirmBtn.value === key)
    {
      isShowingConfirmBtn.value = false
      keyHideConfirmBtn.value = null
    }
  }, 3000)
}

function onClickResetConfig()
{
  resetConfigPool()
  showConfigDialog()
  isShowingConfirmBtn.value = false
  keyHideConfirmBtn.value = null
  clearTimeout(threadHideConfigBtn)
  threadHideConfigBtn = null
}

function onClickExportConfig()
{
  let data = JSON.stringify( configReal.value, null, 2 ) // 纯代码创建文件并下载到用户本地
  data = new Blob([data])
  let domLink = document.createElement('a') // 创建一个 <a> 元素, 用于模拟用户的点击下载操作

  domLink.href = window.URL.createObjectURL(data) // 文件数据
  domLink.download = 'bili-enchanter-config.json' // 文件名
  domLink.click() // 模拟用户点击
}

async function onClickImportConfig(event)
{
  /** @type {HTMLInputElement} */ const domInput = event.target
  if(domInput.files.length === 0) return

  const file = domInput.files[0]
  const promise = new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(e.target.result)
    reader.onerror = () => reject()
    reader.readAsText(file, 'utf-8')
  })

  const textConfig = await promise
  const jsonConfig = JSON.parse(textConfig)
  updateConfig(jsonConfig)
}

</script>
