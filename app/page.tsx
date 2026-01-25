import Image from "next/image";
import Background from "./Background";
import SkillsConstellation from "./Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-emerald-500/30 flex flex-col">
      <Background/>
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-emerald-400 font-bold text-xl tracking-tighter">PORTFOLIO</span>
          <div className="space-x-8 text-sm font-medium uppercase tracking-widest">
            <a href="#home" className="hover:text-emerald-400 transition">Home</a>
            <a href="#about" className="hover:text-emerald-400 transition">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
            <a href="#growth" className="hover:text-emerald-400 transition">Growth</a>
            <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
    <div className="absolute inset-0 rounded-full border-2 border-emerald-500 translate-x-3 translate-y-3"></div>
    <Image 
      src="/profile.png" // Change this to your filename in the public folder
      alt="Profile Picture"
      fill
      className="rounded-full object-cover transition duration-500 border-2 border-slate-800 bg-slate-800 transform hover:scale-110"
    />
  </div>
  <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Hello, I'm <span className="text-emerald-400">Abigayle.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl">
          I'm a full stack web developer passionate about building clean and functional applications.
        </p>
        <a href="#projects" className="mt-10 px-8 py-3 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-bold transition-all duration-300">
          VIEW MY WORK
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8 border-b-4 border-emerald-500 w-fit">ABOUT</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-lg text-slate-400 leading-relaxed">
              <p className="mb-6">
                Fully committed to the philosophy of life-long learning, I'm a developer with a deep passion for JavaScript, React and all things web development.
              </p>
              <p>
                When I'm not at my computer, I like to spend my time exploring new technologies and sharpening my design skills.
              </p>
            </div>
            
            {/* SKILLS GRID */}
            <SkillsConstellation/>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 border-b-4 border-emerald-500 w-fit">PROJECTS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Card 1 */}
          <div className="group relative overflow-hidden bg-slate-900 rounded-lg border border-slate-800">
            <div className="h-64 bg-slate-800 flex items-center justify-center">
              <span className="text-slate-600 group-hover:scale-110 transition duration-500 uppercase tracking-tighter font-black text-4xl">Project One</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Project Name</h3>
              <p className="text-slate-400 mb-4 text-sm">Built with Next.js, Tailwind, and Suparbase.</p>
              <button className="text-emerald-400 font-bold text-sm hover:underline">LEARN MORE →</button>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group relative overflow-hidden bg-slate-900 rounded-lg border border-slate-800">
            <div className="h-64 bg-slate-800 flex items-center justify-center">
              <span className="text-slate-600 group-hover:scale-110 transition duration-500 uppercase tracking-tighter font-black text-4xl">Project Two</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Project Name</h3>
              <p className="text-slate-400 mb-4 text-sm">Real-time data visualization tool.</p>
              <button className="text-emerald-400 font-bold text-sm hover:underline">LEARN MORE →</button>
            </div>
          </div>
        </div>
      </section>
      {/* GROWTH SECTION (In-Progress Learning) */}
<section id="growth" className="py-24 bg-slate-950 border-t border-slate-900">
  <div className="max-w-5xl mx-auto px-6">
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl font-bold text-white border-b-4 border-emerald-500 w-fit">GROWTH</h2>
      <span className="bg-emerald-500/10 text-emerald-400 text-xs py-1 px-3 rounded-full border border-emerald-500/20 uppercase tracking-widest font-bold">
        Currently Learning
      </span>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Learning Project 1 */}
      <div className="p-8 rounded-xl bg-slate-900/50 border border-emerald-500/10 hover:border-emerald-500/40 transition-all group">
        <h3 className="text-xl font-bold text-emerald-400 mb-3 uppercase tracking-tight">AI Chatbot Integration</h3>
        <p className="text-slate-400 leading-relaxed mb-4">
          I am currently exploring the Vercel AI SDK and OpenAI API to build an intelligent assistant that can answer questions about my documentation.
        </p>
        <div className="flex gap-2">
          <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300">#AI</span>
          <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300">#Python</span>
        </div>
      </div>

      {/* Learning Project 2 */}
      <div className="p-8 rounded-xl bg-slate-900/50 border border-emerald-500/10 hover:border-emerald-500/40 transition-all">
        <h3 className="text-xl font-bold text-emerald-400 mb-3 uppercase tracking-tight">Advanced TypeScript</h3>
        <p className="text-slate-400 leading-relaxed mb-4">
          Deep-diving into Generics and Utility Types to make my web applications more robust and type-safe.
        </p>
        <div className="flex gap-2">
          <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300">#TS</span>
          <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300">#SoftwareArchitecture</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-slate-900 text-slate-500 text-sm">
        <p>© 2026 [YOUR NAME]. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}