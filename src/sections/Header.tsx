export const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className="flex gap-1 p-0.5 border border-white/50 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="px-4 py-1.5 cursor-pointer rounded-full text-white/80 text-sm font-medium hover:bg-white/30 hover:text-white transition duration-300">Home</a>
        <a href="#projects" className="px-4 py-1.5 cursor-pointer rounded-full text-white/80 text-sm font-medium hover:bg-white/30 hover:text-white transition duration-300">Projects</a>
        <a href="#about" className="px-4 py-1.5 cursor-pointer rounded-full text-white/80 text-sm font-medium hover:bg-white/30 hover:text-white transition duration-300">About</a>
        <a href="#contact" className="px-4 py-1.5 cursor-pointer rounded-full text-white/80 text-sm font-medium hover:bg-white/30 hover:text-white transition duration-300">Contact</a>
      </nav>
    </div>
  )
};
