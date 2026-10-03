function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-800 px-10 py-5">
      <h1 className="text-xl font-bold">Emmanuel D. Buenaventura</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-sky-400">About</a></li>
        <li><a href="#projects" className="hover:text-sky-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-sky-400">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;