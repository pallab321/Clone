import React, { useState, useEffect, useRef } from 'react';
import {
  ChatCircleText,
  FileText,
  MapPinLine,
  Handshake,
  Signature,
  Bank,
  Stamp,
  Key,
  Check,
} from '@phosphor-icons/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { JOURNEY_STEPS } from '../data/cpData';

// Map icon names from data to Phosphor icon components
const iconComponents = {
  ChatCircleText,
  FileText,
  MapPinLine,
  Handshake,
  Signature,
  Bank,
  Stamp,
  Key,
} as const;

type IconName = keyof typeof iconComponents;

// Monogram Watermark matching live cprealestate.in
const WatermarkCP: React.FC<{ className?: string; mono?: boolean }> = ({
  className = '',
  mono = false,
}) => {
  return (
    <svg
      aria-hidden={true}
      viewBox="395 262 410 676"
      className={className}
      focusable="false"
    >
      {!mono && (
        <defs>
          <linearGradient
            id="cp-mark-gold"
            gradientUnits="userSpaceOnUse"
            x1="395"
            y1="0"
            x2="805"
            y2="0"
          >
            <stop offset="0" stopColor="#bd8f6a" />
            <stop offset="0.45" stopColor="#cfa583" />
            <stop offset="1" stopColor="#fcd3ad" />
          </linearGradient>
        </defs>
      )}
      <g
        transform="matrix(1,0,0,-1,0,1200)"
        fill={mono ? 'currentColor' : 'url(#cp-mark-gold)'}
      >
        <path d="M804.228 262.341H395.772V730.226L663.709 937.659V728.292L617.116 755.432V842.661L442.366 707.375V308.935H757.634V402.877H804.228Z" />
        <path d="M536.296 709.609C536.214 694.693 534.316 357.309 534.316 352.54H580.909C580.909 356.672 582.174 577.485 582.684 671.179L757.634 579.997V491.928H625.72V445.335H804.228V608.254L536.504 747.785Z" />
      </g>
    </svg>
  );
};

export const JourneyProcess: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const totalSteps = JOURNEY_STEPS.length;
  // Circumference for radius 46 in 120x120 viewBox
  const radius = 46;
  const fullCircumference = 2 * Math.PI * radius; // ≈ 289.0265
  const segmentArc = fullCircumference / totalSteps; // ≈ 36.128

  // Active step data
  const currentStep = JOURNEY_STEPS[activeStep] || JOURNEY_STEPS[0];
  const CurrentIcon =
    iconComponents[currentStep.icon as IconName] || ChatCircleText;

  // Scroll detection via GSAP ScrollTrigger for precise scroll-driven activation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // Continuous vertical route connecting line
    const routeEl = el.querySelector('[data-route]');
    const stepsContainer = el.querySelector('[data-steps]');

    let routeTween: gsap.core.Tween | null = null;
    if (routeEl && stepsContainer) {
      routeTween = gsap.fromTo(
        routeEl,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: '50% 0%',
          ease: 'none',
          scrollTrigger: {
            trigger: stepsContainer,
            start: 'top 55%',
            end: 'bottom 50%',
            scrub: 0.3,
          },
        }
      );
    }

    // Step triggers for activating left dial and highlighting nodes
    const stepNodes = el.querySelectorAll('[data-step]');
    const triggers: ScrollTrigger[] = [];

    stepNodes.forEach((node, idx) => {
      const st = ScrollTrigger.create({
        trigger: node,
        start: 'top 52%',
        end: 'bottom 52%',
        onEnter: () => setActiveStep(idx),
        onEnterBack: () => setActiveStep(idx),
      });
      triggers.push(st);
    });

    return () => {
      routeTween?.scrollTrigger?.kill();
      routeTween?.kill();
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="theme-night relative isolate overflow-clip bg-[#0b1220] py-24 lg:py-36 text-[#f4eee2] scroll-mt-20"
      aria-labelledby="journey-title"
    >
      {/* Blueprint Grid Background Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 [background-image:linear-gradient(rgba(184,154,94,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(184,154,94,0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_35%_45%,black,transparent_75%)]"
      />

      {/* Warm Golden Glow Behind Dial */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/4 -z-10 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(184,154,94,0.18),transparent_65%)]"
      />

      {/* Giant CP Monogram Watermark on bottom right */}
      <WatermarkCP
        mono
        className="pointer-events-none absolute -right-16 bottom-0 -z-10 h-[80%] w-auto text-[#f4eee2]/[0.018]"
      />

      <div className="wrap">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2
            id="journey-title"
            className="font-serif text-[clamp(2.4rem,1.4rem+3.5vw,4.5rem)] leading-[1.04] text-[#f4eee2] lg:col-span-7 tracking-tight"
          >
            From first call{' '}
            <em className="block pb-1 font-display italic text-[#d8c08a]">
              to your keys.
            </em>
          </h2>
          <p className="max-w-xl text-[clamp(1.25rem,1.1rem+0.7vw,1.625rem)] leading-[1.65] text-[#f4eee2]/85 lg:col-span-5 font-light">
            Buying a home has many steps. We walk every one of them with you, so
            nothing is left to chance and nothing is left to you alone.
          </p>
        </div>

        {/* 2-Column Responsive Body */}
        <div className="mt-16 grid gap-14 border-t border-[#f4eee2]/15 pt-16 lg:mt-20 lg:grid-cols-12 lg:gap-x-16 lg:pt-20">
          {/* LEFT COLUMN: Sticky Circular Progress Dial (Desktop) */}
          <div aria-hidden="true" className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 lg:top-36">
              {/* Dial Geometry */}
              <div className="relative mx-auto aspect-square w-full max-w-[380px]">
                <svg
                  viewBox="0 0 120 120"
                  className="absolute inset-0 h-full w-full -rotate-90"
                >
                  {/* Outer faint dashed guide ring */}
                  <circle
                    cx="60"
                    cy="60"
                    r="56"
                    fill="none"
                    stroke="rgba(244,238,226,0.12)"
                    strokeWidth="0.35"
                    strokeDasharray="0.6 1.6"
                  />

                  {/* 8 Arc Segments (r=46) */}
                  {JOURNEY_STEPS.map((step, idx) => (
                    <circle
                      key={step.name}
                      cx="60"
                      cy="60"
                      r={radius}
                      fill="none"
                      strokeWidth="1.4"
                      stroke={
                        idx <= activeStep
                          ? '#d8c08a'
                          : 'rgba(244,238,226,0.14)'
                      }
                      strokeDasharray={`${segmentArc - 2.2} ${
                        fullCircumference - segmentArc + 2.2
                      }`}
                      strokeDashoffset={-idx * segmentArc - 1.1}
                      className="transition-[stroke] duration-700"
                    />
                  ))}

                  {/* Inner disc with subtle brass border */}
                  <circle
                    cx="60"
                    cy="60"
                    r="34"
                    fill="rgba(23,34,56,0.75)"
                    stroke="rgba(216,192,138,0.4)"
                    strokeWidth="0.4"
                  />
                </svg>

                {/* Rotating Glowing Diamond Pointer on radius 46 */}
                <div
                  className="absolute inset-0 transition-transform duration-[900ms] ease-out-expo pointer-events-none"
                  style={{
                    transform: `rotate(${(360 / totalSteps) * (activeStep + 0.5)}deg)`,
                  }}
                >
                  <span className="absolute left-1/2 top-[11.6%] h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#d8c08a] shadow-[0_0_20px_rgba(216,192,138,0.9)]" />
                </div>

                {/* Center Dynamic Icon & Label */}
                <div className="absolute inset-0 grid place-items-center pointer-events-none">
                  <div
                    key={currentStep.name}
                    className="flex flex-col items-center text-center animate-hero-rise"
                  >
                    <CurrentIcon
                      size={46}
                      weight="thin"
                      className="text-[#d8c08a]"
                    />
                    <p className="mt-3 text-[12px] uppercase tracking-[0.26em] text-[#f4eee2]/80 font-mono font-medium">
                      {currentStep.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic Large Italic Title & Care items below dial */}
              <div
                key={`t-${currentStep.name}`}
                className="mx-auto mt-10 max-w-[380px] animate-hero-rise text-center"
              >
                <p className="font-serif text-[clamp(1.6rem,1.25rem+1vw,2.2rem)] italic leading-tight text-[#f4eee2]">
                  {currentStep.title}
                </p>
                <ul className="mt-6 space-y-3.5 border-t border-[#f4eee2]/15 pt-6 text-left">
                  {currentStep.care.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[15px] leading-relaxed text-[#f4eee2]/90 font-light"
                    >
                      <Check
                        size={18}
                        weight="bold"
                        className="mt-0.5 shrink-0 text-[#d8c08a]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Vertical Diamond Stepper Timeline */}
          <ol data-steps className="relative lg:col-span-7">
            {/* Continuous Vertical Route Connecting Line */}
            <span
              aria-hidden="true"
              className="absolute bottom-8 left-[23px] top-8 w-px bg-[#f4eee2]/15 lg:left-[27px]"
            >
              <span
                data-route
                className="absolute inset-0 bg-gradient-to-b from-[#d8c08a] via-[#b89a5e] to-[#b89a5e]/40 origin-top"
              />
            </span>

            {/* 8 Step Nodes */}
            {JOURNEY_STEPS.map((step, idx) => {
              const StepIcon =
                iconComponents[step.icon as IconName] || ChatCircleText;
              const isCurrent = idx === activeStep;
              const isPast = idx < activeStep;

              return (
                <li
                  key={step.name}
                  data-step={idx}
                  className="relative grid grid-cols-[48px_1fr] gap-6 pb-16 last:pb-0 sm:gap-8 lg:grid-cols-[56px_1fr] lg:pb-24"
                >
                  {/* Rotated Diamond Node */}
                  <span
                    className={`relative z-10 grid h-12 w-12 rotate-45 place-items-center border transition-all duration-500 lg:h-14 lg:w-14 cursor-pointer select-none ${
                      isCurrent
                        ? 'border-[#d8c08a] bg-[#d8c08a] text-[#0b1220] shadow-[0_0_35px_rgba(216,192,138,0.45)] scale-110'
                        : isPast
                        ? 'border-[#b89a5e]/80 bg-[#0b1220] text-[#d8c08a]'
                        : 'border-[#f4eee2]/25 bg-[#0b1220] text-[#f4eee2]/50'
                    }`}
                    onClick={() => {
                      setActiveStep(idx);
                    }}
                  >
                    <StepIcon
                      size={24}
                      weight={isCurrent ? 'regular' : 'light'}
                      aria-hidden="true"
                      className="-rotate-45"
                    />
                  </span>

                  {/* Step Editorial Content */}
                  <div
                    className={`transition-all duration-700 ${
                      isCurrent ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                    }`}
                  >
                    <p className="text-[12px] uppercase tracking-[0.24em] text-[#d8c08a] font-mono font-medium">
                      {step.name}
                    </p>
                    <h3 className="mt-2 font-serif text-[clamp(1.6rem,1.25rem+1vw,2.25rem)] leading-[1.15] text-[#f4eee2]">
                      {step.title}
                    </h3>
                    <p className="mt-3.5 max-w-xl text-[#f4eee2]/80 text-[17px] leading-[1.7] font-light">
                      {step.text}
                    </p>

                    {/* Mobile Care Checklist */}
                    <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 lg:hidden">
                      {step.care.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-[14px] text-[#f4eee2]/90 font-light"
                        >
                          <Check
                            size={16}
                            weight="bold"
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-[#d8c08a]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default JourneyProcess;
