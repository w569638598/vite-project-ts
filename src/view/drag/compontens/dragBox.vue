<script setup lang="ts">
import { useDragStore } from '@/store/drag'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import formEl from './el.vue'
import Icon from '@/components/icon.vue'
let store = useDragStore()
const { formList } = storeToRefs(store)
const dragBox = ref()
function drop(e: Event) {
    store.pushFormList(store.dragEl)
    store.setCurrentClickItem(store.dragEl)
}
function del() {
    store.delFormList(store.currentClickItem)
}
</script>

<template>
    <div class="dragTargetBox" @dragover.preventDefault="(e) => { e.preventDefault() }" @drop.preventDefault="drop"
        ref="dragBox">
        <template v-for="(item, i) of formList">
            <div class="itemBox">
                <div class="box" :class="[item.id === store.currentClickItem.id ? 'action' : '']">
                    <formEl :label="item.formItem.label" type="autocomplete" v-if="item.formItem.type == 'autocomplete'"
                        source="dragContentBox" :id="item.id">
                        <el-autocomplete clearable class="inline-input w-50" placeholder="Please Input" />
                    </formEl>
                    <formEl :label="item.formItem.label" type="cascader" v-if="item.formItem.type == 'cascader'"
                        source="dragContentBox" :id="item.id">
                        <el-cascader />
                    </formEl>
                    <formEl :label="item.formItem.label" type="checkbox" v-if="item.formItem.type == 'checkbox'"
                        source="dragContentBox" :id="item.id">
                        <el-checkbox label="Option 1" size="large" />
                    </formEl>
                    <formEl :label="item.formItem.label" type="color-picker" v-if="item.formItem.type == 'color-picker'"
                        source="dragContentBox" :id="item.id">
                        <el-color-picker />
                    </formEl>

                    <formEl :label="item.formItem.label" type="date-picker" v-if="item.formItem.type == 'date-picker'"
                        source="dragContentBox" :id="item.id">
                        <el-date-picker type="daterange" unlink-panels range-separator="To" start-placeholder="Start date"
                            end-placeholder="End date" />
                    </formEl>
                    <formEl :label="item.formItem.label" type="radio" :source="'dragContentBox'"
                        v-if="item.formItem.type == 'radio'">
                        <el-radio-group>
                            <el-radio>Option A</el-radio>
                        </el-radio-group>
                    </formEl>
                    <formEl :label="item.formItem.label" type="rate" :source="'dragContentBox'"
                        v-if="item.formItem.type == 'rate'" :id="item.id">
                        <el-rate clearable />
                    </formEl>

                    <formEl :label="item.formItem.label" type="slider" :source="'dragContentBox'"
                        v-if="item.formItem.type == 'slider'" :id="item.id">
                        <el-slider show-input />
                    </formEl>
                    <formEl :label="item.formItem.label" type="switch" :source="'dragContentBox'"
                        v-if="item.formItem.type == 'switch'" :id="item.id">
                        <el-switch />
                    </formEl>
                    <formEl :label="item.formItem.label" type="time-picker" :source="'dragContentBox'"
                        v-if="item.formItem.type == 'time-picker'" :id="item.id">
                        <el-time-picker placeholder="Arbitrary time" />
                    </formEl>
                    <formEl :label="item.formItem.label" type="time-picker" :source="'dragContentBox'"
                        v-if="item.formItem.type == 'transfer'" :id="item.id">
                        <el-transfer filterable filter-placeholder="State Abbreviations" />
                    </formEl>
                    <formEl :label="item.formItem.label" type="upload" :source="'dragContentBox'"
                        v-if="item.formItem.type == 'upload'" :id="item.id">
                        <el-upload class="upload-demo" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            list-type="picture">
                            <el-button type="primary">Click to upload</el-button>
                            <template #tip>
                                <div class="el-upload__tip">
                                    jpg/png files with a size less than 500kb
                                </div>
                            </template>
                        </el-upload>
                    </formEl>
                    <formEl :label="item.formItem.label" type="editor" :source="'dragContentBox'"
                        v-if="item.formItem.type == 'editor'" :id="item.id">
                        <Editor api-key="yfycp4lfoy30yk39nix1traf87r0gicugdxyybxlnzi8sa8l" />
                    </formEl>
                </div>
                <div class="buttons" v-if="item.id === store.currentClickItem.id">
                    <Icon icon="material-symbols:delete-outline" color="red" style="border:solid 1px #ccc;" />
                </div>
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

    .itemBox {
        position: relative;
        margin: 20px auto;
    }


    .buttons {
        position: absolute;
        right: 0;
        top: -14px;

        &>* {
            width: 28px;
            height: 28px;
        }
    }

    .action {
        box-shadow: 0 0 2px 2px rgb(84, 112, 236);
    }
}
</style>