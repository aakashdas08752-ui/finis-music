

const releases = [
  {
    title: "Awaara",
    type: "LATEST RELEASE",
    description: "Shourya, FINIS & AMR8",
    artwork: "/awaara.jpg",
    link: "https://open.spotify.com/track/0cZgPKtKFGbH0gkfE2dcOj",
  },
  {
    title: "Gone Thru Me",
    type: "FEATURED COLLABORATION",
    description: "Shourya & FINIS",
    artwork: "/gone-thru-me.jpg",
    link: "https://open.spotify.com/track/37Ra53inDCd4IdhrCqKFJK",
  },
  {
    title: "LAG JAYE DIL",
    type: "ORIGINAL WORK",
    description: "FINIS",
    artwork: "/lag-jaye-dil.jpg",
    link: "https://open.spotify.com/track/0AnXuOMdnwnSexS3dItVpy",
  },
];


export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b16] text-white selection:bg-blue-400 selection:text-black">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-7 md:px-16">
        <a href="#" className="text-2xl font-bold tracking-[0.35em]">
          FINIS<span className="text-blue-400">.</span>
        </a>

        <div className="hidden items-center gap-10 text-xs uppercase tracking-[0.2em] text-gray-400 md:flex">
          <a href="#music" className="transition hover:text-blue-300">Music</a>
          <a href="#about" className="transition hover:text-blue-300">About</a>
          <a href="#work" className="transition hover:text-blue-300">Collaborations</a>
          <a href="#contact" className="transition hover:text-blue-300">Contact</a>
        </div>
<details className="relative md:hidden">
  <summary className="cursor-pointer list-none rounded-md border border-blue-300/30 px-3 py-2 text-sm text-blue-200">
    ☰
  </summary>

  <div className="absolute right-0 top-12 z-50 flex w-48 flex-col gap-4 rounded-md border border-blue-300/20 bg-[#080b16] p-5 text-xs uppercase tracking-widest text-gray-300 shadow-xl">
    <a href="#music">Music</a>
    <a href="#about">About</a>
    <a href="#work">Collaborations</a>
    <a href="#contact">Contact</a>
  </div>
</details>
        <a
          href="#contact"
          className="rounded-full border border-blue-300/30 px-5 py-2 text-xs tracking-widest transition hover:bg-blue-400 hover:text-black"
        >
          WORK WITH ME
        </a>
      </nav>

      {/* Hero */}
      <section
  className="relative flex min-h-[720px] flex-col items-center justify-center overflow-hidden px-6 text-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(5,10,25,0.25), rgba(5,10,25,0.35)), url('/finis-hero.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(31,100,190,0.25),transparent_60%)]" />

        <div className="absolute left-[15%] top-[20%] h-48 w-48 rounded-full bg-blue-700/10 blur-[90px]" />
        <div className="absolute bottom-[10%] right-[15%] h-64 w-64 rounded-full bg-sky-400/10 blur-[100px]" />
<div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_right,#080b16_0%,transparent_22%,transparent_78%,#080b16_100%),linear-gradient(to_bottom,#080b16_0%,transparent_18%,transparent_82%,#080b16_100%)]" />
        <div className="relative z-10">
          <p className="mb-8 text-xs tracking-[0.5em] text-blue-300">
            INDEPENDENT MUSIC PRODUCER
          </p>

          <h1 className="text-7xl font-semibold tracking-[0.15em] sm:text-8xl md:text-[150px]">
            FINIS
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 tracking-widest text-gray-400 md:text-base">
            SOUND WITHOUT LIMITS.
            <br />
            ORIGINALITY WITHOUT BOUNDARIES.
          </p>

          <a
            href="#music"
            className="mt-12 inline-block rounded-full bg-blue-400 px-9 py-4 text-xs font-semibold tracking-[0.2em] text-[#080b16] transition hover:bg-white"
          >
            EXPLORE MUSIC
          </a>
        </div>

        <p className="absolute bottom-8 z-10 text-[10px] tracking-[0.4em] text-gray-300">
          SCROLL TO DISCOVER
        </p>
      </section>

      {/* Music */}
      <section id="music" className="px-6 py-24 md:px-16">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs tracking-[0.4em] text-blue-400">
              THE SOUND LIBRARY
            </p>
            <h2 className="text-4xl font-medium md:text-5xl">
              Selected Works<span className="text-blue-400">.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-gray-500">
            Original productions, independent releases and creative collaborations.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12">

  <a
    href="https://music.apple.com/in/artist/finis/1845947849"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/20 px-7 py-3 text-sm text-white hover:bg-white hover:text-black transition"
  >
    Listen on Apple Music ↗
  </a>

  <a
    href="https://music.youtube.com/channel/UCP2GUbsNn-jvWaUYZEz8Wkg"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/20 px-7 py-3 text-sm text-white hover:bg-white hover:text-black transition"
  >
    Listen on YouTube Music ↗
  </a>

</div>
{/* Spotify Artist Player */}
<div className="mb-12">
  <iframe
    style={{
      borderRadius: "16px",
      border: "none",
    }}
    src="https://open.spotify.com/embed/artist/63EHCbFL1FBoyw0lkpbnBq?utm_source=generator&theme=0"
    width="100%"
    height="352"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    title="FINIS Spotify Music Player"
  />
</div>
<p className="mb-3 text-[10px] tracking-[0.25em] text-blue-300/70 md:hidden">
  SWIPE TO EXPLORE →
</p>
        <div className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {releases.map((release) => (
            <a
  key={release.title}
  href={release.link}
  target="_blank"
  rel="noopener noreferrer"
  className="group block min-w-[65%] shrink-0 snap-start cursor-pointer md:min-w-0"
>
              <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-[#080b16]">
  <img
    src={release.artwork}
    alt={release.title}
    className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-in-out hover:scale-[1.03]"
  />
</div>
                

              <p className="mt-6 text-[10px] tracking-[0.3em] text-blue-300">
                {release.type}
              </p>
              <h3 className="mt-2 text-base md:text-xl">{release.title}</h3>
              <p className="mt-2 text-sm text-gray-500">
                {release.description}
              </p>
              <span className="mt-5 inline-flex items-center rounded-full border border-blue-400/40 px-4 py-2 text-[10px] font-semibold tracking-widest text-blue-300 transition hover:bg-blue-500/20">
  LISTEN ON SPOTIFY ↗
</span>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-white/10 bg-[#0b1120] px-6 py-28 md:px-16">
        <p className="mb-5 text-xs tracking-[0.4em] text-blue-400">
          BEHIND THE SOUND
        </p>
        <h2 className="max-w-3xl text-4xl leading-tight md:text-6xl">
          Music is more than sound.
          <span className="text-blue-300"> It's an identity.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-sm leading-8 text-gray-400">
          FINIS is an independent music producer shaping sound through originality, experimentation, and collaboration. From original compositions to artist-driven productions, every project reflects a distinct creative vision.
        </p>
      </section>

      {/* Collaborations */}
      <section id="work" className="px-6 py-24 text-center md:px-16">
        <p className="mb-5 text-xs tracking-[0.4em] text-blue-400">
          CREATIVE CONNECTIONS
        </p>
        <h2 className="text-4xl md:text-6xl">
          Great music is created together.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-gray-400">
          FINIS collaborates with artists, vocalists, songwriters, and producers to create music that brings different creative perspectives together. Every collaboration begins with an idea and grows into something unique.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-b from-[#101e38] to-[#080b16] px-6 py-28 text-center">
        <p className="mb-5 text-xs tracking-[0.4em] text-blue-300">
          HAVE SOMETHING IN MIND?
        </p>
        <h2 className="text-5xl md:text-7xl">
          Let's create.
        </h2>
        <p className="mt-6 text-sm text-gray-400">
          For production enquiries and collaborations.
        </p>
        <a
          href="mailto:prodfinis.co@gmail.com"
          className="mt-10 inline-block rounded-full border border-blue-300/40 px-9 py-4 text-xs tracking-widest transition hover:bg-blue-400 hover:text-black"
        >
          GET IN TOUCH
        </a>
        <p className="mt-5 text-sm text-blue-200/70">
  prodfinis.co@gmail.com
</p>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-between gap-5 border-t border-white/10 px-6 py-9 text-xs text-gray-500 md:flex-row md:px-16">
        <span className="font-semibold tracking-[0.3em] text-white">FINIS.</span>
        <span>© 2026 FINIS. ALL RIGHTS RESERVED.</span>
        <span>INDEPENDENTLY CREATED.</span>
        
<div className="mt-3 flex flex-wrap justify-center gap-6 text-xs tracking-widest text-blue-300">
  <a href="https://open.spotify.com/artist/63EHCbFL1FBoyw0lkpbnBq" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">SPOTIFY</a>
  <a href="https://music.apple.com/in/artist/finis/1845947849" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">APPLE MUSIC</a>
  <a href="https://music.youtube.com/channel/UCP2GUbsNn-jvWaUYZEz8Wkg" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">YOUTUBE MUSIC</a>
</div>

      </footer>

    </main>
  );
}
