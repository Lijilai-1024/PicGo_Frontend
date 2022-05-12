<template>
  <div class="ImageUpload">
    <h1>图片上传</h1>
    <h4>上传前请输入用户名</h4>
    <Upload/>
  </div>
</template>
<style>
h1{
    font-family: '微软雅黑';
}
</style>
<script>
import Upload from '@/components/Upload.vue'

export default {
  name: 'ImageUpload',
  components: {
    Upload
  }
}
</script>
