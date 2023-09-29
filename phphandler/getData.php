<?php

    session_start();
    include("config.php");
    
    //check for admin 
    if(isset($_SESSION['userType'])){

        $querySelect = 'SELECT maiapkdata.data_actualValue, maiapkdata.data_year, zakat.zakat_type FROM `maiapkdata` JOIN zakat ON maiapkdata.data_zakat_type = zakat.zakat_id ORDER BY maiapkdata.data_zakat_type, maiapkdata.data_year';

        //get data 
        if($result = mysqli_query($conn,$querySelect)){

            //send array
            $result = mysqli_fetch_all($result,1);
            $result = json_encode($result);
            echo $result;

        }else{

            echo "1error: ".mysqli_error($conn);

        }

    }else{

        //redirect to index

    }

?>