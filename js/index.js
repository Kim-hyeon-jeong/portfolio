window.onload = function(){
 // Scroll Animation (sa, 스크롤 애니메이션)
 const saTriggerMargin = 300;
 const saElementList = document.querySelectorAll(".sa");
 console.log(saElementList);
 const saFunc = function() {
   for (const element of saElementList) {
     if (true) {
       if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
         element.classList.add('show');
       }
     }
   }
 }

 window.addEventListener('load', saFunc);
 window.addEventListener('scroll', saFunc);

 $('.btn_gotop').click(function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});
$('.homeBtn').click(function(){
	$('html, body').animate({scrollTop:0},400);
	return false;
});
$('.about').click(function(){
	$('html, body').animate({scrollTop:600},400);
	return false;
});
$('.publish').click(function(){
	$('html, body').animate({scrollTop:1450},400);
	return false;
});
$('.contact').click(function(){
	$('html, body').animate({scrollTop:2600},400);
	return false;
});
// $(window).scroll(function () {
//   var height = $(document).scrollTop();
//   console.log(height);	
// });
}
$(function(){
	let wWidth = $(window).outerWidth();
    
    $(window).on("resize", function(){
        wWidth = $(window).outerWidth();
		console.log(wWidth);
		if(wWidth > 0){
            $(".mainMenu, .bg").removeClass("active");
        }
		// if(wWidth < 767){
		// 	$(".bg, .mainMenu").removeClass("active");
		// }
	})
	$(".ham").click(function(){
		if(wWidth < 767){
			$(".bg, .mainMenu").toggleClass("active");

		}
	})
	$(".homeBtn, .about, .publish, .contact").click(function(){
		if(wWidth < 767){
			$(".bg, .mainMenu").removeClass("active");
		}
	})
})