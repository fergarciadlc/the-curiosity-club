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
  date: string; // ISO date (YYYY-MM-DD) or "TBD" for unscheduled talks
  time: string;
  location: string;
  tags: string[];
  materials?: {
    slides?: string;
    code?: string;
    links?: { label: string; url: string }[];
  };
  video?: string; // YouTube EMBED URL: https://www.youtube.com/embed/VIDEO_ID
}

export function getTalkStatus(talk: Talk): "upcoming" | "past" | "tbd" {
  if (talk.date === "TBD") {
    return "tbd";
  }
  const talkDate = new Date(talk.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to compare just dates
  return talkDate >= today ? "upcoming" : "past";
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
    date: "2025-11-27",
    time: "14:00-16:00",
    location: "Demo Room",
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
    date: "2025-12-04",
    time: "14:00-16:00",
    location: "Demo Room",
    tags: ["audio", "C++", "JUCE", "plugins", "DSP"],
  },
  {
    slug: "puredata-maxmsp-intro",
    title: "Introduction to PureData and Max/MSP",
    presenter: {
      name: "Olly",
      website: "https://ollyflaig.com/",
      linkedin: "https://www.linkedin.com/in/oliver-flaig-8262b6286/",
      github: "https://github.com/oflaig",
    },
    description:
      "An introductory workshop on visual programming for audio and multimedia using PureData and Max/MSP",
    longDescription: `
This presentation will be an introduction to PureData and Max/MSP, talking about what they are and why people use them! 
I'll then give a bit of a walkthrough on some of the basics of patching, with the aim of making a very basic sequencer, depending on where we get to.

I will talk a little bit about the differences between Pd and Max, but at the level of this tutorial, all of the functionality is exactly the same and can be executed in both programmes. 
I'm going to be working in PureData, because it is completely free: [https://puredata.info/downloads/pure-data](https://puredata.info/downloads/pure-data)

But if you particularly want to use Max instead, you can get a 30 day free trial: [https://cycling74.com/downloads/max](https://cycling74.com/downloads/max)

Other than that, all you'll need is a laptop and (ideally) some headphones. See you there!
`,
    date: "2026-01-16",
    time: "14:00-16:00",
    location: "Demo Room",
    tags: ["audio", "puredata", "maxmsp", "visual programming"],
  },
  {
    slug: "mixing-101",
    title: "Mixing 101",
    presenter: {
      name: "Rafael E Moncayo Palate",
      linkedin: "https://www.linkedin.com/in/rafaelmoncayopalate/",
    },
    description: "Introductory session on music mixing and plugin use",
    longDescription: `This session is designed for anyone looking to learn about music mixing and the use of plugins. We will start by discussing the different types of effects, focusing on the most essential ones and how to use them correctly. We’ll also debunk a few myths and misconceptions about professional mixing. We will explore mixing techniques aimed at achieving rich sonority rather than just high volume—all backed by a deep dive into the FL Studio project of my latest song, 'Ayer tuve un sueño.'
This class requires nothing more than a desire to understand the professional process that every song goes through.`,
    date: "2026-01-19",
    time: "17:00-18:00",
    location: "Demo Room",
    tags: ["audio", "music", "mixing", "plugins", "DAWs"],
    materials: {
      links: [
        {
          label: "Callme BW on Spotify",
          url: "https://open.spotify.com/intl-es/artist/65U5Rb4CxQKnZwT38Z9DUX?si=Wz-nwElnQkyWzxxSw9e3aw",
        },
      ],
    },
  },
];

export function getTalkBySlug(slug: string): Talk | undefined {
  return talks.find((talk) => talk.slug === slug);
}

export function getUpcomingTalks(): Talk[] {
  return talks.filter((talk) => getTalkStatus(talk) === "upcoming");
}

export function getPastTalks(): Talk[] {
  return talks.filter((talk) => getTalkStatus(talk) === "past");
}

export function getTBDTalks(): Talk[] {
  return talks.filter((talk) => getTalkStatus(talk) === "tbd");
}
