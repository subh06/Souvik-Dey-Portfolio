import { useEffect, useMemo, useState, type MouseEvent as ReactMouseEvent } from 'react';
import { ArrowRight, ArrowUpRight, Cuboid, PlayCircle, Sparkles, Wand2 } from 'lucide-react';

type ProjectType = 'Video Editing' | '3D CGI' | 'Motion Graphics' | 'SaaS & Explainers';

interface Project {
  title: string;
  type: ProjectType;
  description: string;
}

interface Service {
  title: ProjectType;
  bullets: string[];
}

const projects: Project[] = [
  {
    title: 'Founder Brand Reel',
    type: 'Video Editing',
    description: 'Short-form storytelling edit with rhythm-sync cuts and cinematic tone shaping.'
  },
  {
    title: 'Smartwatch CGI Launch',
    type: '3D CGI',
    description: 'Product hero film with realistic materials, dynamic cameras, and studio-grade lighting.'
  },
  {
    title: 'Motion System for Campaign',
    type: 'Motion Graphics',
    description: 'Modular animation toolkit for social, ads, and high-retention promotional content.'
  },
  {
    title: 'SaaS Product Explainer',
    type: 'SaaS & Explainers',
    description: 'Conversion-led explainer with clean UI animation and value-first information flow.'
  }
];

const services: Service[] = [
  {
    title: 'Video Editing',
    bullets: ['Hook-first pacing', 'Color grading', 'Retention-focused story structure']
  },
  {
    title: '3D CGI',
    bullets: ['Photoreal product renders', 'Procedural lighting', 'Camera choreography']
  },
  {
    title: 'Motion Graphics',
    bullets: ['Brand motion systems', 'Animated typography', 'Social ad animation packs']
  },
  {
    title: 'SaaS & Explainers',
    bullets: ['Product walkthroughs', 'UI-driven narratives', 'Conversion-focused scripts']
  }
];

const filters: Array<ProjectType | 'All'> = ['All', 'Video Editing', '3D CGI', 'Motion Graphics', 'SaaS & Explainers'];

function App() {
  const [activeFilter, setActiveFilter] = useState<ProjectType | 'All'>('All');
  const [activeService, setActiveService] = useState<ProjectType>('Video Editing');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === 'All' || project.type === activeFilter),
    [activeFilter]
  );

  const selectedService = useMemo(
    () => services.find((service) => service.title === activeService) ?? services[0],
    [activeService]
  );

  useEffect(() => {
    const onMove = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const revealNodes = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const applyTilt = (event: ReactMouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((event.clientX - centerX) / rect.width) * 12;
    const rotateX = -((event.clientY - centerY) / rect.height) * 12;
    element.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`);
    element.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`);
  };

  const clearTilt = (event: ReactMouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    element.style.setProperty('--rx', '0deg');
    element.style.setProperty('--ry', '0deg');
  };

  return (
    <div className="portfolio-shell">
      <div className="cursor-glow" style={{ transform: `translate(${cursor.x - 120}px, ${cursor.y - 120}px)` }} />

      <header className="top-nav reveal">
        <p className="brand">Souvik Dey</p>
        <nav className="mini-links" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero reveal" id="home">
          <div className="hero-3d" aria-hidden="true">
            <div className="cube cube-a" />
            <div className="cube cube-b" />
            <div className="ring" />
          </div>
          <p className="kicker">Portfolio • 3 Years Experience</p>
          <h1>
            Video Editing, 3D CGI,
            <br />
            Motion Graphics & SaaS Explainers.
          </h1>
          <p className="hero-copy">
            I build premium visual content for creators, startups, and modern brands — crafted with precision,
            performance, and style.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button-primary">
              <PlayCircle size={18} /> Explore Work
            </a>
            <a href="#contact" className="button-ghost">
              Hire Me <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="about-grid" id="about">
          <article className="reveal">
            <h2>About Me</h2>
            <p>
              I’m <strong>Souvik Dey</strong>, a visual creative with 3 years of hands-on experience delivering
              edits, CGI, and explainers that help brands communicate clearly and convert faster.
            </p>
          </article>
          <article className="reveal glass">
            <h3>Why clients return</h3>
            <ul>
              <li>Fast iterations with premium output quality</li>
              <li>Storytelling + design thinking in one pipeline</li>
              <li>Content tailored to audience retention metrics</li>
            </ul>
          </article>
        </section>

        <section className="services reveal" id="services">
          <div className="section-title">
            <h2>Interactive Services</h2>
            <Wand2 size={18} />
          </div>
          <div className="service-layout">
            <div className="service-tabs">
              {services.map((service) => (
                <button
                  key={service.title}
                  type="button"
                  className={activeService === service.title ? 'service-tab active' : 'service-tab'}
                  onClick={() => setActiveService(service.title)}
                >
                  {service.title}
                </button>
              ))}
            </div>
            <article className="service-panel tilt-card" onMouseMove={applyTilt} onMouseLeave={clearTilt}>
              <h3>{selectedService.title}</h3>
              <ul>
                {selectedService.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a href="#contact" className="inline-action">
                Book this service <ArrowRight size={14} />
              </a>
            </article>
          </div>
        </section>

        <section className="work reveal" id="work">
          <div className="section-title">
            <h2>Selected Work</h2>
            <Sparkles size={18} />
          </div>

          <div className="filter-row" role="tablist" aria-label="Project filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? 'chip active' : 'chip'}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {visibleProjects.map((project) => (
              <article
                key={project.title}
                className="project-card reveal tilt-card"
                onMouseMove={applyTilt}
                onMouseLeave={clearTilt}
              >
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="faq reveal">
          <div className="section-title">
            <h2>Quick FAQs</h2>
            <Cuboid size={18} />
          </div>
          {[{
            q: 'How quickly can you deliver?',
            a: 'Most short-form edits are delivered in 2-4 days. Larger CGI or campaign systems are scoped by complexity.'
          }, {
            q: 'Do you provide revisions?',
            a: 'Yes. Every project includes structured feedback rounds to make sure the result aligns with your goal.'
          }, {
            q: 'Can you handle full campaign assets?',
            a: 'Absolutely. I can deliver complete visual packs: hero videos, social cutdowns, and motion templates.'
          }].map((item, index) => (
            <button
              key={item.q}
              className={activeFaq === index ? 'faq-item active' : 'faq-item'}
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              type="button"
            >
              <div>
                <h3>{item.q}</h3>
                {activeFaq === index && <p>{item.a}</p>}
              </div>
              <span>{activeFaq === index ? '−' : '+'}</span>
            </button>
          ))}
        </section>

        <section className="contact reveal" id="contact">
          <h2>Let’s craft your next high-performing visual.</h2>
          <p>Freelance • Monthly retainers • Campaign collaborations</p>
          <a href="mailto:souvik@example.com" className="button-primary">Contact Souvik Dey</a>
        </section>
      </main>
    </div>
  );
}

export default App;
