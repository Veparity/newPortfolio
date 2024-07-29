(function (app) {
  "use strict";

  app.portfolioStartup = function () {
    console.log("portfolioStartup called");
    initIntersectionObserver();
  };

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
