// CONTEXT: where the chart goes
var ctx = $("#myChart")[0].getContext('2d');

// DATA
var chartData1 = [29, 181, 400, 550];
var chartData2 = [75, 250, 460, 560];

// X AXIS LABELS
var chartLabelsX = ["Birth", "3 months", "6 months", "9 months"];

// CHART
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: chartLabelsX,
    datasets: [{
        label: "Fiona",
        data: chartData1,
        fill: false,
        borderColor: '#005259',
        pointRadius: 5,
        hoverPointRadius: 5,
        lineTension: 0
      },
      {
        label: "Full-term hippo",
        data: chartData2,
				fill: false,
        borderColor: '#DCDCDC',
        pointRadius: 5,
        hoverPointRadius: 5,
				lineTension: 0
      }
    ]
  },
  options: {
	  legend: {
	    display: false
	  },
    elements: {
      point : {
        pointStyle: 'circle',
        fill: true
      }
    },
		tooltips: {
      displayColors: false,
      backgroundColor: '#5C5C5C'
    }
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        callback: function(value, index, values) {
          return value + 'lbs';
        }
      }
    }]
  },
  responsive: true
});

// var updateChart = function addData(chart, label, data1, data2) {
// 	chartLabelsX.push(label);
// 	chartData1.push(data1);
// 	chartData2.push(data2);
// 	//
// 	chart.update();
// };
