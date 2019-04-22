<template>
  <div class="nav-menu">
    <template>
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-custom"
        background-color="#3c4652"
        :default-openeds="defaultOpens"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>我的任务</span>
          </template>
          <el-menu-item index="1-1" @click="goto('/mission')">boss</el-menu-item>
          <el-menu-item index="1-2">manage</el-menu-item>
          <el-menu-item index="1-3">finance</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">数据源</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">账户信息</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">权限管理</span>
        </el-menu-item>
      </el-menu>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class NavMenu extends Vue {
  private defaultOpens: string[] = ["1"];
  private goto(path: string): void {
    this.$router.push({ path: `${path}` });
  }
}
</script>

<style lang="scss" scoped>
.nav-menu {
  position: absolute;
  z-index: 9;
  padding-top: 50px;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background: #3c4652;
  box-shadow: 2px 0 8px 0 rgba(0, 0, 0, 0.15);
  overflow: auto;
}
</style>
