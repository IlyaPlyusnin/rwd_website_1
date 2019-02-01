function navbarHide() {
  if (window.matchMedia("(max-width: 750px)").matches) {
    $(".navbar").hide();
    if ($(".ham-menu").hasClass("open")) {
      $(".ham-menu").removeClass("open");
    }
  } else {
    $(".navbar").show();
    if ($(".ham-menu").hasClass("open")) {
      $(".ham-menu").removeClass("open");
    }
  }
}

$(() => {
  $(window).resize(navbarHide);

  navbarHide();

  $(".ham-menu").on("click", () => {
    $(".ham-menu").toggleClass("open");
    $(".navbar").slideToggle(400);
  });

  $("#delivery").waypoint(
    direction => {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "120px"
    }
  );

  $("nav a, .main-btn").on("click", event => {
    if (event.target.hash !== "") {
      event.preventDefault();
      const hash = event.target.hash;
      let myOffset = 0;
      if (hash === "#delivery" || hash === "#cities") {
        myOffset = 70;
      } else {
        myOffset = 50;
      }

      let target = $(hash);
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - myOffset
          },
          800
        );
      }
    }
  });
});
