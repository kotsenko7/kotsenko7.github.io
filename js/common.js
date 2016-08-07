$(document).ready(function() {
	
	$.stellar({
		responsive: true,
	});
	$('.popup').magnificPopup({type: 'image'});
	$('.popup-c').magnificPopup();

	$('.carousel').owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
    },
	navText:""
});

	
	function wResize(){
		//$('header').css("height", $(window).height());
	};
	wResize();
	$("window").resize(function(){
		wResize
	});
	//Tabs
	
	$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
//22
	$(".tab_item2").not(":first").hide();
$(".wrapper2 .tab2").click(function() {
	$(".wrapper2 .tab2").removeClass("active2").eq($(this).index()).addClass("active2");
	$(".tab_item2").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active2");
	//33
		$(".tab_item3").not(":first").hide();
$(".wrapper3 .tab3").click(function() {
	$(".wrapper3 .tab3").removeClass("active3").eq($(this).index()).addClass("active3");
	$(".tab_item3").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active3");
	// 44
			$(".tab_item4").not(":first").hide();
$(".wrapper4 .tab4").click(function() {
	$(".wrapper4 .tab4").removeClass("active4").eq($(this).index()).addClass("active4");
	$(".tab_item4").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active4");
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	
	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				//$.fancybox.close();
			}, 1000);
		});
	});
	//animated
$("text-header, h1, h2").animated("slideInLeft","slideInRight"  );
});

$(window).load(function(){
	//animated

	$(".wrapper2").animated("flipInY");
	$(".ittem-pro").animated("fadeInRight","fadeOutRight");
	$("form").animated("tada");
		
})