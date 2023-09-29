// JavaScript Document
$(document).ready(function () {
  'use strict'

  // trigger a click on an element
  // $(".tab").children(".active").trigger("click");

  setTimeout(function () {
    $('.tab').find('.active').trigger('click')
  }, 500)
})

function changeTab (ele, targetContent) {
  'use strict'

  // use for each to iterate

  // get the parent(to identify unique div) and remove all child active and set active to clicked element
  var tabParentEle = $(ele).parent()
  $('.tablinks', tabParentEle).each(function () {
    $(this).removeClass('active')
  })

  // get the parent and all
  var tabContentParentEle = $(targetContent).parent()
  $('.tabcontent', tabContentParentEle).each(function () {
    $(this).css('display', 'none')
  })

  $(ele).addClass('active')
  $(targetContent).css('display', 'block')
}
