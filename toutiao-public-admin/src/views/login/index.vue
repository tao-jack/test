<template>
  <div class="login-container">
    <!--
      el-form表单组件都必须用el-form-item组件 包裹
     -->
    <div class="login-head" />
    <el-form ref="form" :model="user" class="login-form">
      <el-form-item>
        <el-input
          v-model="user.mobile"
          placeholder="请输入手机号"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="user.code"
          placeholder="请输入验证码"
        />
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked">
          我已阅读并同意用户协议和隐私条款</el-checkbox>
        <el-button type="primary" class="login-btn" @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  name: 'LoginIndex',
  data() {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      },
      checked: true // 是否同意隐私协议
    }
  },
  methods: {
    onLogin() {
      // console.log('submit!');
      // 获取表单数据
      const user = this.user;
      // 表单验证
      request({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        // data 用来设置post请求体
        data: user
      }).then(res => {
        console.log(res)
      }) // 验证通过 提交登录
      // 处理后端响应结果
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('./login_bg.jpg') no-repeat;
  background-size: cover;
    .login-head{
      height: 57px;
      width: 300px;
    background: url('./logo_index.jpg') no-repeat;
    margin-bottom: 30px;
  }
  .login-form{
    background-color: #FFF ;
    padding: 50px;
    min-width: 300px;
    .login-btn{
      width: 100%;
  }
  }
}
</style>

