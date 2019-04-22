<template>
  <div class="nav clearfix">
    <ul class="header-left float-left clearfix" ref="headLeft">
      <li class="logo">
        <i class="iconfont iconxuexipingtai"></i>
        <span>数据同步平台</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
// import loginApi from "@/api/login/index";
@Component({})
export default class Nav extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin hover {
  &:hover {
    background: #2c85d9;
    cursor: pointer;
  }
}
@mixin active {
  &.active {
    background: #2c85d9;
    cursor: pointer;
  }
}
.nav {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-image: linear-gradient(-90deg, #4ea9ed 0%, #4b8de3 100%);
  .logout {
    position: absolute;
    right: 0px;
    top: 50px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    background: #4b8de3;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
  .header-left {
    li {
      float: left;
      line-height: 50px;
      font-size: 16px;
      color: #fff;
      @include hover;
      @include active;
    }
    .logo {
      width: 200px;
      .iconfont {
        margin-left: 20px;
        margin-right: 10px;
      }
    }
    .go-home,
    .application,
    .operation,
    .help {
      width: 88px;
      .iconfont {
        margin-left: 14px;
        margin-right: 10px;
      }
    }
    .ab-analysis {
      width: 142px;
      .iconfont {
        margin-left: 14px;
        margin-right: 10px;
      }
    }
  }
}
</style>
