const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  slideToClickedSlide:true,
  effect:"coverflow",
  spaceBetween:-32,//간격은 안줌
  slidesPerView:"auto",//한 화면애 보여주는 슬라이드 수
  grabCursor:true,//마우스 커서포인트
  centeredSlides:true,//가운데 정렬
  speed:1000,//1초 시간
  autoplay:{
    delay:2800,
    disableOnInteraction:true,
  },

  coverflowEffect:{
    rotate:0,
    stretch:70,
    depth:400,
    modifier:1,
    slideShadows:false,

  }

});

// 슬라이드
$(window).scroll(function(){
  let value=$(this).scrollTop();
  console.log(value);
  // part 2 영역
 
  if(value>700){
      $("article #pickImg1 .fl1,article #pickImg1 .fl2").removeClass("on");
      $("article #pickImg1 .fl1,article #pickImg1 .fl2").addClass("on");

      $('article #pickImg1 .di').removeClass("on");
      $('article #pickImg1 .di').addClass("on");
 
      
    };
    // part 3
    if(value>1200){
      
      $('#pickImg2 .di,#pickImg2 .cS,#pickImg2 .L,#pickImg2 .cL,#pickImg2 .S').removeClass("on");
      
      $('#pickImg2 .di,#pickImg2 .cS,#pickImg2 .L,#pickImg2 .cL,#pickImg2 .S').addClass("on");

    
  };
  // part 4
    if(value>1600){
      
      $('#pickImg3 .B, #pickImg3 .M,#pickImg3 .S').removeClass("on");
      $('#pickImg3 .B, #pickImg3 .M,#pickImg3 .S').addClass("on");
    $(".bg").show();
    }; 
    if(1599>value){
      
    $(".bg").hide()
    }; 
  });
  
  $(".fur,.pellet,.heart").hide()
  
  $("section .cir1").click(function(e){
    e.preventDefault() ;
    $("section .line1").toggleClass("on");
    $(".fur").fadeToggle();
    return false;
  })
  
  $("section .cir2").click(function(e){
    e.preventDefault() ;
    $("section .line2").toggleClass("on");
    $(".heart").fadeToggle();
    return false;
  })
  
  $("section .cir3").click(function(e){
    e.preventDefault() ;
    $("section .line3").toggleClass("on");
    $(".pellet").fadeToggle();
    return false;
  })



  $(".con .titel ul li a").click(function(){
    $(".con .box>ul>li").hide();
    $($(this).attr("href")).show();
    return false;
  })
  $(".tab .but").hide();

  $(".tab .but .prior").click(function(){
    $("#doll .conbox").removeClass('on');
    $("#doll .conbox").addClass('on');
    $("#Household .conbox").removeClass('on');
    $("#Household .conbox").addClass('on');
 $(".prior").css({filter:"opacity(0.5)"});
 $(".next").css({filter:"opacity(1)"});
})
$(".tab .but .next").click(function(){
  $("#doll .conbox").removeClass('on');
  $("#Household .conbox").removeClass('on');
  $(".next").css({filter:"opacity(0.5)"});
  $(".prior").css({filter:"opacity(1)"});
})


$(".tab .titel ul li:first-child a" ).click(function(){
  $(".tab .but").fadeOut(200);
})
$(".tab .titel ul li:gt(0) a" ).click(function(){
  $(".tab .but").fadeIn(200);
  $("#doll .conbox").removeClass('on');
  $("#Household .conbox").removeClass('on');
  $(".prior").css({filter:"opacity(1)"});
  $(".next").css({filter:"opacity(0.5)"});

})
$(".tab .box #clothes,.tab .box #Household,footer ul li a").click(function(){
  return false;
})



$("nav .sub, header .navBG").hide()
$("nav>ul>li").mouseenter(function(){
$(this).find(".sub").stop().slideDown(300);
$("header .navBG").stop().slideDown(300);

})
$("nav>ul>li").mouseleave(function(){
  $(this).find(".sub").stop().slideUp(300);
  $("header .navBG").stop().slideUp(300);
  
})
$("nav>ul>li").focusin(function(){
  $("header .navBG").stop().slideDown(300);
  $(".sub").stop().slideUp(300);
  $(this).find(".sub").stop().slideDown(300);
})
$("nav>ul>li").focusout(function(){
  $("header .navBG").stop().slideUp(300);
  $(".sub").stop().slideUp(300);
})
