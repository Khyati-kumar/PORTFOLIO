import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import profileImage from "../../Me.jpeg";

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "Now", label: "Available" },
  { value: "MERN", label: "Core Stack" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khyatikumarmaruvada",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/Khyati-kumar",
    icon: Github,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/khyati.kumar",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "mailto:anuradhamaruvada@gmail.com",
    icon: Mail,
  },
];

const Hero = ({ isDark }) => {
  const theme = isDark
    ? {
        section: "bg-[#071a1f] text-white",
        grid: "bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)]",
        radial:
          "bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_26%)]",
        glow: "bg-cyan-400/20",
        imageRing:
          "border-cyan-400/90 shadow-[0_0_40px_rgba(34,211,238,0.35)]",
        badge: "border-cyan-400/20 bg-[#0d262d] text-cyan-300",
        accent: "text-cyan-400",
        body: "text-slate-200",
        strong: "text-white",
        stat:
          "border-white/10 bg-white/6 hover:border-cyan-400/30 hover:bg-white/10",
        statLabel: "text-slate-300",
        social:
          "border-white/10 bg-white/6 text-slate-100 hover:border-cyan-400/30 hover:bg-white/10 hover:text-cyan-300",
        primary:
          "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
        secondary:
          "border-cyan-400/70 text-cyan-300 hover:bg-cyan-400/10",
      }
    : {
        section: "bg-white text-slate-950",
        grid: "bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)]",
        radial:
          "bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_28%)]",
        glow: "bg-sky-300/30",
        imageRing:
          "border-sky-400 shadow-[0_0_40px_rgba(14,165,233,0.18)]",
        badge: "border-sky-200 bg-sky-50 text-sky-700",
        accent: "text-sky-600",
        body: "text-slate-600",
        strong: "text-slate-950",
        stat:
          "border-slate-200 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.06)] hover:border-sky-300 hover:bg-sky-50",
        statLabel: "text-slate-500",
        social:
          "border-slate-200 bg-white text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)] hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700",
        primary: "bg-slate-950 text-white hover:bg-slate-800",
        secondary:
          "border-slate-200 text-slate-900 hover:border-sky-300 hover:bg-sky-50",
      };

  return (
    <section
      id="home"
      className={`relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12 transition-colors duration-300 sm:px-6 ${theme.section}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className={`absolute inset-0 ${theme.grid} bg-[size:38px_38px]`} />
        <div className={`absolute inset-0 ${theme.radial}`} />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center">
        <div className="relative">
          <div className={`absolute inset-0 rounded-full blur-2xl ${theme.glow}`} />
          <div
            className={`relative rounded-full border-4 p-1 ${theme.imageRing}`}
          >
            <img
              src={profileImage}
              alt="Khyati Kumar"
              className="h-44 w-44 rounded-full object-cover object-top sm:h-52 sm:w-52"
            />
          </div>
        </div>

        <div
          className={`mt-8 inline-flex rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.18em] sm:text-sm ${theme.badge}`}
        >
          Mern Stack Developer
        </div>

        <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
          Hi, I&apos;m <span className={theme.accent}>Khyati Kumar</span>
        </h1>

        <p className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${theme.body}`}>
          I build scalable web applications with clean code and modern tools.
          Passionate about <strong className={`font-semibold ${theme.strong}`}>React</strong>,
          <strong className={`font-semibold ${theme.strong}`}> Node.js</strong>, and
          <strong className={`font-semibold ${theme.strong}`}> MongoDB</strong>, while
          exploring applied machine learning for intelligent features.
        </p>

        <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl border px-5 py-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 ${theme.stat}`}
            >
              <p className="text-3xl font-black">{stat.value}</p>
              <p
                className={`mt-2 text-sm font-medium uppercase tracking-[0.18em] ${theme.statLabel}`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={item.name}
                className={`rounded-full border p-3 transition duration-300 hover:-translate-y-1 ${theme.social}`}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className={`rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 ${theme.primary}`}
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className={`rounded-full border px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 ${theme.secondary}`}
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
