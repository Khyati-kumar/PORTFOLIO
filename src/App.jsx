import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import profileImage from "../Me.jpeg";

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C"],
  },
  {
    title: "Frontend Development",
    items: [
      "React.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
    ],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
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

const sectionTitle =
  "text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300";
const sectionHeading = "mt-3 text-3xl font-black text-white sm:text-4xl";
const panelClass =
  "rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md shadow-[0_16px_50px_rgba(0,0,0,0.28)] sm:rounded-[2rem] sm:p-8";

const App = () => {
  return (
    <div className="bg-[#071a1f] text-white">
      <Navbar
        isDark={true}
        onToggleTheme={() => {}}
        profileImage={profileImage}
      />
      <Hero />
     
      <main className="relative overflow-hidden px-4 pb-20 sm:px-6 lg:px-12">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.06)_1px,transparent_1px)] bg-[size:42px_42px]" />
        </div>

        <div className="relative mx-auto max-w-7xl space-y-16 sm:space-y-20">
          <section
            id="about"
            className="scroll-mt-28 grid gap-6 lg:grid-cols-[1fr_1fr]"
          >
            <div className="rounded-[1.75rem] border border-cyan-400/20 bg-[linear-gradient(145deg,rgba(34,211,238,0.12),rgba(8,20,24,0.92),rgba(7,26,31,0.98))] p-6 sm:rounded-[2rem] sm:p-8">
              <p className={sectionTitle}>My Approach</p>
              <h2 className={sectionHeading}>
                The rest of the portfolio now supports the same refined energy
                as the hero.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-200">
                I care about interfaces that feel modern at first glance and
                stay clear as people explore deeper. Every section should
                strengthen the story, not distract from it.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className={panelClass}>
                <p className="text-base leading-8 text-slate-200">
                  I enjoy blending strong frontend execution with thoughtful
                  visual direction so every portfolio section feels cohesive,
                  readable, and polished.
                </p>
              </div>
              <div className={panelClass}>
                <p className="text-base leading-8 text-slate-200">
                  This layout brings back your important content while preserving
                  the cleaner hero-first style you liked in the current design.
                </p>
              </div>
            </div>
          </section>

          <section id="highlights" className="scroll-mt-28">
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className={panelClass}>
                  <p className="text-3xl font-black text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="scroll-mt-28">
            <div className="mb-10 text-center">
              <p className={sectionTitle}>Skills</p>
              <h2 className={sectionHeading}>
                Tools and strengths that shape my work
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Practical skills built through projects, exploration, and steady
                improvement across the stack.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className={panelClass}>
                  <h3 className="text-2xl font-black text-white">
                    {group.title}
                  </h3>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="scroll-mt-28">
            <div className="mb-10">
              <p className={sectionTitle}>Projects</p>
              <h2 className={sectionHeading}>
                Featured work presented like case studies
              </h2>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:rounded-[2rem]"
                >
                  <div className="h-40 bg-[linear-gradient(145deg,rgba(34,211,238,0.18),rgba(7,26,31,0.65),rgba(0,0,0,0.92))] p-4 sm:h-48 sm:p-6">
                    <div className="flex h-full items-end justify-between rounded-[1.35rem] border border-white/10 bg-black/20 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-200">
                        Project 0{index + 1}
                      </p>
                      <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                        Tailwind layout
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 p-5 sm:space-y-5 sm:p-7">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="leading-7 text-slate-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-100"
                        >
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
              <p className={sectionTitle}>Experience</p>
              <h2 className={sectionHeading}>
                Growth, consistency, and real momentum
              </h2>
            </div>

            <div className="grid gap-6">
              {experiences.map((item) => (
                <div
                  key={item.title}
                  className={`${panelClass} grid gap-4 md:grid-cols-[180px_1fr]`}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {item.period}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                      {item.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-28">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(8,20,24,0.94),rgba(0,0,0,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:rounded-[2.5rem] sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className={sectionTitle}>Contact</p>
                  <h2 className={sectionHeading}>
                    Let&apos;s build something polished and memorable.
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    If you are looking for a clean portfolio, a polished
                    frontend, or a fresh visual direction for your next project,
                    I would love to connect.
                  </p>
                </div>

                <div className="grid gap-4">
                  <a
                    href="mailto:anuradhamaruvada@gmail.com"
                    className="rounded-[1.5rem] border border-white/10 bg-white/10 px-6 py-5 text-base font-semibold text-white transition duration-200 hover:bg-white/15"
                  >
                    anuradhamaruvada@gmail.com
                  </a>
                  <a
                    href="https://github.com/Khyati-kumar"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 px-6 py-5 text-base font-semibold text-white transition duration-200 hover:bg-white/10"
                  >
                    GitHub Profile
                  </a>
                  <a
                    href="https://www.linkedin.com/in/khyatikumarmaruvada"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 px-6 py-5 text-base font-semibold text-white transition duration-200 hover:bg-white/10"
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
