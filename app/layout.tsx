import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeeshan | MERN Stack & React Native Developer",
  description: "Portfolio of Zeeshan — Full Stack MERN Developer & React Native Developer with 2 years industry experience. Based in Pakistan.",
  keywords: ["MERN Stack", "React Native", "Next.js", "Node.js", "MongoDB", "React", "Portfolio"],
  openGraph: {
    title: "Zeeshan | MERN Stack & React Native Developer",
    description: "Full Stack Developer specializing in MERN Stack and React Native",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark text-slate-300 font-rajdhani antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
