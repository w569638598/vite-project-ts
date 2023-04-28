<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { useDragStore } from '@/store/drag'
import { v4 as uuidv4 } from 'uuid';

const props = defineProps<{
    formItem: formItem,
    source
}>()
const dragStore = useDragStore()
function dragstart(e: Event) {
    if (props.source !== 'list') return;
    console.log(props.source, 'source');
    const obj: hasIndexFormItem = {
        id: uuidv4(),
        data: {
            ...props.formItem.data,
        },
        index: dragStore.formList.length,
        type: props.formItem.type
    }

    dragStore.setDrag(obj)
}
function setAction() {
    if (props.source == 'list') return;
    dragStore.setCurrentClickItem(dragStore.formList.filter(e => e.id === props.formItem.id)[0])
}
</script>

<template>
    <div class="dropEl" :draggable="props.source == 'list'" @dragstart="dragstart($event)" @click="setAction">
        <span class="label">{{ props.formItem.data.label }}：</span>
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
.dropEl{
    user-select: none;
}
.label {
    margin-right: 4px;
}
</style>