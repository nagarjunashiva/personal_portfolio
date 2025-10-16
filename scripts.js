const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.setAttribute("aria-hidden", "false");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.fromTo(
      ".modal-content",
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  }
});

closeBtn.addEventListener("click", () => {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.to(".modal-content", {
      scale: 0.9,
      opacity: 0,
      duration: 0.25,
      ease: "power1.in",
      onComplete: () => modal.setAttribute("aria-hidden", "true"),
    });
  } else {
    modal.setAttribute("aria-hidden", "true");
  }
});