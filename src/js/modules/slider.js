import $ from "jquery";

// Модуль для слайдера избранных работ
export function initSlider() {
  // Получаем элементы слайдера
  const $slides = $(".slider__item");
  const $prevBtn = $(".slider__prev");
  const $nextBtn = $(".slider__next");
  const $dotsContainer = $(".slider__dots");
  let currentSlide = 0;
  let isAnimating = false; // Флаг для предотвращения спама кликов
  let touchStartX = 0; // Координата начала касания
  let touchEndX = 0; // Координата конца касания

  // Генерация точек для каждого слайда
  $slides.each((index) => {
    const $dot = $('<span class="slider__dot"></span>');
    if (index === 0) $dot.addClass("slider__dot--active");
    $dotsContainer.append($dot);
  });
  const $dots = $(".slider__dot");

  // Функция для показа слайда с заданным индексом
  function showSlide(index) {
    if (isAnimating) return; // Не выполняем, если анимация уже идет
    isAnimating = true;

    // Удаляем активный класс у всех слайдов и точек
    $slides.removeClass("slider__item--active");
    $dots.removeClass("slider__dot--active");

    // Добавляем активный класс новому слайду и точке
    $slides.eq(index).addClass("slider__item--active");
    $dots.eq(index).addClass("slider__dot--active");

    // Разрешаем новую анимацию после завершения текущей (0.6s)
    setTimeout(() => {
      isAnimating = false;
    }, 600);

    currentSlide = index;
  }

  // Функция для перехода к следующему слайду
  function nextSlide() {
    const nextIndex = (currentSlide + 1) % $slides.length; // Циклический переход
    showSlide(nextIndex);
  }

  // Функция для перехода к предыдущему слайду
  function prevSlide() {
    const prevIndex = (currentSlide - 1 + $slides.length) % $slides.length; // Циклический переход
    showSlide(prevIndex);
  }

  // Инициализация: показываем первый слайд
  showSlide(0);

  // Автоматическое переключение каждые 5 секунд (только для экранов >= 768px)
  let autoSlide;
  if ($(window).width() >= 768) {
    autoSlide = setInterval(nextSlide, 5000);
  }

  // Обработчик клика по кнопке "Вперед"
  $nextBtn.on("click", () => {
    if (!isAnimating) {
      clearInterval(autoSlide); // Останавливаем автопрокрутку при ручном управлении
      nextSlide();
    }
  });

  // Обработчик клика по кнопке "Назад"
  $prevBtn.on("click", () => {
    if (!isAnimating) {
      clearInterval(autoSlide); // Останавливаем автопрокрутку при ручном управлении
      prevSlide();
    }
  });

  // Обработчик клика по точкам
  $dots.on("click", function () {
    if (!isAnimating) {
      clearInterval(autoSlide); // Останавливаем автопрокрутку
      const index = $dots.index(this);
      showSlide(index);
    }
  });

  // Обработка свайпа на сенсорных устройствах
  $(".slider__container").on("touchstart", (e) => {
    touchStartX = e.originalEvent.touches[0].clientX; // Сохраняем начальную координату
  });

  $(".slider__container").on("touchmove", (e) => {
    touchEndX = e.originalEvent.touches[0].clientX; // Обновляем конечную координату
  });

  $(".slider__container").on("touchend", () => {
    const deltaX = touchEndX - touchStartX; // Вычисляем разницу
    const threshold = 50; // Минимальное расстояние для свайпа

    if (!isAnimating) {
      clearInterval(autoSlide); // Останавливаем автопрокрутку
      if (deltaX > threshold) {
        prevSlide(); // Свайп вправо — предыдущий слайд
      } else if (deltaX < -threshold) {
        nextSlide(); // Свайп влево — следующий слайд
      }
    }
  });

  // Перезапуск автопрокрутки при изменении размера окна
  $(window).on("resize", () => {
    clearInterval(autoSlide);
    if ($(window).width() >= 768) {
      autoSlide = setInterval(nextSlide, 5000);
    }
  });
}
