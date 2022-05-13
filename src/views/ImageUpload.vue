<template>
  <div class="">
    <h1>图片上传</h1>
    <h3>上传前请输入用户名</h3>
    <Upload/>
  </div>
</template>
<style scoped>
.ImageUpload{
  height:100%;
  width:100%;
  background:url('../assets/bg1.png');
  background-size:cover;
  position:fixed;
}
h1{
    font-family: '微软雅黑';
    font-size:48px;
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