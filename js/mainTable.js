function mainTable() {

	for ( var rhyme in gunstick['table'] ) {
		for ( var i in gunstick['table'][rhyme] ) {
			var obj = gunstick['table'][rhyme][i];
			var row = "<tr class='" + rhyme + " mtc'>"
			+ "<td sorttable_customkey='" + gunstick['sorting']['pair'][rhyme] + "'>" + rhyme + "</td>"
			+ "<td sorttable_customkey='" + gunstick['sorting']['line1'][ obj['line1'] ] + "'>" + obj['line1'] + "</td>"
			+ "<td sorttable_customkey='" + gunstick['sorting']['line2'][ obj['line2'] ] + "'>" + obj['line2'] + "</td>"
			+ "<td sorttable_customkey='" + gunstick['sorting']['author'][ obj['author'] ] + "'>" + obj['author'] + "</a></td>"
			+ "<td sorttable_customkey='" + gunstick['sorting']['poemName'][ obj['poemName'] ] + "'><a href='showpoem.php?id=" + obj['poemID'] + "'>" + obj['poemName'] + "</a></td>"
			//+ "<td sorttable_customkey='" + gunstick['sorting']['bookName'][ obj['bookName'] ] + "'>" + obj['bookName']
			/*+ "<div style='float:right'> <a href='http://www.ceska-poezie.cz/cek/sbirka/?id=" + obj['bookId'] + "' target=_blank>" + bookLinkTitle + "</div></td>"*/
			+ "<td sorttable_customkey='" + obj['year'] + "'>" + obj['year'] + "</td>"
			//+ "<td sorttable_customkey='" + obj['ending'] + "'>" + obj['ending'] + "</td>"
			+ "</tr>"; 
			$('#mainTab tr:last').after( row );
		}
	}
}
