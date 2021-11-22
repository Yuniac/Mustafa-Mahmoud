export const loadBooks = async (categoriesForBooksPage) => {
	const gallerySection = document.querySelector("section.gallery");
	const loadingAnimationEl = document.querySelector(".loading-animation");
	for (let i = 0; i < categoriesForBooksPage.length; i++) {
		const books = await (await fetch(`http://localhost:5000/books?category=${categoriesForBooksPage[i]}`)).json();
		// each category has a wrapper
		const categoryContainer = document.createElement("div");
		categoryContainer.classList.add("category-container");

		const booksWrapper = document.createElement("div");
		booksWrapper.classList.add("books-wrapper");

		gallerySection.append(categoryContainer);

		const categoryHeader = document.createElement("h2");
		categoryHeader.classList.add("category-header");
		//
		// when the data has been fetched, remove the loading animation
		gallerySection.classList.remove("temp-gallery");
		loadingAnimationEl.style.display = "none";
		// the category name
		categoryHeader.textContent = books.data[0].subject;
		categoryContainer.append(categoryHeader);
		books.data.forEach((book) => {
			const bookCardDiv = document.createElement("div");
			bookCardDiv.classList.add("book-card");

			//
			const bookUpper = document.createElement("div");
			bookUpper.classList.add("book-upper");

			const bookLower = document.createElement("div");
			bookLower.classList.add("book-lower", "book-info");

			//
			const bookImg = document.createElement("img");
			bookImg.src = book.links.img;

			const bookImgLink = document.createElement("a");
			bookImgLink.append(bookImg);
			bookImgLink.href = `/book/${book._id}`;

			const bookTitle = document.createElement("p");
			bookTitle.textContent = book.name;

			const bookTitleLink = document.createElement("a");
			bookTitleLink.append(bookTitle);
			bookTitleLink.href = `/book/${book._id}`;

			bookUpper.append(bookImgLink);
			bookUpper.append(bookTitleLink);

			//
			const bookBio = document.createElement("div");
			bookBio.classList.add("book-bio");

			const bookSubject = document.createElement("p");
			bookSubject.textContent = book.subject;

			const bookPublishingYear = document.createElement("p");
			bookPublishingYear.textContent = book.publishing_year;

			bookBio.append(bookSubject);
			bookBio.append(bookPublishingYear);

			const bookLinks = document.createElement("div");
			bookLinks.classList.add("book-links");

			const wikiLink = document.createElement("a");
			if (book.links.wiki_link === "") {
				wikiLink.classList.add("missing-wiki-source");
				wikiLink.setAttribute("data-missing-book-id", book.name);

				const missingBookInfo = document.createElement("p");
				missingBookInfo.textContent = "لا يوجد صفحة لهذا الكتاب في ويكيبيديا على حسب عِلمنا";
				missingBookInfo.classList.add("missing-wiki-source-notice", "wiki-notice-hide");
				missingBookInfo.setAttribute("data-missing-book-id", book.name);

				bookLower.append(missingBookInfo);
			} else {
				wikiLink.href = book.links.wiki_link;
			}
			wikiLink.textContent = "ويكيبيديا";

			bookLinks.append(wikiLink);

			bookLower.append(bookBio);
			bookLower.append(bookLinks);

			bookCardDiv.append(bookUpper);
			bookCardDiv.append(bookLower);
			booksWrapper.append(bookCardDiv);
		});
		categoryContainer.append(booksWrapper);
	}
	// calling this function here because it depends on `loadBooks` and `loadBooks` is async
};

export const popoversForMissinglinks = () => {
	// the popovers for the missing links of the books
	const wikiLinks = document.querySelectorAll(".missing-wiki-source");

	wikiLinks.forEach((link) => {
		link.addEventListener("click", () => {
			const missigBookInfo = document.querySelector(`[data-missing-book-id=
				'${link.dataset.missingBookId}']`);
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
};

export const searchFunction = () => {
	const form = document.querySelector(".search");
	const searchInput = document.querySelector("#search");
	form.addEventListener("submit", async (e) => {
		e.preventDefault();
		const loadingAnimationEl = document.querySelector(".search-results-wrapper span");
		loadingAnimationEl.classList.add("loading-animation");
		const query = searchInput.value;
		const isQueryValid = /^[\u0621-\u064A0-9 ]+$/.test(query);
		if (isQueryValid) {
			const result = await (await fetch(`/books?name=${query}`)).json();
			if (result.success) {
				displaySearchResults(result);
				loadingAnimationEl.classList.remove("loading-animation");
			} else {
				displaySearchResults(false, query);
				loadingAnimationEl.classList.remove("loading-animation");
			}
		} else {
			const regexWarningMessage = "إستخدم اللغة العربية فقط في البحث، لا تضف كلمة 'كتاب' إلى البحث، فقط إسم الكتاب.";
			displaySearchResults(false, query, regexWarningMessage);
			loadingAnimationEl.classList.remove("loading-animation");
		}
	});
};

export const displaySearchResults = (result, query, msg) => {
	if (!result) return noResults(query, msg);
	const searchResults = document.querySelector(".search-results");
	searchResults.innerHTML = "";
	searchResults.classList.add("search-results-loading");
	const { data: book } = result;

	const resultBook = document.createElement("div");
	resultBook.classList.add("results-container");

	const bookCardDiv = document.createElement("div");
	bookCardDiv.classList.add("book-card");
	// in order to highlight some books, from other page via a link, we need to give certain books special IDs.
	//
	const bookUpper = document.createElement("div");
	bookUpper.classList.add("book-upper");

	const bookLower = document.createElement("div");
	bookLower.classList.add("book-lower", "book-info");

	//
	const bookImg = document.createElement("img");
	bookImg.src = book.links.img;

	const bookImgLink = document.createElement("a");
	bookImgLink.append(bookImg);
	bookImgLink.href = `/book/${book._id}`;

	const bookTitle = document.createElement("p");
	bookTitle.textContent = book.name;

	const bookTitleLink = document.createElement("a");
	bookTitleLink.append(bookTitle);
	bookTitleLink.href = `/book/${book._id}`;

	bookUpper.append(bookImgLink);
	bookUpper.append(bookTitleLink);

	//
	const bookBio = document.createElement("div");
	bookBio.classList.add("book-bio");

	const bookSubject = document.createElement("p");
	bookSubject.textContent = book.subject;

	const bookPublishingYear = document.createElement("p");
	bookPublishingYear.textContent = book.publishing_year;

	bookBio.append(bookSubject);
	bookBio.append(bookPublishingYear);

	const bookLinks = document.createElement("div");
	bookLinks.classList.add("book-links");

	const wikiLink = document.createElement("a");
	if (book.links.wiki_link === "") {
		wikiLink.classList.add("missing-wiki-source");
		wikiLink.setAttribute("data-missing-book-id", book.name);

		const missingBookInfo = document.createElement("p");
		missingBookInfo.textContent = "لا يوجد صفحة لهذا الكتاب في ويكيبيديا على حسب عِلمنا";
		missingBookInfo.classList.add("missing-wiki-source-notice", "wiki-notice-hide");
		missingBookInfo.setAttribute("data-missing-book-id", book.name);

		bookLower.append(missingBookInfo);
	} else {
		wikiLink.href = book.links.wiki_link;
	}
	wikiLink.textContent = "ويكيبيديا";

	bookLinks.append(wikiLink);

	bookLower.append(bookBio);
	bookLower.append(bookLinks);

	bookCardDiv.append(bookUpper);
	bookCardDiv.append(bookLower);
	resultBook.append(bookCardDiv);

	const searchResultsHeading = document.createElement("h3");
	searchResultsHeading.textContent = "نتائج البحث:";
	searchResultsHeading.classList.add("search-result-notice");

	searchResults.append(searchResultsHeading);
	searchResults.append(resultBook);
	const hr = document.createElement("hr");
	searchResults.append(hr);
};

export const noResults = (query, msg) => {
	const searchResultsContainer = document.querySelector(".search-results");
	const noResultsNoticeEl = document.createElement("h3");
	noResultsNoticeEl.classList.add("search-result-notice");
	const arabicText = "لا نتائج بحث مطابقة ل";
	if (msg) {
		noResultsNoticeEl.textContent = msg;
	} else {
		noResultsNoticeEl.textContent = `${arabicText}"${query}"`;
	}

	searchResultsContainer.innerHTML = "";

	searchResultsContainer.append(noResultsNoticeEl);
};
