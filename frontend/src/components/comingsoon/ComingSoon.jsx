import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function ComingSoonHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center p-6">
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8034689723711025"
     crossorigin="anonymous"></script>
      </Helmet>
      {/* subtle background ornaments */}
      <BackgroundOrnaments />

      <div className="relative z-10 w-full max-w-4xl text-center select-none">
        {/* Top tiny header */}
      

        {/* Main card stack */}
        <div className="relative mx-auto w-[min(92vw,880px)]">
          {/* back card (drop shadow) */}
          <div className="absolute -inset-2 rounded-3xl bg-black/20 blur-md" />

          {/* shape peeking behind (white diamond) */}
          <div className="absolute -bottom-6 left-1/2 h-16 w-16 -translate-x-1/2 rotate-45 rounded-sm bg-white/90" />

          {/* base card with gradient - updated to match the overall theme */}
          <div className="relative rounded-3xl bg-gradient-to-tr from-[#1a1539] to-[#3a3485] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            {/* inner card to mimic double-layer look */}
            <div className="rounded-2xl bg-gradient-to-tr from-[#25204d]/60 to-[#4a43a0]/40 p-8 md:p-12">
              {/* Ribbon tag */}
              <div className="pointer-events-none absolute -top-6 left-1/2 z-10 -translate-x-1/2">
                <div className="rounded-lg bg-[#6c63ff] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <span className="italic">Grand Opening</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-[9vw] leading-none font-extrabold drop-shadow md:text-7xl lg:text-8xl tracking-wide">
                <span className="[text-shadow:0_10px_22px_rgba(0,0,0,0.25)]">COMING</span>
                <br className="sm:hidden" />
                <span className="ml-1 [text-shadow:0_10px_22px_rgba(0,0,0,0.25)]">SOON</span>
              </h1>

              {/* Floating circles and rings */}
              <FloatingDecor />
            </div>
          </div>
        </div>

        {/* Bottom caption */}
        <div className="mt-8 space-y-1 text-[11px] md:text-xs tracking-[0.25em] uppercase opacity-90">
          <h3> Subscribe to Notify </h3>
        </div>
      </div>
    </div>
  );
}

function BackgroundOrnaments() {
  return (
    <div aria-hidden>
      {/* faint grid of dots right side */}
      <div className="pointer-events-none absolute right-10 top-1/3 grid grid-cols-6 gap-3 opacity-20">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-2 w-2 rounded-full bg-white/30" />
        ))}
      </div>

      {/* layered triangles */}
      <motion.div
        className="absolute left-16 top-1/2 -translate-y-1/2"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Triangle className="h-24 w-24 -rotate-12 fill-white/80" />
      </motion.div>
      <motion.div
        className="absolute right-14 top-1/3"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Triangle className="h-16 w-16 rotate-12 fill-white/70" />
      </motion.div>
    </div>
  );
}

function FloatingDecor() {
  const float = (delay = 0) => ({
    animate: { y: [0, -8, 0] },
    transition: { duration: 4.5, delay, repeat: Infinity, ease: "easeInOut" },
  });

  return (
    <div aria-hidden>
      {/* left circle */}
      <motion.div
        {...float(0.2)}
        className="absolute -left-6 top-1/4 h-10 w-10 rounded-full bg-[#6c63ff]/90 shadow-[0_10px_24px_rgba(0,0,0,0.25)]"/>

      {/* top small dot */}
      <motion.div
        {...float(0.6)}
        className="absolute -top-4 left-10 h-4 w-4 rounded-full bg-[#8581ff]"/>

      {/* right big circle */}
      <motion.div
        {...float(0.3)}
        className="absolute -right-6 top-6 h-14 w-14 rounded-full bg-[#6c63ff]/90"/>

      {/* bottom right ring */}
      <motion.div {...float(0.1)} className="absolute -right-4 bottom-6">
        <Ring size={64} thickness={6} className="opacity-90" />
      </motion.div>

      {/* bottom small dot */}
      <motion.div
        {...float(0.9)}
        className="absolute right-24 -bottom-4 h-5 w-5 rounded-full bg-[#8581ff]"/>

      {/* inner subtle ring */}
      <motion.div {...float(0.4)} className="absolute left-1/3 -bottom-6">
        <Ring size={50} thickness={5} className="opacity-60" />
      </motion.div>
    </div>
  );
}

function Triangle({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <polygon points="0,100 100,50 0,0" />
    </svg>
  );
}

function Ring({ size = 72, thickness = 8, className = "" }) {
  const r = size / 2 - thickness / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      fill="none"
    >
      <circle cx={size / 2} cy={size / 2} r={r} stroke="white" strokeWidth={thickness} />
    </svg>
  );
}