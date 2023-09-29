<?php

	session_start();

	/*change the user status to 2 (awaiting approval from admin)*/
	include("config.php");

	if($_SESSION['userType'] == "ADMIN"){

		//check if there's an id
		if(isset($_POST['userID'])){
			
			$target_user_ID = $_POST['userID'];
			
			$query = "UPDATE users SET user_status=1 WHERE user_id = $target_user_ID";

			if(mysqli_query($conn,$query)){
				
				echo "success";
				
			}

		}else{

			echo "no data";

		}

	}else{

		//lead to index

		header('Location: index.php');

	}

?>