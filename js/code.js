// Галлерея
Fancybox.bind('[data-fancybox="gallery"]', {});

// Burger-menu
$(".logo__wrapper").on("click", ".burger", function () {
  $(".nav__mobile").show("slide", { direction: "right" }),
    $("body").css("overflow", "hidden");
}),
  $(".close-btn").click(function () {
    $(".nav__mobile").hide("slide", { direction: "right" }),
      $("body").css("overflow", "auto");
  }),
  $(".toggler").click(function () {
    $(this).next("ul").toggle(200), $(this).toggleClass("open");
  });

// Слайдеры
var swiper0 = new Swiper(".mainSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: { nextEl: ".main-next", prevEl: ".main-prev" },
  }),
  swiper = new Swiper(".staffSlider", {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: { nextEl: ".staff-next", prevEl: ".staff-prev" },
    breakpoints: {
      320: { slidesPerView: 1.2, spaceBetween: 20 },
      500: { slidesPerView: 2.4, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 0 },
    },
  }),
  swiper2 = new Swiper(".productsSlider", {
    slidesPerView: 4,
    spaceBetween: 5,
    navigation: { nextEl: ".products-next", prevEl: ".products-prev" },
    breakpoints: {
      320: { slidesPerView: 1.2, spaceBetween: 20 },
      500: { slidesPerView: 2.4, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 0 },
    },
  }),
  swiper3 = new Swiper(".equipmentSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: { nextEl: ".equipment-next", prevEl: ".equipment-prev" },
  }),
  swiper4 = new Swiper(".resultsSlider", {
    slidesPerView: 2,
    spaceBetween: 5,
    navigation: { nextEl: ".results-next", prevEl: ".results-prev" },
    breakpoints: {
      320: { slidesPerView: 1.2, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 2, spaceBetween: 0 },
    },
  }),
  swiper5 = new Swiper(".feedbacksSlider", {
    slidesPerView: 4,
    spaceBetween: 5,
    navigation: { nextEl: ".feedback-next", prevEl: ".feedback-prev" },
    breakpoints: {
      320: { slidesPerView: 1.2, spaceBetween: 20 },
      500: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 5 },
    },
  }),
  swiper6 = new Swiper(".smallSlider", {
    spaceBetween: 10,
    slidesPerView: 3,
    direction: "horizontal",
    watchSlidesProgress: !0,
    breakpoints: { 1024: { direction: "vertical" } },
  }),
  swiper7 = new Swiper(".bigSlider", {
    spaceBetween: 10,
    thumbs: { swiper: swiper6 },
  });

// Увеличивание количества товаров в корзине
$(".quantity_inner .bt_minus").click(function () {
  let e = $(this).parent().find(".quantity"),
    i = parseInt(e.val()) - 1;
  (i = i < 1 ? 1 : i), e.val(i);
}),
  $(".quantity_inner .bt_plus").click(function () {
    let e = $(this).parent().find(".quantity"),
      i = parseInt(e.val()) + 1;
    (i = i > parseInt(e.data("max-count")) ? parseInt(e.data("max-count")) : i),
      e.val(parseInt(i));
  }),
  $(".quantity_inner .quantity").bind("change keyup input click", function () {
    this.value.match(/[^0-9]/g) &&
      (this.value = this.value.replace(/[^0-9]/g, "")),
      "" == this.value && (this.value = 1),
      this.value > parseInt($(this).data("max-count")) &&
        (this.value = parseInt($(this).data("max-count")));
  });

// Ошибка отправки формы
$(".error__alert").click(function () {
  $(this).next(".close").toggle(200), $(this).toggleClass("hide");
});

// Модальное окно "записаться"
$(".record").on("click", function () {
  $(".popup").fadeIn(500);
  $("body").addClass("fix");
});
$(".close").on("click", function () {
  $(".popup").fadeOut(500);
  $("body").removeClass("fix");
});

// Код для блока с сайдбаром (цены, каталог)
const screenWidth = window.screen.width;
const mobile = document.querySelector(".mobile");
const desctop = document.querySelector(".desctop");

function getScreenWidth() {
  if (screenWidth > 768) {
    desctop.classList.add("visible");
    $(".tabs-wrapper").each(function () {
      let e = $(this);
      e.find(".tab-item").not(":first").hide(),
        e
          .find(".tab")
          .click(function () {
            e
              .find(".tab")
              .removeClass("active")
              .eq($(this).index())
              .addClass("active"),
              e.find(".tab-item").hide().eq($(this).index()).fadeIn(50);
          })
          .eq(0)
          .addClass("active");
    });
  } else {
    mobile.classList.add("visible");
    $(".select").change(function () {
      $(".tab-item").removeClass("active");
      var SelectOption = $(".select").val();
      $(".tab-item[data-tab=" + SelectOption + "]").addClass("active");
    });
  }
}
getScreenWidth();
