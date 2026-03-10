---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "团剧共创"
  text: "让游玩与创作更加简单"
  tagline: 欢迎来到共创者的社区。在这里，每一次二次创作都将反哺原作，共同构建一个不断进化和成长的故事宇宙。
  image:
    src: /cxj.png
  actions:
    - theme: brand
      text: 开始使用
      link: https://tuan.chat
    - theme: alt
      text: 测试版通道
      link: http://test.tuan.chat

---
# 功能一览

<script setup>
import { ref } from 'vue'
import ImTrpgUser from './notes/im-trpg-user.md'
import ImGalgameCreator from './notes/im-galgame-creator.md'

const active = ref('user')
</script>

<div class="note-cards" role="tablist" aria-label="用户类型选择">
  <button class="note-card" :class="{ active: active === 'user' }" @click="active = 'user'" role="tab" :aria-selected="active==='user'" style="--note-bg: url('/dice.png')">
    <div class="note-card-title">我是跑团文游用户</div>
    <div class="note-card-sub">从玩家视角快速了解平台玩法与功能。</div>
  </button>
  <button class="note-card" :class="{ active: active === 'creator' }" @click="active = 'creator'" role="tab" :aria-selected="active==='creator'" style="--note-bg: url('/cxj.png')">
    <div class="note-card-title">我是 Galgame 创作者</div>
    <div class="note-card-sub">面向创作者的创作流程与最佳实践指南。</div>
  </button>
</div>

<div v-show="active === 'user'">
  <ImTrpgUser />
  <div style="height: 8px"></div>
</div>

<div v-show="active === 'creator'">
  <ImGalgameCreator />
  <div style="height: 8px"></div>
</div>

<style>
.note-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(var(--note-card-min, 280px), 1fr)); gap: 16px; margin: 12px 0 24px; }
.note-card { position: relative; overflow: hidden; text-align: left; padding: 16px 18px; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); cursor: pointer; transform: scale(var(--note-scale, .99)); transition: transform .2s ease, border-color .15s ease, box-shadow .15s ease, background .15s ease; }
.note-card:hover { border-color: var(--vp-c-text-3); transform: scale(var(--note-scale-hover, 1)); }
.note-card:active { transform: scale(var(--note-scale-active, 1.01)); }
.note-card.active { border-color: var(--vp-c-brand-1, #3eaf7c); background: color-mix(in oklab, var(--vp-c-brand-1, #3eaf7c), transparent 92%); box-shadow: 0 0 0 2px color-mix(in oklab, var(--vp-c-brand-1, #3eaf7c), transparent 80%); }
.note-card::after { content: ""; position: absolute; inset: -6px; background: var(--note-bg, url('/cxj.png')) no-repeat right -16px center / var(--note-bg-size, contain); opacity: 1; pointer-events: none; z-index: 0; transform: scale(var(--note-bg-scale, 1)); transform-origin: right center; transition: transform .25s ease-out; }
.note-card:hover::after { transform: scale(var(--note-bg-scale-hover, var(--note-bg-scale, 1))); }
/* Hover green overlay from top to bottom */
.note-card::before { content: ""; position: absolute; inset: 0; background: color-mix(in oklab, var(--vp-c-brand-1, #3eaf7c) 50%, transparent); transform: scaleY(0); transform-origin: top; opacity: 0; transition: transform .25s ease-out, opacity .25s ease-out; pointer-events: none; z-index: 1; }
.note-card:hover::before { transform: scaleY(1); opacity: 1; }
.note-card-title { position: relative; z-index: 2; font-weight: 600; font-size: 16px; margin-bottom: 6px; }
.note-card-sub { position: relative; z-index: 2; color: var(--vp-c-text-2); font-size: 14px; }
/* CTA on the right */
.note-card-cta { position: absolute; right: 16px; top: 50%; transform: translateY(-50%) translateX(6px); z-index: 3; font-weight: 600; font-size: 13px; color: var(--vp-c-brand-1, #3eaf7c); background: color-mix(in oklab, var(--vp-c-bg, #fff), transparent 20%); border: 1px solid var(--vp-c-divider); border-radius: 999px; padding: 6px 10px; opacity: 0; transition: opacity .2s ease, transform .2s ease, background .2s ease, color .2s ease; }
.note-card:hover .note-card-cta { opacity: 1; transform: translateY(-50%) translateX(0); }
@media (max-width: 640px) {
  .note-cards { grid-template-columns: 1fr; }
  .note-card::after { background-size: var(--note-bg-size, contain); background-position: right -20px center; }
  .note-card { padding-bottom: 48px; }
  .note-card-cta { top: auto; bottom: 12px; transform: translateX(6px); }
  .note-card:hover .note-card-cta { transform: translateX(0); }
}
</style>

<!-- ## 关于团剧共创

这里我觉得应该是一段可歌可泣的企业故事（雾）。 -->

## 更多……

### 用户社区

使用时遇到了问题？有想了解更多第一手资讯？对于平台有吐槽或者建议？欢迎加入我们的社区，一起交流、共同成长。

- QQ群：1004867223

### 加入我们

目前项目正处于学习实践阶段，欢迎对这个方向感兴趣的朋友加入我们的开发团队。真心希望大家能在这里学有所获，同时一起为这个领域添砖加瓦～

- [参与开发](https://ycn45b70r8yz.feishu.cn/wiki/NM7ow5OWsik737k2UsLcWdJgn1i?fromScene=spaceOverview)
