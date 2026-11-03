import React, { useState } from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: 'CP Greens',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* SECTION 11: Call to Action Banner */}
      <section className="theme-day bg-[#f6f1e8] py-16 lg:py-24" aria-labelledby="visit-title">
        <div className="wrap">
          <div className="theme-night relative overflow-hidden bg-[#0b1220] px-7 py-14 shadow-[0_40px_70px_-40px_rgba(11,18,32,0.7)] sm:px-12 lg:px-16 lg:py-20 rounded-xl">
            <span
              aria-hidden="true"
              className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-[#222f13]/60 to-transparent lg:block"
            />
            <h2 id="visit-title" className="relative max-w-[18ch] text-fluid-title leading-[1.12] text-[#f4eee2] font-serif font-normal">
              Book a site visit.{' '}
              <em className="block pb-1 text-[#d8c08a] italic">
                Or ask about commercial space.
              </em>
            </h2>
            <p className="relative mt-6 max-w-lg text-[#f4eee2]/85 font-light text-[17px] leading-relaxed">
              Our team will call you within 24 hours to confirm.
            </p>
            <div className="relative mt-9 flex flex-wrap gap-4">
              <a
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 active:translate-y-px whitespace-nowrap bg-[#b89a5e] text-[#0b1220] hover:bg-[#d8c08a]"
                href="#visit"
              >
                Enquire now
              </a>
              <a
                href="tel:+919733388879"
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 active:translate-y-px whitespace-nowrap border border-[#f4eee2]/40 text-[#f4eee2] hover:bg-[#f4eee2] hover:text-[#0b1220]"
              >
                <Phone className="w-4 h-4 text-[#b89a5e]" />
                <span>+91 97333 88879</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: Start a conversation / Enquiry Form */}
      <section id="visit" className="theme-night scroll-mt-20 bg-[#0b1220] py-24 lg:py-32 text-[#f4eee2]" aria-labelledby="contact-title">
        <div className="wrap">
          <div className="mx-auto max-w-2xl text-center">
            <p className="label">Contact</p>
            <h2 id="contact-title" className="mt-4 text-fluid-title leading-[1.1] font-serif font-normal text-[#f4eee2]">
              Start a conversation.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[#f4eee2]/80 font-light text-[17px] leading-relaxed">
              Tell us what you are looking for. Our team will call you within 24 hours.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            {submitted ? (
              <div className="border border-[#b89a5e]/40 bg-[#172238]/70 p-8 sm:p-12 text-center rounded backdrop-blur-md">
                <CheckCircle2 className="w-12 h-12 text-[#b89a5e] mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-normal text-[#f4eee2] mb-2">
                  Thank You for Your Enquiry
                </h3>
                <p className="text-[14px] text-[#f4eee2]/70 font-light mb-6">
                  Our advisory team has received your message and will call you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#b89a5e] text-[#0b1220] text-[11px] font-medium uppercase tracking-[0.2em]"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid gap-6 border border-[#f4eee2]/20 bg-[#172238]/70 p-6 sm:p-10 backdrop-blur-md rounded"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="full-name" className="text-[14px] text-[#f4eee2]">
                    Full name *
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-[#f4eee2]/30 bg-[#0b1220]/60 px-4 py-3.5 text-[15px] text-[#f4eee2] placeholder:text-[#f4eee2]/40 transition-colors focus:border-[#b89a5e] focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="mobile-phone" className="text-[14px] text-[#f4eee2]">
                      Mobile number *
                    </label>
                    <input
                      id="mobile-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-[#f4eee2]/30 bg-[#0b1220]/60 px-4 py-3.5 text-[15px] text-[#f4eee2] placeholder:text-[#f4eee2]/40 transition-colors focus:border-[#b89a5e] focus:outline-none"
                      placeholder="98765 43210"
                    />
                    <p className="text-[11px] text-[#f4eee2]/50 font-light">
                      10-digit Indian mobile, +91 optional
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email-addr" className="text-[14px] text-[#f4eee2]">
                      Email (optional)
                    </label>
                    <input
                      id="email-addr"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-[#f4eee2]/30 bg-[#0b1220]/60 px-4 py-3.5 text-[15px] text-[#f4eee2] placeholder:text-[#f4eee2]/40 transition-colors focus:border-[#b89a5e] focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="project-select" className="text-[14px] text-[#f4eee2]">
                    Project of interest
                  </label>
                  <select
                    id="project-select"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full border border-[#f4eee2]/30 bg-[#0b1220]/60 px-4 py-3.5 text-[15px] text-[#f4eee2] transition-colors focus:border-[#b89a5e] focus:outline-none"
                  >
                    <option value="CP Greens" className="bg-[#0b1220]">CP Greens</option>
                    <option value="EUROPA" className="bg-[#0b1220]">EUROPA</option>
                    <option value="CP Anando" className="bg-[#0b1220]">CP Anando</option>
                    <option value="Commercial leasing" className="bg-[#0b1220]">Commercial leasing</option>
                    <option value="General enquiry" className="bg-[#0b1220]">General enquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message-text" className="text-[14px] text-[#f4eee2]">
                    Message (optional)
                  </label>
                  <textarea
                    id="message-text"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-[#f4eee2]/30 bg-[#0b1220]/60 px-4 py-3.5 text-[15px] text-[#f4eee2] placeholder:text-[#f4eee2]/40 transition-colors focus:border-[#b89a5e] focus:outline-none"
                    placeholder="Tell us what you are looking for"
                  />
                </div>

                <button
                  type="submit"
                  className="eyebrow bg-[#b89a5e] px-8 py-4 text-[#0b1220] transition-colors hover:bg-[#d8c08a] active:translate-y-px font-medium uppercase tracking-[0.2em] text-[12px]"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
