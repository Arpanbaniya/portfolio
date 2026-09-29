"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { links } from "@/data/links";
const navigation = [
  ["Work", "/#work"],
  ["About", "/#about"],
  ["Journey", "/#journey"],
  ["Contact", "/#contact"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="header">
      <div className="shell nav">
        <Link className="wordmark" href="/" aria-label="Arpan Baniya home">
          ab<span className="brand-dot">.</span>
        </Link>
        <span className="nav-caption">
          Arpan Baniya
          <br />
          <span>Computer Engineering</span>
        </span>
        <nav aria-label="Main navigation" className="desktop-nav">
          {navigation.map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </nav>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          GitHub <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav shell"
          aria-label="Mobile navigation"
        >
          {navigation.map(([label, href]) => (
            <Link onClick={() => setOpen(false)} href={href} key={label}>
              {label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
