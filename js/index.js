window.onload = function(){
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

 const content = "Welcome to my Portfolio!";
 const text = document.querySelector(".text1");
 let i = 0;
 
 function typing(){
	 if (i < content.length) {
	 let txt = content.charAt(i);
	 text.innerHTML += txt;
	 i++;
	 }
 }
 setInterval(typing, 200)
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
	$('.homeBtn').click(function(){			
		var offset = $('.div1').offset(); //선택한 태그의 위치를 반환               
		 //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 	       
		$('html').animate({scrollTop : offset.top}, 400);		
	});
	$('.about').click(function(){			
		var offset2 = $('.div2').offset(); //선택한 태그의 위치를 반환               
		 //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 	       
		$('html').animate({scrollTop : offset2.top}, 400);		
	});
	$('.publish').click(function(){			
		var offset3 = $('.div3').offset(); //선택한 태그의 위치를 반환               
		 //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 	       
		$('html').animate({scrollTop : offset3.top}, 400);		
	});
	$('.contact').click(function(){			
		var offset4 = $('.div4').offset(); //선택한 태그의 위치를 반환               
		 //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 	       
		$('html').animate({scrollTop : offset4.top}, 400);		
	});

})