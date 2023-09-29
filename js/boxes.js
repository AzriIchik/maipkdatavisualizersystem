
// JavaScript Document
$(document).ready(function () {

  // button
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $(document).on('click', '.box-button', function () {
    // get button type
    var btnType = $(this).attr('data-box-button-type')
    let zakatType

    switch (btnType) {
      case 'uploadCSV':

        $('#testInput').click()

        break

      case 'downloadCSV':

        zakatType = $('#JenisZakatGraphEditForm').val().toString().replace(/\s+/g, '_')
        const arrayToCSVData = [['tahun', 'jumlah pendapatan']]
        const dataYear = graphDataList[zakatType].actualYear
        const dataRevenue = graphDataList[zakatType].actualData

        for (let i = 0; i < dataYear.length; i++) {
          const dataRow = [dataYear[i], dataRevenue[i]]
          arrayToCSVData.push(dataRow)
        }

        // convert to CSV
        downloadCSV('data perolehan zakat ' + zakatType + '.csv', arrayToCSVData)

        break

      case 'editprofile':

        const editform = $('#profileeditfrom')

        // hide profile info
        $(editform).find('.formcaption').css('display', 'none')

        // show input
        $(editform).find('.forminput').removeAttr('style')

        // set current from data

        const userdata = JSON.parse(localStorage.getItem('userData'))

        $(editform).find('input[name="usernameinput"]').val(userdata.user_name)
        $(editform).find('input[name="useremailinput"]').val(userdata.user_email)
        $(editform).find('input[name="userphoneinput"]').val(userdata.user_phoneNum)

        break

      case 'zoom':

        var boxContainer = $(this).closest('.box-container')
        if ((boxContainer).hasClass('col-md-6')) {
          $(boxContainer).removeClass('col-md-6')
          $(boxContainer).addClass('col-md-12')
        } else {
          $(boxContainer).removeClass('col-md-12')
          $(boxContainer).addClass('col-md-6')
        }

        break

      case 'editdata':

        zakatType = $('#JenisZakatGraphEditForm').val().toString().replace(/\s+/g, '_')

        // show edit table
        $('#reportTableActualEditForm').css('display', 'table')

        // hide real table
        $('#reportTableActualEdit').css('display', 'none')

        // disable option
        $('#JenisZakatGraphEditForm').prop('disabled', true)

        // reset controller
        $('div[data-iscontroller="true"]').remove()

        // generate the edit controller
        const controller = '<div class="btn-group position-relative" role="group" style="left:35%" data-iscontroller="true"><button type="button" class="btn btn-secondary rounded" data-editForm-btn-type="adddata">Tambah Data</button><button type="button" class="btn btn-success rounded mx-1" data-editForm-btn-type="approvechange">Simpan</button><button type="button" class="btn btn-danger rounded" data-editForm-btn-type="cancelchange">Batalkan</button></div>'

        // append controller to parent
        $('#reportTableActualEditForm').closest('div').append(controller)

        // set edit table to corresponding data

        /* USE

				var graphDataList = {};

				var graphDataForecastList = {};

				*/

        const editTable = $('#reportTableActualEditForm').find('tbody')
        let graphDataListEdit = []

        // reset the table
        editTable.text('')

        graphDataListEdit = graphDataList[zakatType]

        // set the table
        for (let i = 0; i < graphDataListEdit.actualData.length; i++) {
          // setting data for the actual table
          const tdYear = '<td>' + graphDataListEdit.actualYear[i] + '</td>'

          const tdDataInputActual = '<td>' + '<input type="number" class="form-control dataInput" placeholder="Masukkan Data" value="' + graphDataListEdit.actualData[i] + '">' + '</td>'

          const tableRow = '<tr>' + tdYear + tdDataInputActual + '<td><button type="button" class="btn btn-danger mx-auto" data-editForm-btn-type="deletedata"><i class="fas fa-ban" data-box-button-type="delete"  data-toggle="tooltip" data-placement="left" title="padam data"></i></button></td>' + '</tr>'

          // append to table
          editTable.append(tableRow)
        }
    }
  })

  $(document).on('click', '.box-info-button', function () {
    updateInfo(this)
  })

  $(document).on('click', '.box-profile-button', function () {
    $.confirm({
      title: 'Batalkan perubahan?',
      content: 'sebarang penambahan dan perubahan data tidak akan disimpan',
      buttons: {
        ya: {
          btnClass: 'btn-success',
          action: function () {
            const editform = $('#profileeditfrom')

            // hide profile info
            $(editform).find('.forminput').css('display', 'none')

            // show input
            $(editform).find('.formcaption').removeAttr('style')

            $('.help-block').remove()
          }
        },
        tidak: {
          btnClass: 'btn-danger'
        }
      }
    })
  })

  $(document).on('click', '.box-password-button', function () { $('#profilepasswordform').css('display', 'block') })

  $(document).on('click', '.box-password-cancel-button', function () { $('#profilepasswordform').css('display', 'none') })

  // when csv upload input change
  $('#testInput').change(function () {
    const inputEle = $(this)
    const uploadCSVFile = $(this).prop('files')[0]
    const uploadformat = uploadCSVFile.name.split('.')

    // check file format
    if (uploadformat[1] === 'csv') {
      const zakatType = $('#JenisZakatGraphEditForm').val().toString().replace(/\s+/g, '_')

      // data list
      const datas = new FormData()
      datas.append('csvfile', uploadCSVFile)
      datas.append('jenisZakat', zakatType)

      $.ajax({

        url: 'phphandler/updateGraphData.php',
        type: 'POST',
        data: datas,
        beforeSend: function () {
          console.log('dimuat turun')
        },
        processData: false,
        contentType: false,
        success: function (data) {
          console.log(data)
          if (data == 1) {
            console.log('selesai')
            $(inputEle).val('')
          } else {
            $(inputEle).val('')
          }
        },
        error: function () {

        }
      })
    } else {
      $(inputEle).val('')
      $.toast({
        text: 'Sila Masukkan format(CSV) fail yang betul',
        icon: 'info',
        hideAfter: 3000,
        allowToastClose: true,
        loaderBg: '#F6FA15',
        bgColor: '#212121',
        textColor: '#FFF',
        position: 'bottom-right'
      })
    }
  })

  setUserIDBox()
})

function updateInfo (infoButton) {
  // info list
  const infoList = {

    GRAF_RAMALAN: "Bagi melihat graf ramalan, anda hanya perlu klik pada butang 'Graf Ramalan', ia akan memaparkan maklumat dan data bagi semua jenis zakat yang ada berserta ramalan. graf hanya akan diramal sekiranya data mencukupi (sekurang-kurangnya 6 tahun)",

    LAPORAN_PENUH: "Bagi melihat graf ramalan, anda hanya perlu klik pada butang 'Laporan Penuh', ia akan memaparkan maklumat dan data bagi satu jenis zakat yang ada berserta ramalan digabungkan di dalam satu graf, data secara jadual juga akan dipaparkan. graf hanya akan diramal sekiranya data mencukupi (sekurang-kurangnya 6 tahun)",

    PENYUNTINGAN_PROFIL: "Bagi mengubah maklumat profil pengguna, klik pada butan 'Profil', ia akan memaparkan maklumat pengguna. Kemudian klik pada ikon sunting(pen) bagi mengubah sebarang maklumat. Klik simpan untuk menyimpan data yang diubah atau klik batalkan untuk membatalkan sebarang perubahan profil",

    PENYUNTINGAN_DATA: "Bagi mengubah data, klik pada 'Penyuntingan data', ia akan menyenaraikan data zakat. Klik pada ikon sunting(pen) bagi mengubah sebarang maklumat. Klik simpan untuk menyimpan data yang diubah atau klik batalkan untuk membatalkan sebarang perubahan data. Penambahan data juga boleh dilakukan dengan klik pada butang tambah data",

    PENDAFTARAN_STAF: "Pendaftaran staff boleh dilakukan dengan melalui pautan URL pada link dalam 'dashboard'. Link tersebut boleh dikongsikan kepada individu yang ingin berdaftar. Setelah selesai pendaftaran, sila tunggu sehingga admin mengesahkan pendaftaran tersebut",

    PENDAFTARAN_PENGURUS: "Bagi menambah pengurus, kilk pada 'senarai pengguna', kemudian klik pada butang tambah dan masukkan maklumat pengurus atasan",

    MUAT_TURUN_DATA: "Bagi memuat turun data, klik pada 'laporan penuh' dan klik pada butang muat turun data",

    MUAT_NAIK_DATA: "Bagi memuat naik data, klik pada 'laporan penuh' dan klik pada butang muat naik data. Hanya fail berformat CSV sahaja yang akan diterima"

  }

  const infoButtonPurpose = $(infoButton).attr('data-infopurpose')
  const buttonName = $(infoButton).text()

  switch (infoButtonPurpose) {
    case 'graf-ramalan':
      $('.info-title').text(buttonName)
      $('.info-paragraph').text(infoList.GRAF_RAMALAN)
      break

    case 'laporan-penuh':
      $('.info-title').text(buttonName)
      $('.info-paragraph').text(infoList.LAPORAN_PENUH)
      break

    case 'penyuntingan-profil':
      $('.info-title').text(buttonName)
      $('.info-paragraph').text(infoList.PENYUNTINGAN_PROFIL)
      break

    case 'penyuntingan-data':
      $('.info-title').text(buttonName)
      $('.info-paragraph').text(infoList.PENYUNTINGAN_DATA)
      break

    case 'pendaftaran-staf':
      $('.info-title').text(buttonName)
      $('.info-paragraph').text(infoList.PENDAFTARAN_STAF)
      break

    case 'pendaftaran-pengurus':
      $('.info-title').text(buttonName)
      $('.info-paragraph').text(infoList.PENDAFTARAN_PENGURUS)
      break

    case 'muat-turun-data':
      $('.info-title').text(buttonName)
      $('.info-paragraph').text(infoList.MUAT_TURUN_DATA)
      break

    case 'muat-naik-data':
      $('.info-title').text(buttonName)
      $('.info-paragraph').text(infoList.MUAT_NAIK_DATA)
      break
  }
}

function setUserIDBox () {
		
	let userData = localStorage.getItem('userData')
  	userData = JSON.parse(userData);

  	$('[data-boxtext-type="username"]').text(userData.user_name)
  	$('[data-boxtext-type="useremail"]').text(userData.user_email)
  	$('[data-boxtext-type="userphone"]').text(userData.user_phoneNum)
  	$('[data-boxtext-type="userstaffno"]').text(userData.user_staffNo)
  	$('[data-boxtext-type="userimg"]').attr('src', userData.user_imgsrc)

}

function downloadCSV (filename, rows) {
  var processRow = function (row) {
    var finalVal = ''
    for (var j = 0; j < row.length; j++) {
      var innerValue = row[j] === null ? '' : row[j].toString()
      if (row[j] instanceof Date) {
        innerValue = row[j].toLocaleString()
      };
      var result = innerValue.replace(/"/g, '""')
      if (result.search(/("|,|\n)/g) >= 0) { result = '"' + result + '"' }
      if (j > 0) { finalVal += ',' }
      finalVal += result
    }
    return finalVal + '\n'
  }

  var csvFile = ''
  for (var i = 0; i < rows.length; i++) {
    csvFile += processRow(rows[i])
  }

  var blob = new Blob([csvFile], {
    type: 'text/csv;charset=utf-8;'
  })
  if (navigator.msSaveBlob) { // IE 10+
    navigator.msSaveBlob(blob, filename)
  } else {
    var link = document.createElement('a')
    if (link.download !== undefined) { // feature detection
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', filename)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}
