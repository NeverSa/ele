<template>
  <div class="login-waiper">
      <div class="login-form">
        <div class="item">
          <label><i class="iconfont icon-weibiaoti1" style="color: #7bae9a"></i></label>
          <input type="text" placeholder="请输入账号或者手机号" placeholder-align="center" v-model="Vusername"/>
        </div>
        <div class="item" style="margin-bottom: 50px">
          <label><i class="iconfont icon-weibiaoti1" style="color: #7bae9a"></i></label>
          <input type="password" placeholder="请输入密码"  placeholder-align="center" v-model="Vpassword"/>
        </div>
       <div class="bindingdiv"><a class="loginbuttom" @click="binding">绑定</a></div>
    </div>

  </div>

</template>

<script>

  export default {
    name: 'hello',
    components: {

    },
    data () {
      return {
        Vusername:"",
        Vpassword:""
      }
    },
    methods: {
      binding(){
        if(this.Vusername==""){
          this.msg("账户不能为空")
        }else if(this.Vpassword==""){
          this.msg("密码不能为空")
        }
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scope>

</style>
