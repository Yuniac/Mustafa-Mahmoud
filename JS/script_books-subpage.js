// Copyright Yusuf Sabbag. Distributed under the MIT License respectively CC-BY NC License.

const wikiLinks = document.querySelectorAll(".missing-wiki-source");
const missingLinks = Array.from(wikiLinks);
const missingLinkInformation = document.querySelectorAll(".wiki-notice-hide");
const missingLinkInfo = Array.from(missingLinkInformation);

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

// the no download link
const missingDlLink = document.querySelector("#missingDLLink");
missingDlLink.addEventListener("click", () => {
  const missingDLPara = document.querySelector("#missingDLPara");
  missingDLPara.classList.remove("wiki-visibility");

  if (missingDLPara.classList.contains("wiki-notice-hide")) {
    missingDLPara.classList.remove("wiki-notice-hide");
    missingDLPara.style.right = "140px";
    missingDLPara.style.width = "120px";

    setTimeout(function () {
      missingDLPara.classList.add("wiki-notice-hide");
    }, 3500);

    setTimeout(function () {
      missingDLPara.classList.add("wiki-visibility");
    }, 4600);
  }
});

// highlight book cards when needed e.g: (when user clicks on a book title from another page to bring him here, highlight this book upon loading);

// setting up variables for desired books to be highlighted;
const number7Book = document.querySelector("#number7");
const number7URL =
  "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books-subpage.html#number7";

const theImpossible = document.querySelector("#theImpossible");
const theImpossibleURL =
  "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books-subpage.html#theImpossible";

const earthQuake = document.querySelector("#theEarthQuake");
const earthQuakeURL =
  "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books-subpage.html#theEarthQuake";

const greatIsk = document.querySelector("#greatIsk");
const greatIskURL =
  "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books-subpage.html#greatIsk";

function highlight(book, url) {
  if (window.location.href === url) {
    book.classList.add("highlight");
    setTimeout(() => {
      book.classList.remove("highlight");
    }, 2500);
  }
}

highlight(theImpossible, theImpossibleURL);
highlight(number7Book, number7URL);
highlight(earthQuake, earthQuakeURL);
highlight(greatIsk, greatIskURL);

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
