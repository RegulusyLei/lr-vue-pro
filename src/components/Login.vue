<template>
  <div class="login-style">
    <p>登录</p>
    <div>用户名：<input type="text" v-model="loginData.name"></div>
    <div>密码：<input type="password" v-model="loginData.password"></div>
    <button @click="login">登录</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Login',
    data() {
      return {
        loginData: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      login () {
        this.$utils.fetchByPost.call(
          this,
          `${this.$api.URL}${this.$api.LOGIN}`,
          this.loginData,
          res => {
            console.log(res)
          }
        )
      }
    }
  }
</script>

<style>

</style>
