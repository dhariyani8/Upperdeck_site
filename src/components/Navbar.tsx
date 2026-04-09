import { motion } from "motion/react";
import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav classname="fixed top-0 left-0 right-0 z-50 bg-ud-black/80 backdrop-blur-md border-b border-white/10">
      <div classname="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div classname="flex items-center justify-between h-20">
          {/* Logo */}
          <div classname="flex-shrink-0">
            <a href="#" classname="flex items-center gap-2">
              <div classname="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
                <img src="/gallery/UD_logo.jpg" alt="The Upper Deck Logo" classname="w-full h-full object-cover"/>
              </div>
              <div classname="flex flex-col">
                <span classname="font-display font-bold text-xl leading-none tracking-tight text-white uppercase">The Upper Deck</span>
                <span classname="text-[10px] uppercase tracking-widest text-ud-accent">Snooker Cafe & Grill</span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div classname="hidden md:block">
            <div classname="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a key="{link.name}" href="{link.href}" classname="text-gray-300 hover:text-ud-accent px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wider">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div classname="md:hidden">
            <button onclick="{()" ==""> setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <x size="{24}"/> : <menu size="{24}"/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div initial="{{" opacity:="" 0,="" y:="" -20="" }}="" animate="{{" opacity:="" 1,="" y:="" 0="" }}="" exit="{{" opacity:="" 0,="" y:="" -20="" }}="" classname="md:hidden bg-ud-dark border-b border-white/10">
          <div classname="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key="{link.name}" href="{link.href}" onclick="{()" ==""> setIsOpen(false)}
                className="text-gray-300 hover:text-ud-accent block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
