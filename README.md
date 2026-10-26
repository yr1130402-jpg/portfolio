# Premium AI Video Creator Portfolio

A complete, self-contained portfolio website for a professional AI video creator. Built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** — no frameworks, no build tools, no dependencies.

---

## Project Structure

```
portfolio/
├── index.html          — Main page structure (HTML)
├── style.css           — All styles & design system
├── script.js           — All logic, data, and configuration
├── README.md           — This file
└── assets/
    ├── videos/         — Place your .mp4 video files here
    ├── thumbnails/     — Place your .jpg/.png thumbnails here
    ├── images/
    │   ├── hero-poster.jpg     — Hero section background image
    │   └── profile.jpg         — Your portrait photo
    └── icons/
        └── favicon.svg         — Browser tab icon
```

---

## Opening the Website Locally

1. Open the `portfolio` folder on your computer.
2. Double-click `index.html` to open it in your browser.
3. All features work locally — no server required.

> **Note:** Some browsers restrict local video autoplay. If your hero video doesn't play, this is normal browser behavior. It will work correctly when hosted online.

---

## Personalizing the Website

All editable settings are at the **top of `script.js`**, in the `siteConfig` object.

### 1. Change Your Personal Information

Open `script.js` and edit the `siteConfig` object:

```js
const siteConfig = {
  name:     'Alex Morel',           // Your full name
  initials: 'AM',                   // 2 letters shown in the logo
  logoText: 'AlexMorel',            // Text shown beside the logo
  title:    'AI Video Creator & Video Editor',
  tagline:  'I turn creative ideas into engaging visual stories.',
  location: 'Morocco',
  email:    'alex@example.com',
  // ...
};
```

### 2. Configure Social Links

```js
instagram: 'https://instagram.com/yourhandle',
tiktok:    'https://tiktok.com/@yourhandle',
youtube:   'https://youtube.com/@yourchannel',
whatsapp:  '+212600000000',  // International format, no spaces
twitter:   '',               // Leave empty to hide
```

### 3. Change Your Bio

Edit the `bio` array in `siteConfig`:

```js
bio: [
  "First paragraph of your bio.",
  "Second paragraph of your bio.",
],
```

### 4. Edit Your Skills

```js
skills: [
  'AI Video Generation',
  'Cinematic Storytelling',
  'Video Editing',
  // Add more...
],
```

---

## Adding Videos & Thumbnails

### Step 1 — Copy Your Files

- Copy your video files (`.mp4` recommended) into `assets/videos/`
- Copy your thumbnail images (`.jpg` or `.png`) into `assets/thumbnails/`

**Use simple filenames** — letters, numbers, and hyphens only. Avoid spaces.

```
assets/videos/my-project.mp4          ✓
assets/videos/My Project Video.mp4    ✗ (spaces cause issues)
```

### Step 2 — Register a New Project in script.js

Open `script.js` and find the `projects` array. Add or edit an entry:

```js
const projects = [
  {
    id:          'my-project',            // Unique ID (no spaces)
    title:       'My Amazing Video',      // Shown on the card
    category:    'cinematic',             // Must match a CATEGORIES key
    description: 'A short description of the project.',
    thumbnail:   'assets/thumbnails/my-project.jpg',
    video:       'assets/videos/my-project.mp4',
    type:        'local',                 // 'local' for MP4, 'youtube' for YouTube
    featured:    false,                   // Set true on ONE project only
    date:        '2024',
    duration:    '01:30',
    tools:       ['AI Video Generation', 'Premiere Pro'],
    role:        'Director & Editor',
  },
  // ... more projects
];
```

### Embedding a YouTube Video

```js
{
  id:       'youtube-project',
  title:    'My YouTube Project',
  category: 'cinematic',
  video:    'https://www.youtube.com/watch?v=VIDEO_ID_HERE',
  type:     'youtube',       // ← important
  thumbnail: 'assets/thumbnails/my-project.jpg',
  // ...
}
```

---

## Managing Categories

Categories are defined in the `CATEGORIES` object in `script.js`:

```js
const CATEGORIES = {
  all:           'All Projects',
  cinematic:     'AI Cinematic',
  comedy:        'AI Comedy',
  advertisement: 'Advertisements',
  social:        'Social Media',
  editing:       'Video Editing',
  experimental:  'Experimental',
};
```

To add a new category:
1. Add a new key-value pair here: `mybrand: 'Brand Videos'`
2. Use that key in your project: `category: 'mybrand'`

---

## Setting the Featured Project

In the `projects` array, set `featured: true` on the project you want to highlight:

```js
{ id: 'best-work', featured: true, ... }
```

Only **one** project should have `featured: true`. If multiple are set, the first one wins.

---

## Changing the Hero Background

### Using an Image (Default)
Replace `assets/images/hero-poster.jpg` with your own image.

### Using a Video Background
1. Copy a short video to `assets/videos/hero.mp4`
2. In `script.js`, set:
```js
heroVideo: 'assets/videos/hero.mp4',
```
The image remains as a fallback if the video fails to load.

---

## Changing the Profile Photo

Replace `assets/images/profile.jpg` with your portrait photo.

- Recommended size: **800×1066px** (3:4 ratio)
- Format: JPG or PNG
- Keep the filename exactly: `profile.jpg`

---

## Publishing to GitHub Pages

1. Create a GitHub account if you don't have one.
2. Create a **new public repository** named `portfolio` (or any name).
3. Upload all your project files to the repository.
4. Go to **Settings → Pages**.
5. Under "Source", select `Deploy from a branch`.
6. Choose the `main` branch, root `/`, and click **Save**.
7. Your site will be live at `https://yourusername.github.io/portfolio/`

After publishing, update `siteUrl` in `script.js`:

```js
siteUrl: 'https://yourusername.github.io/portfolio',
```

---

## Important Limitations of Static Websites

- **No contact form** — Static websites cannot send emails without a backend service.
  Use the email link (`mailto:`) or WhatsApp CTA instead.
  If you need a contact form, consider [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/).

- **File size limit on GitHub Pages** — GitHub has a 100MB file size limit per file and a recommended 1GB total repository size. For large video portfolios, host your videos on YouTube or Vimeo and use `type: 'youtube'` in your project data.

- **Video autoplay** — Browsers restrict autoplay with sound. The hero video is muted so it can autoplay. Project videos require user interaction.

---

## Troubleshooting

### Video won't play
- Check that the file exists in `assets/videos/`
- Check that the filename in `script.js` matches exactly (including case)
- Use `.mp4` format with H.264 encoding for maximum compatibility
- Large files may be slow to load — consider compressing them

### Thumbnail not showing
- Check that the file exists in `assets/thumbnails/`
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
- Check the filename matches exactly in `script.js`

### Social links not appearing
- Make sure the URL starts with `https://`
- Leave the value as `''` (empty string) to hide a link

### Layout broken on mobile
- Do not modify the media queries without testing
- Make sure images and videos have correct paths

### GitHub Pages shows a blank page
- Check that `index.html` is at the root of the repository
- Wait 1–2 minutes after publishing; GitHub Pages takes time to deploy
- Clear your browser cache

---

## Example: Adding a New Project (Full Workflow)

1. Copy `assets/videos/comedy-sketch.mp4` to `assets/videos/`
2. Copy `assets/thumbnails/comedy-sketch.jpg` to `assets/thumbnails/`
3. Open `script.js` and add to the `projects` array:

```js
{
  id:          'comedy-sketch',
  title:       'Comedy Sketch — The Meeting',
  category:    'comedy',
  description: 'A quick comedy sketch about a very unusual business meeting.',
  thumbnail:   'assets/thumbnails/comedy-sketch.jpg',
  video:       'assets/videos/comedy-sketch.mp4',
  type:        'local',
  featured:    false,
  date:        '2024',
  duration:    '00:45',
  tools:       ['AI Character Generation', 'Premiere Pro'],
  role:        'Writer & Director',
},
```

4. Save `script.js` and refresh the browser.

---

*Built with care. Every frame matters.*
