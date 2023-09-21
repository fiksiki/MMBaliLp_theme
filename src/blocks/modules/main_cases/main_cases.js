import $ from 'jquery';
import 'slick-carousel';

const MainCases = class MainCases {
    constructor(){}
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            if (window.innerWidth <= 1023) {
              $('.js_main_cases').slick({
                dots: true,
                slidesToShow: 1,
                arrows: false,
                infinite: true,
                slidesToScroll: 1,
                variableWidth: true
              });
            $('.js_main_cases').on('setPosition', function () {	
                $(this).find('.main_cases__block').height('auto');		      
                var slickTrack = $(this).find('.slick-track');		      
                var slickTrackHeight = $(slickTrack).height();		      
                $(this).find('.main_cases__block').css('height', slickTrackHeight + 'px');		      
            });	
            }
        });
    }
    init() {
        this.initSlider();
    }
}

export default MainCases;