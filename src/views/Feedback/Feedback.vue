<template>
 <div class="feedback">
  <!--导航-->
  <section>
   <van-nav-bar @click-left="onClickLeft">
    <icon name="left-arrow" slot="left"></icon>
    <h3 v-if="title" solt="title">{{title}}</h3>
   </van-nav-bar>
  </section>
  <!--输入框-->
  <section>
   <p>留言板</p>
   <van-field class="field" v-model="message" type="textarea" placeholder="请输入留言" rows="4" autosize></van-field>
  </section>
  <!--确认发送-->
  <section>
   <van-button type="primary" :loading="loading" @click="send" size="small">发送</van-button>
  </section>
  <van-cell title="给作者反馈" is-link></van-cell>
  
 </div>
</template>

<script lang="ts">
 import {Component,Vue} from 'vue-property-decorator';
 import {Field,Button,NavBar,Toast,Cell} from 'vant';
 import {State,Mutation} from 'vuex-class';
 import {SettingState,UserState} from '@/store/state';
 import {feedback} from '@/api/feedback';

@Component({
  components: {
    [Cell.name]: Cell,
    [Field.name]: Field,
    [Button.name]: Button,
    [NavBar.name]: NavBar,
  },
})

export default class Feedback extends Vue{
 @State private user!:UserState;
 private message?:string;
 private title!:string;
 private loading!:boolean;
 public data(){
  return {
    message:'',
    title:this.$route.name,
    loading:false,
  }
 }

 private onClickLeft(){
  this.$router.go(-1)
 }

 private async send(){
  if(this.message){
   const createTime = new Date().valueOf();
   const res= await feedback({
    content:this.message,
    createTime,
    username: this.user.username,
   }).then(res=>res.data)
     .catch((e:string)=>Toast(e))

     if(res.message){
      Toast(res.message);
      this.$router.go(-1);
     }
  }else{
   Toast('请补充完反馈信息')
  }
 }


}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
.van-nav-bar {
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    @include iconSize(1.4rem);
  }
}

.feedback{
 .field{
  border: 1px solid #ccc;
  border-radius: 6px;
  padding:10px;
 }
 .van-button{
  margin-top:10px;
 }
}
</style>

