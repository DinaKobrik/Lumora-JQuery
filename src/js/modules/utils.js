import $ from "jquery";

// Функция для плавной прокрутки к секции
export function scrollToSection(target) {
  const $target = $(target);

  if ($target.length) {
    $("html, body").stop().animate(
      {
        scrollTop: $target.offset().top,
      },
      1000
    );
  }
}
