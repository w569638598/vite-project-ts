<script setup lang="ts">
import { useDragStore } from '@/store/drag'
import { storeToRefs } from "pinia";
import { ref, watch } from 'vue'
const store = useDragStore()
const { currentClickItem } = storeToRefs(store)

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
}
</style>