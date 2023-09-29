<?php



session_start();



include( "config.php" );



//for debug feedback

$massage = " ";



//check for staff availability

if ( isset( $_SESSION[ 'userType' ] ) ) {



    //check if logn is staff

    if ( $_SESSION[ 'userType' ] == 'STAFF' ) {

		

		$zakatType = $_POST['zakatType'];

		$yearList = json_decode($_POST['year']);

		$dataList = json_decode($_POST['data']);

		

		$deleteQuery = "DELETE FROM maiapkdata WHERE data_zakat_type = (SELECT zakat_id FROM zakat WHERE zakat_type='$zakatType')";

		mysqli_query($conn,$deleteQuery);

		

		for ($i = 0; $i < count($yearList); $i++) {

			

			$insertQuery = "INSERT INTO maiapkdata VALUES (null, $dataList[$i], '$yearList[$i]', (SELECT zakat_id FROM zakat WHERE zakat_type='$zakatType'))";

			mysqli_query($conn,$insertQuery);

		} 

		

        //change has been made alter the updateIDs for live update

        $newUpdateIDs = uniqid();

        file_put_contents('updateID.txt', $newUpdateIDs);

                

        echo $massage;







    } else {



        echo "fail: not staff";



    }



} else {



    echo "fail: not log in";



}



?>