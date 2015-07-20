$(document).ready(function(){

	var  $phone_nav=$('#phone-nav');			//global variable
	var  $phone_nav_list=$('#phone-nav-list');		//global variable

	var navScroll = new IScroll('.wrapper',{
		preventDefault:true,
		click:true
	});

/*************************************************************/
	/*Any event of  open or expend/stack phone-nav-list  will
	Recount phone-nav-list height  and do some caculate with
	phone-nav  hieght. So iscroll can see all selections(li) when 
	phone-nav-list  expend or  stack .
	*/
	function reCountNavH(){
		$phone_nav_list.css({ height : '' });
		var new_nav_listH= $phone_nav_list.height() - ($phone_nav.height()/ 2);
		//setting phone-nav-list height for iscroll boundary
		$phone_nav_list.css({ height: new_nav_listH});
		setTimeout(function(){
			navScroll.refresh();
		},300);
	}
/****************************************************************/

/***************************************************************/
	/*
		toggle nav slide function, It will recount scroll height.
		Parameter :
			$target:  use slidetoggle target.
			time: slideup /down  animate time(ms)
	*/
	function NavSlideToggle($target , time){
		/*console.log("NavSlideToggle");*/
		$target.toggleClass('open');
		if($target.hasClass('open'))
		{
			$target.stop(true).slideDown(time);
			setTimeout(reCountNavH, time);
		}
		else
		{
			$target.stop(true).slideUp(time);
			setTimeout(reCountNavH, time);
		}
	}
/****************************************************************/
	
	reCountNavH();  	// initial scroll nav height

	//do click to show nav
	$('#phone-nav-icon').click(function(){
		$phone_nav.toggleClass('open');

		if($phone_nav.hasClass('open'))
		{
			$phone_nav.stop(true).animate({
				left : '0px'
			},
				300,
				'linear'
			);	// end animate 

			$(this).stop(true).animate({
				left : '51%'
			},
				300,
				'linear'
			);
		}
		else
		{
			$phone_nav.stop(true).animate({
				left : '-50%'
			},
				300,
				'linear'
			);
			$(this).stop(true).animate({
				left : '10px'
			},
				300,
				'linear'
			);
		}
	});// end phone nav icon 
/** -------------------- submit login -------------------------------**/
	
	//PC,Tablet  user buttom
/*	commit for testing. login form need back-end  python program. */
/*
	var UserButtom1='<li id="HRx_account_buttom"><img src="icon/photo.png">';
	var UserButtom2='<a href="#" id="account_name">CloverHscCloverHsc</a>';
	var UserButtom3='<ul id="AccountAndLogout"><li><a href="#">設定帳號資料</a></li>';
	var UserButtom4='<li><a href="#">登出</a></li></ul></li>';
	var HighRxUserButtom=UserButtom1 + UserButtom2 + UserButtom3 + UserButtom4;	

	//mobile user buttom
	var UserButtom1='<li id="LRx_account_buttom"><img src="icon/photo.png">';
	var UserButtom2='<a href="#" id="account_name">CloverHscCloverHsc</a>';
	var UserButtom3='<ul id="AccountAndLogout"><li><a href="#">設定帳號資料</a></li>';
	var UserButtom4='<li><a href="#">登出</a></li></ul></li>';
	var LowRxUserButtom=UserButtom1 + UserButtom2 + UserButtom3 + UserButtom4;

	$('.sigin #submit').click(function(event) {
		$('#header #LoginButtom').remove();		//PC,Tablet  login buttom
		$('#phone-nav #LoginButtom').remove();	//mobile login buttom

		$('#header #nav ul').append(HighRxUserButtom);	//PC ,tablet mode
		$('#phone-nav #phone-nav-list').append(LowRxUserButtom);	//mobile mode
		reCountNavH();

		//close login box and mask
		$('#LoginBox , #mask').fadeOut(300,function(){
			$('#mask').remove();
		});

		//remove login buttom in Content in pc/tablet mode
		$('.act li:first').remove();
		return false;
	});
	*/
	/* user account icon html !!
		<li id="account_buttom">
			<img src="icon/close.png">
			<a href="#" id="account_name">CloverHsc</a>
			<ul id="AccountAndLogout">
				<li><a href="#">設定帳號資料</a></li>
				<li><a href="#">登出</a></li>
			</ul>
		</li>
	*/
/*=========================================================*/

/**   click account name buttom will show logout and account setting. **/
	$('body').on('click', '#HRx_account_buttom , #LRx_account_buttom',function(){
		console.log("Click");
		var $AccountAndLogout=$('#HRx_account_buttom #AccountAndLogout , #LRx_account_buttom #AccountAndLogout ');
		NavSlideToggle($AccountAndLogout,300);
		return false;
	}); // end of body click event on account_buttom
/*======================================================*/
	
/**	Click on setting in phone mode             **/
	$('#phone-nav-list #setting').click(function(event) {
		var $setDetail =$('#phone-nav-list #setDetail');
		NavSlideToggle($setDetail,300);
		return false;
	});
	
});// end ready