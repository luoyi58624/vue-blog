<template>
    <div class="blog-contents" v-loading="contentLoading">
        <h2>{{blog.title}}</h2>
        <p>作者：{{blog.author}}</p>
        <p>{{blog.content}}</p>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'HelloWorld',
        data() {
            return {
                blog:{
                    title:'',
                    content:'',
                    type:'',
                    author:''
                },
                id:this.$route.params.id,
                contentLoading:false
            }
        },
        created() {
            this.contentLoading=true;
            axios.get('https://blog-b48b5.firebaseio.com/blog/'+this.id+'.json').then((data) =>{
                this.blog=data.data;
                this.contentLoading=false
            })
        }

    }
</script>
<style scoped>
.blog-contents{
    margin: 20px auto;
    width: 600px;
    text-align: center;
    background-color: #409EFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>
