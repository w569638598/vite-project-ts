<template>
    <div>
        <Icon :icon="props.icon" :color="props.color" />
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { defineProps } from 'vue'
const props = defineProps<{
    icon: string,
    color?: string,
    width?: string | number,
    height?: string | number,
    inline?: boolean,
    style?: object,
    rotate?: number | string,
    flip?: string,
    verticalFlip?: boolean,
    horizontalFlip?: boolean,
    onLoad?: ()=> any 
}>()
</script>
<style lang='less' scoped></style>