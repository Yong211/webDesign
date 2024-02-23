$(function () {
  // var prevScrollTop = 0;

  // document.addEventListener("scroll", function () {
  //   var nowScrollTop = $(window).scrollTop();
  //   if (nowScrollTop > prevScrollTop) { $('header').addClass('active'); }
  //   else { $('header').removeClass('active'); }
  //   prevScrollTop = nowScrollTop;
  // });
  $('#fullpage').fullpage({
    autoScrolling: true,
    scrollHorizontally: false
  });
});

$(window).scroll(function () { 
	var scrollValue = $(window).scrollTop(); 
    console.log(scrollValue); 
});
