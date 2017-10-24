// ChibaMedicalCheckup //////////////////////////
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(ChibaMedicalCheckup_drawStuff_department);
google.charts.setOnLoadCallback(ChibaMedicalCheckup_drawStuff_grade);
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(USPresidentialElection2016_respondents);
google.charts.setOnLoadCallback(HumanFace_tripartition);
google.charts.setOnLoadCallback(ChibaMedicalCheckup_drawChart_gender);
google.charts.setOnLoadCallback(ChibaMedicalCheckup_drawChart_1);
google.charts.setOnLoadCallback(ChibaMedicalCheckup_drawChart_2);


// USPresidentialElection2016 //////////////////////////
function USPresidentialElection2016_respondents() {

  // DataTableを使用
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Respondents');
  data.addColumn('number', 'UNLV');
  data.addColumn('number', 'Web');
  data.addColumn('number', 'Default input');
  data.addRows([
    ['Type of the respondents', 70, 35, 12]
  ]);

  // arrayToDataTableを使用
  // var data = google.visualization.arrayToDataTable([
  //   ['City', '2010 Population','2011 Population'],
  //   ['New York City, NY', 810, 450]
  // ]);

  var options = {
    title: '回答者の分類',
    // trueにすると積み上げ棒グラフになる
    isStacked: true,
    legend: {position: 'top'},
    //colors: ['#cceae7', '#99d5cf', '#66c0b7', '#32ab9f', '#009688'],
    //colors: ['#A8E6CE', '#DCEDC2', '#FFD3B5', '#FFAAA6', '#FF8C94'],
    colors: ['#99B898', '#FECEAB', '#FF847C', '#E84A5F', '#2A363B'],
    //colors: ['#A8A7A7', '#CC527A', '#E8175D', '#474747', '#363636'],
    animation: {
      duration: 2000,
      easing: 'out',
      startup: true
    }
  };

  var chart = new google.visualization.BarChart(document.getElementById('USPresidentialElection2016_respondents'));

  chart.draw(data, options);
}
//////////////////////////////////////////////


// HumanFaceClassification ///////////////////
function HumanFace_tripartition() {
  var data = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['A',     57],
    ['B',      39],
    ['C',      25]
  ]);

  var options = {
    title: 'タイプ',
    pieHole: 0.4,
    colors: ['#ee4035', '#0392cf', '#696969']
  };

  var chart = new google.visualization.PieChart(document.getElementById('HumanFace_tripartition'));
  chart.draw(data, options);
}
//////////////////////////////////////////////


// ChibaMedicalCheckup //////////////////////////
function ChibaMedicalCheckup_drawChart_gender() {
  var data = google.visualization.arrayToDataTable([
    ['Gender', 'Count'],
    ['男性',     73],
    ['女性',      74],
    ['答えたくない',      7]
  ]);

  var options = {
    title: '性別',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart_gender'));
  chart.draw(data, options);
}


function ChibaMedicalCheckup_drawStuff_department() {
  var data = new google.visualization.arrayToDataTable([
    ['所属', '人数'],
    ['国際教養', 8],
    ['文学', 9],
    ['法政経', 15],
    ['教育', 14],
    ['理学', 15],
    ['工学', 45],
    ['看護', 12],
    ['薬学', 11],
    ['医学', 12],
    ['園芸', 7],
    ['その他', 6]
  ]);

  var options = {
    width: 450,
    chart: {
      title: '学部・研究科',
//      subtitle: 'distance on the left, brightness on the right'
    },
    bars: 'horizontal', // Required for Material Bar Charts.
    series: {
//      0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
//      1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
    },
    axes: {
      x: {
        count: {label: '人数'}, // Bottom x-axis.
  //      brightness: {side: 'top', label: 'apparent magnitude'} // Top x-axis.
      }
    }
  };

var chart = new google.charts.Bar(document.getElementById('dual_x_div_department'));
chart.draw(data, options);
};


function ChibaMedicalCheckup_drawStuff_grade() {
        var data = new google.visualization.arrayToDataTable([
          ['学年', '人数'],
          ['１年', 39],
          ['２年', 23],
          ['３年', 14],
          ['４年', 25],
          ['５年', 0],
          ['６年', 3],
          ['修士', 26],
          ['博士', 20],
          ['それ以外', 4]
        ]);

        var options = {
          width: 450,
          chart: {
            title: '学年',
//            subtitle: 'distance on the left, brightness on the right'
          },
          bars: 'horizontal', // Required for Material Bar Charts.
          series: {
//            0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
//            1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
          },
          axes: {
            x: {
//              distance: {label: '人数'}, // Bottom x-axis.
//              brightness: {side: 'top', label: 'apparent magnitude'} // Top x-axis.
            }
          }
        };

      var chart = new google.charts.Bar(document.getElementById('dual_x_div_grade'));
      chart.draw(data, options);
    };


function ChibaMedicalCheckup_drawChart_1() {
  var data = google.visualization.arrayToDataTable([
    ['Answer', '人数'],
    ['Yes',     48],
    ['No',      106]
  ]);

  var options = {
    title: 'Q2-1. 保健管理施設を健康診断以外で利用したことはありますか？',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart_1'));
  chart.draw(data, options);
}


function ChibaMedicalCheckup_drawChart_2() {
  var data = google.visualization.arrayToDataTable([
    ['Answer', 'Hours per Day'],
    ['Yes',     138],
    ['No',      16]
  ]);

  var options = {
    title: 'Q3-1. 前回の定期健康診断を受診しましたか？',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart_2'));
  chart.draw(data, options);
}
//////////////////////////////////////////////
