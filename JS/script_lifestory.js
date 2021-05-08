// Copyright Yusuf Sabbag. Distributed under the MIT License respectively CC-BY NC License. 

// the notice div
const noticeButton = document.querySelector("#hideButton");
const noticeDiv = document.querySelector("#noticeDiv");
noticeButton.addEventListener("click", () => {
    noticeDiv.style.visibility = "hidden";
});

// // changing the duration between the sliders
// $(document).ready(function() {
//     $('.carousel').carousel({
//         interval: 2500
//     })
// })

// // scroll to top button 
// let goTopButton = document.getElementById("scrollToTopButton");
// let root = document.documentElement;

// function goTop() {
//     root.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     })
// };

// goTopButton.addEventListener("click", goTop);

// the footer language link
const lgLink = document.querySelector(".language"); // the link
const lgInfo = document.querySelector(".language-description"); // the link's info

lgLink.addEventListener("click", () => {
    if (lgInfo.classList.contains("lginfo-visibility")) {
        lgInfo.classList.remove("lginfo-visibility");
        setTimeout(function() {
            lgInfo.classList.add("lginfo-visibility");
        }, 1500)
    }
});