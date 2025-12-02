export interface Presenter {
  name: string;
  website?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface Talk {
  slug: string;
  title: string;
  presenter: Presenter;
  description: string;
  longDescription?: string;
  date: string;
  time: string;
  location: string;
  status: "upcoming" | "past";
  tags: string[];
  materials?: {
    slides?: string;
    code?: string;
    links?: { label: string; url: string }[];
  };
  video?: string; // YouTube EMBED URL: https://www.youtube.com/embed/VIDEO_ID
}

export const talks: Talk[] = [
  {
    slug: "baking-strudels-with-js",
    title: "Baking Strudels with JS",
    presenter: {
      name: "Sangarshanan",
      website: "https://sangarshanan.com/",
      linkedin: "https://www.linkedin.com/in/sangarshanan/",
      github: "https://github.com/sangarshanan",
    },
    description:
      "Writing code and making beats: An introduction to live coding using Strudel",
    longDescription: `Live coding is a performance practice where code is written and modified in real-time to create music, visuals, or other dynamic art forms. In this session, Sang will introduce us to Strudel, a JavaScript-based live coding environment for creating music patterns.

We'll explore:
- The basics of Strudel syntax and patterns
- How to create rhythms, melodies, and textures with code
- Live coding performance techniques
- The philosophy behind algorithmic music creation

No prior coding or music experience required—just bring your curiosity!`,
    date: "2024-11-27",
    time: "14:00-16:00",
    location: "Demo Room",
    status: "past",
    tags: ["live coding", "music", "javascript", "strudel"],
    materials: {
      links: [
        { label: "Strudel REPL", url: "https://strudel.cc/" },
        { label: "Strudel Documentation", url: "https://strudel.cc/learn/" },
      ],
    },
    video: "https://www.youtube.com/embed/Dlg9KvqNLLo",
  },
  {
    slug: "audio-plugins-juce-cpp",
    title: "Building Audio Plugins with JUCE + C++",
    presenter: {
      name: "Fernando",
      website: "fergarciadlc.github.io",
      linkedin: "https://linkedin.com/in/fergarciadlc",
      github: "https://github.com/fergarciadlc",
    },
    description:
      "A hands-on introduction to creating professional audio plugins using the JUCE framework",
    longDescription: `Ever wondered how your favorite synthesizers, effects, and audio tools are built? In this session, we'll dive into the world of audio plugin development using JUCE, a powerful C++ framework used by industry professionals.

Topics covered:
- Introduction to the JUCE framework and its ecosystem
- Understanding audio plugin formats (VST, AU, AAX)
- Building a simple synthesizer from scratch
- DSP fundamentals for audio processing
- Tips for debugging and testing audio code

This session is suitable for anyone curious about audio software development, though some programming experience will be helpful.`,
    date: "2024-12-04",
    time: "14:00-16:00",
    location: "Demo Room",
    status: "upcoming",
    tags: ["audio", "C++", "JUCE", "plugins", "DSP"],
  },
];

export function getTalkBySlug(slug: string): Talk | undefined {
  return talks.find((talk) => talk.slug === slug);
}

export function getUpcomingTalks(): Talk[] {
  return talks.filter((talk) => talk.status === "upcoming");
}

export function getPastTalks(): Talk[] {
  return talks.filter((talk) => talk.status === "past");
}
