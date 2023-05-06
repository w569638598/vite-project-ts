<script setup lang="ts">
interface dropDownList {
    icon: string,
    text: string
}
const dropDownList :dropDownList[] = [
    {
        icon: 'bi:people-circle',
        text: '个人中心'
    }, {
        icon: 'ep:setting',
        text: '设置'
    }
]
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
                <img style="cursor: pointer;" width="28"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="">

                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item :divided="true" v-for="item of dropDownList">
                            <div class="downMenu">
                                <icon :icon="item.icon"></icon>
                                <span>{{ item.text }}</span>
                            </div>
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
.downMenu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    &>*{
        margin: 0 2px;
    }
}
</style>