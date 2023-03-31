<script setup lang="ts">
import { useDragStore } from '@/store/drag'
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
const store = useDragStore()
const { currentClickId } = storeToRefs(store)
let label: any = ref('')

watch(currentClickId, () => {
    if (!currentClickId) return
    label.value = store.formList.filter(e => e.id == currentClickId.value)[0].formItem.label
})

watch(label, () => {
    let obj = store.formList.filter(e => e.id == currentClickId.value)[0]
    obj.formItem.label = label.value
    store.setFormList(obj)
    })
</script>

<template>
    <ul>
        <li>
            <span>label:</span><el-input v-model="label" />
        </li>
        <li>
            <span>key</span><el-input />

        </li>
    </ul>
</template>

<style></style>