<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="HandheldFriendly" content="true" />
	<meta name="viewport" content="width=device-width, height=device-height, user-scalable=no" />
	<title>DISCO - text edition</title>
	<script src="js/jquery-3.3.1.min.js"></script>
  	<script src="js/jquery.tokeninput.js"></script>
  	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="icon" href="img/favicon.ico" type="image/x-icon">
	<script src="js/menu.js"></script>
	<link rel="stylesheet" href="css/main.css" type="text/css"/>
  	<link rel="stylesheet" href="css/jquery-ui.css">
	<link rel="stylesheet" href="css/token-input.css" type="text/css" />

	<script src="js/view-elements.js" type="text/javascript"></script>
	<script src="js/tooltip.js" type="text/javascript"></script>
</head>


<body">
<!--#include virtual="ssi/menu.html"-->
<main>

	<div
		class="reading-menu">
		<h3>Prosodic elements</h3>
		<input
			type="checkbox"
			id="rhyme"
			value="rhyme"
			name="menu" autocomplete="off"/><label
			for="rhyme">Rhyme scheme</label>
		<input
			type="checkbox"
			id="rhythm"
			value="rhythm"
			name="menu" autocomplete="off"/><label
			for="rhythm">Metrical scheme (stressed syllables)</label>
		<input
			type="checkbox"
			id="enjamb"
			value="enjamb"
			name="menu" autocomplete="off"/><label
			for="enjamb">Enjambement</label>
	</div>

	<?php
	// Include PHP functions
	include "php/functions.php";
	// Connect the database
	$dbh = connect_db();

	$poems = array();
	
	//definition of queries 



	setlocale(LC_ALL,'spanish');
	uksort($poems, 'strcoll');

	foreach ($poems as $key => $val){
		
		//echo the contents
		}

	


	?>

</main>

	<!--#include virtual="ssi/footer.html"-->

</body>
</html>
