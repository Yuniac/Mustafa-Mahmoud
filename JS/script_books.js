// the popovers for the missing links of the books
const wikiLinks = document.querySelectorAll(".missing-wiki-source");
missingLinks = Array.from(wikiLinks);
const missingLinkInformation = document.querySelectorAll(".wiki-notice-hide");
missingLinkInfo = Array.from(missingLinkInformation);

missingLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const missingBook1Info = document.querySelector(`#${link.id}Info`);
    missingBook1Info.classList.remove("wiki-visibility");

    if (missingBook1Info.classList.contains("wiki-notice-hide")) {
      missingBook1Info.classList.remove("wiki-notice-hide");

      setTimeout(function () {
        missingBook1Info.classList.add("wiki-notice-hide");
      }, 3500);

      setTimeout(function () {
        missingBook1Info.classList.add("wiki-visibility");
      }, 4600);
    }
  });
});

// highlight function
const islamAndMarxism = document.querySelector("#islamAndMarxism");
const islamAndMarxismURL =
  "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#islamAndMarxism";

const whyIRefusedMarxism = document.querySelector("#whyIRefusedMarxism");
const whyIRefusedMarxismURL =
  "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#whyIRefusedMarxism";

const dialogue = document.querySelector("#dialogue");
const dialogueURL =
  "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#dialogue";

const modernUnderstanding = document.querySelector("#modernUnderstanding");
const modernUnderstandingURL =
  "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#modernUnderstanding";

const intercession = document.querySelector("#Intercession");
const intercessionURL =
  "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#Intercession";

const trip = document.querySelector("#trip");
const tripURL =
  "http://127.0.0.1:5501/Mustafa-Mahmoud.github.io/books.html#trip";

const allahAndTheHuman = document.querySelector("#allahAndTheHuman");
const allahAndTheHumanURL =
  "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#allahAndTheHuman";

const lifePuzzle = document.querySelector("#lifePuzzle");
const lifePuzzleURL =
  "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#lifePuzzle";

const deathPuzzle = document.querySelector("#deathPuzzle");
const deathPuzzleURL =
  "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#deathPuzzle";

function highlight(book, url) {
  if (window.location.href === url) {
    book.classList.add("highlight");
    setTimeout(() => {
      book.classList.remove("highlight");
    }, 2500);
  }
}

highlight(islamAndMarxism, islamAndMarxismURL);
highlight(whyIRefusedMarxism, whyIRefusedMarxismURL);
highlight(dialogue, dialogueURL);
highlight(modernUnderstanding, modernUnderstandingURL);
highlight(intercession, intercessionURL);
highlight(trip, tripURL);
highlight(allahAndTheHuman, allahAndTheHumanURL);
highlight(lifePuzzle, lifePuzzleURL);
highlight(deathPuzzle, deathPuzzleURL);

// the navbar
const menuButton = document.querySelector(".current-page");
const navBar = document.querySelector(".sub-nav-items");
menuButton.addEventListener("click", () => {
  if (navBar.style.height === "0px") {
    navBar.style.height = "220px";
  } else {
    navBar.style.height = "0px";
  }
});

// the footer links
const lgLink = document.querySelector(".language"); // the language link
const lgInfo = document.querySelector(".language-description"); // the link's info

lgLink.addEventListener("click", () => {
  if (lgInfo.classList.contains("lginfo-visibility")) {
    lgInfo.classList.remove("lginfo-visibility");
    setTimeout(function () {
      lgInfo.classList.add("lginfo-visibility");
    }, 1500);
  }
});
