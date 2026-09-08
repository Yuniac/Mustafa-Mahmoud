// Shared on every page (imported once by BaseLayout). Replaces the ~23-line
// block that was copy-pasted into all 5 legacy script files with colliding
// top-level `const`s.

// Mobile nav: tapping the current page toggles its sub-menu.
// Legacy code read back a literal inline `style="height:0px"`; we toggle a
// class instead and let CSS own the collapsed/expanded heights.
const currentPage = document.querySelector<HTMLElement>(".mobile-nav .current-page");
const subNav = document.querySelector<HTMLElement>(".sub-nav-items");
currentPage?.addEventListener("click", () => {
  subNav?.classList.toggle("is-open");
});

// Footer language button: flashes the "SOON | قريباً" tooltip, auto-hides after 1.5s.
const langButton = document.querySelector<HTMLElement>(".language");
const langInfo = document.querySelector<HTMLElement>(".language-description");
langButton?.addEventListener("click", () => {
  if (!langInfo?.classList.contains("lginfo-visibility")) return;
  langInfo.classList.remove("lginfo-visibility");
  setTimeout(() => langInfo.classList.add("lginfo-visibility"), 1500);
});
