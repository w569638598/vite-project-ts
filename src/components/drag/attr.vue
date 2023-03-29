<script setup lang="ts">
import { useDragStore } from '../../store/drag'
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
const store = useDragStore()
const { currentClickId } = storeToRefs(store)
let label: any = ref('')

// store.$subscribe(state => {
//     const {formList, currentClickId} = state.events.target
//     const actionItem = formList.filter(e => e.id == currentClickId)[0] || null
//     // label = actionItem ? actionItem.formItem.label : ''
//     console.log(label);

// })
watch(currentClickId, () => {
    if (!currentClickId) return

    label.value = store.formList.filter(e => e.id == currentClickId.value)[0].formItem.label
    console.log(label);

})
console.log(currentClickId);

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