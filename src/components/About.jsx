import { aboutParagraphs } from '../data.js';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading">About</h2>
        {aboutParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
