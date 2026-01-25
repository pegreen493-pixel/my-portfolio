import Image from "next/image";
import Background from "./Background";

export default function Home() {
  return (
    <main className="relative text-slate-200 selection:bg-emerald-500/30">
      {/* 1. BACKGROUND LAYER */}
      <Background />

      {/* 2. NAVIGATION BAR */}
      <nav className="relative min-h-screen text-slate-200 selection:bg-emerald-500/30 flex flex-col">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-emerald-400 font-bold text-xl tracking-tighter">PEGREEN</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
            <a href="#home" className="hover:text-emerald-400 transition">Home</a>
            <a href="#about" className="hover:text-emerald-400 transition">About</a>
            <a href="#growth" className="hover:text-emerald-400 transition">Growth</a>
            <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-12 max-w-5xl mx-auto pt-20">
        <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
          <div className="absolute inset-0 rounded-full border-2 border-emerald-500 translate-x-3 translate-y-3"></div>
          <Image 
            src="/profile.jpg" // Make sure your photo is named profile.jpg in the /public folder
            alt="Profile Picture"
            fill
            className="rounded-full object-cover grayscale hover:grayscale-0 transition duration-500 border-2 border-slate-800 bg-slate-800"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hello, I'm <span className="text-emerald-400">Pegreen.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl">
            I'm a full stack web developer passionate about building clean and functional applications.
          </p>
          <a href="#projects" className="inline-block mt-10 px-8 py-3 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 font-bold transition-all duration-300">
            VIEW MY WORK
          </a>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="py-24 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 border-b-4 border-emerald-500 w-fit">ABOUT</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-lg text-slate-400 leading-relaxed">
              <p className="mb-6">
                Fully committed to the philosophy of life-long learning, I'm a developer with a deep passion for JavaScript, React and all things web development.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-8">
                {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'].map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GROWTH SECTION (The Future-Proof Tab) */}
      <section id="growth" className="py-24 border-t border-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white border-b-4 border-emerald-500 w-fit">GROWTH</h2>
            <span className="bg-emerald-500/10 text-emerald-400 text-xs py-1 px-3 rounded-full border border-emerald-500/20 uppercase tracking-widest font-bold">
              Currently Learning
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-slate-900/50 border border-emerald-500/10 hover:border-emerald-500/40 transition-all">
              <h3 className="text-xl font-bold text-emerald-400 mb-3 uppercase">AI Chatbot Integration</h3>
              <p className="text-slate-400 text-sm">Exploring Vercel AI SDK to create intelligent user interfaces.</p>
            </div>
            <div className="p-8 rounded-xl bg-slate-900/50 border border-emerald-500/10 hover:border-emerald-500/40 transition-all">
              <h3 className="text-xl font-bold text-emerald-400 mb-3 uppercase">Mobile Development</h3>
              <p className="text-slate-400 text-sm">Learning React Native to expand my skills into mobile apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 border-b-4 border-emerald-500 w-fit">PROJECTS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
            <div className="h-48 bg-slate-800 flex items-center justify-center">IMAGE PLACEHOLDER</div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Project One</h3>
              <button className="text-emerald-400 font-bold text-sm hover:underline">LEARN MORE →</button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="py-12 text-center text-slate-500 text-sm">
        <p>© 2026 PEGREEN. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}