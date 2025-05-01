import $ from "jquery";

// Модуль для кнопки "Наверх" в футере
export function initFooter() {
  const $scrollTop = $(".footer__scroll-top");

  // Проверяем наличие элемента
  if (!$scrollTop.length) {
    return;
  }

  // Обработчик клика для скролла наверх
  $scrollTop.on("click", function () {
    $("html, body").stop().animate({ scrollTop: 0 }, 800);
  });
}
