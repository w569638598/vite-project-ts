<script setup lang="ts">
import formEl from './el.vue'
</script>

<template>
    <div>
        <formEl :label="'输入框'" type="autocomplete" :source="'list'">
            <el-icon>
                <Edit></Edit>
            </el-icon>
        </formEl>
        <formEl :label="'级联选择器'" type="cascader" :source="'list'">
            <el-icon><Connection /></el-icon>
        </formEl>
        <formEl :label="'多选框'" type="checkbox" :source="'list'">
            <el-icon><Finished /></el-icon>
        </formEl>
        <formEl :label="'取色器'" type="color-picker" :source="'list'">
        </formEl>
        <formEl :label="'时间区间选择器'" type="date-picker" :source="'list'">
            
        </formEl>
        <formEl :label="'单选框'" type="radio" :source="'list'">
            
        </formEl>
        <formEl :label="'评分'" type="rate" :source="'list'">
            
        </formEl>
        <formEl :label="'滑块'" type="slider" :source="'list'">
            
        </formEl>
        <formEl :label="'开关'" type="switch" :source="'list'">
            
        </formEl>

        <formEl :label="'时间选择器'" type="time-picker" :source="'list'">
            
        </formEl>
        <formEl :label="'穿梭框'" type="transfer" :source="'list'">
            
        </formEl>
        <formEl :label="'文件上传'" type="upload" :source="'list'">
        </formEl>
        <formEl :label="'富文本'" type="editor" :source="'list'">
        </formEl>

    </div>
</template>

<style></style>