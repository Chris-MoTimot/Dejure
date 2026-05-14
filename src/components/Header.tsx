import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useState } from "react";

const navItems = [
  { name: "Masalah", href: "/masalah" },
  { name: "Solusi", href: "/solusi" },
  { name: "Keunikan", href: "/keunikan" },
];

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-black tracking-tighter uppercase" onClick={() => setIsOpen(false)}>
          Dejure
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.2em] transition-colors",
                location.pathname === item.href ? "text-black" : "text-gray-400 hover:text-black"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/solusi"
            className="ml-4 px-8 py-3 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors"
          >
            Coba Sekarang
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-black" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-xs font-bold uppercase tracking-[0.2em]",
                    location.pathname === item.href ? "text-black" : "text-gray-400"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/solusi"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-black text-white text-center text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                Coba Sekarang
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
