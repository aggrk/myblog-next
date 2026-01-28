"use client";
import Link from "next/link";
type MobileMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
};

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: MobileMenuProps) {
  if (!isMenuOpen) return null;

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-x-0 top-16 z-50 sm:hidden
                 h-[calc(100vh-4rem)]
                 border-t border-textcolor/20
                 bg-bgcolor px-4 pt-4 shadow-xl backdrop-blur-md"
    >
      <ul className="space-y-2">
        <li>
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-lg px-4 py-3 text-base font-medium text-textcolor hover:bg-textcolor/10"
          >
            Blog
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-lg px-4 py-3 text-base font-medium text-textcolor hover:bg-textcolor/10"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
