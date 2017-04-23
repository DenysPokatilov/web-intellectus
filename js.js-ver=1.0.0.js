/**
 * Created by notebook on 22.09.2016.
 */


jQuery(document).ready(function () {
    var scrollH = $('.scroll').height();
    $('header').css('height', scrollH);
    $(window).resize(function () {
        $('header').css('height', scrollH);
    })

    if ($('.nav')) {
        $('.nav').click(function () {
            if ($('.mainMenu').css('display') == 'none') {
                $('.mainMenu').fadeIn(500);
            } else {
                $('.mainMenu').fadeOut(500);
            }
        })
    }


    /*PoP CallBack*/


    $('.call, .coll').on('click', function (e) {
        e.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form_recall1')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });

        $('.close, #overlay').click(function () {
            $('#modal_form_recall1')
                .animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
        });
    });


    /*change input_borderColor*/

    $('#phone, #phone1, #name, #name1, #mail, #textarea').on('focus', function () {
        "use strict";
        $(this).css('border-color', '#00baf7');
        $(this).on('blur', function () {
            $(this).css('border-color', '#edf3f3');
        })
    });

    if ($('#phone, #phone1')) {
        $('#phone, #phone1').blur(function () {
            if (!$.isNumeric($(this).val())) {
                $(this).val('');
            }
        })

    }
    ;

    if ($('#name, #name1')) {
        $('#name, #name1').blur(function () {
            if ($.isNumeric($(this).val())) {
                $(this).val('');
            }
        })

    }
    ;


    /*auto-Slide*/
    function nSlide() {
        var currentSlide = $('.active-slider');
        var nextSlide = currentSlide.next();

        if (nextSlide.length === 0) {
            nextSlide = $('.slider').first();
        }

        currentSlide.fadeOut(700).removeClass('active-slider');
        nextSlide.fadeIn(700).addClass('active-slider');
    }

    var timer = setInterval(nSlide, 10000);
    if (screen.width <= 620) {
        clearInterval(timer);
    }



    /*comentSlider*/
    var Users = $('.ourUsers').find('.user');

    var img = document.querySelectorAll('.user img');



    for(var i = 0; i<img.length;i++){
        img[i].setAttribute('val',i);
    }

    $('.ourUsers').click(function (e) {
        var target = event.target;
        if (target.tagName != 'IMG') return;
        var currentImg = $('.activeUser');
        var n = target.getAttribute('val');
        var nextImg = $('.user').eq(n);

        var currText = $('.activeText');
        var nextText = $('.text').eq(n);


        currText.removeClass('activeText');
        nextText.addClass('activeText');

        currentImg.removeClass('activeUser');
        nextImg.addClass('activeUser');

    })

    if ($('.offer')) {
        $('.offer').click(function () {

            var eq = $(this).index();

            var currentOffer = $('.active-offer');
            var nextOffer = $('.offer').eq(eq);

            if (eq == currentOffer.index()) return;

            var currentDescription = $('.active-description');
            var nextDescription = $('.description').eq(eq);

            currentOffer.removeClass('active-offer');
            nextOffer.addClass('active-offer');

            currentDescription.fadeOut('fast').removeClass('active-description');
            nextDescription.fadeIn('fast').addClass('active-description');
        });
    }

    var pH = $('.height').find('p');
    setTimeout(function () {
        $('.height').css('height', pH[0].clientHeight);
    }, 20);

    if ($('.toggle-button')) {

        var i = 1;

        $('.toggle-button').click(function () {
            var parent = $(this).closest('.contentHosp');
            var h1 = parent.find('.height p');


            if ($(this).text() == 'подробнее') {
                i = 1;
            } else {
                i = 0;
            }

            if (i == 1) {
                parent.find($('.height')).animate({
                    'height': h1[0].offsetHeight + h1[1].offsetHeight
                }, 500);
                /*--i;*/
                parent.find($('.toggle-button')).text('скрыть');
            } else {
                parent.find($('.height')).animate({
                    'height': h1[0].offsetHeight
                }, 500);
                /*++i;*/
                parent.find($('.toggle-button')).text('подробнее');
            }
        })
    }

    /*burgerMenu*/

    var cur;

    if($(window).width() >1024){
        return;
    }else{
        $('#mainMenu>li').click(function (){
            var a = $(this).find('.sub-menu');
            var b = $(this).find('.fa-chevron-down');
            if(a.css('display') == 'none'){
                if(cur = 1){$('.sub-menu').slideUp();}
                b.attr('id','rotate90');
                a.slideDown();

                if($(window).width <=1024){
                    cur=1;
                }
            }else{
                b.attr('id','rotate0');
                a.slideUp();
                b.removeClass('fa-rotate-90');
            }
        });
    }


})