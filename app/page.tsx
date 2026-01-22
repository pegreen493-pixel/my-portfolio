export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-6">
      <div className="max-w-3xl text-center">
        {/* HERO SECTION */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-6">
          Hi, I'm [Your Name]
        </h1>
        
        <p className="text-xl text-slate-400 mb-10 leading-relaxed">
          Full-Stack Developer building modern, high-performance web experiences. 
          Currently focused on React, TypeScript, and AI integration.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/20">
            View My Work
          </button>
          <button className="px-8 py-3 border border-slate-700 hover:bg-slate-900 rounded-full font-semibold transition-all">
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}