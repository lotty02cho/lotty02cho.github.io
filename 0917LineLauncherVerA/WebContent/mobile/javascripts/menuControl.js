/*menu*/
$(function() {
	/*메뉴를 누르지 않았을 때 menu를 보여주는 과정*/
	var showMenu = function() {
        $('.menu_btn').addClass('active');
        $('.menu_btn').animate({right:"50%"}, 200, "swing");
        $(".wrap").addClass('active');
        $("#menu").addClass('active');
    };
    /*메뉴를 눌렀을 때 menu를 숨기는 과정*/
    var hideMenu = function() {
        $('.menu_btn').removeClass('active');
        $('.menu_btn').animate({right:"1rem"}, 200, "swing");
        $(".wrap").removeClass('active');
        $("#menu").removeClass('active');

    };
    var touch = {startPos : 0,movePos : 0};
    var windwowWidth = parseInt($(window).width());
    var getDirection = function(movePos) {
        return (movePos > 0) ? 'right' : 'left';
    };
    
    /*바깥쪽 페이지 wrap을 눌렀을 때는 hide 처리*/
    $('.wrap').on('click', function() {
      hideMenu();
    })
    
    /*버튼을 눌렀을 때 함수 발동*/
    $('.menu_btn').on('click', function() {
        var $menuBtn = $(this);
        if (!$menuBtn.hasClass('active')) {
            showMenu();
        } else {
            hideMenu();
        }
    });
});

     
     