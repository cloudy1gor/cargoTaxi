$(function () {
  $(".auto__container").slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/dest/prev.svg" alt="#"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/dest/next.svg" alt="#"></button>',
  });

  $(".star").rateYo({
    starWidth: "20px",
    ratedFill: "#3cb458",
    normalFill: "#ccccce",
    readOnly: true,
    spacing: "5px",
  });

  // wow js
  new WOW().init();
});

// липкая шапка
$(function () {
  let header = $(".menu");
  let hederHeight = header.height(); // вычисляем высоту шапки

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      header.addClass("menu__fixed");
      $("body").css({
        paddingTop: hederHeight + "px", // делаем отступ у body, равный высоте шапки
      });
    } else {
      header.removeClass("menu__fixed");
      $("body").css({
        paddingTop: 0, // удаляю отступ у body, равный высоте шапки
      });
    }
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

// wow js
new WOW().init();
