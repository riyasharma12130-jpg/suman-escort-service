import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "../components/Header";

export const Route = createFileRoute("/report")({
  component: ReportPage,
  head: () => ({
    meta: [
      { title: "Report an Issue | Kavya Escort Service" },
      { name: "description", content: "Report any issues or concerns to Kavya Escort Service management. We take your privacy and satisfaction seriously." },
    ],
  }),
});

export default function ReportPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = `*Issue Report*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Issue Description:*\n${formData.issue}`;
    
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp API URL for the admin number
    const whatsappUrl = `https://wa.me/919928561640?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Support</p>
            <h1 className="font-display text-4xl md:text-6xl font-light">Report an Issue</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We take our client satisfaction and safety very seriously. If you have experienced any issues, please let our management team know immediately.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Your Name / Alias
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="How should we address you?"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-muted-foreground mb-2">
                  Issue Description
                </label>
                <textarea
                  id="issue"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-y"
                  placeholder="Please describe the issue in detail..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition shadow-[0_0_20px_-5px_#ff2a75]"
                >
                  Submit Report via WhatsApp
                </button>
              </div>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Your report will be sent directly to our management team via a secure WhatsApp connection.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-muted-foreground">
          <p className="font-display text-lg text-gold-gradient mb-2">Kavya Escort Service Bangalore</p>
          <p className="text-sm mb-6">Premium Companionship • Unmatched Discretion</p>
          <p>© {new Date().getFullYear()} Kavya Escort Service & Companion Services · All bookings by appointment</p>
        </div>
      </footer>
    </div>
  );
}
