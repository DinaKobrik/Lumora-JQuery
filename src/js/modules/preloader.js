import $ from "jquery";

export function initPreloader() {
  const $preloader = $("#preloader");

  if (!$preloader.length) {
    return;
  }

  // Скрываем прелоадер после загрузки DOM
  $(document).ready(function () {
    hidePreloader();
  });

  function hidePreloader() {
    $preloader.addClass("hidden");
    setTimeout(() => {
      $preloader.hide();
    }, 500);
  }
}
