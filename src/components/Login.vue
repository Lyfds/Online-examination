<template>
  <div>
     <el-container>
      <el-header>
         <div class="left">
          在线培训考核系统
        </div>
      </el-header>
      <el-main>
         <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title">在线培训考核系统</span>
          </div>
          <div class="text">
             <span>用户名：</span>
              <el-input
                placeholder="请输入用户名"
                v-model="username"
                clearable>
              </el-input>
              <br>
              <span>密&nbsp;&nbsp;&nbsp;码：</span>
              <el-input 
                placeholder="请输入密码" 
                v-model="password" 
                show-password
              >
              </el-input>
          </div>
          <el-button type="primary" @click="login">登陆</el-button>
        </el-card>   
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
       login() {
      //     this.axios.post('http://192.168.10.102:8080/haohaihengda/user/login.do', {
      //     username: this.username,
      //     password: this.password
      //   })
      //   .then(function (res) {
          // if(res.data.status == '200') {
            this.$router.push({
              path: '/home'
            })
          // }
        //   return res
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
      //  }
       }
    } 
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
  .el-input {
    margin-top: 40px;
    width: 300px;

  }
  .el-card {
    width: 500px;
    height: 400px;
    float: right;
    margin: 150px 300px 200px 0;
  }
  .el-main {
    background: url('../../public/images/bgImg.jpg') no-repeat 100% 100%; 
    padding: 0;
    height: 900px;
  }
  .el-button {
    margin-top: 50px;
    margin-left: 280px;
  }
  .title {
    font-size: 20px;
    margin-left: 140px;
    color: #666;
    font-weight: bold;
  }
  span {
    font-size: 20px;
    padding: 10px;
    color: #555;
  }
</style>