import { getTalkBySlug, talks, getTimezoneAbbreviation, DEFAULT_TIMEZONE } from "@/data/talks";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Markdown from "@/components/Markdown";
// Revalidate every 24 hours to automatically update talk statuses
export const revalidate = 86400;
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return talks.map((talk) => ({ slug: talk.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const talk = getTalkBySlug(slug);
  if (!talk) return { title: "Talk Not Found | Curiosity Club" };
  return {
    title: `${talk.title} | Curiosity Club`,
    description: talk.description,
  };
}

function formatDate(dateStr: string): string {
  if (dateStr === "TBD") return "Date TBD";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function TalkPage({ params }: Props) {
  const { slug } = await params;
  const talk = getTalkBySlug(slug);

  if (!talk) notFound();

  const isUpcoming = talk.status === "upcoming";

  return (
    <div className="px-6 pb-20">
      <div className="max-w-3xl mx-auto pt-8">
        {/* Back */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-8"
          style={{ color: "var(--text-light)" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </a>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            {isUpcoming ? (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-semibold rounded-full text-white"
                style={{ background: "var(--accent)" }}
              >
                Upcoming
              </span>
            ) : (
              <span className="tag">Past</span>
            )}
          </div>

          <h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {talk.title}
          </h1>

          <div className="flex items-center gap-3 text-xl mb-6">
            <span style={{ color: "var(--text-light)" }}>by</span>
            <span style={{ color: "var(--text)" }}>{talk.presenter.name}</span>
            {(talk.presenter.website || talk.presenter.linkedin || talk.presenter.github || talk.presenter.twitter) && (
              <span className="flex items-center gap-2">
                {talk.presenter.website && (
                  <a href={talk.presenter.website} target="_blank" rel="noopener noreferrer" title="Website">
                    <svg className="w-5 h-5" style={{ color: "var(--text-light)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </a>
                )}
                {talk.presenter.linkedin && (
                  <a href={talk.presenter.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <svg className="w-5 h-5" style={{ color: "var(--text-light)" }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                {talk.presenter.github && (
                  <a href={talk.presenter.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <svg className="w-5 h-5" style={{ color: "var(--text-light)" }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {talk.presenter.twitter && (
                  <a href={talk.presenter.twitter} target="_blank" rel="noopener noreferrer" title="Twitter/X">
                    <svg className="w-5 h-5" style={{ color: "var(--text-light)" }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                )}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-5 text-sm" style={{ color: "var(--text-light)" }}>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(talk.date)}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {talk.time} {getTimezoneAbbreviation(talk.date, talk.timezone || DEFAULT_TIMEZONE)}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {talk.location}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            {talk.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </header>

        {/* Video */}
        {talk.video && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Recording
            </h2>
            <div className="aspect-video rounded-lg overflow-hidden" style={{ background: "var(--bg-alt)" }}>
              <iframe
                src={talk.video.replace("youtube.com", "youtube-nocookie.com")}
                title={talk.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* About */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            About this session
          </h2>
          <div className="prose-talk">
            <Markdown>{talk.longDescription || talk.description}</Markdown>
          </div>
        </section>

        {/* Materials */}
        {talk.materials && (
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Resources
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {talk.materials.slides && (
                <a
                  href={talk.materials.slides}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-3 p-4"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--bg-alt)" }}>
                    <svg className="w-5 h-5" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Slides</p>
                    <p className="text-xs" style={{ color: "var(--text-light)" }}>View presentation</p>
                  </div>
                </a>
              )}

              {talk.materials.code && (
                <a
                  href={talk.materials.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-3 p-4"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--bg-alt)" }}>
                    <svg className="w-5 h-5" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Code</p>
                    <p className="text-xs" style={{ color: "var(--text-light)" }}>Browse repository</p>
                  </div>
                </a>
              )}

              {talk.materials.links?.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-3 p-4"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--bg-alt)" }}>
                    <svg className="w-5 h-5" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{link.label}</p>
                    <p className="text-xs" style={{ color: "var(--text-light)" }}>External link</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        {isUpcoming && (
          <div className="rounded-lg p-6 text-center text-white" style={{ background: "var(--accent)" }}>
            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Don't miss this session!
            </h3>
            <p className="opacity-90">
              {formatDate(talk.date)} · {talk.time} {getTimezoneAbbreviation(talk.date, talk.timezone || DEFAULT_TIMEZONE)} · {talk.location}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
