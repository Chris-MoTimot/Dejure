import { motion } from "motion/react";
import { AlertTriangle, AlertCircle, HelpCircle, FileText } from "lucide-react";

export default function Masalah() {
  const problems = [
    {
      title: "Jargon yang Eksklusif",
      desc: "Bahasa hukum seringkali menggunakan istilah yang sangat teknis ('Legalese') yang menciptakan dinding antara dokumen dan pembacanya.",
      icon: <HelpCircle className="w-8 h-8" />
    },
    {
      title: "Risiko Salah Tafsir",
      desc: "Satu kata yang salah dipahami bisa berarti hilangnya hak atau munculnya kewajiban yang tidak diinginkan.",
      icon: <AlertTriangle className="w-8 h-8" />
    },
    {
      title: "Biaya & Waktu Tinggi",
      desc: "Konsultasi profesional hanya untuk memahami dokumen dasar memakan biaya yang tidak sedikit dan waktu yang lama.",
      icon: <AlertCircle className="w-8 h-8" />
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <section className="bg-black text-white py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] max-w-4xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Bahasa Hukum <br />
            <span className="text-zinc-500">Membingungkan.</span>
          </motion.h1>
          <motion.p 
            className="mt-8 md:mt-12 text-lg md:text-2xl font-light text-gray-400 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Kami menyadari bahwa akses terhadap informasi hukum seharusnya bersifat universal, namun kenyataannya justru sebaliknya.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 block">Analisis Masalah</span>
            <div className="space-y-12">
              {problems.map((p, i) => (
                <div key={i} className="flex gap-6">
                  <div className="shrink-0 w-16 h-16 border border-black flex items-center justify-center">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase mb-3 tracking-tighter">{p.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-50 border border-black p-10 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
             <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 leading-none">Dampak Masalah</h3>
             <div className="space-y-8">
               <div className="p-6 bg-white border border-black/5">
                 <p className="text-sm font-bold uppercase mb-2 tracking-widest">Business</p>
                 <p className="text-gray-500 font-light italic text-sm">"Kami menandatangani kontrak kerjasama tanpa tahu ada klausul pembatalan sepihak yang merugikan."</p>
               </div>
               <div className="p-6 bg-white border border-black/5">
                 <p className="text-sm font-bold uppercase mb-2 tracking-widest">Personal</p>
                 <p className="text-gray-500 font-light italic text-sm">"Saya bingung dengan surat warisan dari pengadilan karena istilah Latin yang sangat banyak."</p>
               </div>
               <div className="p-6 bg-white border border-black/5">
                 <p className="text-sm font-bold uppercase mb-2 tracking-widest">Social</p>
                 <p className="text-gray-500 font-light italic text-sm">"Literasi hukum masyarakat rendah karena akses ke dokumen peraturan tidak ramah pembaca."</p>
               </div>
             </div>
             
             <div className="mt-12 flex items-center justify-center p-8 bg-black text-white text-center">
                <FileText className="w-12 h-12 opacity-30 absolute" />
                <span className="relative z-10 font-bold uppercase tracking-widest text-sm">Target Audiens: Pengusaha, Karyawan, Pelajar, dll.</span>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-zinc-50 border-y border-black/5">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl font-black uppercase mb-8">Sudah Waktunya Berhenti Merasa Bingung.</h2>
           <p className="text-gray-500 mb-10">Dejure diciptakan untuk menjadi jembatan antara teks hukum yang mati dan pemahaman yang hidup.</p>
           <div className="aspect-video bg-white border border-black flex items-center justify-center relative group">
              <div className="absolute inset-0 border-[20px] border-zinc-100 group-hover:border-zinc-50 transition-all" />
              <HelpCircle className="w-24 h-24 text-black opacity-10" />
           </div>
        </div>
      </section>
    </div>
  );
}
