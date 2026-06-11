const projects = [
  { title: "Arogyom AI", desc: "AI-powered hospital management with smart diagnostics.", tech: ["Next.js","Python","LLM"], status: "Active", link: "https://github.com/YOUR_USERNAME" },
  { title: "Playwright Framework", desc: "Enterprise test automation framework with CI/CD.", tech: ["Playwright","TypeScript","GitHub Actions"], status: "Open Source", link: "https://github.com/YOUR_USERNAME" },
  { title: "LLM Test Agent", desc: "AI agent that auto-generates test cases from user stories.", tech: ["LangChain","OpenAI","Selenium"], status: "PoC", link: "https://github.com/YOUR_USERNAME" },
  { title: "QA Dashboard", desc: "Real-time test metrics dashboard with trend analytics.", tech: ["React","Node.js","PostgreSQL"], status: "Active", link: "https://github.com/YOUR_USERNAME" },
];

const statusColor: Record<string,string> = {
  Active: "text-green-400 border-green-400/30 bg-green-400/10",
  "Open Source": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  PoC: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0D1221] px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Featured <span className="text-[#00D4FF]">Projects</span></h2>
        <div className="w-16 h-1 bg-[#00D4FF] mb-12"></div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p => (
            <div key={p.title} className="p-6 bg-[#0A0E1A] border border-white/10 rounded-xl hover:border-[#00D4FF]/40 transition">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-white text-lg">{p.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full border ${statusColor[p.status]}`}>{p.status}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded">{t}</span>)}
              </div>
              <a href={p.link} target="_blank" className="text-[#00D4FF] text-sm hover:underline">https://github.com/BikashNathAI</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}