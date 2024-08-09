<style scoped>

</style>

<template>
  <div class="page bottom padding"
       :class="cp === 'nav' ? 'active' : ''">
    <main class="medium-width auto-margin full-height"
          v-if="configEditing != null">
      <fieldset class="full-width">
        <legend>导航栏</legend>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnAnime">
            <span>显示 "番剧" 按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnLive">
            <span>显示 "直播" 按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnGameCenter">
            <span>显示 "游戏中心" 按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnShop">
            <span>显示 "会员购" 按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnManga">
            <span>显示 "漫画" 按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnMatch">
            <span>显示 "赛事" 按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnEra">
            <span>显示热点活动按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnDownloadClient">
            <span>显示 "下载客户端" 按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnSpace">
            <span>显示 "个人中心" 头像按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnBig">
            <span>显示 "大会员" 按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnMessage">
            <span>显示 "消息" 按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnT">
            <span>显示 "动态" 按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnFavlist">
            <span>显示 "收藏" 按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnHistory">
            <span>显示 "历史" 按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnCreative">
            <span>显示 "创作中心" 按钮</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.showBtnUpload">
            <span>显示 "投稿" 按钮</span>
          </label>
        </div>
      </fieldset>
      <fieldset class="full-width">
        <legend>搜索栏</legend>

        <div>
          <label class="checkbox">
            <input type="checkbox" disabled readonly>
            <span>启用半透明效果</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.hideSearchBarHistory">
            <span>隐藏历史搜索</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.hideSearchBarRecommend">
            <span>隐藏热搜推荐</span>
          </label>
        </div>
      </fieldset>

      <div class="space"></div>
    </main>
  </div>
</template>

<script setup>

import {configEditing, cp} from './configs.js'
</script>
