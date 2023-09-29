<?php

	include("config.php");

	//check if admin is currently On
	session_start();

	if($_SESSION['userType'] == "ADMIN"){
		
		//get all the user with status 0 (not approve) and 2(awaiting approval)
		$query = "SELECT user_ID,user_name,user_staffNo,user_email,user_phoneNum,user_status FROM users WHERE user_status = 1 AND user_type = 'TPMNGMNT' ORDER BY user_adddate";

		if(mysqli_query($conn,$query)){

			$result = mysqli_query($conn,$query);
			$result = mysqli_fetch_all($result,1);
			$result = json_encode($result);
			echo $result;
			
		}else{

			echo mysqli_error($conn);

		}

	}else{

		//lead to index
		//header('Location: index.php');
	}

?>