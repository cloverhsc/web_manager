$(window).load(function(){
//$(document).ready(function(){
/* Camera function option background */
var $test = $('.Camera_Func_Value').offset();
var windowH = $(window).height();
$('.Camera_Func_Value').css({height:windowH-$test.top+'px'});
/*  -------- icon of  Camera function bar  --------*/
                var which_click=-1;      // which one is switch on now.
                var  $Camera_Func_Arra = $('.Camera_Func').find('span');    
                var $Camera_Func_Value_Arra=$('.Camera_Func_Value').find('fieldset');
                    /*use to switch on/off camera function icon*/
                    function To_Switch($obj,which_one,index){
                       
                            //click the same button but status is "on" so  --> switch off
                            if($obj.hasClass('on'))             
                            {
                                
                                $obj.removeClass('on').find('img:first-child').stop(true).animate({opacity:1},300);
                                $obj.find('img:nth-child(2)').stop(true).animate({opacity:0},300);
                                //hide function value option
                                $Camera_Func_Value_Arra.eq(index).css({display:"none"});
                                which_one=-1;
                                return which_one;
                            }
                            else    //click other button 
                            {       
                                if(which_one !=-1)    //  someone  is switch on 
                                {
                                        /* switch off  before icon*/
                                     var $before_one = $Camera_Func_Arra.eq(which_one);
                                    $before_one.removeClass('on').find('img:first-child').stop(true).animate({opacity:1},300);
                                    $before_one.find('img:nth-child(2)').stop(true).animate({opacity:0},300);
                                    $Camera_Func_Value_Arra.eq(which_one).css({display:"none"});
                                    
                                    //switch on  the button  user click  it.
                                    $obj.addClass('on').find('img:first-child').stop(true).animate({opacity:0},300);
                                    $obj.find('img:nth-child(2)').stop(true).animate({opacity:1},300);
                                    $Camera_Func_Value_Arra.eq(index).css({display:"block"});
                                    which_one=index;
                                    return which_one;
                                }
                                else    // all switch off
                                {
                                        $obj.addClass('on').find('img:first-child').stop(true).animate({opacity:0},300);
                                        $obj.find('img:nth-child(2)').stop(true).animate({opacity:1},300);
                                        $Camera_Func_Value_Arra.eq(index).css({display:"block"});
                                        which_one=index;
                                        return which_one;
                                }
                            }
                    }

        /*click then change stream icon */
            $('.Camera_Func span').each(function(index) {
                    $(this).on('click',  function(event) {
                        which_click=To_Switch($(this),which_click,index);
                        //console.log("after: %d",which_click);
                    });
            });
/*---------------------------------------------------------------------------------- --------------------------------------*/

 /* ---------slide camera function icon  if screen width low than 450px in mobile mode  ---------*/
        $('.Camera_Func section').each(function(){
            var $Container = $(this),
                    CurrentIndex = 0;

            function goToSlide(index){
                    $Container.stop(true).animate({left:-50+(index*50)+'%'},300,'swing');

            }

            /* when width less than 450 .
                The Camera function bar need 2 arrows to 
                do slide way.
            */
            $('.Arrow #Forward').click(function(event) {
                    if(CurrentIndex ==1)
                    {
                        goToSlide(CurrentIndex);
                        CurrentIndex=0;
                    }  
            });

            $('.Arrow #Backward').click(function(){
                    if(CurrentIndex ==0)
                    {
                        goToSlide(CurrentIndex);
                        CurrentIndex=1;
                    }
            });
        });     //end of  .Camera_Func section
    /*------------------------------------------------------------------------------------------------------------------------*/

/*-------- Switch Camera , white balance  ---------*/
        $('#Switch_A_Cam,#Switch_B_Cam,#Wb_Auto,#Daylight,#Cloudy,#Tungsten, \
            #Fluorescent,#Light_Auto,#Light_On,#Light_Off,#Night_Vision_On,#Night_Vision_Off').button();
/*----------------------------------------------------------------------------------------------------------------------------------*/

/*------------------- Camera function of Voice .Sound bar -----------------------*/
        $(".Sound-Bar").slider({
            max:100,
            min:0,
            value:80
        });
        $(".Sound-Bar").draggable();
/*----------------------------------------------------------------------------------------------*/

/*-------- Camera function of Zoom .Zooming bar --------*/
        $(".Zoom-Bar").slider({
            max:100,
            min:0,
            value:80
        });
        $(".Zoom-Bar").draggable();
/*----------------------------------------------------------------------------------------------------*/

/*------- Slide of White balance  options   ----------*/
        $('.Wb_Arrow').each(function() {
            var MoveIndex=0;
            var $Slide_Wb = $('.Whitebalance_Setting > section');
            /*  Use  Whitebalanc_Setting's width to decide 
                    slide step!   if  width == 212px ,  White balance  option
                    bar are show 2 options in window. So slide  move 2 options everytime.
                    if width == 318px option bar are show 3 options in window. By the way Slide
                    move  3 options everytime.
            */
            
            function GoToSlide(MvIndex,dirct){
                var threshold = $('.Whitebalance_Setting').css('width');
                    // Get bounding first
                    if(threshold  == "212px")
                    {
                        // << Forward
                        if(dirct == -1)
                        {
                            switch(MvIndex){
                                case 0:
                                case 1:
                                    $('.Whitebalance_Setting > section').stop(true).animate({
                                        left:(-100*MvIndex)+'%'
                                    },300,'swing');
                                    MoveIndex=MvIndex;
                                    break;
                                default:
                                    MoveIndex=0;
                                    break;
                            }
                        }
                        else
                        {
                                switch(MvIndex){
                                case 1:
                                case 2:
                                    $('.Whitebalance_Setting > section').stop(true).animate({
                                        left:(-100*MvIndex)+'%'
                                    },500,'swing');
                                    MoveIndex=MvIndex;
                                    break;
                                default:
                                    MoveIndex=2;
                                    break;

                                }
                            }
                    }
                    else if(threshold == "318px")
                    {
                        // << Forward
                        if(dirct == -1)
                        {
                            switch(MvIndex){
                                case 0:
                                    $('.Whitebalance_Setting > section').stop(true).animate({
                                        left:(-100*MvIndex)+'%'
                                    },300,'swing');
                                    MoveIndex=MvIndex;
                                    break;
                                default:
                                    MoveIndex=0;
                                    break;
                            }
                        }
                        else
                        {
                                switch(MvIndex){
                                case 1:
                                    $('.Whitebalance_Setting > section').stop(true).animate({
                                        left:(-100*MvIndex)+'%'
                                    },300,'swing');
                                    MoveIndex=MvIndex;
                                    break;
                                default:
                                    MoveIndex=1;
                                    break;
                                }
                            }
                    }


            };
            /* -- <<  Forward  --  */
            $('#Wb_Forward').click(function() {
                GoToSlide(MoveIndex-1,-1);
            });    
            
            /* -- Backward >>  --*/
            $('#Wb_Backward').click(function(){
                GoToSlide(MoveIndex+1,1);
            });
        });
/*-------------------------------------------------------------------------------------------------------------*/

}); // end of ready
