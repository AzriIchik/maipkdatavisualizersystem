<?php

include('config.php');

//	check if a data has been receive from the client
if ( isset($_POST['loginEmail']) && isset($_POST['loginPassword']) ) {

	//	check if 1 row exist
	$userEmail = $_POST[ 'loginEmail' ];
	$userPassword = $_POST[ 'loginPassword' ];
	$userPassword = md5( $userPassword );

	$selectQuery = "SELECT * FROM users WHERE user_email = '$userEmail' AND user_password = '$userPassword' AND user_status = 1";

	if ( $result = mysqli_query($conn, $selectQuery) ) {

		$rowcount = mysqli_num_rows( $result );
		
		//	if one, then a user exist
		if ( $rowcount == 1 ) {

			//	get user type  type
			$result = mysqli_fetch_array( $result, 1 );
			session_start();

			//	check user type
			switch( $result['user_type'] ) {
				
				case 'ADMIN': $_SESSION[ 'userType' ] = 'ADMIN'; break;
				case 'STAFF': $_SESSION[ 'userType' ] = 'STAFF'; break;
				case 'TPMNGMNT': $_SESSION[ 'userType' ] = 'MANAGER'; break;
					
			}

			/*	This IDs will be used to reference user that want to change his own profile	*/
			$_SESSION[ 'user_ID' ] = $result[ 'user_ID' ];

			echo json_encode( $result );

		} else {

			echo "no user";

		}

	} else {
		
		echo mysqli_error( $conn );
	}



} else {
	
	echo "no credentials are sent from the client side";

}




?>