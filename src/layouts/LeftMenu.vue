<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'
import subMenu from './subMenu.vue'
import {useRoute } from 'vue-router'
const route = useRoute()

function handleOpen() { }
function handleClose() { }
function selectMenu(a, b, c, d) {
}

const props = defineProps<{
  menu: RouteRecordRaw[]
}>()
</script>

<template>
    <el-menu :default-active="route.path" class="el-menu-vertical-demo" @open="handleOpen" @select="selectMenu" unique-opened
        @close="handleClose" router>
        <subMenu :menu="routes" v-for="routes of props.menu"></subMenu>
    </el-menu>
</template>

<style lang="less" scoped>
.el-menu {
    height: 100%;
    max-width: 260px;
}
</style>