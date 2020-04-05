function coverageChart() {

	// Get series data
	var coveSeries = [];
	var sizeSeries = [];
	for ( var year = timeLimitLow; year <= timeLimitHigh; year++ ) {
		if (typeof gunstick['coverage'][year] === 'undefined') {
			coveSeries.push([year, 0]);
			sizeSeries.push([year, 0]);
		} else {
			coveSeries.push([year, gunstick['coverage'][year] ]);
			sizeSeries.push([year, gunstick['dataSize'][year] ]);
		}
	}

	// Coverage chart
	$(function () {
		$('#hcCover').highcharts({
			chart: {type: 'area'},
		  credits: {enabled: false},
			legend: { enabled: false},
			title: { text: coverTitle },
			yAxis: {allowDecimals: false, 
				title: { text: 'PPM' } 
			}, 
			tooltip: { shared: true, crosshairs: true, pointFormat: '<b>{point.y}</b><br\>' },
			plotOptions: { 
				area: { 
					pointStart: timeLimitLow, marker: { 
						enabled: false,
						symbol: 'circle',
						radius: 2,
						states: {
							hover: {
								enabled: true
							}
						}
					}
				}
			},
			series: [{
				data: coveSeries
			}]
		});
	});

	// Size chart
	$(function () {
		$('#hcSize').highcharts({
			chart: {type: 'area'},
		  credits: {enabled: false},
			legend: { enabled: false},
			title: { text: sizeTitle},
			yAxis: {
				allowDecimals: false, 
				title: { text: sizeYtitle } 
			}, 
			tooltip: { shared: true, crosshairs: true, pointFormat: '<b>{point.y}</b><br\>' },
			plotOptions: { 
				area: { 
					pointStart: timeLimitLow, marker: { 
						enabled: false,
						symbol: 'circle',
						radius: 2,
						states: {
							hover: {
								enabled: true
							}
						}
					}
				}
			},
			series: [{
				data: sizeSeries
			}]
		});
	});

}
