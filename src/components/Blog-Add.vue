<template>
    <div class="add-blog">
        <el-container>
            <el-header height="100px">
                <h1>添加博客</h1>
            </el-header>
            <el-main v-if="!submitted" v-loading="submitLoading">
                <el-row>
                    <el-input v-model="blog.title" placeholder="请输入博客标题"></el-input>
                    <br>
                </el-row>
                <el-row>
                    <el-input type="textarea" :rows="5" placeholder="请输入内容"
                              v-model="blog.content"></el-input>
                </el-row>
                <el-row>
                    <el-checkbox-group v-model="blog.type">
                        <el-checkbox v-for="type in types"
                                     :key="type.id"
                                     :label='type'></el-checkbox>
                    </el-checkbox-group>
                </el-row>
                <el-row>
                    <el-select v-model="blog.author" placeholder="请选择作者">
                        <el-option v-for="author in authors"
                                   :key="author.id"
                                   :label="author"
                                   :value="author">
                        </el-option>
                    </el-select>
                </el-row>
                <el-row>
                    <el-button type="primary" @click="submitBlog">提交</el-button>
                </el-row>
            </el-main>
            <el-main v-else>
                <h1>博客已经添加成功</h1>
            </el-main>
            <hr>
            <el-footer>
                <h1>博客数据</h1>
                <p>博客标题：{{blog.title}}</p>
                <p>博客内容：{{blog.content}}</p>
                <p>博客类型：{{blog.type}}</p>
                <p>博客作者：{{blog.author}}</p>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'blog-add',
        data() {
            return {
                blog: {
                    title: '',
                    content: '',
                    type: [],
                    author: ''
                },
                types: ['vue.js', 'angular.js', 'react.js'],
                authors: ['罗懿', '李四', '王五'],
                submitted:false,
                submitLoading: false
            }
        },
        methods: {
            submitBlog() {
                this.submitLoading=true;
                axios.post('https://blog-b48b5.firebaseio.com/blog.json', this.blog).then((data) => {
                    // eslint-disable-next-line no-console
                    console.log(data);
                    this.submitted = true;
                    this.submitLoading=false;
                });
            }
        }
    }
</script>
<style scoped>

    .el-header {
        color: #409EFF;
        text-align: center;
        line-height: 60px;
    }

    .el-row {
        margin-top: 5px;
    }

    .el-input {
        width: 300px;
    }

    .el-textarea {
        width: 500px;
    }
</style>
