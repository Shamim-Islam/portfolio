import "./globals.css";

export const metadata = {
  title: {
    default: "Aminul Islam | Web Developer & Web Security Learner",
    template: "%s | Aminul Islam",
  },
  description:
    "Portfolio of Aminul Islam (Shamim-Islam), a Web Developer and Web Security Learner. Explore responsive web projects, verified GitHub repositories, and an honest security-learning journey.",
  keywords: [
    "Aminul Islam",
    "Shamim-Islam",
    "Web Developer",
    "Web Security",
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "BazarDor",
    "Fit-Log",
    "PawMart",
    "Hero-IO",
    "DevStack",
  ],
  authors: [{ name: "Aminul Islam" }],
  icons: {
    icon: "/portrait.jpg",
    shortcut: "/portrait.jpg",
    apple: "/portrait.jpg",
  },
  openGraph: {
    type: "website",
    title: "Aminul Islam | Web Developer & Web Security Learner",
    description:
      "Web development projects and an honest web security learning journey.",
    siteName: "Aminul Islam Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#090b0f] text-slate-100 antialiased selection:bg-[#ccff00] selection:text-[#090b0f]">
        {children}
      </body>
    </html>
  );
}
