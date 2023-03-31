<script setup lang="ts">
import { reactive, ref, onMounted, nextTick } from 'vue'
import logo from '../assets/logo.jpeg'
import { FormRules, FormInstance } from 'element-plus'
import { useRouter } from "vue-router";
const router = useRouter()
fetch("/src/mock/table.json").then(response => response.json()).then(data => { });
let submitBtn = ref()


let form = reactive({
  account: '',
  password: '',
})
const ruleFormRef = ref<FormInstance>()
let rules = reactive<FormRules>({
  account: [
    {
      required: true,
      message: '账号不能为空',
      trigger: 'blur'
    },
    {
      min: 6,
      message: '账号长度最短6位',
      trigger: 'blur'
    }
  ]
})
async function submitForm(formEl: FormInstance | undefined, e?: Event) {

  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      router.push({ path: '/' })
    } else {
    }
  })
}

async function resetForm(ruleFormRef) {

}

</script>

<template>
  <img :src="logo" class="logo">
  <el-form :model="form" label-width="120px" ref="ruleFormRef" :rules="rules"
    @keyup.enter="submitForm(ruleFormRef, $event)">
    <el-form-item label="账号" prop="account">
      <el-input v-model="form.account" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password" type="password" />
    </el-form-item>
    <el-form-item>
      <el-button ref="submitBtn" type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="less" scoped>
.logo {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  overflow: hidden;
  margin: 30px auto;
  display: block;
}
</style>