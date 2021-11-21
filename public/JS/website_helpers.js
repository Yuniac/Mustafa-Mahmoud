const highlightActivePage = () => {
	const navLinks = document.querySelectorAll(".nav-item");
	for (let i = 0; i < navLinks.length; i++) {
		if (window.location.pathname === navLinks[i].dataset.route) {
			navLinks[i].classList.add("active");
		}
	}
	if (window.location.pathname === "/literature-subpage") {
		const literatureNav = document.querySelector("[data-route='/literature']");
		literatureNav.classList.add("active");
	}
};
highlightActivePage();
