export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0D1221] px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">
          About <span className="text-[#00D4FF]">Me</span>
        </h2>
        <div className="w-16 h-1 bg-[#00D4FF] mb-8"></div>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          I am a QA Automation Architect with deep expertise in Playwright, Cypress,
          and Selenium. I bridge the gap between quality engineering and AI-powered
          automation to build reliable, scalable systems.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Beyond technology, I am building <span className="text-[#00FF94] font-semibold">Arogyom</span> —
          a healthcare vision that uses AI and automation to make hospitals smarter,
          faster, and more human.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[["5+","Years Experience"],["50+","Test Suites Built"],["3","AI Projects"],["1","Healthcare Vision"]].map(([n,l]) => (
            <div key={l} className="text-center p-4 border border-[#00D4FF]/20 rounded-lg">
              <div className="text-3xl font-bold text-[#00D4FF]">{n}</div>
              <div className="text-gray-400 text-sm mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}