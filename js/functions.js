
	// Pie_tab click function
	$('.ptr').click(function(e) {
		// If click without CTRL || SHIFT
		if ( e.shiftKey != 1 && e.ctrlKey != 1 ) {
			// Remove highlight from all other rows
			$( 'tr' ).removeClass('rowSelected');
			// Deselect all points in pie (causing removal of all series in time chart)
			var selectedPoints = $('#hcPie').highcharts().getSelectedPoints();
			selectedPoints[0].select();
		}

		// Add highlight to selected row 
		$(this).addClass('rowSelected');
		// Select point in pie (causing addition of series in time chart)
		$('#hcPie').highcharts().get( $(this).attr('id') ).select(true, true);
	});

	// Add series to Time chart
	function addSeriesTime( rhyme, src, color, aut_list ) {
		var data = [];
		for (  var i in aut_list ) {
			if (typeof src[aut_list[i]] === 'undefined') {
				data.push(0);
			} else {
				data.push(src[aut_list[i]]);
			}
		}
		$('#hcTime').highcharts().addSeries({name: rhyme, id: rhyme, data: data, color: hexToRgbA(color)});
	}

	// Add series to Continent chart
	function addSeriesCont( rhyme, src, color, cont_list ) {
		var data = [];
		for (  var i in cont_list ) {
			if (typeof src[cont_list[i]] === 'undefined') {
				data.push(0);
			} else {
				data.push(src[cont_list[i]]);
			}
		}
		$('#hcCont').highcharts().addSeries({name: rhyme, id: rhyme, data: data, color: hexToRgbA(color)});
	}

	// Add series to Century chart
	function addSeriesCent( rhyme, src, color, cent_list ) {
		var data = [];
		for (  var i in cent_list ) {
			if (typeof src[cent_list[i]] === 'undefined') {
				data.push(0);
			} else {
				data.push(src[cent_list[i]]);
			}
		}
		$('#hcCent').highcharts().addSeries({name: rhyme, id: rhyme, data: data, color: hexToRgbA(color)});
	}


	// Remove series from Time chart
	function removeSeriesTime( rhyme ) {
		$('#hcTime').highcharts().get( rhyme ).remove();
	}

	// Remove series from Continent chart
	function removeSeriesCont( rhyme ) {
		$('#hcCont').highcharts().get( rhyme ).remove();
	}

	// Remove series from Continent chart
	function removeSeriesCent( rhyme ) {
		$('#hcCent').highcharts().get( rhyme ).remove();
	}


	// Add data to table
	function addDataTable( rhyme ) {
		$("tr.mtc." + rhyme).show();
	}

	// Remove data from table
	function removeDataTable( rhyme ) {
		$("tr.mtc." + rhyme).hide();
	}

	function hexToRgbA(hex){
		var c;
		if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
		    c= hex.substring(1).split('');
		    if(c.length== 3){
		        c= [c[0], c[0], c[1], c[1], c[2], c[2]];
		    }
		    c= '0x'+c.join('');
		    return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.7)';
		}
		throw new Error('Bad Hex');
	}

	//----------------------------------
	// DOCUMENT.READY ACTIONS
	//----------------------------------

	$( document ).ready(function() {

		// Add total area to Time chart
		addSeriesTime( "Σ", gunstick['countY'], '#CCCCCC', gunstick['aut_list'] ); 
		addSeriesCont( "Σ", gunstick['countCONT'], '#CCCCCC', gunstick['cont_list'] ); 
		addSeriesCent( "Σ", gunstick['countCENT'], '#CCCCCC', gunstick['cent_list'] ); 

		// Add default rhyme to Time chart
		addSeriesTime( defaultRhyme, gunstick['countRY'][defaultRhyme], Highcharts.getOptions().colors[0], gunstick['aut_list'] ); 
		addSeriesCont( defaultRhyme, gunstick['countRCONT'][defaultRhyme], Highcharts.getOptions().colors[0], gunstick['cont_list'] ); 
		addSeriesCent( defaultRhyme, gunstick['countRCENT'][defaultRhyme], Highcharts.getOptions().colors[0], gunstick['cent_list'] ); 

		//console.log(gunstick['countCONT']);

		// Add default rhyme to table
		addDataTable( defaultRhyme ); 

		// Add pie-tab switcher
		$('#hcPie').append('<div class="tabPieSwitchers"><img src="img/ico/chart.png" class="dead"><img src="img/ico/table.png" id="switchTab" class="alive"></div>');
		$('#hcPie_tab').append('<div class="tabPieSwitchers"><img src="img/ico/chart.png" id="switchPie" class="alive"><img src="img/ico/table.png" class="dead"></div>');
		$('#switchTab').click(function() {
			$('#hcPie').hide();
			$('#hcPie_tab').show();
		});
		$('#switchPie').click(function() {
			$('#hcPie').show();
			$('#hcPie_tab').hide();
		});

		//
		$('#coverageSwitcher').click(function() {
			$('#charts2').slideToggle();
			if ($('#coverageSwitcher:contains("[+]")').length > 0) {
				$('#coverageSwitcher').html( switcherA );
			} else {
				$('#coverageSwitcher').html( switcherB );
			}
		});

	});

