document.documentElement.classList.add("js");

(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  document.querySelectorAll(".mobile-menu-panel a").forEach((link) => {
    link.addEventListener("click", () => link.closest("details")?.removeAttribute("open"));
  });

  document.addEventListener("click", (event) => {
    document.querySelectorAll(".mobile-menu[open]").forEach((menu) => {
      if (!menu.contains(event.target)) menu.removeAttribute("open");
    });
  });

  const reviews = Array.from(document.querySelectorAll(".review"));
  if (reviews.length) {
    let reviewIndex = 0;
    const showReview = (index) => {
      reviewIndex = (index + reviews.length) % reviews.length;
      reviews.forEach((review, current) => {
        const active = current === reviewIndex;
        review.classList.toggle("is-active", active);
        review.setAttribute("aria-hidden", String(!active));
      });
    };
    document.querySelector("[data-review-prev]")?.addEventListener("click", () => showReview(reviewIndex - 1));
    document.querySelector("[data-review-next]")?.addEventListener("click", () => showReview(reviewIndex + 1));
    showReview(0);
  }

  const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
})();
