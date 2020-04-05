function responsive()
	{
	// Get screen width
	var screenWidth = $(window).width();
	$("#head_submenu_horizontal, #head_menu_popup_slider, #head_submenu_popup").hide();
	//alert(screenWidth);

	// Content margin	
	if ( screenWidth < 500 ) {
		$(".content").css("margin", "20px 5px 5px 5px");
	} else {
		$(".content").css("margin", "20px 20px 20px 20px");
	}

	// Header: team + institute
	if ( screenWidth > 850)	{ 
		$("#head_books_small").hide();
		$("#head_books").show();
		$("#head_team_title").css("fontSize", "36px").show();
		$("#head_institute_title").css("fontSize", "20px").show();
		$("#head_team_title_small").hide();
		$("#head_institute_title_small").hide();
	}	else if ( screenWidth > 650) {
		$("#head_books_small").hide();
		$("#head_books").show();
		$("#head_team_title").css("fontSize", "20px").show();
		$("#head_institute_title").css("fontSize", "18px").show();
		$("#head_team_title_small").hide();
		$("#head_institute_title_small").hide();
	} else {
		$("#head_books_small").show();
		$("#head_books").hide();
		$("#head_team_title").hide();
		$("#head_institute_title").hide();
		$("#head_team_title_small").show();
		$("#head_institute_title_small").show();
	}

	// Header: menu
	if ( screenWidth > 700)	{ 
		$("#head_menu_full").show();
		$("#head_menu_popup").hide();
	}	else {
		$("#head_menu_full").hide();
		$("#head_menu_popup").show();
	}

	// Footer
	if ( screenWidth < 800 ) {
		$(".footer_container").css({"width": "auto", "float": "none" });
		$("#container_bottom_1, #container_bottom_2").css({ "borderRight": 0, "borderBottom": "1px solid #a6a6a6" });
	}	else {
		$(".footer_container").css({"width": "33%", "float": "left" });
		$("#container_bottom_1, #container_bottom_2").css({ "borderRight": "1px solid #a6a6a6", "borderBottom": 0 });
	}	

	// Container left-right
	if ( document.getElementById('container_right') ) {
		if (screenWidth < 600) {		
			$("#container_right, #container_left").css({ "float": "none", "height": "auto", "width": "auto" });
			$('#container_tweets').css({"height": "100px"}).show();
			$("#lastNews").hide();
			$( "#twitter-more" ).show();
		} else {
			$("#container_right").css({ "float": "right", "height": "auto", "width": "30%" });
			$("#container_left").css({ "float": "left", "height": "auto", "width": "68%" });

			var newHeight = $("#container_left").height();
			$("#container_right").height(newHeight);
			$('#container_tweets').css("height", "100%").show();
			$("#lastNews").show();
			$( "#twitter-more" ).hide();
		}
	}

	// Swiping content
	swiping();

/*

//----------------------------------------
//   CONTAINER FULL
//----------------------------------------

		// Upravit ĹˇĂ­Ĺ™ku panelĹŻ s nĂˇstroji
	if ( document.getElementById('container_full') )
		{
		if (document.getElementById("container_full").offsetWidth > 700)
			{		
			var newWidth = (document.getElementById("container_full").offsetWidth - 66) / 3;
			}
		else if (document.getElementById("container_full").offsetWidth > 500)
			{		
			var newWidth = (document.getElementById("container_full").offsetWidth - 46) / 2;
			}
		else
			{		
			var newWidth = (document.getElementById("container_full").offsetWidth - 22);
			}
		newLeft = newWidth/2 - 25;
		$(".slider_tools").css("width", newWidth);
		$(".rotating-text").css("width", newWidth);
		$(".rotating-logo").css("left", newLeft);
		$("#rotating-item-wrapper").css("width", newWidth);
		}

	// SlovnĂ­ky > tabulka	
	if (head_width < 400 && $(".tabulka_slovniky"))
		{
		$(".tabulka_slovniky td").css("padding", "0 0 0 0");
		}
	else if ($(".tabulka_slovniky"))
		{
		$(".tabulka_slovniky td").css("padding", "5px 20px 5px 10px");
		}

	// Gunstick > tabulka	
	if ( $("#mainframe_gunstick_tabulka") )
		{
		if ( $("#mainframe_gunstick_tabulka").width() < $(".sortable").width() )
			{
			new_width = $(".sortable").width() + 10;
			$("#mainframe_gunstick_tabulka").css("min-width", new_width);
			}
		}

	// Hokus > tabulka	
	if ( $("#tabulka_hokus") )
		{
		if ( $("#tabulka_hokus").width() < $(".sortable").width() )
			{
			new_width = $(".sortable").width() + 10;
			$("#tabulka_hokus").css("min-width", new_width);
			}
		}

	// Profily > roky
	if ( $(".year") )
		{
		nl = 0;		

		$('.job').each(function()
			{
			if ( $(this).width() > head_width - 120 )
				{ nl = 1;}    
			});

		if (nl == 0)
			{
			$(".year").css("float", "left");
			}

		else
			{
			$(".year").css("float", "none");
			}	
		}

	// PĹ™ehled odbornĂ© ÄŤinnosti
	if ( $(".prehled_oc") )
		{		
		new_height = $(".prehled_oc").width() * 10 / 7;
		$(".prehled_oc").css("height", new_height );
		}

*/

	$(".responsiveEl2").show();
}


function swiping(){
	if ( $( ".table_container" ).length ) {
		$('.swiper').remove();
		$( ".table_container" ).each(function( index, element ) {
			child_width = Math.max.apply(Math, $(this).children().map(function(){ return $(this).actual('width'); }).get());
			parent_width = $(this).actual('width');
			if ( child_width > parent_width ) {
				$("<img/>").prependTo(this).attr({
					 src: '../img/ico/swipe.png',
					 height: '30',
					 style:  'margin-top: 5px;',
					 class: 'swiper'
				});
			} 
		});
	}
}

