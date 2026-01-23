export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-200 selection:bg-emerald-500/30">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-emerald-400 font-bold text-xl tracking-tighter">PORTFOLIO</span>
          <div className="space-x-8 text-sm font-medium uppercase tracking-widest">
            <a href="#home" className="hover:text-emerald-400 transition">Home</a>
            <a href="#about" className="hover:text-emerald-400 transition">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Hello, I'm <span className="text-emerald-400">[Your Name].</span>
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
          <h2 className="text-3xl font-bold text-white mb-12 border-b-4 border-emerald-500 w-fit">ABOUT</h2>
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
            <div className="grid grid-cols-3 gap-4">
              {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Git', 'HTML', 'CSS', 'PostgreSQL'].map((skill) => (
                <div key={skill} className="bg-slate-800 p-4 text-center rounded border border-slate-700 hover:border-emerald-500/50 transition">
                  <span className="text-xs font-bold text-emerald-400 uppercase">{skill}</span>
                </div>
              ))}
            </div>
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
              <p className="text-slate-400 mb-4 text-sm">Built with Next.js, Tailwind, and Supabase.</p>
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

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-slate-900 text-slate-500 text-sm">
        <p>© 2026 [YOUR NAME]. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}