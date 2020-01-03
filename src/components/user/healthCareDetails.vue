<!--2019-12-21新闻详情---Vanilla-->
<template>
  <div style="margin-top: 15px;">
    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="" prop="title" style="width:700px">
        <h1 style="text-align: center">{{ruleForm.title}}</h1>
      </el-form-item>
      <el-form-item label="" prop="content" style="width:700px">
        <div class="ql-container ql-snow">
          <h2 v-html="ruleForm.content" class="ql-editor"></h2>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    inject:['reload'],
    data () {
      name:"healthCareDetails.vue"
      return {
        ruleForm:{
          id:"",
          title:"",
          content:""
        },
      }
    },
    created: function() {
      this.ruleForm.id = this.$route.params.id;
      if(this.ruleForm.id){
        this.get("healthCare/getOne",(data)=>{
          this.ruleForm=data;
          console.log(this.ruleForm);
        },{id:this.ruleForm.id});
      }
    },

    components: {

    },
    methods:{
      goBack() {
        console.log('go back');
      }

    }
  }

</script>

<style scoped>
  .ql-container.ql-snow {
    border: none;
  }
</style>
