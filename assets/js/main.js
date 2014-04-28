(function($) {

    $(document).on("ready", function(){


        $(function(){
            mySwiper = $('.swiper-container').swiper({
                mode:'horizontal',
                loop: true,
                autoResize: true,
                speed: 400,
                onSlideChangeStart: function(swiper){
                    /* panelHide($('.panel-slide')); */
                }
            });
        });


    });


})(jQuery);