<script setup>

</script>

<template>
    <el-page-header class="pageHeader" :icon="Back">
        <template #content>
            <div class="flex items-center">

                <span class="text-large font-600 mr-3"> Title </span>
                <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
                    Sub title
                </span>
                <el-tag>Default</el-tag>
            </div>
        </template>
        <template #extra>
            <el-dropdown>
                <span class="user">
                    <el-avatar :size="32" class="mr-3"
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item :divided="true" :icon="setting">
                            <span>个人中心</span>
                        </el-dropdown-item>
                        <el-dropdown-item :divided="true">
                            <span>设置</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </template>
    </el-page-header>
</template>


<style lang="less">
.pageHeader {
    .el-page-header__extra {
        display: flex;
        align-items: center;
        margin-right: 20px;
    }
}
</style>
<style scoped lang="less">
.pageHeader {
    border-bottom: solid 1px #ccc;
    padding: 8px 0;
}

.user {
    cursor: pointer;
}
</style>