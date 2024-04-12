$(() => {
  const fadeInPage = () => {
    $('body').fadeIn(1000);

  const $hamburgerMenu = $('.p-hamburger');
  $hamburgerMenu.fadeIn(1000);
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

// ハンバーガーメニューのクリックイベントを設定する
$('#js-hamburger').on('click', function() {
  // 背景色が透過した黄色のボックスを表示する
  $('#js-black-bg').fadeIn(300);
  // メニューのリストをフェードインする
  $('.p-header__nav').fadeIn(300).toggleClass('is-active');
});
});
