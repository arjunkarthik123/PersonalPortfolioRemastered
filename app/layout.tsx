import type { Metadata, Viewport } from "next";
import Navbar from "./components/navigation";
import FlowyBackground from "./components/FlowyBackground";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arjun Karthik | Software Engineering & Management Portfolio",
  description:
    "Personal portfolio of Arjun Karthik — Final-year Software Engineering & Management (B.Eng.Mgt) student at McMaster University. Experience at Citi, Veoneer, Transpire Technologies, Academic Teaching, and MEMS Leadership.",
  keywords: [
    "Arjun Karthik",
    "Software Engineering",
    "McMaster University",
    "Management",
    "Citi",
    "Veoneer",
    "Transpire Technologies",
    "Machine Learning",
    "PyTorch",
    "Spring Boot",
    "React",
    "Distributed Systems",
  ],
  authors: [{ name: "Arjun Karthik" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050b18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen text-slate-100 bg-[#050b18] overflow-x-hidden selection:bg-blue-600 selection:text-white">
        <FlowyBackground />
        <header>
          <Navbar />
        </header>
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}