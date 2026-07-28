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
    let settleTimer = 0;

    const stabilize = () => {
      velocity = 0;
      elements.forEach((element) => {
        element.classList.add("scroll-motion-settled");
        element.style.setProperty("--scroll-x", "0px");
        element.style.setProperty("--scroll-opacity", "1");
        element.style.setProperty("--scroll-blur", "0px");
      });
    };

    const render = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      const currentY = window.scrollY;
      const delta = currentY - previousY;
      velocity = velocity * 0.48 + delta * 0.52;
      previousY = currentY;

      const maxDistance = Math.max(130, Math.min(260, window.innerWidth * 0.18));
      const speedBoost = Math.min(Math.abs(velocity) * 1.8, 110);

      elements.forEach((element) => {
        element.classList.remove("scroll-motion-settled");
        const rect = element.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const normalized = Math.max(-1.35, Math.min(1.35, (center - viewportCenter) / viewportCenter));
        const side = Number(element.style.getPropertyValue("--motion-side")) || 1;
        const directionBoost = velocity === 0 ? 0 : Math.sign(velocity) * speedBoost;
        const translate = normalized * maxDistance * side + directionBoost * side;
        const visible = Math.max(0.12, 1 - Math.abs(normalized) * 0.68);
        const blur = Math.max(0, Math.abs(normalized) * 3.2 - 0.4);

        element.style.setProperty("--scroll-x", `${translate.toFixed(2)}px`);
        element.style.setProperty("--scroll-opacity", visible.toFixed(3));
        element.style.setProperty("--scroll-blur", `${blur.toFixed(2)}px`);
      });
    };

    const requestRender = () => {
      window.clearTimeout(settleTimer);
      if (!frame) frame = window.requestAnimationFrame(render);
      settleTimer = window.setTimeout(stabilize, 130);
    };

    stabilize();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);

    return () => {
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      window.clearTimeout(settleTimer);
      if (frame) window.cancelAnimationFrame(frame);
      elements.forEach((element) => {
        element.classList.remove("scroll-motion-item", "scroll-motion-settled");
        element.style.removeProperty("--motion-side");
        element.style.removeProperty("--scroll-x");
        element.style.removeProperty("--scroll-opacity");
        element.style.removeProperty("--scroll-blur");
      });
    };
  }, []);

  return null;
}
