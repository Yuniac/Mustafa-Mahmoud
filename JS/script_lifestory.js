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


// the footer links
const lgLink = document.querySelector(".language"); // the language link
const lgInfo = document.querySelector(".language-description"); // the link's info

lgLink.addEventListener("click", () => {
    if (lgInfo.classList.contains("lginfo-visibility")) {
        lgInfo.classList.remove("lginfo-visibility");
        setTimeout(function() {
            lgInfo.classList.add("lginfo-visibility");
        }, 1500)
    }
});

const copyLink = document.querySelector(".special-li");
const copyInfo = document.querySelector(".copy-notice");
const notCopied = "أنقر لنسخ رابط الموقع";
const copied = "تم النسخ!";
copyInfo.textContent = notCopied;

copyLink.addEventListener("mouseover", () => {
    //some delay to make it smooth
    setTimeout(() => {
        if (copyInfo.classList.contains("copy-notice-visibility")) {
            copyInfo.classList.remove("copy-notice-visibility");
            setTimeout(function() {
                copyInfo.classList.add("copy-notice-visibility");
            }, 1500)
        }
    }, 400)
});


copyLink.addEventListener("click", () => {
    let websiteLink = document.querySelector("#link");
    let copiedWebsiteLink = websiteLink.textContent;
    navigator.clipboard.writeText(copiedWebsiteLink);
    copyInfo.textContent = copied;
    setTimeout(() => {
        copyInfo.textContent = notCopied;
    }, 2000)
})