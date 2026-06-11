const skills = [
  { cat: "QA Automation", color: "#00D4FF", items: ["Playwright","Cypress","Selenium","TestNG","Jest"] },
  { cat: "AI & LLMs", color: "#7B61FF", items: ["LangChain","OpenAI API","Prompt Engineering","RAG","Agents"] },
  { cat: "CI/CD & DevOps", color: "#00FF94", items: ["GitHub Actions","Jenkins","Docker","Kubernetes","AWS"] },
  { cat: "Architecture", color: "#FF6B6B", items: ["Microservices","API Design","Test Strategy","System Design"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0A0E1A] px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Skills <span className="text-[#00D4FF]">&amp; Expertise</span></h2>
        <div className="w-16 h-1 bg-[#00D4FF] mb-12"></div>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map(s => (
            <div key={s.cat} className="p-6 bg-[#0D1221] border border-white/10 rounded-xl">
              <h3 className="font-bold mb-4" style={{color: s.color}}>{s.cat}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map(i => (
                  <span key={i} className="px-3 py-1 text-sm rounded-full border text-gray-300"
                    style={{borderColor: s.color + "40"}}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}