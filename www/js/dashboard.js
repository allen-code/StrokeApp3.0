function draw_line() { 
	google.load('visualization', '1.0',{'packages':['corechart']});
	google.setOnLoadCallback(drawChart);

	function drawChart() {
		var data = google.visualization.arrayToDataTable([
		  ['Year', 'Sales', 'Expenses'],
		  ['2004',  1000,      400],
		  ['2005',  1170,      460],
		  ['2006',  660,       1120],
		  ['2007',  1030,      540]
		]);

		var options = {
		  title: 'Company Performance',
		  curveType: 'function',
		  legend: { position: 'bottom' }
	};

	var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

	chart.draw(data, options);

}