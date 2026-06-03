# Zeeshan Portfolio — Next.js + Tailwind CSS

## 🚀 Setup & Run

### 1. Requirements
- Node.js 18+ 
- npm or yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
zeeshan-portfolio/
├── app/
│   ├── data.ts          ← ✅ MAIN DATA FILE — Update your info here
│   ├── globals.css      ← Global styles + neon effects
│   ├── layout.tsx       ← Root layout
│   └── page.tsx         ← Main page
├── components/
│   ├── Cursor.tsx       ← Custom neon cursor
│   ├── Navbar.tsx       ← Navigation
│   ├── Hero.tsx         ← Hero section + particle animation
│   ├── About.tsx        ← About + 3D card
│   ├── Skills.tsx       ← Skills with animated progress bars
│   ├── Projects.tsx     ← 12 Projects grid with filter
│   ├── Experience.tsx   ← Work experience timeline
│   ├── Education.tsx    ← Education section
│   ├── Services.tsx     ← Services section
│   ├── Contact.tsx      ← Contact form
│   └── Footer.tsx       ← Footer
├── public/
│   └── resume.pdf       ← ✅ Replace with your actual resume
├── package.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

---

## ✏️ How to Update Content

**All your content is in one file: `app/data.ts`**

### Update Personal Info:
```typescript
export const personalInfo = {
  name: "Zeeshan",
  fullName: "Zeeshan Akram",
  email: "your@email.com",
  phone: "+92 300 xxxxxxx",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  // ...
};
```

### Add/Edit Projects:
```typescript
export const projects = [
  {
    id: 1,
    title: "My Project Name",
    description: "Project description...",
    type: "web",  // or "mobile"
    tags: ["React", "Node.js", "MongoDB"],
    color: "cyan",  // cyan | pink | green | purple
    github: "https://github.com/...",
    live: "https://your-live-url.com",
    featured: true,
    icon: "🚀",
  },
  // ...
];
```

### Add Resume:
Place your resume PDF as `public/resume.pdf`

---

## 🎨 Features

- ✅ Dark neon theme with cyan/pink/green/purple accents
- ✅ Custom animated cursor with trail
- ✅ Interactive particle canvas (mouse interaction)
- ✅ Typewriter animation for roles
- ✅ 3D card tilt effect on hover
- ✅ Animated skill progress bars
- ✅ 12 Projects with Web/Mobile filter
- ✅ Work Experience timeline
- ✅ Education section (BSCS - University of Okara)
- ✅ Contact form
- ✅ Fully responsive (mobile/tablet/desktop)
- ✅ Smooth scrolling & active nav highlighting
- ✅ Custom scrollbar

---

## 🌐 Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy ✅

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

---

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: CSS + Vanilla JS Canvas
- **Language**: TypeScript
