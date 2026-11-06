import React from 'react';
import { Building, Store, ArrowUpRight } from 'lucide-react';
import { CP_COMPANY } from '../data/cpData';
import { getAssetUrl } from '../utils/assets';

export const CommercialSection: React.FC = () => {
  return (
    <section id="commercial" className="theme-night bg-[#172238] text-[#f4eee2] py-24 lg:py-32 relative isolate overflow-hidden">
      {/* Background Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-0 -z-10 h-96 w-96 rounded-full bg-[#b89a5e]/10 blur-3xl"
      />

      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#b89a5e]" />
              <span className="text-[11px] font-medium tracking-[0.24em] text-[#d8c08a] uppercase">
                Commercial Real Estate
              </span>
            </div>

            <h2 className="font-serif text-[clamp(2.4rem,1.4rem+3.5vw,4.5rem)] font-normal leading-[1.08] text-[#f4eee2] tracking-tight mb-6">
              Commercial space for
              <br />
              <em className="italic text-[#d8c08a]">Siliguri's businesses.</em>
            </h2>

            <p className="text-[17px] leading-[1.7] text-[#f4eee2]/80 font-light mb-8 max-w-xl">
              From landmark retail developments like CP Plaza to modern grade-A office
              suites across Siliguri's fastest-growing transit corridors. Purpose-built
              spaces designed for visibility, seamless footfall, and operational excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3 p-5 bg-[#0b1220]/50 rounded border border-[#f4eee2]/15">
                <Store className="w-5 h-5 text-[#b89a5e] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-[1.15rem] text-[#f4eee2] mb-1">High-Street Retail</h4>
                  <p className="text-[14px] leading-relaxed text-[#f4eee2]/75 font-light">
                    Expansive glass frontages on prime commercial highways with anchor brand presence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-[#0b1220]/50 rounded border border-[#f4eee2]/15">
                <Building className="w-5 h-5 text-[#b89a5e] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-[1.15rem] text-[#f4eee2] mb-1">Grade-A Corporate</h4>
                  <p className="text-[14px] leading-relaxed text-[#f4eee2]/75 font-light">
                    Flexible floor plates, 100% power backup, high-speed elevators, and secure parking.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#visit"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#b89a5e] text-[#0b1220] text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-[#d8c08a] transition-colors shadow-lg"
              >
                <span>Enquire for Commercial Space</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={CP_COMPANY.contact.phoneHref}
                className="text-[12px] uppercase tracking-[0.16em] text-[#f4eee2]/80 hover:text-[#d8c08a] transition-colors"
              >
                Call Leasing: +91 97333 88879
              </a>
            </div>
          </div>

          {/* Right Visual Image Card (CP Plaza) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-[#f4eee2]/15 shadow-2xl bg-[#0b1220]">
              <img
                src={getAssetUrl('images/projects/cp-plaza/cp-plaza.jpg')}
                alt="CP Plaza Commercial Landmark in Siliguri"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 inset-x-0 p-6 text-[#f4eee2]">
                <span className="text-[10px] font-mono tracking-widest text-[#d8c08a] uppercase">
                  Featured Commercial Landmark
                </span>
                <h3 className="font-serif text-2xl font-normal text-[#f4eee2] mt-1">
                  CP Plaza, Shivmandir
                </h3>
                <p className="text-[12px] text-[#f4eee2]/70 mt-2 font-light">
                  Home to Style Bazaar, V-Mart, Apollo Diagnostics, and leading regional banking firms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialSection;
