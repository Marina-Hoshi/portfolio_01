$(() => {
  const fadeInPage = () => {
    $('body').fadeIn(1000);
  };

  fadeInPage();

  const checkScrollFadeIn = (scrollBottom) => {
    const scrollFadeIn = $("._scrollFadeIn");

    scrollFadeIn.each((index, element) => {
      const $element = $(element);
      const elementTop = $element.offset().top;

      if (elementTop < scrollBottom) {
        $element.addClass("_isActiveFadeIn");
      } else {
        $element.removeClass("_isActiveFadeIn");
      }
    });
  };

  const checkScrollSlideFadeLeft = (scrollBottom) => {
    const scrollSlideFadeLeft = $("._scrollSlideFadeLeft");

    scrollSlideFadeLeft.each((index, element) => {
      const $element = $(element);
      const elementTop = $element.offset().top;

      if (elementTop < scrollBottom) {
        $element.addClass("_isActiveSlideFadeLeft");
      } else {
        $element.removeClass("_isActiveSlideFadeLeft");
      }
    });
  };

  const checkScrollSlideFadeRight = (scrollBottom) => {
    const scrollSlideFadeRight = $("._scrollSlideFadeRight");

    scrollSlideFadeRight.each((index, element) => {
      const $element = $(element);
      const elementTop = $element.offset().top;

      if (elementTop < scrollBottom) {
        $element.addClass("_isActiveSlideFadeRight");
      } else {
        $element.removeClass("_isActiveSlideFadeRight");
      }
    });
  };


  $(window).scroll(() => {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const scrollBottom = scrollTop + windowHeight;

    checkScrollFadeIn(scrollBottom);
    checkScrollSlideFadeLeft(scrollBottom);
    checkScrollSlideFadeRight(scrollBottom);
  });

  $(function(){
    $("#p-drawer_toggle").click(function(){
      $(this).toggleClass("open");
      $(".p-header__nav").fadeToggle();
    });

    $("#p-drawer_toggle").removeClass("open");

    const mediaQuery = window.matchMedia('(max-width: 480px)');

    const handleMediaQueryChange = (mediaQuery) => {
      if (mediaQuery.matches) {
        $(".p-header__nav").hide();
      }
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);
  });
});
