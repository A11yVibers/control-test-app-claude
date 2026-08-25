export default function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <div className="about-grid">
        <p>
          I lead the Adaptive Memory Lab at Whitfield University, where our team
          investigates the computational and neural mechanisms underlying episodic
          memory formation and retrieval. Before joining Whitfield, I completed a
          postdoctoral fellowship at the Institute for Cognitive Systems and earned
          my Ph.D. in Cognitive Neuroscience from Northbridge University.
        </p>
        <p>
          My research is supported by grants from the National Science Foundation
          and the Whitfield Brain Initiative. I teach graduate courses on
          computational modeling of cognition and undergraduate courses on the
          neuroscience of learning and memory.
        </p>
        <ul className="about-facts">
          <li><strong>Position:</strong> Associate Professor, Department of Psychology</li>
          <li><strong>Ph.D.:</strong> Cognitive Neuroscience, Northbridge University, 2014</li>
          <li><strong>Lab:</strong> Adaptive Memory Lab, Whitfield University</li>
          <li><strong>Location:</strong> Whitfield, USA</li>
        </ul>
      </div>
    </section>
  )
}
