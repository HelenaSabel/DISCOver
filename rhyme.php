
<html>
<head>

<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta name="HandheldFriendly" content="true" />
<meta name="viewport" content="width=device-width, height=device-height, user-scalable=no" />

<title>DISCOver rhyme</title>

<link rel="stylesheet" href="css/style.css" type="text/css" />
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="icon" href="img/favicon.ico" type="image/x-icon">
	<script src="js/menu.js"></script>
<script src="js/jquery-1.10.1.min.js"></script>
<script src="js/headMenu.js"></script>
<script src="js/googleAnalytics.js"></script>
<script src="js/sorttable.js"></script>
<script src="js/highcharts.js"></script>
<script src="js/highcharts-exporting.js"></script>
<script src="js/jquery.actual.min.js"></script>
<script src="js/responsive.js"></script>


  <link rel="stylesheet" href="css/remodal.css">
  <link rel="stylesheet" href="css/remodal-default-theme.css">
  <link rel="stylesheet" href="css/gunstick.css">	
	<script src="js/remodal.js"></script>
	<script src="js/pieChart.js"></script>
	<script src="js/areaChart.js"></script>
	<script src="js/mainTable.js"></script>

	<link rel="stylesheet" href="css/token-input.css" type="text/css" />
	<script src="js/jquery.tokeninput.js"></script>
	<link rel="stylesheet" href="css/main.css" type="text/css"/>
</head>

<body onload="responsive()" onresize="responsive()">
<!--#include virtual="ssi/menu.html"-->

<main>

<!-- Autocomplete authors data -->
<?php
	// Connect DB

	// Get author's indexes

?>

<div class="mainframe">

	<!-- Container -->
	<div class="container_full">

		<!-- Page title -->
		<h1>Rhyme database</h1>
		<p style="padding-left: 1%">This resource replicates <a href="http://versologie.cz/v2/tool_gunstick" target="_blank">Gunstick</a>, the rhyme database and related tools developed
			by the <a href="http://www.versologie.cz/en/" target="_blank">Versologie</a> research group.</p>
		<div class="spacer"></div>

		<!-- Content -->
		<div class="content">
	

		<!-- Query container -->
		<div class="query_container">
			<img id="loader" src="img/loader.gif">
			<div class="errorMsg"> <?php echo $_GET['msg']; ?> </div>
			<form class="query_form" action="result.php" method="get" style="text-align: center; padding-top: 20px">

				<table>
					<tr>
						<td><b>Rhyme word:</b> </td>
						<td>	<input type="text" name="q" maxlength="30">
									<input onclick="mouseWheel()" type="submit" value="Search" ></td>

					</tr><tr><td><p><div style="height: 10px"></td></td>				
					</tr><tr><td><p><div style="height: 10px"></td></td>
					</tr><tr>
						<td><b>Century: </b></td>
						<td>From: <input type="number" min="15" max="20" name="y1" style="width: 70px" maxlength="4">
							To: <input type="number" min="15" max="20" name="y2" style="width: 70px" maxlength="4">
					</tr><tr>
					<td><b>Author: </b></td>
	       	<td><input type="text" id="aut" name="aut" /></td>
				</tr>
			</table>

        <script type="text/javascript">
					// Get authors list
					var authors = <?php echo json_encode($authors); ?>;
					// Push to autoselect
		      $(document).ready(function() {
		          $("#aut").tokenInput( authors );
		      });
        </script>



				<div class="spacer"></div>
			</form>

		</div>



</main>

<!--#include virtual="ssi/footer.html"-->

	
</body>
</html>

<script>
function mouseWheel(){
	$(".query_form").css("visibility", "hidden");
	$("#loader").show();
}
</script>


