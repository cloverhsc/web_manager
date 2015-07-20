$(document).ready(function(){
/**                         Click on setting     in pc/tablet mode                             **/
	$('#nav #setting').click(function(event) {
		var $setDetail =$('#nav #setDetail');
		$setDetail.toggleClass('open');
		if($setDetail.hasClass('open'))
		{
			$(this).addClass('pseudo').stop(true).slideDown(300);
			$setDetail.stop(true).slideDown(300);
		}
		else
		{
			$setDetail.stop(true).slideUp(300);
			setTimeout(function(){$('#nav #setting').removeClass('pseudo');}, 300);
		}
		return false;
	});
}); //end ready