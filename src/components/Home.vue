<template>
  <div class="home">
    <el-container>
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
   <el-container>
      <el-menu
      default-active="3"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">人员信息</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-setting"></i>
        <span slot="title">学习资料</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">题库试卷</span>
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
   <el-container>
        <el-main>
           <el-tabs type="border-card">
            <el-tab-pane label="试题录入">
               <el-select v-model="value" placeholder="请选择题型">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-select v-model="value2" placeholder="适用专业">
                <el-option
                  v-for="items in major"
                  :key="items.value2"
                  :label="items.label"
                  :value="items.value2">
                </el-option>
              </el-select>
              <div v-show="value == '1'">
               <div>
                 <h2 class="title">题干</h2>
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                     <el-input
                      placeholder="请输入内容"
                      v-model="stem"
                      clearable>
                    </el-input>
                  </div>
                  <div class="text">
                     <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="添加图片" name="1">
                        <el-upload
                          action="https://jsonplaceholder.typicode.com/posts/"
                          list-type="picture-card"
                          multiple
                          :on-preview="handlePictureCardPreview"
                          :on-remove="handleRemove">
                          <i class="el-icon-plus"></i>                   
                        <div slot="tip" style="fontSize: 16px;" class="el-upload__tip">提示：点击上传图片</div>
                         <el-dialog :visible.sync="dialogVisible">
                          <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                        </el-upload>
                    </el-collapse-item>
                    <el-collapse-item title="添加视频" name="2">
                         <el-upload
                          action="https://jsonplaceholder.typicode.com/posts/"
                          list-type="picture-card"
                          :on-preview="handlePictureCardPreview"
                          :on-remove="handleRemove"
                          multiple
                          accept=".mp4"
                          >
                          <i class="el-icon-plus"></i>
                          <div slot="tip" class="el-upload__tip">实现视频上传，只能传(.mp4)文件</div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                          <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-collapse-item>
                  </el-collapse>   
                  </div>
                </el-card>
              </div>
              <div>
                <el-row>
                   <span>答案：对&nbsp;&nbsp;&nbsp;</span><el-button type="success" icon="el-icon-check" circle></el-button>
                   <span>错&nbsp;&nbsp;&nbsp;</span><el-button type="error" icon="el-icon-error" circle></el-button>
                </el-row>
              </div>
              <div>
                 <h2 class="title">解题说明</h2>
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                     <el-input
                        placeholder="请输入内容"
                        v-model="input10"
                        clearable>
                      </el-input>
                  </div>
                  <div class="text">
                    <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="添加图片" name="3">
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      multiple
                      :on-remove="handleRemove">
                      <i class="el-icon-plus"></i>
                      <div slot="tip" style="fontSize: 14px;" class="el-upload__tip">提示：点击上传图片</div>   
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                    </el-upload>
                    </el-collapse-item>
                    <el-collapse-item title="添加视频" name="4">
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                      multiple
                      accept=".mp4"
                      >
                      <i class="el-icon-plus"></i>
                      <div slot="tip" class="el-upload__tip">实现视频上传，只能传(.mp4)文件</div>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                    </el-collapse-item>
                   </el-collapse>
                  </div>
                </el-card>
              </div>
              <el-button class="submit" type="primary" native-type="submit">提交</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="题库列表">题库列表</el-tab-pane>
            <el-tab-pane label="组卷录入">组卷录入</el-tab-pane>
            <el-tab-pane label="试卷列表">试卷列表</el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
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
   data() {
      return {
        stem: '',
        input10: '',
        activeNames: [],
        upload_url: 'aaa', 
        dialogImageUrl: '',
        dialogVisible: false,
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
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
        major: [{
          value: '选项1',
          label: '互联网营销工程师'
        }, {
          value: '选项2',
          label: 'ICT-网络技术管理'
        }, {
          value: '选项3',
          label: '大数据开发工程师'
        }, {
          value: '选项4',
          label: '网络营销与创业'
        }],
        value2: ''
      } 
    },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
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
.el-dropdown {
     margin: 0 auto;
  }
.el-icon-arrow-down {
    font-size: 12px;
  }
.el-select {
  margin: 20px 300px;
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
</style>
