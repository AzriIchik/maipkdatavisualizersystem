<?php

include("config.php");

session_start();

//for data purposes
define('KB', 1024);
define('MB', 1048576);
const MAX_IMAGE_SIZE = 5*MB;

//check if user is logged in
if(isset($_SESSION['userType'])){

	$query;
	$userID = $_SESSION['user_ID'];

	//if data input name being changed and is not empty, change it 
	if(isset($_POST['usernameinput'])){

		$newUserName = $_POST['usernameinput'];
		$query = "UPDATE users SET user_name = '$newUserName' WHERE user_ID = '$userID'";

		//do the query
		if(!(mysqli_query($conn,$query))){echo mysqli_error($conn);}
		
	}

	//if data input email being changed and is not empty, change it 
	if(isset($_POST['useremailinput'])){

		$newEmail = $_POST['useremailinput'];
		$query = "UPDATE users SET user_email = '$newEmail' WHERE user_ID = '$userID'";

		//do the query
		if(!(mysqli_query($conn,$query))){echo mysqli_error($conn); return;}

	}

	//if data input phone being changed and is not empty, change it 
	if(isset($_POST['userphoneinput'])){

		$newPhone = $_POST['userphoneinput'];
		$query = "UPDATE users SET user_phoneNum = '$newPhone' WHERE user_ID = '$userID'";

		//do the query
		if(!(mysqli_query($conn,$query))){echo mysqli_error($conn); return;}

	}

	//if data input staffNo being changed and is not empty, change it 
	if(isset($_POST['inputUserstaffNo'])){

		$newStaffNo = $_POST['inputUserstaffNo'];
		$query = "UPDATE users SET user_phoneNum = '$newStaffNo' WHERE user_ID = '$userID'";

		//do the query
		if(!(mysqli_query($conn,$query))){echo mysqli_error($conn); return;}

	}

	//check for file if exist
	if (isset($_FILES[ 'userimage' ])) {
		
		$dataFiles = $_FILES[ 'userimage' ];
		
		//check extenstion
		$fileExt = $dataFiles[ 'name' ];
		$fileExt = explode( '.', $fileExt );
		$fileExt = strtolower( end( $fileExt ) );
		
		//allowed file extension
		$allowedExt = array( 'jpg', 'png', 'jpeg' );
		
		if ( in_array( $fileExt, $allowedExt ) ) {

			//check file size
			if ( $dataFiles[ 'size' ] < MAX_IMAGE_SIZE ) {

				//if all cool, time to uppload
				$fileName = uniqid( '', true ) . "." . $fileExt;
				$destination = "../img/upload/" . $fileName;

				if ( move_uploaded_file( $dataFiles[ 'tmp_name' ], $destination ) ) {

					//get current img path - for deletion purposes
					$query = "SELECT user_imgsrc FROM users WHERE user_ID = '$userID'";
					$curImgPath = mysqli_query( $conn, $query );
					$curImgPath = mysqli_fetch_array( $curImgPath, 1 );
					$curImgPath = $curImgPath[ 'user_imgsrc' ];
					$curImgPath = "../" . $curImgPath;
					
					//update database
					$Newdestination = "img/upload/" . $fileName;
					$query = "UPDATE users SET user_imgsrc = '$Newdestination' WHERE user_ID = '$userID'";

					if ( mysqli_query( $conn, $query ) ) {
						
						// if no image don't do unlink
						if ($curImgPath != "../") {
							unlink( $curImgPath );
						}
						
					} else {

						echo "ERROR: " . mysqli_error( $conn ); return;

					}

				} else {

					echo "something went wrong when trying to upload the file, plese upload again"; return;

				}

			} else {

				$size = MAX_IMAGE_SIZE/MB;
				echo "Only file size less than ".$size." MB";
				return;

			}

		} else {

			echo "Only JPEG, PNG, JPEG file format are allowed"; return;

		}

	}
	

	// send user data back for update
	$selectQuery = "SELECT * FROM users WHERE user_ID = '$userID'";
	$result = mysqli_query($conn,$selectQuery);
	$result = mysqli_fetch_array($result,1);
	$result = json_encode($result);
	
	echo $result;

}else{

	header('Location: ../index.php');

}



?>