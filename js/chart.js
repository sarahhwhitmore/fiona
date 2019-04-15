// CONTEXT: where the chart goes
		var ctx = $("#myChart")[0].getContext('2d');

		// DATA
		var chartData1 = [125, 199, 36, 59, 123, 87];
		var chartData2 = [35, 99, 126, 139, 103, 177];

		// X AXIS LABELS
		var chartLabelsX = ["Birth", "3 months", "6 months", "9 months", "1 year", "2 years"];

		// CHART
		var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: chartLabelsX,
				datasets: [{
					label: "Team 1",
					data: chartData1,
					fill: false,
					borderColor: '#c1705e',
					lineTension: 0
				},
				{
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true,
							callback: function (value, index, values) {
								return '$' + value;
							}
						}
					}]
				},
				responsive: true,
				legend: {
					display: false
				}
			}
		});

		var updateChart = function addData(chart, label, data1, data2) {
			chartLabelsX.push(label);
			chartData1.push(data1);
			chartData2.push(data2);
			//
			chart.update();
		};

		// Enable button
		$('#btn1').on('click', function() {
			updateChart(myChart, "G", rand(50,300), rand(50,300));
		});

		// Generate a random value between a min and max
		var rand = function(min, max) {
			var num = min + ( Math.round ( Math.random() * ( max - min ) ) );
			return num;
		}
