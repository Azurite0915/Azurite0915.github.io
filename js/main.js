$(function(){
   // #main 애니메이션
   var scrollTop=$(window).scrollTop();
   var mainEvent=$('#main').offset();
   if (scrollTop = mainEvent) {
      var delay=0;
      $('#main .action').each(function(i, el){
         if(i==0){delay=0;}
         if(i==1){delay=100;}
         if(i==2){delay=350;}
         if(i==3){delay=500;}
         if(i==4){delay=750;}
         if(i==5){delay=1000;}
         setTimeout(function(){
            $(el).addClass('on');
         }, delay);
      })
   }

   /* 화면 scroll */
   $(window).scroll(function(){
      var scrollTop=$(window).scrollTop();

      // #about, #works, footer 애니메이션
      var aboutEvent=$('#about').offset().top-400;
      var worksEvent=$('#works').offset().top-500;
      var footerEvent=$('footer').offset().top-1010;
      var topbuttonEvent=$('#works').offset().top-1000;
      
      if (scrollTop > aboutEvent) {
         var delay=0;
         $('#about .action').each(function(i, el){
            if(i==0){delay=0;}
            if(i==1){delay=0;}
            if(i==2){delay=300;}
            if(i==3){delay=550;}
            if(i==4){delay=550;}
            if(i==5){delay=550;}
            if(i==6){delay=800;}
            if(i==7){delay=1000;}
            setTimeout(function(){
               $(el).addClass('on');
            }, delay);
         })
      }

      if (scrollTop > worksEvent) {
         var delay=0;
         $('#works .action').each(function(i, el){
            if(i==0){delay=0;}
            if(i==1){delay=350;}
            if(i==2){delay=550;}
            if(i==3){delay=750;}
            if(i==4){delay=950;}
            setTimeout(function(){
               $(el).addClass('on');
            }, delay);
         })
      }

      if (scrollTop > footerEvent) {
         var delay=0;
         $('footer .action').each(function(i, el){
            if(i==0){delay=0;}
            if(i==1){delay=300;}
            if(i==2){delay=450;}
            if(i==3){delay=600;}
            if(i==4){delay=750;}
            setTimeout(function(){
               $(el).addClass('on');
            }, delay);
         })
      }

      if (scrollTop > topbuttonEvent) {
         $('#topbutton').addClass('showtopbutton');
      } else if(scrollTop < topbuttonEvent) {
         $('#topbutton').removeClass('showtopbutton');
      }
   })

   /* 더 보기 버튼 */
   $('.scrolldown').click(function(){
      var about=$('#about').offset();
      $('html, body').animate({scrollTop:about.top}, 500);
      return false;
   });

   /* works 작업물 슬라이드 */
   var setting={
      navigation: {
         nextEl: '.main-slide .slide-button.next',
         prevEl: '.main-slide .slide-button.prev',
      },
      pagination: {
         el: '.main-slide .swiper-pagination',
         clickable: true,
      },
      effect: 'slide',
      loop:true,
      slidesPerView: 1,
      centeredSlides: true,
   }
   var swiper = new Swiper('.main-slide .swiper-container', setting);

   /* TOP버튼 */
   $('#topbutton').click(function(){
      $('html, body').animate({scrollTop:0}, 600);
      return false;
   });
})