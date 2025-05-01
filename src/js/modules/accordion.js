import $ from "jquery";

// Модуль для аккордеона FAQ
export function initAccordion() {
  const $questions = $(".faq__question");
  const $answers = $(".faq__answer");

  // Проверяем наличие элементов
  if (!$questions.length || !$answers.length) {
    return;
  }

  // Скрываем все ответы при загрузке
  $answers.hide();

  // Обработчик клика по вопросу
  $questions.on("click", function () {
    const $answer = $(this).next(".faq__answer");
    const $parent = $(this).parent(".faq__item");

    // Если ответ уже открыт, закрываем его
    if ($answer.is(":visible")) {
      $answer.stop().slideUp(400);
      $parent.removeClass("faq__item--active");
    } else {
      // Закрываем другие открытые ответы
      $answers.stop().slideUp(400);
      $(".faq__item").removeClass("faq__item--active");
      // Открываем текущий ответ
      $answer.stop().slideDown(400);
      $parent.addClass("faq__item--active");
    }
  });
}
