/*	this JS will handle all form validation and handle all CRUD with database related with editing user information	
	include this file after:-
	jquery
	bootstrap
	formValidation
	page.js	*/

$(document).ready(function(){
	
	//	set from validation and handler
	setFormAddTopManagement();				//	for admin to add new top manager
  	setFormEditTopManagerProfile();			//	for admin to edit top manager profile
  	setFormEditTopManagerSecurityInfo();	//	for admin to edit top manager password 
  	setFormEditStaffSecurityInfo();			//	for admin to edit staff password 
	setFormEditUserOwnProfile();			//	for user to edit own profile
  	setFormEditUserOwnPassword();			//	for user to edit own passwoed
		
});

function setFormAddTopManagement () {
 	
	$('#DaftarForm').bootstrapValidator({
		fields: {
		  first_name: {
			validators: {
			  notEmpty: {
				message: 'Sila masukkan nama pengguna yang sah'
			  },
			  stringLength: {
				min: 2,
				message: 'Sila masukkan nama pengguna yang sah'
			  }
			}
		  },
		  DaftarNoStaff: {
			validators: {
			  notEmpty: {
				message: 'sila masukkan nombor staff yang sah'
			  }
			}
		  },
		  DaftarKatalaluan: {
			validators: {
			  notEmpty: {
				message: 'sila masukkan kata laluan yang sah'
			  },
			  stringLength: {
				min: 8,
				message: 'sila masukkan sekurang-kurangnya 8 aksara'
			  }

			}
		  },
		  DaftarNoTel: {
			validators: {
			  notEmpty: {
				message: 'Sila Masukkan nombor telefon yang sah'
			  },
			  regexp: {
				regexp: /^\d{3}-\d{5,}$/i,
				message: 'Sila Masukkan Nombor telefon yang sah'
			  }
			}
		  },
		  DaftarEmail: {
			validators: {
			  notEmpty: {
				message: 'Sila masukkan e mel anda'
			  }
			}
		  }
		}
  	}).on('success.form.bv', function (e) {
		
		e.preventDefault();
		
		// since preventdeafault doesnt even work
		e.stopImmediatePropagation();

		// get all the data - one by one
		var dataList = new FormData();

		// put all the data input from form to dataList
		var formInput = $('#DaftarForm').serializeArray()
		for (var i = 0; i < formInput.length; i++) {
		  dataList.append(formInput[i].name, formInput[i].value)
		}

		// to identify if the registering  is top management
		// 1 is for top management
		dataList.append('addUsetTypeID', 1)

    	// send to database to be proccessed
    	$.ajax({
			url: 'phphandler/signup.php',
			data: dataList,
			processData: false,
			contentType: false,
			type: 'POST',
			beforeSend: function () {
			
				// disable the submit btn by chaning it's type to Button
				$('#BTNApproveDaftar').addClass('disabled');
				$('#BTNApproveDaftar').attr('type', 'button');

				// change it to proccessing
				$('#BTNApproveDaftar').text('Proccesing');
			},
			success: function (data) {
				
				// enable the button
				$('#BTNApproveDaftar').removeClass('disabled')
				$('#BTNApproveDaftar').attr('type', 'submit')

				// change it text back
				$('#BTNApproveDaftar').text('Daftar')

				// due to the validator the button remain disable, this line is to prevent it
				$('#BTNApproveDaftar').removeAttr('disabled')
				
				if (data == "success") {
					
					$('#DaftarForm').trigger('reset')
					modalNotify($('#adminAddTopManagementModal'))

					// update the Top management List
					loadTopManagementList();
					
				}else{
					
					$.toast({
						text: 'terdapat masalah untuk menambah pengguna baharu sila cuba sekali lagi',
						icon: 'info',
						hideAfter: 2000,
						allowToastClose: true,
						loaderBg: '#F6FA15',
						bgColor: '#212121',
						textColor: '#FFF',
						position: 'bottom-right'
					});
					
					console.log("database error: " + data);
					
				}				

			},
			error: function () {
        		$.toast({
					text: 'tidak dapat menyambung ke pelayan, sila cuba sekali lagi',
					icon: 'error',
					hideAfter: 2000,
					allowToastClose: true,
					loaderBg: '#F6FA15',
					bgColor: '#212121',
					textColor: '#FFF',
					position: 'bottom-right'
				});
			}

    	});
  });
}

function setFormEditTopManagerProfile () {
	
	// note that we allow for username to be blank
	$('#editTopManagerInfo').bootstrapValidator({
  		fields: {
      		inputUserEmail: {
        		validators: {
          			email: {
           		 		message: 'sila masukkan email yang sah'
          			},
          			notEmpty: {
            			message: 'sila masukkan email yang sah'
          			}
        		}
      		},
      		inputUserPhoneNo: {
        		validators: {
          			regexp: {
            			regexp: /^\d{3}-\d{5,}$/i,
            			message: 'sila Masukkan Nombor telefon yang sah'
          			},
          			notEmpty: {
            			message: 'sila Masukkan Nombor telefon yang sah'
          			}
				}
			}
    	}
	}).on('success.form.bv', function (e) {
    	e.preventDefault()

		// since preventdeafault doesnt even work
		e.stopImmediatePropagation()

		// set up all the data to send
		const formInputLists = $('#editTopManagerInfo').serializeArray()

		const datas = new FormData()
		for (var i = 0; i < formInputLists.length; i++) {
		  datas.append(formInputLists[i].name, formInputLists[i].value)
		}

		// to make sure DB which user to change
		datas.append('userID', TargetEditUserID)

		// button sumbit for feedback purposes
		const submitBTN = $('#editTopManagerInfo').find("button[data-BTNType='editProfile']")

		$.ajax({
			type: 'POST',
			processData: false,
      		contentType: false,
      		url: 'phphandler/adminEditUserInfo.php',
      		data: datas,
      		beforeSend: function () {
        		// disable the button
        		$(submitBTN).text('Proccessing')
        		$(submitBTN).attr('disabled', 'disabled')
      		},
      		complete: function () {
        		// enable the button
        		$(submitBTN).text('Ubah')
        		$(submitBTN).removeAttr('disabled')
        		modalNotify($('#adminEditTopManagementModal'))
        		loadTopManagementList()
      		},
      		error: function () {

      		}
    	});
  	});
}

function setFormEditTopManagerSecurityInfo () {
  $('#editTopManagerSecurity').bootstrapValidator({
    fields: {
      inputUserNewPassword: {
        validators: {
          notEmpty: {
            message: 'sila masukkan kata laluan yang sah'
          },
          stringLength: {
            min: 8,
            message: 'sila masukkan sekurang kurangnya 8 aksara'
          }
        }
      }
    }
  }).on('success.form.bv', function (e) {
    e.preventDefault()

    // since preventdeafault doesnt even work
    e.stopImmediatePropagation()

    // set up all the data to send
    const newPassword = $('#editTopManagerSecurity').find('#inputUserNewPassword').val()
    const datas = new FormData()
    datas.append('newPassword', newPassword)
    datas.append('userID', TargetEditUserID)

    $.ajax({

      type: 'POST',
      processData: false,
      contentType: false,
      url: 'phphandler/adminEditUserSecurity.php',
      data: datas,
      beforeSend: function () {
        // disable the button
        const submitBTN = $('#editTopManagerSecurity').find("button[data-BTNType='editProfile']")
        $(submitBTN).text('Proccessing')
        $(submitBTN).attr('disabled', 'disabled')
      },
      complete: function () {
        modalNotify($('#adminEditTopManagementModal'))
        $('#editTopManagerSecurity').trigger('reset')

        // enable the button
        const submitBTN = $('#editTopManagerSecurity').find("button[data-BTNType='editProfile']")
        $(submitBTN).text('Change')
        $(submitBTN).removeAttr('disabled')
      },
      error: function () {

      }

    })
  })
}

function setFormEditStaffSecurityInfo () {
  $('#editSatffSecurityForm').bootstrapValidator({
    fields: {
      inputUserNewPassword: {
        validators: {
          notEmpty: {
            message: 'sila masukkan kata laluan yang sah'
          },
          stringLength: {
            min: 8,
            message: 'sila masukkan sekurang kurangnya 8 aksara'
          }
        }
      }
    }
  }).on('success.form.bv', function (e) {
    e.preventDefault()

    // since preventdeafault doesnt even work
    e.stopImmediatePropagation()

    // set up all the data to send
    const newPassword = $('#editSatffSecurityForm').find('#inputUserNewPassword').val()
    const datas = new FormData()
    datas.append('newPassword', newPassword)
    datas.append('userID', TargetEditUserID)

    $.ajax({

      type: 'POST',
      processData: false,
      contentType: false,
      url: 'phphandler/adminEditUserSecurity.php',
      data: datas,
      beforeSend: function () {
        // disable the button
        const submitBTN = $('#editSatffSecurityForm').find("button[data-BTNType='editProfile']")
        $(submitBTN).text('Proccessing')
        $(submitBTN).attr('disabled', 'disabled')
      },
      complete: function () {
        modalNotify($('#adminEditStaffPasswordModal'))
        $('#editSatffSecurityForm').trigger('reset')

        // enable the button
        const submitBTN = $('#editSatffSecurityForm').find("button[data-BTNType='editProfile']")
        $(submitBTN).text('Change')
        $(submitBTN).removeAttr('disabled')
      },
      error: function () {

      }

    })
  })
}

function setFormEditUserOwnProfile () {
	
  $('#profileeditfrom').bootstrapValidator({
    fields: {
      usernameinput: {
        validators: {
          notEmpty: {
            message: 'Sila masukkan nama pengguna yang sah'
          },
          stringLength: {
            min: 2,
            message: 'Sila masukkan nama pengguna yang sah'
          }
        }
      },
      userphoneinput: {
        validators: {
          notEmpty: {
            message: 'Sila Masukkan nombor telefon yang sah'
          },
          regexp: {
            regexp: /^\d{3}-\d{5,}$/i,
            message: 'Sila Masukkan Nombor telefon yang sah'
          }
        }
      },
      useremailinput: {
        validators: {
          notEmpty: {
            message: 'Sila masukkan e mel anda'
          },
          emailAddress: {
            message: 'Sila masukkan alamat emel yang sah'
          }
        }
      },
      userimageinput: {
        validators: {
          file: {
            extension: 'jpeg,png',
            type: 'image/jpeg,image/png',
            maxSize: 2048 * 1024,
            message: 'sila pilih format gambar .jpeg atau .png'
          }
        }
      }
    }
  }).on('success.form.bv', function (e) {
    e.preventDefault()

    // since preventdeafault doesnt even work
    e.stopImmediatePropagation()

    // get all the data - onebyone
    var dataList = new FormData()

    // put all the data input from form to dataList
    var formInput = $('#profileeditfrom').serializeArray()

    for (var i = 0; i < formInput.length; i++) {
      dataList.append(formInput[i].name, formInput[i].value)
    }

    // insert image also
    const userImage = $('#profileeditfrom').find("input[name='userimageinput']").prop('files')[0]
    dataList.append('userimage', userImage)
    console.log(formInput)
    console.log(userImage)

    // send to database to be proccessed
    $.ajax({
      url: 'phphandler/editUserProfile.php',
      data: dataList,
      processData: false,
      contentType: false,
      type: 'POST',
      beforeSend: function () {
        toastMassage = $.toast({
          text: 'Sila tunggu sebentar sementara katalaluan lama diubah data',
          icon: 'info',
          hideAfter: false,
          allowToastClose: false,
          loaderBg: '#F6FA15',
          bgColor: '#212121',
          textColor: '#FFF',
          position: 'bottom-right'
        })
      },
      success: function (data) {
        // on completer requoest remove current loading alert and show success and wait for email
        localStorage.setItem('userData', data)
        setUserIDBox()

        const editform = $('#profileeditfrom')

        // hide profile info
        $(editform).find('.forminput').css('display', 'none')

        // show input
        $(editform).find('.formcaption').removeAttr('style')

        toastMassage.reset()
        $.toast({
          text: 'Maklumat Berjaya Diubah',
          icon: 'info',
          hideAfter: 3000,
          allowToastClose: true,
          loaderBg: '#F6FA15',
          bgColor: '#212121',
          textColor: '#FFF',
          position: 'bottom-right'
        })
      },
      error: function () {
        toastMassage.reset()
        $.toast({
          text: 'Terdapat masalah semasa mengubah maklumat, sila cuba sekali lagi',
          icon: 'warning',
          hideAfter: 3000,
          allowToastClose: true,
          loaderBg: '#F6FA15',
          bgColor: '#212121',
          textColor: '#FFF',
          position: 'bottom-right'
        })
      }
    })
  })
}

function setFormEditUserOwnPassword () {
	$('#profilepasswordform').bootstrapValidator({
    	fields: {
      		newpassword: {
        		validators: {
          			notEmpty: {
            			message: 'Sila Masukkan katalaluan'
					},
          			stringLength: {
            			min: 8,
            			message: 'Sila Masukkan sekurang-kurangnya 8 aksara'
          			}
        		}
			},
      		oldpassword: {
        		validators: {
          			notEmpty: {
            			message: 'Sila Masukkan katalaluan'
          			},
          			stringLength: {
           		 		min: 8,
						message: 'Sila Masukkan sekurang-kurangnya 8 aksara'
          			}
        		}
      		}
    	}
	}).on('success.form.bv', function (e) {
    	
		e.preventDefault()

		// since preventdeafault doesnt even work
		e.stopImmediatePropagation()

		// get all the data - onebyone
		var dataList = new FormData()

		// put all the data input from form to dataList
		var formInput = $('#profilepasswordform').serializeArray()

		for (var i = 0; i < formInput.length; i++) {
			dataList.append(formInput[i].name, formInput[i].value)
		}

    	// send to database to be proccessed
    	$.ajax({
      		url: 'phphandler/editUserPassword.php',
		  	data: dataList,
		  	processData: false,
		  	contentType: false,
		  	type: 'POST',
      		beforeSend: function () {
				
        		toastMassage = $.toast({
          			text: 'Sila tunggu sebentar sementara katalaluan lama diubah data',
				  	icon: 'info',
				  	hideAfter: false,
				  	allowToastClose: false,
				  	loaderBg: '#F6FA15',
				  	bgColor: '#212121',
				  	textColor: '#FFF',
				  	position: 'bottom-right'
        		})
      		},
      		success: function (data) {
        		if (data == '1') {
					
          			toastMassage.reset();
					
				  	$.toast({	
						text: 'Katalaluan Berjaya Diubah',
						icon: 'info',
						hideAfter: 3000,
						allowToastClose: true,
						loaderBg: '#F6FA15',
						bgColor: '#212121',
						textColor: '#FFF',
						position: 'bottom-right'
				  	})

          			$('.box-password-cancel-button').trigger('click');
					
        		} else {
					
          		toastMassage.reset()
          $.toast({
            text: 'Katalaluan lama salah',
            icon: 'warning',
            hideAfter: 3000,
            allowToastClose: true,
            loaderBg: '#F6FA15',
            bgColor: '#212121',
            textColor: '#FFF',
            position: 'bottom-right'
          })
        }
      },
      error: function () {

        /// if anything happen set error

      }
    })
  })
}