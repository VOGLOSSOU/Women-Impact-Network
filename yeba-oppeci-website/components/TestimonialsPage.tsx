"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import WrittenTestimonials from "@/components/WrittenTestimonials";

type BiLang = { fr: string; en: string };

type VideoItem = {
  src?: string;
  youtubeId?: string;
  thumb: string;
  name: BiLang;
  info: BiLang;
  tag: BiLang;
};

// collectiveVideos: liens YouTube à brancher quand disponibles

const individualVideos: VideoItem[] = [
  {
    youtubeId: "wewx4aHK1WU",
    thumb: "https://img.youtube.com/vi/wewx4aHK1WU/hqdefault.jpg",
    name: { fr: "Dimom Ramatha", en: "Dimom Ramatha" },
    info: { fr: "35 ans · Commerçante", en: "35 years old · Trader" },
    tag: { fr: "Témoignage", en: "Testimonial" },
  },
  {
    youtubeId: "61p22vcp4i8",
    thumb: "https://img.youtube.com/vi/61p22vcp4i8/hqdefault.jpg",
    name: { fr: "Gbadamassi Rouckayath", en: "Gbadamassi Rouckayath" },
    info: { fr: "Bénéficiaire YEBA OPPECI", en: "YEBA OPPECI beneficiary" },
    tag: { fr: "Témoignage", en: "Testimonial" },
  },
  {
    youtubeId: "Zl66Gm1oJHY",
    thumb: "https://img.youtube.com/vi/Zl66Gm1oJHY/hqdefault.jpg",
    name: { fr: "Une bénéficiaire témoigne", en: "A beneficiary speaks" },
    info: { fr: "Bénéficiaire YEBA OPPECI", en: "YEBA OPPECI beneficiary" },
    tag: { fr: "Témoignage", en: "Testimonial" },
  },
  {
    youtubeId: "4t77AqwluYo",
    thumb: "https://img.youtube.com/vi/4t77AqwluYo/hqdefault.jpg",
    name: { fr: "Témoignage de gratitude", en: "Testimonial of gratitude" },
    info: { fr: "Une bénéficiaire reconnaissante", en: "A grateful beneficiary" },
    tag: { fr: "Témoignage", en: "Testimonial" },
  },
];

function YoutubeEmbed({ youtubeId, thumb }: { youtubeId: string; thumb: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-video bg-black">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundImage: `url(${thumb})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative w-12 h-12 rounded-full border-4 border-white/30 border-t-white animate-spin" />
        </div>
      )}
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setLoaded(true)}
        className={`w-full h-full transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}

function VideoModal({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-3xl overflow-hidden bg-[#0A1F0A] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {video.youtubeId ? (
          <YoutubeEmbed youtubeId={video.youtubeId} thumb={video.thumb} />
        ) : (
          <video
            ref={videoRef}
            src={video.src}
            controls
            playsInline
            preload="metadata"
            className="w-full"
            style={{ maxHeight: "70vh" }}
          />
        )}
        <div className="p-5 flex items-center justify-between">
          <div>
            <p className="text-white font-black text-lg">{t(video.name)}</p>
            <p className="text-[#7EE8A2] text-sm mt-0.5">{t(video.info)}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
            aria-label="Fermer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function VideoCard({
  video,
  large,
  onClick,
}: {
  video: VideoItem;
  large?: boolean;
  onClick: () => void;
}) {
  const { t } = useLang();

  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer group ${large ? "h-72" : "h-60"}`}
      onClick={onClick}
    >
      <Image
        src={video.thumb}
        alt={t(video.name)}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1B6B3A] text-white text-xs font-black uppercase tracking-wide">
        {t(video.tag)}
      </span>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
          <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-black text-base leading-tight">{t(video.name)}</p>
        <p className="text-white/70 text-xs mt-1">{t(video.info)}</p>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const { t } = useLang();
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1F0A] pt-40 pb-24 text-center px-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/30 border border-[#2D9A5C]/40 text-[#7EE8A2] text-xs font-bold tracking-widest uppercase mb-6">
          {t({ fr: "Paroles de femmes", en: "Women's voices" })}
        </span>
        <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6">
          {t({ fr: "Témoignages", en: "Testimonials" })}
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
          {t({
            fr: "Des femmes du Bénin partagent leur expérience et leur transformation grâce au projet YEBA OPPECI.",
            en: "Women from Benin share their experience and transformation through the YEBA OPPECI project.",
          })}
        </p>
      </section>

      {/* Témoignages collectifs — liens YouTube à ajouter */}
      {/* TODO: remplacer les vidéos locales par les liens YouTube quand disponibles
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/10 text-[#1B6B3A] text-xs font-bold tracking-widest uppercase mb-4">
              {t({ fr: "Voix collectives", en: "Collective voices" })}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              {t({ fr: "Témoignages collectifs", en: "Collective testimonials" })}
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl">
              {t({
                fr: "Des groupes de bénéficiaires racontent leur parcours et l'impact du projet sur leurs communautés.",
                en: "Groups of beneficiaries share their journey and the project's impact on their communities.",
              })}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {collectiveVideos.map((video, i) => (
              <VideoCard key={i} video={video} large onClick={() => setSelectedVideo(video)} />
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Témoignages individuels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/10 text-[#1B6B3A] text-xs font-bold tracking-widest uppercase mb-4">
              {t({ fr: "Vidéos", en: "Videos" })}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              {t({ fr: "Quelques témoignages vidéos", en: "Some video testimonials" })}
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl">
              {t({
                fr: "Des bénéficiaires partagent en leurs propres mots leur transformation personnelle.",
                en: "Beneficiaries share in their own words their personal transformation.",
              })}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualVideos.map((video, i) => (
              <VideoCard key={i} video={video} onClick={() => setSelectedVideo(video)} />
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages écrits */}
      <WrittenTestimonials />

      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </>
  );
}
