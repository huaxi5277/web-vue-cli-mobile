<template>
  	<div class="login-wrap">
		<!-- form 表达做登录 -->
		<form>
			<div class="login-username place ">
				<label class="user-style" for="username">
					用户名 :
				</label>
				<input type="text" placeholder="请输入用户名" id="username" v-model="name" />
			</div>
			<div class="login-username place ">
				<label class="user-style" for="email">
					邮 箱 :
				</label>
				<input type="text" placeholder="请输入邮箱" id="email" v-model="email" />
			</div>
			<div class="login-password place">
				<label class="user-style" for="password">
					密 码 :
				</label>
				<input type="password" placeholder="请输入密码" id="password" v-model="password">
			</div>
			<div class="login-to-register place register  " @click="loginToRegister">
				已有账号立即登录
			</div>
			<div class="seat"></div>
			<button form-type="submit" class="submit" @click="loginSubmit">Submit</button>
		</form>

	</div>
</template>

<script>
export default { 
    name : 'register',
    data(){
       return {
            name : "",
            email : "",
           password : ''
       }
    },
    methods :{
        loginToRegister(){},
        loginSubmit(){}
    },


}
</script>

<style lang="scss" scoped>
	.login-wrap {
		width: 92%;
		padding: 0 4%;
		height: 100%;
		padding-top: 1rem;
		position: relative;
		overflow-y: hidden;
        font-size: 0.4rem ;

		.place {
			border-bottom: 1px solid  #23239e;
			margin-bottom: 0.3rem;

			input {
				width: 100%;
				height: 0.3rem;
				display: flex;
				padding: 0.2rem 0;
			}
		}

		.user-style {
			color: #23239e;
            
		}

		.register.place {
			border-bottom: none;
			float: right;
			font-size: 0.28rem;
			color: #99d5ff;
		}

		.seat {
			width: 92%;
			padding: 0 4%;
			height: 0.7rem;
		}

		.submit {
			width: 90%;
			color: #0023cc;
		}

	}
</style>