<!--<template>-->
<!--  <el-upload-->
<!--    ref="upload"-->
<!--    action="/worker/fileUpload"-->
<!--    list-type="picture-card"-->
<!--    :on-preview="handlePictureCardPreview"-->
<!--    :on-success="handleAvatarSuccess"-->
<!--    :on-remove="handleRemove"-->
<!--    :file-list="fileList"-->
<!--    :auto-upload="false">-->
<!--    <i class="el-icon-plus avatar-uploader-icon"></i>-->
<!--    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过1M</div>-->
<!--  </el-upload>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        name: "img",-->
<!--      methods:{-->
<!--        // upData(event) {-->
<!--        //   var reader = new FileReader();-->
<!--        //   let fileData = this.$refs.InputFile.files[0];-->
<!--        //   reader.readAsDataURL(fileData);-->
<!--        //   let _this = this;-->
<!--        //   reader.onload = function(e) {-->
<!--        //     //这里的数据可以使本地图片显示到页面-->
<!--        //     _this.addimg = e.srcElement.result;-->
<!--        //   };-->
<!--        //   // 使用formapi打包-->
<!--        //   let formData = new FormData();-->
<!--        //   formData.append('file', fileData);-->
<!--        //   this.axios.post('/worker/fileUpload', formData).then(function(res) {-->
<!--        //     console.log(res);-->
<!--        //     _this.addimgtijiao = res.data.path;-->
<!--        //   });-->
<!--        // }-->
<!--        handleAvatarSuccess(res, file) {		//res即为返回的图片路径-->
<!--          if(res!=null){-->
<!--            this.$refs.videoFrom.validate(function(valid) {-->
<!--              if(valid) {-->
<!--              console.log(res.data)-->
<!--              }-->
<!--            })-->
<!--          }-->
<!--        }-->

<!--      }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
