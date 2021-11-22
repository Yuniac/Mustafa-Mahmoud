// Copyright Yusuf Sabbag. Distributed under the MIT License respectively CC-BY NC License.
import { loadBooks, searchFunction, popoversForMissinglinks, displaySearchResults, noResults } from "./modules.js";

const categoriesForBooksPage = [97, 52, 3, 1, 67];

// call popoveres

searchFunction();

async function main() {
	await loadBooks(categoriesForBooksPage);
	popoversForMissinglinks();
}
main();
const hideSearchResults = document.querySelector("#hide-search-results");

hideSearchResults.addEventListener("click", () => {
	const searchResultsContainer = document.querySelector(".search-results");
	const searchInput = document.querySelector("#search");
	searchResultsContainer.innerHTML = "";
	searchInput.value = "";
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
