<script setup>
import dragBox from './dragBox.vue'
import dragList from './dragList.vue'
import attr from './attr.vue'
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
.dragMain{
    display: flex;

}
</style>