"use strict"
$(document).ready(function(){
    $(".img1").hide();
    
   
    $(".contain_img1").hover(function(){
        $(".img1").toggle();
    })
    $('.contain_img1').on('click',function(){
        $('.contain_2').animate({'top':'0'});
        $('.contain_3').animate({'top':'0'});
        $('.retour').animate({'right':'2%'});

    });
    $('.retour').on('click',function(){
        // $('.contain_2').animate({'top':'-50%'});
        // $('.contain_3').animate({'top':'50%'});

    });
    

});