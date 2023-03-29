<script setup lang="ts">
import { useDragStore } from '../../store/drag'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import el from './el.vue'
import { Delete} from '@element-plus/icons-vue'
let store = useDragStore()
const {dragEl,formList} = storeToRefs(store)
const dragBox = ref()
function drop(e) {
    store.pushFormList(store.dragEl)
    store.setCurrentClickId(store.dragEl.id)
}


</script>

<template>
    <div class="dragTargetBox" @dragover.preventDefault="(e) => { e.preventDefault() }" @drop.preventDefault="drop"
        ref="dragBox">
        <template v-for="(item, i) of formList">
            <div class="box" :class="[item.id === store.currentClickId ? 'action' : '']">
            <el :label="'输入框'" type="autocomplete" v-if="item.formItem.type == 'autocomplete'" source="dragContentBox" :id="item.id">
                <el-autocomplete clearable class="inline-input w-50" placeholder="Please Input" />
            </el>
            <el :label="'级联选择器'" type="cascader"  v-if="item.formItem.type == 'cascader'" source="dragContentBox" :id="item.id">
                <el-cascader />
            </el>
            <el :label="'多选框'" type="checkbox"  v-if="item.formItem.type == 'checkbox'" source="dragContentBox" :id="item.id">
                <el-checkbox label="Option 1" size="large" />
            </el>
            <el :label="'取色器'" type="color-picker"  v-if="item.formItem.type == 'color-picker'" source="dragContentBox" :id="item.id">
                <el-color-picker />
            </el>
        </div>
        <div class="buttons">
            <el-button type="danger" :icon="Delete" circle />
        </div>
        </template>
    </div>
</template>

<style lang="less" scoped>
.dragTargetBox {
    width: 100%;
    height: 500px;
    border: solid 1px #ccc;
    box-shadow: 0 2px 2px 2px #eee;
    padding-left: 10px;
    &>*{
        margin: 6px auto;
    }
    .action{
        box-shadow: 0 0 2px 2px rgb(84, 112, 236);
    }
}
</style>