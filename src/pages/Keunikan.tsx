import { motion } from "motion/react";
import { Zap, Sparkles, Target, Award } from "lucide-react";

export default function Keunikan() {
  const sparks = [
    {
      title: "Orisinalitas",
      desc: "Ide-ide fresh dan out-of-the-box dalam pendekatan literasi hukum modern. Kami tidak meniru, kami mendefinisikan ulang.",
      icon: <Sparkles className="w-10 h-10" />
    },
    {
      title: "Wow Factor",
      desc: "Penggunaan AI secara elegan untuk menciptakan sesuatu yang tak terduga. Bukan sekadar ringkasan, melainkan interpretasi yang cerdas.",
      icon: <Zap className="w-10 h-10" />
    },
    {
      title: "User-First Approach",
      desc: "Lupakan antarmuka rumit. Dejure didesain untuk satu tujuan: Kejelasan. Setiap pixel melayani pemahaman Anda.",
      icon: <Target className="w-10 h-10" />
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 md:py-32 px-6 flex flex-col items-center text-center bg-zinc-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-16 h-16 md:w-20 md:h-20 bg-black flex items-center justify-center mb-8 md:mb-12 shadow-[6px_6px_0px_0px_rgba(200,200,200,1)]"
        >
          <Zap className="text-white w-8 h-8 md:w-10 md:h-10" />
        </motion.div>
        
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-6 md:mb-8">
          The Dejure <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-400">Spark.</span>
        </h1>
        <p className="text-lg md:text-2xl font-light text-gray-500 max-w-2xl leading-relaxed">
          Kami tidak hanya membangun aplikasi; kami sedang membangun masa depan di mana setiap orang memiliki kedaulatan atas dokumen yang mereka tanda tangani.
        </p>
      </section>

      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-black text-white p-10 md:p-20 relative overflow-hidden flex flex-col justify-between">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8 md:mb-12 z-10">Apa yang <br />Membedakan Kami?</h2>
            <div className="relative z-10 border-l-4 border-white pl-8">
               <p className="text-xl text-gray-300 font-light italic">"Kami percaya bahwa hukum yang paling kuat adalah yang dimengerti oleh rakyatnya."</p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-32 -mt-32 rounded-full blur-3xl" />
          </div>

          <div className="flex flex-col gap-8">
            {sparks.map((spark, i) => (
              <motion.div 
                key={i}
                className="p-8 border border-black hover:bg-zinc-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-center gap-6 mb-6">
                   <div className="w-16 h-16 bg-zinc-100 flex items-center justify-center border border-black/5">
                     {spark.icon}
                   </div>
                   <h3 className="text-2xl font-black uppercase tracking-tighter">{spark.title}</h3>
                </div>
                <p className="text-gray-500 font-light leading-relaxed">{spark.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
           <Award className="w-16 h-16 mb-8" />
           <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-center">Inovasi yang Berani.</h2>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-zinc-50 border border-black/5 flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all cursor-default">
                  <div className="text-center">
                    <div className="w-12 h-1 bg-black mx-auto mb-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Spark Prototype 0{i}</span>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
