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
    title: "An Introduction to Audio Plugins with JUCE and C++",
    presenter: {
      name: "Fernando",
      website: "https://fergarciadlc.github.io/",
      linkedin: "https://linkedin.com/in/fergarciadlc",
      github: "https://github.com/fergarciadlc",
    },
    description:
      "A hands-on introduction to creating audio plugins using the JUCE framework",
    longDescription: `Ever wondered how audio plugins are built? In this session, we'll dive into audio plugin development using **JUCE**, a powerful C++ framework used by industry professionals.

## What we'll cover

- Introduction to the **JUCE framework**
- DSP fundamentals for audio processing
- Building a *simple distortion plugin* from scratch
- Tips for plugin development

We'll show how to create a plugin using both **Projucer** and **CMake**.

## Before the session

Please prepare your development environment:

**1. Download the [JUCE SDK](https://juce.com/download)**

**2. Choose your setup:**

*Option A — Easy (using Projucer):*
- **macOS:** Install [Xcode](https://developer.apple.com/xcode/)
- **Windows:** Install [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) with C++ tools

*Option B — Advanced (using CMake + your IDE of choice):*
- **macOS:** Install [CMake](https://gist.github.com/fscm/29fd23093221cf4d96ccfaac5a1a5c90)
- **Windows:** Install [CMake](https://cmake.org/download/)
- **Linux:** CMake 3.20+ and C++ build tools

## Useful links

- [JUCE Documentation](https://juce.com/learn)
- [JUCE GitHub](https://github.com/juce-framework/JUCE)
- [JUCE Projucer Tutorial](https://juce.com/tutorials/tutorial_new_projucer_project/)
- [JUCE CMake Guide](https://github.com/juce-framework/JUCE/blob/master/docs/CMake%20API.md)

This session is suitable for anyone curious about audio software development. Some programming experience will be helpful but *not required*!
`,
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
