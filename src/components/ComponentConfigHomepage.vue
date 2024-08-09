<style scoped>

</style>

<template>
  <div class="page bottom padding"
       :class="cp === 'homepage' ? 'active' : ''">
    <main class="medium-width auto-margin full-height"
          v-if="configEditing != null">
      <fieldset class="full-width">
        <legend>整体内容</legend>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.hideAd">
            <span>过滤广告</span>
          </label>
        </div>
      </fieldset>

      <fieldset class="full-width">
        <legend>首页内容</legend>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.hideCarousel">
            <span>隐藏轮播推荐</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.hideCategory">
            <span>隐藏信息流分区导航</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.hideCategoryRecommend">
            <span>过滤信息流来自各分区的推荐</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.hideLiveRecommend">
            <span>过滤信息流直播推荐</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.hideManyLike">
            <span>过滤信息流 "XX 点赞"</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.hideManyCoin">
            <span>过滤信息流 "XX 投币"</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.hideMyFollow">
            <span>过滤信息流 "已关注"</span>
          </label>
        </div>

        <div>
          <label class="checkbox">
            <input type="checkbox" v-model="configEditing.hideFriendFollow">
            <span>过滤信息流 "好友关注"</span>
          </label>
        </div>

        <div class="field label">
          <input type="number" v-model="configEditing.hideShortVideo">
          <label class="active">隐藏小于指定时长短视频</label>
          <span class="helper">单位: 秒. 填 0 则不过滤</span>
        </div>

      </fieldset>

      <fieldset class="medium-height flex-vertical">
        <legend>UP 主过滤</legend>

        <div class="row flex-fixed bottom-margin">
          <div class="field border small">
            <input type="text"
                   placeholder="输入 UID 屏蔽"
                   v-model="editingUid"
                   @keydown.enter="addToBlacklist">
          </div>
        </div>
        <div class="flex-dynamic scroll">
          <div class="row" v-if="!configEditing.listBlacklistUid?.length">
            <div class="max grey-text">
              暂无屏蔽 UP 主
            </div>
          </div>
          <template v-for="(blacklistUid, indexBlacklistUid) in configEditing.listBlacklistUid">
            <div class="row">
              <div class="max">
                <template v-if="cacheUserInfo[blacklistUid]">
                  <span v-if="cacheUserInfo[blacklistUid].caching" class="tertiary-text">
                    ...
                  </span>
                  <span v-else-if="cacheUserInfo[blacklistUid].error" class="error-text">
                    x
                  </span>
                  <span v-else>
                    <i>
                      <img :src="cacheUserInfo[blacklistUid].face">
                    </i>
                    {{ cacheUserInfo[blacklistUid].name }}
                  </span>
                </template>
                <span v-else @click="triggerLoadUserInfo(blacklistUid)">
                  -
                </span>
                <span class="grey-text small-text">({{blacklistUid}})</span>
              </div>
              <div>
                <button class="circle transparent small no-margin"
                        @click="openSpace(blacklistUid)">
                  <i class="small">account_circle</i>
                </button>
                <button class="circle transparent small no-margin"
                        @click="configEditing.listBlacklistUid.splice(indexBlacklistUid, 1)">
                  <i class="small">close</i>
                </button>
              </div>
            </div>
            <hr>
          </template>
        </div>
      </fieldset>
      <fieldset class="medium-height flex-vertical" style="padding: 1rem 0 0.5rem 0">
        <legend class="left-margin small-margin">视频标题过滤</legend>
        <textarea class="no-margin no-border flex-dynamic transparent large-text padding"
                  style="resize: none; outline: none; border: none"
                  placeholder="无过滤规则"
                  v-model="configEditing.listBlacklistKeyword"></textarea>
        <div class="flex-fixed left-padding small-text">每行一个, 支持正则表达式</div>
      </fieldset>

      <div class="space"></div>
    </main>
  </div>
</template>

<script setup>

import { ref } from 'vue'
import {configEditing, cp} from './configs.js'
import {winMain} from './constants.js'
import {
  cacheUserInfo,
  triggerLoadUserInfo,
} from './caches.js'

const editingUid = ref('')
function addToBlacklist()
{
  let uid = editingUid.value
  if(uid === '') return
  uid = parseInt(uid)
  if(isNaN(uid)) return
  for(let uidBlacklist of configEditing.value.listBlacklistUid)
  {
    if(uidBlacklist === uid)
    {
      editingUid.value = ''
      return
    }
  }
  configEditing.value.listBlacklistUid.push(uid)
  triggerLoadUserInfo(uid)
  editingUid.value = ''
}
function openSpace(uid)
{
  winMain.open("https://space.bilibili.com/" + uid);
}
</script>
