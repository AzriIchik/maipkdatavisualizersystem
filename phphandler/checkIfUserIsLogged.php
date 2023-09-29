<?php
	
//	check if a user has login session and based 
//	one the user redirect to correspond page
session_start();

//	if no session redirect to index page for login 
if(!(isset($_SESSION['userType']))){ header('Location: index.php'); }

//	list page
define('ADMIN_PAGE','adminPage.php');
define('STAFF_PAGE','staffPage.php');
define('TOPMANAGEMENT_PAGE','topManagementPage.php');

// 
$currentPage = basename($_SERVER['PHP_SELF']);

//	if user type is not on the correct page, redirect to the right page
switch($_SESSION['userType']){
		
	case 'MANAGER': 
		if(!( $currentPage == TOPMANAGEMENT_PAGE)){ header('Location:'.TOPMANAGEMENT_PAGE);}
		break;
		
	case 'ADMIN': 
		if(!( $currentPage == ADMIN_PAGE)){ header('Location:'.ADMIN_PAGE); }
		break;
		
	case 'STAFF': 
		if(!( $currentPage == STAFF_PAGE)){ header('Location:'.STAFF_PAGE); }
		break;
		
}

?>