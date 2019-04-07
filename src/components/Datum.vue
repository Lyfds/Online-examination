<template>
  <div>
    <el-container>
      <el-main>
        <el-tabs type="border-card">
          <el-tab-pane label="资料录入">
            <span class="category">类别</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <br>
            <span class="uploadFiles">上传文件</span>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">点击上传文件</div>
            </el-upload>
            <el-button type="primary">提交</el-button>
          </el-tab-pane>
          
          <el-tab-pane label="资料列表">
            <div class="merge">
             <span class="choose">筛选</span>
             <el-select class="chooseList" v-model="value1" placeholder="请选择">
              <el-option
                style="width: 300px;"
                v-for="item in datum"
                :key="item.value1"
                :label="item.label"
                :value="item.value1">
              </el-option>
            </el-select>
            <span class="search">搜索</span>
            <el-input
              class="keyword"
              placeholder="请输入关键字"
              v-model="keyword"
              clearable>
            </el-input>
            </div>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="type">类别1</span>
              </div>
              <div class="text">
                 <el-table
                  :data="tableData"
                  style="width: 100%">
                  <el-table-column
                    prop="id"
                    label="Id"
                    width="50">
                  </el-table-column>
                  <el-table-column
                    label="文件名"
                    prop="fileName"
                    width="500"
                   >
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button
                        style="float: left;"
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [],
      keyword: '',
      options: [{
          value: '1',
          label: '判断题'
        }, {
          value: '2',
          label: '单选题'
        }, {
          value: '3',
          label: '多选题'
        }, {
          value: '4',
          label: '实操题'
        }],
        value: '',
        datum: [{
          value1: '1',
          label: '判断题'
        }, {
          value1: '2',
          label: '单选题'
        }, {
          value1: '3',
          label: '多选题'
        }, {
          value1: '4',
          label: '实操题'
        }],
        value1: '',
        tableData: [{
           id: '1',
           fileName: 'xxx.doc'
          }, {
            id: '2',
            fileName: 'xxx.pdf'
          }, {
            id: '3',
            fileName: 'xxx.mp4'
          }, {
            id: '4',
            fileName: 'xxx.doc'
          }]
    }
  },
  methods: {
    handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      },
    handleDelete(index, row) {
        console.log(index, row);
      }
  }
}
</script>
<style scoped>
.category {
  font-size: 20px;
  margin: 0 30px;
}
.el-select {
  width: 90%;
  margin-top: 30px;
}
.uploadFiles {
  display: inline-block;
  font-size: 20px;
  width: 10%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin-top: 30px;
  vertical-align: top;
}
.upload-demo {
   width: 80%;
   display: inline-block;
   margin: 30px 0 50px 20px;
}
.el-upload__tip {
  font-size: 20px;
  color: red;
}
.el-button {
  display: block;
  margin: 0 auto;
}
.choose {
  font-size: 20px;
  margin: 0 30px;
}
.chooseList {
  width: 300px;
}
.search {
  font-size: 20px;
  margin: 0 30px 0 50px;
}
.keyword {
  width: 300px;
}
.merge {
  width: 80%;
  margin: 0 auto;
}
.box-card {
  margin: 30px;
}
.type {
   display: block;
   font-size: 20px;
   text-align: center;
}

</style>
