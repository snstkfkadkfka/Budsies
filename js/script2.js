$("nav .sub").hide()
$("nav>ul>li").mouseenter(function(){
$(this).find(".sub").stop().slideDown(300);
})
$("nav>ul>li").mouseleave(function(){
  $(this).find(".sub").stop().slideUp(300);
})
$("nav>ul>li").focusin(function(){
  $(".sub").stop().slideUp(300);
  $(this).find(".sub").stop().slideDown(300);
})
$("nav>ul>li").focusout(function(){
  $(".sub").stop().slideUp(300);
})
$(".tab .box>ul>li:gt(0)").hide();
$(".tab .con>ul li.title a ").click(function(){
    $(".tab .con>ul li.title a").removeClass("on");
    $(this).addClass("on");
    $(".tab .box>ul>li").hide();
    $($(this).attr("href")).show();
    return false;
})
$(".tab .con .box .img>li").mouseover(function(){
  $(this).find("a").stop().fadeIn()
  $(this).find(".pic").stop().css({filter:"blur(2px) brightness(80%)",transform:" scale(1.02)"})
})
$(".tab .con .box .img>li").mouseleave(function(){
  $(".tab .con .box .img a").stop().fadeOut()
  $(".tab .con .box .img>li>img").stop().css({filter:"blur(0px) brightness(100%)",transform:" scale(1)"})
})
$(".tab .con ul li.box .img a, footer ul li a").click(function(){
  return false;
})