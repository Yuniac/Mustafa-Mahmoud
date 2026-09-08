// Loaded on books.html + books-subpage.html.

// --- "no wikipedia page" / "no download link" popovers ---
// Each .missing-wiki-source trigger points at its notice <p> via aria-controls.
// Click (or Enter/Space) reveals the notice, then it auto-hides: fade out at
// 3.5s, visibility:hidden at 4.6s (matches the legacy timings).
const triggers = document.querySelectorAll<HTMLElement>(".missing-wiki-source");

function togglePopover(trigger: HTMLElement) {
  const id = trigger.getAttribute("aria-controls");
  const note = id && document.getElementById(id);
  if (!note) return;
  note.classList.remove("wiki-visibility");
  if (!note.classList.contains("wiki-notice-hide")) return;
  note.classList.remove("wiki-notice-hide");
  // The "no download" notice is the second popover on its card — nudge it clear
  // of the wiki notice (legacy behaviour).
  if (trigger.querySelector("img")) {
    note.style.right = "140px";
    note.style.width = "120px";
  }
  setTimeout(() => note.classList.add("wiki-notice-hide"), 3500);
  setTimeout(() => note.classList.add("wiki-visibility"), 4600);
}

triggers.forEach((trigger) => {
  trigger.addEventListener("click", () => togglePopover(trigger));
  trigger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      togglePopover(trigger);
    }
  });
});

// --- book-card hash highlight ---
// Legacy compared the full URL against hard-coded github.io strings, so it never
// fired in production. Match on the hash instead.
function highlightFromHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const el = document.getElementById(id);
  if (!el?.classList.contains("book-card")) return;
  el.classList.add("highlight");
  el.scrollIntoView({ block: "center" });
  setTimeout(() => el.classList.remove("highlight"), 2500);
}

highlightFromHash();
window.addEventListener("hashchange", highlightFromHash);
