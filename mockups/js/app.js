$(document).ready( function(){


	var lastScrollTop = 0;
	
	$(document).on( 'scroll', function( event ){
		var st = $(this).scrollTop();
		if( st < lastScrollTop || st < 96 ){
			$('#navigation_mobile').removeClass('showing');
			$('#chat').removeClass('showing');
			$('#sakai_header').removeClass('showing');
		}else{
			$('#navigation_mobile').addClass('showing');
			$('#chat').addClass('showing');
			$('#sakai_header').addClass('showing');
		}
	    lastScrollTop = st;
	});

	var show_sites = function(){
		$('#sites').toggleClass('showed');
		$('#toolMenu').removeClass('showed');
		$('#div_overlay').show();
	};

	var show_tools = function(){
		$('#sites').removeClass('showed');
		$('#toolMenu').toggleClass('showed');
		$('#div_overlay').show();
	};

	$('#div_overlay').click(function(){
		$('#sites').removeClass('showed');
		$('#toolMenu').removeClass('showed');
        $('#div_overlay').hide();
	});

	$('#toggler_sites').click( show_sites );

	$('#toggler_tools').click( show_tools );

	$(document).swipe( {
	   allowPageScroll: 'vertical',
       swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
         if( direction == 'right' ){
         	if( $('#toolMenu').hasClass('showed') ){
         		$('#toolMenu').removeClass('showed');
         		$('#div_overlay').hide();
         	}else{
         		show_sites();
         	}

         }else if ( direction == 'left' ){
         	if( $('#sites').hasClass('showed') ){
         	    $('#sites').removeClass('showed');
         	    $('#div_overlay').hide();
         	}else{
	         	show_tools();
	         }
         }
       }
     });

	var warn = function(){
		$('#avisos').addClass('showed');
	};

	var t = setTimeout(warn, 2000);

	$('#avisos').click( function(){
		$('#overlay_notify').show();
		$('#avisos').hide();
	} );

	$('#overlay_notify').click( function(){
		$(this).fadeOut('slow');
	} );

});