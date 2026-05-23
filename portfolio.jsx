import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SKILLS = {
  "Programming": ["Python"],
  "Machine Learning & AI": ["Scikit-learn", "NLP (TF-IDF)", "Text Classification", "Predictive Modeling", "Recommendation Systems"],
  "Data": ["Data Analysis", "Data Cleaning"],
  "Tools & Technologies": ["Streamlit", "FastAPI", "React (Basic)", "Git & GitHub"],
};

const PROJECTS = [
  {
    title: "Recolens",
    subtitle: "Hybrid Recommendation System",
    description: "A hybrid recommendation engine combining content-based and collaborative filtering to deliver personalized suggestions at scale.",
    tech: ["Python", "FastAPI", "React"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Fraud Detection System",
    subtitle: "Classification-Based Detection",
    description: "A machine learning system that identifies fraudulent transactions using ensemble classification techniques with high precision.",
    tech: ["Python", "Scikit-learn"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Skill Gap Detector",
    subtitle: "NLP Resume Analyzer",
    description: "Analyzes resumes and compares them with job descriptions using NLP to surface missing skills and relevant gaps.",
    tech: ["Python", "NLP", "Scikit-learn"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Smart Expense Categorizer",
    subtitle: "Transaction Classifier",
    description: "Classifies financial transactions into meaningful categories using NLP pipelines and machine learning models.",
    tech: ["Python", "NLP"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Smart Habit Analyzer",
    subtitle: "Productivity Predictor",
    description: "Predicts daily productivity levels based on behavioral patterns and habits using interpretable ML models.",
    tech: ["Python", "ML"],
    github: "#",
    demo: "#",
    featured: false,
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
  }, []);
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
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#f8f9fc", color: "#1a1d2e", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #f8f9fc; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f0f1f8; }
        ::-webkit-scrollbar-thumb { background: #a5b4fc; border-radius: 10px; }
        .nav-link { 
          font-size: 0.875rem; font-weight: 500; letter-spacing: 0.04em;
          color: #4b5563; cursor: pointer; padding: 6px 4px;
          border-bottom: 2px solid transparent; transition: all 0.2s;
          background: none; border-top: none; border-left: none; border-right: none;
        }
        .nav-link:hover { color: #6366f1; border-bottom-color: #6366f1; }
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
        .btn-sm-ghost { background: transparent; color: #6366f1; border: 1.5px solid #c7d2fe; }
        .btn-sm-ghost:hover { background: #eef2ff; }
        .card {
          background: #fff; border-radius: 18px;
          border: 1px solid #e8eaf6;
          box-shadow: 0 2px 16px rgba(99,102,241,0.06);
          transition: all 0.28s;
        }
        .card:hover { box-shadow: 0 8px 32px rgba(99,102,241,0.13); transform: translateY(-4px); }
        .skill-pill {
          background: #eef2ff; color: #4338ca; border-radius: 100px;
          padding: 6px 14px; font-size: 0.8rem; font-weight: 500;
          display: inline-block; transition: all 0.18s;
          border: 1px solid #c7d2fe;
        }
        .skill-pill:hover { background: #6366f1; color: #fff; border-color: #6366f1; }
        .tech-tag {
          background: #f3f4f6; color: #374151; border-radius: 6px;
          padding: 3px 10px; font-size: 0.72rem; font-weight: 500;
          border: 1px solid #e5e7eb;
        }
        .section-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.15em;
          text-transform: uppercase; color: #6366f1;
        }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.4rem);
          font-weight: 800; color: #1a1d2e; line-height: 1.2;
        }
        .featured-badge {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: #fff; font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 3px 10px; border-radius: 100px;
        }
        .contact-card {
          background: #fff; border: 1px solid #e8eaf6; border-radius: 14px;
          padding: 22px 28px; display: flex; align-items: center; gap: 16px;
          text-decoration: none; color: inherit; transition: all 0.22s;
          box-shadow: 0 2px 10px rgba(99,102,241,0.05);
        }
        .contact-card:hover {
          border-color: #a5b4fc; box-shadow: 0 6px 24px rgba(99,102,241,0.12);
          transform: translateY(-3px);
        }
        .hero-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #6366f1; display: inline-block;
          animation: pulse-dot 2s ease-in-out infinite;
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
          background: #fff; border: 1px solid #e8eaf6;
          transition: all 0.22s;
        }
        .why-item:hover { border-color: #a5b4fc; background: #fafbff; transform: translateX(4px); }
        section { padding: 80px 0; }
        @media (max-width: 768px) {
          section { padding: 60px 0; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(248,249,252,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #e8eaf6" : "1px solid transparent",
        transition: "all 0.3s",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#1a1d2e", letterSpacing: "-0.01em" }}>
            <span className="gradient-text">YN</span>
          </span>
          <div style={{ display: "flex", gap: 28 }}>
            {NAV_LINKS.map(l => (
              <button key={l} className="nav-link" onClick={() => scrollTo(l.toLowerCase())}>{l}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "100px 24px 60px" }}>
        {/* Background decoration */}
        <div style={{ position: "absolute", top: "10%", right: "-8%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-5%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        {/* Grid dots */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, #6366f120 1px, transparent 1px)", backgroundSize: "36px 36px", pointerEvents: "none" }} />

        <div style={{ maxWidth: 720, textAlign: "center", position: "relative" }}>
          <div style={{ marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <span className="hero-dot" />
            <span style={{ fontSize: "0.82rem", fontWeight: 500, color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>Open to Internships</span>
          </div>

          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(2.4rem, 6vw, 4rem)", lineHeight: 1.1, marginBottom: 16, color: "#1a1d2e" }}>
            Hi, I'm <span className="gradient-text">[Your Name]</span>
          </h1>

          <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "clamp(1rem, 2.5vw, 1.35rem)", color: "#4b5563", marginBottom: 20, letterSpacing: "-0.01em" }}>
            Machine Learning & AI Enthusiast
          </p>

          <p style={{ fontSize: "1.05rem", color: "#6b7280", lineHeight: 1.75, maxWidth: 540, margin: "0 auto 40px", fontWeight: 400 }}>
            Building real-world AI solutions using Machine Learning, NLP, and data-driven systems.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => scrollTo("projects")}>View Projects</button>
            <button className="btn-outline" onClick={() => window.open("#", "_blank")}>
              <span style={{ marginRight: 6 }}>⎇</span> GitHub
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "center" }}>
            <FadeIn>
              <div style={{ position: "relative" }}>
                <div style={{ width: 220, height: 220, borderRadius: "28px", background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5rem", border: "1px solid #c7d2fe" }}>
                  🤖
                </div>
                <div style={{ position: "absolute", bottom: -16, right: -16, background: "#6366f1", borderRadius: 14, padding: "10px 18px", color: "#fff", fontSize: "0.8rem", fontWeight: 600, boxShadow: "0 4px 20px rgba(99,102,241,0.35)" }}>
                  5 Projects Built
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="section-label" style={{ marginBottom: 12 }}>About Me</p>
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                Practical AI,<br />Not Just Theory
              </h2>
              <p style={{ color: "#4b5563", lineHeight: 1.85, fontSize: "1rem", marginBottom: 20 }}>
                I'm a 2024 graduate focused on building practical Machine Learning and AI applications. My work goes beyond following tutorials — each project I've built addresses a real problem, from detecting fraud to analyzing skill gaps with NLP.
              </p>
              <p style={{ color: "#4b5563", lineHeight: 1.85, fontSize: "1rem" }}>
                I'm currently looking for opportunities as an AI Intern, ML Intern, or Data Science Intern where I can contribute meaningfully and keep growing. I care about writing clean, well-thought-out code and building systems that actually work.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <FadeIn>
            <p className="section-label" style={{ marginBottom: 12, textAlign: "center" }}>What I Work With</p>
            <h2 className="section-title" style={{ marginBottom: 48, textAlign: "center" }}>Skills & Tools</h2>
          </FadeIn>
          <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {Object.entries(SKILLS).map(([category, items], i) => (
              <FadeIn key={category} delay={i * 0.08}>
                <div className="card" style={{ padding: "28px 28px" }}>
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9ca3af", marginBottom: 16 }}>{category}</p>
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
      <section id="projects" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <FadeIn>
            <p className="section-label" style={{ marginBottom: 12, textAlign: "center" }}>What I've Built</p>
            <h2 className="section-title" style={{ marginBottom: 12, textAlign: "center" }}>Projects</h2>
            <p style={{ textAlign: "center", color: "#9ca3af", fontSize: "0.88rem", marginBottom: 48 }}>Ordered by complexity and impact</p>
          </FadeIn>

          {/* Featured project */}
          <FadeIn>
            <div className="card" style={{ padding: "36px 40px", marginBottom: 24, borderLeft: "4px solid #6366f1" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "flex-start" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span className="featured-badge">⭐ Featured</span>
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "#1a1d2e", marginBottom: 4 }}>{PROJECTS[0].title}</h3>
                  <p style={{ color: "#9ca3af", fontSize: "0.82rem", fontWeight: 500, marginBottom: 14 }}>{PROJECTS[0].subtitle}</p>
                  <p style={{ color: "#4b5563", lineHeight: 1.75, marginBottom: 20, maxWidth: 560 }}>{PROJECTS[0].description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                    {PROJECTS[0].tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button className="btn-sm btn-sm-primary">⎇ Source Code</button>
                    <button className="btn-sm btn-sm-ghost">↗ Live Demo</button>
                  </div>
                </div>
                <div style={{ fontSize: "3.5rem", opacity: 0.15, userSelect: "none" }}>🔬</div>
              </div>
            </div>
          </FadeIn>

          {/* Other projects grid */}
          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {PROJECTS.slice(1).map((proj, i) => (
              <FadeIn key={proj.title} delay={i * 0.09}>
                <div className="card" style={{ padding: "28px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "#1a1d2e", marginBottom: 4 }}>{proj.title}</h3>
                  <p style={{ color: "#9ca3af", fontSize: "0.78rem", fontWeight: 500, marginBottom: 12 }}>{proj.subtitle}</p>
                  <p style={{ color: "#4b5563", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 18, flex: 1 }}>{proj.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 20 }}>
                    {proj.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button className="btn-sm btn-sm-primary">⎇ Source Code</button>
                    <button className="btn-sm btn-sm-ghost">↗ Live Demo</button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section id="why">
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <FadeIn>
            <p className="section-label" style={{ marginBottom: 12, textAlign: "center" }}>Why Work With Me</p>
            <h2 className="section-title" style={{ marginBottom: 16, textAlign: "center" }}>What I Bring</h2>
            <p style={{ textAlign: "center", color: "#6b7280", lineHeight: 1.8, marginBottom: 48, maxWidth: 520, margin: "0 auto 48px" }}>
              I have a solid foundation in Machine Learning and NLP, backed by hands-on project work. I can build, evaluate, and ship ML models — and I care about solving problems that actually matter.
            </p>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {WHY_POINTS.map((p, i) => (
              <FadeIn key={p.label} delay={i * 0.08}>
                <div className="why-item">
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{p.icon}</span>
                  <p style={{ color: "#374151", fontWeight: 500, lineHeight: 1.5 }}>{p.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <FadeIn>
            <p className="section-label" style={{ marginBottom: 12 }}>Get In Touch</p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Let's Connect</h2>
            <p style={{ color: "#6b7280", lineHeight: 1.8, marginBottom: 48 }}>
              I'm open to ML, AI, and Data Science internship opportunities. Feel free to reach out.
            </p>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { icon: "⎇", label: "GitHub", sub: "github.com/yourhandle", href: "#" },
              { icon: "in", label: "LinkedIn", sub: "linkedin.com/in/yourname", href: "#" },
              { icon: "✉", label: "Email", sub: "youremail@example.com", href: "mailto:youremail@example.com" },
            ].map((c, i) => (
              <FadeIn key={c.label} delay={i * 0.1}>
                <a href={c.href} className="contact-card" target="_blank" rel="noopener noreferrer">
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: "#eef2ff", border: "1px solid #c7d2fe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", fontWeight: 700, color: "#6366f1", flexShrink: 0 }}>{c.icon}</div>
                  <div style={{ textAlign: "left" }}>
                    <p style={{ fontWeight: 600, color: "#1a1d2e", marginBottom: 2 }}>{c.label}</p>
                    <p style={{ fontSize: "0.82rem", color: "#9ca3af" }}>{c.sub}</p>
                  </div>
                  <span style={{ marginLeft: "auto", color: "#c7d2fe", fontSize: "1.1rem" }}>→</span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1a1d2e", color: "#6b7280", textAlign: "center", padding: "28px 24px", fontSize: "0.82rem" }}>
        <p>Built by <span style={{ color: "#a5b4fc" }}>[Your Name]</span> · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
