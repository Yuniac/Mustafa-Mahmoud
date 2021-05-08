// Copyright Yusuf Sabbag. Distributed under the MIT License respectively CC-BY NC License. 

// // enable poppers
// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
// var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
//     return new bootstrap.Popover(popoverTriggerEl)
// })

// // hide show the notice div on top of the page
// $(document).ready(function() {
//     $("#hideButton").click(function() {
//         $("#noticeDiv").slideUp()
//     })
// })

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