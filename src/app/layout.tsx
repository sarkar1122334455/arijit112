import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Arijit Sarkar — Electronics & Communication Engineering Student | Developer",
  description:
    "Portfolio of Arijit Sarkar, B.Tech student in Electronics and Communication Engineering at Guru Nanak Institute of Technology, Kolkata. Working across software development, AI/ML, cybersecurity, and engineering.",
  keywords: [
    "Arijit Sarkar",
    "Electronics and Communication Engineering",
    "GNIT",
    "Developer",
    "Software Development",
    "AI/ML",
    "Cybersecurity",
    "Portfolio",
  ],
  authors: [{ name: "Arijit Sarkar" }],
  creator: "Arijit Sarkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Arijit Sarkar — Electronics & Communication Engineering Student | Developer",
    description:
      "Portfolio of Arijit Sarkar, B.Tech student in Electronics and Communication Engineering at Guru Nanak Institute of Technology, Kolkata.",
    siteName: "Arijit Sarkar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arijit Sarkar — Electronics & Communication Engineering Student | Developer",
    description:
      "Portfolio of Arijit Sarkar, B.Tech student in Electronics and Communication Engineering at Guru Nanak Institute of Technology, Kolkata.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-bg-primary text-text-secondary">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
