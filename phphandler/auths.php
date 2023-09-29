<?php

	

	include("config.php");

	

	$authKey = $_GET['auth'];

	

	//change status from 2(awaiting approval) to 1(approve)



	$query = "UPDATE users SET user_status = 1 WHERE user_authCode = '$authKey'";

	

	if(mysqli_query($conn,$query)){

		

		//show success and redirect user back to index page

		echo "Authentication Successful, Please wait a couple of second you will be directed to the login page";

		echo '<script type="text/javascript">

           window.location = "../index.php"

      </script>';

		

	}else{

		echo "Authentication Fail, Please refresh the page";

	}

	

?>