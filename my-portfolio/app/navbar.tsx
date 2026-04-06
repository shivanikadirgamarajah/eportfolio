export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 flex justify-center py-6 bg-[#0f172a] shadow-lg z-[999]">
      <div className="flex w-full max-w-5xl items-center justify-between px-6">
        <ul className="flex w-full justify-between text-lg font-semibold">
          <li className="flex-1 text-center"><a className="block w-full py-2 text-white hover:text-[#3b82f6] transition" href="/#home">Home</a></li>
          <li className="flex-1 text-center"><a className="block w-full py-2 text-white hover:text-[#3b82f6] transition" href="/#about">About</a></li>
          <li className="flex-1 text-center"><a className="block w-full py-2 text-white hover:text-[#3b82f6] transition" href="/#Experience">Experience</a></li>
          <li className="flex-1 text-center"><a className="block w-full py-2 text-white hover:text-[#3b82f6] transition" href="/#resume">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
