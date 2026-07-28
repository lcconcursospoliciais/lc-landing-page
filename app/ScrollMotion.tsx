"use client";

import { useEffect } from "react";

const selector = [
  ".hero h1",
  ".hero .eyebrow",
  ".hero-subtitle",
  ".hero-line",
  ".positioning .container",
  ".section-heading > *",
  ".pain .two-col > div:first-child > *",
  ".pain-list > *",
  ".tour-copy > *",
  ".access-section .two-col > div:last-child > *",
  ".plans-section .plan",
  ".premium-plan > div",
  ".steps > article",
  ".faq-grid > div",
  ".final-cta .container > *"
].join(",");

export default function ScrollMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    elements.forEach((element, index) => {
      element.classList.add("scroll-motion-item");
      const reverseSection = Boolean(element.closest(".tour-row.reverse"));
      const side = reverseSection ? -1 : index % 2 === 0 ? -1 : 1;
      element.style.setProperty("--motion-side", String(side));
    });

    let frame = 0;
    let previousY = window.scrollY;
    let velocity = 0;

    const render = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      const currentY = window.scrollY;
      velocity = velocity * 0.72 + (currentY - previousY) * 0.28;
      previousY = currentY;

      const maxDistance = Math.max(70, Math.min(150, window.innerWidth * 0.1));
      const speedBoost = Math.min(Math.abs(velocity) * 0.7, 34);

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const normalized = Math.max(-1.25, Math.min(1.25, (center - viewportCenter) / viewportCenter));
        const side = Number(element.style.getPropertyValue("--motion-side")) || 1;
        const directionBoost = velocity === 0 ? 0 : Math.sign(velocity) * speedBoost;
        const translate = normalized * maxDistance * side + directionBoost * side;
        const visible = Math.max(0.18, 1 - Math.abs(normalized) * 0.58);
        const blur = Math.max(0, Math.abs(normalized) * 2.6 - 0.5);

        element.style.setProperty("--scroll-x", `${translate.toFixed(2)}px`);
        element.style.setProperty("--scroll-opacity", visible.toFixed(3));
        element.style.setProperty("--scroll-blur", `${blur.toFixed(2)}px`);
      });
    };

    const requestRender = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);

    return () => {
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      if (frame) window.cancelAnimationFrame(frame);
      elements.forEach((element) => {
        element.classList.remove("scroll-motion-item");
        element.style.removeProperty("--motion-side");
        element.style.removeProperty("--scroll-x");
        element.style.removeProperty("--scroll-opacity");
        element.style.removeProperty("--scroll-blur");
      });
    };
  }, []);

  return null;
}
