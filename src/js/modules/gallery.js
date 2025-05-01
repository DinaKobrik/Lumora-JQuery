import $ from "jquery";

// Модуль для фильтруемой галереи портфолио
export function initGallery() {
  const $filters = $(".gallery__filter");
  const $items = $(".gallery__item");

  // Проверяем наличие элементов
  if (!$filters.length || !$items.length) {
    return;
  }

  // Обработчик клика по кнопкам фильтра
  $filters.on("click", function () {
    const filter = $(this).data("filter");

    // Удаляем активный класс у всех кнопок
    $filters.removeClass("gallery__filter--active");
    // Добавляем активный класс текущей кнопке
    $(this).addClass("gallery__filter--active");

    // Показываем или скрываем элементы галереи
    if (filter === "all") {
      $items.stop().fadeIn(400);
    } else {
      $items.stop().each(function () {
        if ($(this).data("category") === filter) {
          $(this).stop().fadeIn(400);
        } else {
          $(this).stop().fadeOut(400);
        }
      });
    }
  });

  // По умолчанию показываем все элементы
  $filters.filter('[data-filter="all"]').trigger("click");
}
