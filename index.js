$("button").hover(function(){
    $(this).css("background-color", "#3c4048");
    }, function(){
    $(this).css("background-color", "#65c8d6");
  });

  let scroll_link = $('.scroll');

  scroll_link.click(function(e){
      e.preventDefault();
      let url = $('body').find($(this).attr('href')).offset().top;
      $('html, body').animate({
        scrollTop : url
      },700);
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
      return false;
});