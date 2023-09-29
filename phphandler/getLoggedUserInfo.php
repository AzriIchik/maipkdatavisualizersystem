<?php

	

	include("config.php");

	

	//check if admin is currently On

	session_start();

	

	//check a user is login

	if(isset($_SESSION['userType']) && isset($_SESSION['user_ID'])){

		

		//$_SESSION['user_ID'] = $result['user_ID']; used to keep IDS for current logged in user

		$userID = $_SESSION['user_ID'];

		

		//get user ID and contact info

		$query = "SELECT user_name,user_staffNo,user_email,user_phoneNum FROM users WHERE user_ID = $userID";

		

		if(mysqli_query($conn,$query)){

			

			$result = mysqli_query($conn,$query);

			$result = mysqli_fetch_all($result,1);

			$result = json_encode($result);

			echo $result;

			

		}else{

			//send error report	

		}

		

	}else{

		

		//lead to index

		header('Location: index.php');

	}

?>