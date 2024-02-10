// Copyright Yusuf Sabbag. Distributed under the MIT License respectively CC-BY NC License.

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
