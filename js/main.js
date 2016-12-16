function checkWidth(){
  if ($(window).width() < 900){
    $(".home header").show();
    $(".static").hide();
  }else {
    $(".static").show();
    if($(window).scrollTop() > 580){
      $(".home header").show();
    }else{
      $(".home header").hide();
    }
  }
}



$(document).ready(function(){
  // check screen width as soon as page loads
  checkWidth();

  //everytime you scroll, check screen width
  $(window).on("scroll",function(){
    checkWidth();
  });

  $(".menu").on("click",function(){
      $(".side-menu").toggleClass("active");
      if($(".side-menu").hasClass("active")){
          $(".menu-line").addClass("close");
      }else{
           $(".menu-line").removeClass("close");
      }
  });





});
