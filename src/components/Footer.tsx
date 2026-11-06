import React from 'react';
import { getAssetUrl } from '../utils/assets';

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0b1220] text-[#f4eee2]/70 border-t border-[#f4eee2]/10">
      <div className="page-wrap grid gap-x-12 gap-y-14 pb-14 pt-20 sm:grid-cols-2 lg:grid-cols-12">
        {/* Col 1: Brand & Socials (5 cols) */}
        <div className="sm:col-span-2 lg:col-span-5">
          <a className="inline-flex shrink-0 items-center" href="/">
            <img
              src={getAssetUrl('brand/cp-group-logo-reverse.svg')}
              onError={(e) => {
                e.currentTarget.src = 'https://clone.pallabnaiya.online/brand/cp-group-logo-reverse.svg';
              }}
              alt="CP Group, CP Real Estate, We build trust"
              width={1290}
              height={680}
              className="h-20 sm:h-24 w-auto"
            />
            <span className="sr-only">, home</span>
          </a>

          <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-[#f4eee2]/70 font-light">
            CP Real Estate is a Siliguri developer of residences and commercial spaces, building trust through delivery since 1998.
          </p>

          <ul className="mt-7 flex gap-3">
            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com/cprealestate.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-[#f4eee2]/20 text-[#f4eee2]/75 transition-colors duration-500 hover:border-[#b89a5e] hover:text-[#b89a5e]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                </svg>
              </a>
            </li>

            {/* Facebook */}
            <li>
              <a
                href="https://www.facebook.com/cprealestate.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-11 w-11 place-items-center rounded-full border border-[#f4eee2]/20 text-[#f4eee2]/75 transition-colors duration-500 hover:border-[#b89a5e] hover:text-[#b89a5e]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
                </svg>
              </a>
            </li>

            {/* YouTube */}
            <li>
              <a
                href="https://www.youtube.com/@CPRealEstateSlg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="grid h-11 w-11 place-items-center rounded-full border border-[#f4eee2]/20 text-[#f4eee2]/75 transition-colors duration-500 hover:border-[#b89a5e] hover:text-[#b89a5e]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                >
                  <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z" />
                </svg>
              </a>
            </li>

            {/* LinkedIn */}
            <li>
              <a
                href="https://in.linkedin.com/company/cp-real-estate-siliguri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full border border-[#f4eee2]/20 text-[#f4eee2]/75 transition-colors duration-500 hover:border-[#b89a5e] hover:text-[#b89a5e]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Col 2: Projects (2 cols) */}
        <nav aria-label="Projects" className="lg:col-span-2">
          <p className="font-display text-[0.78rem] font-medium uppercase tracking-[0.26em] text-[#b89a5e]">
            Projects
          </p>
          <ul className="mt-5 space-y-2.5 text-[14px]">
            <li>
              <a className="link-underline tap text-[#f4eee2]/80 hover:text-[#b89a5e] transition-colors" href="#featured">
                CP Greens
              </a>
            </li>
            <li>
              <a className="link-underline tap text-[#f4eee2]/80 hover:text-[#b89a5e] transition-colors" href="#featured">
                EUROPA
              </a>
            </li>
            <li>
              <a className="link-underline tap text-[#f4eee2]/80 hover:text-[#b89a5e] transition-colors" href="#featured">
                CP Anando
              </a>
            </li>
            <li>
              <a className="link-underline tap text-[#f4eee2]/80 hover:text-[#b89a5e] transition-colors" href="#featured">
                Completed projects
              </a>
            </li>
          </ul>
        </nav>

        {/* Col 3: Company (2 cols) */}
        <nav aria-label="Company" className="lg:col-span-2">
          <p className="font-display text-[0.78rem] font-medium uppercase tracking-[0.26em] text-[#b89a5e]">
            Company
          </p>
          <ul className="mt-5 space-y-2.5 text-[14px]">
            <li>
              <a className="link-underline tap text-[#f4eee2]/80 hover:text-[#b89a5e] transition-colors" href="#why-cp">
                About
              </a>
            </li>
            <li>
              <a className="link-underline tap text-[#f4eee2]/80 hover:text-[#b89a5e] transition-colors" href="#commercial">
                Commercial leasing
              </a>
            </li>
            <li>
              <a className="link-underline tap text-[#f4eee2]/80 hover:text-[#b89a5e] transition-colors" href="#featured">
                Gallery
              </a>
            </li>
            <li>
              <a className="link-underline tap text-[#f4eee2]/80 hover:text-[#b89a5e] transition-colors" href="#journal">
                Journal
              </a>
            </li>
            <li>
              <a className="link-underline tap text-[#f4eee2]/80 hover:text-[#b89a5e] transition-colors" href="#visit">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Col 4: Visit us (3 cols) */}
        <div className="lg:col-span-3">
          <p className="font-display text-[0.78rem] font-medium uppercase tracking-[0.26em] text-[#b89a5e]">
            Visit us
          </p>
          <address className="mt-5 space-y-1 text-[14px] not-italic text-[#f4eee2]/70 font-light leading-relaxed">
            <p>2nd Floor, Block II, Office Block, The Universe</p>
            <p>Behind Himalayan Kanya Abasan, Eastern By-pass</p>
            <p>Siliguri, West Bengal 734008</p>
            <p className="pt-3">
              <a className="link-underline tap text-[#d8c08a] hover:underline" href="mailto:inquiry@cprealestate.in">
                inquiry@cprealestate.in
              </a>
            </p>
            <p>
              <a className="link-underline tap text-[#f4eee2] hover:text-[#b89a5e]" href="tel:+919733388879">
                +91 97333 88879
              </a>
            </p>
          </address>
        </div>

        {/* RERA Numbers Row */}
        <div className="border-t border-[#f4eee2]/15 pt-8 text-[12px] text-[#f4eee2]/55 sm:col-span-2 lg:col-span-12 space-y-1 font-light">
          <p>CP Greens, RERA No: WBRERA/P/JAL/2023/000319</p>
          <p>EUROPA, RERA No: WBRERA/P/DAR/2023/000259</p>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="flex flex-col justify-between gap-4 text-[12px] text-[#f4eee2]/55 sm:col-span-2 sm:flex-row lg:col-span-12 font-light">
          <p>© {new Date().getFullYear()} CP Real Estate. All rights reserved. CREDAI North Bengal.</p>
          <ul className="flex gap-6">
            <li>
              <a className="link-underline tap hover:text-[#f4eee2]" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="link-underline tap hover:text-[#f4eee2]" href="#">
                Terms
              </a>
            </li>
            <li>
              <a className="link-underline tap hover:text-[#f4eee2]" href="#">
                RERA Disclosure
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
