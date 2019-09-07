<template>
  <div class="edit container">
	  <Alert v-if="alert" v-bind:message="alert"></Alert>
	  <router-link v-bind:to="'/customer/'+this.$route.params.id" class="btn btn-default">返回</router-link>
    <h1 class="page-header">编辑用户</h1>
	<form v-on:submit="updateCustomer">
		<div class="well">
			<h4>用户信息</h4>
			<div class="form-group">
				<label for="name">姓名</label>
				<input type="text" id="name" class="form-control" placeholder="name"
				 v-model="customer.name"/>
			</div>
			<div class="form-group">
				<label for="phone">电话</label>
				<input type="text" id="phone" class="form-control" placeholder="phone"
				 v-model="customer.phone"/>
			</div>
			<div class="form-group">
				<label for="email">邮箱</label>
				<input type="text" id="email" class="form-control" placeholder="email"
				 v-model="customer.email"/>
			</div>
			<div class="form-group">
				<label for="eduction">学历</label>
				<input type="text" id="eduction" class="form-control" placeholder="eduction"
				 v-model="customer.education"/>
			</div>
			<div class="form-group">
				<label for="graduationschool">毕业学校</label>
				<input type="text" id="name" class="form-control" placeholder="graduationschool"
				 v-model="customer.graduationschool"/>
			</div>
			<div class="form-group">
				<label for="profession">职业</label>
				<input type="text" id="profession" class="form-control" placeholder="profession"
				 v-model="customer.profession"/>
			</div>
			<div class="form-group">
				<label for="profile">个人简介</label>
				<!-- <input type="text" id="profile" class="form-control" placeholder="profile"
				 v-model="customer.profile"/> -->
				 <textarea rows="10" id="profile" class="form-control"
				 v-model="customer.profile"></textarea>
			</div>
			<button type="submit" class="btn btn-primary">确认</button>
		</div>
	</form>
  </div>
</template>

<script>
	import Alert from './Alert'

export default {
  name: 'add',
  components:{
	  Alert
  },
  data () {
	  return{
		  customer:{},
		  alert:''
	  }
  },
  methods:{
	  fetchCustomer(id){
		  this.$http.get("http://localhost:3000/users/"+id)
			.then(function(data){
				// console.log(data);
				this.customer = data.body;
			});
	  },
	  updateCustomer(e){
		  // console.log(12);
		  if(!this.customer.name || !this.customer.phone || !this.customer.email){
			  // alert("请输入对应的信息!");
			  this.alert = "请输入对应的信息";
		  }else{
			  let updateCustomer = {
				  name:this.customer.name,
				  phone:this.customer.phone,
				  email:this.customer.email,
				  education:this.customer.education,
				  graduationschool:this.customer.graduationschool,
				  profession:this.customer.profession,
				  profile:this.customer.profile
			  }
			  this.$http.put("http://localhost:3000/users/"+this.$route.params.id,updateCustomer)
				.then(function(data){
					// console.log(data);
					this.$router.push({path:"/",query:{alert:"用户信息更新成功！"}});
				})
		  }
		  e.preventDefault();
	  }
  },
  created(){
	  this.fetchCustomer(this.$route.params.id);
  }
}
</script>

<style scoped="scoped">

</style>
