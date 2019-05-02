<template>
    <div id="blog-content-containt">
    <el-input v-model="search" placeholder="请输入搜索内容"></el-input>
    <hr>
    <div id="blog-contents" v-loading="contentLoading">
        <div id="blog-content" v-for="blog in filteredBlog" :key="blog.id">
            <router-link :to="'/blogContent/'+blog.id"><h3 v-color>{{blog.title | to-uppercase}}</h3>
            </router-link>
            <p>{{blog.content | snippet}}</p>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "BlogContents",
        data() {
            return {
                search: '',
                blogs: [],
                contentLoading: false
            }
        },
        computed: {
            filteredBlog: function () {
                return this.blogs.filter(content =>
                    content.title.match(this.search.toLowerCase()))
            }
        },
        created() {
            //http://jsonplaceholder.typicode.com/posts
            this.contentLoading = true;
            this.$http.get('https://blog-b48b5.firebaseio.com/blog.json').then( (data) => {
                return data.json();
            }).then((data) => {
                for (let key in data){
                    data[key].id=key;
                    this.blogs.push(data[key]);
                }
                console.log(this.blogs);
                this.contentLoading=false
            });
        }
    }
</script>

<style scoped>
    a {
        color: #42b983;
    }

    .el-input {
        width: 600px;
    }

    #blog-content {
        /*margin: 10px 20% 0 20%;*/
        width: 40%;
        margin-top: 10px;
        margin-left: 30%;
        text-align: center;
        background-color: #42b983;
    }
</style>