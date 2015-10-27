google.load('visualization', '1', {packages: ['corechart', 'line']});
google.setOnLoadCallback(drawDay);
google.setOnLoadCallback(drawWeek);
google.setOnLoadCallback(drawMonth);


var monthRows = [
    [0, 34],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
    [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
    [12, 30], [13, 23], [14, 42], [15, 12], [16, 15], [17, 10],
    [18, 9], [19, 15], [20, 17]
];
var weekRows = [
    [0, 10],   [1, 9],  [2, 15],  [3, 17]
];
var dayRows = [
      [0, 10],   [1, 9],  [2, 15],  [3, 17]
];

function drawMonth() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Index');

  data.addRows(monthRows);

  var options = {
    legend: 'none',
    curveType: 'function',
    pointSize: 5,

    hAxis: {
      minValue: 0, maxValue: 30,
      title: 'Day',
      gridlines: { count: 6 }
    },
    vAxis: {
      minValue: 0, maxValue: 50,
      title: 'Unsteadiness',
      baseline: 15,
      baselineColor: '#d3362d'

    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_month'));

  chart.draw(data, options);
}

function drawWeek() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Week');
  data.addColumn('number', 'Index');

  data.addRows(weekRows);


  var options = {
    legend: 'none',
    curveType: 'function',
    pointSize: 5,
    hAxis: {
      title: 'Day',
      minValue: 0, maxValue: 7,
      gridlines: { count: 7 } 
    },
    vAxis: {
      minValue: 0, maxValue: 50,      
      title: 'Unsteadiness',
      baseline: 15,
      baselineColor: '#d3362d'
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_week'));

  chart.draw(data, options);
}

function drawDay() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Day');
  data.addColumn('number', 'Index');

  data.addRows(dayRows);

  var options = {
    legend: 'none',
    curveType: 'function',
    pointSize: 5,
    hAxis: {
      title: 'Day',
      minValue: 0, maxValue: 3,
    },
    vAxis: {
      title: 'Unsteadiness',
      baseline: 15
    }
  };
  var chart = new google.visualization.LineChart(document.getElementById('chart_day'));

  chart.draw(data, options);
}

function addrows(){
  var testResult = 16*Math.abs(document.getElementById('justfortest').innerHTML);
  monthRows.push([monthRows.length, testResult]);
  weekRows.push([weekRows.length,testResult]);

  dayRows.push([dayRows.length,88])
  drawMonth();
  drawWeek();
  //alert(testResult);
}
