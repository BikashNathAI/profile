export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#0A0E1A] flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <p className="text-[#00D4FF] font-mono text-sm mb-4 tracking-widest">
          Hello, I am
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Bikash Ranjan<br/>
          <span className="text-[#00D4FF]">Nath</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
          QA Architect · AI Automation Engineer · Building<br/>
          <span className="text-[#00FF94]">Arogyom</span> — a smarter healthcare vision
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects"
            className="px-8 py-3 bg-[#00D4FF] text-[#0A0E1A] font-semibold rounded-lg hover:bg-[#00b8d9] transition">
            View Projects
          </a>
          <a href="#contact"
            className="px-8 py-3 border border-[#00D4FF] text-[#00D4FF] rounded-lg hover:bg-[#00D4FF]/10 transition">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}