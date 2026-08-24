import { navItems } from '../data.js';

export default function Header({ activeId }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <div className="container">
          <a className="site-name" href="#home">
            Dr. Amara Osei
          </a>
          <nav className="primary-nav" aria-label="Primary">
            <ul>
              {navItems.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
