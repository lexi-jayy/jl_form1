     // Load Charts and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Draw the pie chart for Sarah's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawRankChart);

      // Draw the pie chart for the Anthony's pizza when Charts is loaded.
      google.charts.setOnLoadCallback(drawPieChart);

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
          ['Public Speaking', 5],
          ['Heights', 7],
          ['Nachos', 6],
          ['Dentist', 3],
          ['Swimming', 7]
        ]);

        // Set options for Anthony's pie chart.
        var options = {title:'Ranked in the order of biggest fear',
                       width:400,
                       height:300};

        // Instantiate and draw the chart for Anthony's pizza.
        var chart = new google.visualization.BarChart(document.getElementById('rankchart_div'));
        chart.draw(data, options);
      }