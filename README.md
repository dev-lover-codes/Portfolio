# Alfez's Interactive 3D Portfolio

Welcome to the source code of my interactive 3D portfolio! This project is a highly immersive, performance-optimized web application built with modern web technologies, showcasing my skills as a Software Engineer and Developer.

## 🌟 Features

- **Immersive 3D Experience:** Built utilizing React Three Fiber and Three.js for a rich, interactive 3D environment.
- **Physics Integration:** Realistic interactions and physics-based animations powered by `@react-three/rapier` and `@react-three/cannon`.
- **Advanced Animations:** Smooth, high-performance UI and component animations driven by GSAP.
- **Dynamic Loading Screen:** A custom-built, interactive loader with real-time percentage tracking and mouse-tracking effects.
- **Responsive Design:** Optimized for both desktop and mobile viewing experiences.
- **Performant & Fast:** Powered by Vite, ensuring rapid development server start times and highly optimized production builds.

## 🛠️ Tech Stack

**Core:**
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

**3D & Animations:**
- [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [React Three Drei](https://github.com/pmndrs/drei) (Useful helpers for R3F)
- [GSAP](https://gsap.com/) & `@gsap/react`
- `@react-three/rapier` & `@react-three/cannon` (Physics engines)

**UI & Utilities:**
- [React Fast Marquee](https://www.react-fast-marquee.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [@vercel/analytics](https://vercel.com/analytics)

**Deployment:**
- Cloudflare Workers / Pages (via `wrangler`)

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dev-lover-codes/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will start on `http://localhost:5173/` (or the next available port).

## 📜 Available Scripts

In the project directory, you can run the following commands:

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles TypeScript and builds the application for production.
- `npm run lint`: Runs ESLint to catch and fix potential issues in the codebase.
- `npm run preview`: Builds the project and previews the production build locally using Wrangler.
- `npm run deploy`: Builds the project and deploys it using Cloudflare Wrangler.

## 📁 Project Structure

```text
Portfolio/
├── public/               # Static assets (Favicon, 3D models, textures)
├── src/
│   ├── components/       # Reusable UI and 3D components
│   ├── context/          # React Context providers (e.g., Loading state)
│   ├── main.tsx          # Application entry point
│   └── ...
├── package.json          # Project metadata and dependencies
├── vite.config.ts        # Vite build configuration
└── README.md             # Project documentation
```

## 👨‍💻 Author

**Alfez**
- GitHub: [@dev-lover-codes](https://github.com/dev-lover-codes)

---
*Feel free to star ⭐ this repository if you found it inspiring or helpful!*
