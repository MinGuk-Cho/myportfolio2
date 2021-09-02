$(document).ready(function(){
    $('.menu_btn_1').click(function(){
        $('#menu_mo').animate({
            height: '50px',
            opacity: 1
        },function(){
            $('.menu_btn_1').css({
                display: 'none'
            })
            $('.menu_btn_2').css({
                display: 'block'
            });
        });
    });

    $('.menu_btn_2').click(function(){
        $('#menu_mo').animate({
            height: 0,
            opacity: 0
        },function(){
            $('.menu_btn_2').css({
                display: 'none'
            })
            $('.menu_btn_1').css({
                display: 'block'
            });
        });
    });

    $('#sec_1_slide_pc').slick({
        slide: 'div',
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        pauseOnHover: true,
    });
    $('#sec_1_slide_mo').slick({
        slide: 'div',
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        pauseOnHover: true,
    });

    $('#sec_2_img').slick({
        slide: 'div',
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 700,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 760,
            settings: {
                centerMode: true,
                centerPadding: '1px',
                slidesToShow: 3,
                slidesToScroll: 2
            }
        }]
    });
    

    $('#sec_5_img_move1').slick({
        slide: 'div',
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#arrow_prev1'),
        nextArrow: $('#arrow_next1'),
        infinite: true,
        speed: 600,
        responsive: [{
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('#sec_5_img_move2').slick({
        slide: 'div',
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#arrow_prev2'),
        nextArrow: $('#arrow_next2'),
        infinite: true,
        speed: 600,
        responsive: [{
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

});//End