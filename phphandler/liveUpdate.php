<?php
	
	// set php runtime to unlimited
	set_time_limit(0);

    //get current file timer save in server, if same as the data sent no need to do update
    $file_timer = filemtime("updateID.txt");
	$file_new_timer = filemtime("updateID.txt");
   	
	while($file_timer == $file_new_timer){
		
		// PHP caches file data, like requesting the size of a file, by default. clearstatcache() clears that cache
    	clearstatcache();
		$file_new_timer = filemtime("updateID.txt");
		
	}
	
	echo "1";
	
?>