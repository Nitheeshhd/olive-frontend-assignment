const Navbar = () => {
  const links = ["Solutions", "Features", "Pricing", "Blog", "Restaurants", "Food"];

  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
      <a href="#" className="flex items-center gap-2" aria-label="Olive home">
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#a9bf45] shadow-sm">
          <span className="absolute left-2 top-1 h-2 w-1.5 rotate-[-25deg] rounded-full bg-[#eef6c6]" />
          <span className="h-3.5 w-3.5 rounded-full bg-[#263612]" />
        </span>
        <span className="text-2xl font-black text-[#5d741e]">Olive</span>
      </a>

      <nav className="hidden items-center gap-7 text-sm font-semibold text-[#58614f] lg:flex">
        {links.map((link) => (
          <a key={link} href="#" className="transition hover:text-[#1f3d10]">
            {link}
            {(link === "Solutions" || link === "Food") && (
              <span className="ml-1 text-[10px]">v</span>
            )}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="hidden text-sm font-semibold text-[#3f4937] transition hover:text-[#1f3d10] sm:inline-flex">
          Sign in
        </button>
        <button className="rounded-full bg-[#18230f] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#2b4017] sm:px-5">
          Get Olive +
        </button>
      </div>
    </header>
  );
};

export default Navbar;
