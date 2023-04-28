<script setup lang="ts">
import formEl from './el.vue'
import { listItem } from '../data/formList'
</script>

<template>
    <div>
        <formEl v-for="item of listItem" class="leftDragItem" :formItem="item" :source="'list'">
            <icon :icon="item.icon"></icon>
        </formEl>
    </div>
</template>

<style lang="less" scoped>
.dragMain {
    .leftDragItem {
        padding: 12px 0;
        display: flex;
        align-items: center;
        justify-content: start;
        width: 200px;
        border-bottom: dashed 1px #ccc;
        cursor: pointer;
        &>div {
            display: flex;
            align-items: center;
        }
    }
}
</style>