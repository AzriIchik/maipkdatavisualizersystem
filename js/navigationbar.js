// JavaScript Document

$(document).ready(function () {
  // on click minimize tab
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active')
  })

  // change page
  // upon clicking element with class of tablinks get it's corresponding data-target-tabcontent
  $(document).on('click', '.navLinks', function () {
    var targetContentID = $(this).attr('data-target-tabcontent')
    changeTab(this, targetContentID)
  })

  // upon logout
  $(document).on('click', '#logOut', function () {
    $.confirm({
      title: 'Log Keluar',
      content: 'adakah anda pasti?',
      buttons: {
        ya: {
          btnClass: 'btn-success',
          action: function () {
            $.ajax({
              url: 'phphandler/logout.php',
              type: 'POST',
              success: function () {
                window.location.replace('index.php')
              }
            })
          }
        },
        tidak: {
          btnClass: 'btn-danger'
        }
      }
    })
  })
})

/* change page */
function changeTab (ele, targetPage) {
  'use strict'

  // use for each to iterate

  // get the parent and all
  var tabPageParentEle = $(targetPage).parent()
  $('.page', tabPageParentEle).each(function () {
    $(this).css('display', 'none')
  })

  $(targetPage).css('display', 'block')
}
