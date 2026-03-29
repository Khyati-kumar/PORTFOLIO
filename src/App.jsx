import { useEffect, useState } from "react";
import {
  Atom,
  Braces,
  Code2,
  Database,
  FileJson,
  FileCode2,
  Globe,
  GitBranch,
  Layers3,
  Palette,
  ShieldCheck,
  Server,
  Sparkles,
  Smartphone,
  TestTube2,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import profileImage from "../Me.jpeg";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: FileCode2,
    items: [
      { name: "Java", icon: Braces },
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: FileJson },
      { name: "Python", icon: Code2 },
      { name: "C", icon: Braces },
    ],
  },
  {
    title: "Frontend Development",
    icon: Layers3,
    items: [
      { name: "React.js", icon: Atom },
      { name: "HTML5", icon: Code2 },
      { name: "CSS3", icon: Palette },
      { name: "Tailwind CSS", icon: Sparkles },
      { name: "Bootstrap", icon: Layers3 },
      { name: "Redux", icon: Layers3 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    items: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "MongoDB", icon: Database },
      { name: "REST APIs", icon: Globe },
      { name: "Authentication", icon: ShieldCheck },
    ],
  },
  {
    title: "Database & APIs",
    icon: Database,
    items: [
      { name: "MongoDB", icon: Database },
      { name: "REST APIs", icon: Globe },
      { name: "Authentication", icon: ShieldCheck },
      { name: "Postman", icon: TestTube2 },
    ],
  },
  {
    title: "Tools",
    icon: Globe,
    items: [
      { name: "Postman", icon: Smartphone },
      { name: "GitHub", icon: ShieldCheck },
      { name: "Git", icon: GitBranch },
      { name: "VS Code", icon: FileCode2 },
    ],
  },
  
];

const projects = [
  {
    title: "MedNexus360",
    description:
      "A premium personal brand website focused on storytelling, elegant visuals, and a clear path for recruiters and clients.",
    tags: ["React", "Tailwind", "UI Design","Node.js","MongoDB","Express.js"],
  }
];

const experiences = [
  {
    period: "2025 - Present",
    title: "Portfolio & Personal Brand Development",
    summary:
      "Designing and refining a modern portfolio that highlights technical strengths, creativity, and a strong visual identity.",
  },
  {
    period: "2024 - 2025",
    title: "Frontend Practice & UI Exploration",
    summary:
      "Built responsive interfaces, experimented with component-based design, and improved confidence in clean, reusable React code.",
  },
  {
    period: "Ongoing",
    title: "Continuous Learning",
    summary:
      "Sharpening problem-solving, building projects consistently, and learning how to craft websites that feel both useful and memorable.",
  },
];

const highlights = [
  { value: "10+", label: "UI concepts explored" },
  { value: "12+", label: "design ideas refined" },
  { value: "100%", label: "focus on clean design" },
];

const theme = {
  dark: {
    page: "bg-[#071a1f] text-white",
    grid: "bg-[linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.06)_1px,transparent_1px)]",
    title: "text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300",
    heading: "mt-3 text-3xl font-black text-white sm:text-4xl",
    body: "text-slate-300",
    panel:
      "rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md shadow-[0_16px_50px_rgba(0,0,0,0.28)] sm:rounded-[2rem] sm:p-8",
    about:
      "rounded-[1.75rem] border border-cyan-400/20 bg-[linear-gradient(145deg,rgba(34,211,238,0.12),rgba(8,20,24,0.92),rgba(7,26,31,0.98))] p-6 sm:rounded-[2rem] sm:p-8",
    aboutText: "mt-5 text-base leading-8 text-slate-200",
    highlightSub: "mt-2 text-sm text-slate-300",
    skillCard:
      "rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 text-center shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:rounded-[1.5rem] sm:p-5 sm:text-left",
    skillIconWrap: "bg-cyan-400/12 text-cyan-300 ring-1 ring-cyan-300/15",
    skillText: "text-slate-300",
    skillChip:
      "rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-3 text-xs font-semibold text-cyan-100",
    skillChipIcon: "bg-cyan-400/14 text-cyan-300",
    projectsCard:
      "overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:rounded-[2rem]",
    projectMedia:
      "h-40 bg-[linear-gradient(145deg,rgba(34,211,238,0.18),rgba(7,26,31,0.65),rgba(0,0,0,0.92))] p-4 sm:h-48 sm:p-6",
    projectInner: "border-white/10 bg-black/20",
    projectMeta: "text-slate-200",
    projectBadge: "bg-white/10 text-white",
    contact:
      "rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(8,20,24,0.94),rgba(0,0,0,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:rounded-[2.5rem] sm:p-12",
    contactButtonPrimary:
      "rounded-[1.5rem] border border-white/10 bg-white/10 px-6 py-5 text-base font-semibold text-white transition duration-200 hover:bg-white/15",
    contactButtonSecondary:
      "rounded-[1.5rem] border border-white/10 bg-white/5 px-6 py-5 text-base font-semibold text-white transition duration-200 hover:bg-white/10",
    ctaPrimary:
      "inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300",
    ctaSecondary:
      "inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10",
  },
  light: {
    page: "bg-white text-slate-900",
    grid: "bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)]",
    title:
      "text-xs font-semibold uppercase tracking-[0.3em] text-sky-700",
    heading: "mt-3 text-3xl font-black text-slate-950 sm:text-4xl",
    body: "text-slate-600",
    panel:
      "rounded-[1.75rem] border border-slate-200 bg-white p-6 backdrop-blur-md shadow-[0_16px_45px_rgba(15,23,42,0.08)] sm:rounded-[2rem] sm:p-8",
    about:
      "rounded-[1.75rem] border border-sky-200 bg-[linear-gradient(145deg,#f0f9ff,#ffffff,#f8fafc)] p-6 sm:rounded-[2rem] sm:p-8",
    aboutText: "mt-5 text-base leading-8 text-slate-600",
    highlightSub: "mt-2 text-sm text-slate-500",
    skillCard:
      "rounded-[1.4rem] border border-slate-200 bg-white p-4 text-center shadow-[0_16px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_38px_rgba(14,165,233,0.12)] sm:rounded-[1.5rem] sm:p-5 sm:text-left",
    skillIconWrap: "bg-sky-100 text-sky-700 ring-1 ring-sky-200",
    skillText: "text-slate-600",
    skillChip:
      "rounded-2xl border border-sky-200 bg-sky-50 px-3 py-3 text-xs font-semibold text-sky-800",
    skillChipIcon: "bg-white text-sky-700",
    projectsCard:
      "overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_42px_rgba(15,23,42,0.08)] sm:rounded-[2rem]",
    projectMedia:
      "h-40 bg-[linear-gradient(145deg,#e0f2fe,#f8fafc,#ffffff)] p-4 sm:h-48 sm:p-6",
    projectInner: "border-slate-200 bg-white/70",
    projectMeta: "text-slate-600",
    projectBadge: "bg-slate-900 text-white",
    contact:
      "rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#f0f9ff,#ffffff,#f8fafc)] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:rounded-[2.5rem] sm:p-12",
    contactButtonPrimary:
      "rounded-[1.5rem] border border-slate-200 bg-white px-6 py-5 text-base font-semibold text-slate-900 transition duration-200 hover:border-sky-300 hover:bg-sky-50",
    contactButtonSecondary:
      "rounded-[1.5rem] border border-slate-200 bg-slate-50 px-6 py-5 text-base font-semibold text-slate-900 transition duration-200 hover:border-sky-300 hover:bg-sky-50",
    ctaPrimary:
      "inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-800",
    ctaSecondary:
      "inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-sky-50",
  },
};

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    const savedTheme = window.localStorage.getItem("portfolio-theme");

    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    document.body.className = isDark ? "bg-[#071a1f]" : "bg-white";
  }, [isDark]);

  const mode = isDark ? theme.dark : theme.light;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${mode.page}`}>
      <Navbar
        isDark={isDark}
        onToggleTheme={() => setIsDark((current) => !current)}
        profileImage={profileImage}
      />
      <Hero isDark={isDark} />

      <main className="relative overflow-hidden px-4 pb-20 sm:px-6 lg:px-12">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className={`absolute inset-0 ${mode.grid} bg-[size:42px_42px]`} />
        </div>

        <div className="relative mx-auto max-w-7xl space-y-16 sm:space-y-20">
          <section
            id="about"
            className="scroll-mt-28 grid gap-6 lg:grid-cols-[1fr_1fr]"
          >
            <div className={mode.about}>
              <p className={mode.title}>My Approach</p>
              <h2 className={mode.heading}>
                The rest of the portfolio now supports the same refined energy
                as the hero.
              </h2>
              <p className={mode.aboutText}>
                I care about interfaces that feel modern at first glance and
                stay clear as people explore deeper. Every section should
                strengthen the story, not distract from it.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className={mode.panel}>
                <p className={`text-base leading-8 ${mode.body}`}>
                  I enjoy blending strong frontend execution with thoughtful
                  visual direction so every portfolio section feels cohesive,
                  readable, and polished.
                </p>
              </div>
              <div className={mode.panel}>
                <p className={`text-base leading-8 ${mode.body}`}>
                  This layout brings back your important content while preserving
                  the cleaner hero-first style you liked in the current design.
                </p>
              </div>
            </div>
          </section>

          <section id="highlights" className="scroll-mt-28">
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className={mode.panel}>
                  <p className="text-3xl font-black">{item.value}</p>
                  <p className={mode.highlightSub}>{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="scroll-mt-28">
            <div className="mb-10 text-center">
              <p className={mode.title}>Skills</p>
              <h2 className={mode.heading}>
                Tools and strengths that shape my work
              </h2>
              <p className={`mx-auto mt-4 max-w-2xl text-base leading-7 ${mode.body}`}>
                Practical skills built through projects, exploration, and steady
                improvement across the stack.
              </p>
            </div>

            <div className="mb-6 flex justify-center sm:mb-8">
              <a href="#projects" className={mode.ctaPrimary}>
                View Projects
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">
              {skillGroups.map((group) => {
                const Icon = group.icon || Code2;

                return (
                  <article key={group.title} className={mode.skillCard}>
                    <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.35rem] ${mode.skillIconWrap} sm:h-12 sm:w-12 sm:rounded-2xl`}
                      >
                        <Icon className="h-6 w-6 sm:h-6 sm:w-6" />
                      </div>
                      <div className="w-full">
                        <h3 className="text-base font-black leading-tight sm:text-xl">
                          {group.title}
                        </h3>
                        <p
                          className={`mt-2 hidden text-sm leading-6 sm:block ${mode.skillText}`}
                        >
                          Mobile-first, practical skills I use while building
                          modern web experiences.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:grid-cols-2 sm:gap-2.5">
                      {group.items.slice(0, 4).map((item) => {
                        const SkillIcon = item.icon || Code2;

                        return (
                          <div
                            key={item.name}
                            className={`${mode.skillChip} flex items-center gap-2.5 text-left`}
                          >
                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${mode.skillChipIcon}`}
                            >
                              <SkillIcon className="h-4 w-4" />
                            </span>
                            <span className="leading-snug">{item.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section id="projects" className="scroll-mt-28">
            <div className="mb-10">
              <p className={mode.title}>Projects</p>
              <h2 className={mode.heading}>
                Featured work presented like case studies
              </h2>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              {projects.map((project, index) => (
                <article key={project.title} className={mode.projectsCard}>
                  <div className={mode.projectMedia}>
                    <div
                      className={`flex h-full items-end justify-between rounded-[1.35rem] border p-5 ${mode.projectInner}`}
                    >
                      <p
                        className={`text-sm font-semibold uppercase tracking-[0.25em] ${mode.projectMeta}`}
                      >
                        Project 0{index + 1}
                      </p>
                      <div
                        className={`rounded-full px-3 py-1 text-xs font-medium ${mode.projectBadge}`}
                      >
                        Tailwind layout
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 p-5 sm:space-y-5 sm:p-7">
                    <h3 className="text-xl font-bold sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className={`leading-7 ${mode.body}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className={mode.skillChip}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="scroll-mt-28">
            <div className="mb-10">
              <p className={mode.title}>Experience</p>
              <h2 className={mode.heading}>
                Growth, consistency, and real momentum
              </h2>
            </div>

            <div className="grid gap-6">
              {experiences.map((item) => (
                <div
                  key={item.title}
                  className={`${mode.panel} grid gap-4 md:grid-cols-[180px_1fr]`}
                >
                  <div className={mode.title}>{item.period}</div>
                  <div>
                    <h3 className="text-xl font-bold sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className={`mt-3 max-w-3xl leading-7 ${mode.body}`}>
                      {item.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-28">
            <div className={mode.contact}>
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className={mode.title}>Contact</p>
                  <h2 className={mode.heading}>
                    Let&apos;s build something polished and memorable.
                  </h2>
                  <p className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${mode.body}`}>
                    If you are looking for a clean portfolio, a polished
                    frontend, or a fresh visual direction for your next project,
                    I would love to connect.
                  </p>
                </div>

                <div className="grid gap-4">
                  <a
                    href="mailto:anuradhamaruvada@gmail.com"
                    className={mode.contactButtonPrimary}
                  >
                    anuradhamaruvada@gmail.com
                  </a>
                  <a
                    href="https://github.com/Khyati-kumar"
                    target="_blank"
                    rel="noreferrer"
                    className={mode.contactButtonSecondary}
                  >
                    GitHub Profile
                  </a>
                  <a
                    href="https://www.linkedin.com/in/khyatikumarmaruvada"
                    target="_blank"
                    rel="noreferrer"
                    className={mode.contactButtonSecondary}
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
