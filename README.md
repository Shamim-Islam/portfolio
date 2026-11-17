# Aminul Islam — Developer Portfolio

Personal portfolio for **Aminul Islam**, a **Web Developer | Web Security Learner**. It brings together selected web projects, development skills, and an honest account of my ongoing web security studies.

The site uses a premium dark interface with lime accents and is built to work across mobile, tablet, and desktop screens.

## Explore

- **Source repository:** [Shamim-Islam/portfolio](https://github.com/Shamim-Islam/portfolio)
- **GitHub:** [Shamim-Islam](https://github.com/Shamim-Islam)
- **LinkedIn:** [Aminul Islam](https://www.linkedin.com/in/shamim-islam-cyb3r1d10t5/)
- **TryHackMe:** [Cyb3r1d10t5](https://tryhackme.com/p/Cyb3r1d10t5)
- **Email:** [shamimislam844gm@gmail.com](mailto:shamimislam844gm@gmail.com)

## Featured projects

| Project | Overview | Technologies | Links |
| --- | --- | --- | --- |
| **Fit-Log** | Fitness app for browsing workouts, planning routines, and tracking activity. | Next.js, React, Tailwind CSS | [Live demo](https://fit-log-dev-30ab.vercel.app/) · [Client repository](https://github.com/Shamim-Islam/Fit-Log) |
| **BazarDor** | Market-price app for browsing products, categories, and price changes. | Next.js, React, Tailwind CSS, MongoDB Atlas, Better Auth | [Live demo](https://bazar-dor-a7-lovat.vercel.app/) · [Client repository](https://github.com/Shamim-Islam/Bazar-Dor) |
| **PawMart** | Pet marketplace frontend for discovering listings and managing user listings and orders. | React, Vite, Tailwind CSS, Firebase Authentication | [Live demo](https://pawmart-project.netlify.app/) · [Frontend](https://github.com/Shamim-Islam/PawMart-Frontend) · [Backend](https://github.com/Shamim-Islam/pawmart-backend) |
| **Hero-IO** | App-catalog interface with search, sorting, details, and locally saved installations. | React, Vite, Tailwind CSS, React Router | [Live demo](https://hero-io-appstore.netlify.app/) · [Repository](https://github.com/Shamim-Islam/Hero-Io) |
| **DevStack** | Interactive technology browser for assembling a personal stack by category. | React, TypeScript, Vite, Tailwind CSS, DaisyUI | [Live demo](https://fabulous-sunburst-07bc59.netlify.app/) · [Repository](https://github.com/Shamim-Islam/DevStack) |
| **Samzone** | Static personal portfolio website with work, blog, skills, and contact sections. | HTML, CSS, JavaScript | [Live demo](https://shamim-islam.github.io/Samzone/) · [Repository](https://github.com/Shamim-Islam/Samzone) |

Project details, screenshots, technology lists, and links are maintained in [`src/data/portfolioData.js`](src/data/portfolioData.js). Each project has a page at `/projects/<project-slug>`.

## Portfolio highlights

- Responsive homepage with About, Web Development Skills, Web Security, Projects, Education, and Contact sections.
- Reusable project cards and dynamically generated project detail pages.
- Security learning topics and authorized-lab practice presented as learning in progress, not professional penetration-testing experience.
- Centralized profile and project content for easier updates.
- Personal portrait and project screenshots stored in `public/`.
- Next.js metadata for page titles, descriptions, and social previews.

## Built with

- Next.js App Router
- React
- JavaScript and JSX for the portfolio application
- Tailwind CSS
- Lucide React icons

## Run locally

**Prerequisites:** Node.js and npm compatible with the versions in `package.json`.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint on `src` |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build locally |

## Project structure

```text
src/
  app/                 App Router pages and layouts
  components/          Reusable portfolio sections and UI
  data/                Profile, skills, and project content
public/
  portrait.jpg         Personal portrait
  projects/            Project screenshots
```

The portfolio application does not currently require environment variables. Environment settings used by the separately linked projects are independent of this site.

## Deployment

This Next.js project can be deployed to Vercel by importing the GitHub repository. The standard build command is `npm run build`; no custom output directory is required. Review the project settings and confirm the production build before publishing.

---

Built and maintained by **Aminul Islam**.
