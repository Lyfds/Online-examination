<template>
  <div>
    <el-header>
        <div class="left">
          在线培训考核系统
        </div>
        <div class="right">
           <span class="name">张云</span>
           <img src="http://img3.imgtn.bdimg.com/it/u=3240052967,3443336204&fm=26&gp=0.jpg" />
           <span class="date">2019.04.03</span>
        </div>  
      </el-header>
  </div>
</template>

<script>
export default {
  
  
}
</script>
<style scoped>
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
</style>