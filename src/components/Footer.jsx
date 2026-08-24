import { navItems } from '../data.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {year} Dr. Amara Osei. All rights reserved.</p>
        <p>
          <a href="mailto:amara.osei@bellhaven.edu">
            amara.osei@bellhaven.edu
          </a>
        </p>
        <nav aria-label="Footer">
          <ul className="footer-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
