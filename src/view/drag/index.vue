<script setup lang="ts">
import dragBox from './compontens/dragBox.vue'
import dragList from './compontens/dragList.vue'
import attr from './compontens/attr.vue'
</script>

<template>
    <div class="dragMain">
        <dragList>

        </dragList>
        <dragBox>

        </dragBox>
        <attr></attr>
    </div>
</template>

<style lang="less" scoped>
.dragMain {
    display: flex;

}
</style>