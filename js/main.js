// JavaScript Document

// graph
var myChart

$(document).ready(function () {
  'use strict'

  getGraphData('set')

  // set data for update id (give random at first)
  localStorage.setItem('updateIDs', 'random')

  // upon logout
  $(document).on('click', '#logOut', function () {
    $.ajax({
      url: 'phphandler/logout.php',
      type: 'POST',
      success: function () {
        window.location.replace('index.php')
      }
    })
  })

  // on change zakat type on graph
  $('#JenisZakatGraph').change(function () {
    getGraphData('update')
  })

  // on change zakat type on graph
  $('#updateGraphBTN').click(function () {
    getGraphData('update')
  })

  // for live update every 1 sec
  setInterval(function () {
    $.ajax({

      type: 'POST',
      url: 'phphandler/liveUpdate.php',
      data: { data: localStorage.getItem('updateIDs') },
      success: function (data) {
        // if 1 do update
        // update IDs will determine if update are needed, if same as the server(no change to database has been made)
        if (data[0] == '1') {
          getGraphData('update')
          localStorage.setItem('updateIDs', data.substr(1, data.length))
        }
      },
      error: function () {
        console.log("live update: can't connect to server")
      }

    })
  }, 2000)
})

// get the data in form of array (actual value, forecast value, year, zakat type)
function getGraphData (getFor) {
  // specified zakat Type
  const zakatType = $('#JenisZakatGraph').val()

  const datas = new FormData()
  datas.append('zakatType', zakatType)

  var graphData

  // get data from database put inside array append it to table
  $.ajax({

    url: 'phphandler/getData.php',
    type: 'POST',
    data: datas,
    processData: false,
    contentType: false,
    beforeSend: function () {
      graphLoaders('show')
    },
    success: function (data) {
      graphLoaders('hide')
      var graphData = JSON.parse(data)
      if (getFor == 'set') {
        // set graph
        setGraph(graphData)
      } else {
        // update graph
        updateGraph(graphData)
      }
    },
    error: function () {

    }

  })
}

// accept array with (year actual and forecast)
function setGraph (datalist) {
  var data_year = []
  var data_actual = []
  var data_forecast = []

  for (let i = 0; i < datalist.length; i++) {
    // set year data
    data_year.push(datalist[i].data_year)

    if (datalist[i].data_actualValue != 0) {
      // set actual value
      data_actual.push(datalist[i].data_actualValue)
    }

    // set forecast value
    data_forecast.push(datalist[i].data_forecastValue)
  }

  // set initail graph
  var ctx = document.getElementById('myChart').getContext('2d')
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data_year,
      datasets: [{
        label: 'Jumlah Sebenar',
        lineTension: 0,
        data: data_actual,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgb(0,191,255,1)',
        borderWidth: 3,
        pointHoverRadius: 7,
        pointRadius: 5
      }, {
        label: 'Jumlah Ramalan',
        lineTension: 0,
        data: data_forecast,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(255, 51, 0, 1)',
        borderWidth: 3,
        pointHoverRadius: 7,
        pointRadius: 5
      }]

    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: 'JUMLAH PENDAPATAN(RM)'
          }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: 'TAHUN'
          }
        }]

      },
      maintainAspectRatio: false
    }
  })
}

function updateGraph (datalist) {
  var data_year = []
  var data_actual = []
  var data_forecast = []

  for (let i = 0; i < datalist.length; i++) {
    // set year data
    data_year.push(datalist[i].data_year)

    if (datalist[i].data_actualValue != 0) {
      // set actual value
      data_actual.push(datalist[i].data_actualValue)
    }

    // set forecast value
    data_forecast.push(datalist[i].data_forecastValue)
  }

  // update the data and the graph
  // set year
  myChart.data.labels = data_year

  // set actual
  myChart.data.datasets[0].data = data_actual

  // set forecast
  myChart.data.datasets[1].data = data_forecast

  myChart.update()
}

function graphLoaders (action) {
  if (action == 'show') {
    $('#graphLoader').css('display', 'block')
    $('#updateGraphBTN').css('display', 'none')
  } else if (action == 'hide') {
    $('#graphLoader').css('display', 'none')
    $('#updateGraphBTN').css('display', 'block')
  }
}
