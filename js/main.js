// JavaScript Document
$(document).ready(function(e) {
	
	// Set to fit screen at the 1st load
	$('.block').css('height',$(window).height()+'px');
	$(".content").css('height',$(window).height()*0.65+'px');
	$(".innercontent").css('height',$(".content").height()+'px');
	
	$(".portfolio").css('height',$(".content").height()*0.6+'px');
	$(".portfolio").css('width',$(window).width()/3+'px');
	
	// Fit screen when users' window resized
	$(window).resize(function() {
		$(".block").css('height',$(window).height()+'px');
		$(".content").css('height',$(window).height()*0.65+'px');
		$(".innercontent").css('height',$(".content").height()+'px');
		
		$(".portfolio").css('height',$(".content").height()*0.6+'px');
		$(".portfolio").css('width',$(window).width()/3+'px');
	});
	
	$(function(){
		var n = 1;
		var i = 0;
		var str = $('#comment'+n).text().toUpperCase();
		var typing_inst = setInterval(typing, 80);
		function typing()
		{
			if(n<6){
				if(i < str.length)
				{
					$('#comment'+n).css('display','block').text(str.substr(0,i) + "_");
					i++;
				}
				else if(i == str.length)
				{
					$('#comment'+n).text(str);
					i = 0;
					n++;
					str = $('#comment'+n).text().toUpperCase();
				}
			}
			else{
				clearInterval(typing_inst);
			}
		}
	});
	
	$(".portfolio").hover(
		function(){
			$(this).children("div").stop(true, true).fadeOut(500)
		},
		function(){
			$(this).children("div").stop(true, true).fadeIn(500)
		}
	);
	// Mark the a element when it's been selected
	/*$('#nav a,#scrollTop a').click(function(){
		//$('#nav a,#scrollTop a').not(this).removeClass('selected');
		//$(this).addClass('selected');
	});
	$('#scrolldown a').click(function(){
		//$("#nav a[href*='about']").addClass('selected');
	});*/
	
	$(window).scroll(function(){
		var $DisToTop = $(this).scrollTop();
		var $CoverH = $('.block').height();
		var $controllo = $CoverH - $DisToTop;
		if($controllo <= 20){
			$('#header').stop().animate({top: "0px"}, 300);
			$('#scrollTop').fadeIn(300);
		}else if($controllo > 0){
			$('#header').stop().animate({top: "-12.5%"}, 300);
			$('#scrollTop').fadeOut(300);
		};
		
		if ($("#design").offset().top - $(this).scrollTop()  < 5){
			$(".bar p").fadeIn(1000);
			$("#s0").animate({width:'65%'},1500);
			$("#s1").animate({width:'100%'},1500);
			$("#s2").animate({width:'90%'},1500);
			$("#s3").animate({width:'70%'},1500);
			$("#s4").animate({width:'70%'},1500);
			$("#s5").animate({width:'80%'},1500);
			$("#s6").animate({width:'90%'},1500);
			$("#s7").animate({width:'50%'},1500);
		};
		
		function waypoints(){	//Record the position the window has traveled.
			var currBlockIndex = 0,
	    	        curBlockSelected = 0,
	    	        i,
	    	        blocks = $('.block'),
	    	        resheight = document.documentElement.clientHeight,
	    	        distance = parseInt(resheight*0.4),
	    	        btn = $('#nav a'),
					scrollTopDis = $(window).scrollTop();
					
				for (i=0; i<(blocks.length); i++) {
					if (blocks.eq(i).offset().top - distance <= (scrollTopDis)) { currBlockIndex = i-1; };
				};
				if(curBlockSelected != (currBlockIndex+1)){
					curBlockSelected = currBlockIndex+1;
					//setSelected(currBlockIndex);
					btn.removeClass('selected');
					btn.eq(currBlockIndex).addClass('selected');
					//ar.page.animations(currBlockIndex);
					//$("#desc").text("第"+currBlockIndex+"個連結,第"+curBlockSelected+"方塊,"+blocks.length);
					
					if(currBlockIndex == 1){
					/*if( !$('#designing').hasClass('animated') ){
							ar.designing.run();
						}*/
					}	
				}
			};
			
		window.setTimeout(waypoints, 1000);
		//waypoints();
		
		//$(window).on( 'scroll', waypoints );
		
		/*$(".block").height()
		if($("#about").offset().top - $(this).scrollTop() < 5 ){
			$('#nav a,#scrollTop a').removeClass('selected');
			$("#nav a[href='#about']").addClass('selected');
		}else if($("#exp").offset().top - $(this).scrollTop() < 5){
			$('#nav a,#scrollTop a').removeClass('selected');
			$("#nav a[href='#exp']").addClass('selected');
		}*/
		/*
		if(($(this).scrollTop() >= $("#about").offset().top ) && ($(this).scrollTop() < $("#exp").offset().top)){
			$('#nav a,#scrollTop a').removeClass('selected');
			$("#nav a[href='#about']").addClass('selected');
		}
		else if(($(this).scrollTop() >= $("#exp").offset().top) && ($(this).scrollTop() < $("#contact").offset().top)){
			$('#nav a,#scrollTop a').removeClass('selected');
			$("#nav a[href='#exp']").addClass('selected');
		}
		else if(($(this).scrollTop() >= $("#contact").offset().top) 
		//&& ($(this).scrollTop() < $("#contact").offset().top)
		){
			$('#nav a,#scrollTop a').removeClass('selected');
			$("#nav a[href='#contact']").addClass('selected');
		}*/
		
		/*if ($("#about").offset().top+$(".block").height() > $(this).scrollTop() >= $("#about").offset().top ){
			
			
			$('#nav a,#scrollTop a').removeClass('selected');
			$("#nav a[href='#about']").addClass('selected');
		}
		else if ($("#exp").offset().top+$(".block").height() > $(this).scrollTop() >= $("#exp").offset().top ){
			$('#nav a,#scrollTop a').removeClass('selected');
			$("#nav a[href='#exp']").addClass('selected');
		}
		else if ($("#contact").offset().top+$(".block").height() > $(this).scrollTop() >= $("#contact").offset().top){
			$("a[href!='#contact']").removeClass('selected');
			$("#nav a[href='#contact]").addClass('selected');
		}*/
		
	});
		
	// Grab the link attribute and redirect page to that div with same id
	$("#nav a, #scrollTop a, #scrolldown a, #scrolldowntext, .what ").click(function() {
		//console.log($(this).attr("href"))
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate( {scrollTop: $($(this).attr("href")).offset().top + "px"} , 1000,"swing");
		return false;	// to prevent html goes to that empty link with a screen flash.
	});
	
	/*
	$('#aboutlink').click(function(){
		var targetOffset = $("#about").offset().top;
		$('html,body').animate({scrollTop: $("#about").offset().top}, {duration: 500,easing: "swing"} );
	});
	$('#explink').click(function(){
		var targetOffset = $("#exp").offset().top;
		$('html,body').stop(true,true).animate({scrollTop: targetOffset}, 1000);
	});
	$('#contactlink').click(function(){
		var targetOffset = $("#contact").offset().top;
		$('html,body').animate({scrollTop: targetOffset}, 1000 );
	});*/
		
});