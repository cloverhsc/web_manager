$(document).ready(function(){
	$("#channel_1").buttonset();
	$("#channel_2").buttonset();
	$(".SoundRange").slider({
		max:100,
		min:0,
		value:80
	});
});	// end of ready