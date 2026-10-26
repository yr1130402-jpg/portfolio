/* ============================================================
   PREMIUM VIDEO CREATOR PORTFOLIO — script.js
   Vanilla JavaScript — no frameworks required
   ============================================================

   SECTIONS:
   1.  SITE CONFIGURATION  ← Edit your personal info here
   2.  PROJECT DATA        ← Add/edit your videos here
   3.  SERVICES DATA       ← Edit your services here
   4.  CATEGORY SYSTEM
   5.  PORTFOLIO RENDERER
   6.  FEATURED PROJECT
   7.  SERVICES RENDERER
   8.  ABOUT SKILLS
   9.  CONTACT RENDERER
   10. VIDEO MODAL
   11. FILTER LOGIC
   12. NAVIGATION & SCROLL
   13. ENTRANCE ANIMATIONS
   14. FOOTER
   15. INITIALIZATION
   ============================================================ */

/* ── 1. SITE CONFIGURATION ───────────────────────────────────
   Change these values to personalize the website.
   ─────────────────────────────────────────────────────────── */
const siteConfig = {
  // Creator identity
  name:             '[YOUR NAME]',           // e.g. "Alex Morel"
  initials:         'VC',                    // shown in the logo mark
  logoText:         'VideoCreator',          // shown next to the logo mark
  title:            'AI Video Creator & Video Editor',
  tagline:          'I turn creative ideas into engaging visual stories.',
  location:         'Morocco',
  bio: [
    "I'm an AI video creator and editor based in Morocco, passionate about the intersection of technology and creative storytelling. I specialize in producing AI-generated videos, cinematic short films, comedy content, and polished social media videos.",
    "Every project I take on is treated as an opportunity to create something memorable — something that connects with an audience and communicates a clear, authentic message."
  ],

  // Contact — use empty strings to hide a link
  email:            'yassineboumeshoule@gmail.com',
  whatsapp:         '+212644446799',           // WhatsApp number (international format)
  instagram:        '[YOUR INSTAGRAM URL]',  // e.g. "https://instagram.com/yourhandle"
  tiktok:           '[YOUR TIKTOK URL]',     // e.g. "https://tiktok.com/@yourhandle"
  youtube:          '',                      // optional
  twitter:          '',                      // optional

  // Hero section
  heroHeadline:     'Ideas Into\nVisual Stories.',  // \n = line break
  heroSubtitle:     'AI-generated videos, cinematic storytelling, and social media content — from Morocco to the world.',
  heroMeta:         'AI VIDEO\u00A0/\u00A0CINEMATIC PRODUCTION\u00A0/\u00A0EDITING',
  heroBg:           'assets/images/hero-poster.jpg', // fallback image
  heroVideo:        '',  // set to e.g. 'assets/videos/hero.mp4' if you have a hero video

  // SEO
  siteTitle:        'AI Video Creator & Editor — Visual Storytelling Portfolio',
  siteDescription:  'Professional AI video creator and editor specializing in cinematic storytelling, AI-generated videos, comedy, and social media content. Based in Morocco.',
  siteUrl:          '',  // e.g. "https://yourusername.github.io/portfolio"

  // Skills (shown in About section)
  skills: [
    'AI Video Generation',
    'Cinematic Storytelling',
    'Video Editing',
    'AI Character Design',
    'Short-Form Content',
    'Color Grading',
    'Motion & Sound Design',
    'Social Media Production',
  ],
};

/* ── 2. PROJECT DATA ─────────────────────────────────────────
   Add your real videos by:
   1. Copying your .mp4 file into assets/videos/
   2. Copying a thumbnail image into assets/thumbnails/
   3. Editing the entries below

   Fields:
     id         (string)  — unique identifier, used as CSS id
     title      (string)  — project title shown on card and modal
     category   (string)  — must match a key in CATEGORIES (see section 4)
     description(string)  — short description shown on hover and in modal
     thumbnail  (string)  — relative path to thumbnail image
     video      (string)  — relative path to local .mp4 OR external YouTube embed URL
     type       ('local'|'youtube') — 'local' for MP4, 'youtube' for embed
     featured   (boolean) — set true on ONE project to feature it
     date       (string)  — optional e.g. "2024"
     duration   (string)  — optional e.g. "00:45"
     tools      (string[])— optional tools used
     role       (string)  — optional your role on this project
   ─────────────────────────────────────────────────────────── */
const projects = [
  // ── YOUR REAL VIDEOS ───────────────────────────────────────────────
  // These point to your actual .mp4 files in assets/videos/.
  // Edit: title, category, description, thumbnail, duration, tools, role.
  // For thumbnails: add .jpg files to assets/thumbnails/ matching the paths below,
  //   or leave thumbnail as '' and a placeholder will show instead.
  // Set featured: true on the ONE project you want highlighted at the top.
  // ──────────────────────────────────────────────────────────────────

  {
    id:          'video-01',
    title:       'Project 01 — Edit Title Here',       // ← Replace with real title
    category:    'cinematic',                           // ← Pick: cinematic | comedy | advertisement | social | editing | experimental
    description: 'Add a short description of this project here.',
    thumbnail:   'assets/thumbnails/video-01.jpg',      // ← Add your thumbnail or leave ''
    video:       'assets/videos/video-01.mp4',
    type:        'local',
    featured:    true,                                  // ← Featured project (change to false if you prefer another)
    date:        '2024',
    duration:    '',                                    // ← e.g. '01:20'
    tools:       ['AI Video Generation', 'Video Editing'],
    role:        'Director & Editor',
  },
  {
    id:          'video-02',
    title:       'Project 02 — Edit Title Here',
    category:    'comedy',
    description: 'Add a short description of this project here.',
    thumbnail:   'assets/thumbnails/video-02.jpg',
    video:       'assets/videos/video-02.mp4',
    type:        'local',
    featured:    false,
    date:        '2024',
    duration:    '',
    tools:       ['AI Character Generation', 'Video Editing'],
    role:        'Writer & Director',
  },
  {
    id:          'video-03',
    title:       'Project 03 — Edit Title Here',
    category:    'advertisement',
    description: 'Add a short description of this project here.',
    thumbnail:   'assets/thumbnails/video-03.jpg',
    video:       'assets/videos/video-03.mp4',
    type:        'local',
    featured:    false,
    date:        '2024',
    duration:    '',
    tools:       ['AI Video Generation', 'Color Grading'],
    role:        'Video Director',
  },
  {
    id:          'video-04',
    title:       'Project 04 — Edit Title Here',
    category:    'social',
    description: 'Add a short description of this project here.',
    thumbnail:   'assets/thumbnails/video-04.jpg',
    video:       'assets/videos/video-04.mp4',
    type:        'local',
    featured:    false,
    date:        '2024',
    duration:    '',
    tools:       ['AI Video Generation', 'Video Editing'],
    role:        'Editor',
  },
  {
    id:          'video-05',
    title:       'Project 05 — Edit Title Here',
    category:    'editing',
    description: 'Add a short description of this project here.',
    thumbnail:   'assets/thumbnails/video-05.jpg',
    video:       'assets/videos/video-05.mp4',
    type:        'local',
    featured:    false,
    date:        '2024',
    duration:    '',
    tools:       ['Premiere Pro', 'After Effects'],
    role:        'Editor',
  },
  {
    id:          'video-06',
    title:       'Project 06 — Edit Title Here',
    category:    'cinematic',
    description: 'Add a short description of this project here.',
    thumbnail:   'assets/thumbnails/video-06.jpg',
    video:       'assets/videos/video-06.mp4',
    type:        'local',
    featured:    false,
    date:        '2024',
    duration:    '',
    tools:       ['AI Generation', 'Color Grading'],
    role:        'Creative Director',
  },
  {
    id:          'video-07',
    title:       'Project 07 — Edit Title Here',
    category:    'experimental',
    description: 'Add a short description of this project here.',
    thumbnail:   'assets/thumbnails/video-07.jpg',
    video:       'assets/videos/video-07.mp4',
    type:        'local',
    featured:    false,
    date:        '2024',
    duration:    '',
    tools:       ['AI Generation', 'VFX', 'Sound Design'],
    role:        'Creative Director',
  },
];

/* ── 3. SERVICES DATA ────────────────────────────────────────
   Edit descriptions, add or remove services as needed.
   ─────────────────────────────────────────────────────────── */
const services = [
  {
    id:    'svc-ai-video',
    title: 'AI Video Creation',
    desc:  'End-to-end production of AI-generated videos — from concept and script to final rendered output, tailored to your brief.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="13" height="10" rx="2"/>
              <path d="M15 9l5-3v12l-5-3"/>
            </svg>`,
  },
  {
    id:    'svc-ai-character',
    title: 'AI Character & Scene Generation',
    desc:  'Realistic AI characters and cinematic environments, created and directed with a clear visual and narrative purpose.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>`,
  },
  {
    id:    'svc-storytelling',
    title: 'Creative Storytelling',
    desc:  'Developing compelling scripts and visual narratives that engage your audience and communicate your message clearly.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20h9"/>
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>`,
  },
  {
    id:    'svc-shortform',
    title: 'Short-Form Video Production',
    desc:  'High-quality short videos optimized for TikTok, Instagram Reels, YouTube Shorts, and other social platforms.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2"/>
              <line x1="12" y1="18" x2="12" y2="18"/>
            </svg>`,
  },
  {
    id:    'svc-ads',
    title: 'Product Advertisement Videos',
    desc:  'Cinematic product videos that showcase your brand with elevated aesthetics and persuasive visual storytelling.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>`,
  },
  {
    id:    'svc-editing',
    title: 'Video Editing & Post-Production',
    desc:  'Professional editing services including color grading, sound design, motion graphics, and final delivery in any format.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 7 16 12 23 17 23 7"/>
              <rect x="1" y="5" width="15" height="14" rx="2"/>
            </svg>`,
  },
  {
    id:    'svc-social',
    title: 'Social Media Visual Content',
    desc:  'Consistent, branded visual content packages for social media — tailored to your platform, audience, and creative identity.',
    icon:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="18" cy="5" r="3"/>
              <circle cx="6" cy="12" r="3"/>
              <circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>`,
  },
];

/* ── 4. CATEGORY SYSTEM ──────────────────────────────────────
   Keys must match the 'category' field in your projects.
   Edit labels freely. Add new categories as needed.
   ─────────────────────────────────────────────────────────── */
const CATEGORIES = {
  all:           'All Projects',
  cinematic:     'AI Cinematic',
  comedy:        'AI Comedy',
  advertisement: 'Advertisements',
  social:        'Social Media',
  editing:       'Video Editing',
  experimental:  'Experimental',
};

/* ============================================================
   INTERNAL STATE (do not edit)
   ============================================================ */
let currentFilter   = 'all';
let modalVideoEl    = null;

/* ── 5. PORTFOLIO RENDERER ───────────────────────────────────
   Builds project cards dynamically from the projects array.
   ─────────────────────────────────────────────────────────── */
function renderPortfolio() {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  grid.innerHTML = '';

  if (!projects || projects.length === 0) {
    showEmptyState(true);
    return;
  }

  projects.forEach(project => {
    const card = createProjectCard(project);
    grid.appendChild(card);
  });

  applyFilter(currentFilter);
}

function createProjectCard(project) {
  const card = document.createElement('article');
  card.className    = 'project-card reveal';
  card.id           = `card-${project.id}`;
  card.dataset.category = project.category || '';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Watch ${project.title}`);

  // Thumbnail
  const hasThumbnail = project.thumbnail && project.thumbnail.trim() !== '';
  let mediaEl;

  if (hasThumbnail) {
    mediaEl = document.createElement('img');
    mediaEl.className = 'card-media';
    mediaEl.alt = project.title;
    mediaEl.loading = 'lazy';
    mediaEl.src = sanitizePath(project.thumbnail);
    mediaEl.onerror = function () {
      this.replaceWith(buildThumbnailPlaceholder());
    };
  } else {
    mediaEl = buildThumbnailPlaceholder();
    mediaEl.classList.add('card-media');
  }

  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'card-overlay';
  overlay.setAttribute('aria-hidden', 'true');

  // Play indicator
  const playIndicator = document.createElement('div');
  playIndicator.className = 'card-play-indicator';
  playIndicator.setAttribute('aria-hidden', 'true');
  playIndicator.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>`;

  // Card content
  const content = document.createElement('div');
  content.className = 'card-content';

  const categoryLabel = CATEGORIES[project.category] || project.category || '';
  const catEl = document.createElement('div');
  catEl.className = 'card-category';
  catEl.textContent = categoryLabel;

  const titleEl = document.createElement('h3');
  titleEl.className = 'card-title';
  titleEl.textContent = project.title || 'Untitled Project';

  const descEl = document.createElement('p');
  descEl.className = 'card-desc';
  descEl.textContent = project.description || '';

  content.appendChild(catEl);
  content.appendChild(titleEl);
  content.appendChild(descEl);

  // Duration badge
  if (project.duration) {
    const dur = document.createElement('span');
    dur.className = 'card-duration';
    dur.textContent = project.duration;
    card.appendChild(dur);
  }

  // Featured badge
  if (project.featured) {
    const badge = document.createElement('span');
    badge.className = 'featured-badge-card';
    badge.textContent = 'Featured';
    card.appendChild(badge);
  }

  card.appendChild(mediaEl);
  card.appendChild(overlay);
  card.appendChild(playIndicator);
  card.appendChild(content);

  // Events
  card.addEventListener('click', () => openModal(project));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(project);
    }
  });

  return card;
}

function buildThumbnailPlaceholder() {
  const wrap = document.createElement('div');
  wrap.className = 'thumbnail-placeholder';
  wrap.setAttribute('aria-hidden', 'true');
  wrap.innerHTML = `
    <svg class="thumb-placeholder-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1">
      <rect x="4" y="10" width="40" height="28" rx="3"/>
      <circle cx="24" cy="24" r="8"/>
      <path d="M21 21l6 3-6 3z" fill="currentColor" stroke="none"/>
    </svg>
    <span class="thumb-placeholder-text">Add your thumbnail</span>
  `;
  return wrap;
}

function sanitizePath(path) {
  if (!path) return '';
  // Encode only special chars, preserve path separators
  return path.replace(/\s/g, '%20');
}

/* ── 6. FEATURED PROJECT ─────────────────────────────────────
   Renders the featured section from project data.
   ─────────────────────────────────────────────────────────── */
function renderFeatured() {
  const container = document.getElementById('featured-inner');
  if (!container) return;

  // Find featured project (first marked featured, or first in array)
  const featured = projects.find(p => p.featured) || (projects.length > 0 ? projects[0] : null);

  if (!featured) {
    document.getElementById('featured')?.setAttribute('hidden', '');
    return;
  }

  const hasThumbnail = featured.thumbnail && featured.thumbnail.trim() !== '';
  const categoryLabel = CATEGORIES[featured.category] || featured.category || '';

  // Media side
  const mediaSide = document.createElement('div');
  mediaSide.className = 'featured-media reveal';
  mediaSide.setAttribute('role', 'button');
  mediaSide.setAttribute('tabindex', '0');
  mediaSide.setAttribute('aria-label', `Watch ${featured.title}`);

  if (hasThumbnail) {
    const img = document.createElement('img');
    img.className = 'featured-thumbnail';
    img.src = sanitizePath(featured.thumbnail);
    img.alt = featured.title;
    img.loading = 'lazy';
    img.onerror = function () {
      this.replaceWith(buildThumbnailPlaceholder());
    };
    mediaSide.appendChild(img);
  } else {
    mediaSide.appendChild(buildThumbnailPlaceholder());
  }

  const playBtn = document.createElement('div');
  playBtn.className = 'featured-play-btn';
  playBtn.setAttribute('aria-hidden', 'true');
  playBtn.innerHTML = `<div class="play-circle">
    <svg class="play-icon" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"/>
    </svg>
  </div>`;
  mediaSide.appendChild(playBtn);

  mediaSide.addEventListener('click', () => openModal(featured));
  mediaSide.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(featured); }
  });

  // Content side
  const contentSide = document.createElement('div');
  contentSide.className = 'featured-content reveal';

  const badgeEl = document.createElement('div');
  badgeEl.className = 'featured-badge';
  badgeEl.textContent = categoryLabel;

  const titleEl = document.createElement('h3');
  titleEl.className = 'featured-title';
  titleEl.textContent = featured.title;

  const descEl = document.createElement('p');
  descEl.className = 'featured-desc';
  descEl.textContent = featured.description || '';

  const metaRow = document.createElement('div');
  metaRow.className = 'featured-meta-row';

  if (featured.duration) {
    metaRow.appendChild(makeMetaItem('Duration', featured.duration));
  }
  if (featured.date) {
    metaRow.appendChild(makeMetaItem('Year', featured.date));
  }
  if (featured.role) {
    metaRow.appendChild(makeMetaItem('Role', featured.role));
  }

  const watchBtn = document.createElement('button');
  watchBtn.className = 'btn btn-primary';
  watchBtn.textContent = 'Watch Project';
  watchBtn.addEventListener('click', () => openModal(featured));

  contentSide.appendChild(badgeEl);
  contentSide.appendChild(titleEl);
  contentSide.appendChild(descEl);
  if (metaRow.children.length > 0) contentSide.appendChild(metaRow);
  contentSide.appendChild(watchBtn);

  container.appendChild(mediaSide);
  container.appendChild(contentSide);
}

function makeMetaItem(label, value) {
  const el = document.createElement('div');
  el.className = 'featured-meta-item';
  el.innerHTML = `<strong>${label}</strong>${value}`;
  return el;
}

/* ── 7. SERVICES RENDERER ────────────────────────────────────
   Builds service cards from the services array.
   ─────────────────────────────────────────────────────────── */
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  services.forEach(service => {
    const card = document.createElement('article');
    card.className = 'service-card reveal';
    card.setAttribute('role', 'listitem');
    card.id = service.id;

    const iconEl = document.createElement('div');
    iconEl.className = 'service-icon';
    iconEl.setAttribute('aria-hidden', 'true');
    iconEl.innerHTML = service.icon || '';

    const titleEl = document.createElement('h3');
    titleEl.className = 'service-title';
    titleEl.textContent = service.title;

    const descEl = document.createElement('p');
    descEl.className = 'service-desc';
    descEl.textContent = service.desc;

    card.appendChild(iconEl);
    card.appendChild(titleEl);
    card.appendChild(descEl);
    grid.appendChild(card);
  });
}

/* ── 8. ABOUT SKILLS ─────────────────────────────────────────
   Renders skill tags in the about section.
   ─────────────────────────────────────────────────────────── */
function renderSkills() {
  const container = document.getElementById('about-skills');
  if (!container) return;

  (siteConfig.skills || []).forEach(skill => {
    const tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.textContent = skill;
    tag.setAttribute('role', 'listitem');
    container.appendChild(tag);
  });

  // Apply bio text
  const bio1 = document.getElementById('about-bio');
  const bio2 = document.getElementById('about-bio-2');
  if (bio1 && siteConfig.bio[0]) bio1.textContent = siteConfig.bio[0];
  if (bio2 && siteConfig.bio[1]) bio2.textContent = siteConfig.bio[1];
}

/* ── 9. CONTACT RENDERER ─────────────────────────────────────
   Builds contact links from siteConfig.
   ─────────────────────────────────────────────────────────── */
function renderContact() {
  const container = document.getElementById('contact-links');
  if (!container) return;

  const links = [];

  // Email (always shown if configured)
  if (siteConfig.email && siteConfig.email !== '[YOUR EMAIL]') {
    links.push({
      href:    `mailto:${siteConfig.email}`,
      label:   'Send an Email',
      cls:     'primary',
      icon:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 8 10-8"/>
                </svg>`,
      external: false,
    });
  } else {
    // Placeholder email link
    links.push({
      href:    '#contact',
      label:   'Add your email in script.js',
      cls:     'primary',
      icon:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M2 7l10 8 10-8"/>
                </svg>`,
      external: false,
    });
  }

  // WhatsApp
  if (siteConfig.whatsapp) {
    const number = siteConfig.whatsapp.replace(/[^0-9+]/g, '');
    links.push({
      href:     `https://wa.me/${number}`,
      label:    'WhatsApp',
      cls:      'social',
      icon:     `<svg viewBox="0 0 24 24" fill="currentColor">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                 </svg>`,
      external: true,
    });
  }

  // Instagram
  if (siteConfig.instagram && siteConfig.instagram !== '[YOUR INSTAGRAM URL]') {
    links.push({
      href:     siteConfig.instagram,
      label:    'Instagram',
      cls:      'social',
      icon:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                   <rect x="2" y="2" width="20" height="20" rx="5"/>
                   <circle cx="12" cy="12" r="5"/>
                   <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                 </svg>`,
      external: true,
    });
  }

  // TikTok
  if (siteConfig.tiktok && siteConfig.tiktok !== '[YOUR TIKTOK URL]') {
    links.push({
      href:     siteConfig.tiktok,
      label:    'TikTok',
      cls:      'social',
      icon:     `<svg viewBox="0 0 24 24" fill="currentColor">
                   <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.86a8.27 8.27 0 004.84 1.55V6.96a4.85 4.85 0 01-1.07-.27z"/>
                 </svg>`,
      external: true,
    });
  }

  // YouTube
  if (siteConfig.youtube) {
    links.push({
      href:     siteConfig.youtube,
      label:    'YouTube',
      cls:      'social',
      icon:     `<svg viewBox="0 0 24 24" fill="currentColor">
                   <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                 </svg>`,
      external: true,
    });
  }

  // Render links
  links.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.className = `contact-link ${link.cls}`;
    if (link.external) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    a.innerHTML = `${link.icon} <span>${link.label}</span>`;
    container.appendChild(a);
  });
}

/* ── 10. VIDEO MODAL ─────────────────────────────────────────
   Opens a modal with the project's video.
   Supports local MP4 files and YouTube embeds.
   ─────────────────────────────────────────────────────────── */
function openModal(project) {
  const modal       = document.getElementById('video-modal');
  const videoWrap   = document.getElementById('modal-video-wrap');
  const titleEl     = document.getElementById('modal-title');
  const categoryEl  = document.getElementById('modal-category');
  const descEl      = document.getElementById('modal-description');
  const metaEl      = document.getElementById('modal-meta');

  if (!modal || !videoWrap) return;

  // Stop any existing video
  stopModalVideo();

  // Clear previous content
  videoWrap.innerHTML = '';
  if (metaEl) metaEl.innerHTML = '';

  // Set text info
  if (categoryEl) categoryEl.textContent = CATEGORIES[project.category] || project.category || '';
  if (titleEl)    titleEl.textContent    = project.title || '';
  if (descEl)     descEl.textContent     = project.description || '';

  // Meta items
  if (metaEl) {
    const metas = [];
    if (project.date)     metas.push({ label: 'Year',     value: project.date });
    if (project.duration) metas.push({ label: 'Duration', value: project.duration });
    if (project.role)     metas.push({ label: 'Role',     value: project.role });
    if (project.tools && project.tools.length > 0) {
      metas.push({ label: 'Tools', value: project.tools.join(', ') });
    }
    metas.forEach(m => {
      const span = document.createElement('span');
      span.className = 'modal-meta-item';
      span.innerHTML = `<strong>${m.label}</strong>${m.value}`;
      metaEl.appendChild(span);
    });
  }

  // Build video element
  if (project.type === 'youtube' && project.video) {
    buildYouTubeEmbed(videoWrap, project.video);
  } else if (project.video && project.video.trim() !== '') {
    buildLocalVideo(videoWrap, project);
  } else {
    showVideoError(videoWrap, 'No video configured for this project.');
  }

  // Open modal
  modal.classList.add('open');
  modal.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';

  // Focus management
  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) closeBtn.focus();
}

function buildLocalVideo(wrap, project) {
  const video = document.createElement('video');
  video.controls = true;
  video.playsinline = true;
  video.preload = 'metadata';
  video.style.width = '100%';
  video.style.height = '100%';

  if (project.thumbnail) {
    video.poster = sanitizePath(project.thumbnail);
  }

  const source = document.createElement('source');
  source.src  = sanitizePath(project.video);
  source.type = 'video/mp4';
  video.appendChild(source);

  // Handle load error
  video.addEventListener('error', () => {
    video.replaceWith(createVideoErrorEl());
  });

  source.addEventListener('error', () => {
    video.replaceWith(createVideoErrorEl());
  });

  wrap.appendChild(video);
  modalVideoEl = video;
}

function buildYouTubeEmbed(wrap, url) {
  // Extract video ID from various YouTube URL formats
  let videoId = '';
  try {
    const patterns = [
      /youtube\.com\/watch\?v=([^&\s]+)/,
      /youtu\.be\/([^?&\s]+)/,
      /youtube\.com\/embed\/([^?&\s]+)/,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) { videoId = match[1]; break; }
    }
  } catch (e) { /* ignore */ }

  if (!videoId) {
    showVideoError(wrap, 'Could not parse YouTube URL. Please check the video URL in script.js.');
    return;
  }

  const iframe = document.createElement('iframe');
  iframe.src            = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  iframe.allow          = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.title          = 'YouTube video player';
  iframe.setAttribute('loading', 'lazy');
  wrap.appendChild(iframe);
}

function createVideoErrorEl() {
  const div = document.createElement('div');
  div.className = 'video-error-state';
  div.innerHTML = `
    <svg class="thumb-placeholder-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="24" cy="24" r="20"/>
      <path d="M24 16v8M24 32h.01" stroke-linecap="round"/>
    </svg>
    <p class="video-error-text">Video file not found. Add the file to assets/videos/ and update the path in script.js.</p>
  `;
  return div;
}

function showVideoError(wrap, message) {
  const div = document.createElement('div');
  div.className = 'video-error-state';
  div.innerHTML = `
    <svg class="thumb-placeholder-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5">
      <circle cx="24" cy="24" r="20"/>
      <path d="M24 16v8M24 32h.01" stroke-linecap="round"/>
    </svg>
    <p class="video-error-text">${message}</p>
  `;
  wrap.appendChild(div);
}

function closeModal() {
  const modal = document.getElementById('video-modal');
  if (!modal) return;

  stopModalVideo();
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  // Clear content after animation
  setTimeout(() => {
    const videoWrap = document.getElementById('modal-video-wrap');
    if (videoWrap && !modal.classList.contains('open')) {
      videoWrap.innerHTML = '';
    }
  }, 350);
}

function stopModalVideo() {
  if (modalVideoEl) {
    try {
      modalVideoEl.pause();
      modalVideoEl.currentTime = 0;
    } catch (e) { /* ignore */ }
    modalVideoEl = null;
  }

  // Also stop YouTube iframes by removing src
  const wrap = document.getElementById('modal-video-wrap');
  if (wrap) {
    const iframe = wrap.querySelector('iframe');
    if (iframe) {
      const src = iframe.src;
      iframe.src = '';
      iframe.src = src; // this forces the iframe to stop
    }
  }
}

/* ── 11. FILTER LOGIC ────────────────────────────────────────
   Handles category filtering with smooth transitions.
   ─────────────────────────────────────────────────────────── */
function renderFilterBar() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;

  bar.innerHTML = '';

  Object.entries(CATEGORIES).forEach(([key, label]) => {
    const count = key === 'all'
      ? projects.length
      : projects.filter(p => p.category === key).length;

    if (key !== 'all' && count === 0) return; // hide empty categories

    const btn = document.createElement('button');
    btn.className = `filter-btn${key === currentFilter ? ' active' : ''}`;
    btn.dataset.filter = key;
    btn.setAttribute('aria-pressed', key === currentFilter ? 'true' : 'false');
    btn.innerHTML = `${label}<span class="filter-count">(${count})</span>`;

    btn.addEventListener('click', () => {
      currentFilter = key;
      applyFilter(key);
      updateFilterButtons(key);
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });

    bar.appendChild(btn);
  });
}

function applyFilter(filter) {
  const cards = document.querySelectorAll('.project-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const matches = filter === 'all' || card.dataset.category === filter;
    if (matches) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  showEmptyState(visibleCount === 0);
}

function updateFilterButtons(activeKey) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    const isActive = btn.dataset.filter === activeKey;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function showEmptyState(show) {
  const emptyState = document.getElementById('empty-state');
  if (emptyState) {
    emptyState.hidden = !show;
  }
}

/* ── 12. NAVIGATION & SCROLL ─────────────────────────────────
   Header scroll behavior, mobile menu, active nav links.
   ─────────────────────────────────────────────────────────── */
function initNavigation() {
  const header       = document.getElementById('site-header');
  const hamburger    = document.getElementById('nav-hamburger');
  const mobileMenu   = document.getElementById('mobile-menu');
  const mobileOverlay= document.getElementById('mobile-overlay');
  const mobileLinks  = document.querySelectorAll('.mobile-nav-link');
  const allNavLinks  = document.querySelectorAll('.nav-link');
  const sections     = document.querySelectorAll('section[id]');

  // Header scroll state
  const handleScroll = () => {
    if (!header) return;
    const scrolled = window.scrollY > 40;
    header.classList.toggle('scrolled', scrolled);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // initial call

  // Hamburger toggle
  const openMenu = () => {
    hamburger?.classList.add('open');
    hamburger?.setAttribute('aria-expanded', 'true');
    hamburger?.setAttribute('aria-label', 'Close menu');
    mobileMenu?.classList.add('open');
    mobileMenu?.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    hamburger?.classList.remove('open');
    hamburger?.setAttribute('aria-expanded', 'false');
    hamburger?.setAttribute('aria-label', 'Open menu');
    mobileMenu?.classList.remove('open');
    mobileMenu?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  hamburger?.addEventListener('click', () => {
    if (hamburger.classList.contains('open')) closeMenu();
    else openMenu();
  });

  mobileOverlay?.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Keyboard: close menu with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileMenu?.classList.contains('open')) closeMenu();
      if (document.getElementById('video-modal')?.classList.contains('open')) closeModal();
    }
  });

  // Active nav link on scroll (Intersection Observer)
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        allNavLinks.forEach(link => {
          const matches = link.dataset.section === id;
          link.classList.toggle('active', matches);
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

  sections.forEach(section => sectionObserver.observe(section));
}

/* ── 13. ENTRANCE ANIMATIONS ─────────────────────────────────
   Uses IntersectionObserver to trigger .reveal animations.
   ─────────────────────────────────────────────────────────── */
function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── 14. FOOTER ──────────────────────────────────────────────
   Renders footer copy with dynamic year.
   ─────────────────────────────────────────────────────────── */
function renderFooter() {
  const footerCopy = document.getElementById('footer-copy');
  if (!footerCopy) return;
  const year = new Date().getFullYear();
  const name = siteConfig.name !== '[YOUR NAME]' ? siteConfig.name : 'VideoCreator';
  footerCopy.textContent = `© ${year} ${name}. All rights reserved.`;
}

/* ── APPLY SITE CONFIG ───────────────────────────────────────
   Applies editable config values to the DOM.
   ─────────────────────────────────────────────────────────── */
function applySiteConfig() {
  // Logo
  const logoMark = document.getElementById('logo-mark');
  const logoText  = document.getElementById('logo-text');
  if (logoMark) logoMark.textContent = siteConfig.initials || 'VC';
  if (logoText)  logoText.textContent  = siteConfig.logoText || 'VideoCreator';

  // Page title & meta
  document.title = siteConfig.siteTitle || document.title;

  const ogTitle = document.getElementById('og-title');
  const ogDesc  = document.getElementById('og-description');
  const twTitle = document.getElementById('tw-title');
  const twDesc  = document.getElementById('tw-description');
  const metaDesc = document.querySelector('meta[name="description"]');

  if (ogTitle)  ogTitle.setAttribute('content', siteConfig.siteTitle);
  if (ogDesc)   ogDesc.setAttribute('content', siteConfig.siteDescription);
  if (twTitle)  twTitle.setAttribute('content', siteConfig.siteTitle);
  if (twDesc)   twDesc.setAttribute('content', siteConfig.tagline);
  if (metaDesc) metaDesc.setAttribute('content', siteConfig.siteDescription);

  // Hero
  const heroHeadlineEl = document.getElementById('hero-headline');
  if (heroHeadlineEl && siteConfig.heroHeadline) {
    const lines = siteConfig.heroHeadline.split('\n');
    heroHeadlineEl.innerHTML = lines.map((line, i) =>
      i === lines.length - 1
        ? `<em>${line}</em>`
        : `${line}<br />`
    ).join('');
  }

  const heroSubEl = document.getElementById('hero-subtitle');
  if (heroSubEl && siteConfig.heroSubtitle) {
    heroSubEl.textContent = siteConfig.heroSubtitle;
  }

  const heroMetaEl = document.getElementById('hero-meta-text');
  if (heroMetaEl && siteConfig.heroMeta) {
    heroMetaEl.textContent = siteConfig.heroMeta;
  }

  // Hero video / poster
  const heroPoster = document.getElementById('hero-poster');
  const heroVideo  = document.getElementById('hero-video');

  if (heroPoster && siteConfig.heroBg) {
    heroPoster.src = siteConfig.heroBg;
  }

  if (heroVideo) {
    if (siteConfig.heroVideo && siteConfig.heroVideo.trim() !== '') {
      const source = document.createElement('source');
      source.src  = siteConfig.heroVideo;
      source.type = 'video/mp4';
      heroVideo.appendChild(source);
      heroVideo.style.display = 'block';
      heroVideo.load();
    } else {
      heroVideo.style.display = 'none';
    }
  }

  // Mobile menu tagline
  const mobileTagline = document.getElementById('mobile-tagline');
  if (mobileTagline) mobileTagline.textContent = siteConfig.tagline;

  // Contact subtext
  const contactSubtext = document.getElementById('contact-subtext');
  if (contactSubtext) {
    const loc = siteConfig.location ? ` Based in ${siteConfig.location}.` : '';
    contactSubtext.textContent = `Whether you're a brand, agency, or content creator looking for high-quality video production — I'd love to hear about your project.${loc}`;
  }
}

/* ── MODAL EVENT LISTENERS ───────────────────────────────────
   Sets up modal close button and backdrop click.
   ─────────────────────────────────────────────────────────── */
function initModal() {
  const modal     = document.getElementById('video-modal');
  const closeBtn  = document.getElementById('modal-close');
  const inner     = document.getElementById('modal-inner');

  // Close button
  closeBtn?.addEventListener('click', closeModal);

  // Click on backdrop (not inner)
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Prevent closing when clicking inside modal
  inner?.addEventListener('click', (e) => e.stopPropagation());
}

/* ── FAVICON SVG ─────────────────────────────────────────────
   Creates a simple SVG favicon inline.
   ─────────────────────────────────────────────────────────── */
function createFavicon() {
  // The favicon.svg file is created separately; this is just a fallback
  const existingFavicon = document.querySelector('link[rel="icon"]');
  if (!existingFavicon) {
    const link = document.createElement('link');
    link.rel  = 'icon';
    link.type = 'image/svg+xml';
    link.href = 'assets/icons/favicon.svg';
    document.head.appendChild(link);
  }
}

/* ── 15. INITIALIZATION ──────────────────────────────────────
   Entry point — runs when DOM is ready.
   ─────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  try {
    applySiteConfig();     // Apply config values to DOM
    renderPortfolio();     // Build project cards
    renderFeatured();      // Build featured section
    renderFilterBar();     // Build filter buttons
    renderServices();      // Build service cards
    renderSkills();        // Build skill tags
    renderContact();       // Build contact links
    renderFooter();        // Set footer year/name
    initNavigation();      // Nav scroll + mobile menu
    initModal();           // Modal close events
    initRevealAnimations();// Scroll entrance animations
    createFavicon();       // Ensure favicon link exists
  } catch (err) {
    // Graceful degradation — site is still usable
    console.warn('[Portfolio] Initialization error:', err);
  }
});
