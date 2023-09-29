// data to be sent

$(document).ready(function () {
  // reset form
  $(document).on('click', '#BTNCancelDaftar', function () {
    $('#DaftarForm').trigger('reset')
  })

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
    e.preventDefault()

    // since preventdeafault doesnt even work
    e.stopImmediatePropagation()

    // get all the data - onebyone
    var dataList = new FormData()

    // put all the data input from form to dataList
    var formInput = $('#DaftarForm').serializeArray()
    console.log(formInput)
    for (var i = 0; i < formInput.length; i++) {
      dataList.append(formInput[i].name, formInput[i].value)
    }

    // to identify if the register is top management
    // 2 is for staff
    dataList.append('addUsetTypeID', 2)

    // send to database to be proccessed
    $.ajax({
			  url: 'phphandler/signup.php',
			  data: dataList,
			  processData: false,
			  contentType: false,
			  type: 'POST',
			  success: function () {
				  // before success set a loading screen
				  Swal.fire({
					  title: 'Loading',
					  showConfirmButton: false,
					  allowOutsideClick: false,
					  onBeforeOpen: () => {
            Swal.showLoading()
					  },
					  text: 'Permohonan anda sedang diproses, sila tunggu sebentar',
					  timer: 9999999
				   })
			  },
			  complete: function (data) {
				  // on completer requoest remove current loading alert and show success and wait for email

				  console.log(data)
				  Swal.close()
				  Swal.fire({
					  type: 'success',
					  title: 'Success',
					  text: 'Pendaftaran anda telah diterima, sila tunggu pemberitahuan daripada E-mel untuk pengesahan bagi membolehkan anda log in ke dalam sistem'
				   })

				  // trigger cancel BTN to get out and redirect index page
				  $('#BTNCancelDaftar').click()

				  setTimeout(function () {
					  window.location.replace('index.php')
				  }, 2000)
			  },
			  error: function () {
				  	/// if anything happen set error
        Swal.fire({
					  type: 'error',
					  title: 'info',
					  text: 'Maaf, terdapat masalah semasa pendaftaran sila cuba sekali lagi',
					  timer: 2500
        })
			  }
    })
  })
})
