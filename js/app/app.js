$(document).ready(function(){
  // Menu
  $('#menu').click(function(){
    $(this).toggleClass('open');
    if($(this).hasClass('open')){
      $('.home #logo, .home #contact').delay(300).fadeIn(500);
    } else {
      $('.home #logo, .home #contact').fadeOut(100);
    }
    $('#nav-wrap').toggleClass('open');
    $('#feed').toggleClass('close');
    var winH = $(window).height();
    var navH = $('nav').height();
    $('nav').css({marginTop: (winH-navH)/2 });
  });

  // Smooth Scroll
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });

  // Background
  $('.wrapper').height($(window).height());

  // Feed
  if($(window).width()>760){
    $('#feed').css({height: 76});
  } else {
    $('#feed').css({height: 58});
  }
  $('#feed').hover(
    function(){
      $(this).css({height: $('#news').height()-56});
    },
    function(){
      if($(window).width()>760){
        $(this).css({height: 76});
      } else {
        $(this).css({height: 58});
      }
    }
  );

  // Blog
  $('.title-wrap').hover(
    function(){
      $(this).parent().addClass('on');
    },
    function(){
      $(this).parent().removeClass('on');
    }
  );

});

$(window).ready(function(){

  $('header h1').fadeIn(1000);
  $('#brand h1, #brand p').delay(2000).fadeIn(1000);

  // Content
  var winH = $(window).height();
  $('#main-content').css({minHeight: (winH -100)});

});

$(window).resize(function(){

  // Background
  $('.wrapper').height($(window).height());

  // Menu
  var winH = $(window).height();
  var navH = $('nav').height();
  $('nav').css({marginTop: (winH-navH)/2 });

  // Feed
  if($(window).width()>760){
    $('#feed').css({height: 76});
  } else {
    $('#feed').css({height: 58});
  }
  $('#feed').hover(
    function(){
      $(this).css({height: $('#news').height()-56});
    },
    function(){
      if($(window).width()>760){
        $(this).css({height: 76});
      } else {
        $(this).css({height: 58});
      }
    }
  );

});
