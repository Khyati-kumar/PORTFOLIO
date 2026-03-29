
import React, { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = ({ isDark, onToggleTheme, profileImage }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <nav
        className={`fixed left-1/2 top-3 z-50 w-[min(1120px,calc(100%-1rem))] -translate-x-1/2 rounded-[24px] border transition-all duration-300 sm:top-4 sm:w-[min(1120px,calc(100%-1.5rem))] sm:rounded-[28px] ${
          isDark
            ? isScrolled
              ? 'border-white/15 bg-black/80 shadow-[0_18px_60px_rgba(0,0,0,0.78)] backdrop-blur-xl'
              : 'border-white/10 bg-black/30 backdrop-blur-xl'
            : isScrolled
              ? 'border-black/10 bg-white/85 shadow-[0_18px_60px_rgba(0,0,0,0.1)] backdrop-blur-xl'
              : 'border-black/10 bg-white/75 backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4 md:px-7">
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3">
            <span className="h-10 w-10 overflow-hidden rounded-2xl ring-2 ring-white/20 shadow-[0_0_30px_rgba(255,255,255,0.08)] sm:h-11 sm:w-11">
              <img
                src={profileImage}
                alt="Khyati Kumar"
                className="h-10 w-10 rounded-full object-cover"
              />
            </span>
            <div>
              <p
                className={`text-[0.62rem] uppercase tracking-[0.32em] sm:text-[0.7rem] sm:tracking-[0.45em] ${
                  isDark ? 'text-white/70' : 'text-neutral-600'
                }`}
              >
                Portfolio
              </p>
              <h1
                className={`text-sm font-semibold tracking-wide sm:text-lg ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                Maruvada Khyati Kumar
              </h1>
            </div>
          </a>

          <div
            className={`hidden items-center gap-2 rounded-full border px-2 py-2 lg:flex ${
              isDark
                ? 'border-white/10 bg-white/[0.04]'
                : 'border-black/10 bg-white/80'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                  isDark
                    ? 'text-white hover:bg-white/10'
                    : 'text-neutral-700 hover:bg-black hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition duration-300 ${
                isDark
                  ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                  : 'border-black/10 bg-white text-black hover:bg-neutral-100'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                {isDark ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
                  />
                ) : (
                  <>
                    <circle cx="12" cy="12" r="4" />
                    <path
                      strokeLinecap="round"
                      d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"
                    />
                  </>
                )}
              </svg>
            </button>
            <a
              href="#contact"
              className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
                isDark
                  ? 'border-white/10 text-white hover:border-white/30'
                  : 'border-black/10 text-neutral-700 hover:border-black/20 hover:text-black'
              }`}
            >
              Let&apos;s Talk
            </a>
            <a
              href="#projects"
              className={`rounded-full px-5 py-2.5 text-sm font-semibold shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition duration-300 hover:scale-[1.03] ${
                isDark
                  ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
                  : 'bg-slate-950 text-white hover:bg-slate-800'
              }`}
            >
              View Work
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border transition sm:h-11 sm:w-11 lg:hidden ${
              isDark
                ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                : 'border-black/10 bg-white text-black hover:bg-neutral-100'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-6 w-6"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div
            className={`border-t px-5 pb-5 pt-4 lg:hidden ${
              isDark ? 'border-white/10' : 'border-black/10'
            }`}
          >
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={onToggleTheme}
                className={`mb-2 flex items-center justify-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                  isDark
                    ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                    : 'border-black/10 bg-white text-black hover:bg-neutral-100'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className={`h-5 w-5 ${isDark ? 'text-white' : 'text-black'}`}
                >
                  {isDark ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
                    />
                  ) : (
                    <>
                      <circle cx="12" cy="12" r="4" />
                      <path
                        strokeLinecap="round"
                        d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"
                      />
                    </>
                  )}
                </svg>
                <span>{isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
              </button>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                    isDark
                      ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                      : 'border-black/10 bg-white text-neutral-800 hover:bg-neutral-100'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`mt-2 rounded-2xl px-4 py-3 text-center text-sm font-semibold ${
                  isDark
                    ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
                    : 'bg-slate-950 text-white hover:bg-slate-800'
                }`}
              >
                Explore Portfolio
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
