// JavaScript Document

var TargetEditUserID

$(document).ready(function () {
  // for file style :P
  $('#inputCSVFile').change(function () {
    var fileName = $(this).val()
    $("label[for='inputCSVFile']").text(fileName)
  })

  // for when are the zakat type change update the table
  $('#JenisZakat').change(function () {
    setTable()
  })

  'use strict'
  // set current STAFF info
  // setStaff();

  /* set all form validator
	setFormStaffProfileInfo();
	setFormStaffSecurityInfo(); */

  // set data view
  setTable()
  // setGraphData();

  // upon clicking staff edit profile
  $('#staffEditProfileBTN').click(function () {
    $('#staffEditProfileModal').modal({
      backdrop: 'static',
      keyboard: false
    })

    const targetModal = $('#staffEditProfileModal')

    $(targetModal).modal('show')

    // set the input to current data
    $(targetModal).find('#inputUserName').val($('#staffName').text())
    $(targetModal).find('#inputUserEmail').val($('#staffEmail').text())
    $(targetModal).find('#inputUserPhoneNo').val($('#staffPhoneNo').text())
  })

  // after done with profile edit, make the neccesary change
  $('#staffEditProfileModalClose').click(function () {
    setStaff()
  })

  // on upload csv file
  $('#uploadCSVBTN').click(function () {
    // check if file exist
    if ($('#inputCSVFile').get(0).files.length === 1) {
      // set up data to be sent
      const csvdata = document.getElementById('inputCSVFile').files[0]
      const zakatType = $('#JenisZakat').val()

      console.log(zakatType)
      // data list
      const datas = new FormData()
      datas.append('csvfile', csvdata)
      datas.append('jenisZakat', zakatType)

      $.ajax({

        url: 'phphandler/updateGraphData.php',
        type: 'POST',
        data: datas,
        beforeSend: function () {
          tableLoaders('show')
        },
        processData: false,
        contentType: false,
        success: function (data) {
          tableLoaders('hide')
          if (data == 1) {
            setTable()
          } else {

            // fail

          }
          console.log(data)
        },
        error: function () {

        }
      })
    } else {
      alert('no file')
    }
  })
})

// loading function

// set staff
function setStaff () {
  // $_SESSION['user_ID'] = $result['user_ID']; are used to keep the ids for current login user

  $.ajax({

    type: 'POST',
    url: 'phphandler/getLoggedUserInfo.php',
    complete: function (data) {
      // append data on doc
      const userInfo = JSON.parse(data.responseText)

      // adminUserName adminEmail adminPhoneNo
      // append
      // name
      $('#staffName').text(userInfo[0].user_name)
      // email
      $('#staffEmail').text(userInfo[0].user_email)
      // phone no
      $('#staffPhoneNo').text(userInfo[0].user_phoneNum)
      // staff no
      $('#staffNo').text(userInfo[0].user_staffNo)
    },
    error: function () {
      // refresh the page
    }

  })
}

// set table data lists
function setTable () {
  // clear table from clone
  $('#tableDataContainer').children().filter('.clone').remove()

  // specified zakat Type
  const zakatType = $('#JenisZakat').val()

  const datas = new FormData()
  datas.append('vals', zakatType)

  // get data from database put inside array append it to table
  $.ajax({

    url: 'phphandler/getData.php',
    type: 'POST',
    data: datas,
    beforeSend: function () {
      tableLoaders('show')
    },
    processData: false,
    contentType: false,
    success: function (data) {
      tableLoaders('hide')
      console.log(data)
      const dataList = JSON.parse(data)

      console.log(dataList)

      for (let i = 0; i < dataList.length; i++) {
        appendTableData(dataList[i])
      }
    },
    error: function () {

    }

  })
}

// get the array and append it in the table available in page 2
function appendTableData (datas) {
  console.log('added')
  // create the clone
  const newRow = $('#tableDataRow').clone()

  // add the clone class and set up the ids
  $(newRow).addClass('clone fadeIn')
  $(newRow).attr('id', datas.data_id)

  // set up data total Payer
  $(newRow).find("th[data-type='year']").text(datas.data_year)

  // set up data total payed
  $(newRow).find("td[data-type='actualValue']").text(datas.data_actualValue)

  // append to view
  $(newRow).css('display', 'table-row')
  $('#tableDataContainer').append(newRow)
}

function tableLoaders (action) {
  if (action == 'show') {
    $('#tableLoader').css('display', 'block')
  } else if (action == 'hide') {
    $('#tableLoader').css('display', 'none')
  }
}
