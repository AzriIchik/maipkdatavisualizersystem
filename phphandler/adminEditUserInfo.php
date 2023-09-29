<?php

	

include("config.php");



session_start();



//check if user is ADMIN

if(isset($_SESSION['userType']) == "ADMIN"){

	 

	$query;

	$userID = $_POST['userID'];

	

	//if data input name being changed and is not empty, change it 

	if(isset($_POST['inputUserName'])){

		$newUserName = $_POST['inputUserName'];

		$query = "UPDATE users SET user_name = '$newUserName' WHERE user_ID = '$userID'";

		

		//do the query

		if(mysqli_query($conn,$query)){

			

			echo "success";

			

		}else{

			//send error report

			echo mysqli_error($conn);

		}

	}

	

	//if data input email being changed and is not empty, change it 

	if(isset($_POST['inputUserEmail'])){

		$newEmail = $_POST['inputUserEmail'];

		$query = "UPDATE users SET user_email = '$newEmail' WHERE user_ID = '$userID'";

		

		//do the query

		if(mysqli_query($conn,$query)){

			

			echo "success";

			

		}else{

			//send error report

			echo mysqli_error($conn);

		}

	}

	

	//if data input phone being changed and is not empty, change it 

	if(isset($_POST['inputUserPhoneNo'])){

		$newPhone = $_POST['inputUserPhoneNo'];

		$query = "UPDATE users SET user_phoneNum = '$newPhone' WHERE user_ID = '$userID'";

		

		//do the query

		if(mysqli_query($conn,$query)){

			

			echo "success";

			

		}else{

			//send error report

			echo mysqli_error($conn);

		}

	}

	

}else{

	

	header('Location: ../index.php');

}



?>