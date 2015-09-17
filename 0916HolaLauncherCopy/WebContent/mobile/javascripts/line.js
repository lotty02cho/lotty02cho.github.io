/*가로보기 세로보기 처리*/
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
        }    });
});

