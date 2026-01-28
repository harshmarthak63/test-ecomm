import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#f6f6f4]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 pt-4">
        <div className="w-full rounded-full border border-gray-200 bg-white/70 backdrop-blur">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-lime-200 rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-lg">F</span>
              </div>
              <span className="text-black font-semibold text-xl">
                faidaa<span className="text-black/60">.</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              <Link to="/app" className="text-gray-700 hover:text-gray-900 font-medium">
                Home
              </Link>
              <Link to="/product/1" className="text-gray-700 hover:text-gray-900 font-medium">
                Drops
              </Link>
              <Link to="/membership" className="text-gray-700 hover:text-gray-900 font-medium">
                Membership
              </Link>
              <Link to="/referral" className="text-gray-700 hover:text-gray-900 font-medium">
                Winners
              </Link>
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-2">
              <Link to="/signup">
                <Button
                  variant="primary"
                  size="md"
                  className="!rounded-full !py-2.5 px-5"
                >
                  Join Membership
                </Button>
              </Link>

              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-3 py-2 text-gray-700 hover:text-gray-900"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <span className="block w-5 h-[2px] bg-current mb-1" />
                <span className="block w-5 h-[2px] bg-current mb-1" />
                <span className="block w-5 h-[2px] bg-current" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
            {open && (
          <div className="md:hidden mt-3 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur px-4 py-3">
            <nav className="flex flex-col gap-3">
              <Link to="/app" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link to="/product/1" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setOpen(false)}>
                Drops
              </Link>
              <Link to="/membership" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setOpen(false)}>
                Membership
              </Link>
              <Link to="/referral" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setOpen(false)}>
                Winners
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
