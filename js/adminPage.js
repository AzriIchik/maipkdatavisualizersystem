// JavaScript Document

var TargetEditUserID

$(document).ready(function () {
	'use strict'

	// load all the needed stuff
	loadUserAprrovalList();
	loadTopManagementList();
	loadStaffList();
	
	// set sign up link
	let signUpFormLink = window.location.href.replace('adminPage.php','signUpForm.html');
	$('#signUpLink').text(signUpFormLink);

	$(document).on('click', '#addTopManagementBTN', function () {
    	$('#adminAddTopManagementModal').modal('show')
  	})

  	// upon approving a registered user
  	$(document).on('click', '[data-BTNType="userApproveBTN"]', function () {
  		approveUserFromDB(this)
	})

  	// upon delete regitered user
  	// since all table are using same HTML structure, removeUserFromDB will be shared
  	// any button with this attribute will cause the user to be removed from DB
  	$(document).on('click', '[data-BTNType="userDeclineBTN"]', function () {
    	removeUserFromDB(this)
  	})

  	// upon declining a registered user
  	// on delete any registered User
  	$(document).on('click', '[data-BTNType="removeUser"]', function () {
    // confirmation
    const btnEle = $(this)

    $.confirm({
      title: 'Padam pengguna',
      content: 'Adakah anda pasti ingin memadam pengguna ini?',
      buttons: {
        ya: {
          action: function () {
            removeUserFromDB(btnEle)
          },
          btnClass: 'btn-danger'

        },
        tidak: function () {

        }
      }
    })
  })

  	$(document).on('click', '[data-BTNType="editTopManager"]', function () {
    $('#adminEditTopManagementModal').modal('show')

    // set target user that will be edited
    const TargetRow = $(this).closest("[data-target='parentRow']")
    TargetEditUserID = $(TargetRow).attr('id')

    // get current data
    const curName = $(TargetRow).find("[data-target='userName']").text()
    const curEmail = $(TargetRow).find("[data-target='userEmail']").text()
    const curPhoneNum = $(TargetRow).find("[data-target='userPhoneNum']").text()

    // set input to current data
    $('#editTopManagerInfo').find('#inputUserName').val(curName)
    $('#editTopManagerInfo').find('#inputUserEmail').val(curEmail)
    $('#editTopManagerInfo').find('#inputUserPhoneNo').val(curPhoneNum)
  })

  	// on click staff edit password
  	$(document).on('click', '[data-BTNType="staffEditPassword"]', function () {
    	$('#adminEditStaffPasswordModal').modal('show')

    	// set target user that will be edited
    	const TargetRow = $(this).closest("[data-target='parentRow']")
    	TargetEditUserID = $(TargetRow).attr('id')
  	})
})

/////////////////////////* Loading function *///////////////////////////

// load all registered staff awaiting aproval list
function loadUserAprrovalList () {
  'use strict'

  // set all the needed DOM
  const listContainer = $('#userListTable').find('tbody')
  let listRow = $(listContainer).find('[data-blueprint="adminMainPageUserList"]')

  $.ajax({

  	type: 'POST',
    url: 'phphandler/userApprovalList.php',
    success: function (data) {
		
		/*	if JSON are being sent, then a user data has been received and put it in the localstorage for mainppage reference to be used to set user profile page, else it's an error reply	*/
		try {
			
			// remove all the current child
      		$(listContainer).children('.clone').remove();
			
			// insert all user in the table
			let userList = JSON.parse(data);
			
			for (var i = 0; i < userList.length; i++) {
				
				// create the clone
				listRow = listRow.clone();

				// set the ID
				listRow.attr('id', userList[i].user_ID);

				// identified it as clone
				listRow.addClass('clone');

				// set the staffNo
				listRow.find('td[data-target="userStaffNo"]').text(userList[i].user_staffNo);

				// set the name
				listRow.find('td[data-target="userName"]').text(userList[i].user_name);

				// set the email
				listRow.find('td[data-target="userEmail"]').text(userList[i].user_email);

				// set the email
				listRow.find('td[data-target="userPhoneNum"]').text(userList[i].user_phoneNum);

				// make visible
				listRow.css('display', 'table-row');

				// check if the user status is 2 he will be on bottom and change the approval DisBTN to awaiting email check
				if (userList[i].user_status == 2) {
					const approveBTN = listRow.find('button[data-BTNType="userApproveBTN"]');
					approveBTN.text('awaiting email check');
					approveBTN.addClass('disabled');
					approveBTN.removeAttr('data-BTNType');

					listRow.find('button[data-BTNType="userDeclineBTN"]').text('Cancel Approval');
				}

				// append to table body
				listRow.appendTo(listContainer);
		  }
			
					
		} catch(e) {
			
			if (data == "no application") {
				$('[data-rowType="caption"]').css('display', 'table-cell');
			}else{
				console.log("database error: " + data);
			}		
		}	
		
    },
    error: function () {
    	$.toast({
			text: 'pengguna gagal dipadam sila cuba sekali lagi',
		  	icon: 'error',
		  	hideAfter: 2000,
		  	allowToastClose: true,
		  	loaderBg: '#F6FA15',
		  	bgColor: '#212121',
		  	textColor: '#FFF',
		  	position: 'bottom-right'
		});
    }

  })
}

// load all approved staff on page 2
function loadStaffList () {
  'use strict'

  // set all the needed DOM
  const listContainer = $('#adminTableStaff').find('tbody')
  let listRow = $(listContainer).find('[data-blueprint="adminMainPageStaffList"]')

  $.ajax({

    type: 'POST',
    url: 'phphandler/staffLoadList.php',
    success: function (data) {
		
		/*	if JSON are being sent, then a user data has been received and put it in the localstorage for mainppage reference to be used to set user profile page, else it's an error reply	*/
		try {
			
			// remove all the current child
      		$(listContainer).find('.clone').remove();
			
			// insert all user in the table
			let userList = JSON.parse(data);
			
			for (var i = 0; i < userList.length; i++) {
				// create the clone
				listRow = listRow.clone()

				// set the ID
				listRow.attr('id', userList[i].user_ID)

				// set clone
				listRow.addClass('clone')

				// set the staffNo
				listRow.find('td[data-target="userStaffNo"]').text(userList[i].user_staffNo)

				// set the name
				listRow.find('td[data-target="userName"]').text(userList[i].user_name)

				// set the email
				listRow.find('td[data-target="userEmail"]').text(userList[i].user_email)

				// set the email
				listRow.find('td[data-target="userPhoneNum"]').text(userList[i].user_phoneNum)

				// make visible
				listRow.css('display', 'table-row')

				// append to table body
				listContainer.append(listRow)
			}
					
		} catch(e) {
			
			if (data == "no application") {
				$('[data-rowType="caption"]').css('display', 'table-cell');
			}else{
				console.log("database error: " + data);
				console.log("client error: " + e);
			}		
		}
		
    },
    error: function () {
    	$.toast({
			text: 'pengguna gagal dipadam sila cuba sekali lagi',
		  	icon: 'error',
		  	hideAfter: 2000,
		  	allowToastClose: true,
		  	loaderBg: '#F6FA15',
		  	bgColor: '#212121',
		  	textColor: '#FFF',
		  	position: 'bottom-right'
		});
    }

  })
}

// load all top management on page 2
function loadTopManagementList () {
	'use strict'

  	// set all the needed DOM
  	const listContainer = $('#adminTableTopManagement').find('tbody')
  	$(listContainer).find('.clone').remove()
  	let listRow = $(listContainer).find('[data-blueprint="adminMainPageTopManagementList"]')

  	$.ajax({
		
    	type: 'POST',
    	url: 'phphandler/topManagementLoadList.php',
    	success: function (data) {
			
			/*	if JSON are being sent, then a user data has been received and put it in the localstorage for mainppage reference to be used to set user profile page, else it's an error reply	*/
			try {

				$(listContainer).children('.clone').remove();
				// insert all user in the table
				let userList = JSON.parse(data);

				for (var i = 0; i < userList.length; i++) {
					// create the clone
					listRow = listRow.clone()

					// set the ID
					listRow.attr('id', userList[i].user_ID)

					// set clone
					listRow.addClass('clone')

					// set the staffNo
					listRow.find('td[data-target="userStaffNo"]').text(userList[i].user_staffNo)

					// set the name
					listRow.find('td[data-target="userName"]').text(userList[i].user_name)

					// set the email
					listRow.find('td[data-target="userEmail"]').text(userList[i].user_email)

					// set the email
					listRow.find('td[data-target="userPhoneNum"]').text(userList[i].user_phoneNum)

					// make it easy to remove all the clone and append new admin
					listRow.addClass('clone')

					// make visible
					listRow.css('display', 'table-row')

					// append to table body
					listRow.appendTo(listContainer)
				}

			} catch(e) {

				if (data == "no application") {
					$('[data-rowType="caption"]').css('display', 'table-cell');
				}else{
					console.log("database error: " + data);
				}		
			}
			
      		
    	},
    	error: function () {
			$.toast({
				text: 'gagal menyambung ke pelayan, sila segar semula',
				icon: 'error',
				hideAfter: 2000,
				allowToastClose: true,
				loaderBg: '#F6FA15',
				bgColor: '#212121',
				textColor: '#FFF',
				position: 'bottom-right'
			});
    	}

  	})
}

/////////////////////////* User approval and removal *///////////////////////////
// approve/remove function
// remove user from database if decline
function removeUserFromDB (targetUser) {
	
	const targetUserParent = targetUser.closest('[data-target="parentRow"]')

  	// the id for the user
  	const targetIDs = $(targetUserParent).attr('id');
  	const dataLists = new FormData()
  	dataLists.append('userID', targetIDs)

  	// remove from DB
  	$.ajax({

    	type: 'POST',
		url: 'phphandler/removeuser.php',
		data: dataLists,
		processData: false,
		contentType: false,
		beforeSend: function () {
			
			$.toast({
				text: 'Sila tunggu sebentar..',
			  	icon: 'info',
			  	hideAfter: 2000,
			  	allowToastClose: true,
			  	loaderBg: '#F6FA15',
			  	bgColor: '#212121',
			  	textColor: '#FFF',
			  	position: 'bottom-right'
			});
			
		},
		success: function (data) {
			
			switch(data){
				
				case "success": 
					
					$.toast({
						text: 'Pengguna dipadam',
						icon: 'info',
						hideAfter: 2000,
						allowToastClose: true,
						loaderBg: '#F6FA15',
						bgColor: '#212121',
						textColor: '#FFF',
						position: 'bottom-right'
					});
					
					targetUserParent.remove(); break;
				case "no data": 
					$.toast({
						text: 'Pengguna tidak wujud',
						icon: 'info',
						hideAfter: 2000,
						allowToastClose: true,
						loaderBg: '#F6FA15',
						bgColor: '#212121',
						textColor: '#FFF',
						position: 'bottom-right'
					}); break;
				default: console.log("database error: " + data);
				  
			}
		
		  
		},
		error: function () {
			
			$.toast({
				text: 'gagal menyambung ke pelayan, sila segar semula',
			  	icon: 'error',
			  	hideAfter: 2000,
			  	allowToastClose: true,
			  	loaderBg: '#F6FA15',
			  	bgColor: '#212121',
			  	textColor: '#FFF',
			  	position: 'bottom-right'
			});
			
		}

	})

}

function approveUserFromDB (targetUser) {
	
	const targetUserParent = targetUser.closest('[data-target="parentRow"]')

  	// the id for the user
  	const targetIDs = $(targetUserParent).attr('id')

  	// data to be sent for approval
  	const dataLists = new FormData()
  	dataLists.append('userID', targetIDs)

  	// change status to 2(awaiting email approval) from DB
  	$.ajax({

		type: 'POST',
    	url: 'phphandler/aproveuser.php',
    	data: dataLists,
    	processData: false,
    	contentType: false,
    	beforeSend: function () {
			
      		// target user is actually the button clicked itself
      		$(targetUser).text('Proccesing')
      		$(targetUser).addClass('disabled')
    	},
    	success: function (data) {
			
			switch (data) {
				
				case "success": 
					targetUserParent.remove();
					$.toast({
						text: 'Selesai',
						icon: 'success',
						hideAfter: 2000,
						allowToastClose: true,
						loaderBg: '#F6FA15',
						bgColor: '#212121',
						textColor: '#FFF',
						position: 'bottom-right'
					});
					loadStaffList(); break;
				case "no data": 
					$.toast({
						text: 'Selesai',
						icon: 'error',
						hideAfter: 2000,
						allowToastClose: true,
						loaderBg: '#F6FA15',
						bgColor: '#212121',
						textColor: '#FFF',
						position: 'bottom-right'
					});
					break;
				default: console.log("databse error: " + data);
				
			}
			
    	},
    	error: function () {
      		$.toast({
				text: 'Gagal menyambung ke pelayar, sila segar semulawwwwww',
				icon: 'error',
				hideAfter: 2000,
				allowToastClose: true,
				loaderBg: '#F6FA15',
				bgColor: '#212121',
				textColor: '#FFF',
				position: 'bottom-right'
			});
    	}

  })

  // remove from Document
}

// use to notify any change after form
// get the modal as parameter
// find data-target="modalNotification"
// display it with fade in and out for 2 secs
function modalNotify (targetModal) {
  var notiEle = $(targetModal).find("small[data-target='modalNotification']")
  $(notiEle).css('display', 'block')
  $(notiEle).fadeOut(2000, function () {
    $(notiEle).css('display', 'none')
  	})
}
