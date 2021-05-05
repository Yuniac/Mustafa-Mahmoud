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