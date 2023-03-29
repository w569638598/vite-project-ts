<script setup lang="ts">
import Header from './Header.vue';
import LeftMenu from './LeftMenu.vue'
import { onMounted, ref, getCurrentInstance, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
const leftMenu = ref()
const contentDom = ref()
onMounted(() => {
  const leftMenuWidth = getComputedStyle(leftMenu.value.$el, '').width
  contentDom.value.style.cssText = `width: calc(96% - ${leftMenuWidth});left: ${leftMenuWidth};top: 0;margin: 0 2%`
})


const route = useRouter()
const routeArr = route.options.routes
const usefulRouter = computed(() => {
  console.log(routeArr.filter(e => e.meta && e.meta.title == '主页')[0].children);
  return routeArr.filter(e => e.meta && e.meta.title == '主页')[0].children
  // return arr.filter(e => !e.redirect)
})
watch(usefulRouter, () => {
  console.log(usefulRouter);
  
})
</script>

<template>
  <Header></Header>
  <div class="main">
    <LeftMenu :menu="usefulRouter" class="leftMenu" ref="leftMenu"></LeftMenu>
    <div class="content" ref="contentDom">

      <router-view v-slot="{ Component }">
        <transition name="move" mode="out-in">
          <keep-alive>
            <component :is="Component"></component>
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style>
.main {
  position: relative;
  height: calc(100vh - 57px);
}

.leftMenu {}

.content {
  position: absolute
}
</style>