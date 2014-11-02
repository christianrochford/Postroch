(function() {

  logo = document.getElementById('logo');
  brick1 = document.getElementById('brick1');
  brick2 = document.getElementById('brick2');
  brick3 = document.getElementById('brick3');
  brick4 = document.getElementById('brick4');
  brick5 = document.getElementById('brick5');
  brick6 = document.getElementById('brick6');
  brick7 = document.getElementById('brick7');
  brick8 = document.getElementById('brick8');
  brick9 = document.getElementById('brick9');
  brick10 = document.getElementById('brick10');
  brick11 = document.getElementById('brick11');
  brick12 = document.getElementById('brick12');
  brick13 = document.getElementById('brick13');
  brick14 = document.getElementById('brick14');
  brick15 = document.getElementById('brick15');
  brick16 = document.getElementById('brick16');

  function original() {
    var tl = new TimelineMax();
    tl.to(brick1, 0.1, {
      css: {
        top: 0,
        left: 0,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick2, 0.1, {
      css: {
        top: 0,
        left: 15,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick3, 0.1, {
      css: {
        top: 0,
        left: 30,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick4, 0.1, {
      css: {
        top: 0,
        left: 45,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick5, 0.1, {
      css: {
        top: 15,
        left: 0,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick6, 0.1, {
      css: {
        top: 15,
        left: 15,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick7, 0.1, {
      css: {
        top: 15,
        left: 30,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick8, 0.1, {
      css: {
        top: 15,
        left: 45,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick9, 0.1, {
      css: {
        top: 30,
        left: 0,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick10, 0.1, {
      css: {
        top: 30,
        left: 15,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick11, 0.1, {
      css: {
        top: 30,
        left: 30,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick12, 0.1, {
      css: {
        top: 30,
        left: 45,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick13, 0.1, {
      css: {
        top: 45,
        left: 0,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick14, 0.1, {
      css: {
        top: 45,
        left: 15,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick15, 0.1, {
      css: {
        top: 45,
        left: 30,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    tl.to(brick16, 0.1, {
      css: {
        top: 45,
        left: 45,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
  }

  function logoHover() {
    var hover = new TimelineMax();
    hover.to(brick1, 0.1, {
      css: {
        top: 45,
        left: 45,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick2, 0.1, {
      css: {
        top: 45,
        left: 30,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick3, 0.1, {
      css: {
        top: 45,
        left: 15,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick4, 0.1, {
      css: {
        top: 45,
        left: 0,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick5, 0.1, {
      css: {
        top: 30,
        left: 45,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick6, 0.1, {
      css: {
        top: 30,
        left: 30,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick7, 0.1, {
      css: {
        top: 30,
        left: 15,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick8, 0.1, {
      css: {
        top: 30,
        left: 0,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick9, 0.1, {
      css: {
        top: 15,
        left: 45,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick10, 0.1, {
      css: {
        top: 15,
        left: 30,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick11, 0.1, {
      css: {
        top: 15,
        left: 15,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick12, 0.1, {
      css: {
        top: 15,
        left: 0,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick13, 0.1, {
      css: {
        top: 0,
        left: 45,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick14, 0.1, {
      css: {
        top: 0,
        left: 30,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick15, 0.1, {
      css: {
        top: 0,
        left: 15,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
    hover.to(brick16, 0.1, {
      css: {
        top: 0,
        left: 0,
        rotation: '180'
      },
      ease: Expo.easeOut
    });
  }

  original();
  logo.addEventListener('mouseover', logoHover, false);
  logo.addEventListener('mouseleave', original, false);

  $(document).ready(function(){
    // Menu
    $('#menu').click(function(){
      $(this).toggleClass('open');
      $('#nav-wrap').toggleClass('open');
      $('#feed').toggleClass('close');
      var winH = $(window).height();
      var navH = $('nav').height();
      $('nav').css({marginTop: (winH-navH)/2 });
    });
  });

  $(window).ready(function(){
  	$('header h1'). fadeIn(1000);
  });

  // Background
  $('.wrapper').height($(window).height());

}());

$(window).resize(function(){
  // Background
  $('.wrapper').height($(window).height());
  // Menu
  var winH = $(window).height();
  var navH = $('nav').height();
  $('nav').css({marginTop: (winH-navH)/2 });
});
