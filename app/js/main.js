$(function () {
  //меню бургер
  $(".menu__btn, .menu a").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });
  // когда нажимаем вне меню, оно пропадает
  $(document).mouseup(function (event) {
    var div = $(".menu__list");

    if (!div.is(event.target) && div.has(event.target).length === 0) {
      $(".menu__list").removeClass("menu__list--active");
    }
  });

  //кнопка наверх
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $(".up").fadeIn();
    } else {
      $(".up").fadeOut();
    }
  });

  $(".up").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800);
  });

  // слайдер
  $(".auto__container").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/dest/prev.svg" alt="#"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/dest/next.svg" alt="#"></button>',
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // рейтинг
  $(".star").rateYo({
    starWidth: "20px",
    ratedFill: "#3cb458",
    normalFill: "#ccccce",
    readOnly: true,
    spacing: "5px",
  });
});

// плавный скролл
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]');

// Цикл по всем ссылкам
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute("href")
      ? anchor.getAttribute("href")
      : "body";
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// animated
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 90, // offset (in px) from the original trigger point
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
