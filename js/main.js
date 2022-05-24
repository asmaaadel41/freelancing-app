$(function(){
    'use strict';
    // adjust slider height
    var winh  = $(window).height(),
        upperH= $('.upper-bar').innerHeight(),   //height only make a scroll
        navH  = $('.navbar').innerHeight();
    $('.slider,.carousel-item').height(winh-(upperH+navH));


    // //featured work shuffle
    // $('.navbar-nav .nav-item').on('click',function(){
    //  $(this).addClass('active').siblings().removeClass('active')});
     
    //  console.log($(this).data('class'));
    if ($(this).data('class') === 'all'){
        $('.shuffle-images .col-sm').css('opacity','1')
    }
    else{
        $('.shuffle-images .col-sm').css('opacity','0.08')
       $($(this).data('class')).parent().css('opacity',1);
    }
    });

    //Active Link
    $(document).ready(function(){
        $('ul li a').on('click', function(){
            var clicked = $(this);
            $('ul li a').each(function(){
                if($(this).hasClass('active')){
                    $(this).removeClass('active');
                }
            });
            $(this).addClass('active');
        });
    });

 