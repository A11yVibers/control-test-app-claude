export default function Home() {
  return (
    <section id="home" className="section hero">
      <div className="hero-image-wrap">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=480&h=480&q=80"
          alt="Portrait of Dr. Elena Marston"
          width="240"
          height="240"
        />
      </div>
      <div className="hero-text">
        <h1>Dr. Elena Marston</h1>
        <p className="hero-title">Associate Professor of Cognitive Neuroscience, Whitfield University</p>
        <p className="hero-bio">
          I study how the human brain represents and updates memories under uncertainty,
          combining behavioral experiments, computational modeling, and neuroimaging.
          My work bridges cognitive psychology and machine learning to build better
          theories of adaptive decision-making.
        </p>
        <div className="hero-actions">
          <a className="button" href="#publications">View Publications</a>
          <a className="button button-outline" href="#contact">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}
