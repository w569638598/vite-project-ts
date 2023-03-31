<script setup lang="ts">
import el from './el.vue'
</script>

<template>
    <div>
        <el :label="'输入框'" type="autocomplete" :source="'list'">
            <el-autocomplete clearable class="inline-input w-50" placeholder="Please Input" />
        </el>
        <el :label="'级联选择器'" type="cascader" :source="'list'">
            <el-cascader />
        </el>
        <el :label="'多选框'" type="checkbox" :source="'list'">
            <el-checkbox label="Option 1" size="large" />
        </el>
        <el :label="'取色器'" type="color-picker" :source="'list'">
            <el-color-picker />
        </el>
    </div>
</template>

<style></style>