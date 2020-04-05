function pieChart() {

	// Get series & print to pie_table
	var pieSeries = [];
	var sliced = false;
	var ci = 0;

	for ( var unit in gunstick['countR'] ) {
		// Print to pie_table
		var relF = Math.round ( 10000 * ( gunstick['countR'][unit] / gunstick['count']) ) / 100;
		var	row = "<tr id='" + unit + "' class='ptr'>"
		+ "<td><span style=\"color:" + Highcharts.getOptions().colors[ci] + "\">■ </span>" + unit + "</td>"
		+ "<td>" +  gunstick['countR'][unit] + "</td>"
		+ "<td>" +  relF +  "</td></tr>"; 
		$('#pieTab tr:last').after( row );
		ci++;
		if ( ci + 1 > Highcharts.getOptions().colors.length ) {
			ci = 0;
		}

		// Get series for Pie chart
		if ( sliced == false ) {
			pieSeries.push({ name: unit, id: unit, y: gunstick['countR'][unit], sliced: true, selected: true });
			sliced = true;
			defaultRhyme = unit;
			$('#pieTab tr:last').addClass( 'rowSelected' );
		} else {
			pieSeries.push({ name: unit, id: unit, y: gunstick['countR'][unit] });
		}
	}

	// Render chart
	$(function () {
		$('#hcPie').highcharts({
			chart: { plotBackgroundColor: null, plotBorderWidth: null, plotShadow: false },
			credits: {enabled: false},
			title: { text: pieTitle},
			tooltip: { pointFormat: pieToolTip},

			plotOptions: {
				pie: {
					cursor: 'pointer',
					allowPointSelect: true,
					point: {
						events: {
							// Unselect actions 
							unselect: function() {
								// Remove from area chart
								removeSeriesTime( this.name );
								removeSeriesCont( this.name );
								removeSeriesCent( this.name );
								// Remove from main table
								removeDataTable( this.name );
								// Unselect in pie_table
								$( '#' + this.name + '.ptr' ).removeClass('rowSelected');
								},
							// Select actions
							select: function() {
								// Add to time chart
								addSeriesTime( this.name, gunstick['countRY'][this.name], this.color, gunstick['aut_list'] );
								addSeriesCont( this.name, gunstick['countRCONT'][this.name], this.color, gunstick['cont_list'] );
								addSeriesCent( this.name, gunstick['countRCENT'][this.name], this.color, gunstick['cent_list'] );
								// Add to area chart
								addDataTable( this.name );
								// Select in pie_table
								$( '#' + this.name + '.ptr' ).addClass('rowSelected');
							}
						}
					}
				}
			},
			series: [{
				type: 'pie',
				data: pieSeries
			}]
		});
	});

}
