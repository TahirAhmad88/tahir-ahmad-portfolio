// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((el) => observer.observe(el));

// Smooth nav active
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute("id");
  });
  navLinks.forEach((a) => {
    a.style.color =
      a.getAttribute("href") === `#${current}` ? "var(--accent)" : "";
  });
});

// ── CV MODAL ──
const modal = document.getElementById("cvModal");
const openBtn = document.getElementById("openCvBtn");
const closeBtn = document.getElementById("cvModalClose");
const closeBtn2 = document.getElementById("cvModalCloseBtn");
function openModal() {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
closeBtn2.addEventListener("click", closeModal);
// Close on background click
modal.addEventListener("click", function (e) {
  if (e.target === modal) closeModal();
});
// Close with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
});
