export default function About() {
  return (
    <section className="max-w-2xl mx-auto py-24 px-8">
      <div className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#3b82f6]/30 rounded-3xl shadow-2xl p-12 flex flex-col gap-8 border-4 border-[#3b82f6]/40">
        <h1 className="text-5xl font-extrabold mb-2 text-[#3b82f6] drop-shadow">About Me</h1>
        <p className="text-2xl text-white/90">
          Hi! I’m <span className="font-semibold text-[#3b82f6]">Shivani Kadirgamarajah</span>, a passionate developer eager to build impactful web Experiences. I love working with modern frameworks and creating delightful user interfaces.
        </p>
      </div>
    </section>
  );
}