export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* 1. THE GRID */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), 
                            linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />
      
      {/* 2. THE GLOW ORBS (Direct Styles) */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full animate-drift"
        style={{
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full animate-drift delay-2000"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
}