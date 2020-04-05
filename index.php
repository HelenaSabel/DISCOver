<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="HandheldFriendly" content="true" />
	<meta name="viewport" content="width=device-width, height=device-height, user-scalable=no" />
	<title>corpus DISCO</title>
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="icon" href="img/favicon.ico" type="image/x-icon">
	<script src="js/jquery-3.3.1.min.js"></script>
  	<script src="js/jquery.tokeninput.js"></script>
  	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
  <!--	<link rel="stylesheet" href="css/jquery-ui.css">-->
	<link rel="stylesheet" href="css/token-input.css" type="text/css" />
	<link rel="stylesheet" href="css/main.css" type="text/css"/>
	<script src="js/menu.js"></script>
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

	<!-- Checkboxes for gender -->
	<div class="controlgroup">
		 <span class="filter-label">Gender:</span> <?php form_genders($dbh); ?>
	</div>

	<!-- Checkboxes for continents -->
	<div class="controlgroup">
		<span class="filter-label">Origin:</span> <?php form_continents($dbh); ?>
	</div>

	<!-- Checkboxes for centuries -->
	<div class="controlgroup">
		<span class="filter-label">Century:</span> <?php form_centuries($dbh); ?>
	</div>

	<!-- Input for author names -->

<p class="input">
    <label for="aut" class="filter-label">Author(s):</label>
<input type="text" id="aut" name="aut" placeholder="author"/>


	<!-- Submit button -->
	<button id='submit' class='jquiButton'>SUBMIT</button>
</p>
	<!-- Container for results -->

	<div class="container_results">

	<div id='container'></div>
	<!-- De/select all button -->
	<button onClick='checkMultipleBoxes("checkBoxPoem")' id='checkAllButton' class='jquiButton'>DE/SELECT ALL</button>

	<!-- Plot selected button -->
	<button onClick='actionSelectedPoems("plot")' class='jquiButton' id='plotSelectedButton'>PLOT SELECTED</button>

	<!-- Name selected data -->
	<input type='text' id='curveName' class='jquiButton' placeholder="name the data"/>

	<!-- Show selected button -->
	<button onClick='actionSelectedPoems("text")' class='jquiButton' id='showSelectedButton'>SHOW SELECTED TEXTS</button>
	</div>

	<!-- Container for results -->
	<div class="container_results">
		<div class="chart_container" id='containerChart'></div>
		<div class="chart_container" id='containerChart2'></div>
		<div class="chart_container" id='containerChart3'></div>
		<!--<div class="chart_container" id='containerChart5'></div>-->
		<div class="chart_container" id='containerChart4'></div>
		<button onClick='$(".chart_container").hide();$("#containerChart").show();' class='jquiButton'>STRESS</button>
		<button onClick='$(".chart_container").hide();$("#containerChart2").show();' class='jquiButton'>RHYME (Q)</button>
		<button onClick='$(".chart_container").hide();$("#containerChart3").show();' class='jquiButton'>RHYME (T)</button>
	<!--	<button onClick='$(".chart_container").hide();$("#containerChart5").show();' class='jquiButton'>RHYME N (T)</button>-->
		<button onClick='$(".chart_container").hide();$("#containerChart4").show();' class='jquiButton'>ENJAMBMENT</button>
	</div>

	<div class="push"/>
	</main>

	<!--#include virtual="ssi/footer.html"-->



</body>


<script type="text/javascript">

	// Prevent turning off all checkboxes in one group
	$(function () {
		$('input[class^="filterButton"]').click(function () {
			if ($('input:checked', $(this).parent()).length === 0) {
				return false;
			}
		});
	});

	// Add some nice look by Jquery-ui
	$( function() {
		$( ".controlgroup" ).controlgroup();
		$( ".controlgroup-vertical" ).controlgroup({
			"direction": "vertical"
		});
		$(".jquiButton").button();
	});

	// Container for selected gender and continent values
	var selectedGenderIds = [];
	var selectedContinentIds = [];
	var selectedCenturyIds = [];

	// Load selected values from gender buttons
	function getGenderVals(){
		checkedVals= $('.filterButtonGender:checkbox:checked').map(function() {
			return Number(this.value);
		}).get();
		selectedGenderIds = (checkedVals);
	}

	// Load selected values from continent buttons
	function getContinentVals(){
		checkedVals= $('.filterButtonContinent:checkbox:checked').map(function() {
			return Number(this.value);
		}).get();
		selectedContinentIds = (checkedVals);
	}

	// Load selected values from centuries buttons
	function getCenturyVals(){
		checkedVals= $('.filterButtonCentury:checkbox:checked').map(function() {
			return Number(this.value);
		}).get();
		selectedCenturyIds = (checkedVals);
	}
	
	// Load values from input, build SQL query and call PHP script
	function submitQuery(){
		$('#checkAllButton').show();
		selectedAuthorIds = $("#aut").tokenInput('get').map(a => a.id);
		selectedCenturyIds = $('.filterButtonCentury:checkbox:checked').map(function() {
			return Number(this.value);
		}).get();
		query = 'SELECT author_id FROM authors WHERE death_century IN (' +  selectedCenturyIds.join(',') +') AND '
				+ 'gender_id IN (' + selectedGenderIds + ') AND '
				+ 'birth_continent_id IN (' + selectedContinentIds + ') ';
		if (selectedAuthorIds.length !== 0){
			query += 'AND author_id IN (' + selectedAuthorIds + ')';
		}
		response = _ajaxRequest(query, "php/query.php");
		//plot_values(query, 'a', 'selection');
	}

	// ... call PHP script and print the results
	function _ajaxRequest(query, file){
		var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
				print_table_of_content(response);
            }
        };
        xmlhttp.open("GET", file + "?q=" + query, true);
        xmlhttp.send();
	}

	// ... print the results as table of content
	function print_table_of_content(response){
		$('#container').empty();
		for (var i in response){
			var author = response[i]['author'].split('#')[1]
			var poemIds = Object.keys(response[i]['data']['poems']).join(',')

			$('#container').append('<span class="author">' + author + "</span>");
			$('#container').append(' <a href="showpoem.php?id=' + poemIds + '" class="showPoemButton" target="_blank">[text]</a>');
			$('#container').append('<a href="javascript:void(0)" class="plotPoemButton" '
				+ 'onClick="plot_values(\'' + poemIds + '\', \'p\', \'' + author + '\')">[plot]</a>');
			$('#container').append('<a href="javascript:void(0)" class="checkAuthorsPoems" onclick="checkMultipleBoxes(\'auth' 
				+ i + '\')">[de/select all]</a>');
			$('#container').append('<br/><span class="birth">(*' + response[i]['data']['metadata']['birth'] + "</span>");
			$('#container').append('<span class="death">†' + response[i]['data']['metadata']['death'] + "</span>");
			$('#container').append('<span class="continent">@' + response[i]['data']['metadata']['continent'] + ")</span>");


			for (var p in response[i]['data']['poems']){
				$('#container').append('<div class="poem">' + response[i]['data']['poems'][p]

					+ ' <a href="javascript:void(0)" class="plotPoemButton" '
					+ 'onClick="plot_values(' + p + ', \'p\', \'' + response[i]['data']['poems'][p] + '\')">[plot]</a>'

					+ '<a href="showpoem.php?id=' + p + '" class="showPoemButton" target="_blank">[text]</a>'
					+ '<input type="checkbox" class="checkboxPoem auth' + i + '" value="' + p + '"/>'
		
					+ '</div>');

			}	
		}


		$('.checkboxPoem, #checkAllButton, .checkAuthorsPoems').click(function(){
			if ( $('.checkboxPoem:checked').length > 0 ){
				$('#plotSelectedButton').show();
				$('#curveName').show();
				$('#showSelectedButton').show();
			} else {
				$('#plotSelectedButton').hide();
				$('#curveName').hide();
				$('#showSelectedButton').hide();
			}
		});


	}

	// Select or deselect poems checkboxes according to specified class (author||all)
	function checkMultipleBoxes(a){
		if ($('.'+a+':checked').length != $('.'+a).length) {
			$('.'+a).prop("checked", true);
		} else {
			$('.'+a).prop("checked", false);
		}
	}

	//

	// Plot values to the chart
	function plot_values(query, query_type, name_){
		var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
				console.log(response);
				chart.addSeries({name: name_, data: response['stressProfile']});
				chart2.xAxis[0].setCategories(response['schemes']['categories']);
				chart2.addSeries({name: name_, data: response['schemes']['data']});
				chart3.xAxis[0].setCategories(response['schemesT']['categories']);
				chart3.addSeries({name: name_, data: response['schemesT']['data']});
				/*chart5.xAxis[0].setCategories(response['tercets']['categories']);
				chart5.addSeries({name: name_, data: response['tercets']['data']});*/
				chart4.xAxis[0].setCategories(response['enjambment']['categories']);
				chart4.addSeries({name: name_, data: response['enjambment']['data']});
            }
        };
        xmlhttp.open("GET", "php/chart.php?q=" + query + '&t=' + query_type, true);
        xmlhttp.send();		
	}

	// Apply function (plot/text) to selecte poems
	function actionSelectedPoems(action){
		checkedVals= $('.checkboxPoem:checkbox:checked').map(function() {
			return Number(this.value);
		}).get();
		selectedPoems = (checkedVals);
		if (action == 'plot'){
			if ( $('#curveName').val().length > 0 ){
				var curveName = $('#curveName').val();
			} else {
				var curveName = 'selection';
			}
			plot_values( selectedPoems.join(','), 'p', curveName);
		} else if (action == 'text'){
			var url = 'showpoem.php?id=' + selectedPoems.join(',');
			window.open(url,'_blank');
		}
	}

	// After DOM ready...
    $(document).ready(function() {

		// Load initial values for gender and continent
		getGenderVals()
		getContinentVals()
		getCenturyVals()

		// Load values for gender and continent on click
	    $('.filterButtonGender').click(getGenderVals);
	    $('.filterButtonContinent').click(getContinentVals);
	    $('.filterButtonCentury').click(getCenturyVals);

		// Initialize autocomplete authors list
		$("#aut").tokenInput( <?php form_authors($dbh); ?>, { 
			preventDuplicates: true,
			resultsLimit: 30,
			onResult: function (results) {
				results_new = [];
				$.each(results, function (index, value) {
					if ( selectedGenderIds.includes(value.gender_id) 
					&&   selectedContinentIds.includes(value.continent_id)
					&&   selectedCenturyIds.includes(value.century_id) ){
						results_new.push(value);
					}
				});
				return results_new;
			}
		});

		// Show table of content when submit button is clicked
		$('#submit').click(submitQuery);

		// Plot the values for entire corpus on page load
		plot_values("0", "0", 'corpus');
	});

	// Line chart
	chart = new Highcharts.Chart({
		chart: { type: "line", renderTo: 'containerChart', },
		plotOptions: { line: { events: { legendItemClick: function () { this.remove(true); return false; } } } },
		xAxis: { title: { text: "Syllable" }, categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] },
		yAxis: { title: { text: "Frequency as stressed" } },
		credits: { enabled: false },
		subtitle: { text: "" },
		series: [],
		legend: { enabled: true },
		title: { text: ""}
	});

	// Bar chart quatrain
	chart2 = new Highcharts.Chart({
		chart: { type: "bar", renderTo: 'containerChart2', },
		plotOptions: { bar: { events: { legendItemClick: function () { this.remove(true); return false; } } } },
		xAxis: { title: { text: "" } },
		yAxis: { title: { text: "" } },
		credits: { enabled: false },
		subtitle: { text: "" },
		series: [],
		legend: { enabled: true },
		title: { text: ""}
	});

	// Bar chart tercets
	chart3 = new Highcharts.Chart({
		chart: { type: "bar", renderTo: 'containerChart3', },
		plotOptions: { bar: { events: { legendItemClick: function () { this.remove(true); return false; } } } },
		xAxis: { title: { text: "" } },
		yAxis: { title: { text: "" } },
		credits: { enabled: false },
		subtitle: { text: "" },
		series: [],
		legend: { enabled: true },
		title: { text: ""}
	});


/*	//Bar chart rhymes tercets

	chart5 = new Highcharts.Chart({
		chart: { type: "bar", renderTo: 'containerChart5', },
		plotOptions: { bar: { events: { legendItemClick: function () { this.remove(true); return false; } } } },
		xAxis: { title: { text: "" } },
		yAxis: { title: { text: "" } },
		credits: { enabled: false },
		subtitle: { text: "" },
		series: [],
		legend: { enabled: true },
		title: { text: ""}
	});*/


	// Bar chart enjamb
	chart4 = new Highcharts.Chart({
		chart: { type: "bar", renderTo: 'containerChart4', },
		plotOptions: { bar: { events: { legendItemClick: function () { this.remove(true); return false; } } } },
		xAxis: { title: { text: "" } },
		yAxis: { title: { text: "" } },
		credits: { enabled: false },
		subtitle: { text: "" },
		series: [],
		legend: { enabled: true },
		title: { text: ""}
	});


</script>

