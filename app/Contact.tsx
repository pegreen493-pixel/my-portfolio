"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    emailjs.sendForm(
      'service_v4zdc9f',   // From EmailJS Dashboard
      'template_2euqd2u',  // From EmailJS Dashboard
      form.current,
      'DbybYGcbDNG9JLLo8',   // From EmailJS Dashboard
    )
    .then(() => {
        setStatus('success');
        form.current?.reset();
        setTimeout(() => setStatus('idle'), 5000); 
        setStatus('error');
        console.error(error.text);
    });
  };

  return (
    <section id="contact" className="py-20 px-4 relative z-10">
      <div className="max-w-xl mx-auto bg-[#0a0c14] border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
        <h2 className="text-4xl font-bold mb-2 text-center text-white tracking-tight">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-8 text-sm">
          Have a project in mind? Let's build something great.
        </p>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">
              Your Email
            </label>
            <input 
              type="email" 
              name="from_email" 
              placeholder="name@example.com"
              required 
              className="w-full p-4 rounded-xl bg-[#161b22] border border-white/5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-500 transition-all shadow-inner"
            />
          </div>
          
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 ml-1">
              Message
            </label>
            <textarea 
              name="message" 
              placeholder="What's on your mind?"
              required 
              className="w-full p-4 h-40 rounded-xl bg-[#161b22] border border-white/5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-500 transition-all resize-none shadow-inner"
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all transform active:scale-[0.98] shadow-lg shadow-blue-600/20 disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          <div className="h-6"> {/* Fixed height to prevent layout shift */}
            {status === 'success' && (
              <p className="text-emerald-400 text-center text-sm font-medium animate-fade-in">
                ✨ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-rose-400 text-center text-sm font-medium">
                Oops! Something went wrong. Try again?
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}