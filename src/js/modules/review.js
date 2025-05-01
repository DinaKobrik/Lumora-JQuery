export function initReviews() {
  // Инициализация Slick Slider
  $(".reviews__slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Обработчик клика для "Читать полностью" (изменен селектор)
  $(".reviews__read-more").on("click", function () {
    const $textContainer = $(this).prev(".reviews__text"); // Находим предыдущий <p>
    const $textFull = $textContainer.find(".reviews__text-full"); // Ищем <span> внутри
    const $button = $(this);

    if ($textFull.length) {
      if ($textFull.is(":hidden")) {
        $textFull.show();
        $button.text("Свернуть");
      } else {
        $textFull.hide();
        $button.text("Читать полностью");
      }
    } else {
      console.error("Full text element not found for button:", $button);
    }
  });
}
