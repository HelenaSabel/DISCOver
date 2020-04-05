function areaChart(){

	$(function () {
		$('#hcTime').highcharts({
			chart: {type: 'column'},
		  credits: {enabled: false},
			title: { text: timeTitle},
			yAxis: {
				allowDecimals: false, 
				title: { text: timeYtitle } 
			}, 
			xAxis: {
				categories: gunstick['aut_list'],
				labels: {rotation: 270},
			},
			tooltip: { 
				shared: true, 
				crosshairs: true, 
				pointFormat: '<span style="color:{series.color}">■ </span>{series.name}: <b>{point.y}</b><br\>' 
			},
			plotOptions: {
				column: {           
					groupPadding: 0.5,   // Exactly overlap
					pointWidth: 20,                                     
				}
			},

		});
	});

	$(function () {
		$('#hcCont').highcharts({
			chart: {type: 'column'},
		  credits: {enabled: false},
			title: { text: timeTitle},
			yAxis: {
				allowDecimals: false, 
				title: { text: timeYtitle } 
			}, 
			xAxis: {
				categories: gunstick['cont_list'],
				labels: {rotation: 270},
			},
			tooltip: { 
				shared: true, 
				crosshairs: true, 
				pointFormat: '<span style="color:{series.color}">■ </span>{series.name}: <b>{point.y}</b><br\>' 
			},
			plotOptions: {
				column: {           
					groupPadding: 0.5,   // Exactly overlap
					pointWidth: 20,                                     
				}
			},
		});
	});

	$(function () {
		$('#hcCent').highcharts({
			chart: {type: 'column'},
		  credits: {enabled: false},
			title: { text: timeTitle},
			yAxis: {
				allowDecimals: false, 
				title: { text: timeYtitle } 
			}, 
			xAxis: {
				categories: gunstick['cent_list'],
				labels: {rotation: 270},
			},
			tooltip: { 
				shared: true, 
				crosshairs: true, 
				pointFormat: '<span style="color:{series.color}">■ </span>{series.name}: <b>{point.y}</b><br\>' 
			},
			plotOptions: {
				column: {           
					groupPadding: 0.5,   // Exactly overlap
					pointWidth: 20,                                     
				}
			},

		});
	});

}
