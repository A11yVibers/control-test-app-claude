const links = [
  { label: 'Email', href: 'mailto:elena.marston@whitfield.edu', text: 'elena.marston@whitfield.edu' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=example' },
  { label: 'ORCID', href: 'https://orcid.org/0000-0002-1825-0097' },
  { label: 'GitHub', href: 'https://github.com/example' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/example' },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>I'm always happy to connect with collaborators, students, and fellow researchers.</p>
      <ul className="contact-list">
        {links.map((link) => (
          <li key={link.label}>
            <span className="contact-label">{link.label}:</span>{' '}
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.text ?? link.href.replace('https://', '')}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
