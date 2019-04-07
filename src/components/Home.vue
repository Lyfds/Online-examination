<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="left">
          在线培训考核系统
        </div>
        <div class="right">
           <span class="name">张云</span>
           <img src="../../public/images/bgImg.jpg" />
           <span class="date">2019.04.03</span>
        </div>  
      </el-header>
     <el-container>
        <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <router-link to="/home/personnel">人员信息</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-setting"></i>
         <router-link to="/home/datum">学习资料</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
         <router-link to="/home/testpaper">题库试卷</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">分析统计</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">系统设置</span>
        </el-menu-item>
      </el-menu>
       <el-main>
          <router-view></router-view>
       </el-main>   
      </el-container>
   </el-container>
  </div>
 </template>
<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  methods: {
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background-color: #eef1f6;
}
.el-header {
    background-color: #20a0ff;
    color: #333;
    line-height: 60px;
    font-weight: bold;
  }
.el-header .left {
    float: left;
    font-size:30px;
  }
.el-header .right {
    width: 240px;
    height: 60px;
    float: right;
    line-height: 60px;
    color: #fff;
  }
.el-header .right img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    vertical-align: top;
    margin-top: 5px;
  }
.el-header .right .name {
    margin-right: 10px;
    font-size:20px;
  }
.el-header .right .date {
    margin-left: 10px;
    font-size:20px;
  }
.el-menu-item {
    min-height: 80px;
    line-height: 80px;
    font-size: 20px;
  }
.router-link-active {
    text-decoration: none;
    color: skyblue;
}
</style>
