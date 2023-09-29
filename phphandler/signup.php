<?php

	include("config.php");
	//we will use an identifier($_POST['form ID']) to define when to add a staff or top management because this php will be share between both
	// 2 - add staff
	// 1 - add top management (automatically set status to 1), cause no need futher verification

	//check all isset
	if($_POST['first_name'] && $_POST['jantina'] && $_POST['DaftarNoStaff'] && $_POST['DaftarKatalaluan'] && $_POST['DaftarNoTel'] && $_POST['DaftarEmail']){

		$username = $_POST['first_name'];
		$jantina = $_POST['jantina'];
		$staffNo = $_POST['DaftarNoStaff'];
		$phonenum = $_POST['DaftarNoTel'];
		$email = $_POST['DaftarEmail'];

		//use one way password hashing - any change will done by the admins and if user need any change the user need to ask the admins
		$password = md5($_POST['DaftarKatalaluan']); 
		$query;

		if($_POST['addUsetTypeID'] == 1){
			$query = "INSERT INTO users VALUES (null,'$username','$staffNo','$jantina','$password','$phonenum','$email','TPMNGMNT',1,NOW(),NULL,'')";
		}else{
			$query = "INSERT INTO users VALUES (null,'$username','$staffNo','$jantina','$password','$phonenum','$email','STAFF',0,NOW(),NULL,'')";
		}

		if(mysqli_query($conn,$query)){
			echo "success";
		}else{
			echo "fail";
		}
		
	}else{
		echo "Try again";
	}
?>