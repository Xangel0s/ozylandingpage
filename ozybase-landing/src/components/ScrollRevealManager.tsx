"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target); // Trigger only once
        }
      });
    }, observerOptions);

    // Find all scroll-reveal elements
    const revealElements = document.querySelectorAll(".scroll-reveal, .reveal-left, .reveal-right");
    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]); // Re-run when page path changes

  return null; // Side-effect component
}
