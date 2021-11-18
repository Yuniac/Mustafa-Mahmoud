// Copyright Yusuf Sabbag. Distributed under the MIT License respectively CC-BY NC License.

// the popovers for the missing links of the books
const wikiLinks = document.querySelectorAll(".missing-wiki-source");

wikiLinks.forEach((link) => {
	link.addEventListener("click", () => {
		const missigBookInfo = document.querySelector(`#${link.id}Info`);
		missigBookInfo.classList.remove("wiki-visibility");
		if (missigBookInfo.classList.contains("wiki-notice-hide")) {
			missigBookInfo.classList.remove("wiki-notice-hide");
			// then again, hide it after a short delay
			setTimeout(() => {
				missigBookInfo.classList.add("wiki-notice-hide");
			}, 3500);
			setTimeout(() => {
				missigBookInfo.classList.add("wiki-visibility");
			}, 4600);
		}
	});
});

// highlight function
// TODO change base url
window.addEventListener("load", () => {
	// const baseUrl = "https://www.mustafamahmoud.net/books.html";
	const baseUrl = "file:///D:/G%20Drive/All%20Info/web%20development/WD/Mustafa-Mahmoud/books.html";
	const hash = window.location.hash;
	const el = document.querySelector(hash);
	const elMatchingUrl = `${baseUrl}${hash}`;

	if (window.location.href === elMatchingUrl) {
		el.classList.add("highlight");
		setTimeout(() => {
			el.classList.remove("highlight");
		}, 2500);
	}
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
		setTimeout(function () {
			lgInfo.classList.add("lginfo-visibility");
		}, 1500);
	}
});
