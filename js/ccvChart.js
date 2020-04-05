
rok = 1;
pocet = 2;

Highcharts.setOptions({
	lang: {
		numericSymbols: null,
		downloadJPEG: "Stáhnout obrázek JPEG",
		downloadPDF: "Stáhnout dokument PDF",
		downloadPNG: "Stáhnout obrázek PNG",
		downloadSVG: "Stáhnout vektorový obrázek SVG",
		contextButtonTitle: "Menu",
		decimalPoint: ",",
		loading: "Nahrávám...",
		printChart: "Vytisknout graf",
		rangeSelectorFrom: "Od",
		rangeSelectorTo: "Do",
		rangeSelectorZoom: "Přiblížit",
		resetZoom: "Zrušit přiblížení",
		resetZoomTitle: "Zrušit přiblížení 1:1",
		thousandsSep: " ",
		chart: { marginLeft: 0 },
		title: {  style: { color: '#2E9A49' } }
		}});

$(function () {
	$('#hcCorp').highcharts({
		chart: {type: 'bar', backgroundColor:'transparent',},
		legend: {enabled: false},
		title: {text: '', align: 'left', style:{ color: '#004D13' }},
		subtitle: {text: 'počet veršů | rok vydání', align: 'left', style:{ color: '#004D13' }},
		xAxis: {
			categories: 
				['1780-1789', '1790-1799', '1800-1809', '1810-1819', '1820-1829', '1830-1839', '1840-1849', '1850-1859', '1860-1869', '1870-1879', '1880-1889', '1890-1899', '1900-1909', '1910-1919', '1920-1929', '1930-1939', '1940-1949','1950-1959','1960-1969','1970-1979','1980-1989','1990-1999'],
      title: {text: null}},
		yAxis: {
			title: {enabled: false}},
    plotOptions: { series: { borderWidth: 0, point: { events: { update: function(event) {}}}}},
		credits: {enabled: false},
		series: [{
			name: 'Počet veršů',
			color: '#2E9A49',
			data: [4164, 9970, 16663, 15884, 39707, 66960, 62627, 68654, 75076, 177509, 353743, 432495, 402971, 325083, 279975, 215406, 45529, 31932, 23495, 10113, 4034, 1279]}]});
		// POČET BÁSNÍ
    $('#pocet_basni').click(function() {
				pocet = 1;	
				// + rok vydání
				if (rok == 1){
					newdata = [136, 201, 213, 242, 1205, 2078, 1787, 2493, 2599, 4748, 7736, 12137, 13595, 8943, 7505, 6923, 1591, 1352, 673, 199, 152, 26];
					$('#hcCorp').highcharts().series[0].remove();
					$('#hcCorp').highcharts().xAxis[0].setCategories(['1780-1789', '1790-1799', '1800-1809', '1810-1819', '1820-1829', '1830-1839', '1840-1849', '1850-1859', '1860-1869', '1870-1879', '1880-1889', '1890-1899', '1900-1909', '1910-1919', '1920-1929', '1930-1939', '1940-1949','1950-1959','1960-1969','1970-1979','1980-1989','1990-1999']);
					$('#hcCorp').highcharts().addSeries({data: newdata, color: '#2E9A49', name: 'počet básní'});
					$('#hcCorp').highcharts().setTitle(null, { text: "počet básní | rok vydání" } );}
				// + rok narození
				else{
					newdata = [117, 654, 850, 73, 2492, 2642, 2046, 1868, 7857, 7074, 13000, 15671, 13399, 6934, 743, 8];
					$('#hcCorp').highcharts().series[0].remove();
					$('#hcCorp').highcharts().xAxis[0].setCategories(['1750-1759', '1760-1769', '1770-1779', '1780-1789', '1790-1799', '1800-1809', '1810-1819', '1820-1829', '1830-1839', '1840-1849', '1850-1859', '1860-1869', '1870-1879', '1880-1889', '1890-1899', '1900-1909']);
					$('#hcCorp').highcharts().addSeries({data: newdata, color: '#2E9A49', name: 'počet básní'});
					$('#hcCorp').highcharts().setTitle(null, { text: "počet básní | rok narození autora" } );}
				document.getElementById('pocet_basni').innerHTML = '» Počet básní «';
				document.getElementById('pocet_versu').innerHTML = 'Počet veršů';
				document.getElementById('pocet_slov').innerHTML = 'Počet slov';
				});
		// POČET VERŠŮ
    $('#pocet_versu').click(function() {
				pocet = 2;	
				// + rok vydání
				if (rok == 1){
					newdata = [4164, 9970, 16663, 15884, 39707, 66960, 62627, 68654, 75076, 177509, 353743, 432495, 402971, 325083, 279975, 215406, 45529, 31932, 23495, 10113, 4034, 1279];
					$('#hcCorp').highcharts().series[0].remove();
					$('#hcCorp').highcharts().xAxis[0].setCategories(['1780-1789', '1790-1799', '1800-1809', '1810-1819', '1820-1829', '1830-1839', '1840-1849', '1850-1859', '1860-1869', '1870-1879', '1880-1889', '1890-1899', '1900-1909', '1910-1919', '1920-1929', '1930-1939', '1940-1949','1950-1959','1960-1969','1970-1979','1980-1989','1990-1999']);
					$('#hcCorp').highcharts().addSeries({data: newdata, color: '#2E9A49', name: 'počet veršů'});
					$('#hcCorp').highcharts().setTitle(null, { text: "počet veršů | rok vydání" } );}
				// + rok narození				
				else{
					newdata = [5500, 34443, 78145, 7873, 39421, 94102, 69407, 58051, 231703, 356692, 515415, 563278, 342525, 208628, 28827, 223];
					$('#hcCorp').highcharts().series[0].remove();
					$('#hcCorp').highcharts().xAxis[0].setCategories(['1750-1759', '1760-1769', '1770-1779', '1780-1789', '1790-1799', '1800-1809', '1810-1819', '1820-1829', '1830-1839', '1840-1849', '1850-1859', '1860-1869', '1870-1879', '1880-1889', '1890-1899', '1900-1909']);
					$('#hcCorp').highcharts().addSeries({data: newdata, color: '#2E9A49', name: 'počet veršů'});
					$('#hcCorp').highcharts().setTitle(null, { text: "počet veršů | rok narození autora" } );}
				document.getElementById('pocet_basni').innerHTML = 'Počet básní';
				document.getElementById('pocet_versu').innerHTML = '» Počet veršů «';
				document.getElementById('pocet_slov').innerHTML = 'Počet slov';
				});
		// POČET SLOV
    $('#pocet_slov').click(function() {
				pocet = 3;	
				// + rok vydání
				if (rok == 1){
					newdata = [18117, 44071, 77015, 85482, 222476, 336318, 303971, 349711, 379683, 892241, 1983597, 2491571, 2200991, 1850286, 1526823, 1185116, 250271, 171063, 135196, 54022, 20535, 5459];
					$('#hcCorp').highcharts().series[0].remove();
					$('#hcCorp').highcharts().xAxis[0].setCategories(['1780-1789', '1790-1799', '1800-1809', '1810-1819', '1820-1829', '1830-1839', '1840-1849', '1850-1859', '1860-1869', '1870-1879', '1880-1889', '1890-1899', '1900-1909', '1910-1919', '1920-1929', '1930-1939', '1940-1949','1950-1959','1960-1969','1970-1979','1980-1989','1990-1999']);
					$('#hcCorp').highcharts().addSeries({data: newdata, color: '#2E9A49', name: 'počet slov'});
					$('#hcCorp').highcharts().setTitle(null, { text: "počet slov | rok vydání" } );}
				// + rok narození
				else{
				newdata = [23968, 191934, 398712, 41184, 197630, 448504, 323607, 289709, 1209550, 1990798, 2896265, 3240792, 1859589, 1156099, 160629, 1069];
					$('#hcCorp').highcharts().series[0].remove();
					$('#hcCorp').highcharts().xAxis[0].setCategories(['1750-1759', '1760-1769', '1770-1779', '1780-1789', '1790-1799', '1800-1809', '1810-1819', '1820-1829', '1830-1839', '1840-1849', '1850-1859', '1860-1869', '1870-1879', '1880-1889', '1890-1899', '1900-1909']);
					$('#hcCorp').highcharts().addSeries({data: newdata, color: '#2E9A49', name: 'počet slov'});
					$('#hcCorp').highcharts().setTitle(null, { text: "počet slov | rok narození autora" } );}
				document.getElementById('pocet_basni').innerHTML = 'Počet básní';
				document.getElementById('pocet_versu').innerHTML = 'Počet veršů';
				document.getElementById('pocet_slov').innerHTML = '» Počet slov «';
				});
		// ROK VYDÁNÍ
    $('#rok_vydani').click(function() {
				rok = 1;	
				// + počet básní
				if (pocet == 1){
					newdata = [136, 201, 213, 242, 1205, 2078, 1787, 2493, 2599, 4748, 7736, 12137, 13595, 8943, 7505, 6923, 1591, 1352, 673, 199, 152, 26];
					$('#hcCorp').highcharts().series[0].remove();
					$('#hcCorp').highcharts().xAxis[0].setCategories(['1780-1789', '1790-1799', '1800-1809', '1810-1819', '1820-1829', '1830-1839', '1840-1849', '1850-1859', '1860-1869', '1870-1879', '1880-1889', '1890-1899', '1900-1909', '1910-1919', '1920-1929', '1930-1939', '1940-1949','1950-1959','1960-1969','1970-1979','1980-1989','1990-1999']);
					$('#hcCorp').highcharts().addSeries({data: newdata, color: '#2E9A49', name: 'počet básní'});
					$('#hcCorp').highcharts().setTitle(null, { text: "počet básní | rok vydání" } );}
				// + počet veršů
				if (pocet == 2){
					newdata = [4164, 9970, 16663, 15884, 39707, 66960, 62627, 68654, 75076, 177509, 353743, 432495, 402971, 325083, 279975, 215406, 45529, 31932, 23495, 10113, 4034, 1279];
					$('#hcCorp').highcharts().series[0].remove();
					$('#hcCorp').highcharts().xAxis[0].setCategories(['1780-1789', '1790-1799', '1800-1809', '1810-1819', '1820-1829', '1830-1839', '1840-1849', '1850-1859', '1860-1869', '1870-1879', '1880-1889', '1890-1899', '1900-1909', '1910-1919', '1920-1929', '1930-1939', '1940-1949','1950-1959','1960-1969','1970-1979','1980-1989','1990-1999']);
					$('#hcCorp').highcharts().addSeries({data: newdata, color: '#2E9A49', name: 'počet veršů'});
					$('#hcCorp').highcharts().setTitle(null, { text: "počet veršů | rok vydání" } );}
				// + počet slov
				if (pocet == 3){
					newdata = [18117, 44071, 77015, 85482, 222476, 336318, 303971, 349711, 379683, 892241, 1983597, 2491571, 2200991, 1850286, 1526823, 1185116, 250271, 171063, 135196, 54022, 20535, 5459];
					$('#hcCorp').highcharts().series[0].remove();
					$('#hcCorp').highcharts().xAxis[0].setCategories(['1780-1789', '1790-1799', '1800-1809', '1810-1819', '1820-1829', '1830-1839', '1840-1849', '1850-1859', '1860-1869', '1870-1879', '1880-1889', '1890-1899', '1900-1909', '1910-1919', '1920-1929', '1930-1939', '1940-1949','1950-1959','1960-1969','1970-1979','1980-1989','1990-1999']);
					$('#hcCorp').highcharts().addSeries({data: newdata, color: '#2E9A49', name: 'počet slov'});
					$('#hcCorp').highcharts().setTitle(null, { text: "počet slov | rok vydání" } );}
				document.getElementById('rok_vydani').innerHTML = '» Rok vydání «';
				document.getElementById('rok_narozeni').innerHTML = 'Rok narození autora';
				});
		// ROK NAROZENÍ
    $('#rok_narozeni').click(function() {
				rok = 2;	
				// + počet básní
				if (pocet == 1){
					newdata = [117, 654, 850, 73, 2492, 2642, 2046, 1868, 7857, 7074, 13000, 15671, 13399, 6934, 743, 8];
					$('#hcCorp').highcharts().series[0].remove();
					$('#hcCorp').highcharts().xAxis[0].setCategories(['1750-1759', '1760-1769', '1770-1779', '1780-1789', '1790-1799', '1800-1809', '1810-1819', '1820-1829', '1830-1839', '1840-1849', '1850-1859', '1860-1869', '1870-1879', '1880-1889', '1890-1899', '1900-1909']);
					$('#hcCorp').highcharts().addSeries({data: newdata, color: '#2E9A49', name: 'počet básní'});
					$('#hcCorp').highcharts().setTitle(null, { text: "počet básní | rok narození autora" } );}
				// + počet veršů
				if (pocet == 2){
				newdata = [5500, 34443, 78145, 7873, 39421, 94102, 69407, 58051, 231703, 356692, 515415, 563278, 342525, 208628, 28827, 223];
					$('#hcCorp').highcharts().series[0].remove();
					$('#hcCorp').highcharts().xAxis[0].setCategories(['1750-1759', '1760-1769', '1770-1779', '1780-1789', '1790-1799', '1800-1809', '1810-1819', '1820-1829', '1830-1839', '1840-1849', '1850-1859', '1860-1869', '1870-1879', '1880-1889', '1890-1899', '1900-1909']);
					$('#hcCorp').highcharts().addSeries({data: newdata, color: '#2E9A49', name: 'počet veršů'});
					$('#hcCorp').highcharts().setTitle(null, { text: "počet veršů | rok narození autora" } );}
				// + počet slov
				if (pocet == 3){
				newdata = [23968, 191934, 398712, 41184, 197630, 448504, 323607, 289709, 1209550, 1990798, 2896265, 3240792, 1859589, 1156099, 160629, 1069];
					$('#hcCorp').highcharts().series[0].remove();
					$('#hcCorp').highcharts().xAxis[0].setCategories(['1750-1759', '1760-1769', '1770-1779', '1780-1789', '1790-1799', '1800-1809', '1810-1819', '1820-1829', '1830-1839', '1840-1849', '1850-1859', '1860-1869', '1870-1879', '1880-1889', '1890-1899', '1900-1909']);
					$('#hcCorp').highcharts().addSeries({data: newdata, color: '#2E9A49', name: 'počet slov'});
					$('#hcCorp').highcharts().setTitle(null, { text: "počet slov | rok narození autora" } );}
				document.getElementById('rok_vydani').innerHTML = 'Rok vydání';
				document.getElementById('rok_narozeni').innerHTML = '» Rok narození autora «';
				});



});

