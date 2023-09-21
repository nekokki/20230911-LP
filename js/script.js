// スクロール時の処理
jQuery(window).on("scroll", function () {
  if (100 < jQuery(this).scrollTop()) {
    jQuery(".to-top").addClass("is-show");
  } else {
    jQuery(".to-top").removeClass("is-show");
  }
});

// アンカーリンクのクリック時の処理
jQuery('a[href^="#"]').on("click", function () {
  var id = jQuery(this).attr("href");
  var headerHeight = jQuery(".p-header").height(); // ヘッダーの高さを取得
  var position = 0;

  if (id != "#") {
    position = jQuery(id).offset().top - headerHeight; // ヘッダーの高さを考慮
  }

  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );
});

jQuery('a[href^="#"]').on("click", function () {
  var id = jQuery(this).attr("href");
  var position = 0;

  if (id != "#") {
    position = jQuery(id).offset().top;
  }

  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );
});

$(document).ready(function () {
  // プライバシーポリシーのテキストがクリックされたとき
  $(".custom-label a").click(function (e) {
    e.preventDefault(); // デフォルトのクリック動作をキャンセル
    $("#privacyModal").fadeIn(); // モーダルを表示
  });

  // モーダルの閉じるボタンがクリックされたとき
  $(".close").click(function () {
    $("#privacyModal").fadeOut(); // モーダルを非表示
  });

  // モーダルの背景がクリックされたときも閉じる
  $("#privacyModal").click(function (e) {
    if (e.target === this) {
      $(this).fadeOut();
    }
  });
});

$(document).ready(function () {
  $(".faq-item__texts").on("click", function () {
    $(this).find(".faq-item__answer").slideToggle();
  });
});
