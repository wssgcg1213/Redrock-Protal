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

    function bindSwitcher($slider, $tabs, $cover){
        $tabs.each(function(i, item){
            $(item).on('click', function(){
                $slider.hide();
                $tabs.removeClass('z-active');
                $(this).addClass('z-active');
                $($slider[i]).show();
                $cover.css('top', 120 * i + 'px');
            });

        });
    }
    var firstSlider = $('.m-alir').find('.m-slider-con, .m-news-con, .m-teach-con');
    var firstSliderTab = $('.tab-hot, .tab-cqupt-news, .tab-teach-news');
    bindSwitcher(firstSlider, firstSliderTab, $('.m-alir .z-cover'));

    var secondSlider = $('.m-origin').find('.m-slider-con, .m-films, .m-novels');
    var secondSliderTab = $('.tab-album, .tab-film, .tab-novel');
    bindSwitcher(secondSlider, secondSliderTab, $('.m-origin .z-cover'));

    var thirdSlider = $('.m-sechand').find('.m-slider-con');
    var thirdSliderTab = $('.tab-products, .tab-daily, .tab-learn');
    bindSwitcher(thirdSlider, thirdSliderTab, $('.m-sechand .z-cover'));
})(jQuery);