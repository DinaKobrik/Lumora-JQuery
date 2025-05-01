import $ from "jquery";

// Модуль для валидации формы
export function initForm() {
  const $form = $(".contact__form");

  // Проверяем наличие формы
  if (!$form.length) {
    return;
  }

  // Функция для валидации поля
  function validateField(
    $field,
    isEmail = false,
    isSelect = false,
    isOptional = false
  ) {
    let isValid = true;
    let value = $field.val();

    if (isSelect) {
      // Для <select> проверяем, выбрано ли значение, отличное от начального пустого
      isValid = value !== "" && value !== null;
    } else if (isEmail) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailPattern.test(value);
    } else if (!isOptional) {
      isValid = value && value.trim() !== "";
    } else {
      // Для необязательных полей валидация всегда проходит
      isValid = true;
    }

    // Анимация и стили ошибки
    if (!isValid && !isOptional) {
      $field
        .addClass("contact__input--error")
        .stop()
        .animate({ opacity: 0.7 }, 200)
        .animate({ opacity: 1 }, 200);
    } else {
      $field.removeClass("contact__input--error");
    }
    return isValid;
  }

  $form.on("submit", function (e) {
    e.preventDefault();

    let isValid = true;
    const $name = $('input[name="name"]');
    const $phone = $('input[name="phone"]');
    const $shootType = $('select[name="shoot-type"]');
    const $message = $('textarea[name="message"]');

    // Валидация полей
    isValid &= validateField($name);
    isValid &= validateField($phone);
    isValid &= validateField($shootType, false, true);
    isValid &= validateField($message, false, false, true); // message необязательное

    // Если форма валидна, показываем модальное окно и очищаем форму
    if (isValid) {
      const $successModal = $(
        '<div class="contact__success-modal active">' +
          '<span class="contact__success-close">×</span>' +
          "Форма успешно отправлена!" +
          "</div>"
      );
      $form.append($successModal);

      // Очистка формы
      $form[0].reset();

      // Автоматическое закрытие через 3 секунды
      setTimeout(() => {
        $successModal.removeClass("active").addClass("fade-out");
        setTimeout(() => {
          $successModal.remove();
        }, 300);
      }, 3000);

      // Закрытие по клику на крестик
      $successModal.find(".contact__success-close").on("click", function () {
        $successModal.removeClass("active").addClass("fade-out");
        setTimeout(() => {
          $successModal.remove();
        }, 300);
      });
    }
  });
}
