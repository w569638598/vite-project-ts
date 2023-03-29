<script setup lang="ts" name="subMenu">
const { menu } = defineProps(['menu'])
</script>

<template>
    <el-sub-menu :index="menu.path" v-if="menu?.children">
        <template #title>
            <el-icon>
                <component :is="menu.meta.icon" />
            </el-icon>
            <span>{{ menu.meta.title }}</span>
        </template>
        <subMenu v-for='item of menu.children' :menu="item"></subMenu>
    </el-sub-menu>
    <el-menu-item v-else :index="menu?.path">
        {{ menu?.meta?.title }}
    </el-menu-item>
</template>

<style></style>