$(document).ready(function(){
	var $MTimeZone = $("#manualTimeZone");
	var $label = $(".manual label");
	var $select = $("select");
	var $auto =$("#auto");
	$select.timezones(); /*timezone*/

	/* if select auto timing,timezone and date function  then 
		unselect manual timezone. or on the contrary  */

	//first we disabled time zone select
	$select.prop('disabled',true);


	$auto.click(function(){
	   if ($auto.is(":checked"))
	   {
		$MTimeZone.css('color',"");
		$label.css("color","");
		$select.css("color","").prop('disabled',true);
	   }
	   else
	   {
		$MTimeZone.css('color','#757575');
		$label.css("color","#69a0d6");
		$select.css("color","#69a0d6").prop('disabled',false);
	   }	
	});
});