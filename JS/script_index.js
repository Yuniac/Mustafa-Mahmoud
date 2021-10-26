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
				interview.style.display = "none";
			}, 900);
		} else {
			interview.style.display = "block";
			setTimeout(() => {
				interview.style.visibility = "visible";
				interview.style.maxHeight = 400 + "px";
				interviewButton.style.rotate = "180deg";
			}, 100);
		}
	});
};

accordion(interview1, expandAccordion1);
accordion(interview2, expandAccordion2);
accordion(interview3, expandAccordion3);
accordion(interview4, expandAccordion4);
accordion(interview5, expandAccordion5);
accordion(interview6, expandAccordion6);

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

// const copyLink = document.querySelector(".special-li");
// const copyInfo = document.querySelector(".copy-notice");
// const notCopied = "أنقر لنسخ رابط الموقع";
// const copied = "تم النسخ!";
// copyInfo.textContent = notCopied;

// copyLink.addEventListener("mouseover", () => {
//     //some delay to make it smooth
//     setTimeout(() => {
//         if (copyInfo.classList.contains("copy-notice-visibility")) {
//             copyInfo.classList.remove("copy-notice-visibility");
//             setTimeout(function() {
//                 copyInfo.classList.add("copy-notice-visibility");
//             }, 1500)
//         }
//     }, 400)
// });

// copyLink.addEventListener("click", () => {
//     let websiteLink = document.querySelector("#link");
//     let copiedWebsiteLink = websiteLink.textContent;
//     navigator.clipboard.writeText(copiedWebsiteLink);
//     copyInfo.textContent = copied;
//     setTimeout(() => {
//         copyInfo.textContent = notCopied;
//     }, 2000)
// })

// the video controls

const playIcon =
	'<svg xmlns="http://www.w3.org/2000/svg" height="42px" viewBox="0 0 24 24" width="42px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>';
const pauseIcon =
	'<svg xmlns="http://www.w3.org/2000/svg" height="42px" viewBox="0 0 24 24" width="42px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
const replayIcon =
	'<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="36px" viewBox="0 0 24 24" width="36px" fill="#000000"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><path d="M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z"/></g></svg>';

const playButton = document.querySelector("#play");
playButton.innerHTML = playIcon;
const replayButton = document.querySelector("#replay");
replayButton.innerHTML = replayIcon;

const timerWrapper = document.querySelector("#timer");
const timerBar = document.querySelector("#timer-bar");
const timerNumbers = document.querySelector("#timer-numbers");

const video = document.querySelector("video");

const volumeSlider = document.querySelector("#volume");

const playButtonAsOverlay = document.querySelector("#play-overlay");

function toggleVideoPlay() {
	playButton.addEventListener("click", () => {
		if (video.paused) {
			video.play();
			playButton.innerHTML = pauseIcon;
		} else {
			video.pause();
			playButton.innerHTML = playIcon;
		}
	});
}
function replayVideoFromStart() {
	replayButton.addEventListener("click", () => {
		if (video.currentTime > 0) {
			video.pause();
			video.currentTime = 0;
			video.play();
			playButton.innerHTML = pauseIcon;
		}
	});
	playButtonAsOverlay.addEventListener("click", () => {
		video.play();
		playButtonAsOverlay.style.display = "none";
		playButton.innerHTML = pauseIcon;
	});
}
function seek(e) {
	video.currentTime = (e.offsetX * video.duration) / timerWrapper.clientWidth;
}

function volume() {
	video.volume = volumeSlider.value / 10;
	return volumeSlider.value;
}
function setTime() {
	const minutes = Math.floor(video.currentTime / 60);
	const seconds = Math.floor(video.currentTime - minutes * 60);
	const minutesValue = "0" + minutes;
	let secondsValue;

	if (seconds < 10) {
		secondsValue = "0" + seconds;
	} else {
		secondsValue = seconds;
	}

	const videoTime = minutesValue + ":" + secondsValue;
	timerNumbers.textContent = videoTime;
	const barLength = timerWrapper.clientWidth * (video.currentTime / video.duration);
	timerBar.style.width = barLength + "px";
}
toggleVideoPlay(playButton);
replayVideoFromStart();
video.addEventListener("timeupdate", setTime);
timerWrapper.addEventListener("click", seek);
volumeSlider.addEventListener("input", volume);
volume();
