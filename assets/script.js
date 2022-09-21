"use strict"
var playMusic = false;
var cptCopy = 0;
$(document).ready(function () {
    $('.rep').toggle();


    // lecture de la musique
    $(".playbutton").on('click', function (e){
        if (playMusic == true) {
            $('#player').trigger('pause');
            playMusic = false;
        } else {
            $('#player').trigger('play');
            playMusic = true;
        };
    });
    $('.pk1').hover(function () {
        $('#rep1').toggle(150);
    });
    $('.pk2').hover(function () {
        $('#rep2').toggle(150);
    });
    $('.pk3').hover(function () {
        $('#rep3').toggle(150);
    });
    $('.pk4').hover(function () {
        $('#rep4').toggle(150);
    });
    $('.pk5').hover(function () {
        $('#rep5').toggle(150);
    });
    $('.pk6').hover(function () {
        $('#rep6').toggle(150);
    });
    $('.pk7').hover(function () {
        $('#rep7').toggle(150);
    });
    $('.copy').on('click', function () {
        copyToClipboard($('.parole'));
        if (cptCopy == 0) {
            $('.copy').text("C'est copié !");
            cptCopy++;
        } else {
            if (cptCopy >= 2) {
                $('.copy').text("Ça fait beaucoup là non");
                $('#encore').trigger('play');
            } else {
                $('.copy').text("Et encore!");
                cptCopy++;
            };

        }
    });

    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }

});