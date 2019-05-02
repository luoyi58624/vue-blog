<template>
    <div class="home">
        <h1>个人博客系统</h1>
        <blog-contents/>
    </div>
</template>

<script>

    import BlogContents from '@/components/BlogContents'

    export default {
        name: 'home',
        components: {
            BlogContents
        }
    }
</script>
<style scoped>

</style>
