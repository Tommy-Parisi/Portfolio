# Thomas C. Parisi — Personal Portfolio

> **Live Site**: [tommyparisi.com](https://tommyparisi.com)

A modern, responsive portfolio website built with React and TypeScript, showcasing my journey as a Computer Science student at the University of Delaware with a focus on AI & Robotics and Cybersecurity.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-19.0.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue) ![Vite](https://img.shields.io/badge/Vite-6.2.0-purple)

---

## Features

- **Interactive Typewriter Animation** - Dynamic text highlighting education and specializations
- **Fully Responsive Design** - Mobile-first approach with hamburger navigation
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Lightning Fast** - Built with Vite for optimal performance
- **Self-Hosted** - Deployed on personal Ubuntu server infrastructure
- **Audio Enhancement** - Realistic typewriter sound effects with mute toggle

---

## Tech Stack

### Frontend
- **React 19** - Component-based UI library
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Next-generation frontend tooling
- **React Router DOM** - Client-side routing
- **CSS Modules** - Scoped component styling

### Development & Deployment
- **ESLint** - Code linting and formatting
- **Self-Hosted Infrastructure** - Ubuntu server with Nginx
- **Domain Management** - Custom domain configuration

---

## Pages & Sections

### Home
- **Hero Section** - Headshot and introduction
- **Call-to-Action** - Direct navigation to projects
- **Responsive Layout** - Adapts seamlessly to mobile devices

### About
- **Current Projects** - SmartSort, Home Server, UD Capstone
- **Skills Matrix** - Languages, frameworks, AI/ML, systems, cybersecurity
- **Timeline** - Academic and project progression since 2022
- **Professional Links** - Resume, LinkedIn, GitHub

### Projects
**Featured Projects Include:**

- **SmartSort** - Semantic file organizer using HDBSCAN clustering and embeddings
- **CAPTCHA Research** - Automated puzzle-based CAPTCHA analysis with YOLO/OpenCV
- **Self-Hosted Server** - Ubuntu server with Docker, Tailscale VPN, and Jellyfin
- **Swapborn Game** - Death-swap puzzle platformer built in Godot 4
- **Computer Vision Projects** - Multi-scale pyramids, stereo analysis, deep learning
- **Sage Discord Bot** - Google Calendar integration for 4000+ UD CS students

### Contact
- **Direct Contact** - Email and phone information
- **Social Links** - GitHub, LinkedIn, resume download
- **Professional Inquiry** - Clear call-to-action for opportunities

---

## Project Structure

```
my-portfolio/
├── public/
│   ├── assets/           # Images and media files
│   ├── sounds/           # Audio files (typewriter.wav)
│   └── resume.pdf        # Downloadable resume
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Navbar.tsx    # Mobile-responsive navigation
│   │   ├── Footer.tsx    # Site footer
│   │   ├── Layout.tsx    # Page layout wrapper
│   │   └── TypewriterText.tsx # Animated typewriter effect
│   ├── pages/            # Route components
│   │   ├── home.tsx      # Landing page
│   │   ├── about.tsx     # About/skills page  
│   │   ├── projects.tsx  # Projects showcase
│   │   └── contact.tsx   # Contact information
│   ├── styles/           # CSS modules and global styles
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Tommy-Parisi/portfolio.git
cd portfolio/my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🌐 Deployment

This portfolio is self-hosted on a personal Ubuntu server with the following infrastructure:

- **Server**: Ubuntu with Nginx reverse proxy
- **Security**: UFW firewall, SSH key authentication, Tailscale VPN
- **Domain**: Custom domain configuration
- **SSL**: HTTPS encryption
- **Monitoring**: System monitoring and uptime checks

### Deployment Process
```bash
# Build the project
npm run build

# Deploy to server (example)
scp -r dist/ user@server:/var/www/portfolio/
```

---

## Design Philosophy

- **Minimalist Aesthetic** - Clean, professional layout focusing on content
- **Performance First** - Optimized images, lazy loading, efficient bundling
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- **Mobile Responsive** - Hamburger menu, flexible layouts, touch-friendly
- **Professional Branding** - Consistent typography and color scheme

---

## Performance & Features

- **Fast Loading** - Vite's optimized bundling and code splitting
- **Mobile Optimized** - Responsive design with mobile-first approach
- **SEO Friendly** - Semantic HTML structure and meta tags
- **Accessible** - WCAG compliance and keyboard navigation
- **Enhanced UX** - Audio feedback with user controls


---

### Fonts

This project uses the following open-source fonts under the SIL Open Font License:

- **Minecraft Regular** - Used for site text
  - Source: Community-created Minecraft-style font
  - License: Various open-source licenses

- **Bebas Neue** - Used for headers and display text
  - Copyright © 2010 by Dharma Type
  - License: SIL Open Font License 1.1
  - Source: [Google Fonts](https://fonts.google.com/specimen/Bebas+Neue)

- **Jersey 10** - Used for decorative elements
  - Copyright © 2023 The Soft Type Project Authors
  - License: SIL Open Font License 1.1
  - Source: [GitHub - Soft Type Jersey](https://github.com/scfried/soft-type-jersey)

- **STIX Two Text** - Used for mathematical and technical content
  - Copyright © 2001-2021 The STIX Fonts Project Authors
  - License: SIL Open Font License 1.1
  - STIX Fonts™ is a trademark of The Institute of Electrical and Electronics Engineers, Inc.
  - Source: [GitHub - STIX Fonts](https://github.com/stipub/stixfonts)

### Assets

- **Typewriter Sound Effect** - Custom audio enhancement for interactive elements
- **Project Images** - Screenshots and media from personal projects and coursework

All fonts are used in compliance with their respective licenses. The SIL Open Font License allows for free use, modification, and distribution of these fonts in both personal and commercial projects.

---

## Contributing

While this is a personal portfolio, I welcome feedback and suggestions:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Contact

**Thomas C. Parisi**
- 🌐 Website: [tommyparisi.com](https://tommyparisi.com)
- 📧 Email: tcparisi55@gmail.com
- 💼 LinkedIn: [thomas-parisi-771a76261](https://www.linkedin.com/in/thomas-parisi-771a76261/)
- 🐙 GitHub: [@Tommy-Parisi](https://github.com/Tommy-Parisi)

---

*Thomas Parisi | University of Delaware Computer Science 2025*
