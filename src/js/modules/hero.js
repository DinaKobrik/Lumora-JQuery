import $ from "jquery";

// Модуль для анимации Hero-секции
export function initHero() {
  const $title = $(".hero__title");
  const $subtitle = $(".hero__subtitle");
  const $btn = $(".hero__btn");

  // Проверяем наличие элементов
  if (!$title.length || !$subtitle.length || !$btn.length) {
    return;
  }

  // Устанавливаем начальные стили
  $title.css({ opacity: 0, position: "relative", top: "20px" });
  $subtitle.css({ opacity: 0, position: "relative", top: "20px" });
  $btn.css({ opacity: 0, position: "relative", top: "20px" });

  // Анимация появления заголовка
  $title.stop().delay(300).animate({ opacity: 1, top: 0 }, 800);

  // Анимация появления подзаголовка
  $subtitle.stop().delay(600).animate({ opacity: 1, top: 0 }, 800);

  // Анимация появления кнопки
  $btn.stop().delay(900).animate({ opacity: 1, top: 0 }, 800);
}
