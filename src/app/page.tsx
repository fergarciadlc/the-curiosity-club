import { getUpcomingTalks, getPastTalks, Talk, getTalkStatus } from "@/data/talks";

function TalkCard({ talk }: { talk: Talk }) {
  const isUpcoming = getTalkStatus(talk) === "upcoming";

  return (
    <a href={`/talks/${talk.slug}`} className="card block p-6">
      {/* Status */}
      <div className="flex items-center gap-3 mb-4">
        {isUpcoming ? (
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full text-white"
            style={{ background: "var(--accent)" }}
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            Upcoming
          </span>
        ) : (
          <span className="tag">Past</span>
        )}
        <span className="text-xs" style={{ color: "var(--text-light)" }}>
          {talk.date !== "TBD" ? formatDate(talk.date) : "Date TBD"}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-xl font-semibold mb-2"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {talk.title}
      </h3>

      {/* Presenter */}
      <p className="text-sm mb-3" style={{ color: "var(--text-light)" }}>
        by <span style={{ color: "var(--text)" }}>{talk.presenter.name}</span>
      </p>

      {/* Description */}
      <p className="text-sm mb-4" style={{ color: "var(--text-light)" }}>
        {talk.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {talk.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Meta */}
      <div
        className="flex items-center gap-4 text-xs pt-4 border-t"
        style={{ color: "var(--text-light)", borderColor: "var(--border)" }}
      >
        <span className="flex items-center gap-1">
          <ClockIcon />
          {talk.time}
        </span>
        <span className="flex items-center gap-1">
          <LocationIcon />
          {talk.location}
        </span>
      </div>
    </a>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  const upcomingTalks = getUpcomingTalks();
  const pastTalks = getPastTalks();

  return (
    <div className="px-6 pb-20">
      {/* Hero */}
      <section className="max-w-5xl mx-auto pt-16 pb-20">
        <div className="max-w-2xl">
          <h1
            className="text-5xl sm:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The <span className="text-gradient italic">Curiosity</span> Club
          </h1>
          <p className="text-lg mb-8" style={{ color: "var(--text-light)" }}>
            A series of sessions where anyone can teach, share, or show something
            cool. <span style={{ color: "var(--text)" }}>Technical, non-technical, artistic, weird…</span> everything is welcome.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#talks" className="btn-primary">
              Browse Sessions
            </a>
            <a href="#propose" className="btn-secondary">
              Propose a Talk
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming */}
      {upcomingTalks.length > 0 && (
        <section id="talks" className="max-w-5xl mx-auto mb-16 scroll-mt-8">
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-gradient">Upcoming</span> Sessions
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {upcomingTalks.map((talk) => (
              <TalkCard key={talk.slug} talk={talk} />
            ))}
          </div>
        </section>
      )}

      {/* Past */}
      {pastTalks.length > 0 && (
        <section className="max-w-5xl mx-auto mb-16">
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Past Sessions
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {pastTalks.map((talk) => (
              <TalkCard key={talk.slug} talk={talk} />
            ))}
          </div>
        </section>
      )}

      {/* Propose */}
      <section id="propose" className="max-w-5xl mx-auto scroll-mt-8">
        <div
          className="rounded-xl p-8 sm:p-10"
          style={{ background: "var(--bg-alt)" }}
        >
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Got something cool to share?
          </h2>
          <p className="mb-6" style={{ color: "var(--text-light)" }}>
            Whether it's a talk, a demo, or a mini-workshop—we'd love to hear from you.
          </p>
          <a
            href="https://forms.gle/maEM77xhej1QonKn9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Propose a Session
          </a>
        </div>
      </section>
    </div>
  );
}
