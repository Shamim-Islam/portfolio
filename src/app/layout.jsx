import "./globals.css";

export const metadata = {
  title: "Aminul Islam | Web Developer & Web Security Learner",
  description:
    "Portfolio of Aminul Islam (Shamim-Islam) - Aspiring Full-Stack Web Developer & Web Security Learner. Showcasing responsive web projects (Fit-Log, BazarDor) and hands-on security foundations.",
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
  ],
  authors: [{ name: "Aminul Islam" }],
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
