"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between h-[17vh] mx-4 md:mx-16 lg:mx-40">
        <Link href="/" className="text-2xl font-semibold hover:text-black">
          Ivan Karabeinikau
        </Link>
        <div>
          <ul className="flex gap-8 list-none text-xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-black no-underline hover:text-gray-500 hover:underline hover:underline-offset-8"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="relative z-50 md:hidden">
        <div className="flex items-center justify-between h-16 px-5">
          <Link href="/" className="text-xl font-semibold hover:text-black">
            Ivan Karabeinikau
          </Link>
          <div className="relative">
            <div
              className="flex flex-col justify-between h-6 w-8 cursor-pointer"
              onClick={toggleMenu}
            >
              <span
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-black transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
            <div
              className={`absolute top-full right-0 mt-2 min-w-[200px] bg-white border border-[var(--color-border-light)] overflow-hidden transition-all duration-300 shadow-lg rounded-lg ${
                menuOpen
                  ? "max-h-80 p-2 opacity-100 translate-y-0"
                  : "max-h-0 p-0 opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-lg text-black no-underline hover:bg-gray-100 transition-colors rounded-md"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
