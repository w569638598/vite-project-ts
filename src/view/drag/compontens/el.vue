<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { useDragStore } from '@/store/drag'
import { storeToRefs } from "pinia";
import { v4 as uuidv4 } from 'uuid';
import { ref } from "vue";

interface Props {
    label: string,
    type: string,
    source?: string,
    id: string
}

const { label, type, id, source } = defineProps<Props>()
const dragStore = useDragStore()

function dragstart(e: Event) {
    const obj = {
        id: uuidv4(),
        formItem: {
            label,
            type
        }
    }
    dragStore.setDrag(obj)
}
function setAction() {
    if(source && source == 'list') return;
    dragStore.setCurrentClickId(id)
}
</script>

<template>
    <div draggable="true" @dragstart="dragstart($event)" @click="setAction">
        {{ label }}
        <slot></slot>
    </div>
</template>

<style></style>