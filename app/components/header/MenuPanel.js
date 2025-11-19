"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import MenuItem from "./MenuItem";
import { menuData } from "./menuData";

const MenuPanel = ({ isOpen, closeMenu }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-fit max-h-screen w-[75%] max-w-sm shadow-2xl z-50 transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } rounded-l-2xl rounded-br-2xl`}
        style={{
          backgroundImage: "url('/bg-menu.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <div className="p-4 md:p-6 flex-shrink-0">
          <div className="flex items-center justify-between mb-6">
            <Image
              src="/logo.webp"
              alt="TJM Auto Care Logo"
              width={120}
              height={36}
              className="h-9 w-auto"
            />
            <button onClick={closeMenu} className="p-2 text-yellow-300">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-grow overflow-y-auto px-4 md:px-6 pb-8 md:pb-12">
          <div className="flex flex-col gap-3">
            {isMounted &&
              menuData.map((item) => (
                <MenuItem key={item.text} item={item} closeMenu={closeMenu} />
              ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default MenuPanel;
