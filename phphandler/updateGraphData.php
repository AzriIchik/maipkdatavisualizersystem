<?php



session_start();



include( "config.php" );



//for debug feedback

$massage = " ";



//check for staff availability

if ( isset( $_SESSION[ 'userType' ] ) ) {



    //check if logn is staff

    if ( $_SESSION[ 'userType' ] == 'STAFF' ) {



        //check for csv availability 

        if ( isset( $_FILES[ 'csvfile' ] ) ) {



            //check for file extention                   

            $ext = $_FILES[ 'csvfile' ][ 'name' ];

            $ext = explode( ".", $ext );

            $ext = end( $ext );



            if ( $ext == 'csv' ) {

                

                //set the csv file for operation

                $csvUpdate = fopen( $_FILES[ 'csvfile' ][ 'tmp_name' ], 'r' );

                

                //set zakat type

                $jenisZakat = $_POST[ 'jenisZakat' ];

                $jenisZakat = strtoupper($jenisZakat);

                

                //skip the first row cause it's just a header

                fgetcsv( $csvUpdate );

                                

                while( $csvRow = fgetcsv( $csvUpdate )){

                    

                    $year = $csvRow[0];

                    

                    //check if year exist update, if not do insertion instead

					$checkQuery = "SELECT * FROM `maiapkdata` WHERE data_year = '$year' AND data_zakat_type = (SELECT zakat_id FROM zakat WHERE zakat.zakat_type = '$jenisZakat')";

                        

                    $checkQuery = mysqli_query( $conn, $checkQuery );

                    

                    if( mysqli_num_rows( $checkQuery ) == 1 ){

                        

                        //do update

                        $updateQuery = "UPDATE maiapkdata SET data_actualValue = $csvRow[1] WHERE data_year = '$year' AND data_zakat_type = (SELECT zakat_id FROM zakat WHERE zakat.zakat_type = '$jenisZakat')";

                        

                        if( mysqli_query($conn,$updateQuery) ){

                            

                            $massage = "1";

                            

                        }else{

                            

                            $massage = "error(1):".mysqli_error($conn);

                            break;

                        }

                        

                    }else{

                        

                        //do insertion

						$insertQuery = "INSERT INTO maiapkdata VALUE (null,$csvRow[1],'$year',(SELECT zakat_id FROM zakat WHERE zakat.zakat_type = '$jenisZakat'))";

                        

                        if( mysqli_query($conn,$insertQuery) ){

                            

                            $massage = "1";

                            

                        }else{

                            

                            $massage = "error(2):".mysqli_error($conn);

                            break;

                        }

                        

                    }

                    

                }

                

                //change has been made alter the updateIDs for live update

                $newUpdateIDs = uniqid();

                file_put_contents('updateID.txt', $newUpdateIDs);

                

                echo $massage;

                

            } else {



                echo "wrong file format";



            }





        } else {



            echo "no file specified";



        }







    } else {



        echo "fail: not staff";



    }



} else {



    echo "fail: not log in";



}



?>