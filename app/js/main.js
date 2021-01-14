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
});
