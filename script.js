$(document).ready(function(){
	$('#flip').hover(
       function(){ $(this).addClass('animated flip') },
       function(){ $(this).removeClass('animated flip') }
    );
};
