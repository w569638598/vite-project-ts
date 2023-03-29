<script setup>

</script>

<template>
    <el-page-header :icon="null">
        <template #content>
            <div class="flex items-center">
                <el-avatar :size="32" class="mr-3"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                <span class="text-large font-600 mr-3"> Title </span>
                <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
                    Sub title
                </span>
                <el-tag>Default</el-tag>
            </div>
        </template>
        <template #extra>
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon>
                        <Setting />
                    </el-icon>
                    用户
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item icon="setting">个人中心</el-dropdown-item>
                        <el-dropdown-item icon="user">设置</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </template>
    </el-page-header>
    <hr color="#eee">
</template>

<style></style>