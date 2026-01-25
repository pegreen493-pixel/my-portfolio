import React from 'react';

const skills = [
    { name: 'HTML', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    { name: 'CSS', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'},
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'},
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg'},
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'},
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'},

];

export default function SkillsConstellation() {
    return(
        <section id="skills" className="py-24 relative z-10">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-16 border-b-4 border-emerald-500 w-fit mx-auto">SKILLS</h2>
                
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-3xl mx-auto">
                    {skills.map((skill, index) => (
                        <div
                        key={skill.name}
                        className={`relative w-28 h-32 flex items-center justify-center transition-all duration-500 hover:scale-110 group
                            ${index % 2 === 0 ? 'animate-float-slow' : 'animate-float-fast'}`}
                        >
                        <div className='absolute inset-0 bg-slate-900/60 backdrop-blur-sm border border-emerald-500/30 group-hover:border-emerald-500 group-hover:bg-emerald-500/20 transition-all duration-300 shadow-xl'
                            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
    
                        </div>
                        
                        <div className='relative z-10 flex flex-col items-center pointer-events-none'>
                            <img src ={skill.icon} alt={skill.name} className='w-10 h-10 mb-2 drop-shadow-md' />
                            <span className='text-[10px] font-bold uppercase tracking-tigther text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity'>
                                {skill.name}
                            </span>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}