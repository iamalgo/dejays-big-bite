"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      
      if (!res.ok) throw new Error("Request failed");
      
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-6xl mb-4">Get In Touch</h1>
        <p className="text-zinc-300 text-xl max-w-2xl mx-auto">
          Want the truck at your event? Have questions about catering? 
          Send us a message and we'll get right back to you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="card">
          <h2 className="font-display text-3xl mb-6 text-brand-orange">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-zinc-400 mb-2">
                Name *
              </label>
              <input
                name="name"
                required
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 
                         px-4 py-3 text-brand-cream placeholder-zinc-500
                         focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20
                         transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-400 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 
                         px-4 py-3 text-brand-cream placeholder-zinc-500
                         focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20
                         transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-400 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 
                         px-4 py-3 text-brand-cream placeholder-zinc-500
                         focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20
                         transition-all"
                placeholder="(205) 555-1234"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-400 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 
                         px-4 py-3 text-brand-cream placeholder-zinc-500
                         focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20
                         transition-all resize-none"
                placeholder="Tell us about your event or inquiry..."
              />
            </div>

            <button 
              type="submit"
              className="btn w-full text-base" 
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>Sending...</>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {status === "sent" && (
              <div className="p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-400 text-center">
                ✓ Thanks! We'll be in touch soon.
              </div>
            )}
            
            {status === "error" && (
              <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-400 text-center">
                ✗ Something went wrong. Please try calling or emailing us directly.
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card">
            <h2 className="font-display text-3xl mb-6 text-brand-orange">Contact Info</h2>
            
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-orange/10 rounded-lg">
                  <Phone className="text-brand-orange" size={24} />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm mb-1">Phone</p>
                  <a 
                    href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
                    className="text-brand-cream hover:text-brand-orange transition-colors font-semibold text-lg no-underline"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-orange/10 rounded-lg">
                  <Mail className="text-brand-orange" size={24} />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm mb-1">Email</p>
                  <a 
                    href={`mailto:${site.email}`}
                    className="text-brand-cream hover:text-brand-orange transition-colors font-semibold no-underline break-all"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-orange/10 rounded-lg">
                  <MapPin className="text-brand-orange" size={24} />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm mb-1">Location</p>
                  <p className="text-brand-cream font-semibold">
                    {site.address}
                  </p>
                  <p className="text-zinc-500 text-sm">{site.businessType}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-brand-red/10 to-brand-orange/10 border-brand-orange/30">
            <h3 className="font-display text-2xl mb-3">Hours & Availability</h3>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
              We operate at various events, pop-ups, and private bookings throughout the Birmingham area. 
              Follow us on social media for location updates and special announcements!
            </p>
            <p className="text-brand-orange font-semibold text-sm">
              📍 Call or text for our current location and schedule
            </p>
          </div>

          <div className="card bg-zinc-900/80">
            <h3 className="font-display text-2xl mb-3">Quick Response</h3>
            <p className="text-zinc-300 text-sm">
              We typically respond within 24 hours. For urgent requests or same-day inquiries, 
              please call us directly at <a href={`tel:${site.phone.replace(/[^0-9]/g, "")}`} className="text-brand-orange hover:text-brand-red font-semibold no-underline">{site.phone}</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
