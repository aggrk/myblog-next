"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-textsecondary/20 bg-bgcolor/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-0.5">
              <h1 className="serif text-xl sm:text-2xl font-bold leading-none tracking-wide">
                <span className="text-textsecondary">Thoughts </span>
                <span className="text-textsecondary italic">Unfiltered</span>
              </h1>
              <p className="hidden sm:block text-[0.6rem] uppercase tracking-[0.14em] text-textsecondary/40 font-light">
                A non-religious take on spirituality &amp; life
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1">
            <Link
              href="/"
              className="text-[0.7rem] uppercase tracking-[0.12em] text-textsecondary/55 px-4 py-2 border border-transparent hover:text-textsecondary hover:border-textsecondary/25 transition-all duration-200"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-[0.7rem] uppercase tracking-[0.12em] text-textsecondary/55 px-4 py-2 border border-transparent hover:text-textsecondary hover:border-textsecondary/25 transition-all duration-200"
            >
              About
            </Link>
            {/* <div className="w-px h-4 bg-textsecondary/25 mx-1" />
            <button className="text-[0.68rem] uppercase tracking-[0.12em] px-4 py-1.5 border border-textsecondary/50 text-textsecondary/70 hover:bg-textsecondary hover:text-bgcolor transition-all duration-200">
              Subscribe
            </button> */}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden flex flex-col gap-1.25 p-2.5 border border-textsecondary/25 hover:border-textsecondary/60 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-5 w-5 text-textsecondary" />
            ) : (
              <>
                <span className="block w-4.5 h-px bg-textsecondary" />
                <span className="block w-4.5 h-px bg-textsecondary" />
                <span className="block w-4.5 h-px bg-textsecondary" />
              </>
            )}
          </button>
        </div>
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
