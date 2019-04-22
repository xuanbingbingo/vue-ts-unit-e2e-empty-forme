<!-- 登录页 -->
<template>
  <div class="login">
    <div class="logo">数据同步平台</div>
    <div class="add-wrapper" @keyup.enter.stop="submitForm('ruleForm')">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName" class="el-custom-input-width">
          <el-input v-model="ruleForm.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" class="el-custom-user el-custom-input-width">
          <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item class="clearfix">
          <el-button type="primary" ref="login" @click="submitForm('ruleForm')">登录</el-button>
          <span
            v-if="loginFail"
            style="color:#f56c6c;display:inline-block;height:20px;line-height:20px;margin-left:140px;"
          >用户名或密码错误,请重试!</span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
declare let $refs: {
  validate: HTMLFormElement;
};
import { Component, Prop, Watch } from "vue-property-decorator";
import loginApi from "@/api/login/index";
@Component({})
export default class ApplicationAdd extends Vue {
  private loginFail = false;
  private applicationId: string = "";
  private tags: any[] = [];
  private ruleForm: any = {
    userName: "",
    password: ""
  };
  private rules: any = {
    userName: [{ required: true, message: "请输入用户名", trigger: "change" }],
    password: [{ required: true, message: "请输入密码", trigger: "change" }]
  };
  private login() {
    this.$router.push({ path: "/mission" });
    // loginApi.login(this.ruleForm).then((r:any)=>{
    //   // if(r.success){

    //   // }
    // })
  }
  private submitForm(formName: string) {
    const el: any = this.$refs[formName];
    const thisTransfer: any = this;
    el.validate((valid: boolean) => {
      if (valid) {
        // 执登录的操作
        // this.makeForm();
        this.login();
        return true;
      } else {
        return false;
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login {
  background: url("../../assets/images/bg_login.png") no-repeat;
  background-size: 100% 320px;
  background-position: 0 0;
  .logo {
    width: 379px;
    padding-top: 137px;
    position: relative;
    left: 50px;
    margin: 0 auto;
    font-family: QingYuan;
    font-size: 46px;
    color: #ffffff;
    letter-spacing: 1.28px;
  }
  .add-wrapper {
    margin: 210px auto;
    width: 480px;
  }
}
</style>
