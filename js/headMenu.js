
// Popup submenu
$(document).ready(function() {

	$( "#head_menu_vyzkum" ).click(function() {
		var p = $( "#head_menu_vyzkum" ).position();
		$( "#head_submenu_horizontal" ).css("left", p.left);
		$( "#head_submenu_horizontal" ).slideToggle( );
	});
	
	$("#head_menu_popup_show").click(function() { 
		$( "#head_submenu_popup" ).hide( );
		$( "#head_menu_popup_slider" ).slideToggle( );
	});

	$("#head_menu_popup_vyzkum").click(function() { 
		$( "#head_submenu_popup" ).slideToggle( );
	});


});

$(document).click(function(e) {
	if ( !$(e.target).is("#head_submenu_horizontal") && !$(e.target).is("#head_menu_vyzkum") && $( "#head_submenu_horizontal" ).is(':visible') ) {
	  $( "#head_submenu_horizontal" ).slideUp( );
	}
});

// Handle menu scrolling
$(window).load(function () {
	$(document).scroll(function() {
		$("#head_menu_popup_slider").hide();
	    $( "#head_submenu_horizontal" ).slideUp( );

		if ( $(document).scrollTop() >= 120 ) {
			$( "#head_menu_horizontal" ).css({"-webkit-transform": "translateZ(0)"});
			$( "#head_menu_horizontal" ).css({"position": "fixed", "top": 0, left: 0, "width": "100%"});
		} else {
			$( "#head_menu_horizontal" ).css({"-webkit-transform": "none"});
			$( "#head_menu_horizontal" ).css({"position": "static", "width": "100%"});
		}
	});
});


// Encrypt m4I7
function po4ta(jm0no, dom2, dom1)
	{
	output = "<a hre" + "f='ma" + "ilt" + "o:" + jm0no + "@" + dom2 + "." + dom1 + "' style='border: 0'>" + jm0no + "@" + dom2 + "." + dom1 + "</a>";
	document.write(output);
	}
