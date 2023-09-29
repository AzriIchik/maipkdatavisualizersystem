<?php

	

include("config.php");



session_start();



//check if user is logged in

if(isset($_SESSION['userType'])){

	

	//check if password given is correct

	//if correct change password echo 1 indicate matching password

	//else echo 0 to indicate false password 

	

	//get the cur password first

	$userID = $_SESSION['user_ID'];

	

	$query = "SELECT user_name,user_password FROM users WHERE user_ID = $userID";

	$result = mysqli_query($conn,$query);

	$result = mysqli_fetch_array($result,1);

	

	$curUserPassword = $_POST['oldpassword'];

	$curUserPassword = md5($curUserPassword);

	

	if($curUserPassword == $result['user_password']){

		

		$newUserPassword = md5($_POST['newpassword']);

		$query = "UPDATE users SET user_password = '$newUserPassword' WHERE user_ID = $userID";

		

		if(mysqli_query($conn,$query)){

			echo "1";

		}else{

			echo mysqli_error($conn);

		}

		

	}else{

		

		echo "0";

		

	}

	

}else{

	

}



?>