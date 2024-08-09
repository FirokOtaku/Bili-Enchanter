
<style scoped>
</style>

<template>
  <div class="background full flex-vertical"
       style="">
    <nav class="flex-fixed primary-container center-align extra-line">
      <div class="middle-align">
        <i class="">
          <img :src="strImgEnchantTable">
        </i>
        <span class="left-margin tiny-margin bold">
          Bili Enchanter
        </span>
      </div>
    </nav>
    <component-config v-if="configEditing != null"/>

    <footer class="flex-fixed secondary-container center-align">
      <nav>
        <div class="tabs left-align max">
          <a :class="cp === 'homepage' ? 'active' : ''" @click="cp = 'homepage'">信息流设置</a>
          <a :class="cp === 'nav' ? 'active' : ''" @click="cp = 'nav'">导航栏设置</a>
          <a :class="cp === 'about' ? 'active' : ''" @click="cp = 'about'">帮助</a>
        </div>
        <div>
          <button class="circle transparent no-margin" @click="hideConfigDialog(false)">
            <i>close</i>
          </button>
          <button class="circle transparent no-margin" @click="hideConfigDialog(true)">
            <i>check</i>
          </button>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script setup>

import {ref, computed, onMounted, onBeforeMount, onBeforeUnmount, } from 'vue'
import {
  configEditing,
  cp,
  hideConfigDialog,
  enchant,
  configReal,
  startConfigPool,
  stopConfigPool,
} from './components/configs.js'
import {docMain, strImgEnchantTable, winMain} from './components/constants.js'
import {
  startUserInfoPool,
  stopUserInfoPool,
} from './components/caches.js'

/**
 * @param {HTMLElement} domElement
 * @param {boolean} shouldShow
 * */
function handleElement(domElement, shouldShow)
{
  if(shouldShow)
  {
    domElement.style.setProperty('display', '')
  }
  else
  {
    domElement.style.setProperty('display', 'none')
  }
}

function enchantNavSide(conf)
{
  // 处理导航栏
  const domNavLeft = docMain.querySelector('ul.left-entry')
  if (domNavLeft) // 左侧导航栏
  {
    const domNavLeftChildren = [...domNavLeft.children]
    for(let step = 1; step < domNavLeftChildren.length; step++) // 第一个是主页按钮, 这个忽略不处理
    {
      const domNavLeftChild = domNavLeftChildren[step]

      CHECK_BUTTON_LEFT: {
        if(domNavLeftChild.classList.contains('left-loc-entry'))
        {
          handleElement(domNavLeftChild, conf.showBtnEra)
          break CHECK_BUTTON_LEFT
        }

        /** @type {HTMLLinkElement} */ const domCheckDownloadEntry = domNavLeftChild.querySelector('a.download-entry')
        if(domCheckDownloadEntry) // 下载客户端
        {
          handleElement(domNavLeftChild, conf.showBtnDownloadClient)
          break CHECK_BUTTON_LEFT
        }

        /** @type {HTMLLinkElement} */ const domCheckDefaultEntry = domNavLeftChild.querySelector('a.default-entry')
        if(domCheckDefaultEntry)
        {
          const url = domCheckDefaultEntry.href
          if(url.includes('www.bilibili.com/anime')) // 番剧
          {
            handleElement(domNavLeftChild, conf.showBtnAnime)
            break CHECK_BUTTON_LEFT
          }
          else if(url.includes('live.bilibili.com')) // 直播
          {
            handleElement(domNavLeftChild, conf.showBtnLive)
            break CHECK_BUTTON_LEFT
          }
          else if(url.includes('game.bilibili.com')) // 游戏中心
          {
            handleElement(domNavLeftChild, conf.showBtnGameCenter)
            break CHECK_BUTTON_LEFT
          }
          else if(url.includes('show.bilibili.com')) // 会员购
          {
            handleElement(domNavLeftChild, conf.showBtnShop)
            break CHECK_BUTTON_LEFT
          }
          else if(url.includes('manga.bilibili.com')) // 漫画
          {
            handleElement(domNavLeftChild, conf.showBtnManga)
            break CHECK_BUTTON_LEFT
          }
          else if(url.includes('www.bilibili.com/match')) // 赛事
          {
            handleElement(domNavLeftChild, conf.showBtnMatch)
            break CHECK_BUTTON_LEFT
          }
        }
      }
    }
  }

  const domNavRight = docMain.querySelector('ul.right-entry')
  if (domNavRight) // 右侧导航栏
  {
    const domNavRightChildren = [...domNavRight.children]

    for(let step = 0; step < domNavRightChildren.length; step++)
    {
      const domNavRightChild = domNavRightChildren[step]

      CHECK_BUTTON_RIGHT: {
        if(domNavRightChild.classList.contains('header-avatar-wrap'))
        {
          handleElement(domNavRightChild, conf.showBtnSpace)
          break CHECK_BUTTON_RIGHT
        }

        if(domNavRightChild.classList.contains('vip-wrap'))
        {
          handleElement(domNavRightChild, conf.showBtnBig)
          break CHECK_BUTTON_RIGHT
        }

        if(domNavRightChild.classList.contains('right-entry-item--upload'))
        {
          handleElement(domNavRightChild, conf.showBtnUpload)
          break CHECK_BUTTON_RIGHT
        }

        /** @type {HTMLLinkElement} */ const domRightEntryOutsideLink = domNavRightChild.querySelector('a.right-entry__outside')
        if(domRightEntryOutsideLink)
        {
          const url = domRightEntryOutsideLink.href

          if(url.includes('message.bilibili.com'))
          {
            handleElement(domNavRightChild, conf.showBtnMessage)
            break CHECK_BUTTON_RIGHT
          }
          else if(url.includes('t.bilibili.com'))
          {
            handleElement(domNavRightChild, conf.showBtnT)
            break CHECK_BUTTON_RIGHT
          }
          else if(url.includes('space.bilibili.com') && url.includes('favlist'))
          {
            handleElement(domNavRightChild, conf.showBtnFavlist)
            break CHECK_BUTTON_RIGHT
          }
          else if(url.includes('www.bilibili.com/account/history'))
          {
            handleElement(domNavRightChild, conf.showBtnHistory)
            break CHECK_BUTTON_RIGHT
          }
          else if(url.includes('member.bilibili.com/platform/home'))
          {
            handleElement(domNavRightChild, conf.showBtnCreative)
            break CHECK_BUTTON_RIGHT
          }
        }
      }
    }
  }
}
function enchantSearchBar(conf)
{
  const domNavMid = docMain.querySelector('div.center-search-container')
  if (domNavMid) // 搜索栏
  {
    // const domSearchBarItself = domNavMid.querySelector('div.center-search__bar')
    // const isSearchBarItselfFocus = domSearchBarItself.classList.contains('is-focus')

    const domSearchBarAppend = domNavMid.querySelector('div.search-panel')
    if(domSearchBarAppend)
    {
      const domSearchBarHistory = domSearchBarAppend.querySelector('div.history')
      if(domSearchBarHistory)
      {
        handleElement(domSearchBarHistory, !conf.hideSearchBarHistory)
      }
      const domSearchBarRecommend = domSearchBarAppend.querySelector('div.trending')
      if(domSearchBarRecommend)
      {
        handleElement(domSearchBarRecommend, !conf.hideSearchBarRecommend)
      }
    }
  }
}
function enchantFeedHead(conf)
{
  // 处理页面内容
  const domMainFeed = docMain.querySelector('main.bili-feed4-layout')

  const domCategory = docMain.querySelector('div.bili-header__channel')
  if(domCategory) // 信息流里包含的分区
  {
    handleElement(domCategory, !conf.hideCategory)
    domMainFeed.style.setProperty('padding-top',  conf.hideCategory ? '24px' : '0')
  }

  const domCarousel = docMain.querySelector('div.recommended-swipe')
  if(domCarousel) // 轮播推荐
  {
    handleElement(domCarousel, !conf.hideCarousel)
  }

  const domCarouselCore = docMain.querySelector('div.recommended-swipe-core')
  if(domCarouselCore)
  {
    domCarouselCore.style.setProperty('height', '492px')
  }

  const domFeedBody = docMain.querySelector('.bili-feed4-layout')
  if(domFeedBody)
  {
    domFeedBody.style.setProperty('padding-bottom', '160px')
  }
}
function enchantFeedCard(conf)
{
  /** @type {HTMLElement[]} */ const listCard = [...docMain.getElementsByClassName('bili-video-card')]
  function handleCard(domCard, shouldHide)
  {
    if(domCard.parentNode && domCard.parentNode.classList.contains('feed-card'))
    {
      handleElement(domCard.parentNode, !shouldHide)
    }
    handleElement(domCard, !shouldHide)
  }

  const listRegExp = []
  for(let lineBlacklistTitle of conf.listBlacklistKeyword.split('\n'))
  {
    if(lineBlacklistTitle === '') continue
    listRegExp.push({
      keyword: lineBlacklistTitle,
      regexp: new RegExp(lineBlacklistTitle, 'i'),
    })
  }

  for(let domCard of listCard)
  {
    let shouldBlockByEmpty = false
    let shouldBlockByTitle = false
    let shouldBlockByUid = false
    let shouldBlockByShort = false
    let isManyLike = false
    let isManyCoin = false
    let isMyFollow = false
    let isFriendFollow = false

    CHECK_CARD_CONTENT: {
      // 检查是否是已经被屏蔽掉的内容
      if(domCard.textContent === '')
      {
        shouldBlockByEmpty = true
        break CHECK_CARD_CONTENT
      }

      // 检查是否是视频卡片
      const domTitle = domCard.querySelector('.bili-video-card__info--tit')
      if(domTitle)
      {
        // 获取视频标题
        const title = domTitle?.getAttribute('title')

        for(let regexpBlacklistTitle of listRegExp)
        {
          if(title.includes(regexpBlacklistTitle.keyword) || regexpBlacklistTitle.regexp.test(title))
          {
            shouldBlockByTitle = true
            break CHECK_CARD_CONTENT
          }
        }

        // 获取视频作者名称和 uid
        const domOwner = domCard.querySelector('.bili-video-card__info--owner')
        const domOwnerName = domOwner.querySelector('.bili-video-card__info--author')
        const ownerName = domOwnerName.innerText
        const ownerHref = new URL(domOwner.href)
        const ownerUid = ownerHref.host.includes('space.bilibili.com') ?
            ownerHref.pathname.substring(1) :
            ''
        for(let uid of conf.listBlacklistUid)
        {
          if(ownerUid === uid)
          {
            shouldBlockByUid = true
            break CHECK_CARD_CONTENT
          }
        }

        // 获取时长
        const domDuration = domCard.querySelector('span.bili-video-card__stats__duration')
        const textDuration = domDuration ? domDuration.innerText : '00:00' // 00:00, 01:00, 01:00:00
        const durationParts = textDuration.split(':').map(x => parseInt(x))
        let durationSeconds
        switch (durationParts.length)
        {
          case 1:
            durationSeconds = durationParts[0]
            break
          case 2:
            durationSeconds = durationParts[0] * 60 + durationParts[1]
            break
          case 3:
            durationSeconds = durationParts[0] * 3600 + durationParts[1] * 60 + durationParts[2]
            break
          default:
            durationSeconds = 999999
        }

        if(conf.hideShortVideo > 0 && durationSeconds < conf.hideShortVideo)
        {
          shouldBlockByShort = true
          break CHECK_CARD_CONTENT
        }

        // 其它信息
        const domExtraMark = domCard.querySelector('.bili-video-card__info--icon-text')
        isManyLike = domExtraMark && domExtraMark.innerText.includes('点赞')
        isManyCoin = domExtraMark && domExtraMark.innerText.includes('硬币')
        isMyFollow = domExtraMark && domExtraMark.innerText.includes('已关注')
        isFriendFollow = domExtraMark && domExtraMark.innerText.includes('好友关注')
      }
    }

    // 开始屏蔽内容
    const shouldHide =
        shouldBlockByUid ||
        shouldBlockByEmpty ||
        shouldBlockByTitle ||
        shouldBlockByShort ||
        (isManyLike && conf.hideManyLike) ||
        (isManyCoin && conf.hideManyCoin) ||
        (isMyFollow && conf.hideMyFollow) ||
        (isFriendFollow && conf.hideFriendFollow)

    handleCard(domCard, shouldHide)
  }

  /** @type {HTMLElement[]} */ const listCategoryRcmd = [...docMain.getElementsByClassName('floor-single-card')]
  for(let domCategoryRcmd of listCategoryRcmd)
  {
    // 检查是否是已经被屏蔽掉的内容
    handleElement(domCategoryRcmd, !conf.hideCategoryRecommend)
  }

  /** @type {HTMLElement[]} */ const listLiveCard = [...docMain.getElementsByClassName('bili-live-card')]
  for(let domLiveCard of listLiveCard)
  {
    handleElement(domLiveCard, !conf.hideLiveRecommend)
  }
}

function enchantFeedMargin()
{
  /**
   * @type {HTMLElement[]}
   * */
  const list = [...docMain.getElementsByClassName('feed-card'), ...docMain.getElementsByClassName('bili-video-card')]
  for(let step = 0; step < list.length; step++)
  {
    const card = list[step]
    const mt = card.style['margin-top']
    if(mt === '' || mt !== '0')
    {
      card.style.setProperty('margin-top', '0')
    }
  }
}

function enchantAd(conf)
{
  const list = [
    ...docMain.getElementsByClassName('ad-report'),
    ...docMain.getElementsByClassName('ad-floor-exp'),
  ]
  for(const ad of list)
  {
    handleElement(ad, !conf.hideAd)
  }
}

const tasks = {
  all: [enchantNavSide, enchantSearchBar, enchantFeedHead, enchantFeedCard, enchantFeedMargin, enchantAd,],
  on1s: [enchantSearchBar,],
  on2s: [enchantFeedCard, enchantFeedMargin, enchantAd,],
  on10s: [enchantNavSide,enchantFeedHead,],
}

function enchantTemp(counter)
{
  const conf = configReal.value
  if(-1 === counter)
  {
    for(const task of tasks.all) task(conf)

    return
  }

  if(counter % 10 === 0)
  {
    for(const task of tasks.on10s) task(conf)
  }
  if(counter % 2 === 0)
  {
    for(const task of tasks.on2s) task(conf)
  }
  for(const task of tasks.on1s) task(conf)
}
import ComponentConfig from './components/ComponentConfig.vue'

/**
 * @param {PointerEvent} event
 * */
function onDocMainContextMenu(event)
{
  /** @type {Node} */ let node = event.target
  while(node.parentNode != null)
  {
    if(node.classList.contains('feed-card'))
    {
      console.log('context menu event on feed card', event.target, node)
      break
    }
    node = node.parentNode
  }
}

let threadEnchanting = null
let counterEnchanting = 1
onBeforeMount(() =>{
  startConfigPool()
  startUserInfoPool()
  docMain.addEventListener('contextmenu', onDocMainContextMenu)
  threadEnchanting = setInterval(() => {
    enchantTemp(counterEnchanting)
    counterEnchanting++
    if(counterEnchanting >= 100) counterEnchanting = 0
  }, 1000)
  enchantTemp(-1)
  // 因为执行完第一次全页面清理之后, 首页大概率会很空, 所以滚动一下触发瀑布流加载
  winMain.scroll(0, 1)
})
onBeforeUnmount(() => {
  clearInterval(threadEnchanting)
  threadEnchanting = null
  stopConfigPool()
  stopUserInfoPool()
  docMain.removeEventListener('contextmenu', onDocMainContextMenu)
})

</script>
