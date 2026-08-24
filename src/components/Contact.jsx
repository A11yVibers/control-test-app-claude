const contactLinks = [
  {
    id: 'email',
    label: 'Email: amara.osei@bellhaven.edu',
    href: 'mailto:amara.osei@bellhaven.edu',
    external: false,
    icon: (
      <path d="M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 2.24-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24z" />
    ),
  },
  {
    id: 'scholar',
    label: 'Google Scholar profile',
    href: 'https://scholar.google.com/citations?user=amaraosei',
    external: true,
    icon: (
      <path d="M12 2 1 9l4 2.5V17l7 4 7-4v-5.5L21 10v6h1V9L12 2zm0 2.3L18.8 9 12 13.3 5.2 9 12 4.3zM7 12.9l5 3.1 5-3.1v3.5l-5 2.9-5-2.9v-3.5z" />
    ),
  },
  {
    id: 'orcid',
    label: 'ORCID record',
    href: 'https://orcid.org/0000-0002-1825-0097',
    external: true,
    icon: (
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM7.4 7.1a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM8.3 17H6.5V10.2h1.8V17zm2.3-6.8h3.1c2.9 0 4.2 2.1 4.2 3.9 0 2-1.6 3.9-4.2 3.9h-3.1V10.2zm1.8 1.6v4.6h1.2c1.8 0 2.5-1.3 2.5-2.3 0-1.2-.8-2.3-2.5-2.3h-1.2z" />
    ),
  },
  {
    id: 'github',
    label: 'GitHub profile',
    href: 'https://github.com/amaraosei',
    external: true,
    icon: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn profile',
    href: 'https://www.linkedin.com/in/amaraosei',
    external: true,
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3V9zm7 0h3.8v1.64h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.55 4.75 5.87V21h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97V21h-4V9z" />
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading">Contact</h2>
        <p>
          I welcome enquiries about collaboration, speaking, and prospective
          graduate students.
        </p>
        <ul className="contact-list">
          {contactLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  {link.icon}
                </svg>
                <span>
                  {link.label}
                  {link.external && (
                    <span className="visually-hidden"> (opens in new tab)</span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
