<script setup lang="ts">
import { useDragStore } from '@/store/drag'
import { storeToRefs } from 'pinia'
import { ref, onBeforeMount } from 'vue'
import formEl from './el.vue'
// import Icon from '@/components/icon.vue'
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
let boxHeight = ref<number>(700)
onBeforeMount(() => {
    boxHeight.value = window.innerHeight - 100
})
</script>

<template>
    <div class="dragTargetBox" @dragover.preventDefault="(e) => { e.preventDefault() }" @drop.preventDefault="drop"
        ref="dragBox" :style="{ height: boxHeight + 'px' }">
        <template v-for="(item, i) of formList">
            <div class="itemBox">
                <div class="box" :class="[item.id === store.currentClickItem.id ? 'action' : '']">
                    <formEl :formItem="item" type="autocomplete" v-if="item.type == 'autocomplete'" source="dragContentBox"
                        :id="item.id">
                        <el-autocomplete clearable class="inline-input w-50" placeholder="Please Input" />
                    </formEl>
                    <formEl :formItem="item" type="input" v-if="item.type == 'input'" source="dragContentBox" :id="item.id">
                        <el-input v-model="item.data.value" :placeholder="item.data.placeholder" />
                    </formEl>
                    <formEl :formItem="item" type="cascader" v-if="item.type == 'cascader'" source="dragContentBox"
                        :id="item.id">
                        <el-cascader />
                    </formEl>
                    <formEl :formItem="item" type="checkbox" v-if="item.type == 'checkbox'" source="dragContentBox"
                        :id="item.id">
                        <el-checkbox label="Option 1" size="large" />
                    </formEl>
                    <formEl :formItem="item" type="color-picker" v-if="item.type == 'color-picker'" source="dragContentBox"
                        :id="item.id">
                        <el-color-picker  v-model="item.data.value" />
                    </formEl>

                    <formEl :formItem="item" type="date-picker" v-if="item.type == 'date-picker'" source="dragContentBox"
                        :id="item.id">
                        <el-date-picker type="daterange" unlink-panels range-separator="To" start-placeholder="Start date"
                            end-placeholder="End date" />
                    </formEl>
                    <formEl :formItem="item" type="radio" :source="'dragContentBox'" v-if="item.type == 'radio'">
                        <el-radio-group>
                            <el-radio>Option A</el-radio>
                        </el-radio-group>
                    </formEl>
                    <formEl :formItem="item" type="rate" :source="'dragContentBox'" v-if="item.type == 'rate'"
                        :id="item.id">
                        <el-rate clearable />
                    </formEl>

                    <formEl :formItem="item" type="slider" :source="'dragContentBox'" v-if="item.type == 'slider'"
                        :id="item.id">
                        <el-slider show-input />
                    </formEl>
                    <formEl :formItem="item" type="switch" :source="'dragContentBox'" v-if="item.type == 'switch'"
                        :id="item.id">
                        <el-switch />
                    </formEl>
                    <formEl :formItem="item" type="time-picker" :source="'dragContentBox'" v-if="item.type == 'time-picker'"
                        :id="item.id">
                        <el-time-picker placeholder="Arbitrary time" />
                    </formEl>
                    <formEl :formItem="item" type="time-picker" :source="'dragContentBox'" v-if="item.type == 'transfer'"
                        :id="item.id">
                        <el-transfer filterable filter-placeholder="State Abbreviations" />
                    </formEl>
                    <formEl :formItem="item" type="upload" :source="'dragContentBox'" v-if="item.type == 'upload'"
                        :id="item.id">
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
                    <formEl :formItem="item" type="editor" :source="'dragContentBox'" v-if="item.type == 'editor'"
                        :id="item.id">
                        <Editor api-key="yfycp4lfoy30yk39nix1traf87r0gicugdxyybxlnzi8sa8l" />
                    </formEl>
                </div>
                <div class="buttons" v-if="item.id === store.currentClickItem.id">
                    <icon icon="ic:outline-copy-all" color="#4b96d6" style="border:solid 1px #ccc;" />
                    <icon @click="del" icon="material-symbols:delete-outline" color="#fc6f6f"
                        style="border:solid 1px #ccc;" />
                </div>
            </div>
        </template>
    </div>
</template>

<style lang="less" scoped>
@import url('@/utils/style.less');

.dragTargetBox {
    width: 100%;
    overflow: auto;
    border: solid 1px #ddd;
    box-shadow: 0 2px 2px 2px rgba(180, 180, 180, .1);
    margin: 0 10px;
    padding: 10px;

    .itemBox {
        position: relative;
        margin: 20px auto;
        cursor: pointer;

        .box {
            &>div {
                padding: 14px 18px;
                display: flex;
                align-items: center;

                &>*:not(.label) {
                    flex: 1;
                }
            }
        }
    }


    .buttons {
        position: absolute;
        right: 0;
        top: -15px;
        display: flex;
        justify-content: space-between;

        &>* {
            width: 28px;
            height: 28px;
            background: rgb(255, 255, 255);
            border: solid 1px #ccc;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 3px;

            &:hover {
                .boxShadow()
            }
        }
    }

    .action {
        box-shadow: 0 0 2px 2px rgba(84, 112, 236, .3);
    }
}</style>