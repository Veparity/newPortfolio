(function (app) {
  "use strict";
  // const pageItems = {};

  app.portfolioStartup = function () {
    console.log("portfolioStartup called");
    // pageItems.navbar = document.getElementById("navbar");
    // pageItems.navbarItems = document.getElementById("navbarItems");
    // pageItems.navCollapase = document.getElementById("navbarCollapse");

    // window.addEventListener("scroll", changeNavColor);
    // window.addEventListener("scroll", expandNavText);

    // changeNavColor();
    // expandNavText();

    initIntersectionObserver();
  };

  // function changeNavColor() {
  // if (window.scrollY > 100) {
  //   pageItems.navbar.style.backgroundColor = "var(--p-background-color)";
  //   pageItems.navbar.style.boxShadow =
  //     "var(--p-box-shadow) 0px 48px 100px 0px";
  //   pageItems.navbarItems.style.backgroundColor = "var(--p-background-color)";
  // } else {
  //   pageItems.navbar.style.backgroundColor = "transparent";
  //   pageItems.navbar.style.boxShadow = "none";
  //   pageItems.navbarItems.style.backgroundColor = "transparent";
  // }
  // }

  // function expandNavText() {
  //   if (window.scrollY > 100) {
  //     pageItems.navbarItems.style.fontSize = "1.2rem";
  //     pageItems.navbarItems.style.paddingRight = "1rem";
  //   } else {
  //     pageItems.navbarItems.style.fontSize = "1rem";
  //   }
  // }

  function initIntersectionObserver() {
    const animationElements = document.querySelectorAll(".load-in-from-top");

    if (animationElements.length === 0) {
      console.log("No elements to observe");
    } else {
      console.log("Observing elements:", animationElements);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("IntersectionObserver callback:", entry);
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animationElements.forEach((element) => {
      console.log("Observing element:", element);
      observer.observe(element);
    });
  }

  // Apply animation immediately to the hero section element if it's in view on load
  function applyInitialAnimation() {
    const heroElement = document.querySelector(".hero .load-in-from-top");

    if (heroElement) {
      heroElement.classList.add("animate"); // Apply animation immediately
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");
    applyInitialAnimation();
    app.portfolioStartup();
  });
})((window.app = window.app || {}));
