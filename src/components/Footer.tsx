import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} DEJURE AI TECHNOLOGIES. HAK CIPTA DILINDUNGI.
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">Christopher Timothy Malelak</span>
          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-400">AI Engineer</span>
        </div>
      </div>
    </footer>
  );
}
