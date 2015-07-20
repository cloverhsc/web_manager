$(document).ready(function(){
/**  -------------------- form validation -------------------------**/
	$('#signup').validate({
		rules:{
			email: {
				required:true,
				email : true
			},
			password : 'required'
		}, // end of rules
		messages: {
			email:{
				required:"請輸入電子信箱。"	
			},
			password:{
				required:"請輸入密碼。"
			}
		}
	});// end of signup validation
/*===========================================*/

/**-------------------------- show login box ----------------------- **/
	$('.login , #login').click(function(){

		// get  login href  
		var  login_box = $(this).attr('href');

		//fade in login box
		$(login_box).fadeIn(300);

		//set the center 
		
		var popMargTop = ($(login_box).height()+12)/2;
		var popMargLeft = ($(login_box).width()+12)/2;
		
		$(login_box).css({
			'margin-top': -popMargTop,
			'margin-left': -popMargLeft
		});
		

		$('#mask').fadeIn(300);
		return false;	
	});	// end of click login 
	
	$('#mask , #close_buttom').click(function(event) {
		$('#LoginBox , #mask').fadeOut(300,function(){
			$('#mask').hide();
		});
		return false;
	});
/*==================================================================*/
});// end ready