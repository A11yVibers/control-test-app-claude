import { publications } from '../data.js';

export default function Publications() {
  return (
    <section id="publications" aria-labelledby="publications-heading">
      <div className="container">
        <h2 id="publications-heading">Publications</h2>
        <p>Selected peer-reviewed articles. Full list available on Google Scholar.</p>
        <ol className="pub-list">
          {publications.map((pub) => (
            <li className="pub-item" key={pub.doiHref}>
              <p>
                <cite>{pub.citation}</cite>
              </p>
              <div className="pub-links">
                <a
                  href={pub.doiHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View via <abbr title="Digital Object Identifier">DOI</abbr>
                  <span className="visually-hidden">
                    : {pub.citation} (opens in new tab)
                  </span>
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
