
<html>
<head>

<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<meta name="HandheldFriendly" content="true" />
<meta name="viewport" content="width=device-width, height=device-height, user-scalable=no" />

<title>Rhyme DISCOrdance</title>

<link rel="stylesheet" href="css/style.css" type="text/css" />
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="icon" href="img/favicon.ico" type="image/x-icon">
<script src="js/jquery-1.10.1.min.js"></script>
<script src="js/headMenu.js"></script>
<script src="js/googleAnalytics.js"></script>
<script src="js/sorttable.js"></script>
<script src="js/highcharts.js"></script>
<script src="js/highcharts-exporting.js"></script>
<script src="js/jquery.actual.min.js"></script>
<script src="js/responsive.js"></script>

	<script src="js/menu.js"></script>
  <link rel="stylesheet" href="css/remodal.css">
  <link rel="stylesheet" href="css/remodal-default-theme.css">
  <link rel="stylesheet" href="css/gunstick.css">
	<link rel="stylesheet" href="css/main.css" type="text/css"/>
	<script src="js/remodal.js"></script>
	<script src="js/pieChart.js"></script>
	<script src="js/areaChart.js"></script>
	<script src="js/mainTable.js"></script>
</head>

<body onload="responsive()" onresize="responsive()">

<!--#include virtual="ssi/menu.html"-->

<main>

<?php include "php/processQuery.php"; ?>

<!-- Mainframe -->

<div class="mainframe oversize">

	<!-- Container -->
	<div class="container_full">

		<!-- Page title -->
		<h1> <?php echo $_GET['q']; ?> </h1>

		<!-- Tool summary -->
		<div class="toolSummary">
			<span class="typeTokenSummary">
				# R.TOKEN: <?php echo $gunstick['count']; ?> | 
				# R.TYPE: <?php echo count( $gunstick['countR'] ); ?>
			</span>   
		</div>

		<!-- Page path -->
		<div class="spacer"></div>

		<!-- Content -->
		<div class="content">


			<p style="padding-left: 1%">This resource replicates <a href="http://versologie.cz/v2/tool_gunstick" target="_blank">Gunstick</a>, the rhyme database and related tools developed
				by the <a href="http://www.versologie.cz/en/" target="_blank">Versologie</a> research group.</p>

		<div style='text-align: right; margin-right: 27px'>
			<button onClick="$('.areaChartContainer').hide(); $('#hcTime').show();">Authors</button>
			<button onClick="$('.areaChartContainer').hide(); $('#hcCont').show();">Continents</button>
			<button onClick="$('.areaChartContainer').hide(); $('#hcCent').show();">Centuries</button>
		</div>


		<!-- CHART CONTAINERS 1 ( pie, time ) -->
		<div id="charts1" class="multipleCharts">
			<!-- Pie chart -->
			<div id="hcPie" class="chartContainer" style="position:relative"></div>
			<!-- Pie chart_table -->
			<div id="hcPie_tab" class="chartContainer" style="position:relative; display:none; text-align: center">
				<h2 class="pieTabHeading"><?php echo $_GET['q'] . ' :: ' . _('rhyme representation'); ?></h2>
				<table id="pieTab" class="toolTab">
					<tr>
						<th><?php echo _("Rhyme"); ?></th>
						<th><?php echo _("# poems"); ?></th>
						<th>%</th>
					</tr>
				</table>
			</div>
			<!-- Time chart -->
			<div style='display: inline-block; width: 50%'>
				<div id="hcTime" class="chartContainer areaChartContainer" style='overflow-x:hidden'></div>
				<div id="hcCont" class="chartContainer areaChartContainer" style='display:none; overflow-x:hidden'></div>
				<div id="hcCent" class="chartContainer areaChartContainer" style='display:none; overflow-x:hidden'></div>
			</div>
		</div>
		<div class="spacer" ></div>
 
		<!-- TABLE -->
		<div class="table_container">
			<table class="sortable toolTab" id="mainTab">
				<tr>
					<th>Rhyme</th>
					<th>Line 1 (call)</th>
					<th>Line 2 (echo)</th>
					<th>Author</th>
					<th>Work</th>
					<th>Century</th>
				</tr>
			</table>
		</div>

		<div class="spacer"></div>

	</div>
	<div class="spacer" ></div>
</div>

<!--   ============================= JS ============================= -->

<script>
// Get data
var gunstick = <?php echo json_encode($gunstick); ?>;

// Min & Max for charts
var timeLimitLow = 1395;
var timeLimitHigh = 1700;

// Highcharts options
Highcharts.setOptions({
	lang: {
		decimalPoint: ",",
		thousandsSep: ""
	}
});

// Pie chart
var pieTitle = "<?php echo $_GET['q'] . ' :: ' . _('rhyme representation'); ?>";
var pieToolTip = "<?php echo _('Number of poems'); ?>: <b>{point.y}</b>";
var defaultRhyme;
pieChart();

// Area chart
var timeTitle = "<?php echo $_GET['q'] . ' :: ' . _('rhyme representation (per author)'); ?>";
var timeTitle2 = "<?php echo $_GET['q'] . ' :: ' . _('rhyme representation (per origin)'); ?>";
var timeTitle3 = "<?php echo $_GET['q'] . ' :: ' . _('rhyme representation (per century)'); ?>";
var timeYtitle = '<?php echo _("Number of poems"); ?>';
areaChart();

// Main table
var bookLinkTitle = "";
mainTable();


</script>
<script src="js/functions.js"></script>


	</main>

	<!--#include virtual="ssi/footer.html"-->



</body>
</html>



