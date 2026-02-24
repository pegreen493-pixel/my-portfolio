"use client";
import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const response = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (response.ok) {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 border-b-4 border-cyan-400 w-fit uppercase tracking-widest">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 bg-cyan-950/10 backdrop-blur-xl border border-cyan-500/20 p-8 rounded-2xl shadow-2xl">
          <div>
            <label className="block text-cyan-400 text-xs font-black uppercase mb-2">Name</label>
            <input name="name" type="text" required className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" />
          </div>
          
          <div>
            <label className="block text-cyan-400 text-xs font-black uppercase mb-2">Email</label>
            <input name="email" type="email" required className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" />
          </div>

          <div>
            <label className="block text-cyan-400 text-xs font-black uppercase mb-2">Message</label>
            <textarea name="message" rows={4} required className="w-full bg-slate-900/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" />
          </div>

          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black uppercase tracking-widest rounded-lg transition-all active:scale-95 disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && <p className="text-emerald-400 text-sm font-bold text-center">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-400 text-sm font-bold text-center">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}