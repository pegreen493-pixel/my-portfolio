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
                {/*<h2 className="text-3xl font-bold text-white mb-16 border-b-4 border-emerald-500 w-fit mx-auto uppercase tracking-widest"></h2> */}
                
                <div className="relative inline-grid grid-cols-3 sm:grid-cols-3 gap-x-2 gap-y-[-10px] items-center justify-items-center">
                    {skills.map((skill, index) => {
                        // Logic to stagger every second "visual" row
                        // We push items 4, 5, 9, 10 slightly to the right
                        const isStaggeredRow = Math.floor(index / 3) % 2 === 1;

                        return (
                            <div
                                key={skill.name}
                                className={`relative w-24 h-26 flex items-center justify-center transition-all duration-500 hover:scale-110 group animate-unison
                                    ${isStaggeredRow ? 'translate-x-12' : ''} 
                                    -mb-8
                                `}
                            >
                              
                                <div 
                                    className="absolute inset-0 bg-cyan-400/50 backdrop-blur-md group-hover:bg-emerald-600/50 transition-all duration-300
                                               filter drop-shadow-[0_0_15px_rgba(16,185,129,0.7)]"
                                    style={{ 
                                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                    }} 
                                />
                                <div 
                                    className="absolute inset-[2px] bg-slate-950 backdrop-blur-md transition-all duration-300 group-hover:bg-emerald-600/50"
                                    style={{ 
                                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                    }} 
                                />

                                <div className='relative z-10 flex flex-col items-center pointer-events-none'>
                                    <img src={skill.icon} alt={skill.name} className='w-11 h-11 mb-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] invert brightness-200' />
                                    <span className='text-[10px] font-black uppercase tracking-widest text-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}