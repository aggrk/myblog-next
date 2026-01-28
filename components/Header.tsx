"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-textcolor/20 bg-bgcolor/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl font-bold serif text-textcolor">
              Thoughts Unfiltered
            </h1>
            <p className="text-sm text-textsecondary mt-1 hidden sm:block">
              A non-religious take on spirituality and life.
            </p>
          </div>

          <nav className="hidden sm:flex gap-2">
            <Link href="/" className="px-4 py-2 text-textcolor">
              Blog
            </Link>
            <Link href="/about" className="px-4 py-2 text-textcolor">
              About
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden rounded-lg p-2 text-textcolor transition hover:bg-textcolor hover:text-bgcolor"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
