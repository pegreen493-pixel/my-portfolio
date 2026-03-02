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
      'YOUR_SERVICE_ID',   // From EmailJS Dashboard
      'YOUR_TEMPLATE_ID',  // From EmailJS Dashboard
      form.current,
      'YOUR_PUBLIC_KEY'    // From EmailJS Dashboard
    )
    .then(() => {
        setStatus('success');
        form.current?.reset();
    }, (error) => {
        setStatus('error');
        console.error(error.text);
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Get In Touch</h2>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
            <input 
              type="email" 
              name="from_email" 
              placeholder="name@example.com"
              required 
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea 
              name="message" 
              placeholder="What's on your mind?"
              required 
              className="w-full p-3 h-32 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <p className="text-green-400 text-center animate-pulse">✨ Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center">❌ Oops! Something went wrong. Try again?</p>
          )}
        </form>
      </div>
    </section>
  );
}