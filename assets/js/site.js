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

  // Editorial Testimonials Vertical Scrolling Reel
  const reel = document.querySelector(".testimonials-reel");
  const track = document.querySelector(".testimonials-reel-track");
  if (reel && track) {
    const originalItems = Array.from(track.children);
    if (originalItems.length) {
      // Clone reviews to form a seamless infinite loop
      const clones = originalItems.map((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        return clone;
      });
      clones.forEach((clone) => track.appendChild(clone));

      let originalHeight = 0;
      const measureHeight = () => {
        originalHeight = originalItems.reduce((acc, el) => acc + el.offsetHeight, 0);
      };

      measureHeight();
      window.addEventListener("load", measureHeight);
      window.addEventListener("resize", measureHeight);

      let isPaused = false;
      let isInteracting = false;
      let resumeTimeout = null;
      let isDragging = false;
      let startY = 0;
      let startScrollTop = 0;
      const scrollSpeed = 0.45; // Gentle, elegant reading pace

      const pauseAutoScroll = (delay = 2500) => {
        isInteracting = true;
        if (resumeTimeout) clearTimeout(resumeTimeout);
        resumeTimeout = setTimeout(() => {
          isInteracting = false;
        }, delay);
      };

      const handleLoop = () => {
        if (originalHeight <= 0) return;
        if (reel.scrollTop >= originalHeight) {
          reel.scrollTop -= originalHeight;
        } else if (reel.scrollTop <= 0) {
          reel.scrollTop += originalHeight;
        }
      };

      // Native wheel and scroll interactions
      reel.addEventListener("scroll", handleLoop, { passive: true });
      reel.addEventListener("wheel", () => pauseAutoScroll(2600), { passive: true });

      // Hover interactions
      reel.addEventListener("mouseenter", () => {
        isPaused = true;
      });
      reel.addEventListener("mouseleave", () => {
        isPaused = false;
        pauseAutoScroll(1400);
      });

      // Touch interactions (mobile / trackpad gestures)
      reel.addEventListener("touchstart", () => {
        pauseAutoScroll(3000);
      }, { passive: true });
      reel.addEventListener("touchend", () => {
        pauseAutoScroll(2200);
      }, { passive: true });

      // Mouse drag interaction
      reel.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        isDragging = true;
        startY = e.pageY - reel.offsetTop;
        startScrollTop = reel.scrollTop;
        reel.classList.add("is-dragging");
        pauseAutoScroll(3000);
      });

      window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const currentY = e.pageY - reel.offsetTop;
        const walk = (currentY - startY) * 1.25;
        reel.scrollTop = startScrollTop - walk;
        handleLoop();
        pauseAutoScroll(3000);
      });

      window.addEventListener("mouseup", () => {
        if (isDragging) {
          isDragging = false;
          reel.classList.remove("is-dragging");
          pauseAutoScroll(2500);
        }
      });

      // Keyboard navigation (accessibility)
      reel.addEventListener("keydown", (e) => {
        if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", " "].includes(e.key)) {
          pauseAutoScroll(3000);
        }
      });

      // Infinite smooth auto-scroll loop
      const loop = () => {
        if (!reducedMotion && !isPaused && !isInteracting && !isDragging && originalHeight > 0) {
          reel.scrollTop += scrollSpeed;
          handleLoop();
        }
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    }
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
