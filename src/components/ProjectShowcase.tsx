import React, { useState } from 'react';
import { PROJECTS } from '../data/cpData';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export const ProjectShowcase: React.FC = () => {
  const [activeProjectTab, setActiveProjectTab] = useState<string>('cp-greens');
  const [selectedScene, setSelectedScene] = useState<{ [key: string]: string }>({
    'cp-greens': 'dusk',
    'europa': 'golden',
  });

  const activeProject = PROJECTS.find((p) => p.slug === activeProjectTab) || PROJECTS[0];

  return (
    <section id="featured" className="theme-day bg-[#f6f1e8] text-[#172238] py-24 lg:py-32 scroll-mt-20">
      <div className="wrap">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#b89a5e]" />
              <span className="text-[11px] font-medium tracking-[0.24em] text-[#7a6230] uppercase">
                Portfolio of Distinction
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2.4rem,1.4rem+3.5vw,4.5rem)] font-normal leading-[1.08] text-[#172238] tracking-tight">
              Featured landmarks
            </h2>
          </div>

          {/* Project Tabs Switcher */}
          <div className="inline-flex p-1 bg-[#ece5d6] rounded border border-[#172238]/10">
            {PROJECTS.map((proj) => (
              <button
                key={proj.slug}
                onClick={() => setActiveProjectTab(proj.slug)}
                className={`px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] transition-all duration-300 rounded ${
                  activeProjectTab === proj.slug
                    ? 'bg-[#172238] text-[#f4eee2] shadow-md'
                    : 'text-[#172238]/70 hover:text-[#172238]'
                }`}
              >
                {proj.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Project Hero Showcase Card */}
        <div className="bg-[#ffffff] rounded-xl border border-[#172238]/10 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[640px] bg-[#0b1220] flex flex-col justify-between p-6 sm:p-8">
            {/* Background Image / Render */}
            <div className="absolute inset-0 z-0">
              {activeProject.scenes ? (
                <img
                  src={getAssetUrl(
                    activeProject.scenes.find(
                      (s) => s.id === (selectedScene[activeProject.slug] || activeProject.scenes![0].id)
                    )?.image || activeProject.heroImage
                  )}
                  alt={activeProject.heroAlt}
                  className="w-full h-full object-cover transition-opacity duration-700"
                />
              ) : (
                <img
                  src={getAssetUrl(activeProject.heroImage)}
                  alt={activeProject.heroAlt}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/90 via-[#0b1220]/30 to-transparent" />
            </div>

            {/* Top Badges */}
            <div className="relative z-10 flex items-center justify-between">
              {activeProject.badge && (
                <span className="px-3.5 py-1.5 rounded bg-[#b89a5e] text-[#0b1220] text-[11px] font-medium tracking-[0.18em] uppercase shadow">
                  {activeProject.badge}
                </span>
              )}

              {activeProject.rera && (
                <span className="px-3 py-1 rounded bg-[#0b1220]/80 backdrop-blur-md text-[#f4eee2]/90 text-[10px] font-mono tracking-wider border border-[#f4eee2]/20">
                  RERA: {activeProject.rera}
                </span>
              )}
            </div>

            {/* Bottom Controls / Time-of-day switcher */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-6">
              {activeProject.scenes && (
                <div className="flex items-center gap-2 p-1.5 bg-[#0b1220]/80 backdrop-blur-md rounded border border-[#f4eee2]/15">
                  {activeProject.scenes.map((scene) => {
                    const isSceneActive =
                      (selectedScene[activeProject.slug] || activeProject.scenes![0].id) === scene.id;
                    return (
                      <button
                        key={scene.id}
                        onClick={() =>
                          setSelectedScene({
                            ...selectedScene,
                            [activeProject.slug]: scene.id,
                          })
                        }
                        className={`px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] transition-all rounded ${
                          isSceneActive
                            ? 'bg-[#b89a5e] text-[#0b1220] font-semibold'
                            : 'text-[#f4eee2]/60 hover:text-[#f4eee2]'
                        }`}
                      >
                        {scene.label}
                      </button>
                    );
                  })}
                </div>
              )}

              <span className="text-[11px] tracking-[0.2em] text-[#d8c08a] uppercase bg-[#0b1220]/70 px-3 py-1 rounded self-start sm:self-auto">
                {activeProject.configuration || activeProject.category}
              </span>
            </div>
          </div>

          {/* Details & Specs (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              {/* Location pin */}
              {activeProject.location && (
                <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-[#7a6230] mb-4">
                  <MapPin className="w-4 h-4 text-[#b89a5e]" />
                  <span>{activeProject.location}</span>
                </div>
              )}

              <h3 className="font-serif text-[clamp(2rem,1.4rem+1.8vw,2.8rem)] font-normal text-[#172238] leading-tight mb-2">
                {activeProject.name}
              </h3>

              {activeProject.tagline && (
                <p className="font-serif italic text-lg text-[#7a6230] mb-6">
                  {activeProject.tagline}
                </p>
              )}

              <p className="text-[16px] leading-[1.7] text-[#3d3e3f] font-light mb-8">
                {activeProject.summary}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-[#172238]/10 mb-8">
                {activeProject.specs.map((spec, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-serif text-3xl font-light text-[#172238]">
                      {spec.value}
                    </span>
                    <span className="text-[12px] uppercase tracking-[0.16em] text-[#7a6230] font-medium">
                      {spec.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Highlights Checklist */}
              <div className="flex flex-col gap-3 mb-8">
                {activeProject.facts.map((fact, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-[#3d3e3f]">
                    <CheckCircle2 className="w-4 h-4 text-[#b89a5e] shrink-0 mt-1" />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquire CTA */}
            <div className="pt-6 border-t border-[#172238]/10 flex items-center justify-between">
              <a
                href="#visit"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#172238] text-[#f4eee2] text-[11px] font-medium uppercase tracking-[0.2em] hover:bg-[#b89a5e] hover:text-[#0b1220] transition-colors"
              >
                <span>Request Brochure & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Project Overview Mini-Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((proj) => (
            <div
              key={proj.slug}
              onClick={() => setActiveProjectTab(proj.slug)}
              className={`p-6 bg-[#ffffff] rounded-lg border cursor-pointer transition-all duration-300 hover:shadow-xl ${
                activeProjectTab === proj.slug
                  ? 'border-[#b89a5e] ring-1 ring-[#b89a5e]'
                  : 'border-[#172238]/10 hover:border-[#b89a5e]/50'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono tracking-widest text-[#7a6230] uppercase">
                  {proj.status === 'ongoing' ? 'Under Construction' : 'Delivered'}
                </span>
                <span className="text-[11px] font-medium text-[#b89a5e]">
                  {proj.category}
                </span>
              </div>
              <h4 className="font-serif text-2xl font-normal text-[#172238] mb-1">
                {proj.name}
              </h4>
              <p className="text-[12px] text-[#7a6230] italic mb-3">
                {proj.tagline || proj.configuration}
              </p>
              <p className="text-[13px] text-[#3d3e3f] line-clamp-2 font-light">
                {proj.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
