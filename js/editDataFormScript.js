// JavaScript Document

$(document).ready(function () {
  $(document).on('click', 'button[data-editForm-btn-type="adddata"]', function () {

    // add new row to table

  })

  $(document).on('click', 'button[data-editForm-btn-type="approvechnage"]', function () {
    alert('clicked')

    // change data to array and put inside of dataForm
    $('#JenisZakatGraphEditForm').prop('disabled', false)

    // show edit table
    $('#reportTableActualEditForm').css('display', 'none')

    // hide real table
    $('#reportTableActualEdit').css('display', 'table')
  })

  $(document).on('click', 'button[data-editForm-btn-type="cancelchnage"]', function () {
    alert('clicked')

    // do something please
    $('#JenisZakatGraphEditForm').prop('disabled', false)

    // show edit table
    $('#reportTableActualEditForm').css('display', 'none')

    // hide real table
    $('#reportTableActualEdit').css('display', 'table')
  })
})
