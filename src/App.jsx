import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import profileImage from "../Me.jpeg";

const skillGroups = [
  {
    title: "Programming Languages",
    items: [
      {
        name: "Java",
        icon: "https://skillicons.dev/icons?i=java",
      },
      {
        name: "JavaScript",
        icon: "https://skillicons.dev/icons?i=javascript",
      },
      {
        name: "TypeScript",
        icon: "https://skillicons.dev/icons?i=typescript",
      },
      {
        name: "Python",
        icon: "https://skillicons.dev/icons?i=python",
      },
      {
        name: "C",
        icon: "https://cdn.simpleicons.org/c/A8B9CC",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        name: "React.js",
        icon: "https://skillicons.dev/icons?i=react",
      },
      {
        name: "HTML5",
        icon: "https://skillicons.dev/icons?i=html",
      },
      {
        name: "CSS3",
        icon: "https://skillicons.dev/icons?i=css",
      },
      {
        name: "Tailwind CSS",
        icon: "https://skillicons.dev/icons?i=tailwind",
      },
      {
        name: "Bootstrap",
        icon: "https://skillicons.dev/icons?i=bootstrap",
      },
      {
        name: "Redux",
        icon: "https://skillicons.dev/icons?i=redux",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        name: "Node.js",
        icon: "https://skillicons.dev/icons?i=nodejs",
      },
      {
        name: "Express.js",
        icon: "https://skillicons.dev/icons?i=express",
      },
      {
        name: "Flask",
        icon: "https://skillicons.dev/icons?i=flask",
      },
    ],
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
          page: "bg-[#000000] text-white selection:bg-white selection:text-black",
          mesh: "bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.05),_transparent_22%),linear-gradient(180deg,_#000000_0%,_#000000_58%,_#050505_100%)]",
          orbOne: "bg-white/8",
          orbTwo: "bg-white/6",
          orbThree: "bg-white/5",
          pill: "border-white/15 bg-white/6 text-white",
          dot: "bg-white",
          eyebrow: "text-white/70",
          title: "text-white",
          body: "text-white/80",
          primaryButton:
            "bg-white text-black hover:-translate-y-0.5 hover:bg-neutral-200",
          secondaryButton:
            "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10",
          statCard:
            "border-white/10 bg-white/[0.04] shadow-[0_18px_60px_rgba(0,0,0,0.45)]",
          imageGlow: "from-white/10 via-white/5 to-transparent",
          imageWrap:
            "border-white/10 bg-white/[0.04] shadow-[0_30px_80px_rgba(0,0,0,0.85)]",
          imagePanel: "from-neutral-900 via-black to-black",
          focusPanel: "border-white/10 bg-black/40",
          focusLabel: "text-white/70",
          focusBadge: "bg-white/10 text-white",
          sectionCard:
            "border-white/10 bg-white/[0.04] shadow-[0_20px_70px_rgba(0,0,0,0.55)]",
          sectionCardStrong:
            "border-white/10 bg-[linear-gradient(180deg,rgba(20,20,20,0.9),rgba(0,0,0,0.96))]",
          sectionCardAccent:
            "border-white/10 bg-[linear-gradient(145deg,rgba(28,28,28,0.92),rgba(10,10,10,0.96),rgba(0,0,0,0.98))]",
          sectionLead: "text-white/75",
          sectionLabel: "text-white",
          skillCount: "border-white/15 bg-white/6 text-white",
          skillCard: "border-white/10 bg-[#050505]/95",
          skillIconWrap:
            "border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(255,255,255,0.08)]",
          skillBody: "text-white/75",
          projectCard:
            "border-white/10 bg-black/80 hover:-translate-y-1 hover:border-white/25",
          projectVisual: "from-white/12 via-white/6 to-black",
          projectInner: "border-white/10 bg-black/20",
          projectMeta: "text-white/80",
          projectBadge: "bg-white/10 text-white",
          tag: "bg-white/5 text-white",
          contactWrap:
            "border-white/10 bg-[linear-gradient(135deg,rgba(28,28,28,0.92),rgba(10,10,10,0.96),rgba(0,0,0,0.99))]",
          contactCard: "border-white/10 bg-white/10 text-white hover:bg-white/15",
          contactCardAlt:
            "border-white/10 bg-white/5 text-white hover:bg-white/10",
        }
      : {
          page: "bg-white text-black selection:bg-black selection:text-white",
          mesh: "bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.05),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(0,0,0,0.04),_transparent_22%),linear-gradient(180deg,_#ffffff_0%,_#ffffff_55%,_#f5f5f5_100%)]",
          orbOne: "bg-black/6",
          orbTwo: "bg-black/5",
          orbThree: "bg-black/4",
          pill: "border-black/10 bg-black/5 text-black",
          dot: "bg-black",
          eyebrow: "text-neutral-500",
          title: "text-black",
          body: "text-neutral-700",
          primaryButton:
            "bg-black text-white hover:-translate-y-0.5 hover:bg-neutral-800",
          secondaryButton:
            "border border-black/10 bg-white text-black hover:border-black/20 hover:bg-neutral-50",
          statCard:
            "border-black/10 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)]",
          imageGlow: "from-black/10 via-black/5 to-transparent",
          imageWrap:
            "border-black/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.1)]",
          imagePanel: "from-neutral-100 via-white to-neutral-50",
          focusPanel: "border-black/10 bg-white",
          focusLabel: "text-neutral-500",
          focusBadge: "bg-black text-white",
          sectionCard:
            "border-black/10 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)]",
          sectionCardStrong:
            "border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(245,245,245,0.96))]",
          sectionCardAccent:
            "border-black/10 bg-[linear-gradient(145deg,rgba(250,250,250,1),rgba(255,255,255,1),rgba(240,240,240,0.95))]",
          sectionLead: "text-neutral-600",
          sectionLabel: "text-black",
          skillCount: "border-black/10 bg-black/5 text-black",
          skillCard: "border-black/10 bg-white",
          skillIconWrap:
            "border-black/10 bg-neutral-50 shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
          skillBody: "text-neutral-500",
          projectCard:
            "border-black/10 bg-white hover:-translate-y-1 hover:border-black/20",
          projectVisual: "from-black/8 via-black/4 to-white",
          projectInner: "border-black/10 bg-white/70",
          projectMeta: "text-neutral-700",
          projectBadge: "bg-black text-white",
          tag: "bg-black/5 text-neutral-700",
          contactWrap:
            "border-black/10 bg-[linear-gradient(135deg,rgba(250,250,250,1),rgba(255,255,255,1),rgba(242,242,242,0.98))]",
          contactCard: "border-black/10 bg-white text-black hover:bg-neutral-50",
          contactCardAlt:
            "border-black/10 bg-white text-black hover:bg-neutral-50",
        };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme.page}`}>
      <div className={`fixed inset-0 ${theme.mesh}`} />
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

      <main className="relative pt-24 sm:pt-28">
        <section id="home" className="px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div className="order-1 relative mx-auto w-full max-w-sm sm:max-w-md">
              <div
                className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br blur-3xl ${theme.imageGlow}`}
              />
              <div
                className={`relative overflow-hidden rounded-[2rem] border p-3 shadow-2xl backdrop-blur-xl sm:rounded-[2.5rem] sm:p-4 ${theme.imageWrap}`}
              >
                <div
                  className={`rounded-[1.6rem] bg-gradient-to-br p-3 sm:rounded-[2rem] sm:p-4 ${theme.imagePanel}`}
                >
                  <img
                    src={profileImage}
                    alt="Maruvada Khyati Kumar portrait"
                    className="h-[360px] w-full rounded-[1.25rem] object-cover object-top sm:h-[520px] sm:rounded-[1.6rem]"
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

            <div className="order-2 space-y-6 text-center sm:space-y-8 lg:text-left">
              <div
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium sm:text-sm ${theme.pill}`}
              >
                <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
                About me
              </div>

              <div className="space-y-5">
                <p
                  className={`text-xs uppercase tracking-[0.35em] sm:text-sm sm:tracking-[0.4em] ${theme.eyebrow}`}
                >
                  Maruvada Khyati Kumar
                </p>
                <h2
                  className={`mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-5xl lg:mx-0 ${theme.title}`}
                >
                  I design and build portfolio experiences that feel stylish,
                  modern, and deeply personal.
                </h2>
                <p className={`mx-auto max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 lg:mx-0 ${theme.body}`}>
                  I enjoy turning ideas into polished interfaces with clean
                  structure, rich visuals, and thoughtful details. My goal is to
                  create web experiences that instantly feel professional and
                  memorable.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
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

              <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-3xl border p-4 backdrop-blur-sm sm:p-5 ${theme.statCard}`}
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

        <section id="about" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-6 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div
              className={`rounded-[1.75rem] border p-6 backdrop-blur-sm sm:rounded-[2rem] sm:p-8 ${theme.sectionCardAccent}`}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.35em] ${theme.sectionLabel}`}
              >
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
                className={`rounded-[1.75rem] border p-6 sm:rounded-[2rem] sm:p-8 ${theme.sectionCardStrong}`}
              >
                <p className={`text-base leading-8 ${theme.body}`}>
                  I like interfaces that feel elegant at first glance and stay
                  clear as people explore deeper. Every block, image, and CTA
                  should feel connected to a strong personal brand.
                </p>
              </div>
              <div className={`rounded-[1.75rem] border p-6 sm:rounded-[2rem] sm:p-8 ${theme.sectionCard}`}>
                <p className={`text-base leading-8 ${theme.body}`}>
                  My portfolio style combines visual confidence with readable
                  structure, making it easier to showcase projects, skills, and
                  ambition in one cohesive experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-5xl rounded-[1.8rem] border border-white/10 bg-black px-4 py-10 sm:rounded-[2.2rem] sm:px-8 sm:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                Skills
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/75 sm:mt-4 sm:text-lg sm:leading-7">
                Practical skills built through real-world projects and
                internships
              </p>
            </div>

            <div className="mt-10 space-y-12 sm:mt-16 sm:space-y-16">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-center text-2xl font-black text-white sm:text-4xl">
                    {group.title}
                  </h3>
                  <div className="mt-7 grid grid-cols-3 gap-x-3 gap-y-7 sm:mt-10 sm:gap-x-12 sm:gap-y-10">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-col items-center text-center"
                      >
                        <div className="flex h-16 w-16 items-center justify-center sm:h-24 sm:w-24">
                          <img
                            src={item.icon}
                            alt={`${item.name} logo`}
                            className="h-10 w-10 object-contain sm:h-14 sm:w-14"
                            loading="lazy"
                          />
                        </div>
                        <p className="mt-2 text-xs font-semibold text-white sm:text-base">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p
                className={`text-sm font-semibold uppercase tracking-[0.35em] ${theme.sectionLabel}`}
              >
                Projects
              </p>
              <h2
                className={`mt-3 text-3xl font-black sm:text-4xl ${theme.title}`}
              >
                Featured work presented like case studies
              </h2>
            </div>

            <div className="grid gap-5 sm:gap-6 xl:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className={`group overflow-hidden rounded-[2rem] border transition duration-300 ${theme.projectCard}`}
                >
                  <div
                    className={`h-40 bg-gradient-to-br p-4 sm:h-48 sm:p-6 ${theme.projectVisual}`}
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
                  <div className="space-y-4 p-5 sm:space-y-5 sm:p-7">
                    <h3 className={`text-xl font-bold sm:text-2xl ${theme.title}`}>
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

        <section id="experience" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p
                className={`text-sm font-semibold uppercase tracking-[0.35em] ${theme.sectionLabel}`}
              >
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
                  className={`grid gap-4 rounded-[1.75rem] border p-5 sm:rounded-[2rem] sm:p-7 md:grid-cols-[180px_1fr] ${theme.sectionCard}`}
                >
                  <div
                    className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.sectionLabel}`}
                  >
                    {item.period}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold sm:text-2xl ${theme.title}`}>
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

        <section id="contact" className="px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-12">
          <div
            className={`mx-auto max-w-7xl rounded-[2rem] border p-6 shadow-2xl sm:rounded-[2.5rem] sm:p-12 ${theme.contactWrap}`}
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.35em] ${theme.sectionLabel}`}
                >
                  Contact
                </p>
                <h2
                  className={`mt-3 text-2xl font-black sm:text-5xl ${theme.title}`}
                >
                  Let&apos;s build something polished and memorable.
                </h2>
                <p className={`mt-4 max-w-2xl text-base leading-7 sm:mt-5 sm:text-lg sm:leading-8 ${theme.body}`}>
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
