<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="HandheldFriendly" content="true" />
    <meta name="viewport" content="width=device-width, height=device-height, user-scalable=no" />
    <title>DISCOver trends</title>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/jquery.tokeninput.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
   <!-- <script src="js/menu.js"></script>-->
    <link rel="stylesheet" href="css/main.css" type="text/css"/>

    <style>
        .charts {
            min-width: 310px;
            max-width: 800px;
            height: 400px;
            margin: 0 auto
        }
        #container-poor {
            margin-bottom: 2%;
        }
    </style>
</head>
<body>

<!--#include virtual="ssi/menu.html"-->

<main>


    <?php
    // Include PHP functions
    include "php/functions.php";
    // Connect the database
    $dbh = connect_db();
    ?>
    
    
    <h1>DISCO<span>ver</span> trends</h1>

    <div class="charts" id="container-poor"></div>
    <div class="charts" id="container-rhymes"></div>

    <script type="text/javascript">

    // Plot values to the chart
    function plot_values(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        response = JSON.parse(this.responseText);
        console.log(response);
        for (var t in response){
            chart.addSeries({name: t, data: response[t]});

        }
    }
    };
    xmlhttp.open("GET", "php/charts2.php", true);
    xmlhttp.send();
    }



    function plot_chart(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
                console.log(response);
                for (var t in response){
                    chart2.addSeries({name: t, data: response[t]});

                }
            }
        };
        xmlhttp.open("GET", "php/chartOther.php", true);
        xmlhttp.send();
    }



    // After DOM ready...
    $(document).ready(function() {


        plot_values();
        plot_chart();
    });



    chart = new Highcharts.Chart({
        chart: { type: "line", renderTo: 'container-poor', },
        title: {
            text: 'Poor rhymes'
        },

        credits: { enabled: false },

        xAxis: { title: { text: "Century" }, categories: [15, 16, 17, 18, 19, 20 ] },


        yAxis: {
            title: {
                text: 'Relative frequency'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 15
            }
        },

        series: [],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });


    chart2 = new Highcharts.Chart({
        chart: { type: "line", renderTo: 'container-rhymes', },
        title: {
            text: 'Tercet rhymes'
        },

        credits: { enabled: false },

        xAxis: { title: { text: "Century" }, categories: [15, 16, 17, 18, 19, 20 ] },


        yAxis: {
            title: {
                text: 'Relative frequency'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 15
            }
        },

        series: [],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });



    </script>

</main>
<!--#include virtual="ssi/footer.html"-->

</body>
</html>