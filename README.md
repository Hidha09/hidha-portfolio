# Hidha C H — Personal Portfolio Website

A clean, premium, minimalist portfolio website for an **AI/ML Graduate & Aspiring AI Engineer**, built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🌟 Overview & Highlights

- **Aesthetic**: Premium light theme with dark charcoal typography, subtle lavender and periwinkle accents, generous whitespace, and responsive layouts.
- **Accurate Profile Representation**:
  - **Name**: Hidha C H
  - **Role**: AI/ML Graduate | Aspiring AI Engineer
  - **Education**: Integrated M.Sc. in Computer Science (Specialising in Artificial Intelligence & Machine Learning, 2026).
  - **Target Roles**: Entry-level opportunities in AI/ML Engineering, Python Development, Data Analytics, and Software Engineering in the UAE.
- **Featured Projects**:
  1. **Skin Cancer Detection**: Transfer learning pipeline using HAM10000 dataset and fine-tuned VGG16 CNN.
  2. **Bank Fraud Detection**: Imbalanced financial transaction classification using Random Forest, achieving **97.39% evaluated accuracy**.
  3. **Real-Time Hand Gesture Recognition**: MediaPipe 21-landmark extraction, Keras classifier, temporal smoothing correction layer, and a hold-to-confirm mechanism for robust keyboard control.
- **Interactive Features**:
  - Sticky frosted-glass navbar with active scroll spy
  - Filterable technical skills grid
  - Detailed project architecture & pipeline modals
  - One-click email copy & pre-filled contact form
  - CV download & preview system

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18+ or 20+ recommended)
- npm or pnpm / yarn

### Installation & Local Development

1. **Clone or navigate to the project directory:**
   ```bash
   cd hidha-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the displayed localhost URL (typically `http://localhost:3000`).

---

## 📁 Project Structure

```
hidha-portfolio/
├── public/
│   └── cv.pdf                # CV/Resume file (replace with your official PDF)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with mobile menu
│   │   ├── Hero.jsx          # Introduction, tagline & primary CTAs
│   │   ├── About.jsx         # Background story, focus pillars & target roles
│   │   ├── Skills.jsx        # Categorized skills grid with interactive filter
│   │   ├── Projects.jsx      # Detailed project cards with metrics & highlights
│   │   ├── ProjectModal.jsx  # In-depth architectural case study modal
│   │   ├── Education.jsx     # Integrated M.Sc. curriculum & academic focus
│   │   ├── Contact.jsx       # Direct contact channels, copy email & inquiry form
│   │   ├── Footer.jsx        # Minimalist footer with copyright & back-to-top
│   │   └── CVModal.jsx       # Modal for downloading or previewing CV
│   ├── data/
│   │   └── portfolioData.js  # Central configuration file for all portfolio data
│   ├── App.jsx               # Main application component
│   ├── index.css             # Tailwind base and custom utilities
│   └── main.jsx              # Application entry point
├── index.html                # HTML template with Google Fonts & SEO metadata
├── tailwind.config.js        # Custom minimalist light palette & fonts
├── vite.config.js            # Vite configuration
├── vercel.json               # Vercel deployment configuration
└── package.json              # Project dependencies & build scripts
```

---

## 🛠️ Customization Guide

### 1. Update Contact Links & Personal Data
All personal information, links, and text are centralized in `src/data/portfolioData.js`:
- Open `src/data/portfolioData.js`.
- Replace `contact.email`, `contact.github`, and `contact.linkedin` with your actual links when ready.

### 2. Updating Your CV
- Drop your latest resume PDF into the `public/` directory named `cv.pdf`.
- The "Download CV" button and modal will automatically download your new file without any code changes.

---

## 🚢 Deployment

### Deploying on Vercel (Recommended)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click **"New Project"**, select your repository, and click **"Deploy"**.
4. The included `vercel.json` and standard Vite build scripts (`vite build`) are already pre-configured for instant deployment.

### Production Build Test
To test the production build locally:
```bash
npm run build
npm run preview
```
