// Static content for the site. Kept in one place so the section
// components stay focused on markup/structure.

export const researcher = {
  name: 'Dr. Amara Osei',
  title: 'Associate Professor of Cognitive Neuroscience, Bellhaven University',
  shortBio:
    "I study how the human brain encodes and retrieves memories, and how that process shapes everyday decisions. My lab combines behavioural experiments with neuroimaging to build models that are both biologically grounded and practically useful.",
  // Stable, freely licensed portrait from Unsplash (Unsplash License —
  // free to use, no attribution required, hotlinked rather than stored
  // locally per project constraints).
  photo: {
    src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=480&h=480&q=80',
    alt: 'Portrait of Dr. Amara Osei smiling, standing in front of a bookshelf.',
  },
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' },
];

export const aboutParagraphs = [
  "I received my PhD in Cognitive Neuroscience from the University of Toronto in 2015, followed by a postdoctoral fellowship at the Max Planck Institute for Human Development. Since 2019 I have led the Memory & Decision Lab at Bellhaven University.",
  'Outside the lab, I teach an undergraduate course on the psychology of judgement, mentor early-career researchers from underrepresented backgrounds, and serve as a reviewing editor for two peer-reviewed journals.',
];

export const researchInterests = [
  'Episodic memory consolidation during sleep',
  'Neural correlates of risk-based decision-making',
  'Computational models of hippocampal-prefrontal interaction',
  'Age-related change in memory-guided choice',
];

export const currentProjects = [
  {
    title: 'Sleep and Memory Reconsolidation (SAMR) Study',
    description:
      'A longitudinal fMRI study tracking how overnight sleep stages influence the stability of newly formed episodic memories in healthy adults.',
  },
  {
    title: 'Decisions Under Uncertainty in Older Adults',
    description:
      'Behavioural and computational modelling work examining how age-related memory change affects everyday financial and health decisions.',
  },
  {
    title: 'Open Hippocampus Atlas',
    description:
      'An open-source, community-maintained atlas of hippocampal subfields built from harmonised, multi-site MRI data.',
  },
];

export const publications = [
  {
    citation:
      'Osei, A., Fernandez, L., & Whitcombe, R. (2024). Sleep-dependent consolidation of episodic memory: A within-subject fMRI study. Journal of Cognitive Neuroscience, 36(4), 512–530.',
    doiHref: 'https://doi.org/10.1162/jocn_a_02071',
    doiLabel: 'https://doi.org/10.1162/jocn_a_02071',
  },
  {
    citation:
      'Osei, A., & Marchetti, S. (2023). Prefrontal-hippocampal coupling during risky choice. Nature Human Behaviour, 7(2), 210–224.',
    doiHref: 'https://doi.org/10.1038/s41562-023-01512-9',
    doiLabel: 'https://doi.org/10.1038/s41562-023-01512-9',
  },
  {
    citation:
      'Osei, A., Grant, K., & Boateng, P. (2021). Memory-guided decision-making across the adult lifespan. Psychological Science, 32(11), 1745–1760.',
    doiHref: 'https://doi.org/10.1177/09567976211020456',
    doiLabel: 'https://doi.org/10.1177/09567976211020456',
  },
];
