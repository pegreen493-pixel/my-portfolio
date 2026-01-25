export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      {/* The Grid Layer */}
      <div 
        className="absolute inset-0 opacity-100" 
        style={{
          backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), 
                            linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000" />
    </div>
  );
}