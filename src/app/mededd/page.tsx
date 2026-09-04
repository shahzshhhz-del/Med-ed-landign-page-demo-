"use client";

import { useEffect, useState } from "react";

/* ─── CONSTANTS ─────────────────────────────────────────────────── */
const NAV_LINKS = ["Features", "Who it's for", "Why we built this", "FAQ"];

const AUDIENCE_CIRCLES = [
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&q=80&fit=crop&crop=face",
    alt: "Physician",
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&q=80&fit=crop&crop=face",
    alt: "Nurse",
  },
  {
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&q=80&fit=crop&crop=face",
    alt: "Dentist",
  },
  {
    src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=80&q=80&fit=crop&crop=face",
    alt: "Pharmacist",
  },
];

/* ─── LOGO ───────────────────────────────────────────────────────── */
function MedEddLogo({ size = "md" }: { size?: "sm" | "md" }) {
  const iconSize = size === "sm" ? "w-6 h-6 text-xs" : "w-7 h-7 text-sm";
  const textSize = size === "sm" ? "text-sm" : "text-[15px]";
  return (
    <div className="flex items-center gap-2 shrink-0">
      <div
        className={`${iconSize} rounded-lg flex items-center justify-center text-white font-black`}
        style={{ background: "linear-gradient(135deg, #1B4FD8, #3B82F6)" }}
      >
        M
      </div>
      <span
        className={`${textSize} font-extrabold tracking-tight text-gray-900`}
        style={{ fontFamily: "var(--font-clash)" }}
      >
        Med<span style={{ color: "#1B4FD8" }}>Edd</span>
      </span>
    </div>
  );
}

/* ─── SVG GEOMETRIC PATTERN ─────────────────────────────────────── */
function GeometricPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.08]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {[0, 100, 200, 300, 400, 500].map((x) => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="100%" stroke="white" strokeWidth="0.6" />
      ))}
      {[0, 100, 200, 300, 400, 500, 600, 700].map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="100%" y2={y} stroke="white" strokeWidth="0.6" />
      ))}
      {[[100, 100], [200, 200], [300, 100], [200, 300], [400, 200], [100, 300], [300, 300]].map(
        ([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" fill="white" />
        )
      )}
      <polyline points="100,100 200,200 300,100 400,200" stroke="white" strokeWidth="0.8" fill="none" />
      <polyline points="100,300 200,200 300,300" stroke="white" strokeWidth="0.8" fill="none" />
      <rect x="50" y="320" width="70" height="70" rx="14" stroke="white" strokeWidth="0.8" fill="none" />
      <rect x="360" y="40" width="55" height="55" rx="12" stroke="white" strokeWidth="0.8" fill="none" />
      <circle cx="420" cy="320" r="28" stroke="white" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

/* ─── NAVBAR — matches Reference 1 structure ────────────────────── */
function Navbar() {
  return (
    /* Outer bar: very light white strip spanning full width of hero card */
    <div
      className="absolute top-0 left-0 right-0 z-50 flex items-center px-5 md:px-7"
      style={{
        height: "68px",
        background: "rgba(255,255,255,0.72)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.6)",
      }}
    >
      {/* LEFT: Logo — standalone, no pill */}
      <MedEddLogo />

      {/* CENTER: Separate inner pill with nav links — exactly like Reference 1 */}
      <div className="flex-1 flex justify-center">
        <div
          className="hidden md:flex items-center gap-0.5 rounded-full px-2 py-1.5"
          style={{
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(200,210,240,0.6)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              className="relative text-[13px] font-semibold text-gray-500 hover:text-gray-900 transition-colors px-4 py-1.5 rounded-full hover:bg-gray-50"
              style={{ fontFamily: "var(--font-clash)" }}
            >
              {link}
              {/* Subtle separator between items */}
              {i < NAV_LINKS.length - 1 && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-3 bg-gray-200" />
              )}
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT: Icon-cluster style — Sign In (text link) + Join Early Access (filled pill) */}
      {/* Mirrors the Reference 1 right-side icon group */}
      <div className="flex items-center gap-2.5">
        {/* Sign In — ghost circle button like Reference 1's icon buttons */}
        <a
          href="#"
          className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full border border-gray-200/80 bg-white/80 hover:bg-white transition-all text-gray-600 hover:text-gray-900"
          style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}
          title="Sign In"
        >
          {/* Person icon — like Reference 1's account circle */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
            <path
              d="M2.5 13.5C2.5 11.015 5.015 9 8 9s5.5 2.015 5.5 4.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </a>

        {/* Sign In text — visible on larger screens alongside icon */}
        <a
          href="#"
          className="hidden lg:block text-[13px] font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          style={{ fontFamily: "var(--font-clash)" }}
        >
          Sign In
        </a>

        {/* Join Early Access — filled pill, primary CTA */}
        <a
          href="#"
          className="flex items-center gap-1.5 text-white text-[13px] font-bold rounded-full px-4 py-2 transition-all hover:opacity-90 hover:shadow-md whitespace-nowrap"
          style={{
            fontFamily: "var(--font-clash)",
            background: "linear-gradient(135deg, #1B4FD8, #3B82F6)",
            boxShadow: "0 2px 12px rgba(27,79,216,0.3)",
          }}
        >
          Join Early Access
        </a>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─────────────────────────────────────────────────── */
export default function MedEddPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* Animation helper */
  const anim = (delay: number) =>
    `transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`;

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "#ECF0FB", fontFamily: "var(--font-clash)" }}
    >
      {/* ── HERO SECTION — full width, no card ──────────────────── */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: "100vh",
          minHeight: "640px",
          maxHeight: "820px",
        }}
      >
        {/* ── WHITE-BLUE LEFT BACKGROUND ─────────────────────────── */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(140deg, #F5F8FF 0%, #EBF0FF 45%, #E3ECFF 100%)",
          }}
        />

        {/* ── STRONG BLUE RIGHT PANEL ────────────────────────────── */}
        <div
          className="absolute top-0 right-0 bottom-0 overflow-hidden"
          style={{
            width: "45%",
            borderRadius: "180px 0 0 64px",
            background: "linear-gradient(155deg, #1B4FD8 0%, #1540BC 55%, #1035A0 100%)",
          }}
        >
          <GeometricPattern />

          {/* Blue panel content */}
          <div
            className="relative z-10 h-full flex flex-col justify-start pb-36"
            style={{ paddingTop: "130px", paddingLeft: "clamp(56px, 9vw, 120px)", paddingRight: "clamp(32px, 5vw, 64px)" }}
          >
            <p
              className="text-blue-200/70 text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: "var(--font-clash)" }}
            >
              Platform
            </p>
            <h2
              className="text-white font-extrabold leading-[1.05] mb-4"
              style={{
                fontFamily: "var(--font-clash)",
                fontSize: "clamp(24px, 2.6vw, 40px)",
                letterSpacing: "-0.02em",
              }}
            >
              Built around
              <br />
              what matters.
            </h2>
            <p
              className="text-blue-100/60 leading-relaxed"
              style={{ fontSize: "clamp(12px, 0.9vw, 14px)", maxWidth: "260px" }}
            >
              MedEdd focuses your preparation on the knowledge that actually drives results —
              nothing irrelevant, nothing wasted.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["Personalized paths", "GCC-aligned", "Exam-ready"].map((f) => (
                <span
                  key={f}
                  className="text-[11px] font-bold text-white bg-white/12 border border-white/20 rounded-full px-3 py-1"
                  style={{ fontFamily: "var(--font-clash)" }}
                >
                  {f}
                </span>
              ))}
            </div>

            {/* Bottom row — profession info, right-aligned so it clears the hero image */}
            <div
              className="absolute bottom-7 z-10 flex justify-end"
              style={{ left: "clamp(56px, 9vw, 120px)", right: "clamp(32px, 5vw, 64px)" }}
            >
              <div className="flex items-center">
                {AUDIENCE_CIRCLES.map((a, i) => (
                  <img
                    key={i}
                    src={a.src}
                    alt={a.alt}
                    className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-md"
                    style={{ marginLeft: i === 0 ? 0 : "-8px", zIndex: 10 - i, position: "relative" }}
                  />
                ))}
                <div className="ml-3 text-right">
                  <p
                    className="text-white text-[11px] font-bold leading-tight"
                    style={{ fontFamily: "var(--font-clash)" }}
                  >
                    For every GCC professional
                  </p>
                  <p
                    className="text-blue-200/60 leading-tight mt-0.5"
                    style={{ fontSize: "10px", fontFamily: "var(--font-clash)" }}
                  >
                    Physicians · Nurses · Dentists
                    <br />
                    Pharmacists · Allied Healthcare
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── NAVBAR ─────────────────────────────────────────────── */}
        <Navbar />

        {/* ── LEFT CONTENT ───────────────────────────────────────── */}
        <div
          className="absolute inset-0 flex flex-col justify-start z-20"
          style={{ right: "45%", paddingLeft: "clamp(28px, 4vw, 52px)", paddingTop: "112px", paddingBottom: "120px" }}
        >
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-2 mb-5 ${anim(100)}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
            <span
              className="text-[11px] font-black uppercase tracking-[0.18em] text-blue-600"
              style={{ fontFamily: "var(--font-clash)" }}
            >
              For GCC Healthcare Professionals
            </span>
          </div>

          {/* Main headline — Nunito ExtraBold, large, editorial, left-anchored */}
          <h1
            className={`text-gray-900 leading-none ${anim(200)}`}
            style={{
              fontFamily: "var(--font-clash)",
              fontWeight: 480,
              fontSize: "clamp(50px, 6.6vw, 96px)",
              letterSpacing: "-0.03em",
              lineHeight: "0.94",
              transitionDelay: "200ms",
            }}
          >
            Study what
            <br />
            <span style={{ color: "#1B4FD8" }}>actually</span>
            <br />
            matters.
          </h1>

          {/* Supporting copy */}
          <p
            className={`mt-5 text-gray-400 font-semibold ${anim(300)}`}
            style={{
              fontFamily: "var(--font-clash)",
              fontSize: "clamp(13px, 1vw, 15px)",
              lineHeight: "1.65",
              maxWidth: "240px",
              transitionDelay: "300ms",
            }}
          >
            Build your custom study path
            <br />
            for your licensing exam.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap items-center gap-3 mt-7 ${anim(400)}`}
            style={{ transitionDelay: "400ms" }}
          >
            <a
              href="#"
              className="flex items-center gap-2.5 text-white font-black rounded-full px-5 py-3 transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{
                fontFamily: "var(--font-clash)",
                fontSize: "13px",
                background: "linear-gradient(135deg, #1B4FD8, #3B82F6)",
                boxShadow: "0 4px 20px rgba(27,79,216,0.38)",
              }}
            >
              Join Early Access
              <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M1.5 4.5h6M4.5 2.2L7 4.5 4.5 6.8" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a
              href="#"
              className="text-[13px] font-bold text-gray-700 px-5 py-3 rounded-full border border-gray-200 bg-white/80 hover:bg-white transition-all hover:shadow-sm"
              style={{ fontFamily: "var(--font-clash)" }}
            >
              See How It Works
            </a>
          </div>

          {/* Microcopy */}
          <p
            className={`mt-3 text-gray-400 font-semibold ${anim(500)}`}
            style={{
              fontFamily: "var(--font-clash)",
              fontSize: "11px",
              transitionDelay: "500ms",
            }}
          >
            Be the first to try{" "}
            <span className="font-black text-gray-500">MEDEDD</span>{" "}
            when we launch.
          </p>
        </div>

        {/* ── CENTRAL HERO IMAGE — straddles white/blue boundary, top to bottom ─── */}
        <div
          className={`absolute z-30 bottom-0 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            left: "58%",
            transform: "translateX(-50%)",
            top: "72px",
            width: "clamp(380px, 36vw, 560px)",
            transitionDelay: "600ms",
          }}
        >
          {/* Soft glow halo behind subject */}
          <div
            className="absolute rounded-full opacity-25"
            style={{
              inset: "10% 5% 0% 5%",
              background: "radial-gradient(ellipse, #3B82F6 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <img
            src="/images/mededd-hero-doctor.png"
            alt="Healthcare professional"
            className="relative w-full h-full object-contain object-bottom"
            style={{
              filter: "drop-shadow(0 30px 40px rgba(16,30,80,0.28))",
            }}
          />

        </div>
      </div>
    </div>
  );
}
