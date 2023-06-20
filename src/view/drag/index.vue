<script setup lang="ts">
import dragBox from './compontens/dragBox.vue'
import dragList from './compontens/dragList.vue'
import attr from './compontens/attr.vue'
import { onDeactivated, onActivated } from 'vue'
import { useDragStore } from '@/store/drag'
let store = useDragStore()

onDeactivated(() => {
})
onActivated(() => {
})
function exportJson() {
    const data = store.formList;
    console.log(store.formList);

}
</script>

<template>
    <div class="dragMain">
        <div class="header">
            <el-button type="primary" @click="exportJson">导出</el-button>
        </div>
        <div class="main">
            <dragList>

            </dragList>
            <dragBox>

            </dragBox>
            <attr></attr>
        </div>
    </div>
</template>

<style lang="less" scoped>
.dragMain {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    .main{
        display: flex;
    }
}
</style>