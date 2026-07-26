import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "../components/Header";

export const Route = createFileRoute("/report")({
  component: ReportPage,
  head: () => ({
    meta: [
      { title: "Report an Issue | Suman Varma Call Girls" },
      { name: "description", content: "Report any issues or concerns to Suman Varma Call Girls management. We take your privacy and satisfaction seriously." },
    ],
  }),
});

export default function ReportPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    issue: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://formsubmit.co/ajax/riyasharma12130@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "New Issue Report - Suman Varma Call Girls",
            _template: "table",
            Name: formData.name,
            Phone: formData.phone,
            Email: formData.email,
            Issue: formData.issue
        })
      });
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Failed to submit report. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-display text-foreground mb-4">Report Submitted Successfully</h2>
                <p className="text-muted-foreground mb-8">
                  Thank you for bringing this to our attention. Our management team will review your report immediately.
                </p>
                <button 
                  onClick={() => { setIsSuccess(false); setFormData({ name: '', phone: '', email: '', issue: '' }); }}
                  className="rounded-full border border-primary/40 px-8 py-3 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition"
                >
                  Submit Another Report
                </button>
              </div>
            ) : (
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
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                    placeholder="your@email.com"
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
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition shadow-[0_0_20px_-5px_#ff2a75] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : "Submit Report"}
                  </button>
                </div>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Your report will be securely emailed directly to our management team at riyasharma12130@gmail.com.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      
    </div>
  );
}
