<?php

	

include("config.php");



session_start();



//check if user is logged in

if(isset($_SESSION['userType'])){

	

	

	//set all password first

	$userID = $_POST['userID'];

	$newPassword = $_POST['newPassword'];

	$newPassword = md5($newPassword);

	

	$query = "UPDATE users SET user_password = '$newPassword' WHERE user_ID = $userID";

	

	if(mysqli_query($conn,$query)){

		

		echo "Success";

		

	}else{

		echo mysqli_error($conn);

	}

	

	

}else{

	

	header('Location: ../index.php');

	

}



?>