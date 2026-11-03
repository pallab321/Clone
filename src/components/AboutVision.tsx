import React from 'react';
import { CP_COMPANY } from '../data/cpData';
import { ShieldCheck, Award, Leaf, Building2 } from 'lucide-react';

export const AboutVision: React.FC = () => {
  return (
    <section id="why-cp" className="theme-day bg-[#ffffff] text-[#172238] py-24 lg:py-32">
      <div className="wrap">
        {/* Top Micro Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#b89a5e]" />
          <span className="text-[11px] font-medium tracking-[0.24em] text-[#7a6230] uppercase">
            Legacy & Philosophy
          </span>
        </div>

        {/* Main Title & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[clamp(2.2rem,1.4rem+3.2vw,4rem)] font-normal leading-[1.12] text-[#172238] tracking-tight">
              Rooted in Siliguri since 1998.
              <br />
              <span className="italic text-[#7a6230]">
                Driven by precision in every detail.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 text-[17px] leading-[1.75] text-[#3d3e3f] font-light">
            <p>
              Over 27 years, CP Real Estate has shaped the skyline of North Bengal.
              From residential enclaves to prime commercial destinations, every
              structure is conceived with architectural discipline and executed with
              unwavering standards.
            </p>
            <p>
              As a proud member of <strong className="font-medium text-[#172238]">CREDAI North Bengal</strong>,
              we believe that trust is earned through consistent, timely delivery,
              uncompromising structural integrity, and thoughtful design that endures
              for generations.
            </p>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-[#172238]/10">
          {CP_COMPANY.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="font-serif text-[clamp(2.5rem,1.8rem+2vw,3.8rem)] font-light text-[#172238] leading-none tracking-tight">
                {stat.value}
              </span>
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-[#7a6230]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* 4 Core Pillars */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 bg-[#f6f1e8] rounded flex flex-col justify-between border border-[#172238]/5 shadow-sm">
            <div>
              <ShieldCheck className="w-8 h-8 text-[#b89a5e] mb-6" />
              <h3 className="font-serif text-[1.35rem] font-medium text-[#172238] mb-3">
                Quality without compromise
              </h3>
              <p className="text-[15.5px] leading-[1.65] text-[#3d3e3f] font-light">
                Exacting material testing, seismic-resistant engineering, and branded fittings ensure every home stands strong.
              </p>
            </div>
          </div>

          <div className="p-8 bg-[#f6f1e8] rounded flex flex-col justify-between border border-[#172238]/5 shadow-sm">
            <div>
              <Award className="w-8 h-8 text-[#b89a5e] mb-6" />
              <h3 className="font-serif text-[1.35rem] font-medium text-[#172238] mb-3">
                Delivered as promised
              </h3>
              <p className="text-[15.5px] leading-[1.65] text-[#3d3e3f] font-light">
                Over 20 landmark projects successfully handed over with transparent documentation and verified RERA compliance.
              </p>
            </div>
          </div>

          <div className="p-8 bg-[#f6f1e8] rounded flex flex-col justify-between border border-[#172238]/5 shadow-sm">
            <div>
              <Building2 className="w-8 h-8 text-[#b89a5e] mb-6" />
              <h3 className="font-serif text-[1.35rem] font-medium text-[#172238] mb-3">
                Pioneering Siliguri
              </h3>
              <p className="text-[15.5px] leading-[1.65] text-[#3d3e3f] font-light">
                Among the first organized developers in the region, bringing modern urban architecture to North Bengal.
              </p>
            </div>
          </div>

          <div className="p-8 bg-[#f6f1e8] rounded flex flex-col justify-between border border-[#172238]/5 shadow-sm">
            <div>
              <Leaf className="w-8 h-8 text-[#b89a5e] mb-6" />
              <h3 className="font-serif text-[1.35rem] font-medium text-[#172238] mb-3">
                Green & Certified
              </h3>
              <p className="text-[15.5px] leading-[1.65] text-[#3d3e3f] font-light">
                Pioneered Siliguri's first IGBC Gold certified green residential project, championing energy and water conservation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;

