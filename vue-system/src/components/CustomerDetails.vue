<template>
  <div class="details container">
	  <router-link to="/" class="btn btn-default">返回</router-link>
	  <h1 class="page-header">
	  {{customers.name}}
		<span class="pull-right">
			<router-link class="btn btn-primary" :to="'/edit/'+customers.id">编辑</router-link>
			<button class="btn btn-danger" v-on:click="deleteCustomer(customers.id)">删除</button>
		</span>
	  </h1>
	  <ul class="list-group">
	  	<li class="list-group-item">
			<span class="glyphicon glyphicon-asterisk">
			{{customers.phone}}
			</span>
		</li>
	  	<li class="list-group-item">
			<span class="glyphicon glyphicon-plus">
			{{customers.email}}
			</span>
		</li>
	  </ul>
	  <ul class="list-group">
	  	<li class="list-group-item">
			<span class="glyphicon glyphicon-asterisk">
			{{customers.education}}
			</span>
		</li>
	  	<li class="list-group-item">
			<span class="glyphicon glyphicon-plus">
			{{customers.graduationschool}}
			</span>
		</li>
	  </ul>
	  <ul class="list-group">
	  	<li class="list-group-item">
			<span class="glyphicon glyphicon-asterisk">
			{{customers.profession}}
			</span>
		</li>
	  	<li class="list-group-item">
			<span class="glyphicon glyphicon-plus">
			{{customers.profile}}
			</span>
		</li>
	  </ul>
  </div>
</template>

<script>

export default {
  name: 'customerdetails',
  data () {
	  return{
		  customers:''
	  }
  },
  methods:{
	  fetchCustomers:function(id){
	  	this.$http.get("http://localhost:3000/users/"+id)
	  		.then(function(data){
	  		// console.log(data);
	  		this.customers = data.body;
	  	})
	  },
	  deleteCustomer(id){
		  // console.log(id);
		  this.$http.delete("http://localhost:3000/users/"+id)
			.then(function(data){
				this.$router.push({path:"/",query:{alert:"用户删除成功!"}});
			});
	  }
  },
  created(){
  	this.fetchCustomers(this.$route.params.id);
  }
}
</script>

<style scoped="scoped">

</style>
