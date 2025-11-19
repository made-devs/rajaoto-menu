"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ChevronRight, ChevronDown } from "lucide-react";

const MenuItem = ({ item, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const subMenuRef = useRef(null);
  const hasSubMenu = !!(item.subMenu && item.subMenu.length > 0);

  const containerDuration = useMemo(() => {
    const numItems = item.subMenu?.length || 0;
    return 0.2 + numItems * 0.03;
  }, [item.subMenu]);

  useEffect(() => {
    const subMenuElement = subMenuRef.current;
    if (hasSubMenu && subMenuElement) {
      if (isOpen) {
        gsap.to(subMenuElement, {
          height: "auto",
          duration: containerDuration,
          ease: "power2.inOut",
        });
        gsap.fromTo(
          subMenuElement.children,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, stagger: 0.05, duration: 0.2, ease: "power2.out" }
        );
      } else {
        gsap.to(subMenuElement.children, {
          opacity: 0,
          y: -10,
          stagger: 0.03,
          duration: 0.15,
          ease: "power2.in",
          onComplete: () =>
            gsap.to(subMenuElement, {
              height: 0,
              duration: containerDuration,
              ease: "power2.inOut",
            }),
        });
      }
    }
  }, [isOpen, containerDuration, hasSubMenu]);

  const commonClasses =
    "flex w-full items-center justify-between rounded-full bg-gradient-to-br from-[#FFF10A] to-yellow-400 p-3 text-left text-sm font-bold text-black shadow-md transition-transform hover:scale-105";

  const subMenuItemClasses =
    "block w-full text-left px-4 py-2.5 bg-black border border-yellow-500/30 rounded-lg text-[#FFF10A] font-semibold text-sm transition-all duration-300 hover:border-yellow-500 hover:text-white hover:shadow-[0_0_15px_rgba(234,179,8,0.6)] opacity-0";

  if (hasSubMenu) {
    return (
      <div>
        <button onClick={() => setIsOpen(!isOpen)} className={commonClasses}>
          <span>{item.text}</span>
          <ChevronDown
            className={`h-5 w-5 text-black transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          ref={subMenuRef}
          className="pl-4 pr-2 pt-2 flex flex-col items-start gap-2 overflow-hidden"
          style={{ height: 0 }}
        >
          {item.subMenu.map((subItem) => (
            <Link
              key={subItem.text}
              href={subItem.href || "#"}
              className={subMenuItemClasses}
              onClick={closeMenu}
            >
              {subItem.text}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link href={item.href || "#"} className={commonClasses} onClick={closeMenu}>
      <span>{item.text}</span>
    </Link>
  );
};

export default MenuItem;
