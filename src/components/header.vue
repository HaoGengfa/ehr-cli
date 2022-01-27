<!--
 * @Author: Hao
 * @Date: 2021-08-16 10:44:36
 * @Last Modified by: Hao
 * @Last Modified time: 2021-08-16 10:44:36
 * @descr 顶部导航

<template>
  <div class="header">
    <el-row style="background-color: #1a70ee; height: 58px" align="middle">
      <el-row class="conter">
        <el-col :span="24">
          <div class="contLeft">
            <div class="leftImg">
              <img src="@/assets/logo.png" />
            </div>
           
          </div>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
-->
<template>
  <div class="top-bg">
    <div class="logo">
      <div class="gt-header-logo" @click="runHomeUrl"></div>
      <span class="gt-header-name">
        <img src="@/assets/gt-pp.png" alt="" />
      </span>
      <el-menu
        router
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        active-text-color='#ffffff'
      >
        <el-menu-item index="/organizationPersonnel/template"
          >模板配置</el-menu-item
        >
        <el-menu-item index="/induction">入职管理</el-menu-item>
      </el-menu>
      <div
        class="gt-header-right"
        @mouseout="changeList(false)"
        @mousemove="changeList(true)"
      >
        <div class="gt-usr-info" @mouseover="changeList(true)">
          <span class="gt-usr-photo"
            ><div
              class="gt-user__img"
              :style="`background-image:url(${userInfo.headAddress})`"
            ></div
          ></span>
          <div
            class="gt-usr-box"
            @mousemove="changeList(true)"
            v-if="userListShow"
          >
            <div class="gt-arrow"></div>
            <div class="gt-user gt-user--img">
              <div
                class="gt-user__img"
                :style="`background-image:url(${userInfo.headAddress})`"
              ></div>
            </div>
            <div class="gt-name">{{ userInfo.fullName }}</div>
            <div class="gt-line"></div>
            <ul class="gt-list">
              <li><a @click="runPage('edit')">修改密码</a></li>
              <li><a @click="runPage('logout')">退出登录</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  redirectMethod
} from "@/utils/redirect"
import { removeToken } from "@/utils/cookie"
import{reactive, ref,onMounted} from "vue"
import { getTableAjax } from '@/api/mock'
const activeIndex = ref("/organizationPersonnel/template")
const userListShow = ref(false)
const userInfo = reactive({});
// logo点击跳转
function runHomeUrl() {
     redirectMethod('logo')
    };
    function changeList(flag) {
      this.userListShow = flag
    };
     // 获取当前登录人信息
  function getloginUserInfoDetail() {
    getTableAjax({id:1})
    .then((res)=>{
      console.log(res,'res')
    })
    };
     // 跳转页面
    function runPage(type) {
      if (type == "edit") {
        redirectMethod('edit-password')
      } else {
        removeToken()
        setTimeout(() => {
           redirectMethod('logout')
        }, 500)
      }
    };
    onMounted(()=>{
      console.log('测试打包')
      getloginUserInfoDetail()
    })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1999;
}

::v-deep.el-menu {
  background-color: transparent;
  color: #ffffff;
}
::v-deep.el-menu-item {
  color: #fff !important;
  font-size: 16px !important;
}
::v-deep.el-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.2) !important;
  color: #fff !important;
}
::v-deep.el-submenu__title:hover {
  background-color: rgba(0, 0, 0, 0.2) !important;
  color: #fff !important;
}
::v-deep.el-menu-item.is-active {
  background-color: rgba(0, 0, 0, 0.2) !important;
  color: #fff !important;
}
::v-deep.el-submenu__title.is-active {
  background-color: rgba(0, 0, 0, 0.2) !important;
  color: #fff !important;
}
.conter {
  width: 100%;
  margin: auto;
  overflow: hidden;

  .contLeft {
    height: 58px;
    display: flex;
    align-items: center;

    .leftImg {
      width: 200px;
      text-align: center;
      img {
        width: 92px;
        height: 30px;
        cursor: pointer;
      }
    }
  }
}
::v-deep .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background: rgb(26, 112, 238);
}
// 新版样式
.top-bg {
  height: 58px;
  position: fixed;
  z-index: 1999;
  width: 100%;
  min-width: 1250px;
  background: #196fee;
  top: 0;

  .logo {
    background-color: #1a70ee;
    // padding: 0 28px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 58px;
    width: 1200px;
    z-index: 1999;
    margin: 0 auto;
    // overflow: hidden;
  }

  .elbuttonTc {
    position: absolute;
    right: 15px;
    top: 10px;
    background-color: transparent;
    color: #ffffff;
  }
}
.gt-header-logo {
  width: 116px;
  height: 41px;
  display: block;
  margin-top: 8px;
  float: left;
  background: url("https://i.gt.cn/main/static/img/logo@2x.d456ad61.png") 0 0
    no-repeat;
  background-size: 116px 41px;
  cursor: pointer;
}
::v-deep .el-menu-demo {
  margin-left: 20px;
  border: 0 !important;
}
::v-deep.el-menu {
  background-color: transparent;
  color: #ffffff;
  float: left;
  margin-left: 66px;
}
::v-deep.el-menu-item {
  color: #fff !important;
  font-size: 16px !important;
  height: 58px;
  line-height: 58px;
}
::v-deep.el-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.2) !important;
  color: #fff !important;
  height: 58px;
  line-height: 58px;
}
::v-deep.el-submenu__title:hover {
  background-color: rgba(0, 0, 0, 0.2) !important;
  color: #fff !important;
}
::v-deep.el-menu-item.is-active {
  background-color: rgba(0, 0, 0, 0.2) !important;
  color: #fff !important;
  font-weight: 600;
  border: 0 !important;
  height: 58px;
  line-height: 58px;
}
::v-deep .el-menu--horizontal > .el-menu-item {
  height: 58px;
  line-height: 58px;
  border-bottom: 0 !important;
  font-weight: 600;
  font-size: 16px;
}
::v-deep.el-submenu__title.is-active {
  background-color: rgba(0, 0, 0, 0.2) !important;
  color: #fff !important;
}
.gt-header-right {
  float: right;
  padding-top: 10px;
  height: 100%;
}
.gt-usr-info {
  display: inline-block;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  position: relative;
  margin-left: 30px;
  position: relative;
}
.gt-header-right .gt-usr-photo {
  width: 40px;
  height: 40px;
  display: inline-block;
  color: rgb(64, 108, 255);
  text-align: center;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background: rgb(255, 255, 255);
}
.gt-header-right .gt-usr-photo:hover + .gt-header-right .gt-usr-box {
  display: block;
}
.gt-usr-box {
  background: red;
  // display: none;
}
.gt-header-right .gt-usr-info::after {
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 0px;
  height: 0px;
  content: "";
  border-width: 3px 3px 0px;
  border-style: solid;
  border-color: rgb(255, 255, 255) rgba(0, 0, 0, 0);
}
.gt-header-right .gt-usr-box .gt-line {
  width: 110px;
  height: 1px;
  margin-top: 12px;
  margin-left: 7px;
  background: rgb(235, 238, 245);
}
.gt-header-right .gt-usr-box {
  width: 126px;
  padding-bottom: 10px;
  padding-top: 15px;
  z-index: 2200;
  right: -4px;
  top: 44px;
  box-sizing: border-box;
  opacity: 1;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(242, 246, 252);
  border-image: initial;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 12px -3px;
  position: absolute;
}
.gt-header-right .gt-usr-box .gt-list li {
  margin-top: 15px;
  font-size: 12px;
  font-weight: 400;
  color: rgb(95, 98, 102);
  cursor: not-allowed;
  margin-top: 8px;
  cursor: pointer;
}
.gt-header-right .gt-usr-box .gt-list li {
  margin-top: 15px;
  font-size: 12px;
  font-weight: 400;
  color: #5f6266;
  cursor: not-allowed;
}
.gt-user__img {
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #fff;
  background-position: 50%;
  width: 100%;
  height: 100%;
}
.gt-header-right .gt-usr-box .gt-user {
  width: 40px;
  height: 40px;
  border: 1px solid #406cff;
  border-radius: 50%;
  display: inline-block;
  overflow: hidden;
  position: relative;
  border-color: #f73e3f;
}
.gt-header-right .gt-usr-box .gt-name {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 14px;
  margin-top: 4px;
}
.gt-header-name {
  float: left;
  margin: 16px 0 0 8px;
  width: 80px;
  height: 30px;
  line-height: 26px;
  border-left: 1px solid #fff;
  padding-left: 6px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  padding-left: 6px;
  img {
    width: 70px;
    height: 25px;
  }
}
.projectNm {
  color: #fff;
  font-family: "STKaiti";
  font-size: 18px;
}
</style>