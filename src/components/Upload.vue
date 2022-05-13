<template>
    <div>
        <div class="box">
            <el-input v-model="upload_by" placeholder="用户名"></el-input>
            <el-upload action="" list-type="picture-card" multiple ref="upload_img" accept=".jpg, .jpeg, .png"
                :http-request="submitUpload">
                <i class="el-icon-plus"></i>
            </el-upload>
        </div>
        <br />
        <el-card class="box-card">
            <div v-for="o in urls" :key="o" class="urls">
                图片链接:<el-link :href="o" target="_blank" type="success">{{ o }}</el-link>
            </div>
        </el-card>
    </div>
</template>
<style scoped>
.box {
    display: flex;
    flex-direction: column;
    width: 170px;
    margin: 0 auto;
    gap: 10px;

}

image_box {
    max-width: 60%;
    margin: 0 auto;
}

.box-card {
    max-width: 60%;
    min-width: 170px;
    width: auto;
    margin: 0 auto;
}
</style>

<script>
import axios from 'axios'
import global from './Global.vue'
export default {
    name: "Upload",
    data() {
        return {
            upload_by: '',
            urls: [],
        }
    },
    methods: {
        submitUpload(File) {
            if (File.file.type.indexOf('image') == -1) {
                this.$message.error('请上传图片类型的文件')
                this.$refs.upload_img.uploadFiles = this.$refs.upload_img.uploadFiles.filter
                    ((item) => { return File.file.name != item.name })
                return
            }
            if (this.upload_by === '') {
                this.$message.error('用户名不能为空')
                this.$refs.upload_img.uploadFiles = this.$refs.upload_img.uploadFiles.filter
                    ((item) => { return File.file.name != item.name })
                return
            }

            const formData = new FormData();
            formData.append('name', File.file.name);
            formData.append('img', File.file);
            formData.append('upload_by', this.upload_by);
            let url_up = global.Site + 'upload/';
            axios({
                method: "POST",
                url: url_up,
                data: formData,
            })
                .then((res) => {
                    if (res.status === 201) {
                        this.$message.success('上传成功!');
                        this.urls.push(res.data.img);
                    }
                })
        },
    }
}
</script>
