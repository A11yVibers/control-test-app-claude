import { currentProjects, researchInterests } from '../data.js';

export default function Research() {
  return (
    <section id="research" aria-labelledby="research-heading">
      <div className="container">
        <h2 id="research-heading">Research</h2>

        <h3 id="research-interests-heading">Key interests</h3>
        <ul aria-labelledby="research-interests-heading">
          {researchInterests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>

        <h3 id="current-projects-heading">Current projects</h3>
        <div className="card-grid" aria-labelledby="current-projects-heading">
          {currentProjects.map((project) => (
            <article className="card" key={project.title}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
