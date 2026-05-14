import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scale, Zap, Copy, Check, RotateCcw, Loader2 } from "lucide-react";
import { simplifyLegalText } from "@/src/services/geminiService";
import ReactMarkdown from "react-markdown";

export default function Solusi() {
  const [legalText, setLegalText] = useState("");
  const [simplifiedResult, setSimplifiedResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSimplify = async () => {
    if (!legalText.trim()) return;
    setIsLoading(true);
    try {
      const result = await simplifyLegalText(legalText);
      setSimplifiedResult(result);
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(simplifiedResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => {
    setLegalText("");
    setSimplifiedResult("");
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">
        <div className="mb-10 md:mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-2 md:mb-4 block">Alat AI Baru</span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight uppercase leading-[0.9] mb-4 md:mb-6">
            Solusi Dejure.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl">
            Sederhanakan dokumen hukum kompleks menjadi bahasa manusia yang intuitif hanya dalam hitungan detik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-black overflow-hidden group">
          {/* Input Section */}
          <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-black p-6 md:p-12">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h3 className="font-bold uppercase tracking-[0.2em] text-[10px]">01 / Input Dokumen</h3>
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>
            
            <textarea
              value={legalText}
              onChange={(e) => setLegalText(e.target.value)}
              placeholder="Tempel teks hukum, kontrak, atau pasal yang membingungkan di sini..."
              className="w-full grow min-h-[300px] md:min-h-[400px] p-0 bg-transparent outline-none transition-all resize-none font-sans text-base md:text-lg placeholder:text-gray-200"
            />

            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
               <button 
                onClick={reset}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
               >
                 Reset
               </button>
               <button
                onClick={handleSimplify}
                disabled={isLoading || !legalText.trim()}
                className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 disabled:bg-gray-100 disabled:text-gray-400 transition-all flex items-center justify-center gap-4"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                {isLoading ? "Memproses..." : "Sederhanakan"}
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="flex flex-col p-6 md:p-12 bg-gray-50 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-8 z-10">
              <h3 className="font-bold uppercase tracking-[0.2em] text-[10px]">02 / Hasil Analisis</h3>
              {simplifiedResult && (
                <button 
                  onClick={copyToClipboard}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black"
                >
                  {copied ? "Berhasil!" : "Salin Teks"}
                </button>
              )}
            </div>

            <div className="w-full grow z-10">
              <AnimatePresence mode="wait">
                {simplifiedResult ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="prose prose-sm max-w-none text-gray-800 font-light leading-relaxed prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-widest"
                  >
                    <ReactMarkdown>{simplifiedResult}</ReactMarkdown>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="italic text-gray-300 font-light"
                  >
                    Hasil akan muncul di sini...
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {isLoading && (
               <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-[2px] flex flex-col items-center justify-center z-20">
                  <div className="w-20 h-20 border-2 border-black border-t-transparent animate-spin-slow rounded-full mb-6" />
                  <p className="font-bold uppercase tracking-[0.4em] text-[10px]">Analisis AI Sedang Berjalan</p>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
