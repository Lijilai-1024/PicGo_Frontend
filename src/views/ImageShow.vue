<template>
    <div class="Show">
        <h1>图片上传</h1>
        <h3>请输入上传时的用户名</h3>
        <div class="search">
            <el-input v-model="userid" placeholder="请输入用户名"></el-input>
            <el-button type="success" @click="find">查询</el-button>
        </div>
        <el-container class="image_show">
            <el-main>
                <a v-for="img in img_list" :key="img.id" class="image">
                    <el-button type="danger" icon="el-icon-delete" circle @click="del_image(img.id)"></el-button>
                    <image_box :url="img.url" :url_list="tmp_list"></image_box>
                </a>
            </el-main>
        </el-container>

    </div>
</template>
<style scoped>
h1{
    font-family: '微软雅黑';
    font-size:48px;
}
.search{
    display:flex;
    flex-direction:row;
    width:50%;
    margin:0 auto;

}
.el-main{
    display:flex;
    flex-direction: row;
    gap:20px;
    flex-wrap: wrap;
}
.image{
    width:200px;
    height:240px;
}

</style>
<script>
import image_box from '@/components/image_box.vue'
import axios from 'axios'
import global from '../components/Global.vue'
export default {
    name: 'ImageShow',
    components: {
        image_box
    },
    data(){
        return{
            img_list:[],
            tmp_list:[],
            userid:'',
            tot:0,
        }
    },
    methods:{
        find(){
            this.img_list=[];
            this.tmp_list=[];
            if(this.userid === '') 
            {
                this.$message.error('请输入用户名');
                return;
            }
            let url_show = global.Site + 'show/';
            axios({
                method:"POST",
                url:url_show,
                data:{
                    userid:this.userid
                }
            }).then((res) => {
                let obj = res.data.data;
                
                let lst = 0;
                for (let index in obj){
                    let num = Number(index);
                    
                    if(num % 2 === 0) lst = Number(obj[index]);
                    else 
                    {
                        let tmp={id:'',url:''};
                        tmp.id = lst;
                        tmp.url = obj[index];
                        this.img_list.push(tmp);
                        this.tmp_list.push(obj[index]);
                    }
                    
                }
            })
            
        },
        del_image(del_id){
            let url_del = global.Site + 'upload/' + del_id + '/';
            console.log(url_del)
            axios({
                method:"DELETE",
                url:url_del,
            })
            this.$message('删除成功');
            this.find()
        }
    }
}
</script>