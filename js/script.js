     // Load Charts and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });

      // Draw the pie chart for Sarah's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawRankChart);

      // Draw the pie chart for the Anthony's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawPieChart);


      google.charts.setOnLoadCallback(drawRegionsMap);

      google.charts.setOnLoadCallback(drawLineChart);

      // Callback that draws the pie chart for Sarah's pizza.
      function drawPieChart() {

        // Create the data table for Sarah's pizza.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'creature');
        data.addColumn('number', 'votes');
        data.addRows([
          ["spider" , 2],
          ["snake" , 1],
          ["cow" , 0],
          ["shark" , 5],
          ["bear" , 1],
          ["mouse" , 1]
        ]);

        // Set options for Sarah's pie chart.
        var options = {title:'What is the scariest Creature',
                       width:400,
                       height:300};

        // Instantiate and draw the chart for Sarah's pizza.
        var chart = new google.visualization.PieChart(document.getElementById('piechart_div'));
        chart.draw(data, options);
      }

      // Callback that draws the pie chart for Anthony's pizza.
      function drawRankChart() {

        // Create the data table for Anthony's pizza.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Rank in order of fear');
        data.addColumn('number', 'peoples biggest fear');
        data.addRows([
          ['Swimming', 7],
          ['Heights', 7],
          ['Nachos', 6],
          ['Public Speaking', 5],
          ['Dentist', 3]
        ]);

        // Set options for Anthony's pie chart.
        var options = {title:'Ranked in the order of biggest fear',
                       width:500,
                       height:300};

        // Instantiate and draw the chart for Anthony's pizza.
        var chart = new google.visualization.BarChart(document.getElementById('rankchart_div'));
        chart.draw(data, options);
      }


      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'votes'],
          ['China', 10],
          ['Philippines', 15],
          ['Brazil', 26],
          ['United States', 38],
          ['Syria', 14],
          ['Bulgaria', 12],
          ['Turkey', 1]
          ]);

        var options = {
          title: 'Scariest Country',
          width:500,
          height:300
        };

        var chart = new google.visualization.GeoChart(document.getElementById('Regions_div'));

        chart.draw(data, options);
      }



      function drawLineChart() {
        var data = google.visualization.arrayToDataTable([

          ['options', 'money', 'choices'],
          ['Never I am way to scared', 0, 2],
          ['Ill do it for $10', 10, 2],
          ['you would have to give me at least $20', 20, 2],
          ['you would have to give me atleast $30', 30, 1],
          ['you would have to give me $40', 40, 3]
          ]);

        var options = {
          title: 'Trapped in a dark room with a creature',
          curveType: 'function',
          legend: { position: 'bottom'},
          width:500,
          height:300
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }
















