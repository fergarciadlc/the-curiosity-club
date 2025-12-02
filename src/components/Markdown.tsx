"use client";

import ReactMarkdown from "react-markdown";

export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        // Links open in new tab
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", textDecoration: "underline" }}
          >
            {children}
          </a>
        ),
        // Headers
        h2: ({ children }) => (
          <h2
            className="text-lg font-semibold mt-6 mb-2"
            style={{ color: "var(--text)" }}
          >
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3
            className="text-base font-semibold mt-4 mb-2"
            style={{ color: "var(--text)" }}
          >
            {children}
          </h3>
        ),
        // Paragraphs
        p: ({ children }) => <p className="mb-4">{children}</p>,
        // Lists
        ul: ({ children }) => (
          <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>
        ),
        // Bold & italic
        strong: ({ children }) => (
          <strong style={{ color: "var(--text)" }}>{children}</strong>
        ),
        em: ({ children }) => <em>{children}</em>,
        // Code
        code: ({ children }) => (
          <code
            className="px-1.5 py-0.5 rounded text-sm"
            style={{
              background: "var(--bg-alt)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {children}
          </code>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

