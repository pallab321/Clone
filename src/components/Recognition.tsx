import React from 'react';
import { Award, Leaf } from 'lucide-react';

export const Recognition: React.FC = () => {
  const awards = [
    {
      title: "IGBC Gold Rating",
      issuer: "Indian Green Building Council (IGBC)",
      year: "2026",
      desc: "Siliguri's first IGBC Gold certified green residential building under the Green Homes Rating System.",
      highlight: true,
    },
    {
      title: "Certificate of Excellence",
      issuer: "CREDAI North Bengal",
      year: "2024",
      desc: "Recognised for adherence to the highest standards of construction quality, safety, and timely delivery.",
    },
    {
      title: "Icon of North Bengal Awards",
      issuer: "Regional Real Estate Conclave",
      year: "2023",
      desc: "Honoured for defining modern luxury housing and elevating Siliguri's urban skyline.",
    },
    {
      title: "Presidential Special Recognition",
      issuer: "Bengal Chamber of Commerce",
      year: "2022",
      desc: "Awarded for enduring contribution to regional infrastructure development and employment creation.",
    },
  ];

  return (
    <section id="recognition" className="theme-day bg-[#ffffff] text-[#172238] py-24 lg:py-32 border-t border-[#172238]/5">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#b89a5e]" />
              <span className="text-[11px] font-medium tracking-[0.24em] text-[#7a6230] uppercase">
                Industry Accolades
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.4rem,1.4rem+3.5vw,4.5rem)] font-normal leading-[1.08] text-[#172238] tracking-tight">
              Recognised by the industry.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[17px] leading-[1.7] text-[#3d3e3f] font-light">
              Our commitment to craftsmanship, environmental stewardship, and customer trust
              has been acknowledged by India's foremost real estate and green building institutions.
            </p>
          </div>
        </div>

        {/* IGBC Feature Box & Awards Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Gold Hero Certificate */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-[#0b1220] text-[#f4eee2] rounded-xl flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#b89a5e]/20 border border-[#b89a5e]/40 rounded text-[#d8c08a] text-[12px] font-medium uppercase tracking-[0.2em] mb-6">
                <Leaf className="w-3.5 h-3.5 text-[#b89a5e]" />
                <span>Historic Green Milestone</span>
              </div>
              
              <h3 className="font-serif text-[clamp(2rem,1.6rem+2vw,3.2rem)] font-normal leading-[1.02] text-[#f4eee2] mb-4">
                IGBC Gold
                <br />
                <em className="italic text-[#d8c08a]">Certification</em>
              </h3>

              <p className="text-[16px] leading-[1.7] text-[#f4eee2]/85 font-light mb-8">
                CP Greens achieved the coveted IGBC Gold rating under the Green Homes Rating System.
                Designed with over 60% open landscape, rainwater harvesting, sewage water recycling,
                and energy-saving solar lighting.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-[#f4eee2]/15 flex items-center justify-between text-[12px] uppercase tracking-wider text-[#d8c08a]">
              <span>Issued: May 2026</span>
              <span>Reg: GH200178</span>
            </div>
          </div>

          {/* Accolades List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#f6f1e8] rounded-xl border border-[#172238]/5 flex flex-col justify-between hover:border-[#b89a5e]/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] font-mono tracking-widest text-[#7a6230]">
                      {award.year}
                    </span>
                    <Award className="w-5 h-5 text-[#b89a5e]" />
                  </div>
                  <h4 className="font-serif text-[1.25rem] font-normal text-[#172238] mb-2">
                    {award.title}
                  </h4>
                  <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#7a6230] mb-3">
                    {award.issuer}
                  </p>
                  <p className="text-[15px] leading-relaxed text-[#3d3e3f] font-light">
                    {award.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
