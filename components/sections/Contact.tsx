"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 bg-[#0D1221] px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Get In <span className="text-[#00D4FF]">Touch</span></h2>
        <div className="w-16 h-1 bg-[#00D4FF] mb-10"></div>
        {sent ? (
          <p className="text-[#00FF94] text-lg">✓ Message sent! I will get back to you soon.</p>
        ) : (
          <div className="space-y-4">
            <input className="w-full bg-[#0A0E1A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#00D4FF] outline-none" placeholder="Your Name" />
            <input className="w-full bg-[#0A0E1A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#00D4FF] outline-none" placeholder="Your Email" type="email" />
            <textarea className="w-full bg-[#0A0E1A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#00D4FF] outline-none h-32" placeholder="Your Message" />
            <button onClick={() => setSent(true)}
              className="w-full py-3 bg-[#00D4FF] text-[#0A0E1A] font-semibold rounded-lg hover:bg-[#00b8d9] transition">
              Send Message
            </button>
          </div>
        )}
      </div>
    </section>
  );
}