// app/components/Header.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, ArrowLeft } from "lucide-react";
import MenuPanel from "./MenuPanel";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="z-30">
        <div className="relative container mx-auto flex items-center justify-center p-4 h-[72px]">
          <div className="absolute top-0 h-1 w-full bg-yellow-300"></div>
          {/* Tombol Back (kiri) */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            {!isHomePage && (
              <button
                onClick={() => router.back()}
                className="p-2 text-white transition-opacity hover:opacity-80"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Logo (tengah) */}
          <div className="absolute left-1/2 top-0 transform mt-5 -translate-x-1/2 z-10">
            <Image
              src="/logo.webp"
              alt="TJM Auto Care Logo"
              width={640}
              height={192}
              priority
              sizes="(max-width: 768px) 70vw, (max-width: 1200px) 40vw, 320px"
              className="h-auto w-auto max-w-[320px] max-h-[192px]"
            />
          </div>

          {/* Tombol Menu (kanan) */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <button
              onClick={toggleMenu}
              className="p-2 transition-opacity hover:opacity-80"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Panel */}
      <MenuPanel isOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
};
