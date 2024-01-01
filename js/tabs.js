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
