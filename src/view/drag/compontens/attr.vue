<script setup lang="ts">
import { useDragStore } from '@/store/drag'
import { storeToRefs } from "pinia";
const store = useDragStore()
const { currentClickItem } = storeToRefs(store)
store.$subscribe(() => {
    console.log(currentClickItem.value,'currentClickItem');
})
</script>

<template>
    <ul v-if="currentClickItem.data">
        <li v-for="(k,v) in currentClickItem.data">
            <span>{{ v }}:</span><el-input v-model="currentClickItem.data[v]" :placeholder="currentClickItem.data.placeholder" />
        </li>
    </ul>
</template>

<style lang="less" scoped>
ul{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
    margin: 6px 0;
    span{
        margin-bottom: 6px;
        display: inline-block;
    }
}
</style>