export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto py-24 px-8">
      <h1 className="text-5xl font-extrabold mb-12 text-[#3b82f6] drop-shadow">Projects</h1>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#3b82f6]/30 rounded-3xl shadow-2xl p-10 flex flex-col gap-6 border-4 border-[#3b82f6]/40">
          <h2 className="text-2xl font-bold text-white">Project Title</h2>
          <p className="text-white/80">Short project description goes here.</p>
          <a href="#" className="mt-auto text-[#3b82f6] font-semibold hover:underline">View Details</a>
        </div>
        {/* Add more project cards here */}
      </div>
    </section>
  );
}