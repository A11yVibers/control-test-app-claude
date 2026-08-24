import { researcher } from '../data.js';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="home-heading">
      <div className="container">
        <div className="hero-text">
          <p className="eyebrow">Research Portfolio</p>
          <h1 id="home-heading">{researcher.name}</h1>
          <p>{researcher.title}</p>
          <p>{researcher.shortBio}</p>
        </div>
        <div className="hero-photo-wrap">
          <img
            className="hero-photo"
            src={researcher.photo.src}
            alt={researcher.photo.alt}
            width="480"
            height="480"
          />
        </div>
      </div>
    </section>
  );
}
