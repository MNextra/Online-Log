<?php
header("Content-Type: text/html;charset=utf-8");
	include('model/User.php');
	class LoginController{
		public function login_page() {
			include('view/login.php');
		}


		public function do_login() {
			$uemail = $_POST['uemail'];	
			$password = $_POST['password'];	
			$userModel = new User();
			$user = $userModel->login_judge($uemail, $password);
			//var_export($user);
			if($user){
				if (!session_id()) session_start();
				$_SESSION['user'] = $user;
				if($user['role']=='Admin'){
					echo "hello";
					header("Location: /index.php?r=Admin/home_page");
				}else{
					header("Location: /index.php?r=Visitor/home_page");
				}
			}else{
				echo '<script>alert("邮箱或密码错误");window.history.go(-1);</script>';
        			exit;
			}
		}
	}
?>