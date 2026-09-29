'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});
function searchDestination() {

    var selected = document.getElementById("destination-search").value;

    if (selected === "") {
        alert("Please select a destination.");
        return;
    }

    var cards = document.querySelectorAll(".popular-card");

    for (var i = 0; i < cards.length; i++) {

        var card = cards[i];

        if (card.innerText.toLowerCase().includes(selected.toLowerCase())) {

            card.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            card.style.animation = "destinationBlink 0.5s 6";

            return;
        }
    }

    alert("Destination not found.");
}
function searchDestination() {

    var selected = document.getElementById("destination-search").value;

    if (selected === "") {
        alert("Please select a destination.");
        return;
    }

    var cards = document.querySelectorAll(".popular-card");

    for (var i = 0; i < cards.length; i++) {

        var card = cards[i];

        if (card.textContent.toLowerCase().includes(selected.toLowerCase())) {

            card.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            card.classList.remove("search-blink");

            setTimeout(function () {
                card.classList.add("search-blink");
            }, 700);

            setTimeout(function () {
                card.classList.remove("search-blink");
            }, 4000);

            return;
        }
    }

    alert("Destination not found.");
}
