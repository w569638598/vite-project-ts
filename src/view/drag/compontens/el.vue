<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { useDragStore } from '@/store/drag'
import { v4 as uuidv4 } from 'uuid';
interface Props {
    label: string,
    type: string,
    source: string,
    id?: string
}
const props = withDefaults(defineProps<Props>(), {
    label: '默认组件'
})
const dragStore = useDragStore()
function dragstart(e: Event) {
    const obj = {
        id: uuidv4(),
        formItem: {
            label: props.label,
            type: props.type
        }
    }
    dragStore.setDrag(obj)
}
function setAction() {
    console.log(props);
    
    if (props.source == 'list') return;
    dragStore.setCurrentClickItem(dragStore.formList.filter(e => e.id === props.id)[0])
}
</script>

<template>
    <div draggable="true" @dragstart="dragstart($event)" @click="setAction">
        {{ label }}
        <slot></slot>
    </div>
</template>

<style></style>