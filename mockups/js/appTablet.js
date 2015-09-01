$(document).ready( function(){

	if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
	{
	    $('body').addClass('firefox');
	    jQuery('#toolMenu,#sites').bind('mousewheel', function(event) {
         	event.preventDefault();
         	var scrollTop = this.scrollTop;
         	this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
       	});
	}

	$('.uncollapsed', '#toolMenu').click(function(){
		$('body').toggleClass('collapsed_tools');
	});

	$('.uncollapsed', '#sites').click(function(){
		$('body').toggleClass('collapsed_sites');
	});
});