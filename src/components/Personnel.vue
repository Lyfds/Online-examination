<template>
  <div>
    <el-container>
      <el-main>
        <el-tabs type="border-card">
          <el-tab-pane label="信息录入">
            <span>姓名</span>
            <el-input
              placeholder="请输入内容"
              v-model="input"
              clearable>
            </el-input>
            <span>性别</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <div class="headImg">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-remove="handleRemove">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
               <i class="el-icon-plus"></i>
               <div slot="tip" class="el-upload__tip">点击上传头像</div>
             </el-upload>
            </div> 
            <br>
            <span>出生年月</span>
            <el-date-picker
              style="width: 260px;"
              v-model="dateValue"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
            <span>籍贯</span>
            <el-cascader
              style="width: 270px;"
              :options="nativePlace"
              v-model="selectedOptions"
              @change="handleChange">
            </el-cascader>
            <br>
            <span>身份证号</span>
            <el-input
              placeholder="请填写证件号码"
              v-model="IdNumber"
              clearable>
            </el-input>
            <span>学历</span>
            <el-select class="edu" v-model="value1" placeholder="请选择">
              <el-option
                v-for="item in education"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            
          </el-tab-pane>
          <el-tab-pane label="人员列表">人员列表</el-tab-pane>
       </el-tabs>
      </el-main>
    
    </el-container>
  </div>
</template>
<script>
import { provinceAndCityData } from 'element-china-area-data'
export default {
  props: {
    msg: String
  },
  data() {
      return {
         imageUrl: '',
         IdNumber: '',
         nativePlace: provinceAndCityData,
         selectedOptions: [],
         dateValue: '',
         input: '',
         options: [{
          value: '1',
          label: '男'
        }, {
          value: '2',
          label: '女'
        }],
        value: '',
        education: [{
          value: '3',
          label: '应届生',
         },
         {
           value: '4',
           label: '大专'
         },
         {
           value: '5',
           label: '本科'
         },
         {
           value: '6',
           label: '硕士'
         },
         {
           value: '7',
           label: '博士'
         },
         {
           value: '8',
           label: '其他'
         }],
         value1: '',
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
       newVideo (file) {
         this.uploadForm.append('video', file)
         return false
     },
     handleChange(val) {
        console.log(val);
      },
     handleChange(value) {
       console.log(value)
     },
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
 
}
</script>
<style scoped>
.el-dropdown {
     margin: 0 auto;
  }
.el-icon-arrow-down {
    font-size: 12px;
  }
.el-select {
  margin: 20px 200px;
}
.box-card {
    margin: 20px 300px 50px 300px;
  }
h2 {
     text-align: center;
     color: #606266;
  }
.el-main {
    font-size: 20px;
  }
.submit {
    float: right;
    margin-bottom: 20px;
    margin-right: 350px;
  }
.el-row {
    margin-left: 300px;
    font-weight: bold;
  }
.el-row span {
    margin-left: 50px;
  }
span {
  margin: 30px;
}
.el-input {
  width: 300px;
  margin-top: 30px;
}
.el-select {
  width: 300px;
  margin: 0;
}
.edu {
  width: 260px;
}
.headImg {
  width: 23%;
  float: right;
  margin-top: 30px;
}
.el-upload__tip {
  color: red;
  margin-left: 20px;
  font-size: 20px;
}
</style>
