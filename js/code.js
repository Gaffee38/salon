// Модальное окно "записаться"
const bodyNode = document.body || document.getElementsByTagName("body")[0];

function openModal() {
  document.getElementById("overlay").classList.add("is-visible");
  document.getElementById("modal").classList.add("is-visible");
  bodyNode.classList.add("fix");
}

function closeModal() {
  document.getElementById("overlay").classList.remove("is-visible");
  document.getElementById("modal").classList.remove("is-visible");
  bodyNode.classList.remove("fix");
}

const screenWidth = window.screen.width;
const mobile = document.querySelector(".mobile");
const desctop = document.querySelector(".desctop");
function getScreenWidth() {
  if (mobile != null && desctop != null) {
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
  } else {
    return false;
  }
}
getScreenWidth();
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
});
var swiper = new Swiper(".staffSlider", {
  slidesPerView: 4,
  spaceBetween: 0,
  navigation: { nextEl: ".staff-next", prevEl: ".staff-prev" },
  breakpoints: {
    320: { slidesPerView: 1.2, spaceBetween: 20 },
    500: { slidesPerView: 2.4, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 0 },
  },
});
var swiper2 = new Swiper(".productsSlider", {
  slidesPerView: 4,
  spaceBetween: 5,
  navigation: { nextEl: ".products-next", prevEl: ".products-prev" },
  breakpoints: {
    320: { slidesPerView: 1.2, spaceBetween: 20 },
    500: { slidesPerView: 2.4, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 0 },
  },
});
var swiper3 = new Swiper(".equipmentSlider", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: { nextEl: ".equipment-next", prevEl: ".equipment-prev" },
});
var swiper4 = new Swiper(".resultsSlider", {
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: { nextEl: ".results-next", prevEl: ".results-prev" },
  breakpoints: {
    320: { slidesPerView: 1.2, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 2, spaceBetween: 0 },
  },
});
var swiper5 = new Swiper(".feedbacksSlider", {
  slidesPerView: 4,
  spaceBetween: 5,
  navigation: { nextEl: ".feedback-next", prevEl: ".feedback-prev" },
  breakpoints: {
    320: { slidesPerView: 1.2, spaceBetween: 20 },
    500: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 5 },
  },
});
var swiper6 = new Swiper(".smallSlider", {
  spaceBetween: 10,
  slidesPerView: 3,
  direction: "horizontal",
  watchSlidesProgress: !0,
  breakpoints: { 1024: { direction: "vertical" } },
});
var swiper7 = new Swiper(".bigSlider", {
  spaceBetween: 10,
  thumbs: { swiper: swiper6 },
});
var swiper8 = new Swiper(".tabsInfo", {
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: { nextEl: ".tabs-next", prevEl: ".tabs-prev" },
  breakpoints: {
    320: { slidesPerView: 3, spaceBetween: 10 },
    500: { slidesPerView: 4, spaceBetween: 10 },
    901: { slidesPerView: 3, spaceBetween: 10 },
    1024: { slidesPerView: 4, spaceBetween: 10 },
  },
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

// Табы
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
