export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto py-24 px-8">
      <div className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#3b82f6]/30 rounded-3xl shadow-2xl p-12 border-4 border-[#3b82f6]/40">
        <h1 className="text-5xl font-extrabold mb-8 text-[#3b82f6] drop-shadow">Contact</h1>
        <form className="flex flex-col gap-8">
          <input className="p-5 border-none rounded-3xl bg-[#0f172a] text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-lg" type="text" placeholder="Your Name" required />
          <input className="p-5 border-none rounded-3xl bg-[#0f172a] text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-lg" type="email" placeholder="Your Email" required />
          <textarea className="p-5 border-none rounded-3xl bg-[#0f172a] text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-lg" placeholder="Your Message" required />
          <button className="bg-[#3b82f6] text-white py-5 rounded-3xl font-bold hover:bg-blue-600 transition text-xl shadow-lg" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}