import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-6 bg-[#0f172a] shadow-lg">
      <div className="flex w-full max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 text-white font-extrabold text-2xl tracking-tight">
          <span className="bg-[#3b82f6] rounded-2xl w-10 h-10 flex items-center justify-center text-white font-bold text-xl shadow">E</span>
          Portfolio
        </Link>
        <ul className="flex gap-10 text-lg font-semibold">
          <li><Link className="text-white hover:text-[#3b82f6] transition" href="/">Home</Link></li>
          <li><Link className="text-white hover:text-[#3b82f6] transition" href="/about">About</Link></li>
          <li><Link className="text-white hover:text-[#3b82f6] transition" href="/projects">Projects</Link></li>
          <li><Link className="text-white hover:text-[#3b82f6] transition" href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
