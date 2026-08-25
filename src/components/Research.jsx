const interests = [
  'Computational models of episodic memory',
  'Decision-making under uncertainty',
  'Neuroimaging (fMRI) of hippocampal-cortical networks',
  'Reinforcement learning as a model of cognition',
]

const projects = [
  {
    title: 'Uncertainty-Weighted Memory Consolidation',
    description:
      'Investigating how the brain prioritizes which experiences to consolidate into long-term memory based on estimated uncertainty, using a combination of behavioral tasks and fMRI.',
    funding: 'NSF Award #2114567',
  },
  {
    title: 'Predictive Coding in Episodic Recall',
    description:
      'Developing and testing computational models that treat memory retrieval as a predictive inference process, with applications to age-related memory decline.',
    funding: 'Whitfield Brain Initiative Seed Grant',
  },
  {
    title: 'Cross-Species Comparisons of Value Learning',
    description:
      'Collaborative project comparing reinforcement learning signatures in human and rodent decision-making tasks to identify conserved neural mechanisms.',
    funding: 'Collaborative, PI: Whitfield / Northbridge',
  },
]

export default function Research() {
  return (
    <section id="research" className="section">
      <h2>Research</h2>
      <h3>Key Interests</h3>
      <ul className="interest-list">
        {interests.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>Current Projects</h3>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <p className="project-funding">{project.funding}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
