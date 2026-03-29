import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-8 py-32 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3b82f6]">
      <div className="absolute inset-0 pointer-events-none select-none opacity-50 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#3b82f6]/40 via-transparent to-transparent" />
      <motion.div
        className="relative z-10 flex flex-col items-center gap-14"
        initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-44 h-44 rounded-full overflow-hidden shadow-2xl border-8 border-[#3b82f6] mb-6 bg-[#0f172a]">
          <Image src="/profile.jpg" alt="Profile" width={176} height={176} className="object-cover w-full h-full" />
        </div>
        <h1 className="text-6xl font-extrabold tracking-tight text-white mb-3 drop-shadow-2xl">[Your Name]</h1>
        <h2 className="text-2xl font-semibold text-[#3b82f6] mb-6">Web Developer & Designer</h2>
        <p className="max-w-2xl text-2xl text-white/90 mb-12">
          I build beautiful, performant web apps with a focus on user experience and modern design. Explore my work, learn more about me, and get in touch!
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          <a href="/about" className="px-10 py-4 rounded-3xl bg-[#3b82f6] text-white font-bold shadow-xl hover:bg-blue-600 transition text-xl">About</a>
          <a href="/projects" className="px-10 py-4 rounded-3xl bg-white text-[#3b82f6] font-bold shadow-xl border-2 border-[#3b82f6] hover:bg-blue-50 transition text-xl">Projects</a>
          <a href="/contact" className="px-10 py-4 rounded-3xl bg-[#1e293b] text-white font-bold shadow-xl hover:bg-[#334155] transition text-xl">Contact</a>
        </div>
      </motion.div>
    </section>
  );
}
