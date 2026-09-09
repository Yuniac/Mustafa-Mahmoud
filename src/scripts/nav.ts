// Shared on every page (imported once by BaseLayout). Replaces the block that
// was copy-pasted into all 5 legacy script files with colliding top-level
// `const`s. The mobile nav is now a plain always-visible row, so the only
// behaviour left here is the footer language tooltip.

// Footer language button: flashes the "SOON | قريباً" tooltip, auto-hides after 1.5s.
const langButton = document.querySelector<HTMLElement>(".language");
const langInfo = document.querySelector<HTMLElement>(".language-description");
langButton?.addEventListener("click", () => {
  if (!langInfo?.classList.contains("lginfo-visibility")) return;
  langInfo.classList.remove("lginfo-visibility");
  setTimeout(() => langInfo.classList.add("lginfo-visibility"), 1500);
});
