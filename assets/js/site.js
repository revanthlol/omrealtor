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

  // Editorial Testimonials Scrolling Reel (Desktop: Vertical, Mobile: Horizontal)
  const reel = document.querySelector(".testimonials-reel");
  const track = document.querySelector(".testimonials-reel-track");
  if (reel && track) {
    const originalItems = Array.from(track.children);
    if (originalItems.length) {
      // Clone reviews once to form a seamless infinite loop
      const clones = originalItems.map((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        return clone;
      });
      clones.forEach((clone) => track.appendChild(clone));

      const isMobile = () => window.innerWidth < 768;

      let originalDimension = 0; // Height on desktop, Width on mobile
      const measureDimensions = () => {
        if (!originalItems.length || !clones.length) return;
        if (isMobile()) {
          const firstClone = clones[0];
          const firstOriginal = originalItems[0];
          if (firstClone && firstOriginal && firstClone.offsetLeft > firstOriginal.offsetLeft) {
            originalDimension = firstClone.offsetLeft - firstOriginal.offsetLeft;
          } else {
            const trackStyle = window.getComputedStyle(track);
            const gap = parseFloat(trackStyle.gap) || 20;
            const visible = originalItems.filter((el) => el.offsetWidth > 0);
            originalDimension = visible.reduce((acc, el) => acc + el.offsetWidth + gap, 0);
          }
        } else {
          const firstClone = clones[0];
          const firstOriginal = originalItems[0];
          if (firstClone && firstOriginal && firstClone.offsetTop > firstOriginal.offsetTop) {
            originalDimension = firstClone.offsetTop - firstOriginal.offsetTop;
          } else {
            originalDimension = originalItems.reduce((acc, el) => acc + el.offsetHeight, 0);
          }
        }
      };

      measureDimensions();
      window.addEventListener("load", measureDimensions);

      let lastIsMobile = isMobile();
      window.addEventListener("resize", () => {
        const currentIsMobile = isMobile();
        if (currentIsMobile !== lastIsMobile) {
          lastIsMobile = currentIsMobile;
          reel.scrollLeft = 0;
          reel.scrollTop = 0;
          floatPos = 0;
        }
        measureDimensions();
      });

      let isPaused = false;
      let isInteracting = false;
      let resumeTimeout = null;
      let isDragging = false;
      let startPointerPos = 0;
      let startScrollOffset = 0;
      let floatPos = 0;
      const scrollSpeed = 0.45; // Gentle, elegant reading pace

      const pauseAutoScroll = (delay = 2800) => {
        isInteracting = true;
        if (resumeTimeout) clearTimeout(resumeTimeout);
        resumeTimeout = setTimeout(() => {
          isInteracting = false;
          // Synchronize floatPos to current scroll offset
          floatPos = isMobile() ? reel.scrollLeft : reel.scrollTop;
        }, delay);
      };

      // Native scroll interaction listener to wrap seamlessly during manual scroll
      reel.addEventListener("scroll", () => {
        if (originalDimension <= 0) return;
        if (isMobile()) {
          if (reel.scrollLeft >= originalDimension) {
            reel.scrollLeft -= originalDimension;
            floatPos = reel.scrollLeft;
          } else if (reel.scrollLeft <= 0 && isInteracting) {
            reel.scrollLeft += originalDimension;
            floatPos = reel.scrollLeft;
          }
        } else {
          if (reel.scrollTop >= originalDimension) {
            reel.scrollTop -= originalDimension;
            floatPos = reel.scrollTop;
          } else if (reel.scrollTop <= 0 && isInteracting) {
            reel.scrollTop += originalDimension;
            floatPos = reel.scrollTop;
          }
        }
      }, { passive: true });

      // Native wheel interaction
      reel.addEventListener("wheel", () => {
        pauseAutoScroll(2600);
      }, { passive: true });

      // Hover interactions (desktop)
      reel.addEventListener("mouseenter", () => {
        isPaused = true;
      });
      reel.addEventListener("mouseleave", () => {
        isPaused = false;
        pauseAutoScroll(1200);
      });

      // Touch interactions (mobile gestures)
      reel.addEventListener("touchstart", () => {
        pauseAutoScroll(3200);
      }, { passive: true });
      reel.addEventListener("touchmove", () => {
        pauseAutoScroll(3200);
      }, { passive: true });
      reel.addEventListener("touchend", () => {
        pauseAutoScroll(2400);
      }, { passive: true });

      // Mouse drag interaction
      reel.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        isDragging = true;
        if (isMobile()) {
          startPointerPos = e.pageX - reel.offsetLeft;
          startScrollOffset = reel.scrollLeft;
        } else {
          startPointerPos = e.pageY - reel.offsetTop;
          startScrollOffset = reel.scrollTop;
        }
        reel.classList.add("is-dragging");
        pauseAutoScroll(3000);
      });

      window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        if (isMobile()) {
          const currentX = e.pageX - reel.offsetLeft;
          const walk = (currentX - startPointerPos) * 1.3;
          reel.scrollLeft = startScrollOffset - walk;
          floatPos = reel.scrollLeft;
        } else {
          const currentY = e.pageY - reel.offsetTop;
          const walk = (currentY - startPointerPos) * 1.3;
          reel.scrollTop = startScrollOffset - walk;
          floatPos = reel.scrollTop;
        }
        pauseAutoScroll(3000);
      });

      window.addEventListener("mouseup", () => {
        if (isDragging) {
          isDragging = false;
          reel.classList.remove("is-dragging");
          pauseAutoScroll(2500);
        }
      });

      // Keyboard navigation
      reel.addEventListener("keydown", (e) => {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", " "].includes(e.key)) {
          pauseAutoScroll(3000);
        }
      });

      // Continuous loop using float accumulator - completely prevents sub-pixel rounding jitter
      const loop = () => {
        if (!reducedMotion && !isPaused && !isInteracting && !isDragging && originalDimension > 0) {
          floatPos += scrollSpeed;
          if (floatPos >= originalDimension) {
            floatPos -= originalDimension;
          }
          if (isMobile()) {
            reel.scrollLeft = floatPos;
          } else {
            reel.scrollTop = floatPos;
          }
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
