import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Play, Pause } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface HeroSlide {
  at: number;
  place: string;
  lines: [string, string];
}

const HERO_SLIDES: HeroSlide[] = [
  {
    at: 0,
    place: "CP Greens, Siliguri",
    lines: ["One man's vision.", "A city's elevation."],
  },
  {
    at: 5.2,
    place: "CP Greens, Siliguri",
    lines: ["Siliguri's first", "IGBC Gold green building."],
  },
  {
    at: 9.4,
    place: "EUROPA, Siliguri",
    lines: ["Townhouses shaped by", "European discipline."],
  },
  {
    at: 13.6,
    place: "CP Plaza, Shivmandir",
    lines: ["Where the city", "shops and works."],
  },
  {
    at: 17.8,
    place: "CP Greens at night",
    lines: ["Building today.", "Defining tomorrow."],
  },
];

export const Hero: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const cur = video.currentTime;

      let activeIdx = 0;
      HERO_SLIDES.forEach((slide, idx) => {
        if (cur >= slide.at) {
          activeIdx = idx;
        }
      });
      setCurrentSlideIndex(activeIdx);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="group/hero theme-night relative isolate flex min-h-[100dvh] flex-col justify-between overflow-hidden bg-[#0b1220] pt-32 pb-12"
    >
      {/* Background Video & Fallback Poster Layer */}
      <div className="absolute inset-0 -z-20 will-change-transform">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={getAssetUrl('images/hero-poster.jpg')}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
        >
          <source src={getAssetUrl('videos/home/hero-d.mp4')} type="video/mp4" />
        </video>
      </div>

      {/* Cinematic Gradient Vignettes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_35%_at_50%_48%,rgba(11,18,32,0.5),transparent_75%),radial-gradient(ellipse_at_center,transparent_40%,rgba(11,18,32,0.65)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#0b1220] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-44 bg-gradient-to-b from-[#0b1220]/75 to-transparent"
      />

      {/* Top Breadcrumb / Location Badge */}
      <div className="wrap">
        <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-[#b89a5e]/30 bg-[#0b1220]/60 backdrop-blur-md rounded">
          <span className="w-1.5 h-1.5 rounded-full bg-[#b89a5e] animate-pulse" />
          <span className="text-[11px] font-medium tracking-[0.24em] text-[#d8c08a] uppercase">
            {HERO_SLIDES[currentSlideIndex].place}
          </span>
        </div>
      </div>

      {/* Center / Bottom Hero Display Typography */}
      <div className="wrap my-auto pt-16">
        <div className="max-w-4xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.28em] text-[#d8c08a] mb-4">
            CP Real Estate • Siliguri Landmark Developments
          </p>

          <h1
            id="hero-title"
            className="font-serif text-[clamp(2.6rem,1.4rem+4vw,5.5rem)] font-normal leading-[1.04] text-[#f4eee2] tracking-tight"
          >
            {HERO_SLIDES[currentSlideIndex].lines[0]}
            <br />
            <em className="italic text-[#d8c08a]">
              {HERO_SLIDES[currentSlideIndex].lines[1]}
            </em>
          </h1>

          <p className="mt-6 max-w-2xl text-[18px] leading-[1.7] text-[#f4eee2]/85 font-light">
            Siliguri developer of residences and commercial landmarks, building enduring
            trust through uncompromising quality and precision delivery since 1998.
          </p>

          {/* Call to Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#featured"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] bg-[#b89a5e] text-[#0b1220] hover:bg-[#d8c08a] transition-all duration-300 shadow-lg active:translate-y-px"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#commercial"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] border border-[#f4eee2]/40 text-[#f4eee2] hover:bg-[#f4eee2] hover:text-[#0b1220] transition-all duration-300 active:translate-y-px"
            >
              Commercial Leasing
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Timeline Ticks & Controls */}
      <div className="wrap">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[#f4eee2]/15">
          {/* 5 Video Captions & Segment Progress */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 flex-1">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              const nextAt = idx < HERO_SLIDES.length - 1 ? HERO_SLIDES[idx + 1].at : 23.8;
              const curTime = (videoRef.current?.currentTime || 0);
              const segmentProgress = Math.min(1, Math.max(0, (curTime - slide.at) / (nextAt - slide.at)));

              return (
                <div key={idx} className="flex flex-col gap-1.5">
                  <div className="h-0.5 w-full bg-[#f4eee2]/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#b89a5e] transition-all duration-100 ease-linear origin-left"
                      style={{
                        transform: `scaleX(${
                          idx < currentSlideIndex
                            ? 1
                            : idx === currentSlideIndex
                            ? segmentProgress
                            : 0
                        })`,
                      }}
                    />
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-[0.16em] transition-colors truncate ${
                      isActive ? 'text-[#f4eee2] font-medium' : 'text-[#f4eee2]/40'
                    }`}
                  >
                    0{idx + 1} {slide.place.split(',')[0]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Media Playback Controller */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={togglePlayback}
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#d8c08a] hover:text-[#f4eee2] transition-colors px-3 py-1.5 border border-[#b89a5e]/30 rounded"
              aria-label={isPlaying ? "Pause cinematic reel" : "Play cinematic reel"}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-[#b89a5e]" />
                  <span>Pause Reel</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-[#b89a5e]" />
                  <span>Play Reel</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
