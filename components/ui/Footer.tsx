export default function Footer() {
  return (
    <footer className="bg-[#0D1221] border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[#00D4FF] font-mono font-bold">BRN</span>
        <div className="flex gap-6">
          <a href="https://github.com/YOUR_USERNAME" target="_blank" className="text-gray-400 hover:text-[#00D4FF] transition text-sm">BikashNathAI</a>
          <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" className="text-gray-400 hover:text-[#00D4FF] transition text-sm">https://www.linkedin.com/in/bikash-nath-9603311b/</a>
          <a href="mailto:your@email.com" className="text-gray-400 hover:text-[#00D4FF] transition text-sm">brnath2026@gmail.com</a>
        </div>
        <p className="text-gray-500 text-sm">© 2026 Bikash Ranjan Nath</p>
      </div>
    </footer>
  );
}