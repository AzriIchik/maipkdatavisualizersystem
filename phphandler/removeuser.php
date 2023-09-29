<?php

	include("config.php");

	//check if admin is currently On
	session_start();

	if($_SESSION['userType'] == "ADMIN"){

		//check if there's an id
		if(isset($_POST['userID'])){
			
			$userID = $_POST['userID'];
			
			//get current img path for deletion
			$query = "SELECT user_imgsrc FROM users WHERE user_ID = '$userID'";
			$curImgPath = mysqli_query( $conn, $query );
			$curImgPath = mysqli_fetch_array( $curImgPath, 1 );
			$curImgPath = $curImgPath[ 'user_imgsrc' ];
			$curImgPath = "../" . $curImgPath;
			unlink( $curImgPath );
			
			//delete all user data
			$target_user_ID = $_POST['userID'];
			$query = "DELETE FROM users WHERE user_id = $target_user_ID";
			
			if(mysqli_query($conn,$query)){
				
				echo "success";

			}else{

				echo mysqli_error($conn);

			}

		}else{

			echo "no data";

		}
	

	}else{

		//lead to index
		header('Location: index.php');

	}



?>