(function (app) {
  "use strict";
  const pageItems = {};

  app.portfolioStartup = function () {
    pageItems.navbar = document.getElementById("navbar");
    pageItems.navbarItems = document.getElementById("navbarItems");
    pageItems.navCollapase = document.getElementById("navbarCollapse");

    window.addEventListener("scroll", changeNavColor);
    window.addEventListener("scroll", expandNavText);

    changeNavColor();
    expandNavText();
  };

  function changeNavColor() {
    if (window.scrollY > 100) {
      pageItems.navbar.style.backgroundColor = "var(--p-background-color)";
      pageItems.navbar.style.boxShadow =
        "var(--p-box-shadow) 0px 48px 100px 0px";
      pageItems.navbarItems.style.backgroundColor = "var(--p-background-color)";
    } else {
      pageItems.navbar.style.backgroundColor = "transparent";
      pageItems.navbar.style.boxShadow = "none";
      pageItems.navbarItems.style.backgroundColor = "transparent";
    }
  }

  function expandNavText() {
    if (window.scrollY > 100) {
      pageItems.navbarItems.style.fontSize = "1.2rem";
      pageItems.navbarItems.style.paddingRight = "1rem";
    } else {
      pageItems.navbarItems.style.fontSize = "1rem";
    }
  }
})((window.app = window.app || {}));
