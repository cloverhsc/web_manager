$(document).ready(function(){
	$(".no2-stream").buttonset();
	$(".resolution-opt").buttonset();
	$(".compress-format").buttonset();
	$(".fps-rate").buttonset();
	$(".qulity-opt").buttonset();
	$(".image-qulity-bar").slider({
		max:100,
		min:0,
		value:80
	});
	$(".image-qulity-bar").draggable();
});	// end of ready