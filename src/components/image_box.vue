<template>
    <div class="Box">
        <el-card :body-style="{ padding: '0px' }" class="box_card">
            <el-image style="width: 100%; height: 100%" :src="url" fit="scale-down" :preview-src-list=url_list> </el-image>
        </el-card>
    </div>
</template>
<style scoped>
.Box {
    /* display:flex; */
    width: 200px;
    height: 200px;
    /* flex-direction: column; */
}

.box_card {
    width: 100%;
    height: 100%;
    margin: 0 auto;
}

.el-image {
    width: 100%;
    height: 100%;
}
</style>
<script>
import axios from 'axios'
import global from './Global.vue'
export default {
    name: 'image_box',
    props: {
        url: String,
        url_list: Array,
    },
    methods: {

    },
}
</script>