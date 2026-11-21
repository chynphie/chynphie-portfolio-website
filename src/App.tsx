import { useEffect, useState } from "react";
import portraitUrl from "./assets/chynphie-portrait.jpg";
import heroPortraitUrl from "./assets/chynphie-hero.jpg";

const Arrow = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 20 20">
    <path
      d="M4 10h12m-5-5 5 5-5 5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

const Spark = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 32 32">
    <path
      d="M16 1.5c.75 9.2 5.3 13.75 14.5 14.5C21.3 16.75 16.75 21.3 16 30.5 15.25 21.3 10.7 16.75 1.5 16 10.7 15.25 15.25 10.7 16 1.5Z"
      fill="currentColor"
    />
  </svg>
);

const projects = [
  {
    number: "01",
    title: "PassOP",
    category: "React · Express · MongoDB · Docker",
    description:
      "A secure credential manager with AES-GCM encryption, Argon2id hashing, breach detection, and automated deployment.",
    color: "#f0a8c1",
    visual: "daylight",
    href: "https://github.com/chynphie/passop_mongo",
  },
  {
    number: "02",
    title: "Dev Agent",
    category: "TypeScript · AI · Validation pipelines",
    description:
      "An autonomous, spec-driven development agent that automated 10+ workflows and improved engineering efficiency by 30%.",
    color: "#b6d8f2",
    visual: "common",
    href: "mailto:s24yang@uwaterloo.ca?subject=Let's talk about your autonomous development agent",
  },
  {
    number: "03",
    title: "Scheduling Hub",
    category: "Next.js · Entra ID · NGINX",
    description:
      "A production scheduling system with enterprise SSO that improved on-time delivery by 35% and cut manual coordination by 30%.",
    color: "#efc96a",
    visual: "field",
    href: "mailto:s24yang@uwaterloo.ca?subject=Let's talk about your scheduling system",
  },
];

const experience = [
  {
    year: "Sep 2026 — Present",
    company: "Carta",
    role: "Software Engineering Intern",
    impact:
      "Migrating carta.com to reusable Astro, React, and Contentful architecture while supporting an AWS and Kubernetes production cutover.",
  },
  {
    year: "Jan — Apr 2026",
    company: "Constant Contact",
    role: "Software Engineering Intern",
    impact:
      "Built an autonomous TypeScript development agent, shipped Next.js features, and automated reporting with Snowflake and AI.",
  },
  {
    year: "Sep — Dec 2025",
    company: "Marketing Kitchen",
    role: "Software Engineering Intern",
    impact:
      "Delivered enterprise scheduling, real-time Go WebSocket improvements, and parallel C# processing that cut delays by 60%.",
  },
  {
    year: "May — Dec 2024",
    company: "Ontario Public Service",
    role: "Software Engineering Intern",
    impact:
      "Built Angular and Spring Boot workflows for 2,000+ organizations and a scoring dashboard spanning 250+ programs.",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "daylight") {
    return (
      <div className="project-art daylight-art">
        <div className="sun-disc" />
        <div className="phone phone-left">
          <div className="phone-pill" />
          <p>Welcome back</p>
          <strong>••••••</strong>
          <span>encrypted locally</span>
          <div className="mini-chart" />
        </div>
        <div className="phone phone-right">
          <div className="phone-pill" />
          <p>Security check</p>
          <div className="task-line wide" />
          <div className="task-line" />
          <div className="task-line short" />
        </div>
      </div>
    );
  }

  if (type === "common") {
    return (
      <div className="project-art common-art">
        <span className="community-type">DEV</span>
        <span className="community-type second">AGENT</span>
        <div className="community-card one">
          SPEC
          <br />
          DRIVEN
        </div>
        <div className="community-card two">
          VALIDATE
          <br />
          &amp; ITERATE
        </div>
        <div className="community-dot" />
      </div>
    );
  }

  return (
    <div className="project-art field-art">
      <div className="field-copy">
        <span>SCHEDULING HUB</span>
        <h3>
          Ship on
          <br />
          time.
        </h3>
        <p>SSO · REAL TIME</p>
      </div>
      <div className="field-photo">
        <div className="field-sun" />
        <div className="mountain far" />
        <div className="mountain near" />
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={scrolled ? "site-header scrolled" : "site-header"}>
        <a className="logo" href="#top" aria-label="Chynphie Yang, home">
          CY<span>.</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a className="nav-contact" href="mailto:s24yang@uwaterloo.ca">
            Let&apos;s talk <Arrow />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-kicker">
            <span className="status-dot" />
            Seeking software engineering opportunities
          </div>
          <div className="hero-grid">
            <h1 id="hero-title">
              I build software
              <br />
              that works <em>beautifully.</em>
            </h1>
            <div className="hero-side">
              <img className="hero-portrait" src={heroPortraitUrl} alt="Chynphie Yang by the Golden Gate Bridge" width={900} height={1200} fetchPriority="high" />
              <p>
                I&apos;m <strong>Chynphie Yang</strong>, a software engineer and Mathematics student
                at the University of Waterloo. I turn complex systems into reliable, human-centered
                products.
              </p>
              <a className="text-link" href="#work">
                Explore my work <Arrow />
              </a>
            </div>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <Spark />
            <span>
              BUILDING WITH
              <br />
              LOGIC &amp; CURIOSITY
            </span>
          </div>
          <span className="scribble" aria-hidden="true">
            ✦
          </span>
        </section>

        <section className="marquee" aria-label="Areas of expertise">
          <div>
            <span>Full-stack engineering</span>
            <Spark />
            <span>React &amp; TypeScript</span>
            <Spark />
            <span>Cloud infrastructure</span>
            <Spark />
            <span>Developer tooling</span>
            <Spark />
            <span>Full-stack engineering</span>
            <Spark />
            <span>React &amp; TypeScript</span>
          </div>
        </section>

        <section className="work section-pad" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <span className="eyebrow">Selected builds · 2024–26</span>
            <h2 id="work-title">Engineering with measurable impact.</h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <div className="project-visual" style={{ backgroundColor: project.color }}>
                  <ProjectVisual type={project.visual} />
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="project-info">
                  <div>
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <a
                    className="circle-button"
                    href={project.href}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={`Explore the ${project.title} project`}
                  >
                    <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-pad" id="about" aria-labelledby="about-title">
          <div className="about-label">
            <span className="eyebrow">A little about me</span>
            <div className="portrait">
              <img src={portraitUrl} alt="Chynphie Yang standing in a sunlit woodland" />
            </div>
          </div>
          <div className="about-copy">
            <h2 id="about-title">
              A mathematician who <em>builds</em>
              <br />
              for the real world.
            </h2>
            <div className="about-columns">
              <p>
                I study Combinatorics and Optimization and Computational Mathematics, with a minor
                in Computing at the University of Waterloo. I enjoy solving problems from first
                principles and shipping the result.
              </p>
              <p>
                Across government, marketing technology, and developer platforms, I&apos;ve built
                full-stack products, real-time systems, infrastructure migrations, and automation
                used by teams and thousands of organizations.
              </p>
            </div>
            <a className="text-link" href="mailto:s24yang@uwaterloo.ca">
              Start a conversation <Arrow />
            </a>
          </div>
        </section>

        <section
          className="experience section-pad"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading experience-heading">
            <span className="eyebrow">Where I&apos;ve been</span>
            <h2 id="experience-title">Experience</h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <div className="experience-row" key={item.company}>
                <span>{item.year}</span>
                <strong>{item.company}</strong>
                <span>{item.role}</span>
                <p>{item.impact}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="skills section-pad" aria-labelledby="skills-title">
          <div className="skills-heading">
            <span className="eyebrow">Technical toolkit</span>
            <h2 id="skills-title">
              From interface
              <br />
              to <em>infrastructure.</em>
            </h2>
          </div>
          <div className="skills-list">
            <div>
              <span>Languages</span>
              <p>TypeScript, JavaScript, Python, Java, Go, C, C++, C#, R, SQL</p>
            </div>
            <div>
              <span>Frameworks</span>
              <p>React, Angular, Node.js, Express, ASP.NET Core, Spring Boot, NumPy</p>
            </div>
            <div>
              <span>Tools &amp; platforms</span>
              <p>
                Git, Docker, Playwright, Azure, MongoDB, Snowflake, Astro, Kubernetes, GraphQL, MCP
              </p>
            </div>
          </div>
        </section>

        <section className="facts section-pad" aria-labelledby="facts-title">
          <div className="facts-intro">
            <span className="eyebrow">Beyond the terminal</span>
            <h2 id="facts-title">
              Code is only
              <br />
              <em>part of me.</em>
            </h2>
          </div>
          <div className="fact-grid">
            <div className="fact-card peach">
              <span className="fact-icon">Vln.</span>
              <p>I play violin—a different kind of practice in precision, rhythm, and listening.</p>
            </div>
            <div className="fact-card blue">
              <span className="fact-icon">Art.</span>
              <p>I paint when I want to trade structured logic for color and intuition.</p>
            </div>
            <div className="fact-card yellow">
              <span className="fact-icon">C&amp;O</span>
              <p>My Mathematics major explores combinatorics, optimization, and computation.</p>
            </div>
            <div className="fact-card pink">
              <span className="fact-icon">10+</span>
              <p>Engineering workflows automated by the autonomous development agent I built.</p>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <span className="eyebrow">Building a great engineering team?</span>
          <h2>
            Let&apos;s build something
            <br />
            <em>good</em> together.
          </h2>
          <a className="contact-link" href="mailto:s24yang@uwaterloo.ca">
            s24yang@uwaterloo.ca <Arrow />
          </a>
          <Spark className="contact-spark" />
        </section>
      </main>

      <footer className="footer section-pad">
        <a className="logo footer-logo" href="#top">
          CY<span>.</span>
        </a>
        <p>© 2026 Chynphie Yang. Engineered with care.</p>
        <div>
          <a href="https://www.linkedin.com/in/qingfei-yang/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/chynphie" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
