import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Scale, Shield, Zap, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-20 md:pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex px-6 md:px-12 items-center py-12 md:py-0">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight uppercase">
              Hancurkan Batasan <br />Bahasa Hukum.
            </h1>
            <p className="text-base md:text-lg text-gray-600 font-light mb-8 md:mb-10 max-w-md mx-auto md:mx-0">
              Dejure: Solusi AI untuk menyederhanakan jargon hukum yang kompleks ke dalam bahasa sehari-hari yang mudah dipahami.
            </p>
            <Link
              to="/solusi"
              className="inline-block bg-black text-white px-10 md:px-12 py-4 md:py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors"
            >
              Coba Dejure Sekarang
            </Link>
          </motion.div>

          <div className="relative flex justify-center items-center h-full">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="w-80 h-80 border-2 border-black rounded-full flex items-center justify-center relative"
            >
              <div className="absolute inset-0 border-t-2 border-black rounded-full animate-spin-slow opacity-10" />
              <div className="text-center z-10 px-6">
                <div className="text-2xl font-light italic mb-2 text-gray-400">“Legalese”</div>
                <div className="h-[1px] w-12 bg-black mx-auto my-6" />
                <div className="text-3xl font-bold uppercase tracking-tighter">“Paham”</div>
              </div>
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-black text-white flex items-center justify-center rounded-full shadow-2xl">
                <span className="text-[10px] font-bold tracking-[0.2em]">AI</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-t border-black bg-white">
        {/* Masalah */}
        <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-black flex flex-col gap-6">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">01 / Masalah</span>
          <h3 className="text-2xl font-bold uppercase tracking-tight">Bahasa Membingungkan</h3>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Istilah teknis yang rumit menyebabkan kesalahpahaman, kerugian, dan risiko hukum serius bagi orang awam.
          </p>
          <div className="mt-8 flex gap-3">
            {["P", "K", "S"].map(char => (
              <div key={char} className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">
                {char}
              </div>
            ))}
          </div>
        </div>

        {/* Solusi */}
        <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-black flex flex-col gap-6">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">02 / Solusi</span>
          <h3 className="text-2xl font-bold uppercase tracking-tight">Intuitif & Cepat</h3>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Algoritma AI canggih kami membedah dokumen hukum Anda dan menyajikannya kembali dalam format narasi yang jernih.
          </p>
          <div className="mt-8">
            <div className="w-full h-[2px] bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                className="h-full bg-black" 
              />
            </div>
            <span className="text-[9px] uppercase tracking-[0.1em] text-gray-400 mt-2 block italic">AI Processing Accuracy: 98.4%</span>
          </div>
        </div>

        {/* Keunikan */}
        <div className="p-12 md:p-16 bg-gray-50 flex flex-col gap-6">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">03 / Keunikan</span>
          <h3 className="text-2xl font-bold uppercase tracking-tight">The 'Spark' Approach</h3>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Kami tidak hanya menerjemahkan; kami memberikan konteks strategis yang berani dan tak terduga dengan sentuhan AI yang elegan.
          </p>
          <div className="mt-8">
            <Scale className="w-8 h-8 opacity-20" />
          </div>
        </div>
      </section>
    </div>
  );
}
