const posts = [
  { title: "Why AI is the future of QA automation", tag: "AI", date: "Jun 2026" },
  { title: "Building Arogyom — my healthcare vision", tag: "Healthcare", date: "May 2026" },
  { title: "Playwright vs Cypress in 2026", tag: "Automation", date: "Apr 2026" },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#0A0E1A] px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Blog <span className="text-[#00D4FF]">&amp; Insights</span></h2>
        <div className="w-16 h-1 bg-[#00D4FF] mb-12"></div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <div key={p.title} className="p-6 bg-[#0D1221] border border-white/10 rounded-xl hover:border-[#00D4FF]/30 transition cursor-pointer">
              <span className="text-xs text-[#00D4FF] font-mono">{p.tag}</span>
              <h3 className="text-white font-semibold mt-2 mb-4 leading-snug">{p.title}</h3>
              <p className="text-gray-500 text-xs">{p.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}