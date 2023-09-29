// JavaScript Document

// data to contain all graph data from the database (array of object)
// array are arranged as follow, the ordering are important in which the actual value correspond to forecast value
var graphDataList = {}
var graphDataForecastList = {}

// contain all the id for all graph
var graphList = []
var reportGraph = $('body')

$(document).ready(function () {
  'use strict'

  initializeGraph()
  getZakatGraphData()

  // on change zakat type on graph
  $('#JenisZakatGraph').change(function () {
    const zakatType = $(this).val().toString().replace(/\s+/g, '_')

    const actualDataList = graphDataList[zakatType]
    const forecastDataList = graphDataForecastList[zakatType]

    setReportGraph(reportGraph, actualDataList, forecastDataList)
    setReportTable(actualDataList, forecastDataList)
  })

  $('#JenisZakatGraphEditForm').change(function () {
    const targetTable = $('#reportTableActualEdit')
    const zakatType = $('#JenisZakatGraphEditForm').val().toString().replace(/\s+/g, '_')
    const actualDataList = graphDataList[zakatType]

    console.log(zakatType)

    setActualTable(targetTable, actualDataList)
  })

  $(document).on('click', 'button[data-editForm-btn-type="adddata"]', function () {
    const editTable = $('#reportTableActualEditForm').find('tbody')

    // setting data year
    let newDataYear

    if ($(editTable).children().length == 0) {
      newDataYear = prompt('sila masukkan tahun permulaan', '2002')
    } else {
      newDataYear = parseInt($(editTable).children().last().children().first().text()) + 1
    }

    const tdYear = '<td>' + newDataYear + '</td>'

    const tdDataInputActual = '<td>' + '<input type="number" class="form-control dataInput" placeholder="Masukkan Data" value="' + '0' + '">' + '</td>'

    const tableRow = '<tr>' + tdYear + tdDataInputActual + '<td><button type="button" class="btn btn-danger mx-auto" data-editForm-btn-type="deletedata"><i class="fas fa-cross" data-box-button-type="delete"  data-toggle="tooltip" data-placement="left" title="padam data"></i></button></td>' + '</tr>'

    // append to table
    editTable.append(tableRow)
  })

  $(document).on('click', 'button[data-editForm-btn-type="approvechange"]', function () {
    $.confirm({
      title: 'Ubah',
      content: 'Data akan diubah',
      buttons: {
        ya: {
          btnClass: 'btn-success',
          action: function () {
            /* add data ajax */
            const editTable = $('#reportTableActualEditForm').find('tbody')
            let jsonYear = []
            let jsonData = []
            let zakatType = $('#JenisZakatGraphEditForm').val().toString()
            zakatType = zakatType.replace(/\s+/g, '_')
            console.log(zakatType)
            $(editTable).children('tr').each(function () {
              // change this to find
              jsonYear.push($(this).children().first().text())
              jsonData.push(parseFloat($(this).children().first().next().children().val()))
            })
            console.log(jsonData)
            jsonYear = JSON.stringify(jsonYear)
            jsonData = JSON.stringify(jsonData)

            const dataListSend = new FormData()

            dataListSend.append('year', jsonYear)
            dataListSend.append('data', jsonData)
            dataListSend.append('zakatType', zakatType)

            $.ajax({

              url: 'phphandler/updateGraphData2.php',
              type: 'POST',
              data: dataListSend,
              beforeSend: function () {
                // updating
              },
              success: function (data) {
                console.log(data)

                // do something please
                $('#JenisZakatGraphEditForm').prop('disabled', false)

                // show edit table
                $('#reportTableActualEditForm').css('display', 'none')

                // hide real table
                $('#reportTableActualEdit').css('display', 'table')

                $('div[data-iscontroller="true"]').remove()
              },
              processData: false,
              contentType: false,
              error: function () {
                // error
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

  $(document).on('click', 'button[data-editForm-btn-type="cancelchange"]', function () {
    $.confirm({
      title: 'Batalkan perubahan?',
      content: 'sebarang penambahan dan perubahan data tidak akan disimpan',
      buttons: {
        ya: {
          btnClass: 'btn-success',
          action: function () {
            // do something please
            $('#JenisZakatGraphEditForm').prop('disabled', false)

            // show edit table
            $('#reportTableActualEditForm').css('display', 'none')

            // hide real table
            $('#reportTableActualEdit').css('display', 'table')

            $('div[data-iscontroller="true"]').remove()
          }
        },
        tidak: {
          btnClass: 'btn-danger'
        }
      }
    })
  })

  $(document).on('click', 'button[data-editForm-btn-type="deletedata"]', function () {
    const targetDataRow = $(this).closest('tr')

    $.confirm({
      title: 'Padam data',
      content: 'pemadaman data ini akan turut memadam data tahun berikutnya',
      buttons: {
        ya: {
          btnClass: 'btn-success',
          action: function () {
            $(targetDataRow).nextAll().remove()
            $(targetDataRow).remove()
          }
        },
        tidak: {
          btnClass: 'btn-danger'
        }
      }
    })
  })

  liveUpdate()
})

// initialize the graph upon it's creation
// get all canvas and put graph in it - make sure it's id is (graph#)

function initializeGraph () {
  $('#content').find('canvas').each(function () {
    const newGraph = $(this)[0].getContext('2d')

    const graphZakatType = $(this).attr('data-zakatType')
    const graphZakatPurpose = $(this).attr('data-zakatPurpose')

    var Graph = new Chart(newGraph, {
      type: 'line',
      data: {
        labels: ['0000', '0000', '0000', '0000'],
        datasets: [{
          label: 'Pendapatan',
          lineTension: 0,
          data: [0],
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 1)',
          borderWidth: 3,
          pointHoverRadius: 3,
          pointRadius: 2
        }]

      },
      options: {
        legend: {
          display: true,
          position: 'right',
          labels: {
					  usePointStyle: true
          }
				  },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 15
            },
            scaleLabel: {
              display: true,
              labelString: 'JUMLAH PENDAPATAN (RM)'
            }
          }],
          xAxes: [{
            ticks: {

            },
            scaleLabel: {
              display: true,
              labelString: 'TAHUN'
						  }
          }]

        },
        maintainAspectRatio: true,
        tooltips: {
				  mode: 'index'
			   }
      }
    })

    // add new data to graph object to assign zakat type data based on it
    Graph.zakatType = graphZakatType
    Graph.zakatPurpose = graphZakatPurpose
    graphList.push(Graph)
  })

  // special graph container for full report - to notify which graph is the report graph
  reportGraph = graphList[graphList.length - 1]
}

// get all the actual revenue data from database order by zakat type
// all data will be available in graphDataList
function getZakatGraphData () {
  let toastMassage

  // get data from database put inside array
  $.ajax({

    url: 'phphandler/getData.php',
    type: 'POST',
    beforeSend: function () {
      toastMassage = $.toast({
        text: 'Sila tunggu sebentar sementara memproses data',
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
      toastMassage.reset()
      // an error happen
      if (data[0] == '1') {
        $.toast({
          text: 'Gagal mendapatkan data, sila segar semula pelayar',
          icon: 'error',
          hideAfter: 3000,
          allowToastClose: true,
          loaderBg: '#F6FA15',
          bgColor: '#212121',
          textColor: '#FFF',
          position: 'bottom-right'
        })

        // for debugging
        // console.log(data);

        // success
      } else {
        $.toast({
          text: 'Selesai',
          icon: 'success',
          hideAfter: 2000,
          allowToastClose: true,
          loaderBg: '#F6FA15',
          bgColor: '#212121',
          textColor: '#FFF',
          position: 'bottom-right'
        })

        // reset the graph data
        graphDataList = {}
        graphDataForecastList = {}

        // insert data to the data list
        const dataList = JSON.parse(data)

        // set the data in the array
        setActualData(dataList)
        setForecastData(graphDataList)

        // insert all data to their corresponding graph
        setGraph()
        setTable()
      }
    },
    error: function () {
      toastMassage.reset()
      $.toast({
        text: 'Tidak dapat menyambung ke pelayar, sila pastikan ada memiliki sambungan internet',
        icon: 'warning',
        position: 'bottom-right',
        bgColor: '#F7F7F7',
        textColor: '#000',
        hideAfter: 3000
      })
    }

  })
}

function setActualData (dataList) {
  // NOTE: guard command if data is empty

  // for containing the data and year of each value
  let zakatDataList = []
  let zakatYearList = []

  // for reference to current zakat type
  let zakatTypeReference = dataList[0].zakat_type.toString()

  for (let i = 0; i < dataList.length; i++) {
    // for identifying what type of zakat are being inserted
    const zakatType = dataList[i].zakat_type.toString()

    if (zakatType == zakatTypeReference) {
      zakatDataList.push(dataList[i].data_actualValue)
      zakatYearList.push(dataList[i].data_year)
    } else {
      const newData = new actualData(zakatDataList, zakatYearList)
      graphDataList[zakatTypeReference] = newData
      zakatTypeReference = dataList[i].zakat_type.toString()

      // reset
      zakatDataList = []
      zakatYearList = []

      zakatDataList.push(dataList[i].data_actualValue)
      zakatYearList.push(dataList[i].data_year)
    }
  }

  // inserting the last data
  const newData = new actualData(zakatDataList, zakatYearList)
  graphDataList[zakatTypeReference] = newData

  console.log(zakatDataList)
}

function setForecastData (graphDataList) {
  for (key in graphDataList) {
    // to add dynamically a properties
    var zakatTypeName = key.toString()

    var targetZakatTypeDataContainer = graphDataList[key]
    const forecastData = calculateForecast(targetZakatTypeDataContainer)

    // if there's no data just push empty object
    if (forecastData == undefined) {
      graphDataForecastList[zakatTypeName] = 'no forecast'
      continue
    }

    // create the forecast object and put it in list
    // ForecastData(forecastMin, forecastMax, forecastAverage, forecastYear)
    const forecastGraphData = new ForecastData(forecastData[2], forecastData[3], forecastData[1], forecastData[0])
    graphDataForecastList[zakatTypeName] = forecastGraphData
  }
}

/// //////////////////////////* setting graph and table */////////////////////////////////////////////

function setGraph () {
  // 2 types of graph
  // actual
  // forecast

  let graphDataActual = []
  let graphDataForecast = []

  // set actual graph and forecast
  for (let i = 0; i < graphList.length; i++) {
    const graphZakatType = graphList[i].zakatType
    const graphPurpose = graphList[i].zakatPurpose

    if (graphDataList.hasOwnProperty(graphZakatType)) {
      graphDataActual = graphDataList[graphZakatType]
      graphDataForecast = graphDataForecastList[graphZakatType]

      if (graphList[i].zakatPurpose == 'actual') {
        setActualGraph(graphList[i], graphDataActual)
      } else if (graphList[i].zakatPurpose == 'forecast') {
        setForecastGraph(graphList[i], graphDataForecast)
      }
    } else {
      console.log('no data available for this graph')
    }
  }
}

function setActualGraph (targetGraph, actualDataContainer) {
  // set all the nessesary data
  const dataYear = actualDataContainer.actualYear
  const dataActualValue = actualDataContainer.actualData

  // insert the data
  targetGraph.data.datasets[0].data = dataActualValue
  targetGraph.data.labels = dataYear
  targetGraph.options.legend.display = false
  targetGraph.update()
}

function setForecastGraph (targetGraph, forecastDataList) {
  /* use this object to stylize each line
		{
			label: 'Pendapatan',
			lineTension: 0,
			data: [10, 5, 15, 100],
			backgroundColor: 'rgba(0, 0, 0, 0)',
			borderColor: 'rgba(144, 249, 255, 1)',
			borderWidth: 3,
			pointHoverRadius: 3,
			pointRadius: 2 targetGraph.data.datasets[0].data = dataActualValue;
		}
	*/

  // check if no data
  if (forecastDataList == 'no forecast') {
    return
  }

  // set year
  targetGraph.data.labels = forecastDataList.forecastYear

  // set the data
  const dataGraphMinLine = {

    label: 'Ramalan Min',
    lineTension: 0,
    data: forecastDataList.forecastMin,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: 'rgba(249, 84, 84, 1)',
    borderWidth: 3,
    pointHoverRadius: 3,
    pointRadius: 2

  }

  const dataGraphMaxLine = {

    label: 'Ramalan Max',
    lineTension: 0,
    data: forecastDataList.forecastMax,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: 'rgba(0, 253, 68, 1)',
    borderWidth: 3,
    pointHoverRadius: 3,
    pointRadius: 2

  }

  const dataGraphAverageLine = {

    label: 'Ramalan Purata',
    lineTension: 0,
    data: forecastDataList.forecastAverage,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: 'rgba(0, 230, 255, 1)',
    borderWidth: 3,
    pointHoverRadius: 3,
    pointRadius: 2

  }

  // empty the dataset
  targetGraph.data.datasets = []

  // insert all the dataset
  targetGraph.data.datasets.push(dataGraphMinLine)
  targetGraph.data.datasets.push(dataGraphMaxLine)
  targetGraph.data.datasets.push(dataGraphAverageLine)

  targetGraph.update()
}

function setTable () {
  // simulate the chaging of zakat type input
  $('#JenisZakatGraph').trigger('change')
  $('#JenisZakatGraphEditForm').trigger('change')
}

function setActualTable (targetTable, actualDataList) {
  // reset table
  targetTable.find('tbody').text('')

  // setting up needed data
  const dataList = actualDataList.actualData
  const yearList = actualDataList.actualYear

  for (let i = 0; i < dataList.length; i++) {
    // setting data for the actual table
    const tdYear = '<td>' + yearList[i] + '</td>'
    const tdDataActual = '<td>' + dataList[i] + '</td>'

    const tableRow = '<tr>' + tdYear + tdDataActual + '</tr>'

    // append to table
    targetTable.find('tbody').append(tableRow)
  }
}

function setForecastTable (targetTable, forecastDataList) {
  // reset table
  targetTable.find('tbody').text('')

  if (forecastDataList == 'no forecast') {
    $.toast({
      text: 'Data tidak mencukupi untuk membuat ramalan',
      icon: 'info',
      hideAfter: 3000,
      allowToastClose: true,
      loaderBg: '#F6FA15',
      bgColor: '#212121',
      textColor: '#FFF',
      position: 'bottom-right'
    })
    return
  }

  const forecastDataLength = forecastDataList.forecastYear.length

  for (let i = 0; i < forecastDataLength; i++) {
    // setting data for the actual table
    const tdYear = '<td>' + forecastDataList.forecastYear[i] + '</td>'
    const tdDataMin = "<td class='bg-td-min'>" + forecastDataList.forecastMin[i] + '</td>'
    const tdDataMax = "<td class='bg-td-max'>" + forecastDataList.forecastMax[i] + '</td>'
    const tdDataAverage = "<td class='bg-td-average'>" + forecastDataList.forecastAverage[i] + '</td>'

    const tableRow = '<tr>' + tdYear + tdDataMin + tdDataAverage + tdDataMax + '</tr>'

    targetTable.find('tbody').append(tableRow)
  }
}

function setReportGraph (targetGraph, actualDataList, forecastDatalist) {
  // no data exist for particular zakat type
  if (actualDataList == undefined) {
    $.toast({
      text: 'data tidak wujud',
      icon: 'info',
      hideAfter: 5000,
      allowToastClose: true,
      loaderBg: '#F6FA15',
      bgColor: '#212121',
      textColor: '#FFF',
      position: 'bottom-right'
    })

    return
  }

  // set all the nessesary data
  let dataYear = actualDataList.actualYear
  const dataActualValue = actualDataList.actualData
  let dataForecastMin = []
  let dataForecastMax = []
  let dataForecastAverage = []

  // set the graph
  // empty the graph
  targetGraph.data.datasets = []

  // stylize the graph
  const dataGraphActualLine = {

    label: 'Nilai Sebenar',
    lineTension: 0,
    data: [],
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: 'rgba(0, 0, 0, 1)',
    borderWidth: 3,
    pointHoverRadius: 3,
    pointRadius: 2

  }
  const dataGraphMinLine = {

    label: 'Ramalan Min',
    lineTension: 0,
    data: [],
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: 'rgba(249, 84, 84, 1)',
    borderWidth: 3,
    pointHoverRadius: 3,
    pointRadius: 2

  }
  const dataGraphMaxLine = {

    label: 'Ramalan Max',
    lineTension: 0,
    data: [],
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: 'rgba(0, 253, 68, 1)',
    borderWidth: 3,
    pointHoverRadius: 3,
    pointRadius: 2

  }
  const dataGraphAverageLine = {

    label: 'Ramalan Purata',
    lineTension: 0,
    data: [],
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: 'rgba(0, 230, 255, 1)',
    borderWidth: 3,
    pointHoverRadius: 3,
    pointRadius: 2

  }

  targetGraph.data.datasets = [dataGraphActualLine, dataGraphMinLine, dataGraphMaxLine, dataGraphAverageLine]

  // for skip value
  for (let i = 0; i < dataActualValue.length - 1; i++) {
    dataForecastMin.push(NaN)
    dataForecastMax.push(NaN)
    dataForecastAverage.push(NaN)
  }

  dataForecastMin.push(dataActualValue[dataActualValue.length - 1])
  dataForecastMax.push(dataActualValue[dataActualValue.length - 1])
  dataForecastAverage.push(dataActualValue[dataActualValue.length - 1])

  // if there's no forecast no need to combine it with the already inserted
  if (forecastDatalist == 'no forecast') {
    targetGraph.data.labels = dataYear
    targetGraph.data.datasets[0].data = dataActualValue
    targetGraph.update()
    return
  }

  // combine forecast year
  dataYear = dataYear.concat(forecastDatalist.forecastYear)

  // combine all the data
  dataForecastMin = dataForecastMin.concat(forecastDatalist.forecastMin)
  dataForecastMax = dataForecastMax.concat(forecastDatalist.forecastMax)
  dataForecastAverage = dataForecastAverage.concat(forecastDatalist.forecastAverage)

  // set the graph
  targetGraph.data.datasets[0].data = dataActualValue
  targetGraph.data.datasets[1].data = dataForecastMin
  targetGraph.data.datasets[2].data = dataForecastMax
  targetGraph.data.datasets[3].data = dataForecastAverage
  targetGraph.data.labels = dataYear; targetGraph.data.datasets[0].data = dataActualValue
  targetGraph.update()

  /* insert the data
	targetGraph.data.datasets[0].data = dataActualValue;

	targetGraph.options.legend.display = false; */
}

function setReportTable (actualDataList, forecastDataList) {
  // refer the table
  const tableActual = $('#reportTableActual')
  const tableForecast = $('#reportTableForecast')

  // set actual table
  setActualTable(tableActual, actualDataList)

  // set forecast table
  setForecastTable(tableForecast, forecastDataList)
}

function liveUpdate () {
  $.ajax({

    type: 'POST',
    url: 'phphandler/liveUpdate.php',
    success: function (data) {
      // if 1 do update (mean something has changed)
      if (data[0] == '1') {
        getZakatGraphData()

        // automatically update the
        liveUpdate()
        setTable()
      }
    },
    error: function () {
      console.log("live update: can't connect to server")
    }

  })
}

/// //////////////////////////* needed functionality */////////////////////////////////////////

// function to get the perectile change of 2 numbers
function differenceChange (numberBefore, numberCurrent) {
  var difference = numberCurrent - numberBefore
  return difference / (numberCurrent + numberBefore) * 100
}

// function to calculate average (specify how many data, starting from the last in the parameter)
function calculateAverage (dataList, numData) {
  // get the first array starting from last
  var averageCountList = dataList.slice(dataList.length - numData, dataList.length)

  var sum = 0
  for (var i = 0; i < averageCountList.length; i++) {
    sum += averageCountList[i]
  }

  // return the average
  return sum / averageCountList.length
}

/// /////////////////* object class *///////////////////////

// the forecast will be put in corresponding array and have it's own min max average forecast
function ForecastData (forecastMin, forecastMax, forecastAverage, forecastYear) {
  this.forecastMin = forecastMin
  this.forecastMax = forecastMax
  this.forecastAverage = forecastAverage
  this.forecastYear = forecastYear
}

function actualData (actualData, actualYear) {
  this.actualData = actualData
  this.actualYear = actualYear
}

/// /////////////////////////* formula *///////////////////////
/* make sure all the formula function use array of actual data */
// formula 1
// this function will use the parameter(actual revenue) and return the an array of array (year forecast, max revenue forecast, min revenue forecast )
function calculateForecast (actualDataContainer) {
  const FORECAST_YEAR = 5
  const FORECAST_BASED_YEAR_AVERAGE = 5

  // check if the list is less than forecast based year
  var dataListCount = actualDataContainer.actualData.length

  // add 1 to case we need to find the difference on the first in th 5 years data list
  if (dataListCount < FORECAST_BASED_YEAR_AVERAGE + 1) {
    console.log('INFO: ' + 'data tidak mencukupi untuk ramalan zakat ' + actualDataContainer)
    return
  }

  // get the current year and forecast the next 5 years
  var currentYear = actualDataContainer.actualYear[dataListCount - 1]

  // list of data for object
  var forecastYear = []
  var forecastMax = []
  var forecastAverage = []
  var forecastMin = []

  // data needed to calculate forecast
  var revenuePercentileChange = []

  // for easy reference
  const actualData = actualDataContainer.actualData
  const yearData = actualDataContainer.actualYear

  var dataListFirstBasedYears = actualData.slice((actualData.length - 1) - FORECAST_BASED_YEAR_AVERAGE, actualData.length)

  // set the needed value for forecast (% change) average
  for (var i = 1; i < dataListFirstBasedYears.length; i++) {
    var percentileChange = differenceChange(parseFloat(dataListFirstBasedYears[i - 1]), parseFloat(dataListFirstBasedYears[i]))
    revenuePercentileChange.push(percentileChange)
  }

  // data needed for forecast calculation
  var currentYearRevenue = parseFloat(actualData[actualData.length - 1])
  var currentYearDifference = currentYearRevenue - parseFloat(actualData[actualData.length - 2])

  for (var i = 0; i < FORECAST_YEAR; i++) {
    // set up forecast year
    forecastYear.push((parseInt(currentYear) + 1 + i).toString())

    // forecast average
    var averagePercentileChange = calculateAverage(revenuePercentileChange, 5)
    var nextYearAverageForecast = ((currentYearRevenue * averagePercentileChange) / 100) + currentYearRevenue
    forecastAverage.push(parseFloat(nextYearAverageForecast).toFixed(2))

    // forecast min
    var nextYearMinForecast = ((currentYearRevenue * revenuePercentileChange[revenuePercentileChange.length - 1]) / 100) + currentYearRevenue
    forecastMin.push(parseFloat(nextYearMinForecast).toFixed(2))

    // forecast max
    var currentYearDifferencePercentile = (currentYearDifference / currentYearRevenue) * 100
    var nextYearMaxForecast = ((currentYearRevenue * currentYearDifferencePercentile) / 100) + currentYearRevenue
    forecastMax.push(parseFloat(nextYearMaxForecast).toFixed(2))

    revenuePercentileChange.push(differenceChange(currentYearRevenue, nextYearAverageForecast))
    currentYearDifference = nextYearAverageForecast - currentYearRevenue
    currentYearRevenue = nextYearAverageForecast
  }

  return [forecastYear, forecastAverage, forecastMin, forecastMax]
}
