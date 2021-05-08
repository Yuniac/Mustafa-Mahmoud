// Copyright Yusuf Sabbag. Distributed under the MIT License respectively CC-BY NC License.

// the accordions
const expandAccordion1 = document.querySelector("#expandIcon1");
const interview1 = document.querySelector(".interview-body-1");
const expandAccordion2 = document.querySelector("#expandIcon2");
const interview2 = document.querySelector(".interview-body-2");
const expandAccordion3 = document.querySelector("#expandIcon3");
const interview3 = document.querySelector(".interview-body-3");
const expandAccordion4 = document.querySelector("#expandIcon4");
const interview4 = document.querySelector(".interview-body-4");
const expandAccordion5 = document.querySelector("#expandIcon5");
const interview5 = document.querySelector(".interview-body-5");
const expandAccordion6 = document.querySelector("#expandIcon6");
const interview6 = document.querySelector(".interview-body-6");


// the acordion function
const accordion = (interview, interviewButton) => {
    interviewButton.addEventListener("click", () => {
        if (interview.style.visibility === "visible") {
            interview.style.visibility = "hidden";
            interview.style.maxHeight = 0 + "px";
            interviewButton.style.rotate = "0deg";
            setTimeout(() => {
                interview.style.display = "none"
            }, 900)
        } else {
            interview.style.display = "block";
            setTimeout(() => {
                interview.style.visibility = "visible"
                interview.style.maxHeight = 400 + "px";
                interviewButton.style.rotate = "180deg";
            }, 100)
        }
    })
}

accordion(interview1, expandAccordion1);
accordion(interview2, expandAccordion2);
accordion(interview3, expandAccordion3);
accordion(interview4, expandAccordion4);
accordion(interview5, expandAccordion5);
accordion(interview6, expandAccordion6);




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