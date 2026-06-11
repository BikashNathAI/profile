"use client";
import { useState, useEffect } from "react";

const links = ["About","Skills","Projects","Blog","Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0A0E1A]/95 backdrop-blur shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-[#00D4FF] font-mono font-bold text-xl">BRN</span>
        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="text-gray-300 hover:text-[#00D4FF] transition text-sm">{l}</a></li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-xl">{open ? "✕" : "☰"}</button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0A0E1A] px-6 pb-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-2 text-gray-300 hover:text-[#00D4FF]">{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}