/*! zeroling 18-11-2014 */
(function($) {
    function bindScroll($clickEle, $moveToEle){
        $clickEle.on('click', function(){
            $("html,body").animate({ "scrollTop" : $moveToEle.offset().top });
        });
    }
    bindScroll($('.hot'), $(".m-alir"));
    bindScroll($('.school'), $(".m-origin"));
    bindScroll($('.find'), $(".m-sechand"));
    bindScroll($('.study-help'), $(".m-chairs"));

    function bindSwitcher($slider, $tabs){
        $tabs.each(function(i, item){
            $(item).on('mouseover', function(){
                $slider.hide();
                $tabs.removeClass('z-active');
                $(this).addClass('z-active');
                $($slider[i]).show();
            });
        });
    }
    var firstSlider = $('.m-alir').find('.m-slider-con, .m-news-con, .m-teach-con');
    var firstSliderTab = $('.tab-hot, .tab-cqupt-news, .tab-teach-news');
    bindSwitcher(firstSlider, firstSliderTab);

    var secondSlider = $('.m-origin').find('.m-slider-con, .m-novels, .m-films');
    var secondSliderTab = $('.tab-album, .tab-novel, .tab-film');
    bindSwitcher(secondSlider, secondSliderTab);

    var thirdSlider = $('.m-sechand').find('.m-slider-con');
    var thirdSliderTab = $('.tab-products, .tab-daily, .tab-daily');
    bindSwitcher(thirdSlider, thirdSliderTab);
})(jQuery);