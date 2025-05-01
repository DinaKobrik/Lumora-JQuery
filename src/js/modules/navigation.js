import $ from "jquery";

// Модуль для плавного скролла по навигации и гамбургер-меню
export function initNavigation() {
  const $links = $(".nav__link");
  const $hamburger = $(".nav__hamburger");
  const $navList = $(".nav__list");

  // Проверяем наличие элементов
  if (!$links.length || !$hamburger.length || !$navList.length) {
    return;
  }

  // Обработчик клика по навигационным ссылкам
  $links.on("click", function (e) {
    e.preventDefault();
    const targetId = $(this).attr("href");
    const $target = $(targetId);

    if ($target.length) {
      $("html, body").stop().animate(
        {
          scrollTop: $target.offset().top,
        },
        800
      );
      // Закрываем меню на мобильных устройствах
      $navList.removeClass("nav__list--open");
      $hamburger.removeClass("nav__hamburger--active");
    }
  });

  // Обработчик клика по гамбургер-меню
  $hamburger.on("click", function () {
    $(this).toggleClass("nav__hamburger--active");
    $navList.toggleClass("nav__list--open");
  });
}
