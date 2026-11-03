import React from 'react';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote:
        "The construction quality and transparency from CP Real Estate was unmatched. Living at CP Greens with over 60% open green space feels like a breath of fresh air in Siliguri.",
      author: "Rajesh & Meera Agarwal",
      project: "CP Greens Homeowner",
      details: "3 BHK Premium Residence",
    },
    {
      quote:
        "The architectural finish and attention to detail in EUROPA townhouses reminds us of European villa living. From the private EQUINOX clubhouse to the community, it exceeded our expectations.",
      author: "Dr. Vikram Sengupta",
      project: "EUROPA Resident",
      details: "4 BHK Townhouse",
    },
    {
      quote:
        "CP Real Estate delivered exactly what they promised in the RERA brochure. From loan assistance to timely handover, everything was handled with complete honesty.",
      author: "Amitabh Banerjee",
      project: "CP Greens Resident",
      details: "4 BHK Duplex Home",
    },
  ];

  return (
    <section className="theme-night bg-[#0b1220] text-[#f4eee2] py-24 lg:py-32 border-t border-[#f4eee2]/10 relative isolate">
      <div className="wrap">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#d8c08a] mb-4">
            Living Experiences
          </p>
          <h2 className="font-serif text-[clamp(2.4rem,1.4rem+3.5vw,4.5rem)] font-normal leading-[1.08] text-[#f4eee2] tracking-tight">
            In our residents' words.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-xl bg-[#172238]/40 border border-[#f4eee2]/10 flex flex-col justify-between hover:border-[#b89a5e]/40 transition-all duration-300 backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center gap-1 text-[#b89a5e] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#b89a5e]/30 mb-4" />

                <p className="font-serif italic text-[1.2rem] leading-[1.7] text-[#f4eee2]/95 font-light mb-8">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#f4eee2]/10">
                <h4 className="font-serif text-base font-medium text-[#f4eee2]">
                  {rev.author}
                </h4>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#d8c08a] mt-1">
                  {rev.project} • {rev.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

