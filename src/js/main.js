import $ from "jquery";
import { initPreloader } from "./modules/preloader.js";
import { scrollToSection } from "./modules/utils.js";
import { initHero } from "./modules/hero";
import { initSlider } from "./modules/slider";
import { initAccordion } from "./modules/accordion";
import { initGallery } from "./modules/gallery";
import { initReviews } from "./modules/review";
import { initForm } from "./modules/form";
import { initNavigation } from "./modules/navigation";
import { initFooter } from "./modules/footer";

$(document).ready(() => {
  try {
    initPreloader();
    initHero();
    initSlider();
    initAccordion();
    initGallery();
    initReviews();
    initForm();
    initNavigation();
    initFooter();
  } catch (error) {
    console.error("Error initializing modules:", error);
  }

  // Обработчик клика для кнопки в Hero-секции
  const $heroBtn = $(".hero__btn");
  if ($heroBtn.length) {
    $heroBtn.on("click", function () {
      scrollToSection("#gallery");
    });
  }
});
