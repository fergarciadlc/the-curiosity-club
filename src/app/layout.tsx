import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Curiosity Club | MTG @ UPF",
  description:
    "A series of sessions where anyone can teach, share, or show something cool. Technical, non-technical, artistic, weird… everything is welcome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Navigation */}
        <nav className="px-6 py-5 max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img src="/upf_mtg.png" alt="UPF MTG" className="h-9" />
              <span
                className="hidden sm:block font-display text-xl font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Curiosity Club
              </span>
            </a>

            <div className="flex items-center gap-4">
              <a
                href="/#talks"
                className="text-sm font-medium"
                style={{ color: "var(--text-light)" }}
              >
                Talks
              </a>
              <a href="/#propose" className="btn-primary">
                Propose a Talk
              </a>
              <ThemeToggle />
            </div>
          </div>
        </nav>

        <main>{children}</main>

        {/* Footer */}
        <footer
          className="px-6 py-10 mt-20 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/upf_mtg.png" alt="UPF MTG" className="h-7" />
              <span className="text-sm" style={{ color: "var(--text-light)" }}>
                Music Technology Group @ UPF
              </span>
            </div>
            <span className="text-sm" style={{ color: "var(--text-light)" }}>
              Made with curiosity 🔍
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
