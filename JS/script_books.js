// the popovers for the missing links of the books
const wikiLinks = document.querySelectorAll(".missing-wiki-source");
missingLinks = Array.from(wikiLinks);
const missingLinkInformation = document.querySelectorAll(".wiki-notice-hide");
missingLinkInfo = Array.from(missingLinkInformation);


missingLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (link.id === "missingBook1") {
            // depending on which link is clicked, get the appropriate paragraph to work with it 
            const missingBook1Info = document.querySelector("#missingBook1Info");
            // work with the paragraph, the same pattern repeated for each missing book and its link/paragraph.
            missingBook1Info.classList.remove("wiki-visibility");
            if (missingBook1Info.classList.contains("wiki-notice-hide")) {
                missingBook1Info.classList.remove("wiki-notice-hide");
                // then again, hide it after a short delay
                setTimeout(function() {
                    missingBook1Info.classList.add("wiki-notice-hide");
                }, 3500)
                setTimeout(function() {
                    missingBook1Info.classList.add("wiki-visibility");
                }, 4600)
            }
        } else if (link.id === "missingBook2") {
            const missingBook2Info = document.querySelector("#missingBook2Info");
            missingBook2Info.classList.remove("wiki-visibility");
            if (missingBook2Info.classList.contains("wiki-notice-hide")) {
                missingBook2Info.classList.remove("wiki-notice-hide")
                setTimeout(function() {
                    missingBook2Info.classList.add("wiki-notice-hide");
                }, 3500)
                setTimeout(function() {
                    missingBook2Info.classList.add("wiki-visibility");
                }, 4600)
            }
        } else if (link.id === "missingBook3") {
            const missingBook3Info = document.querySelector("#missingBook3Info");
            missingBook3Info.classList.remove("wiki-visibility");
            if (missingBook3Info.classList.contains("wiki-notice-hide")) {
                missingBook3Info.classList.remove("wiki-notice-hide")
                setTimeout(function() {
                    missingBook3Info.classList.add("wiki-notice-hide");
                }, 3500)
                setTimeout(function() {
                    missingBook3Info.classList.add("wiki-visibility");
                }, 4600)
            }
        }
    })
})

// highlight function
const islamAndMarxism = document.querySelector("#islamAndMarxism");
const islamAndMarxismURL = "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#islamAndMarxism";

const whyIRefusedMarxism = document.querySelector("#whyIRefusedMarxism");
const whyIRefusedMarxismURL = "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#whyIRefusedMarxism";

const dialogue = document.querySelector("#dialogue");
const dialogueURL = "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#dialogue";

const modernUnderstanding = document.querySelector("#modernUnderstanding");
const modernUnderstandingURL = "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#modernUnderstanding";

const intercession = document.querySelector("#Intercession");
const intercessionURL = "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#Intercession";

const trip = document.querySelector("#trip");
const tripURL = "http://127.0.0.1:5501/Mustafa-Mahmoud.github.io/books.html#trip";

const lifePuzzle = document.querySelector("#lifePuzzle");
const lifePuzzleURL = "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#lifePuzzle";

const deathPuzzle = document.querySelector("#deathPuzzle");
const deathPuzzleURL = "https://yuniac.github.io/Mustafa-Mahmoud.github.io/books.html#deathPuzzle"

function highlight(book, url) {
    if (window.location.href === url) {
        book.classList.add("highlight");
        setTimeout(() => {
            book.classList.remove("highlight");
        }, 2500);
    };
};

highlight(islamAndMarxism, islamAndMarxismURL);
highlight(whyIRefusedMarxism, whyIRefusedMarxismURL);
highlight(dialogue, dialogueURL);
highlight(modernUnderstanding, modernUnderstandingURL);
highlight(intercession, intercessionURL);
highlight(trip, tripURL);
highlight(lifePuzzle, lifePuzzleURL);
highlight(deathPuzzle, deathPuzzleURL);

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