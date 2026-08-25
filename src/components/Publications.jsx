const publications = [
  {
    citation:
      'Marston, E., & Cho, D. (2024). Uncertainty-weighted consolidation in episodic memory. Journal of Cognitive Neuroscience, 36(4), 512–530.',
    link: 'https://doi.org/10.1162/jocn_a_02012',
    linkLabel: 'DOI',
  },
  {
    citation:
      'Marston, E., Patel, R., & Lindqvist, S. (2023). Predictive coding accounts of hippocampal replay. Nature Reviews Neuroscience, 24(2), 88–101.',
    link: 'https://doi.org/10.1038/s41583-023-00678-2',
    linkLabel: 'DOI',
  },
  {
    citation:
      'Cho, D., Marston, E., & Ahmadi, F. (2022). Reinforcement learning signatures across species: A comparative fMRI study. eLife, 11, e75432.',
    link: 'https://doi.org/10.7554/eLife.75432',
    linkLabel: 'DOI',
  },
  {
    citation:
      'Marston, E. (2021). Adaptive memory under uncertainty: A computational framework. Ph.D. Dissertation, Northbridge University.',
    link: 'https://scholar.google.com/citations?user=example',
    linkLabel: 'Google Scholar',
  },
]

export default function Publications() {
  return (
    <section id="publications" className="section">
      <h2>Publications</h2>
      <ol className="publication-list">
        {publications.map((pub) => (
          <li key={pub.citation}>
            <p>{pub.citation}</p>
            <a href={pub.link} target="_blank" rel="noopener noreferrer">
              {pub.linkLabel} ↗
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}
