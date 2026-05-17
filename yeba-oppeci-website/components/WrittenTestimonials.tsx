"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

type Testimony = {
  id: number;
  name: string;
  activity: string;
  photo: string;
  quote: string;
  full: string;
};

const testimonials: Testimony[] = [
  {
    id: 1,
    name: "Worou Amina",
    activity: "Commerçante · Présidente des femmes peulhes",
    photo: "/testimony-photos/1.jpg",
    quote: "Ce rôle de présidente, je ne l'aurais jamais imaginé il y a deux ans.",
    full: "Avant de rejoindre le projet Yeba OPPECI, tout me semblait flou. Je vendais de l'huile, du riz et des pâtes alimentaires dans mon entourage, avec un capital de 50 000 FCFA pour un bénéfice net de 2 250 FCFA. Je m'en sortais grâce à mes propres économies et au soutien de mon mari, mais sans vraiment comprendre où j'allais ni ce à quoi j'avais droit.\n\nLe projet a tout changé. J'ai appris à avoir confiance en moi et à connaître mes droits en tant que femme. Grâce à cet accompagnement, j'ai pu obtenir une pièce d'identité — un document que je n'avais jamais eu — et exercer pour la première fois mes droits civiques en participant aux élections. C'était un moment fort pour moi.\n\nAujourd'hui, je suis la présidente des femmes peulhes de ma communauté. Je porte avec dignité la voix de celles qui n'osent pas encore parler. Mon mari a participé à une formation sur la masculinité positive. Depuis, notre relation s'est transformée. Yeba OPPECI n'a pas seulement changé ma vie, il a changé notre vie de famille.",
  },
  {
    id: 2,
    name: "Agbeniga Mariam",
    activity: "Commerçante · Marché de Savè",
    photo: "/testimony-photos/2.jpg",
    quote: "À 39 ans, j'ai eu ma pièce d'identité. Avec ce document, j'ai pu voter.",
    full: "Le marché de Savè, je le connais depuis l'enfance. J'ai vu ma mère y vendre, et moi après elle. Chaussures, chemises — je disposais ma marchandise tôt le matin et je rentrais le soir avec parfois 250 francs de bénéfice. C'est peu, mais c'était à moi.\n\nCe qui m'a le plus marquée dans le projet Yeba OPPECI, c'est qu'on ne nous a pas seulement appris à mieux vendre. On nous a appris à nous voir autrement. Lors des sessions de groupe, on était assises là, des commerçantes, des agricultrices, des femmes qui avaient traversé des choses difficiles — et pour la première fois, on se parlait vraiment. On riait, on se soutenait.\n\nMa pièce d'identité, je l'ai eue grâce au projet. À 39 ans. Ça peut faire sourire, mais pour moi c'était immense. Avec ce document, j'ai pu voter. J'ai pu dire : moi aussi, j'ai un avis sur ce pays. Mon mari m'a regardée différemment — comme une partenaire, pas juste comme une épouse. Je suis épanouie.",
  },
  {
    id: 3,
    name: "Dimon Ramata",
    activity: "Commerçante · Savon et détergent",
    photo: "/testimony-photos/3.jpg",
    quote: "Yeba OPPECI m'a appris que ce commerce, c'est le mien.",
    full: "Mon mari m'a donné l'argent pour démarrer. Dans notre quartier, c'est souvent comme ça — on attend la permission, le soutien, le signal de l'homme pour oser bouger. Je vendais mon détergent et mon savon aux femmes du quartier, au marché. Ça marchait doucement, mais je ne me sentais pas vraiment à moi.\n\nYeba OPPECI m'a appris que ce commerce, c'est le mien. Mes mains, mon intelligence, mon travail. Les formations m'ont aidée à tenir mes comptes, à voir où mon argent allait vraiment, à décider par moi-même.\n\nMon mari a suivi la formation sur la masculinité positive. Depuis, on ne parle plus de « son » commerce ou de « mon » commerce. On parle de nous. Je vends toujours mon savon et mon détergent. Mais aujourd'hui c'est avec fierté.",
  },
  {
    id: 6,
    name: "Ousmanou Fatima",
    activity: "Commerçante · 43 ans",
    photo: "/testimony-photos/6.jpg",
    quote: "À 43 ans, j'ai appris que mes deux mains valaient quelque chose.",
    full: "Toute ma vie, c'est mon mari qui a tout financé. Mon commerce, mes dépenses, tout. Je ne me plaignais pas — c'est la vie qu'on m'avait apprise. La femme gère la maison, l'homme tient le porte-monnaie.\n\nCe qui m'a plu chez Yeba OPPECI, c'est qu'on ne m'a pas jugée pour ça. On m'a juste montré qu'autre chose était possible. À 43 ans, j'ai appris à tenir de l'épargne. À mettre de côté sans que personne le sache. À réaliser que mes deux mains valaient quelque chose.\n\nJ'ai pu acheter ma marchandise avec mon propre argent, même si peu. Je vends toujours le même sucre, la même huile, le même savon. Mais ce n'est plus l'argent de mon mari seul.",
  },
  {
    id: 7,
    name: "Alidou Awaou",
    activity: "Commerçante · Sucre et savon",
    photo: "/testimony-photos/7.jpg",
    quote: "Yeba OPPECI a formé deux personnes chez moi. Lui et moi.",
    full: "Mon mari finançait mon commerce, mais financer, ce n'est pas encourager. Il donnait l'argent sans un mot, sans un regard sur ce que je faisais. Je vendais mon sucre et mon savon aux femmes du quartier.\n\nYeba OPPECI l'a invité à une formation sur la masculinité positive. Franchement, je n'attendais rien. Mais un soir il est rentré et il a demandé combien j'avais vendu et il m'a donné des conseils d'encouragement. Il m'a motivé à suivre la formation sur la création de plan d'affaires et la gestion financière pour m'améliorer, ce que je n'ai pas regretté.\n\nDepuis ce jour il me pousse. Yeba OPPECI a formé deux personnes chez moi. Lui et moi.",
  },
  {
    id: 9,
    name: "Adam Fatima",
    activity: "Commerçante · Huile, riz, sel, haricots",
    photo: "/testimony-photos/9.jpg",
    quote: "Ce que Yeba OPPECI m'a donné d'abord, c'est un miroir.",
    full: "Vendre de l'huile, du riz, du sel, des haricots. C'est ce que je fais. C'est ce que ma mère faisait. On pose sa marchandise, on attend les clients, on rentre le soir. Sans trop savoir combien on a vraiment gagné.\n\nCe que Yeba OPPECI m'a donné d'abord, c'est un miroir. Lors des formations en gestion financière, j'ai vu pour la première fois ce que mes dépenses et mes revenus voulaient vraiment dire. J'avais des chiffres dans la tête, mais je ne savais pas les lire. Maintenant je sais.\n\nMais au-delà des chiffres, c'est autre chose qui a changé en moi. J'ai appris que j'avais des droits. Que ma voix comptait. J'ai réalisé que je n'étais pas seule — que toutes ces femmes autour de moi vivaient les mêmes silences, les mêmes peurs, les mêmes espoirs.",
  },
  {
    id: 11,
    name: "Oumarou Zenab",
    activity: "Commerçante · Oignon et piment",
    photo: "/testimony-photos/11.jpg",
    quote: "J'ai arrêté de travailler les yeux fermés.",
    full: "Je vends de l'oignon et du piment depuis des années. Avec mes économies et l'aide de mon mari. Je comptais dans ma tête, comme ma mère m'avait appris. Pas de cahier, pas de calcul — juste la mémoire et la débrouille.\n\nAvec Yeba OPPECI, on nous a appris à clarifier ce qu'on dépense et ce qu'on gagne. Au début je trouvais ça compliqué, mais quand j'ai vu mon bilan de la semaine, j'ai eu un choc. Je perdais de l'argent sans m'en rendre compte depuis des années.\n\nMaintenant j'ai mon petit cahier. Chaque soir je note en traçant des tirets — comme je ne sais pas écrire. Mon mari dit que je suis devenue sérieuse. Moi je dis que j'ai juste arrêté de travailler les yeux fermés.",
  },
  {
    id: 14,
    name: "Hassana Aïchath",
    activity: "Commerçante · Riz et huile",
    photo: "/testimony-photos/14.jpg",
    quote: "Yeba OPPECI m'a appris à ouvrir la bouche. Pour moi c'était immense.",
    full: "Avant, je posais mon riz et mon huile et j'attendais. Je ne parlais pas trop aux clients. Je n'osais pas appeler, convaincre, sourire pour attirer. L'argent venait de mon mari, alors quelque part, je me sentais juste gardienne de sa marchandise, pas vraiment commerçante.\n\nYeba OPPECI m'a appris à ouvrir la bouche. Ça paraît petit dit comme ça, mais pour moi c'était immense. Aujourd'hui j'interpelle, je discute, je convaincs. Mes clients reviennent parce que je sais les accueillir.\n\nCe qui m'a surprise, c'est mon mari. Lui qui était renfermé, qui parlait peu — les formations l'ont ouvert. Il me pose des questions sur mes ventes. Il me pousse. C'est lui maintenant qui me motive le plus. J'ai aussi eu ma carte d'identité. J'ai voté.",
  },
  {
    id: 22,
    name: "Adamou Ramata",
    activity: "Commerçante · 22 ans",
    photo: "/testimony-photos/22.jpg",
    quote: "Réaliser que j'avais des droits. Que ma parole valait quelque chose.",
    full: "À 22 ans, on croit qu'on a le temps. Qu'on verra plus tard. Moi je vendais mes vêtements, je rentrais chez moi, et la journée recommençait pareille le lendemain. Je n'avais pas de grand rêve.\n\nQuand j'ai rejoint Yeba OPPECI, j'étais la plus jeune du groupe. Je me suis demandé ce que j'avais à faire là, entourée de femmes plus âgées, avec plus d'expérience. Mais dès les premières sessions, j'ai compris que l'âge n'avait rien à voir. On était toutes là pour apprendre à nous tenir debout.\n\nLes formations sur la confiance en soi, le leadership, la gestion de mon activité — tout ça a réveillé quelque chose en moi que je ne savais pas que j'avais. Ce qui m'a le plus marquée ? Réaliser que j'avais des droits. Que ma parole valait quelque chose. À 22 ans, dans mon quartier, on ne vous dit pas ça souvent.",
  },
  {
    id: 25,
    name: "Adam Amina",
    activity: "Commerçante · Chaussures à crédit",
    photo: "/testimony-photos/25.jpg",
    quote: "Pour la première fois, j'avais des réponses concrètes à mes problèmes concrets.",
    full: "Je travaille à crédit. Chaque matin je pars avec mes chaussures sous le bras et une dette qui m'attend le soir. Quand les ventes ne viennent pas, j'emprunte pour rembourser. C'est un cercle que beaucoup de femmes ici connaissent, mais dont personne ne parle.\n\nDans les formations Yeba OPPECI, on a parlé de gestion financière. On m'a enfin expliqué comment faire du crédit un outil et non un piège. Comment construire ses propres économies progressivement. Pour la première fois, j'avais des réponses concrètes à mes problèmes concrets.\n\nMais ce qui m'a le plus touchée, c'est d'entendre les autres femmes. Réaliser que je n'étais pas seule à porter ça en silence — ça m'a soulagée d'un poids que je ne savais même pas que je portais. Aujourd'hui je gère mon crédit.",
  },
];

const row1 = [...testimonials.slice(0, 5), ...testimonials.slice(0, 5)];
const row2 = [...testimonials.slice(5), ...testimonials.slice(5)];

function Modal({ testimony, onClose }: { testimony: Testimony; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bande verte du haut avec la photo ronde */}
        <div className="bg-gradient-to-br from-[#0A1F0A] to-[#1B6B3A] px-8 pt-8 pb-14 flex flex-col items-center text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
            aria-label="Fermer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>

          {/* Photo ronde */}
          <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/30 shadow-2xl mb-4">
            <Image
              src={testimony.photo}
              alt={testimony.name}
              fill
              className="object-cover object-top"
              unoptimized
            />
          </div>
          <h3 className="text-white font-black text-xl">{testimony.name}</h3>
          <p className="text-[#7EE8A2] text-sm mt-1">{testimony.activity}</p>
        </div>

        {/* Texte — chevauchement visuel avec carte blanche */}
        <div className="relative -mt-6 bg-white rounded-t-3xl flex-1 overflow-y-auto">
          <div className="p-7 pt-6">
            <svg className="w-8 h-8 text-[#1B6B3A]/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
            </svg>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              {testimony.full.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonyCard({ testimony, onClick }: { testimony: Testimony; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer group flex items-start gap-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#2D9A5C]/40 transition-all duration-300 rounded-2xl p-5 mx-3 shrink-0 w-80"
    >
      {/* Photo ronde */}
      <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 ring-2 ring-[#2D9A5C]/40 group-hover:ring-[#2D9A5C] transition-all">
        <Image
          src={testimony.photo}
          alt={testimony.name}
          fill
          className="object-cover object-top"
          unoptimized
        />
      </div>

      {/* Texte */}
      <div className="flex-1 min-w-0">
        <p className="text-white font-black text-sm leading-tight">{testimony.name}</p>
        <p className="text-[#7EE8A2] text-xs mt-0.5 mb-2">{testimony.activity}</p>
        <p className="text-white/55 text-xs italic leading-relaxed line-clamp-2">
          &ldquo;{testimony.quote}&rdquo;
        </p>
        <span className="inline-flex items-center gap-1 mt-2 text-[#7EE8A2] text-xs font-bold group-hover:gap-2 transition-all">
          Lire
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3 h-3">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default function WrittenTestimonials() {
  const { t } = useLang();
  const [selected, setSelected] = useState<Testimony | null>(null);

  return (
    <section className="py-24 bg-[#0A1F0A] overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/30 border border-[#2D9A5C]/40 text-[#7EE8A2] text-xs font-bold tracking-widest uppercase mb-4">
            {t({ fr: "Leurs mots", en: "Their words" })}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t({ fr: "Témoignages écrits", en: "Written testimonials" })}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            {t({
              fr: "Des femmes racontent en leurs propres mots comment YEBA OPPECI a transformé leur vie.",
              en: "Women tell in their own words how YEBA OPPECI transformed their lives.",
            })}
          </p>
        </div>
      </div>

      {/* Rangée 1 — défile vers la gauche */}
      <div className="mb-4 w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
          {row1.map((t, i) => (
            <TestimonyCard key={i} testimony={t} onClick={() => setSelected(t)} />
          ))}
        </div>
      </div>

      {/* Rangée 2 — défile vers la droite */}
      <div className="w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex animate-scroll-right" style={{ width: "max-content" }}>
          {row2.map((t, i) => (
            <TestimonyCard key={i} testimony={t} onClick={() => setSelected(t)} />
          ))}
        </div>
      </div>

      {selected && <Modal testimony={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
