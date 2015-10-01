var FULLPAGE = {
    isbar : false,
    curPage : 0,
    init : function(){
        
        if(FULLPAGE.isbar == true){
            FULLPAGE.animatePage(FULLPAGE.curPage);
        }

        if (window.orientation == 0 || window.orientation == 180) {
            orientation = 'portrait';
            FULLPAGE.scrollTop();
            return false;
        }else if (window.orientation == 90 || window.orientation == -90) {
            orientation = 'landscape';
            FULLPAGE.scrollTop();
            return false;
        }
        
    },

    scrollTop : function(){
        $("html,body").animate({
            scrollTop : 0
        });
    },

};
/*가로보기 세로보기 변화했을 때 처리*/
$(window).bind( 'orientationchange', function(e){
	FULLPAGE.init();
});

$(function() {
	var hasSwiped = false;
    var mySwiper = new Swiper('.swiper-container',{
        mode:'vertical',
        speed : 500,
        progress:true,
        /*속성을 추가하는 작업*/
        onProgressChange: function(swiper){
            for (var i = 0; i < swiper.slides.length; i++){
                var slide = swiper.slides[i];
                var progress = slide.progress;
                var scale, translate, opacity;
                slide.style.opacity = opacity;
                swiper.setTransform(slide, 'translate3d(0,' +(translate)+ 'px, 0)');
            }
        },
        /*터치 슬라이더를 실행*/
        onTouchStart:function(swiper){
            for (var i = 0; i < swiper.slides.length; i++){
                swiper.setTransition(swiper.slides[i], 0);
            }
        },
        /*변형속도 설정 슬라이드*/
        onSetWrapperTransition: function(swiper, speed) {
            for (var i = 0; i < swiper.slides.length; i++){
                swiper.setTransition(swiper.slides[i], speed);
            }
        },

        //Swipe해서 slide가 변화되어 알려주는 상황
        onSlideChangeStart : function(swiper){
        	if (!hasSwiped) {
        		$('.start').remove();
        		hasSwiped = true;
        	}
            var currentIndex = swiper.activeIndex;
            if (currentIndex == 3){
                $('.home_logo img').attr('src', 'images/logo_grey.png');
                $('.menu_btn').addClass('grey');
            } else {
                $('.home_logo img').attr('src', 'images/logo.png');
                $('.menu_btn').removeClass('grey');
            }
        }

    });
    for (var i = 0; i < mySwiper.slides.length; i++){
        mySwiper.slides[i].style.zIndex = mySwiper.slides.length - i;
    }
});

