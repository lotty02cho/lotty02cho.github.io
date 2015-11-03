/*	$(function(){
		var locate = $(window).innerHeight()
		$( ".theme_1_view" ).css("opacity", 0);
  		$('#section1').css({ height: $(window).innerHeight()});
		$('#section1').css({ width: $(window).innerWidth()});
 		
		  $('.browserH').css({ height: $(window).innerHeight() });
  		var device_introW = $(".device_intro").width();
			var device_introH = $(".device_intro").height();
    		var leonard_1W = $(".leonard_1").width();
    		var leonard_1H = $(".leonard_1").height();
    		var brown_1W = $(".brown_1").width();
    		var brown_1H = $(".brown_1").height();
    		var edward_1W = $(".edward_1").width();
    		var edward_1H = $(".edward_1").height();
    		var james_1W = $(".james_1").width();
    		var james_1H = $(".james_1").height();
    		var Sally_1W = $(".Sally_1").width();
    		var Sally_1H = $(".Sally_1").height(); 

    		//max-height: 일반
    		///Page1
			var device_introW = 402;
			var device_introH = 516;
    		var leonard_1W = 194;
    		var leonard_1H = 196;
    		var brown_1W = 322;
    		var brown_1H = 464;
    		var edward_1W = 90;
    		var edward_1H = 102;
    		var james_1W = 244;
    		var james_1H = 471;
    		var Sally_1W = 144;
    		var Sally_1H = 218;
    		///Page2
    		var theme_W = 110;
    		var theme_H = 110;
    		var btn_download_W = 84;
    		var btn_download_H = 19;
    		var device_none_W = 290;
    		var device_none_H = 564;
    		var theme_1_view_W = 373;
    		var theme_1_view_H = 450;
    		///Page3
    		var device_none2_W = 290;
    		var device_none2_H = 564;
    		var basic_theme_W = 272;
    		var basic_theme_H = 450;
    		var cony_1_W = 180;
    		var cony_1_H = 362;
    		var sally_2_W = 158;
    		var sally_2_H = 158;
    		var icons_1_W = 168;
    		var icons_1_H = 168;
    		var icons_2_W = 170;
    		var icons_2_H = 170;
    		var icons_3_W = 132;
    		var icons_3_H = 112;
    		var icons_4_W = 220;
    		var icons_4_H = 220;
    		var icons_5_W = 193;
    		var icons_5_H = 193;
    		var icons_6_W = 200;
    		var icons_6_H = 156;
    		//Page4
    		var cleanertheme_1_W = 272;
    		var cleanertheme_1_H = 450;
    		var cleanertheme_2_W = 272;
    		var cleanertheme_2_H = 450;
    		var cleaner_pop_W = 440;
    		var cleaner_pop_H = 184;
    		var boss_1_W = 212;
    		var boss_1_H = 298;
    		var Sally_3_W = 118;
    		var Sally_3_H = 150;
    		
    		//max-height: 950px (원본의 80%)
    		///Page1
    		var device_introW_2 = device_introW*(4/5);
    		var device_introH_2 = device_introH*(4/5);
    		var leonard_1W_2 = leonard_1W*(4/5);
    		var leonard_1H_2 = leonard_1H*(4/5);
    		var brown_1W_2 = brown_1W*(4/5);
    		var brown_1H_2 = brown_1H*(4/5);
    		var edward_1W_2 = edward_1W*(4/5);
    		var edward_1H_2 = edward_1H*(4/5);
    		var james_1W_2 = james_1W*(4/5);
    		var james_1H_2 = james_1H*(4/5);
    		var Sally_1W_2 = Sally_1W*(4/5);
    		var Sally_1H_2 = Sally_1H*(4/5);
    		///Page2
    		var theme_W_2 = theme_W*(4/5);
    		var theme_H_2 = theme_H*(4/5);
    		var btn_download_W_2 = btn_download_W*(4/5);
    		var btn_download_H_2 = btn_download_H*(4/5);
    		var device_none_W_2 = device_none_W*(4/5);
    		var device_none_H_2 = device_none_H*(4/5);
    		var theme_1_view_W_2 = theme_1_view_W*(4/5);
    		var theme_1_view_H_2 = theme_1_view_H*(4/5);
    		///Page3
    		var device_none2_W_2 = device_none_W*(4/5);
    		var device_none2_H_2 = device_none_H*(4/5);
    		var basic_theme_W_2 = basic_theme_W*(4/5);
    		var basic_theme_H_2 = basic_theme_H*(4/5);
    		var cony_1_W_2 = cony_1_W*(4/5);
    		var cony_1_H_2 = cony_1_H*(4/5);
    		var sally_2_W_2 = sally_2_W*(4/5);
    		var sally_2_H_2 = sally_2_H*(4/5);
    		var icons_1_W_2 = icons_1_W*(4/5);
    		var icons_1_H_2 = icons_1_H*(4/5);
    		var icons_2_W_2 = icons_2_W*(4/5);
    		var icons_2_H_2 = icons_2_H*(4/5);
    		var icons_3_W_2 = icons_3_W*(4/5);
    		var icons_3_H_2 = icons_3_H*(4/5);
    		var icons_4_W_2 = icons_4_W*(4/5);
    		var icons_4_H_2 = icons_4_H*(4/5);
    		var icons_5_W_2 = icons_5_W*(4/5);
    		var icons_5_H_2 = icons_5_H*(4/5);
    		var icons_6_W_2 = icons_6_W*(4/5);
    		var icons_6_H_2 = icons_6_H*(4/5);
    		//Page4
    		var cleanertheme_1_W_2 = cleanertheme_1_W*(4/5);
    		var cleanertheme_1_H_2 = cleanertheme_1_H*(4/5);
    		var cleanertheme_2_W_2 = cleanertheme_2_W*(4/5);
    		var cleanertheme_2_H_2 = cleanertheme_2_H*(4/5);
    		var cleaner_pop_W_2 = cleaner_pop_W*(4/5);
    		var cleaner_pop_H_2 = cleaner_pop_H*(4/5);
    		var boss_1_W_2 = boss_1_W*(4/5);
    		var boss_1_H_2 = boss_1_H*(4/5);
    		var Sally_3_W_2 = Sally_3_W*(4/5);
    		var Sally_3_H_2 = Sally_3_H*(4/5);
    		
    		
    		//max-height: 620px (원본의1/2)
    		///Page1
    		var device_introW_3 = device_introW*(1/2);
    		var device_introH_3 = device_introH*(1/2);
    		var leonard_1W_3 = leonard_1W*(1/2);
    		var leonard_1H_3 = leonard_1H*(1/2);
    		var brown_1W_3 = brown_1W*(1/2);
    		var brown_1H_3 = brown_1H*(1/2);
    		var edward_1W_3 = edward_1W*(1/2);
    		var edward_1H_3 = edward_1H*(1/2);
    		var james_1W_3 = james_1W*(1/2);
    		var james_1H_3 = james_1H*(1/2);
    		var Sally_1W_3 = Sally_1W*(1/2);
    		var Sally_1H_3 = Sally_1H*(1/2);
    		///Page2
    		var theme_W_3 = theme_W*(1/2);
    		var theme_H_3 = theme_H*(1/2);
    		var btn_download_W_3 = btn_download_W*(1/2);
    		var btn_download_H_3 = btn_download_H*(1/2);
    		var device_none_W_3 = device_none_W*(1/2);
    		var device_none_H_3 = device_none_H*(1/2);
    		var theme_1_view_W_3 = theme_1_view_W*(1/2);
    		var theme_1_view_H_3 = theme_1_view_H*(1/2);
    		///Page3
    		var device_none2_W_3 = device_none_W*(1/2);
    		var device_none2_H_3 = device_none_H*(1/2);
    		var basic_theme_W_3 = basic_theme_W*(1/2);
    		var basic_theme_H_3 = basic_theme_H*(1/2);
    		var cony_1_W_3 = cony_1_W*(1/2);
    		var cony_1_H_3 = cony_1_H*(1/2);
    		var sally_2_W_3 = sally_2_W*(1/2);
    		var sally_2_H_3 = sally_2_H*(1/2);
    		var icons_1_W_3 = icons_1_W*(1/2);
    		var icons_1_H_3 = icons_1_H*(1/2);
    		var icons_2_W_3 = icons_2_W*(1/2);
    		var icons_2_H_3 = icons_2_H*(1/2);
    		var icons_3_W_3 = icons_3_W*(1/2);
    		var icons_3_H_3 = icons_3_H*(1/2);
    		var icons_4_W_3 = icons_4_W*(1/2);
    		var icons_4_H_3 = icons_4_H*(1/2);
    		var icons_5_W_3 = icons_5_W*(1/2);
    		var icons_5_H_3 = icons_5_H*(1/2);
    		var icons_6_W_3 = icons_6_W*(1/2);
    		var icons_6_H_3 = icons_6_H*(1/2);
    		//Page4
    		var cleanertheme_1_W_3 = cleanertheme_1_W*(1/2);
    		var cleanertheme_1_H_3 = cleanertheme_1_H*(1/2);
    		var cleanertheme_2_W_3 = cleanertheme_2_W*(1/2);
    		var cleanertheme_2_H_3 = cleanertheme_2_H*(1/2);
    		var cleaner_pop_W_3 = cleaner_pop_W*(1/2);
    		var cleaner_pop_H_3 = cleaner_pop_H*(1/2);
    		var boss_1_W_3 = boss_1_W*(1/2);
    		var boss_1_H_3 = boss_1_H*(1/2);
    		var Sally_3_W_3 = Sally_3_W*(1/2);
    		var Sally_3_H_3 = Sally_3_H*(1/2);

    		
		    if ($(window).height() <= 950 && $(window).height() > 620) {
		    	///Page1
		    	$(".device_intro").css({ width : device_introW_2 });
		    	$(".device_intro").css({ height: device_introH_2 });
		    	$(".leonard_1").css({ width : leonard_1W_2 });
		    	$(".leonard_1").css({ height : leonard_1H_2 });
		    	$(".brown_1").css({ width : brown_1W_2 });
		    	$(".brown_1").css({ height : brown_1H_2 });
	    		$(".edward_1").css({ width : edward_1W_2 });
	    		$(".edward_1").css({ height : edward_1H_2 });
	    		$(".james_1").css({ width : james_1W_2 });
	    		$(".james_1").css({ height : james_1H_2 });
	    		$(".Sally_1").css({ width : Sally_1W_2 });
	    		$(".Sally_1").css({ height : Sally_1H_2 });
	    		///Page2
	    		$(".theme_1").css({ width : theme_W_2 });
	    		$(".theme_1").css({ height : theme_H_2 });
	    		$(".theme_2").css({ width : theme_W_2 });
	    		$(".theme_2").css({ height : theme_H_2 });
	    		$(".theme_3").css({ width : theme_W_2 });
	    		$(".theme_3").css({ height : theme_H_2 });
	    		$(".theme_4").css({ width : theme_W_2 });
	    		$(".theme_4").css({ height : theme_H_2 });
	    		$(".theme_5").css({ width : theme_W_2 });
	    		$(".theme_5").css({ height : theme_H_2 });
	    		$(".theme_6").css({ width : theme_W_2 });
	    		$(".theme_6").css({ height : theme_H_2 });
	    		$(".theme_7").css({ width : theme_W_2 });
	    		$(".theme_7").css({ height : theme_H_2 });
	    		$(".theme_8").css({ width : theme_W_2 });
	    		$(".theme_8").css({ height : theme_H_2 });
	    		$(".theme_9").css({ width : theme_W_2 });
	    		$(".theme_9").css({ height : theme_H_2 });
	    		$(".device_none").css({ width : device_none_W_2 });
	    		$(".device_none").css({ height : device_none_H_2 });
	    		$(".theme_1_view").css({ width : theme_1_view_W_2 });
	    		$(".theme_1_view").css({ height : theme_1_view_H_2 });
	    		///Page3
	    		$(".device_none2").css({ width : device_none2_W_2 });
	    		$(".device_none2").css({ height : device_none2_H_2 });
	    		$(".basictheme1").css({ width : basic_theme_W_2});
	    		$(".basictheme1").css({ height : basic_theme_H_2});
	    		$(".cony_1").css({ width :  cony_1_W_2});
	    		$(".cony_1").css({ height :  cony_1_H_2});
	    		$(".sally_2").css({ width :  sally_2_W_2});
	    		$(".sally_2").css({ height :  sally_2_H_2});
	    		$(".icons_1").css({ width :  icons_1_W_2});
	    		$(".icons_1").css({ height :  icons_1_H_2});
	    		$(".icons_2").css({ width :  icons_2_W_2});
	    		$(".icons_2").css({ height :  icons_2_H_2});
	    		$(".icons_3").css({ width :  icons_3_W_2});
	    		$(".icons_3").css({ height :  icons_3_H_2});
	    		$(".icons_4").css({ width :  icons_4_W_2});
	    		$(".icons_4").css({ height :  icons_4_H_2});
	    		$(".icons_5").css({ width :  icons_5_W_2});
	    		$(".icons_5").css({ height :  icons_5_H_2});
	    		$(".icons_6").css({ width :  icons_6_W_2});
	    		$(".icons_6").css({ height :  icons_6_H_2});
	    		///Page4
	    		$(".cleanertheme_1").css({ width: cleanertheme_1_W_2});
	    		$(".cleanertheme_1").css({ height: cleanertheme_1_H_2});
	    		$(".cleanertheme_2").css({ width:  cleanertheme_2_W_2});
	    		$(".cleanertheme_2").css({ height: cleanertheme_2_H_2});
	    		$(".cleaner_pop").css({ width:  cleaner_pop_W_2});
	    		$(".cleaner_pop").css({ height: cleaner_pop_H_2});
	    		$(".boss_1").css({ width:  boss_1_W_2});
	    		$(".boss_1").css({ height: boss_1_H_2});
	    		$(".Sally_3").css({ width:  Sally_3_W_2});
	    		$(".Sally_3").css({ height: Sally_3_H_2});
	       }
		   else if ($(window).height() <= 620 ) {
		    	///Page1
		    	$(".device_intro").css({ width : device_introW_3 });
		    	$(".device_intro").css({ height: device_introH_3 });
		    	$(".leonard_1").css({ width : leonard_1W_3 });
		    	$(".leonard_1").css({ height : leonard_1H_3 });
		    	$(".brown_1").css({ width : brown_1W_3 });
		    	$(".brown_1").css({ height : brown_1H_3 });
	    		$(".edward_1").css({ width : edward_1W_3 });
	    		$(".edward_1").css({ height : edward_1H_3 });
	    		$(".james_1").css({ width : james_1W_3 });
	    		$(".james_1").css({ height : james_1H_3 });
	    		$(".Sally_1").css({ width : Sally_1W_3 });
	    		$(".Sally_1").css({ height : Sally_1H_3 });
	    		///Page2
	    		$(".theme_1").css({ width : theme_W_3 });
	    		$(".theme_1").css({ height : theme_H_3 });
	    		$(".theme_2").css({ width : theme_W_3 });
	    		$(".theme_2").css({ height : theme_H_3 });
	    		$(".theme_3").css({ width : theme_W_3 });
	    		$(".theme_3").css({ height : theme_H_3 });
	    		$(".theme_4").css({ width : theme_W_3 });
	    		$(".theme_4").css({ height : theme_H_3 });
	    		$(".theme_5").css({ width : theme_W_3 });
	    		$(".theme_5").css({ height : theme_H_3 });
	    		$(".theme_6").css({ width : theme_W_3 });
	    		$(".theme_6").css({ height : theme_H_3 });
	    		$(".theme_7").css({ width : theme_W_3 });
	    		$(".theme_7").css({ height : theme_H_3 });
	    		$(".theme_8").css({ width : theme_W_3 });
	    		$(".theme_8").css({ height : theme_H_3 });
	    		$(".theme_9").css({ width : theme_W_3 });
	    		$(".theme_9").css({ height : theme_H_3 });
	    		$(".device_none").css({ width : device_none_W_3 });
	    		$(".device_none").css({ height : device_none_H_3 });
	    		$(".theme_1_view").css({ width : theme_1_view_W_3 });
	    		$(".theme_1_view").css({ height : theme_1_view_H_3 });
	    		///Page3
	    		$(".device_none2").css({ width : device_none2_W_3 });
	    		$(".device_none2").css({ height : device_none2_H_3 });
	    		$(".basictheme1").css({ width : basic_theme_W_3});
	    		$(".basictheme1").css({ height : basic_theme_H_3});
	    		$(".cony_1").css({ width :  cony_1_W_3});
	    		$(".cony_1").css({ height :  cony_1_H_3});
	    		$(".sally_2").css({ width :  sally_2_W_3});
	    		$(".sally_2").css({ height :  sally_2_H_3});
	    		$(".icons_1").css({ width :  icons_1_W_3});
	    		$(".icons_1").css({ height :  icons_1_H_3});
	    		$(".icons_2").css({ width :  icons_2_W_3});
	    		$(".icons_2").css({ height :  icons_2_H_3});
	    		$(".icons_3").css({ width :  icons_3_W_3});
	    		$(".icons_3").css({ height :  icons_3_H_3});
	    		$(".icons_4").css({ width :  icons_4_W_3});
	    		$(".icons_4").css({ height :  icons_4_H_3});
	    		$(".icons_5").css({ width :  icons_5_W_3});
	    		$(".icons_5").css({ height :  icons_5_H_3});
	    		$(".icons_6").css({ width :  icons_6_W_3});
	    		$(".icons_6").css({ height :  icons_6_H_3});
	    		///Page4
	    		$(".cleanertheme_1").css({ width: cleanertheme_1_W_3});
	    		$(".cleanertheme_1").css({ height: cleanertheme_1_H_3});
	    		$(".cleanertheme_2").css({ width:  cleanertheme_2_W_3});
	    		$(".cleanertheme_2").css({ height: cleanertheme_2_H_3});
	    		$(".cleaner_pop").css({ width:  cleaner_pop_W_3});
	    		$(".cleaner_pop").css({ height: cleaner_pop_H_3});
	    		$(".boss_1").css({ width:  boss_1_W_3});
	    		$(".boss_1").css({ height: boss_1_H_3});
	    		$(".Sally_3").css({ width:  Sally_3_W_3});
	    		$(".Sally_3").css({ height: Sally_3_H_3});
	    		
	       }
		    else if ($(window).height() > 950 ){
		    	///Page1
		    	$(".device_intro").css({ width : device_introW });
		    	$(".device_intro").css({ height: device_introH });
		    	$(".leonard_1").css({ width  : leonard_1W });
		    	$(".leonard_1").css({ height : leonard_1H});
		    	$(".brown_1").css({ width : brown_1W });
		    	$(".brown_1").css({ height : brown_1H });
	    		$(".edward_1").css({ width : edward_1W  });
	    		$(".edward_1").css({ height : edward_1H  });
	    		$(".james_1").css({ width : james_1W  });
	    		$(".james_1").css({ height : james_1H  });
	    		$(".Sally_1").css({ width : Sally_1W  });
	    		$(".Sally_1").css({ height : Sally_1H  });
	    		///Page2
	    		$(".theme_1").css({ width : theme_W });
	    		$(".theme_1").css({ height : theme_H });
	    		$(".theme_2").css({ width : theme_W });
	    		$(".theme_2").css({ height : theme_H });
	    		$(".theme_3").css({ width : theme_W });
	    		$(".theme_3").css({ height : theme_H });
	    		$(".theme_4").css({ width : theme_W });
	    		$(".theme_4").css({ height : theme_H });
	    		$(".theme_5").css({ width : theme_W });
	    		$(".theme_5").css({ height : theme_H });
	    		$(".theme_6").css({ width : theme_W });
	    		$(".theme_6").css({ height : theme_H });
	    		$(".theme_7").css({ width : theme_W });
	    		$(".theme_7").css({ height : theme_H });
	    		$(".theme_8").css({ width : theme_W });
	    		$(".theme_8").css({ height : theme_H });
	    		$(".theme_9").css({ width : theme_W });
	    		$(".theme_9").css({ height : theme_H });
	    		$(".device_none").css({ width : device_none_W });
	    		$(".device_none").css({ height : device_none_H });
	    		$(".theme_1_view").css({ width : theme_1_view_W });
	    		$(".theme_1_view").css({ height : theme_1_view_H });
	    		///Page3
	    		$(".device_none2").css({ width : device_none2_W});
	    		$(".device_none2").css({ height : device_none2_H});
	    		$(".basictheme1").css({ width : basic_theme_W});
	    		$(".basictheme1").css({ height : basic_theme_H});
	    		$(".cony_1").css({ width :  cony_1_W});
	    		$(".cony_1").css({ height :  cony_1_H});
	    		$(".sally_2").css({ width :  sally_2_W});
	    		$(".sally_2").css({ height :  sally_2_H});
	    		$(".icons_1").css({ width :  icons_1_W});
	    		$(".icons_1").css({ height :  icons_1_H});
	    		$(".icons_2").css({ width :  icons_2_W});
	    		$(".icons_2").css({ height :  icons_2_H});
	    		$(".icons_3").css({ width :  icons_3_W});
	    		$(".icons_3").css({ height :  icons_3_H});
	    		$(".icons_4").css({ width :  icons_4_W});
	    		$(".icons_4").css({ height :  icons_4_H});
	    		$(".icons_5").css({ width :  icons_5_W});
	    		$(".icons_5").css({ height :  icons_5_H});
	    		$(".icons_6").css({ width :  icons_6_W});
	    		$(".icons_6").css({ height :  icons_6_H});
	    		///Page4
	    		$(".cleanertheme_1").css({ width: cleanertheme_1_W });
	    		$(".cleanertheme_1").css({ height: cleanertheme_1_H });
	    		$(".cleanertheme_2").css({ width:  cleanertheme_2_W });
	    		$(".cleanertheme_2").css({ height: cleanertheme_2_H });
	    		$(".cleaner_pop").css({ width:  cleaner_pop_W });
	    		$(".cleaner_pop").css({ height: cleaner_pop_H });
	    		$(".boss_1").css({ width:  boss_1_W });
	    		$(".boss_1").css({ height: boss_1_H });
	    		$(".Sally_3").css({ width:  Sally_3_W });
	    		$(".Sally_3").css({ height: Sally_3_H });
		    }
    		
    		
		  $(window).resize(function(){
		 		$('#section1').css({ height: $(window).innerHeight()});
				$('#section1').css({ width: $(window).innerWidth()});
			  
		    $('.browserH').css({ height: $(window).innerHeight() });
		    if ($(window).height() <= 950 && $(window).height() > 620) {
		    	///Page1
		    	$(".device_intro").css({ width : device_introW_2 });
		    	$(".device_intro").css({ height: device_introH_2 });
		    	$(".leonard_1").css({ width : leonard_1W_2 });
		    	$(".leonard_1").css({ height : leonard_1H_2 });
		    	$(".brown_1").css({ width : brown_1W_2 });
		    	$(".brown_1").css({ height : brown_1H_2 });
	    		$(".edward_1").css({ width : edward_1W_2 });
	    		$(".edward_1").css({ height : edward_1H_2 });
	    		$(".james_1").css({ width : james_1W_2 });
	    		$(".james_1").css({ height : james_1H_2 });
	    		$(".Sally_1").css({ width : Sally_1W_2 });
	    		$(".Sally_1").css({ height : Sally_1H_2 });
	    		///Page2
	    		$(".theme_1").css({ width : theme_W_2 });
	    		$(".theme_1").css({ height : theme_H_2 });
	    		$(".theme_2").css({ width : theme_W_2 });
	    		$(".theme_2").css({ height : theme_H_2 });
	    		$(".theme_3").css({ width : theme_W_2 });
	    		$(".theme_3").css({ height : theme_H_2 });
	    		$(".theme_4").css({ width : theme_W_2 });
	    		$(".theme_4").css({ height : theme_H_2 });
	    		$(".theme_5").css({ width : theme_W_2 });
	    		$(".theme_5").css({ height : theme_H_2 });
	    		$(".theme_6").css({ width : theme_W_2 });
	    		$(".theme_6").css({ height : theme_H_2 });
	    		$(".theme_7").css({ width : theme_W_2 });
	    		$(".theme_7").css({ height : theme_H_2 });
	    		$(".theme_8").css({ width : theme_W_2 });
	    		$(".theme_8").css({ height : theme_H_2 });
	    		$(".theme_9").css({ width : theme_W_2 });
	    		$(".theme_9").css({ height : theme_H_2 });
	    		$(".device_none").css({ width : device_none_W_2 });
	    		$(".device_none").css({ height : device_none_H_2 });
	    		$(".theme_1_view").css({ width : theme_1_view_W_2 });
	    		$(".theme_1_view").css({ height : theme_1_view_H_2 });
	    		///Page3
	    		$(".device_none2").css({ width : device_none2_W_2 });
	    		$(".device_none2").css({ height : device_none2_H_2 });
	    		$(".basictheme1").css({ width : basic_theme_W_2});
	    		$(".basictheme1").css({ height : basic_theme_H_2});
	    		$(".cony_1").css({ width :  cony_1_W_2});
	    		$(".cony_1").css({ height :  cony_1_H_2});
	    		$(".sally_2").css({ width :  sally_2_W_2});
	    		$(".sally_2").css({ height :  sally_2_H_2});
	    		$(".icons_1").css({ width :  icons_1_W_2});
	    		$(".icons_1").css({ height :  icons_1_H_2});
	    		$(".icons_2").css({ width :  icons_2_W_2});
	    		$(".icons_2").css({ height :  icons_2_H_2});
	    		$(".icons_3").css({ width :  icons_3_W_2});
	    		$(".icons_3").css({ height :  icons_3_H_2});
	    		$(".icons_4").css({ width :  icons_4_W_2});
	    		$(".icons_4").css({ height :  icons_4_H_2});
	    		$(".icons_5").css({ width :  icons_5_W_2});
	    		$(".icons_5").css({ height :  icons_5_H_2});
	    		$(".icons_6").css({ width :  icons_6_W_2});
	    		$(".icons_6").css({ height :  icons_6_H_2});
	    		///Page4
	    		$(".cleanertheme_1").css({ width: cleanertheme_1_W_2});
	    		$(".cleanertheme_1").css({ height: cleanertheme_1_H_2});
	    		$(".cleanertheme_2").css({ width:  cleanertheme_2_W_2});
	    		$(".cleanertheme_2").css({ height: cleanertheme_2_H_2});
	    		$(".cleaner_pop").css({ width:  cleaner_pop_W_2});
	    		$(".cleaner_pop").css({ height: cleaner_pop_H_2});
	    		$(".boss_1").css({ width:  boss_1_W_2});
	    		$(".boss_1").css({ height: boss_1_H_2});
	    		$(".Sally_3").css({ width:  Sally_3_W_2});
	    		$(".Sally_3").css({ height: Sally_3_H_2});
	    		
	       }
		    else if ($(window).height() <= 620 ) {
		    	///Page1
		    	$(".device_intro").css({ width : device_introW_3 });
		    	$(".device_intro").css({ height: device_introH_3 });
		    	$(".leonard_1").css({ width : leonard_1W_3 });
		    	$(".leonard_1").css({ height : leonard_1H_3 });
		    	$(".brown_1").css({ width : brown_1W_3 });
		    	$(".brown_1").css({ height : brown_1H_3 });
	    		$(".edward_1").css({ width : edward_1W_3 });
	    		$(".edward_1").css({ height : edward_1H_3 });
	    		$(".james_1").css({ width : james_1W_3 });
	    		$(".james_1").css({ height : james_1H_3 });
	    		$(".Sally_1").css({ width : Sally_1W_3 });
	    		$(".Sally_1").css({ height : Sally_1H_3 });
	    		///Page2
	    		$(".theme_1").css({ width : theme_W_3 });
	    		$(".theme_1").css({ height : theme_H_3 });
	    		$(".theme_2").css({ width : theme_W_3 });
	    		$(".theme_2").css({ height : theme_H_3 });
	    		$(".theme_3").css({ width : theme_W_3 });
	    		$(".theme_3").css({ height : theme_H_3 });
	    		$(".theme_4").css({ width : theme_W_3 });
	    		$(".theme_4").css({ height : theme_H_3 });
	    		$(".theme_5").css({ width : theme_W_3 });
	    		$(".theme_5").css({ height : theme_H_3 });
	    		$(".theme_6").css({ width : theme_W_3 });
	    		$(".theme_6").css({ height : theme_H_3 });
	    		$(".theme_7").css({ width : theme_W_3 });
	    		$(".theme_7").css({ height : theme_H_3 });
	    		$(".theme_8").css({ width : theme_W_3 });
	    		$(".theme_8").css({ height : theme_H_3 });
	    		$(".theme_9").css({ width : theme_W_3 });
	    		$(".theme_9").css({ height : theme_H_3 });
	    		$(".device_none").css({ width : device_none_W_3 });
	    		$(".device_none").css({ height : device_none_H_3 });
	    		$(".theme_1_view").css({ width : theme_1_view_W_3 });
	    		$(".theme_1_view").css({ height : theme_1_view_H_3 });
	    		///Page3
	    		$(".device_none2").css({ width : device_none2_W_3 });
	    		$(".device_none2").css({ height : device_none2_H_3 });
	    		$(".basictheme1").css({ width : basic_theme_W_3});
	    		$(".basictheme1").css({ height : basic_theme_H_3});
	    		$(".cony_1").css({ width :  cony_1_W_3});
	    		$(".cony_1").css({ height :  cony_1_H_3});
	    		$(".sally_2").css({ width :  sally_2_W_3});
	    		$(".sally_2").css({ height :  sally_2_H_3});
	    		$(".icons_1").css({ width :  icons_1_W_3});
	    		$(".icons_1").css({ height :  icons_1_H_3});
	    		$(".icons_2").css({ width :  icons_2_W_3});
	    		$(".icons_2").css({ height :  icons_2_H_3});
	    		$(".icons_3").css({ width :  icons_3_W_3});
	    		$(".icons_3").css({ height :  icons_3_H_3});
	    		$(".icons_4").css({ width :  icons_4_W_3});
	    		$(".icons_4").css({ height :  icons_4_H_3});
	    		$(".icons_5").css({ width :  icons_5_W_3});
	    		$(".icons_5").css({ height :  icons_5_H_3});
	    		$(".icons_6").css({ width :  icons_6_W_3});
	    		$(".icons_6").css({ height :  icons_6_H_3});
	    		///Page4
	    		$(".cleanertheme_1").css({ width: cleanertheme_1_W_3});
	    		$(".cleanertheme_1").css({ height: cleanertheme_1_H_3});
	    		$(".cleanertheme_2").css({ width:  cleanertheme_2_W_3});
	    		$(".cleanertheme_2").css({ height: cleanertheme_2_H_3});
	    		$(".cleaner_pop").css({ width:  cleaner_pop_W_3});
	    		$(".cleaner_pop").css({ height: cleaner_pop_H_3});
	    		$(".boss_1").css({ width:  boss_1_W_3});
	    		$(".boss_1").css({ height: boss_1_H_3});
	    		$(".Sally_3").css({ width:  Sally_3_W_3});
	    		$(".Sally_3").css({ height: Sally_3_H_3});
	       }
		    else if ($(window).height() > 950 ){
		    	///Page1
		    	$(".device_intro").css({ width : device_introW });
		    	$(".device_intro").css({ height: device_introH });
		    	$(".leonard_1").css({ width  : leonard_1W });
		    	$(".leonard_1").css({ height : leonard_1H});
		    	$(".brown_1").css({ width : brown_1W });
		    	$(".brown_1").css({ height : brown_1H });
	    		$(".edward_1").css({ width : edward_1W  });
	    		$(".edward_1").css({ height : edward_1H  });
	    		$(".james_1").css({ width : james_1W  });
	    		$(".james_1").css({ height : james_1H  });
	    		$(".Sally_1").css({ width : Sally_1W  });
	    		$(".Sally_1").css({ height : Sally_1H  });
	    		///Page2
	    		$(".theme_1").css({ width : theme_W });
	    		$(".theme_1").css({ height : theme_H });
	    		$(".theme_2").css({ width : theme_W });
	    		$(".theme_2").css({ height : theme_H });
	    		$(".theme_3").css({ width : theme_W });
	    		$(".theme_3").css({ height : theme_H });
	    		$(".theme_4").css({ width : theme_W });
	    		$(".theme_4").css({ height : theme_H });
	    		$(".theme_5").css({ width : theme_W });
	    		$(".theme_5").css({ height : theme_H });
	    		$(".theme_6").css({ width : theme_W });
	    		$(".theme_6").css({ height : theme_H });
	    		$(".theme_7").css({ width : theme_W });
	    		$(".theme_7").css({ height : theme_H });
	    		$(".theme_8").css({ width : theme_W });
	    		$(".theme_8").css({ height : theme_H });
	    		$(".theme_9").css({ width : theme_W });
	    		$(".theme_9").css({ height : theme_H });
	    		$(".device_none").css({ width : device_none_W });
	    		$(".device_none").css({ height : device_none_H });
	    		$(".theme_1_view").css({ width : theme_1_view_W });
	    		$(".theme_1_view").css({ height : theme_1_view_H });
	    		///Page3
	    		$(".device_none2").css({ width : device_none2_W});
	    		$(".device_none2").css({ height : device_none2_H});
	    		$(".basictheme1").css({ width : basic_theme_W});
	    		$(".basictheme1").css({ height : basic_theme_H});
	    		$(".cony_1").css({ width :  cony_1_W});
	    		$(".cony_1").css({ height :  cony_1_H});
	    		$(".sally_2").css({ width :  sally_2_W});
	    		$(".sally_2").css({ height :  sally_2_H});
	    		$(".icons_1").css({ width :  icons_1_W});
	    		$(".icons_1").css({ height :  icons_1_H});
	    		$(".icons_2").css({ width :  icons_2_W});
	    		$(".icons_2").css({ height :  icons_2_H});
	    		$(".icons_3").css({ width :  icons_3_W});
	    		$(".icons_3").css({ height :  icons_3_H});
	    		$(".icons_4").css({ width :  icons_4_W});
	    		$(".icons_4").css({ height :  icons_4_H});
	    		$(".icons_5").css({ width :  icons_5_W});
	    		$(".icons_5").css({ height :  icons_5_H});
	    		$(".icons_6").css({ width :  icons_6_W});
	    		$(".icons_6").css({ height :  icons_6_H});
	    		///Page4
	    		$(".cleanertheme_1").css({ width: cleanertheme_1_W });
	    		$(".cleanertheme_1").css({ height: cleanertheme_1_H });
	    		$(".cleanertheme_2").css({ width:  cleanertheme_2_W });
	    		$(".cleanertheme_2").css({ height: cleanertheme_2_H });
	    		$(".cleaner_pop").css({ width:  cleaner_pop_W });
	    		$(".cleaner_pop").css({ height: cleaner_pop_H });
	    		$(".boss_1").css({ width:  boss_1_W });
	    		$(".boss_1").css({ height: boss_1_H });
	    		$(".Sally_3").css({ width:  Sally_3_W });
	    		$(".Sally_3").css({ height: Sally_3_H });
		    }
		  });
		});*/