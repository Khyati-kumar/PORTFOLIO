import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import profileImage from "../Me.jpeg";

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS", "JavaScript", "Responsive UI", "Vite"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "REST APIs",
      "Authentication",
      "Database Design",
      "Java",
    ],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "VS Code", "Figma", "Postman", "Deployment"],
  },
];

const projects = [
  {
    title: "MedNexus360",
    description:
      "A premium personal brand website focused on storytelling, elegant visuals, and a clear path for recruiters and clients.",
    tags: ["React", "Tailwind", "UI Design"],
  },
  {
    title: "Project Showcase Hub",
    description:
      "A case-study driven layout for presenting featured work, technical decisions, and measurable outcomes in one place.",
    tags: ["Frontend", "Design Systems", "UX"],
  },
  {
    title: "Contact Conversion Page",
    description:
      "A polished section built to turn interest into conversations with strong calls to action, trust signals, and clean structure.",
    tags: ["Branding", "Accessibility", "Performance"],
  },
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

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((current) => !current);
  };

  const theme = isDark
    ? {
        page: "bg-slate-950 text-white selection:bg-sky-300 selection:text-slate-950",
        orbOne: "bg-cyan-400/20",
        orbTwo: "bg-fuchsia-500/15",
        orbThree: "bg-amber-400/10",
        pill: "border-sky-400/20 bg-sky-400/10 text-sky-200",
        dot: "bg-sky-300",
        eyebrow: "text-slate-400",
        title: "text-white",
        body: "text-slate-300",
        primaryButton:
          "bg-white text-slate-950 hover:-translate-y-0.5 hover:bg-sky-100",
        secondaryButton:
          "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10",
        statCard: "border-white/10 bg-white/5",
        imageGlow: "from-sky-400/20 via-cyan-300/10 to-transparent",
        imageWrap: "border-white/10 bg-white/5",
        imagePanel: "from-slate-900 via-slate-800 to-slate-950",
        focusPanel: "border-white/10 bg-slate-900/70",
        focusLabel: "text-slate-400",
        focusBadge: "bg-emerald-400/15 text-emerald-300",
        sectionCard: "border-white/10 bg-white/5",
        sectionCardStrong: "border-white/10 bg-slate-900/70",
        sectionCardAccent:
          "border-white/10 bg-gradient-to-br from-sky-500/15 to-cyan-400/5",
        sectionLead: "text-slate-400",
        chip: "border-white/10 bg-slate-900/80 text-slate-200",
        projectCard:
          "border-white/10 bg-slate-900/80 hover:-translate-y-1 hover:border-sky-300/30",
        projectVisual: "from-sky-400/25 via-cyan-200/10 to-fuchsia-400/20",
        projectInner: "border-white/10 bg-black/20",
        projectMeta: "text-slate-200",
        projectBadge: "bg-white/10 text-white",
        tag: "bg-white/5 text-sky-200",
        contactWrap:
          "border-white/10 bg-gradient-to-br from-sky-400/15 via-slate-900 to-slate-950",
        contactCard: "border-white/10 bg-white/10 text-white hover:bg-white/15",
        contactCardAlt:
          "border-white/10 bg-white/5 text-white hover:bg-white/10",
      }
    : {
        page: "bg-slate-100 text-slate-950 selection:bg-slate-950 selection:text-white",
        orbOne: "bg-sky-300/30",
        orbTwo: "bg-fuchsia-300/20",
        orbThree: "bg-amber-300/20",
        pill: "border-sky-500/20 bg-sky-500/10 text-sky-700",
        dot: "bg-sky-600",
        eyebrow: "text-slate-500",
        title: "text-slate-950",
        body: "text-slate-700",
        primaryButton:
          "bg-slate-950 text-white hover:-translate-y-0.5 hover:bg-slate-800",
        secondaryButton:
          "border border-slate-300 bg-white/70 text-slate-900 hover:border-slate-400 hover:bg-white",
        statCard: "border-slate-200 bg-white/80",
        imageGlow: "from-sky-300/30 via-cyan-200/20 to-transparent",
        imageWrap: "border-slate-200 bg-white/80",
        imagePanel: "from-slate-200 via-white to-slate-100",
        focusPanel: "border-slate-200 bg-white/85",
        focusLabel: "text-slate-500",
        focusBadge: "bg-emerald-100 text-emerald-700",
        sectionCard: "border-slate-200 bg-white/80",
        sectionCardStrong: "border-slate-200 bg-white/90",
        sectionCardAccent:
          "border-slate-200 bg-gradient-to-br from-sky-100 to-cyan-50",
        sectionLead: "text-slate-600",
        chip: "border-slate-200 bg-slate-100 text-slate-700",
        projectCard:
          "border-slate-200 bg-white/85 hover:-translate-y-1 hover:border-sky-400/40",
        projectVisual: "from-sky-200/80 via-cyan-100/80 to-fuchsia-100/70",
        projectInner: "border-slate-200 bg-white/50",
        projectMeta: "text-slate-700",
        projectBadge: "bg-slate-900 text-white",
        tag: "bg-slate-100 text-sky-700",
        contactWrap:
          "border-slate-200 bg-gradient-to-br from-sky-100 via-white to-slate-100",
        contactCard:
          "border-slate-200 bg-white/90 text-slate-900 hover:bg-white",
        contactCardAlt:
          "border-slate-200 bg-white/75 text-slate-900 hover:bg-white",
      };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${theme.page}`}
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className={`absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full blur-3xl ${theme.orbOne}`}
        />
        <div
          className={`absolute right-[-6rem] top-40 h-80 w-80 rounded-full blur-3xl ${theme.orbTwo}`}
        />
        <div
          className={`absolute bottom-0 left-1/3 h-72 w-72 rounded-full blur-3xl ${theme.orbThree}`}
        />
      </div>

      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        profileImage={profileImage}
      />

      <main className="relative pt-28">
        <section id="home" className="px-6 pb-20 pt-10 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-md">
              <div
                className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br blur-3xl ${theme.imageGlow}`}
              />
              <div
                className={`relative overflow-hidden rounded-[2.5rem] border p-4 shadow-2xl backdrop-blur-xl ${theme.imageWrap}`}
              >
                <div
                  className={`rounded-[2rem] bg-gradient-to-br p-4 ${theme.imagePanel}`}
                >
                  <img
                    src={profileImage}
                    alt="Maruvada Khyati Kumar portrait"
                    className="h-[520px] w-full rounded-[1.6rem] object-cover object-top"
                  />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div
                    className={`rounded-[1.5rem] border p-4 ${theme.focusPanel}`}
                  >
                    <p className={`text-sm ${theme.focusLabel}`}>Role</p>
                    <p className={`mt-2 text-lg font-semibold ${theme.title}`}>
                      Frontend Developer
                    </p>
                  </div>
                  <div
                    className={`rounded-[1.5rem] border p-4 ${theme.focusPanel}`}
                  >
                    <p className={`text-sm ${theme.focusLabel}`}>Status</p>
                    <div
                      className={`mt-2 inline-flex rounded-2xl px-3 py-2 text-sm font-semibold ${theme.focusBadge}`}
                    >
                      Available for projects
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${theme.pill}`}
              >
                <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
                About me
              </div>

              <div className="space-y-5">
                <p
                  className={`text-sm uppercase tracking-[0.4em] ${theme.eyebrow}`}
                >
                  Maruvada Khyati Kumar
                </p>
                <h2
                  className={`max-w-3xl text-4xl font-black leading-tight sm:text-5xl ${theme.title}`}
                >
                  I design and build portfolio experiences that feel stylish,
                  modern, and deeply personal.
                </h2>
                <p className={`max-w-2xl text-lg leading-8 ${theme.body}`}>
                  I enjoy turning ideas into polished interfaces with clean
                  structure, rich visuals, and thoughtful details. My goal is to
                  create web experiences that instantly feel professional and
                  memorable.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className={`rounded-full px-6 py-3.5 text-sm font-bold transition duration-200 ${theme.primaryButton}`}
                >
                  Explore My Work
                </a>
                <a
                  href="#contact"
                  className={`rounded-full px-6 py-3.5 text-sm font-semibold transition duration-200 ${theme.secondaryButton}`}
                >
                  Hire Me
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-3xl border p-5 backdrop-blur-sm ${theme.statCard}`}
                  >
                    <p className={`text-3xl font-black ${theme.title}`}>
                      {item.value}
                    </p>
                    <p className={`mt-2 text-sm ${theme.body}`}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div
              className={`rounded-[2rem] border p-8 backdrop-blur-sm ${theme.sectionCardAccent}`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
                My Approach
              </p>
              <h2
                className={`mt-4 text-3xl font-black sm:text-4xl ${theme.title}`}
              >
                The second screen now supports the story instead of repeating
                the hero.
              </h2>
              <p className={`mt-5 text-base leading-8 ${theme.body}`}>
                This section gives your portfolio a smoother flow after the main
                landing header. It introduces your personality, your working
                style, and the value behind the visuals.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div
                className={`rounded-[2rem] border p-8 ${theme.sectionCardStrong}`}
              >
                <p className={`text-base leading-8 ${theme.body}`}>
                  I like interfaces that feel elegant at first glance and stay
                  clear as people explore deeper. Every block, image, and CTA
                  should feel connected to a strong personal brand.
                </p>
              </div>
              <div className={`rounded-[2rem] border p-8 ${theme.sectionCard}`}>
                <p className={`text-base leading-8 ${theme.body}`}>
                  My portfolio style combines visual confidence with readable
                  structure, making it easier to showcase projects, skills, and
                  ambition in one cohesive experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
                  Skills
                </p>
                <h2
                  className={`mt-3 text-3xl font-black sm:text-4xl ${theme.title}`}
                >
                  Tools and strengths that shape my work
                </h2>
              </div>
              <p
                className={`max-w-xl text-base leading-7 ${theme.sectionLead}`}
              >
                I enjoy combining technical execution with a strong visual sense
                so every project feels refined from both a code and design
                perspective.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className={`rounded-[2rem] border p-7 backdrop-blur-sm ${theme.sectionCard}`}
                >
                  <h3 className={`text-xl font-bold ${theme.title}`}>
                    {group.title}
                  </h3>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full border px-4 py-2 text-sm font-medium ${theme.chip}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
                Projects
              </p>
              <h2
                className={`mt-3 text-3xl font-black sm:text-4xl ${theme.title}`}
              >
                Featured work presented like case studies
              </h2>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={`group overflow-hidden rounded-[2rem] border transition duration-300 ${theme.projectCard}`}
                >
                  <div
                    className={`h-48 bg-gradient-to-br p-6 ${theme.projectVisual}`}
                  >
                    <div
                      className={`flex h-full items-end justify-between rounded-[1.5rem] border p-5 ${theme.projectInner}`}
                    >
                      <p
                        className={`text-sm font-semibold uppercase tracking-[0.25em] ${theme.projectMeta}`}
                      >
                        Project 0{index + 1}
                      </p>
                      <div
                        className={`rounded-full px-3 py-1 text-xs font-medium ${theme.projectBadge}`}
                      >
                        Tailwind layout
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5 p-7">
                    <h3 className={`text-2xl font-bold ${theme.title}`}>
                      {project.title}
                    </h3>
                    <p className={`leading-7 ${theme.body}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] ${theme.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
                Experience
              </p>
              <h2
                className={`mt-3 text-3xl font-black sm:text-4xl ${theme.title}`}
              >
                Growth, consistency, and real momentum
              </h2>
            </div>

            <div className="grid gap-6">
              {experiences.map((item) => (
                <div
                  key={item.title}
                  className={`grid gap-4 rounded-[2rem] border p-7 md:grid-cols-[180px_1fr] ${theme.sectionCard}`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                    {item.period}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${theme.title}`}>
                      {item.title}
                    </h3>
                    <p className={`mt-3 max-w-3xl leading-7 ${theme.body}`}>
                      {item.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24 pt-20 sm:px-8 lg:px-12">
          <div
            className={`mx-auto max-w-7xl rounded-[2.5rem] border p-8 shadow-2xl sm:p-12 ${theme.contactWrap}`}
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
                  Contact
                </p>
                <h2
                  className={`mt-3 text-3xl font-black sm:text-5xl ${theme.title}`}
                >
                  Let&apos;s build something polished and memorable.
                </h2>
                <p className={`mt-5 max-w-2xl text-lg leading-8 ${theme.body}`}>
                  If you are looking for a clean portfolio, a polished frontend,
                  or a fresh visual direction for your next project, I would
                  love to connect.
                </p>
              </div>

              <div className="grid gap-4">
                <a
                  href=" anuradhamaruvada@gmail.com"
                  className={`rounded-[1.5rem] border px-6 py-5 text-base font-semibold transition duration-200 ${theme.contactCard}`}
                >
                  anuradhamaruvada@gmail.com
                </a>
                <a
                  href="https://github.com/Khyati-kumar"
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-[1.5rem] border px-6 py-5 text-base font-semibold transition duration-200 ${theme.contactCardAlt}`}
                >
                  GitHub Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/khyatikumarmaruvada"
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-[1.5rem] border px-6 py-5 text-base font-semibold transition duration-200 ${theme.contactCardAlt}`}
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
