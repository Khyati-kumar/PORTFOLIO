import {
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
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
    href: "https://www.instagram.com/",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "mailto:anuradhamaruvada@gmail.com",
    icon: Mail,
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#071a1f] px-4 py-12 text-white sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:38px_38px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_26%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl" />
          <div className="relative rounded-full border-4 border-cyan-400/90 p-1 shadow-[0_0_40px_rgba(34,211,238,0.35)]">
            <img
              src={profileImage}
              alt="Khyati Kumar"
              className="h-44 w-44 rounded-full object-cover object-top sm:h-52 sm:w-52"
            />
          </div>
        </div>

        <div className="mt-8 inline-flex rounded-full border border-cyan-400/20 bg-[#0d262d] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-cyan-300 sm:text-sm">
          Mern Stack Developer 
        </div>

        <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
          Hi, I&apos;m <span className="text-cyan-400">Khyati Kumar</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
          I build scalable web applications with clean code and modern tools.
          Passionate about <strong className="font-semibold text-white">React</strong>,
          <strong className="font-semibold text-white"> Node.js</strong>, and
          <strong className="font-semibold text-white"> MongoDB</strong>, while
          exploring applied machine learning for intelligent features.
        </p>

        <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10"
            >
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-300">
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
                className="rounded-full border border-white/10 bg-white/6 p-3 text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:text-cyan-300"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="rounded-full border border-cyan-400/70 px-6 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/10"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
