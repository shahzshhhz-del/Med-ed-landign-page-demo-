"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import LogoLoop, { type LogoItem } from "@/components/LogoLoop";

/* ─── CONSTANTS ─────────────────────────────────────────────────── */
const NAV_LINKS = ["Features", "Who it's for", "Why we built this", "FAQ"];

/* Set this to the video file path (e.g. "/videos/mcq-demo.mp4") once provided — empty shows a placeholder */
const VIDEO_SRC = "";

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

/* Exam/regulatory bodies MedEdd prepares candidates for — text badges, no external logo assets */
const PARTNER_BADGE_CLASS = "font-black tracking-tight text-gray-400";
const PARTNER_BADGE_STYLE = { fontFamily: "var(--font-clash)", fontSize: "22px" };

const PARTNER_LOGOS: LogoItem[] = [
  { node: <span className={PARTNER_BADGE_CLASS} style={PARTNER_BADGE_STYLE}>DHA</span>, title: "Dubai Health Authority" },
  { node: <span className={PARTNER_BADGE_CLASS} style={PARTNER_BADGE_STYLE}>MOH</span>, title: "Ministry of Health" },
  { node: <span className={PARTNER_BADGE_CLASS} style={PARTNER_BADGE_STYLE}>SCFHS</span>, title: "Saudi Commission for Health Specialties" },
  { node: <span className={PARTNER_BADGE_CLASS} style={PARTNER_BADGE_STYLE}>QCHP</span>, title: "Qatar Council for Healthcare Practitioners" },
  { node: <span className={PARTNER_BADGE_CLASS} style={PARTNER_BADGE_STYLE}>DOH</span>, title: "Department of Health Abu Dhabi" },
  { node: <span className={PARTNER_BADGE_CLASS} style={PARTNER_BADGE_STYLE}>OMSB</span>, title: "Oman Medical Specialty Board" },
];

/* ─── WHY-CHOOSE-US STATS ───────────────────────────────────────── */
const WHY_STATS = [
  {
    value: "6",
    suffix: "+",
    label: "Licensing tracks",
    description: "From physician to pharmacist, every GCC licensing path is covered.",
  },
  {
    value: "500",
    suffix: "+",
    label: "Practice questions",
    description: "Exam-style questions built around real GCC licensing formats.",
  },
  {
    value: "92",
    suffix: "%",
    label: "Learner confidence",
    description: "Candidates report feeling exam-ready after completing their track.",
  },
  {
    value: "24",
    suffix: "/7",
    label: "Access anywhere",
    description: "Study on your schedule, from any device, anytime.",
  },
];

/* ─── AI CHATBOT SECTION ─────────────────────────────────────────── */
const AI_FEATURES: {
  icon: (props: TrackIconProps) => ReactNode;
  title: string;
  description: string;
}[] = [
  {
    icon: BookIcon,
    title: "Evidence-Based Answers",
    description: "Trained on trusted medical textbooks, latest guidelines, and peer-reviewed sources.",
  },
  {
    icon: TargetIcon,
    title: "Exam-Focused Explanations",
    description: "Get concise, structured answers tailored for DHA, MOH, Prometric, PLAB, AMC and more.",
  },
  {
    icon: SparkleIcon,
    title: "Go Deeper, Learn Better",
    description: "Ask follow-up questions, explore related topics, and get simplified explanations.",
  },
  {
    icon: ClockIcon,
    title: "Always Up to Date",
    description: "Regularly updated with the latest clinical guidelines and evidence.",
  },
];

const AI_STATS: { icon: (props: TrackIconProps) => ReactNode; value: string; label: string }[] = [
  { icon: UsersIcon, value: "50,000+", label: "Questions answered" },
  { icon: GlobeIcon, value: "6+", label: "Global exams supported" },
  { icon: ShieldCheckIcon, value: "99%", label: "Evidence-based responses" },
  { icon: StarIcon, value: "4.9/5", label: "Student satisfaction" },
];

/* ─── FAQ ────────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    question: "What is MedEdd?",
    answer:
      "MedEdd is a study platform built for GCC healthcare professionals preparing for their licensing exams — structured tracks, exam-style practice, and content focused only on what actually matters for the exam.",
  },
  {
    question: "Which licensing exams does MedEdd cover?",
    answer:
      "We currently cover Physician, Nursing, Dental, Pharmacist, Allied Healthcare, and Traditional Medicine (TCM) licensing tracks, aligned to bodies like DHA, MOH, SCFHS, QCHP, DOH and OMSB.",
  },
  {
    question: "How is the content structured?",
    answer:
      "Each track is broken into focused modules with practice questions written in the same style as the real exams, so you're studying the format you'll actually see on test day.",
  },
  {
    question: "Can I use MedEdd on mobile?",
    answer:
      "Yes — MedEdd works on any device with a browser, so you can study from your phone, tablet, or laptop whenever you have time.",
  },
  {
    question: "Is MedEdd affiliated with DHA, MOH or SCFHS?",
    answer:
      "No. MedEdd is an independent study platform built to help candidates prepare for exams set by these licensing bodies — we are not affiliated with or endorsed by them.",
  },
  {
    question: "When does MedEdd launch?",
    answer:
      "We're currently in early access. Join the waitlist from the button at the top of the page to be notified the moment MedEdd opens up.",
  },
];

/* ─── STUDY TRACKS — bento grid, mirrors the "Our medical services" reference ─── */
const HL = ({ children }: { children: ReactNode }) => (
  <span className="text-blue-600 group-hover:text-white font-medium transition-colors">{children}</span>
);

/* Placeholder photos — swap each `image` for the real one once provided */
const STUDY_TRACKS: {
  order: string;
  icon: (props: TrackIconProps) => ReactNode;
  title: string;
  description: ReactNode;
  modules: string;
  image: string;
}[] = [
  {
    order: "01",
    icon: StethoscopeIcon,
    title: "Physician Licensing",
    description: (
      <>
        <HL>Structured prep</HL> for DHA, MOH and SCFHS exams — built around{" "}
        <HL>clinical reasoning</HL>.
      </>
    ),
    modules: "48 modules",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&q=80&fit=crop",
  },
  {
    order: "02",
    icon: SyringeIcon,
    title: "Nursing Licensing",
    description: (
      <>
        <HL>Core competencies</HL> and exam-style practice for{" "}
        <HL>GCC nursing registration</HL>.
      </>
    ),
    modules: "36 modules",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=900&q=80&fit=crop",
  },
  {
    order: "03",
    icon: ToothIcon,
    title: "Dental Licensing",
    description: (
      <>
        Focused review of <HL>clinical and theoretical content</HL> for dental board
        exams.
      </>
    ),
    modules: "30 modules",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80&fit=crop",
  },
  {
    order: "04",
    icon: PillIcon,
    title: "Pharmacist Licensing",
    description: (
      <>
        <HL>Pharmacology</HL> and practice questions aligned to{" "}
        <HL>GCC pharmacy board</HL> standards.
      </>
    ),
    modules: "34 modules",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=900&q=80&fit=crop",
  },
  {
    order: "05",
    icon: HeartPulseIcon,
    title: "Allied Healthcare",
    description: (
      <>
        Track content for <HL>allied health professionals</HL> across GCC licensing
        bodies.
      </>
    ),
    modules: "22 modules",
    image: "https://images.unsplash.com/photo-1571772805064-207c8435df79?w=900&q=80&fit=crop",
  },
  {
    order: "06",
    icon: LeafIcon,
    title: "Traditional Medicine (TCM)",
    description: (
      <>
        <HL>Traditional and complementary medicine</HL> licensing prep, aligned to GCC{" "}
        <HL>TCM practitioner</HL> standards.
      </>
    ),
    modules: "18 modules",
    image: "https://images.unsplash.com/photo-1611072965169-e0d5b8c74e0d?w=900&q=80&fit=crop",
  },
];

/* ─── LOGO ───────────────────────────────────────────────────────── */
/* ─── LINE ICONS — minimal, single-color, used in the study track cards ─── */
interface TrackIconProps {
  color?: string;
}
const iconProps = (color: string) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

function StethoscopeIcon({ color = "currentColor" }: TrackIconProps) {
  return (
    <svg {...iconProps(color)}>
      <path d="M5 3v6a4 4 0 0 0 8 0V3" />
      <path d="M9 15a6 6 0 0 0 6-6V7" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="9" cy="19" r="2" />
    </svg>
  );
}

function SyringeIcon({ color = "currentColor" }: TrackIconProps) {
  return (
    <svg {...iconProps(color)}>
      <path d="M18 2l4 4" />
      <path d="M17 7l-11 11" />
      <path d="M14 4l6 6" />
      <path d="M3 21l3-1 1-3" />
      <path d="M8 14l2 2" />
      <path d="M11 11l2 2" />
    </svg>
  );
}

function ToothIcon({ color = "currentColor" }: TrackIconProps) {
  return (
    <svg {...iconProps(color)}>
      <path d="M12 3c-2 0-3 1.2-4 1.2S6 3 4.5 3 2 5 2 8c0 4 1.5 6 2 9 .3 1.5 1 2 1.7 2 1 0 1.3-3 2.3-6 .3-1 .8-1.5 2-1.5s1.7.5 2 1.5c1 3 1.3 6 2.3 6 .7 0 1.4-.5 1.7-2 .5-3 2-5 2-9 0-3-1-5-2.5-5S14 4.2 12 3z" />
    </svg>
  );
}

function PillIcon({ color = "currentColor" }: TrackIconProps) {
  return (
    <svg {...iconProps(color)}>
      <rect x="3" y="10.5" width="18" height="7" rx="3.5" transform="rotate(-40 12 14)" />
      <line x1="10.5" y1="9" x2="13.5" y2="19" />
    </svg>
  );
}

function HeartPulseIcon({ color = "currentColor" }: TrackIconProps) {
  return (
    <svg {...iconProps(color)}>
      <path d="M12 20s-7-4.35-9.5-8.5C1 8 2.5 4.5 6 4.5c2 0 3.2 1.2 3.9 2.2M12 20s7-4.35 9.5-8.5c1.5-3.5 0-7-3.5-7-2 0-3.2 1.2-3.9 2.2" />
      <path d="M4 12h3l1.5-3 2 5 1.5-3h4.5" />
    </svg>
  );
}

function LeafIcon({ color = "currentColor" }: TrackIconProps) {
  return (
    <svg {...iconProps(color)}>
      <path d="M4 20c8-1 14-6 16-16-10 0-16 6-16 16z" />
      <path d="M6 18c3-3 6-6 12-13" />
    </svg>
  );
}

function BookIcon({ color = "currentColor" }: TrackIconProps) {
  return (
    <svg {...iconProps(color)}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 1 4 18.5v-13z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5a2.5 2.5 0 0 0 2.5-2.5v-13z" />
    </svg>
  );
}

function TargetIcon({ color = "currentColor" }: TrackIconProps) {
  return (
    <svg {...iconProps(color)}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill={color} />
    </svg>
  );
}

function SparkleIcon({ color = "currentColor" }: TrackIconProps) {
  return (
    <svg {...iconProps(color)}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    </svg>
  );
}

function ClockIcon({ color = "currentColor" }: TrackIconProps) {
  return (
    <svg {...iconProps(color)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

function UsersIcon({ color = "currentColor" }: TrackIconProps) {
  return (
    <svg {...iconProps(color)}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5.5a3 3 0 0 1 0 5.8" />
      <path d="M18.5 14c2 .6 3.5 2.9 3.5 6" />
    </svg>
  );
}

function GlobeIcon({ color = "currentColor" }: TrackIconProps) {
  return (
    <svg {...iconProps(color)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.5 2.3 4 5.3 4 8.5s-1.5 6.2-4 8.5c-2.5-2.3-4-5.3-4-8.5s1.5-6.2 4-8.5z" />
    </svg>
  );
}

function ShieldCheckIcon({ color = "currentColor" }: TrackIconProps) {
  return (
    <svg {...iconProps(color)}>
      <path d="M12 3.5l7 2.8v5c0 4.5-2.9 7.9-7 9.2-4.1-1.3-7-4.7-7-9.2v-5l7-2.8z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

function StarIcon({ color = "currentColor" }: TrackIconProps) {
  return (
    <svg {...iconProps(color)}>
      <path d="M12 3.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.8L12 3.5z" />
    </svg>
  );
}

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

/* ─── PHOTO TAG — floating pill badge with a connector dot, used on hero-style photos ─── */
function PhotoTag({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`absolute z-20 ${className}`}>
      <span
        className="inline-block bg-white/95 backdrop-blur-sm rounded-full px-3.5 py-2 text-[12px] font-bold text-gray-800 whitespace-nowrap"
        style={{ fontFamily: "var(--font-clash)", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
      >
        {text}
      </span>
      <span className="absolute -bottom-3.5 left-4 w-2 h-2 rounded-full bg-gray-900" />
    </div>
  );
}

/* ─── PLUS ICON — small decorative medical cross ─────────────────── */
function PlusIcon({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4v16M4 12h16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* ─── NAVBAR — rounded floating pill, like the Docshield reference ─ */
function Navbar() {
  return (
    <div
      className="fixed z-50 flex items-center px-5 md:px-7"
      style={{
        top: "20px",
        left: "20px",
        right: "20px",
        height: "68px",
        borderRadius: "9999px",
        background: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.7)",
        boxShadow: "0 8px 30px rgba(16,30,80,0.1)",
      }}
    >
      {/* LEFT: Logo */}
      <MedEddLogo />

      {/* CENTER: plain spaced nav links — no pill, no separators */}
      <div className="flex-1 hidden md:flex items-center justify-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[14px] font-medium text-gray-500 hover:text-gray-900 transition-colors"
            style={{ fontFamily: "var(--font-clash)" }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* RIGHT: Sign In (dark filled pill) + Join Early Access (white filled pill) */}
      <div className="flex items-center gap-2.5">
        <a
          href="#"
          className="hidden sm:flex items-center gap-2 text-white text-[13px] font-bold rounded-full pl-4 pr-3.5 py-2.5 transition-all hover:opacity-90 whitespace-nowrap"
          style={{ fontFamily: "var(--font-clash)", background: "#0F1B3D" }}
        >
          Sign In
          <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path
                d="M1.5 4.5h6M4.5 2.2L7 4.5 4.5 6.8"
                stroke="white"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>

        <a
          href="#"
          className="flex items-center text-gray-900 text-[13px] font-bold rounded-full px-4 py-2.5 transition-all hover:shadow-md whitespace-nowrap"
          style={{
            fontFamily: "var(--font-clash)",
            background: "#FFFFFF",
            boxShadow: "0 2px 10px rgba(16,30,80,0.1)",
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
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
            left: "55%",
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

      {/* ── CONTINUOUS BACKGROUND WRAPPER — one shared canvas from here to the FAQ, ─── */}
      {/* so the soft blob shapes can bleed across section boundaries instead of each */}
      {/* section being its own flat-colored block. */}
      <div className="relative w-full overflow-hidden" style={{ background: "#F4F7FF" }}>
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "620px",
            left: "-220px",
            width: "620px",
            height: "620px",
            background: "radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(59,130,246,0) 70%)",
            filter: "blur(10px)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "1750px",
            right: "-260px",
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(59,130,246,0.14) 0%, rgba(59,130,246,0) 70%)",
            filter: "blur(10px)",
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            bottom: "-160px",
            left: "-180px",
            width: "560px",
            height: "560px",
            background: "radial-gradient(circle, rgba(59,130,246,0.13) 0%, rgba(59,130,246,0) 70%)",
            filter: "blur(10px)",
          }}
        />

      {/* ── PARTNER LOGO STRIP — bridges hero and statement section ─── */}
      <div className="relative w-full" style={{ background: "transparent", padding: "36px 0" }}>
        <LogoLoop
          logos={PARTNER_LOGOS}
          speed={60}
          direction="left"
          logoHeight={22}
          gap={72}
          fadeOut
          fadeOutColor="#F4F7FF"
          ariaLabel="Healthcare licensing bodies MedEdd prepares candidates for"
        />
      </div>

      {/* ── STATEMENT SECTION — centered headline over hex pattern ─── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: "transparent", padding: "94px 24px" }}
      >
        {/* Bottom-left pale blue blob */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ bottom: "-221px", left: "-187px", width: "476px", height: "476px", background: "#DCE7FF" }}
        />
        {/* Bottom-right pale blue blob with a dotted texture */}
        <div
          className="absolute rounded-full overflow-hidden pointer-events-none"
          style={{ bottom: "-255px", right: "-221px", width: "527px", height: "527px", background: "#DCE7FF" }}
        >
          <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mededdDots" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.4" fill="#8FAEEB" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mededdDots)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <span className="w-7 h-px bg-gray-300" />
            <span
              className="text-gray-400 font-bold text-sm tracking-wide"
              style={{ fontFamily: "var(--font-clash)" }}
            >
              MedEdd
            </span>
            <span className="w-7 h-px bg-gray-300" />
          </div>

          {/* Statement headline with inline icon + avatar cluster */}
          <h2
            className="text-gray-900 font-extrabold leading-[1.25]"
            style={{
              fontFamily: "var(--font-clash)",
              fontSize: "clamp(20px, 2.9vw, 34px)",
              letterSpacing: "-0.01em",
            }}
          >
            We combine focused study tools
            <span
              className="inline-flex items-center justify-center align-middle mx-2 rounded-full"
              style={{
                width: "1.15em",
                height: "1.15em",
                background: "linear-gradient(135deg, #1B4FD8, #3B82F6)",
                fontSize: "0.55em",
                verticalAlign: "middle",
              }}
            >
              🧠
            </span>
            with real exam insight to help every candidate
            <span className="inline-flex items-center align-middle mx-2" style={{ verticalAlign: "middle" }}>
              {AUDIENCE_CIRCLES.slice(0, 3).map((a, i) => (
                <img
                  key={i}
                  src={a.src}
                  alt={a.alt}
                  className="rounded-full object-cover border-2 border-white shadow-sm"
                  style={{
                    width: "0.9em",
                    height: "0.9em",
                    marginLeft: i === 0 ? 0 : "-0.3em",
                    position: "relative",
                    zIndex: 10 - i,
                  }}
                />
              ))}
            </span>
            feel confident and ready.
          </h2>

          {/* Supporting copy */}
          <p
            className="text-gray-500 mt-5 leading-relaxed"
            style={{ fontFamily: "var(--font-clash)", fontSize: "clamp(11px, 0.85vw, 13px)" }}
          >
            Your prep is a space of clarity, structured knowledge and support — built on
            years of exam experience and care for GCC candidates.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="flex items-center gap-2 text-white font-black rounded-full px-4 py-2.5 transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{
                fontFamily: "var(--font-clash)",
                fontSize: "11px",
                background: "linear-gradient(135deg, #1B4FD8, #3B82F6)",
                boxShadow: "0 4px 20px rgba(27,79,216,0.3)",
              }}
            >
              More About MedEdd
              <span className="w-[17px] h-[17px] rounded-full bg-white/25 flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 9 9" fill="none">
                  <path
                    d="M1.5 4.5h6M4.5 2.2L7 4.5 4.5 6.8"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── STUDY TRACKS — bento grid ─────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ background: "transparent", paddingTop: "56px", paddingBottom: "40px", paddingLeft: "24px", paddingRight: "24px" }}>
        {/* Soft blue blob bulging in from the right edge */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: "20%",
            right: "-220px",
            width: "560px",
            height: "560px",
            background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0) 70%)",
            filter: "blur(20px)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-px bg-blue-600" />
                <span
                  className="text-blue-600 text-[11px] font-black uppercase tracking-[0.18em]"
                  style={{ fontFamily: "var(--font-clash)" }}
                >
                  Our Learning Paths
                </span>
              </div>
              <h2
                className="text-gray-900 font-extrabold leading-tight"
                style={{ fontFamily: "var(--font-clash)", fontSize: "clamp(24px, 2.6vw, 32px)" }}
              >
                Our study tracks{" "}
                <span className="text-gray-400 font-normal text-base align-middle">
                  (Choose your path)
                </span>
              </h2>
            </div>
            <div className="max-w-sm md:text-right">
              <p className="text-gray-500 text-xs leading-relaxed">
                Structured tracks built around your license exam — from first principles to
                exam day.
              </p>
              <a
                href="#"
                className="inline-block text-blue-600 text-xs font-bold mt-1 underline underline-offset-2"
                style={{ fontFamily: "var(--font-clash)" }}
              >
                See all tracks
              </a>
            </div>
          </div>

          {/* Bento grid — 4 cards on top, 2 cards + wide photo on the bottom row, like the reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STUDY_TRACKS.map((track, i) => (
              <TrackCard
                key={track.order}
                track={track}
                onHoverStart={() => setHoveredTrack(i)}
                onHoverEnd={() => setHoveredTrack(null)}
              />
            ))}

            {/* Photo — swaps to match whichever card is hovered */}
            <div className="relative rounded-[24px] overflow-hidden min-h-[280px] sm:col-span-2">
              {STUDY_TRACKS.map((track, i) => (
                <img
                  key={track.order}
                  src={track.image}
                  alt={track.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                  style={{ opacity: hoveredTrack === i ? 1 : 0 }}
                />
              ))}
              {/* Default photo, shown when no card is hovered */}
              <img
                src="https://images.unsplash.com/photo-1571772805064-207c8435df79?w=900&q=80&fit=crop"
                alt="Healthcare professionals studying together"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                style={{ opacity: hoveredTrack === null ? 1 : 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT VIDEO — placeholder frame, swap in the real video/poster when ready ─── */}
      <section className="relative w-full" style={{ background: "transparent", paddingTop: "64px", paddingBottom: "64px", paddingLeft: "24px", paddingRight: "24px" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-gray-900 font-extrabold leading-tight"
            style={{ fontFamily: "var(--font-clash)", fontSize: "clamp(26px, 3vw, 36px)" }}
          >
            See MedEdd in action
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            A quick look at how our MCQ practice actually works.
          </p>

          {/* Video frame — replace VIDEO_SRC with the real file/URL to swap this in */}
          <div
            className="relative mt-10 rounded-[28px] overflow-hidden mx-auto"
            style={{ aspectRatio: "16 / 9", boxShadow: "0 20px 60px rgba(16,30,80,0.15)" }}
          >
            {VIDEO_SRC ? (
              <video
                src={VIDEO_SRC}
                controls
                className="absolute inset-0 w-full h-full object-cover bg-black"
              />
            ) : (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ background: "linear-gradient(155deg, #1B4FD8 0%, #1035A0 100%)" }}
              >
                <GeometricPattern />
                <button
                  type="button"
                  aria-label="Play video"
                  className="relative z-10 w-16 h-16 rounded-full bg-white/95 flex items-center justify-center hover:scale-105 transition-transform"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M6 4l10 6-10 6V4z" fill="#1B4FD8" />
                  </svg>
                </button>
                <p className="relative z-10 text-white/80 text-xs font-bold uppercase tracking-wide mt-4">
                  Video coming soon
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US — one continuous white section, blue card floats on top ─── */}
      <section className="relative w-full" style={{ background: "transparent", paddingTop: "64px", paddingBottom: "56px", paddingLeft: "24px", paddingRight: "24px" }}>
        <div
          className="max-w-7xl mx-auto relative rounded-[32px] bg-white p-8 lg:p-10 lg:min-h-[524px]"
          style={{ boxShadow: "0 20px 60px rgba(16,30,80,0.08)" }}
        >
          {/* Blue card — floats over the white card, ~42% width on large screens */}
          <div
            className="relative lg:absolute lg:left-8 lg:top-8 lg:w-[calc(42%-16px)] rounded-[28px] overflow-hidden p-9 flex flex-col z-10 mb-6 lg:mb-0"
            style={{
              background: "linear-gradient(155deg, #1B4FD8 0%, #1035A0 100%)",
              minHeight: "460px",
            }}
          >
            <GeometricPattern />

            <div className="relative z-10">
              <h2
                className="text-white font-extrabold leading-[1.1]"
                style={{ fontFamily: "var(--font-clash)", fontSize: "clamp(28px, 3vw, 36px)" }}
              >
                Why choose
                <br />
                MedEdd
              </h2>
              <p className="text-blue-200/70 text-xs font-bold uppercase tracking-wide mt-2">
                Provided by: GCC licensing specialists
              </p>
            </div>

            {/* Doctors photo — mask-faded at the edges so its light background blends into the blue card */}
            <div className="relative flex-1 mt-4 -mx-9">
              <img
                src="/images/mededd-why-choose-doctors.png"
                alt="Two smiling doctors"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition: "center 30%",
                  maskImage:
                    "radial-gradient(ellipse 85% 100% at 50% 78%, black 55%, transparent 92%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 85% 100% at 50% 78%, black 55%, transparent 92%)",
                }}
              />

              <PhotoTag text="Personalized Paths" className="left-2 top-[10%]" />
              <PhotoTag text="Exam-Focused Content" className="right-2 top-[38%]" />
              <PhotoTag text="GCC-Aligned" className="left-2 bottom-[6%]" />
            </div>

            <div className="relative z-10 mt-2">
              <span className="inline-block bg-white/10 border border-white/20 rounded-full px-3.5 py-1.5 text-[11px] font-bold text-white">
                Feels like: Real exam prep
              </span>
            </div>
          </div>

          {/* Stats — sits directly on the section's white background, offset to clear the blue card */}
          <div className="lg:pl-[60%] pt-2 lg:pt-9">
            <div className="flex items-center justify-between mb-8">
              <span className="text-gray-400 text-sm font-medium" style={{ fontFamily: "var(--font-clash)" }}>
                {"{ Advantages }"}
              </span>
              <span className="border border-gray-200 rounded-full px-3 py-1.5 text-[11px] font-bold text-gray-500">
                Looks like: Structured learning
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {WHY_STATS.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-gray-900 font-extrabold leading-none"
                    style={{ fontFamily: "var(--font-clash)", fontSize: "40px" }}
                  >
                    {stat.value}
                    <span className="text-blue-600">{stat.suffix}</span>
                  </p>
                  <p
                    className="text-gray-900 font-bold mt-2"
                    style={{ fontFamily: "var(--font-clash)", fontSize: "14px" }}
                  >
                    {stat.label}
                  </p>
                  <p className="text-gray-400 text-[12px] leading-relaxed mt-1">{stat.description}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-900 text-[12px] font-bold mt-8">
              In fact: Built by people who&apos;ve sat these exams.
            </p>
          </div>
        </div>
      </section>

      {/* ── AI CHATBOT — MedEdd AI study companion ────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ background: "transparent", paddingTop: "66px", paddingBottom: "36px", paddingLeft: "24px", paddingRight: "24px" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center px-2 sm:px-4 lg:px-6">
          {/* Left: copy */}
          <div>
            <span
              className="inline-block text-blue-600 text-[11px] font-black uppercase tracking-[0.18em] bg-blue-50 rounded-full px-3.5 py-1.5"
              style={{ fontFamily: "var(--font-clash)" }}
            >
              AI Powered Learning
            </span>

            <h2
              className="text-gray-900 font-extrabold leading-[1.05] mt-5"
              style={{ fontFamily: "var(--font-clash)", fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              Ask. Learn. Master.
              <br />
              <span style={{ color: "#1B4FD8" }}>With MedEdd AI.</span>
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mt-4 max-w-md">
              Your 24/7 AI study companion, trained on trusted medical resources and global exam
              guidelines. Get accurate, exam-ready answers, anytime you need them.
            </p>

            <div className="flex flex-col gap-5 mt-8">
              {AI_FEATURES.map((f) => {
                const FeatureIcon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center"
                      style={{ boxShadow: "0 4px 16px rgba(16,30,80,0.08)" }}
                    >
                      <span style={{ transform: "scale(1.3)" }}>
                        <FeatureIcon color="#1B4FD8" />
                      </span>
                    </span>
                    <div>
                      <p
                        className="text-gray-900 font-bold text-[15px]"
                        style={{ fontFamily: "var(--font-clash)" }}
                      >
                        {f.title}
                      </p>
                      <p className="text-gray-400 text-[13px] leading-relaxed mt-0.5">{f.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 mt-9">
              <a
                href="#"
                className="flex items-center gap-2 text-white text-[13px] font-bold rounded-full px-5 py-3 transition-all hover:opacity-90"
                style={{ fontFamily: "var(--font-clash)", background: "#0F1B3D" }}
              >
                Try MedEdd AI
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M1.5 4.5h6M4.5 2.2L7 4.5 4.5 6.8" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span className="text-blue-400 text-[12px] font-semibold">Study Smarter. Go Further.</span>
            </div>
          </div>

          {/* Right: chat mockup + stats */}
          <div className="relative">
            {/* Soft ambient glow behind the card */}
            <div
              className="absolute -inset-10 rounded-full opacity-40 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, #3B82F6 0%, transparent 65%)", filter: "blur(50px)" }}
            />

            {/* Chat card */}
            <div
              className="relative rounded-[28px] bg-white p-5 max-w-md mx-auto"
              style={{ boxShadow: "0 24px 70px rgba(16,30,80,0.15)" }}
            >
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100">
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #1B4FD8, #3B82F6)" }}
                  >
                    ✦
                  </span>
                  <div>
                    <p className="text-gray-900 font-bold text-[13px]" style={{ fontFamily: "var(--font-clash)" }}>
                      MedEdd AI
                    </p>
                    <p className="text-green-600 text-[10px] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Online
                    </p>
                  </div>
                </div>

                {/* User message */}
                <div className="flex justify-end mt-5">
                  <div className="bg-blue-50 text-gray-700 text-[12.5px] leading-relaxed rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%]">
                    What are the first line treatments for hypertension according to the latest
                    guidelines?
                  </div>
                </div>

                {/* AI response */}
                <div className="flex items-start gap-2.5 mt-4">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] flex-shrink-0 mt-0.5"
                    style={{ background: "linear-gradient(135deg, #1B4FD8, #3B82F6)" }}
                  >
                    ✦
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-600 text-[12.5px] leading-relaxed">
                      According to the latest ACC/AHA and NICE guidelines, first-line
                      pharmacological treatments for hypertension include:
                    </p>
                    <ol className="text-gray-600 text-[12.5px] leading-relaxed mt-2 list-decimal list-inside space-y-0.5">
                      <li>ACE inhibitors (e.g. ramipril, enalapril)</li>
                      <li>ARBs (e.g. losartan, valsartan)</li>
                      <li>Calcium channel blockers (e.g. amlodipine)</li>
                      <li>Thiazide-like diuretics (e.g. indapamide, chlorthalidone)</li>
                    </ol>
                    <p className="text-gray-600 text-[12.5px] leading-relaxed mt-2">
                      The choice depends on the patient&apos;s age, ethnicity, comorbidities and
                      individual risk factors. Lifestyle modifications are also essential in all
                      patients.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="text-[10px] font-bold text-blue-600 bg-white border border-blue-100 rounded-full px-2.5 py-1">
                        NICE 2023 ↗
                      </span>
                      <span className="text-[10px] font-bold text-blue-600 bg-white border border-blue-100 rounded-full px-2.5 py-1">
                        ACC/AHA 2017 ↗
                      </span>
                      <span className="text-[10px] font-bold text-gray-400">Show more</span>
                    </div>
                    <div className="flex items-center gap-3 mt-3 text-gray-300">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M7 22h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h3v10z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" transform="rotate(180 12 12)" />
                        <path d="M7 12v-7a3 3 0 0 1 3 -3l4 8v11h-8.5a2 2 0 0 1 -2 -2.36l1.75-9a2 2 0 0 1 2 -1.64z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" transform="rotate(180 12 12)" />
                      </svg>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M7 2h-3a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h3V2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                        <path d="M7 12v7a3 3 0 0 0 3 3l4 -8V3h-8.5a2 2 0 0 0 -2 2.36l1.75 9a2 2 0 0 0 2 1.64z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                      </svg>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <rect x="9" y="9" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M5 15V5a2 2 0 0 1 2-2h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Input row */}
                <div className="flex items-center gap-2.5 mt-5 border border-gray-200 rounded-full pl-4 pr-1.5 py-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 text-gray-400">
                    <path d="M21 12.5V7a4 4 0 0 0-8 0v10a2.5 2.5 0 0 0 5 0V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <span className="text-gray-400 text-[12.5px] flex-1">Ask anything...</span>
                  <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
                      <path d="M5 8V2M2 5l3-3 3 3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <p className="text-gray-300 text-[10px] text-center mt-3">
                  MedEdd AI provides educational information. Always verify with official resources.
                </p>
              </div>
          </div>
        </div>

        {/* Stats bar — a single white card, icon + text side by side, like the reference */}
        <div
          className="max-w-4xl mx-auto mt-14 bg-white rounded-[20px] px-4 sm:px-10 py-3.5"
          style={{ boxShadow: "0 10px 40px rgba(16,30,80,0.08)" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {AI_STATS.map((s) => {
              const StatIcon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-3 px-3 sm:px-6 py-3 sm:py-0">
                  <span className="w-10 h-10 rounded-full border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <StatIcon color="#1B4FD8" />
                  </span>
                  <div>
                    <p
                      className="text-blue-600 font-extrabold leading-tight"
                      style={{ fontFamily: "var(--font-clash)", fontSize: "17px" }}
                    >
                      {s.value}
                    </p>
                    <p className="text-gray-400 text-[11px] leading-tight mt-0.5">{s.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER — full-width blue card ───────────────── */}
      <section className="relative w-full" style={{ background: "transparent", padding: "0 24px 60px" }}>
        <div
          className="max-w-7xl mx-auto relative rounded-[32px] overflow-hidden"
          style={{
            background: "linear-gradient(155deg, #1B4FD8 0%, #1035A0 100%)",
            minHeight: "420px",
          }}
        >
          <GeometricPattern />

          {/* Dot-grid texture, left edge */}
          <svg
            className="absolute top-0 left-0 h-full pointer-events-none opacity-30"
            style={{ width: "160px" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="mededdCtaDots" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.4" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mededdCtaDots)" />
          </svg>

          {/* Decorative plus/cross icons */}
          <PlusIcon className="absolute pointer-events-none" style={{ top: "34%", right: "34%", width: "36px", height: "36px", opacity: 0.3 }} />
          <PlusIcon className="absolute pointer-events-none" style={{ top: "16%", right: "6%", width: "44px", height: "44px", opacity: 0.35 }} />

          {/* Doctor photo, right side, tinted blue to blend with the card */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] overflow-hidden">
            <img
              src="/images/mededd-hero-doctor.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ filter: "brightness(0.7) saturate(0)" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, #1B4FD8 0%, rgba(27,79,216,0.55) 35%, rgba(27,79,216,0.15) 65%, transparent 100%)" }}
            />
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{ background: "linear-gradient(155deg, #1B4FD8 0%, #1035A0 100%)" }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-between h-full px-8 py-10 lg:px-14 lg:py-12" style={{ minHeight: "420px" }}>
            <div>
              <h2
                className="font-extrabold leading-[1.05]"
                style={{ fontFamily: "var(--font-clash)", fontSize: "clamp(30px, 3.6vw, 44px)" }}
              >
                <span className="text-white block">Study Smarter.</span>
                <span className="text-blue-200 block">Go Further.</span>
              </h2>
              <p className="text-blue-100/80 mt-4 max-w-sm text-[14px] leading-relaxed">
                Join thousands of healthcare professionals preparing for global exams with
                MedEdd.
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-7">
                <a
                  href="#"
                  className="flex items-center gap-2 text-blue-700 font-bold rounded-full px-5 py-3 bg-white transition-all hover:opacity-90"
                  style={{ fontFamily: "var(--font-clash)", fontSize: "14px" }}
                >
                  Try MedEdd AI
                  <svg width="10" height="10" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 4.5h6M4.5 2.2L7 4.5 4.5 6.8" stroke="#1B4FD8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-white font-bold rounded-full px-5 py-3 border border-white/40 transition-all hover:bg-white/10"
                  style={{ fontFamily: "var(--font-clash)", fontSize: "14px" }}
                >
                  Join Early Access
                  <svg width="10" height="10" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 4.5h6M4.5 2.2L7 4.5 4.5 6.8" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Trusted-by row, bottom-right */}
            <div className="flex items-center gap-4 self-end">
              <div className="flex items-center">
                {AUDIENCE_CIRCLES.map((a, i) => (
                  <img
                    key={i}
                    src={a.src}
                    alt={a.alt}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                    style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: 10 - i, position: "relative" }}
                  />
                ))}
              </div>
              <span className="w-px h-8 bg-white/25" />
              <p className="text-white text-[13px] font-bold leading-snug" style={{ fontFamily: "var(--font-clash)" }}>
                Trusted by 50,000+
                <br />
                <span className="text-blue-200 font-medium">learners worldwide</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="relative w-full" style={{ background: "transparent", paddingTop: "48px", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span
              className="text-blue-600 text-xs font-black uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-clash)" }}
            >
              FAQ
            </span>
            <h2
              className="text-gray-900 font-extrabold leading-tight mt-3"
              style={{ fontFamily: "var(--font-clash)", fontSize: "clamp(26px, 3vw, 36px)" }}
            >
              Frequently asked questions
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={item.question}
                  className="rounded-2xl bg-white border border-gray-100 overflow-hidden"
                  style={{ boxShadow: isOpen ? "0 8px 24px rgba(16,30,80,0.08)" : "none" }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  >
                    <span
                      className="text-gray-900 font-bold text-[15px]"
                      style={{ fontFamily: "var(--font-clash)" }}
                    >
                      {item.question}
                    </span>
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300"
                      style={{ background: isOpen ? "#1B4FD8" : "#EEF1FF" }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      >
                        <path
                          d="M6 1v10M1 6h10"
                          stroke={isOpen ? "white" : "#1B4FD8"}
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="grid transition-all duration-300"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-500 text-[13px] leading-relaxed px-6 pb-5">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

/* ─── TRACK CARD — used in the study tracks bento grid ───────────── */
function TrackCard({
  track,
  onHoverStart,
  onHoverEnd,
}: {
  track: (typeof STUDY_TRACKS)[number];
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const Icon = track.icon;
  return (
    <div
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="group relative rounded-[24px] bg-white p-6 flex flex-col justify-between h-[280px] overflow-hidden transition-colors duration-300 hover:shadow-lg cursor-pointer"
      style={{ transitionProperty: "background-color, box-shadow" }}
    >
      {/* Blue fill that fades in on hover, sitting above the white bg but below the content */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(155deg, #1B4FD8 0%, #1035A0 100%)" }}
      />

      {/* Ghost number, top-left, thin and pale — fades away on hover so the title can take over */}
      <span
        className="absolute -top-1 left-5 font-light text-gray-100 group-hover:opacity-0 select-none transition-opacity duration-300"
        style={{ fontFamily: "var(--font-clash)", fontSize: "58px" }}
      >
        {track.order}
      </span>

      {/* Faint rotated watermark on the right edge, like the reference */}
      <span
        className="absolute top-1/2 -right-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-100 group-hover:text-white/20 select-none whitespace-nowrap transition-colors duration-300"
        style={{ transform: "translateY(-50%) rotate(90deg)", transformOrigin: "right center" }}
      >
        MedEdd
      </span>

      <div className="relative z-10 mt-10 group-hover:mt-3 flex flex-col transition-all duration-300">
        {/* Headline sits above the icon */}
        <h3
          className="text-gray-900 group-hover:text-white font-bold group-hover:font-black group-hover:uppercase group-hover:text-[28px] group-hover:leading-[0.95] group-hover:tracking-[-0.01em] transition-all duration-300"
          style={{ fontFamily: "var(--font-clash)", fontSize: "15px" }}
        >
          {track.title}
        </h3>
        <span className="text-blue-600 group-hover:text-white mt-2.5 transition-colors duration-300">
          <Icon />
        </span>
        {/* Small repeated subtitle — only shown on hover, sits above the description */}
        <p
          className="hidden group-hover:block text-white/90 font-semibold text-[13px] mt-3 ml-10 transition-colors duration-300"
          style={{ fontFamily: "var(--font-clash)" }}
        >
          {track.title.toLowerCase()}
        </p>
        {/* Description — indented to the right, like the reference */}
        <p className="text-gray-400 group-hover:text-blue-100/80 text-[12px] leading-relaxed mt-2 ml-10 transition-colors duration-300">
          {track.description}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between mt-4">
        <a
          href="#"
          className="text-blue-600 group-hover:text-white text-[12px] font-bold underline underline-offset-2 transition-colors duration-300"
        >
          Explore track
        </a>
        <span className="text-gray-400 group-hover:text-blue-100/80 text-[11px] underline underline-offset-2 transition-colors duration-300">
          {track.modules}
        </span>
      </div>
    </div>
  );
}
