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
            <br>
            <span>用户名：</span>
              <el-input
                placeholder="请输入用户名"
                v-model="username"
                clearable>
              </el-input>
              <span>密码：</span>
              <el-input 
                style="width: 240px;"
                placeholder="请输入密码" 
                v-model="password" 
                show-password
              >
              </el-input>

              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>教育情况</span>
                  <div class="add-delete">
                   <el-button type="success" round>添加</el-button>
                   <el-button type="danger" round>删除</el-button>
                  </div>  
                </div>
                <div class="text">
                  <el-input
                    type="textarea"
                    autosize
                    placeholder="请输入内容"
                    v-model="textarea">
                  </el-input>
                </div>
              </el-card>

              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>奖惩情况</span>
                  <div class="add-delete">
                   <el-button type="success" round>添加</el-button>
                   <el-button type="danger" round>删除</el-button>
                  </div>  
                </div>
                <div class="text">
                  <el-input
                    type="textarea"
                    autosize
                    placeholder="请输入内容"
                    v-model="textarea2">
                  </el-input>
                </div>
              </el-card>

              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>任职情况</span>
                  <div class="add-delete">
                   <el-button type="success" round>添加</el-button>
                   <el-button type="danger" round>删除</el-button>
                  </div>  
                </div>
                <div class="text">
                  <el-input
                    type="textarea"
                    autosize
                    placeholder="请输入内容"
                    v-model="textarea3">
                  </el-input>
                  <div class="submit-reset">
                    <el-button type="primary" round>提交</el-button>
                   <el-button type="info" round>重置</el-button>
                  </div> 
                </div>
              </el-card>
          </el-tab-pane>
          <el-tab-pane label="人员列表">
           <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
               prop="id"
               label="序号"
               width="50">
           </el-table-column>
            <el-table-column
              label="日期"
              width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="department"
              label="部门"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="specialty"
              label="专业"
              width="250"
            >
            </el-table-column>
            <el-table-column
              prop="job"
              label="职务"
              width="200"
            >
            </el-table-column>
            <el-table-column
              prop="erecord"
              label="电子档案"
            >
            </el-table-column>
            <el-table-column
              prop="operation"
              label="操作"
            >
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
          </el-table>

          </el-tab-pane>
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
         textarea: '',
         textarea2: '',
         textarea3: '',
         username: '',
         password: '',
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
         tableData: [{
          id: '1',
          date: '2016-05-03',
          name: '王小虎',
          department: '学生会',
          specialty: '计算机应用技术',
          job: '学生会会长',
          erecord: '/'
        }, {
          id: '2',
          date: '2016-05-02',
          name: '王小虎',
          department: '学生会',
          specialty: '计算机应用技术',
          job: '学生会会长',
          erecord: '/'
        }, {
          id: '3',
          date: '2016-05-04',
          name: '王小虎',
          department: '学生会',
          specialty: '计算机应用技术',
          job: '学生会会长',
          erecord: '/'
        }, {
          id: '4',
          date: '2016-05-01',
          name: '王小虎',
          department: '学生会',
          specialty: '计算机应用技术',
          job: '学生会会长',
          erecord: '/'
        }, {
          id: '5',
          date: '2016-05-08',
          name: '王小虎',
          department: '学生会',
          specialty: '计算机应用技术',
          job: '学生会会长',
          erecord: '/'
        }, {
          id: '6',
          date: '2016-05-06',
          name: '王小虎',
          department: '学生会',
          specialty: '计算机应用技术',
          job: '学生会会长',
          erecord: '/'
        }, {
          id: '7',
          date: '2016-05-07',
          name: '王小虎',
          department: '学生会',
          specialty: '计算机应用技术',
          job: '学生会会长',
          erecord: '/'
        }],
        multipleSelection: []

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
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
.box-card {
  width: 95%;
  margin: 30px 0px 30px 30px;
}
.add-delete {
  float: right;
  width: 20%;
}
.submit-reset {
  float: right;
  margin: 30px 60px 30px 0;
}
/* .el-button {
  margin-left: 30px;
} */
</style>
