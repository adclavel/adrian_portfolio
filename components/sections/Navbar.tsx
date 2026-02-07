"use client";

import { useEffect, useRef, useState } from "react";

const sections = ["hero", "about", "experience", "projects"];

export default function Navbar() {
  const [active, setActive] = useState<string>("hero");
  const [isScrollingByClick, setIsScrollingByClick] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState<{
    left: number;
    width: number;
  }>({
    left: 0,
    width: 0,
  });

  // Update sliding underline position
  const updateUnderline = () => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector<HTMLAnchorElement>(
      `a[href="#${active}"]`,
    );
    if (activeLink) {
      setUnderlineStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  };

  // Update underline on active change or resize
  useEffect(() => {
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [active]);

  // IntersectionObserver for scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible: string | null = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = entry.target.id;
          }
        });

        // Only update active if NOT scrolling via click
        if (!isScrollingByClick && mostVisible && mostVisible !== active) {
          setActive(mostVisible);
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        rootMargin: "-20% 0px -70% 0px",
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [active, isScrollingByClick]);

  // Smooth scroll to section on click
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setIsScrollingByClick(true);
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      window.history.replaceState(null, "", `#${id}`);

      // Release the lock after smooth scroll ends
      setTimeout(() => {
        setIsScrollingByClick(false);
      }, 500); // adjust timeout if needed based on section height
    }
  };

  return (
    <nav className="w-full bg-[#212842] text-[#F0E8D5] fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center relative">
        <ul ref={navRef} className="flex gap-8 text-sm relative">
          {/* Navbar links */}
          <li>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              className="transition text-[#F0E8D5]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="transition text-[#F0E8D5]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("experience");
              }}
              className="transition text-[#F0E8D5]"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="transition text-[#F0E8D5]"
            >
              Projects
            </a>
          </li>

          {/* Sliding underline */}
          <span
            className="absolute bottom-0 h-[2px] bg-[#F0E8D5] transition-all duration-300 ease-out"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </ul>
      </div>
    </nav>
  );
}
