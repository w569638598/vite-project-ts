<script setup lang="ts">
import { useDragStore } from '@/store/drag'
import { storeToRefs } from "pinia";
const store = useDragStore()
const { currentClickItem } = storeToRefs(store)
</script>

<template>
    <ul>
        <li>
            <span>label:</span><el-input v-model="currentClickItem.formItem.label" />
        </li>
        <li>
            <span>key</span><el-input v-model="currentClickItem.formItem.key" />
        </li>
    </ul>
</template>

<style></style>