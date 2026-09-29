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

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelectorAll(".mobile-menu[open]").forEach((menu) => menu.removeAttribute("open"));
    }
  });

  // Apple-style smooth scroll reveal with IntersectionObserver
  if (!reducedMotion && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.05
    });

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-revealed"));
  }

  // Seamless reviews marquee duplicate
  const marquee = document.querySelector(".reviews-marquee-track");
  if (marquee && !reducedMotion) {
    const clone = marquee.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    marquee.parentElement?.appendChild(clone);
  }

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

  // Smooth clean URL enhancement on live production host (e.g. Vercel)
  if (window.location.protocol !== "file:") {
    const isLive = !window.location.port || window.location.port === "80" || window.location.port === "443";
    if (isLive) {
      document.querySelectorAll("a[href]").forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) return;
        if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("#")) return;
        if (href === "./index.html" || href === "index.html") {
          link.setAttribute("href", "/");
        } else if (href.includes(".html")) {
          const [path, hash] = href.split("#");
          const clean = "/" + path.replace(/^\.\//, "").replace(/\.html$/, "");
          link.setAttribute("href", clean + (hash ? "#" + hash : ""));
        }
      });
    }
  }

  if (reducedMotion) document.documentElement.classList.add("reduced-motion");
})();
