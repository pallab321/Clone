import React from 'react';
import { getAssetUrl } from '../utils/assets';

export const JournalSection: React.FC = () => {
  const articles = [
    {
      title: "98+ Flats for Big Families Available in Siliguri | CP Greens",
      tag: "CP Greens",
      readTime: "4 min read",
      image: "/assets/journal-sunset-complex.jpg",
      imageAlt: "Modern luxury multi-story residential apartment complex at sunset",
      summary:
        "Finding the perfect home for a large family requires more than just additional bedrooms. Today's families need spacious living areas, modern amenities, green surroundings, and a location with seamless connectivity.",
    },
    {
      title: "Green Building Certificate (IGBC), Benefits of IGBC Certified Homes | CP Greens",
      tag: "Sustainability",
      readTime: "5 min read",
      image: "/assets/journal-green-courtyard.jpg",
      imageAlt: "Lush green landscaped courtyard with lawn pathway and palm trees",
      summary:
        "Buying a home today isn't just about choosing the right location or the perfect floor plan. Modern homebuyers are increasingly looking for properties that are sustainable, energy-efficient, and healthier for their families.",
    },
    {
      title: "98+ Flats for Sale in Siliguri | Luxury 3 & 4 BHK Apartments at CP Greens",
      tag: "CP Greens",
      readTime: "4 min read",
      image: "/assets/journal-contemporary-towers.jpg",
      imageAlt: "Contemporary sleek white-and-glass residential towers against blue sky",
      summary:
        "Searching for 98+ flats for sale in Siliguri means you're ready to invest in your dream home or make a smart real estate investment. Explore expansive duplexes and premium 3 & 4 BHK configurations.",
    },
  ];

  return (
    <section id="journal" className="theme-day bg-[#f6f4ef] text-[#172238] py-24 lg:py-32" aria-labelledby="journal-title">
      <div className="wrap">
        {/* Header with Title and 'All articles' Link */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#172238]/15 pb-8">
          <div>
            <h2 id="journal-title" className="text-fluid-title leading-[1.1] font-serif font-normal text-[#172238]">
              From the <em className="font-display italic text-[#7a6230]">journal.</em>
            </h2>
            <p className="mt-4 max-w-md text-[#3d3e3f] font-light text-[17px] leading-relaxed">
              Practical reading for anyone buying a home in Siliguri.
            </p>
          </div>

          <a
            href="#visit"
            className="link-underline tap inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.18em] text-[#7a6230] hover:text-[#172238] transition-colors"
          >
            <span>All articles</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 256 256"
              aria-hidden="true"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>
          </a>
        </div>

        {/* Clean, Borderless 3-Card Grid */}
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <li key={idx}>
              <a
                href="#visit"
                className="group grid h-full content-start gap-5 cursor-pointer"
              >
                {/* 16:10 Aspect Ratio Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#172238] rounded-none">
                  <img
                    src={getAssetUrl(art.image)}
                    alt={art.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>

                {/* Article Typography Details */}
                <div>
                  <p className="text-[12px] uppercase tracking-[0.16em] text-[#7a6230] font-medium">
                    {art.tag} <span aria-hidden="true" className="mx-1.5 text-[#7a6230]/40">/</span> {art.readTime}
                  </p>

                  <h3 className="mt-3 font-serif leading-[1.22] transition-colors duration-500 text-[1.35rem] text-[#172238] group-hover:text-[#7a6230]">
                    {art.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-[15.5px] leading-relaxed text-[#3d3e3f] font-light">
                    {art.summary}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#7a6230] group-hover:text-[#172238] transition-colors">
                    <span>Read article</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      aria-hidden="true"
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                    </svg>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default JournalSection;
