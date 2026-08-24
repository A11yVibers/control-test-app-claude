import { useState } from 'react'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
]

const PROJECTS = [
  {
    title: 'Interpretable Machine Learning for Genomic Data',
    description:
      'Developing interpretable deep learning models to identify regulatory elements from single-cell sequencing data, with a focus on models that surface biologically meaningful explanations rather than black-box predictions.',
  },
  {
    title: 'Scalable Bayesian Inference for Structured Biological Networks',
    description:
      'Building scalable variational inference methods for large gene-regulatory and protein-interaction networks, enabling uncertainty-aware predictions on datasets with millions of interactions.',
  },
  {
    title: 'Fairness and Robustness in Clinical Prediction Models',
    description:
      'Studying how distribution shift across hospital populations affects the fairness and reliability of clinical risk-prediction models, and designing training procedures that are robust to these shifts.',
  },
]

const INTERESTS = [
  'Machine learning for biology and medicine',
  'Probabilistic modeling and Bayesian inference',
  'Interpretability and explainability of deep models',
  'Fairness, robustness, and generalization',
]

const PUBLICATIONS = [
  {
    authors: 'Doe, J., Smith, A., & Lee, K.',
    year: '2025',
    title: 'Interpretable Regulatory Element Discovery from Single-Cell Chromatin Data',
    venue: 'Journal of Computational Biology, 32(4), 512–530.',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1000/example-doi-1' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/0000.00001' },
    ],
  },
  {
    authors: 'Doe, J., & Patel, R.',
    year: '2024',
    title: 'Scalable Variational Inference for Large-Scale Gene Regulatory Networks',
    venue: 'Proceedings of the International Conference on Machine Learning (ICML), 41.',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1000/example-doi-2' },
      { label: 'PDF', href: 'https://example.edu/papers/scalable-vi-grn.pdf' },
    ],
  },
  {
    authors: 'Chen, M., Doe, J., & Nguyen, T.',
    year: '2023',
    title: 'Auditing Fairness in Clinical Risk Models Under Population Shift',
    venue: 'Nature Digital Medicine, 6, 88.',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1000/example-doi-3' },
    ],
  },
  {
    authors: 'Doe, J.',
    year: '2022',
    title: 'Bayesian Deep Learning for Structured Biological Data (PhD Dissertation)',
    venue: 'Stanford University.',
    links: [
      { label: 'PDF', href: 'https://example.edu/papers/doe-dissertation.pdf' },
    ],
  },
]

const CONTACT_LINKS = [
  { label: 'Email', href: 'mailto:jane.doe@university.edu', value: 'jane.doe@university.edu' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=EXAMPLE' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0000-0000-0000' },
  { label: 'GitHub', href: 'https://github.com/janedoe' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/janedoe' },
]

const PROFILE_IMAGE =
  'https://ui-avatars.com/api/?name=Jane+Doe&size=320&background=1d3557&color=f1faee&bold=true&font-size=0.38'

function NavBar({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (id) => {
    setMenuOpen(false)
    onNavigate(id)
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a
          className="brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleClick('home')
          }}
        >
          Dr. Jane Doe
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                handleClick(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Home() {
  return (
    <section id="home" className="section hero">
      <img className="profile-image" src={PROFILE_IMAGE} alt="Portrait of Dr. Jane Doe" loading="lazy" />
      <div className="hero-text">
        <h1>Dr. Jane Doe</h1>
        <p className="title">Assistant Professor of Computational Biology, University of Example</p>
        <p className="bio">
          I am a researcher working at the intersection of machine learning and biology, developing
          interpretable and robust computational methods for understanding complex biological systems.
          My work combines probabilistic modeling with modern deep learning to help scientists and
          clinicians make better use of large-scale genomic and clinical data.
        </p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <p>
        I lead the Computational Systems Biology Lab at the University of Example, where my group
        develops machine learning methods tailored to the challenges of biological and clinical data:
        high dimensionality, structured relationships, and the need for models that domain experts can
        trust and interpret.
      </p>
      <p>
        I received my Ph.D. in Computer Science from Stanford University, followed by a postdoctoral
        fellowship at the Broad Institute. Before that, I completed a B.S. in Applied Mathematics at
        MIT. My research has been supported by the National Science Foundation and the Chan Zuckerberg
        Initiative, and I regularly collaborate with clinicians and biologists to ground my methods in
        real-world problems.
      </p>
      <p>
        Outside of research, I am committed to mentoring early-career scientists and improving access
        to open, reproducible computational tools for the broader research community.
      </p>
    </section>
  )
}

function Research() {
  return (
    <section id="research" className="section">
      <h2>Research</h2>
      <h3>Key Interests</h3>
      <ul className="interest-list">
        {INTERESTS.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
      <h3>Current Projects</h3>
      <div className="project-grid">
        {PROJECTS.map((project) => (
          <article key={project.title} className="project-card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Publications() {
  return (
    <section id="publications" className="section">
      <h2>Publications</h2>
      <ol className="publication-list">
        {PUBLICATIONS.map((pub) => (
          <li key={pub.title} className="publication-item">
            <p className="pub-citation">
              {pub.authors} ({pub.year}). <span className="pub-title">{pub.title}</span>. {pub.venue}
            </p>
            <div className="pub-links">
              {pub.links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>
        I welcome inquiries about collaborations, prospective students, and speaking opportunities.
        Feel free to reach out or find me through the links below.
      </p>
      <ul className="contact-list">
        {CONTACT_LINKS.map((link) => (
          <li key={link.label}>
            <span className="contact-label">{link.label}:</span>{' '}
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.value ?? link.href}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Jane Doe. Built with React and Vite.</p>
    </footer>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  const handleNavigate = (id) => {
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <>
      <NavBar activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <Home />
        <About />
        <Research />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
