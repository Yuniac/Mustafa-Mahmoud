// Copyright Yusuf Sabbag. Distributed under the MIT License respectively CC-BY NC License. 

// the notice div
const noticeButton = document.querySelector("#hideButton");
const noticeDiv = document.querySelector("#noticeDiv");
noticeButton.addEventListener("click", () => {
    noticeDiv.style.visibility = "hidden";
    noticeDiv.style.display = "none";
});

// the carousel
const tempURL = "img/lifestory/social-images/img";
const imgExtension = ".jpg";
const carouselImg = document.querySelector("#carouselImg");
let imgCount = 9;
let i = 1;
let imgURL = `${tempURL}${i}${imgExtension}`;

const backwardImg = document.querySelector(".backward-icon");
const forwardImg = document.querySelector(".forward-icon");

function changeImgF() {
    if (i === imgCount) {
        i = 1;
    } else if (i >= 1) {
        i++
    }
    setTimeout(() => {
        imgURL = `${tempURL}${i}${imgExtension}`;
        carouselImg.src = imgURL;
    }, 700)
    carouselImg.style.opacity = 0;
    setTimeout(() => {
        carouselImg.style.opacity = 1;
    }, 650);
}

function changeImgB() {
    if (i === 1) {
        i = imgCount + 1;
        // extra 1 on the amount of all images because we have to decrease it by 1
    };
    i--;
    setTimeout(() => {
        imgURL = `${tempURL}${i}${imgExtension}`;
        carouselImg.src = imgURL;
    }, 700)
    carouselImg.style.opacity = 0;
    setTimeout(() => {
        carouselImg.style.opacity = 1;
    }, 750);
}
forwardImg.addEventListener("click", changeImgF);
backwardImg.addEventListener("click", changeImgB);


// scroll to top button 
let goTopButton = document.getElementById("scrollToTopButton");
let root = document.documentElement;


goTopButton.addEventListener("click", function goTop() {
    root.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

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