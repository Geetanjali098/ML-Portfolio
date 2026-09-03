import { useState, useEffect, useRef } from "react";
import heroImage from "./assets/Geetanjali nishad photo.jpeg";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];
const GITHUB_URL = "https://github.com/Geetanjali098";

const SKILLS = {
  "Programming": ["Python"],
  "Machine Learning Concepts & tools": ["Scikit-learn", "NLP (TF-IDF)", "Text Classification", "Predictive Modeling", "Recommendation Systems","Supervised and Unsupervised Learning","Feature Engineering"],
  "Data": ["Data Analysis", "Data Cleaning"],
  "Tools & Technologies": ["Streamlit", "FastAPI", "React (Basic)", "Git & GitHub" ,"Google Workspace","Jupyter","VSCode"],
};

const PROJECTS = [
  {
    title: "Recolens",
    subtitle: "Hybrid Recommendation System",
    description: "A hybrid recommendation engine combining content-based and collaborative filtering to deliver personalized suggestions at scale.",
    tech: ["Python", "FastAPI", "React"],
    github: "https://github.com/Geetanjali098/Recolens.git",
    demo: "https://recolens-phi.vercel.app",
    guidelines:"Firstly open the link of the demo and then run the backend link to see the recommendation system in action. The backend link is: (https://huggingface.co/spaces/Geetanjali09/recolens-api)",
    featured: true,
  },
  {
    title: "Fraud Detection System",
    subtitle: "Classification-Based Detection",
    description: "A machine learning system that identifies fraudulent transactions using ensemble classification techniques with high precision.",
    tech: ["Python", "Scikit-learn", "machine learning algorithms"],
    github: "https://github.com/Geetanjali098/Fraud-Detection-System.git",
    demo: "https://fraud-detection-system0.streamlit.app",
    featured: true,
    guidelines:"Firstly open the link of the demo and then run the backend link to see the fraud detection system in action. The backend link is: (https://huggingface.co/spaces/Geetanjali09/fraud-detection-api)",
  },
  {
    title: "Skill Gap Detector",
    subtitle: "NLP Resume Analyzer",
    description: "Analyzes resumes and compares them with job descriptions using NLP to surface missing skills and relevant gaps. It highlights absent qualifications, suggests priority skill sets to improve, and helps candidates better align their profiles with role requirements.",
    tech: ["Python", "NLP", "Scikit-learn"],
    github: "https://github.com/Geetanjali098/Skill-Gap-Detector-.git",
    demo: "https://skill-gap-detector.streamlit.app",
    featured: true,
  },
  {
    title: "Smart Expense Categorizer",
    subtitle: "Transaction Classifier",
    description: "Classifies financial transactions into meaningful categories using NLP pipelines and machine learning models.",
    tech: ["Python", "NLP"],
    github: "https://github.com/Geetanjali098/Smart-Expense-Categorizer.git",
    demo: "https://smart-expense-categorizer.streamlit.app",
    featured: true,
  },
  {
    title: "Smart Habit Analyzer",
    subtitle: "Productivity Predictor",
    description: "Predicts daily productivity levels based on behavioral patterns and habits using interpretable ML models.",
    tech: ["Python", "ML"],
    github: "https://github.com/Geetanjali098/smart-habit-analyzer.git",
    demo: "https://smart-habit-analyzer.streamlit.app",
    featured:true,
  },
];

const WHY_POINTS = [
  { icon: "⚙️", label: "Strong foundation in ML and NLP — not just theory" },
  { icon: "🔨", label: "Hands-on, production-oriented project experience" },
  { icon: "📦", label: "Comfortable building, evaluating, and deploying models" },
  { icon: "🎯", label: "Driven by meaningful problems, not just benchmarks" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = window.localStorage.getItem("portfolio-theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme;
      }
    }
    return "light";
  });

  const themeStyles = {
    light: {
      bodyBg: "#f8f9fc",
      bodyColor: "#1a1d2e",
      navBgScrolled: "rgba(248,249,252,0.92)",
      navBorder: "#e8eaf6",
      navText: "#1a1d2e",
      sectionBg: "#fff",
      sectionAltBg: "#f8fafc",
      cardBg: "#fff",
      cardBorder: "1px solid #e8eaf6",
      textPrimary: "#1a1d2e",
      textSecondary: "#4b5563",
      textMuted: "#6b7280",
      textMeta: "#9ca3af",
      textAccent: "#4338ca",
      guidelinesBg: "#f8faff",
      guidelinesBorder: "#e0e7ff",
      guidelinesText: "#4b5563",
      contactCardBg: "#fff",
      contactCardBorder: "#e8eaf6",
      contactIconBg: "#eef2ff",
      contactIconBorder: "#c7d2fe",
      contactIconColor: "#6366f1",
      footerBg: "#1a1d2e",
      footerColor: "#6b7280",
      footerAccent: "#a5b4fc",
    },
    dark: {
      bodyBg: "#05061a",
      bodyColor: "#e5e7eb",
      navBgScrolled: "rgba(15,23,42,0.88)",
      navBorder: "#1f2937",
      navText: "#f8fafc",
      sectionBg: "#0f172a",
      sectionAltBg: "#111827",
      cardBg: "#111827",
      cardBorder: "1px solid #1f2937",
      textPrimary: "#f8fafc",
      textSecondary: "#d1d5db",
      textMuted: "#9ca3af",
      textMeta: "#94a3b8",
      textAccent: "#60a5fa",
      guidelinesBg: "#111827",
      guidelinesBorder: "#1f2937",
      guidelinesText: "#cbd5e1",
      contactCardBg: "#111827",
      contactCardBorder: "#1f2937",
      contactIconBg: "#1e293b",
      contactIconBorder: "#334155",
      contactIconColor: "#60a5fa",
      footerBg: "#020617",
      footerColor: "#94a3b8",
      footerAccent: "#93c5fd",
    },
  };

  const activeTheme = themeStyles[theme];

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className={`theme-${theme}`} style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: activeTheme.bodyBg, color: activeTheme.bodyColor, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Syne:wght@700;800&display=swap');
        .theme-light {
          --bg: #f8f9fc;
          --text: #1a1d2e;
          --nav-link: #4b5563;
          --nav-link-hover: #6366f1;
          --nav-text: #1a1d2e;
          --section-bg: #fff;
          --section-alt-bg: #f8fafc;
          --card-bg: #fff;
          --card-border: 1px solid #e8eaf6;
          --text-primary: #1a1d2e;
          --text-secondary: #4b5563;
          --text-muted: #6b7280;
          --text-meta: #9ca3af;
          --text-accent: #4338ca;
          --guidelines-bg: #f8faff;
          --guidelines-border: #e0e7ff;
          --guidelines-text: #4b5563;
          --contact-card-bg: #fff;
          --contact-card-border: 1px solid #e8eaf6;
          --contact-icon-bg: #eef2ff;
          --contact-icon-border: #c7d2fe;
          --contact-icon-color: #6366f1;
          --footer-bg: #1a1d2e;
          --footer-color: #6b7280;
          --footer-accent: #a5b4fc;
        }
        .theme-dark {
          --bg: #05061a;
          --text: #e5e7eb;
          --nav-link: #d1d5db;
          --nav-link-hover: #93c5fd;
          --nav-text: #f8fafc;
          --section-bg: #0f172a;
          --section-alt-bg: #111827;
          --card-bg: #111827;
          --card-border: 1px solid #1f2937;
          --text-primary: #f8fafc;
          --text-secondary: #d1d5db;
          --text-muted: #9ca3af;
          --text-meta: #94a3b8;
          --text-accent: #60a5fa;
          --guidelines-bg: #111827;
          --guidelines-border: #1f2937;
          --guidelines-text: #cbd5e1;
          --contact-card-bg: #111827;
          --contact-card-border: 1px solid #1f2937;
          --contact-icon-bg: #1e293b;
          --contact-icon-border: #334155;
          --contact-icon-color: #60a5fa;
          --footer-bg: #020617;
          --footer-color: #94a3b8;
          --footer-accent: #93c5fd;
        }
        body { background: var(--bg); color: var(--text); }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        html { background: var(--bg); }
        html, body { max-width: 100%; overflow-x: hidden; }
        img { max-width: 100%; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f0f1f8; }
        ::-webkit-scrollbar-thumb { background: #a5b4fc; border-radius: 10px; }
        .nav-link { 
          font-size: 0.875rem; font-weight: 500; letter-spacing: 0.04em;
          color: var(--nav-link); cursor: pointer; padding: 6px 4px;
          border-bottom: 2px solid transparent; transition: all 0.2s;
          background: none; border-top: none; border-left: none; border-right: none;
        }
        .nav-link:hover { color: var(--nav-link-hover); border-bottom-color: var(--nav-link-hover); }
        .btn-primary {
          background: #6366f1; color: #fff; border: none; border-radius: 10px;
          padding: 13px 28px; font-size: 0.9rem; font-weight: 600;
          cursor: pointer; transition: all 0.22s; letter-spacing: 0.02em;
          box-shadow: 0 4px 16px rgba(99,102,241,0.28);
        }
        .btn-primary:hover { background: #4f46e5; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99,102,241,0.35); }
        .btn-outline {
          background: transparent; color: #6366f1;
          border: 2px solid #6366f1; border-radius: 10px;
          padding: 11px 28px; font-size: 0.9rem; font-weight: 600;
          cursor: pointer; transition: all 0.22s; letter-spacing: 0.02em;
        }
        .btn-outline:hover { background: #6366f1; color: #fff; transform: translateY(-2px); }
        .btn-sm {
          font-size: 0.8rem; font-weight: 600; padding: 8px 18px;
          border-radius: 8px; cursor: pointer; transition: all 0.2s;
          letter-spacing: 0.02em;
        }
        .btn-sm-primary { background: #6366f1; color: #fff; border: none; }
        .btn-sm-primary:hover { background: #4f46e5; transform: translateY(-1px); }
        .btn-sm-ghost { background: transparent; color: var(--text-accent); border: 1.5px solid rgba(99,102,241,0.35); }
        .btn-sm-ghost:hover { background: rgba(99,102,241,0.12); }
        .card {
          background: var(--card-bg); border-radius: 18px;
          border: var(--card-border);
          box-shadow: 0 2px 16px rgba(99,102,241,0.06);
          transition: all 0.28s;
          min-width: 0;
          overflow-wrap: break-word;
          word-break: break-word;
        }
        .card:hover { box-shadow: 0 8px 32px rgba(99,102,241,0.13); transform: translateY(-4px); }
        .projects-grid, .skills-grid, .featured-grid {
          min-width: 0;
        }
        .projects-grid > *, .skills-grid > *, .featured-grid > * {
          min-width: 0;
        }
        .card p, .card h3, .guidelines-box {
          overflow-wrap: break-word;
          word-break: break-word;
        }
        .skill-pill {
          background: rgba(99,102,241,0.12); color: var(--text-accent); border-radius: 100px;
          padding: 6px 14px; font-size: 0.8rem; font-weight: 500;
          display: inline-block; transition: all 0.18s;
          border: 1px solid rgba(99,102,241,0.35);
        }
        .skill-pill:hover { background: #6366f1; color: #fff; border-color: #6366f1; }
        .tech-tag {
          background: rgba(148,163,184,0.12); color: var(--text-secondary); border-radius: 6px;
          padding: 3px 10px; font-size: 0.72rem; font-weight: 500;
          border: 1px solid rgba(148,163,184,0.3);
        }
        .section-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: var(--text-accent);
        }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.4rem);
          font-weight: 800; color: var(--text-primary); line-height: 1.2;
        }
        .featured-badge {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: #fff; font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 3px 10px; border-radius: 100px;
        }
        .contact-card {
          background: var(--contact-card-bg); border: var(--contact-card-border); border-radius: 14px;
          padding: 22px 28px; display: flex; align-items: center; gap: 16px;
          text-decoration: none; color: inherit; transition: all 0.22s;
          box-shadow: 0 2px 10px rgba(99,102,241,0.05);
          overflow: hidden;
        }
        .contact-card:hover {
          border-color: #a5b4fc; box-shadow: 0 6px 24px rgba(99,102,241,0.12);
          transform: translateY(-3px);
        }
        .guidelines-box {
          margin-top: 12px;
          padding: 10px 12px;
          border-radius: 10px;
          background: var(--guidelines-bg);
          border: var(--guidelines-border);
          color: var(--guidelines-text);
          font-size: 0.82rem;
          line-height: 1.6;
        }
        .footer-bg {
          background: var(--footer-bg);
          color: var(--footer-color);
        }
        .hero-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #6366f1; display: inline-block;
          animation: pulse-dot 2s ease-in-out infinite;
        }
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }
        .profile-image:hover {
          transform: scale(1.08);
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .why-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 18px 22px; border-radius: 12px;
          background: var(--card-bg); border: var(--card-border);
          transition: all 0.22s;
        }
        .why-item:hover { border-color: #a5b4fc; background: rgba(99,102,241,0.06); transform: translateX(4px); }
        section { padding: 80px 0; }
        .responsive-grid { display: grid; gap: 20px; }
        .nav-hamburger {
          display: none; flex-direction: column; justify-content: center; gap: 5px;
          width: 38px; height: 38px; background: none; border: none; cursor: pointer;
          padding: 8px; border-radius: 8px; flex-shrink: 0;
        }
        .nav-hamburger span {
          display: block; width: 100%; height: 2px; background: var(--nav-text);
          transition: all 0.25s;
        }
        .nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nav-hamburger.open span:nth-child(2) { opacity: 0; }
        .nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        @media (max-width: 1024px) {
          .projects-grid, .skills-grid { grid-template-columns: 1fr !important; }
          section { padding: 70px 0; }
        }
        @media (max-width: 820px) {
          section { padding: 60px 0; }
          .hero { padding: 70px 18px 40px !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .skills-grid, .projects-grid { grid-template-columns: 1fr !important; }
          .card { width: 100%; }
          .featured-grid { grid-template-columns: 1fr !important; }
          .featured-icon { display: none !important; }
          .featured-card { padding: 26px 22px !important; }

          /* Collapsible mobile nav */
          .nav-hamburger { display: flex; }
          .nav-links-wrap {
            position: fixed; top: 64px; left: 0; right: 0;
            flex-direction: column; align-items: stretch; gap: 0;
            background: var(--section-bg); border-bottom: 1px solid var(--card-border, #e8eaf6);
            box-shadow: 0 12px 24px rgba(0,0,0,0.08);
            max-height: 0; overflow: hidden; padding: 0 20px;
            transition: max-height 0.3s ease, padding 0.3s ease;
          }
          .nav-links-wrap.open { max-height: 400px; padding: 12px 20px 20px; }
          .nav-link { width: 100%; text-align: left; padding: 12px 4px; font-size: 0.95rem; border-bottom: 1px solid rgba(148,163,184,0.15); }
          .nav-links-wrap .btn-sm-ghost { width: 100%; margin-top: 12px; min-width: 0 !important; }
        }
        @media (max-width: 640px) {
          .hero-dot { display: none; }
          .section-title { font-size: clamp(1.6rem, 6vw, 2.1rem); }
          .btn-primary, .btn-outline { width: 100%; justify-content: center; }
          .hero { padding: 60px 16px 30px !important; }
          .about-grid { gap: 24px !important; }
        }
        @media (max-width: 380px) {
          .nav-brand { font-size: 0.95rem !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled || menuOpen ? activeTheme.navBgScrolled : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
        borderBottom: scrolled || menuOpen ? `1px solid ${activeTheme.navBorder}` : "1px solid transparent",
        transition: "all 0.3s",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span className="nav-brand" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: activeTheme.navText, letterSpacing: "-0.01em" }}>
            <span className="gradient-text">Geetanjali Nishad</span>
          </span>
          <div className={`nav-links-wrap${menuOpen ? " open" : ""}`} style={{ display: "flex", gap: 18, alignItems: "center" }}>
            {NAV_LINKS.map(l => (
              <button key={l} className="nav-link" onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
            ))}
            <button
              type="button"
              className="btn-sm btn-sm-ghost"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              style={{ minWidth: 120, justifyContent: "center" }}
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            className={`nav-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "100px 24px 60px" }}>
        {/* Background decoration */}
        <div style={{ position: "absolute", top: "10%", right: "-8%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-5%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        {/* Grid dots */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, #6366f120 1px, transparent 1px)", backgroundSize: "36px 36px", pointerEvents: "none" }} />

        <div style={{ maxWidth: 720, textAlign: "center", position: "relative" }}>
          <div style={{ marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <span className="hero-dot" />
            <span style={{ fontSize: "0.82rem", fontWeight: 500, color: activeTheme.textMuted, letterSpacing: "0.08em", textTransform: "uppercase" }}>Open to Internships</span>
          </div>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.4rem, 6vw, 4rem)", lineHeight: 1.1, marginBottom: 16, color: activeTheme.textPrimary }}>
            Hi, I'm <span className="gradient-text">Geetanjali Nishad</span>
          </h1>

          <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(1rem, 2.5vw, 1.35rem)", color: activeTheme.textSecondary, marginBottom: 20, letterSpacing: "-0.01em" }}>
            Machine Learning Enthusiast
          </p>

          <p style={{ fontSize: "1.05rem", color: activeTheme.textMuted, lineHeight: 1.75, maxWidth: 540, margin: "0 auto 20px", fontWeight: 400 }}>
            Building real-world AI solutions using Machine Learning, NLP, and data-driven systems.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => scrollTo("projects")}>View Projects</button>
            <button className="btn-outline" onClick={() => window.open(GITHUB_URL, "_blank", "noopener,noreferrer")}>
              <span style={{ marginRight: 6 }}>⎇</span> GitHub
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: activeTheme.sectionBg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "center" }}>
            <FadeIn>
              <div style={{ position: "relative" }}>
                <div style={{ width: 220, height: 220, borderRadius: "28px", background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #c7d2fe", overflow: "hidden" }}>
                  <img
                    src={heroImage}
                    alt="Geetanjali Nishad"
                    className="profile-image"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => scrollTo("projects")}
                  style={{ position: "absolute", bottom: -16, right: -16, background: "#6366f1", border: "none", borderRadius: 14, padding: "10px 18px", color: "#fff", fontSize: "0.8rem", fontWeight: 600, boxShadow: "0 4px 20px rgba(99,102,241,0.35)", cursor: "pointer" }}
                >
                  5 Projects Built
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="section-label" style={{ marginBottom: 12 }}>About Me</p>
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                Practical AI,<br />Not Just Theory
              </h2>
              <p style={{ color: activeTheme.textSecondary, lineHeight: 1.85, fontSize: "1rem", marginBottom: 20 }}>
           I'm an Information Technology student at SSTC Bhilai, currently pursuing my B.Tech degree, with a genuine passion for machine learning and artificial intelligence.
           Over the past few years, I've focused on building practical, end-to-end ML projects to strengthen my skills in Python, data analysis, machine learning, and deep learning.
           My work goes beyond following tutorials — each project I've built solves a real problem, from detecting fraud and recommending products to analyzing skill gaps with NLP.
           I enjoy the full journey from idea to deployment, and I'm always looking for the next problem worth solving.
              </p>
              <p style={{ color: activeTheme.textSecondary, lineHeight: 1.85, fontSize: "1rem" }}>
                I'm currently looking for a Machine Learning ,AIML and Software Development Internship where I can apply my knowledge, learn from experienced professionals, and contribute to real-world projects while growing as an engineer.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ background: activeTheme.sectionBg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <FadeIn>
            <p className="section-label" style={{ marginBottom: 12, textAlign: "center" }}>What I Work With</p>
            <h2 className="section-title" style={{ marginBottom: 48, textAlign: "center" }}>Skills & Tools</h2>
          </FadeIn>
          <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {Object.entries(SKILLS).map(([category, items], i) => (
              <FadeIn key={category} delay={i * 0.08}>
                <div className="card" style={{ padding: "28px 28px" }}>
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: activeTheme.textMeta, marginBottom: 16 }}>{category}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {items.map(skill => <span key={skill} className="skill-pill">{skill}</span>)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ background: activeTheme.sectionAltBg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <FadeIn>
            <p className="section-label" style={{ marginBottom: 12, textAlign: "center" }}>What I've Built</p>
            <h2 className="section-title" style={{ marginBottom: 12, textAlign: "center" }}>Projects</h2>
            <p style={{ textAlign: "center", color: activeTheme.textMeta, fontSize: "0.88rem", marginBottom: 48 }}>Ordered by complexity and impact</p>
          </FadeIn>

          {/* Featured project */}
          <FadeIn>
            <div className="card featured-card" style={{ padding: "36px 40px", marginBottom: 24, borderLeft: "4px solid #6366f1" }}>
              <div className="featured-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "flex-start" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span className="featured-badge">⭐ Featured</span>
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.4rem", fontWeight: 800, color: activeTheme.textPrimary, marginBottom: 4 }}>{PROJECTS[0].title}</h3>
                  <p style={{ color: activeTheme.textMeta, fontSize: "0.82rem", fontWeight: 500, marginBottom: 14 }}>{PROJECTS[0].subtitle}</p>
                  <p style={{ color: activeTheme.textSecondary, lineHeight: 1.75, marginBottom: 20, maxWidth: 560 }}>{PROJECTS[0].description}</p>
                  {PROJECTS[0].guidelines && (
                    <div className="guidelines-box" style={{ marginBottom: 20 }}>
                      <strong style={{ color: activeTheme.textAccent }}>How to use:</strong> {PROJECTS[0].guidelines}
                    </div>
                  )}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                    {PROJECTS[0].tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <a href={PROJECTS[0].github} target="_blank" rel="noopener noreferrer" className="btn-sm btn-sm-primary" style={{ textDecoration: "none", display: "inline-block" }}>⎇ Source Code</a>
                    <a href={PROJECTS[0].demo} target="_blank" rel="noopener noreferrer" className="btn-sm btn-sm-ghost" style={{ textDecoration: "none", display: "inline-block" }}>↗ Live Demo</a>
                  </div>
                </div>
                <div className="featured-icon" style={{ fontSize: "3.5rem", opacity: 0.15, userSelect: "none" }}>🔬</div>
              </div>
            </div>
          </FadeIn>

          {/* Other projects grid */}
          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {PROJECTS.slice(1).map((proj, i) => (
              <FadeIn key={proj.title} delay={i * 0.09}>
                <div className="card" style={{ padding: "28px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", fontWeight: 800, color: activeTheme.textPrimary, marginBottom: 4 }}>{proj.title}</h3>
                  <p style={{ color: activeTheme.textMeta, fontSize: "0.78rem", fontWeight: 500, marginBottom: 12 }}>{proj.subtitle}</p>
                  <p style={{ color: activeTheme.textSecondary, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 18, flex: 1 }}>{proj.description}</p>
                  {proj.guidelines && (
                    <div className="guidelines-box" style={{ marginBottom: 18 }}>
                      <strong style={{ color: activeTheme.textAccent }}>How to use:</strong> {proj.guidelines}
                    </div>
                  )}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 20 }}>
                    {proj.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-sm btn-sm-primary" style={{ textDecoration: "none", display: "inline-block" }}>⎇ Source Code</a>
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="btn-sm btn-sm-ghost" style={{ textDecoration: "none", display: "inline-block" }}>↗ Live Demo</a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section id="why" style={{ background: activeTheme.sectionBg }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <FadeIn>
            <p className="section-label" style={{ marginBottom: 12, textAlign: "center" }}>Why Work With Me</p>
            <h2 className="section-title" style={{ marginBottom: 16, textAlign: "center" }}>What I Bring</h2>
            <p style={{ textAlign: "center", color: activeTheme.textMuted, lineHeight: 1.8, marginBottom: 48, maxWidth: 520, margin: "0 auto 48px" }}>
              I have a solid foundation in Machine Learning and NLP, backed by hands-on project work. I can build, evaluate, and ship ML models — and I care about solving problems that actually matter.
            </p>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {WHY_POINTS.map((p, i) => (
              <FadeIn key={p.label} delay={i * 0.08}>
                <div className="why-item">
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{p.icon}</span>
                  <p style={{ color: activeTheme.textSecondary, fontWeight: 500, lineHeight: 1.5 }}>{p.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: activeTheme.sectionBg }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <FadeIn>
            <p className="section-label" style={{ marginBottom: 12 }}>Get In Touch</p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Let's Connect</h2>
            <p style={{ color: activeTheme.textMuted, lineHeight: 1.8, marginBottom: 48 }}>
              I'm open to ML, AIML, and Software Development internship opportunities. Feel free to reach out.
            </p>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { icon: "⎇", label: "GitHub", sub: "github.com/Geetanjali098", href: GITHUB_URL },
              { icon: "in", label: "LinkedIn", sub: "linkedin.com/in/Geetanjali Nishad", href: "https://www.linkedin.com/in/geetanjali-n-a07575363" },
              { icon: "✉", label: "Email", sub: "geetanjalinishad0109@gmail.com", href: "mailto:geetanjalinishad0109@gmail.com" },
            ].map((c, i) => (
              <FadeIn key={c.label} delay={i * 0.1}>
                <a href={c.href} className="contact-card" target="_blank" rel="noopener noreferrer">
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: activeTheme.contactIconBg, border: activeTheme.contactIconBorder, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", fontWeight: 700, color: activeTheme.contactIconColor, flexShrink: 0 }}>{c.icon}</div>
                  <div style={{ textAlign: "left", flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: 600, color: activeTheme.textPrimary, marginBottom: 2 }}>{c.label}</p>
                    <p style={{ fontSize: "0.82rem", color: activeTheme.textMeta }}>{c.sub}</p>
                  </div>
                  <span style={{ marginLeft: "auto", color: activeTheme.textAccent, fontSize: "1.1rem" }}>→</span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: activeTheme.footerBg, color: activeTheme.footerColor, textAlign: "center", padding: "28px 24px", fontSize: "0.82rem" }}>
        <p>Built by <span style={{ color: activeTheme.footerAccent }}>[Geetanjali Nishad]</span> · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
