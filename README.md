# Professional Portfolio - Megha

This is a premium, high-performance personal portfolio website designed for a Computer Science student specializing in AI/ML, NLP, and Full-Stack Engineering.

## 🚀 Features
- **Modern Design**: Premium dark and light themes with glassmorphism, gradient glows, and smooth animations.
- **Recruiter-Ready**: High-impact, data-driven copy with specialized project cards highlighting precise outcome metrics.
- **Zero Configuration Architecture**: Built purely with Vanilla HTML, CSS, and ES Modules for zero-dependency local development and instantaneous loading times.
- **Responsive System**: Fully optimized fluid layout for mobile, tablet, and desktop viewports.

## 🛠️ How to Edit Content
The architecture separates data from presentation. To update your content, you **do not** need to edit the HTML files:
1. Open `js/data.js`
2. Update the structured objects (`heroData`, `educationData`, `projectsData`, `experienceData`, `contactData`).
3. Refresh the page. The changes will propagate automatically.

## 📈 Tech Stack
- **HTML5** (Semantic Structure)
- **Vanilla CSS3** (Custom Design System, Variables, Animations)
- **Vanilla JavaScript ES Modules** (Dynamic Data Rendering, Scroll Logic)
- **Lucide Icons** (Iconography)

---

## 🚀 Live Deployment Guide

Since this website uses static Vanilla HTML/CSS/JS without a build step, it is extremely easy to deploy it live immediately for free.

### Option 1: Vercel (Recommended)
1. Push this entire project repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) with GitHub.
3. Click **Add New** -> **Project**.
4. Import your portfolio repository.
5. In the configuration, leave all settings as default (Framework Preset: `Other`, Build Command: empty).
6. Click **Deploy**. Your site will be live in seconds.

### Option 2: Netlify
1. Sign in to [Netlify](https://www.netlify.com/) and click **Add new site** -> **Import an existing project**.
2. Connect to GitHub and select your portfolio repository.
3. Leave the build command empty and the publish directory as the root (or `/`).
4. Click **Deploy Site**.

### Option 3: GitHub Pages
1. Push this code to a public GitHub repository named `meghaaa13105-ctrl.github.io` (or to any existing repo).
2. Go to the repository **Settings** > **Pages**.
3. Under "Source", select the `main` branch and `/ (root)` directory.
4. Click **Save**. Your site will be live at `https://meghaaa13105-ctrl.github.io/`.

---

## 🌐 Connecting a Custom Domain

Once deployed to Vercel or Netlify, you can easily connect a custom domain (e.g., `meghak.dev`):

**On Vercel:**
1. Go to your Project Settings > **Domains**.
2. Enter your custom domain name and click **Add**.
3. Vercel will provide you with DNS records (typically an `A` record and a `CNAME` record).
4. Log into your domain registrar (e.g., Namecheap, GoDaddy, Google Domains) and add the provided DNS records.
5. Vercel will automatically generate a free SSL certificate and connect your site.

**On Netlify:**
1. Go to Domain Management > **Add custom domain**.
2. Enter your domain name and follow the DNS verification steps.
3. Update your domain registrar's nameservers to point to Netlify's DNS, or add the specific `A` record.
4. Netlify will auto-provision Let's Encrypt SSL.
