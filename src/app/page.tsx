"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const NAV_LINKS = [
  { label: "Why Docshield", href: "#" },
  { label: "State Resources", href: "#" },
  { label: "Specialty Resources", href: "#", hasDropdown: true },
  { label: "About Us", href: "#" },
];

const TESTIMONIALS = [
  {
    quote: "Docshield cut our malpractice bill by 19% with zero paperwork. Highly recommend!",
    initials: "CC",
    practice: "Clear Complexions Rx",
    location: "IL Derm",
  },
  {
    quote: "Docshield navigated a nuanced coverage situation and saved us 25% at the last hour.",
    initials: "WO",
    practice: "Women's Own OBGYN",
    location: "NJ Gyn",
  },
  {
    quote: "Docshield made it easier to get coverage than ever before in my career.",
    initials: "MP",
    practice: "Dr. Mark Peacock",
    location: "FL Family Med",
  },
  {
    quote: "Docshield helped us explore several coverage options and save over $10K on our premium!",
    initials: "MC",
    practice: "Michigan Cosmetic Design",
    location: "MI Plastics",
  },
  {
    quote: "Docshield worked faster than any broker and handled our BOP and cyber coverage with ease.",
    initials: "DO",
    practice: "DFW Orthopedics",
    location: "TX Ortho",
  },
];

const COVERAGE_TYPES = [
  "Directors & Officers",
  "General Liability",
  "Property",
  "Commercial Auto",
  "Workers' Comp",
  "Cyber",
  "Employment Practices Liability",
];

const FAQS = [
  {
    q: "Why should I work with an independent agency like Docshield?",
    a: "Only independent agents can shop across multiple insurers for your policy and give you unbiased recommendations. This ensures your premium is fair and competitively priced. When you go directly to an insurance plan, their agents can only recommend and sell that insurer's policies.",
  },
  {
    q: "How does Docshield make money?",
    a: "Your practice doesn't pay us anything directly. Insurers pay us a commission when we place a policy with them. Insurers must file their premiums with states and bake in commissions when doing so, so using a broker does not increase the cost of your coverage.",
  },
  {
    q: "How does Docshield complete my application so quickly?",
    a: "Docshield uses remote process automation to intake your previous malpractice insurance documents and pull information from dozens of federal, state, and private databases. This allows us to pre-populate the basics of your application, but we have you review this information for accuracy since it's not always up to date.",
  },
  {
    q: "What kinds of practices does Docshield work with?",
    a: "Docshield can handle malpractice coverage for a broad range of practices ranging from solo docs to 100+ physician outpatient groups. We do not work with health systems or hospitals at this time.",
  },
  {
    q: "Can I talk to a person about my malpractice insurance needs?",
    a: "Of course! You can contact us with any questions via call (or text) at 914-820-5734 any time 9am-7pm ET.",
  },
];

const STATS = [
  { value: "19", suffix: "%", label: "Average policy savings" },
  { value: "50", suffix: "", label: "Active states" },
  { value: "80", suffix: "%", label: "Specialties served" },
  { value: "7", suffix: "", label: "Lines of coverage beyond MPL" },
];

function DocshieldLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V6L12 2z"
          fill="#0B3B91"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg font-semibold text-gray-900 tracking-tight">Docshield</span>
    </div>
  );
}

function DocshieldLogoWhite() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V6L12 2z"
          fill="white"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="#0B3B91"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg font-semibold text-white tracking-tight">Docshield</span>
    </div>
  );
}

function Navbar() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-4 bg-white rounded-full px-5 py-2.5 shadow-lg shadow-gray-200/60 border border-gray-100 w-full max-w-3xl">
        <DocshieldLogo />
        <div className="hidden md:flex items-center gap-4 flex-1 ml-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-0.5 text-sm text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="w-3 h-3 opacity-60" />}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <a
            href="#"
            className="hidden md:flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-gray-900 transition-colors px-3"
          >
            Log in <ArrowRight className="w-3 h-3" />
          </a>
          <a
            href="#"
            className="text-sm font-medium bg-[#0D1F5C] text-white px-5 py-2.5 rounded-full hover:bg-[#0a1a4d] transition-colors whitespace-nowrap"
          >
            Get a quote
          </a>
        </div>
      </nav>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "100svh" }}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#A5BDE5] via-[#D9E7FF] to-[#ECF3FF]" />
      {/* Blue glow blob */}
      <div
        className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-50"
        style={{
          background: "linear-gradient(180deg, #0B3B91 0%, #1E429F 50%, #A5BDE5 100%)",
          filter: "blur(120px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center pt-32 pb-0 px-4">
        <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-semibold text-white leading-[1.1] tracking-tight max-w-3xl">
          The fastest way to get malpractice insurance for less
        </h1>
        <p className="mt-5 text-white/75 text-base md:text-lg max-w-md">
          70%+ of your application pre-filled via NPI number. Shop, compare, and save today.
        </p>
        <div className="flex flex-wrap gap-3 mt-7 justify-center">
          <a
            href="#"
            className="bg-white text-gray-900 font-medium px-7 py-3.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm text-sm"
          >
            Get a Quote
          </a>
          <a
            href="#"
            className="border border-white/40 bg-white/10 backdrop-blur-sm text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/20 transition-colors text-sm"
          >
            Talk to an expert
          </a>
        </div>

        {/* Doctor image */}
        <div className="relative mt-10 mx-auto w-64 md:w-72">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&fit=crop&crop=top"
            alt="Doctor"
            className="w-full h-80 object-cover object-top rounded-t-full"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#ECF3FF] to-transparent" />
        </div>
      </div>

      {/* Trusted by bar */}
      <div className="relative z-10 w-full py-5 px-4">
        <p className="text-center text-sm text-gray-500 mb-4">
          Docshield physicians are protected by
        </p>
        <div className="flex items-center justify-center gap-10 flex-wrap px-6 opacity-40 grayscale">
          {["ProAssurance", "The Doctors Company", "NORCAL", "Coverys", "MedPro"].map((name) => (
            <span key={name} className="text-sm font-bold text-gray-700 tracking-widest uppercase text-xs">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center mb-12 tracking-tight">
          The Docshield difference
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4" style={{ scrollbarWidth: "none" }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col"
            >
              <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0B3B91] flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm leading-tight">{t.practice}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="w-full bg-white py-28 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {STATS.map((stat, i) => (
            <div key={i}>
              <div className="text-5xl md:text-6xl font-light text-gray-900 tabular-nums">
                {stat.value}
                <span className="text-3xl">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StateCoverageSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 border-t border-gray-100 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">
              Shop coverage options in
            </p>
            <div className="flex items-center gap-1 mb-4 cursor-pointer group">
              <h2 className="text-3xl font-semibold text-gray-900 group-hover:text-[#0B3B91] transition-colors">
                New York
              </h2>
              <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-[#0B3B91] transition-colors" />
            </div>
            <p className="text-gray-500 text-base max-w-xs leading-relaxed">
              Instantly see tailored malpractice quotes for your state and specialty.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="#"
                className="inline-block w-fit bg-[#0D1F5C] text-white font-medium px-6 py-3 rounded-full hover:bg-[#0a1a4d] transition-colors text-sm"
              >
                Get a Quote
              </a>
              <a href="#" className="text-sm text-[#0B3B91] hover:underline font-medium w-fit">
                Read More
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 gap-3 w-full">
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1.5">
                Standard Limits
              </p>
              <p className="text-2xl font-semibold text-gray-900">$1.3M/$3.9M</p>
              <p className="text-xs text-gray-400 mt-0.5">Per-claim / Per-year</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-2">
                Affordability Rank
              </p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-semibold text-gray-900">50</span>
                <span className="text-sm text-gray-400">th of 50 states</span>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500 border-2 border-white shadow-md" />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                <span>Affordable</span>
                <span>Expensive</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1.5">
                Average Claim Payout
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-semibold text-gray-900">$587</span>
                <span className="text-sm text-gray-400">k</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">17th highest payout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverageTypesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full overflow-hidden px-4 py-16 sm:px-10 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-x-auto pb-3" style={{ scrollbarWidth: "none" }}>
          <div className="flex gap-2 min-w-max">
            {COVERAGE_TYPES.map((type, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all whitespace-nowrap ${
                  active === i
                    ? "bg-[#0D1F5C] text-white border-[#0D1F5C]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-800"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1 w-full">
            <div
              className="relative flex items-center justify-center rounded-t-[40px] overflow-hidden"
              style={{
                minHeight: "320px",
                background: "linear-gradient(135deg, #0B3B91 0%, #1E429F 60%, #3B60C4 100%)",
              }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white" />
                <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full bg-white" />
              </div>
              <div className="text-white text-center p-10 relative z-10">
                <div className="text-5xl font-light mb-3 opacity-90">
                  {COVERAGE_TYPES[active].split(" ").map(w => w[0]).join("").slice(0,3)}
                </div>
                <div className="text-white/60 text-sm font-medium tracking-wide">
                  {COVERAGE_TYPES[active]}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
              One partner, every policy
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Your practice is unique, and so are your risks. Docshield manages your full coverage
              stack and provider roster so you can focus on your patients.
            </p>
            <a
              href="#"
              className="inline-block mt-7 bg-[#0D1F5C] text-white font-medium px-6 py-3 rounded-full hover:bg-[#0a1a4d] transition-colors text-sm"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="w-full px-4 py-20 sm:px-10 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 tracking-tight">
          Find the right coverage at the right price
        </h2>
        <p className="text-gray-400 text-lg">
          Docshield built the fast and transparent insurance shopping experience doctors deserve.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-12 text-left">
          {[
            {
              icon: "⚡",
              title: "70%+ Pre-filled",
              desc: "We index into dozens of federal, state, and private data sources to pre-populate your application — no more digging through licenses.",
            },
            {
              icon: "🔍",
              title: "Shop & Compare",
              desc: "Access multiple top-rated insurers and get unbiased recommendations — something captive agents simply can't offer.",
            },
            {
              icon: "📈",
              title: "Save Year Over Year",
              desc: "Your malpractice co-pilot watches savings compound year over year without sacrificing on coverage quality.",
            },
          ].map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-7 border border-gray-100 text-left">
              <div className="text-2xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full px-4 py-20 sm:px-10 border-t border-gray-100 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10 tracking-tight">
          Frequently asked questions
        </h2>
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-gray-900 text-sm pr-6">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCTASection() {
  return (
    <section className="w-full px-4 py-12 sm:px-10 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* 15 minutes card */}
        <div
          className="rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0B3B91 0%, #1E429F 70%, #2d52b8 100%)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, white, transparent)", transform: "translate(30%, -30%)" }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-xs font-semibold mb-5 tracking-wide uppercase">
                15 minutes or less to apply
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-3 max-w-sm leading-tight">
                No more digging through your licenses.
              </h2>
              <p className="text-white/60 text-base max-w-md">
                We index into dozens of federal, state, and private data sources to pre-populate
                70%+ of your application.
              </p>
            </div>
            <a
              href="#"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-[#0B3B91] font-semibold px-7 py-3.5 rounded-full hover:bg-gray-50 transition-colors text-sm"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Co-pilot banner */}
        <div
          className="rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)" }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <p className="text-lg font-medium text-white/80 max-w-sm leading-relaxed">
              Your malpractice co-pilot. Watch savings compound year over year without sacrificing on
              coverage quality.
            </p>
            <a
              href="#"
              className="flex items-center gap-2 text-white text-sm font-medium hover:opacity-80 transition-opacity flex-shrink-0"
            >
              Discover more <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-white px-6 py-14 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div className="sm:col-span-2 md:col-span-1">
            <DocshieldLogoWhite />
            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              Complete protection for every stage of your practice.
            </p>
            <div className="mt-5 space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                <span>(914) 820-5734</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <span>contact@docshield.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Docshield Inc, New York, NY</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-sm text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {["Why Docshield", "About Us", "Terms and Conditions", "Privacy Policy"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm text-white mb-4">Resources</h4>
            <ul className="space-y-2.5">
              {["State Resources", "State Guides", "Specialty Guides"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm text-white mb-4">Get Protected</h4>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Ready to save on malpractice insurance?
            </p>
            <a
              href="#"
              className="inline-block bg-[#0B3B91] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#0a3280] transition-colors"
            >
              Get a quote
            </a>
          </div>
        </div>

        <p className="text-gray-600 text-xs pt-6">
          © {new Date().getFullYear()} Docshield Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <StatsSection />
      <StateCoverageSection />
      <CoverageTypesSection />
      <FeaturesSection />
      <FAQSection />
      <BottomCTASection />
      <Footer />
    </main>
  );
}
