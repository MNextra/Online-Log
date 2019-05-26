<?php
	include("model/Model.php");

	class User extends Model{
		public function login_judge($uemail, $password){
		
			$sql = "select * from users where uemail = ?";

			$statement = $this->pdo->prepare($sql);
			$statement->execute([$uemail]);
			$user = $statement->fetch();

			if($user['uemail']==$uemail && $user['password']==$password)
				return $user;
			else 
				return false;
		}





	}
?>