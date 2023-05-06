<template>
    <div>
        <Icon :horizontalFlip="props.horizontalFlip" :verticalFlip="props.verticalFlip" :rotate="props.rotate" :flip="props.flip" :width="props.width" :height="props.height" :icon="props.icon" :color="props.color" :size="props.size" :style="props.size" />
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
    rotate?: number,
    flip?: string,
    verticalFlip?: boolean,
    horizontalFlip?: boolean,
    onLoad?: ()=> any ,
    size?: number
}>()
</script>
<style lang='less' scoped></style>