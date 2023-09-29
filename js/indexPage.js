//	JavaScript Document
/*	This script will handle all the logic and interactive user interface in the index page	*/

$(document).ready(() => {
  
	'use strict';
	
	//	hide the error on input change
	$('input').on('change paste keyup', () => {
		$('#loginErrorHelp').addClass('d-none');
	});
	
	/*	on login send data in the form and based on the reply act accordingly */
 	$('#BTNLogin').on('click', () => {
    
		var dataToBeSend = new FormData();

		//	change form data to some array
		var inputList = $('#LoginForm').serializeArray();		

		//	insert form data into data to be send
		for (var i = 0; i < inputList.length; i++) {dataToBeSend.append(inputList[i].name, inputList[i].value) };

		$.ajax({
			url: 'phphandler/loginhandler.php',
			data: dataToBeSend,
			processData: false,
			contentType: false,
			type: 'POST',
			
			/*	while checking credentials in the database show a loggin pop up	*/
			beforeSend: () => {
				
				Swal.fire({
				  	title: 'Logging In',
				  	showConfirmButton: false,
				  	allowOutsideClick: false,
					timer: 9999999,
				  	onBeforeOpen:  () => {
						Swal.showLoading()
				  	}
				});
			},
			
			/*	upon getting a reply on the database, do proccess according to the reply */
			success: (data) => {
								
				Swal.close();	// remove the logging in pop up
				
				/*	if JSON are being sent, then a user data has been received and put it in the localstorage for mainppage reference to be used to set user profile page, else it's an error reply	*/
				try {
					
          			localStorage.setItem('userData', data);
					data = JSON.parse(data);
					window.location.replace('adminPage.php');
					
				} catch(e) {
					
					if(data == 'no user'){
						$('#loginErrorHelp').removeClass('d-none');
					}else{
						console.log("database error: " + data);
					}
					
				}
				
		  	},
			
		  	error: () => {
				Swal.fire({
					type: 'error',
					title: 'Logging In',
					text: "There's a problem trying to connect to the server, Please try again later"
				})
		  	}

		})
	  })

});

