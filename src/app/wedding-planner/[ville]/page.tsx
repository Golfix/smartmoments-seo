import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { cities, getCityBySlug } from "@/data/cities";
import { themes } from "@/data/themes";
import { departments } from "@/data/departments";

// Fonction de hash déterministe pour varier le contenu par ville
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function pick<T>(arr: T[], slug: string, offset = 0): T {
  return arr[(hashCode(slug) + offset) % arr.length];
}

// Population numérique
function pop(city: { population: string }): number {
  return parseInt(city.population.replace(/\s/g, ""));
}

// Catégorie de ville par population
function cityCategory(city: { population: string }): "metropole" | "grande" | "moyenne" | "petite" | "village" {
  const p = pop(city);
  if (p >= 200000) return "metropole";
  if (p >= 50000) return "grande";
  if (p >= 15000) return "moyenne";
  if (p >= 5000) return "petite";
  return "village";
}

export function generateStaticParams() {
  return cities.map((city) => ({ ville: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) return {};

  const cat = cityCategory(city);
  const h = hashCode(city.slug);

  // Titres variés par catégorie et hash
  const titles = {
    metropole: [
      `Wedding Planner ${city.name} | Organisation Mariage Haut de Gamme`,
      `Organisatrice de Mariage ${city.name} - Coordinatrice Jour J`,
      `Wedding Planner ${city.name} - Organisation Événement & Mariage`,
    ],
    grande: [
      `Wedding Planner ${city.name} (${city.department}) | Mariage Clé en Main`,
      `Organisation Mariage ${city.name} - Wedding Planner ${city.region}`,
      `Coordinatrice Mariage ${city.name} | Smart Moments Event`,
    ],
    moyenne: [
      `Wedding Planner ${city.name} - Coordinatrice Mariage ${city.department}`,
      `Organisation de Mariage à ${city.name} | Wedding Planner`,
      `Wedding Planner ${city.name} et ${city.nearbyCity} - Organisation Mariage`,
    ],
    petite: [
      `Wedding Planner ${city.name} et environs | Organisation Mariage ${city.department}`,
      `Organisation Mariage ${city.name} - Wedding Planner ${city.department}`,
      `Coordinatrice Jour J à ${city.name} (${city.department})`,
    ],
    village: [
      `Wedding Planner ${city.name} (${city.department}) - Mariage en ${city.region}`,
      `Organisation Mariage ${city.name} et alentours | ${city.department}`,
      `Coordinatrice Mariage à ${city.name} - ${city.region}`,
    ],
  };

  const descriptions = {
    metropole: [
      `Wedding planner à ${city.name} : organisation de mariage clé en main, coordinatrice jour J et décoration haut de gamme. Smart Moments Event, votre organisatrice de mariage en ${city.region}. Devis gratuit.`,
      `Organisatrice de mariage à ${city.name} (${city.department}). Coordination jour J, organisation événement et mariage sur mesure. Noté 4.6/5 ★ Devis gratuit et sans engagement.`,
      `Coordinatrice mariage à ${city.name}. De la planification au jour J, notre équipe organise votre mariage de A à Z en ${city.region}. Première consultation offerte.`,
    ],
    grande: [
      `Votre wedding planner à ${city.name}, ${city.description}. Organisation de mariage, coordination jour J et événement sur mesure en ${city.department}. Devis gratuit.`,
      `Organisation mariage à ${city.name} par Smart Moments Event. Coordinatrice jour J, décoration et gestion complète. Intervention dans tout le ${city.department}. Devis offert.`,
      `Coordinatrice de mariage à ${city.name} en ${city.region}. Organisation événement, jour J et décoration. À partir de 200€. Noté 4.6/5.`,
    ],
    moyenne: [
      `Wedding planner à ${city.name} et ${city.nearbyCity}. Organisation mariage, coordinatrice jour J en ${city.department}. Smart Moments Event, devis gratuit.`,
      `Organisation de mariage à ${city.name} (${city.department}). Votre coordinatrice mariage pour un jour J parfait en ${city.region}. Devis personnalisé offert.`,
      `Coordinatrice jour J à ${city.name}. Organisation événement et mariage sur mesure en ${city.department}, ${city.region}. Consultation gratuite.`,
    ],
    petite: [
      `Wedding planner à ${city.name} et ses environs en ${city.department}. Organisation mariage, coordination jour J. Smart Moments Event intervient dans toute la ${city.region}.`,
      `Organisation mariage à ${city.name}, ${city.description}. Coordinatrice mariage et jour J en ${city.department}. Devis gratuit.`,
      `Votre wedding planner près de ${city.name} en ${city.department}. Organisation événement, mariage et coordination jour J. Devis offert.`,
    ],
    village: [
      `Wedding planner à ${city.name} et alentours (${city.department}). Organisation mariage intimiste, coordinatrice jour J en ${city.region}. Devis gratuit.`,
      `Organisation de mariage à ${city.name}, ${city.description}. Votre coordinatrice mariage en ${city.department}. Smart Moments Event.`,
      `Coordinatrice mariage à ${city.name} et ${city.nearbyCity}. Organisation événement sur mesure en ${city.region}. Consultation offerte.`,
    ],
  };

  const title = titles[cat][h % titles[cat].length];
  const description = descriptions[cat][h % descriptions[cat].length];

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.smartmoments.fr/wedding-planner/${city.slug}`,
    },
    openGraph: {
      title: `Wedding Planner ${city.name} | Smart Moments Event`,
      description,
      url: `https://www.smartmoments.fr/wedding-planner/${city.slug}`,
      images: [
        {
          url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg",
          width: 960,
          height: 640,
          alt: `Wedding Planner ${city.name} - Smart Moments Event`,
        },
      ],
    },
  };
}

const heroImages = [
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41_3_306698-168546595030467.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg",
];

// Paragraphes d'intro variés - pool de 8 variantes sélectionnées par hash
function generateIntro(city: { name: string; slug: string; department: string; region: string; description: string; nearbyCity: string; population: string }) {
  const cat = cityCategory(city);
  const h = hashCode(city.slug);
  const nearbyCitySlug = cities.find((c) => c.name === city.nearbyCity)?.slug || "";

  const nearbyLink = (
    <Link href={`/wedding-planner/${nearbyCitySlug}`} className="text-gold hover:underline">
      {city.nearbyCity}
    </Link>
  );

  // Paragraphes variés selon catégorie + hash
  const intros: { p1: React.ReactNode; p2: React.ReactNode; p3: React.ReactNode }[] = [];

  if (cat === "metropole" || cat === "grande") {
    intros.push(
      {
        p1: <>Vous recherchez une <strong>organisatrice de mariage à {city.name}</strong> ? Smart Moments Event met son expertise au service de votre union en {city.region}. Notre équipe de coordinatrices intervient à {city.name} et dans l&apos;ensemble du {city.department} pour transformer votre vision en réalité.</>,
        p2: <>{city.name}, {city.description}, est une destination prisée pour les mariages. Avec ses {city.population} habitants, la ville offre un choix exceptionnel de lieux de réception : domaines, châteaux, hôtels de prestige et espaces atypiques. Nous connaissons les meilleurs prestataires locaux et ceux de {nearbyLink} pour composer votre équipe idéale.</>,
        p3: <>En tant que <strong>coordinatrice de mariage</strong> expérimentée, nous gérons chaque détail : repérage des lieux, sélection du traiteur, du photographe et du DJ, conception de la décoration florale et coordination intégrale le jour J. Notre objectif : vous offrir une <strong>organisation événementielle</strong> sans stress, adaptée à votre budget.</>,
      },
      {
        p1: <>Smart Moments Event est votre <strong>wedding planner à {city.name}</strong>, spécialiste de l&apos;organisation de mariage haut de gamme en {city.region}. De la première consultation jusqu&apos;au lendemain de la fête, notre <strong>coordinatrice jour J</strong> orchestre chaque moment avec passion et rigueur.</>,
        p2: <>Organiser un mariage à {city.name} ({city.department}), c&apos;est profiter d&apos;une ville riche en lieux d&apos;exception. {city.name}, {city.description}, séduit les couples par son dynamisme et sa diversité. Nous travaillons également avec les plus beaux prestataires de {nearbyLink} et de toute la {city.region}.</>,
        p3: <>Notre approche de <strong>coordinatrice mariage</strong> repose sur l&apos;écoute et la personnalisation. Chaque couple est unique, chaque mariage mérite une attention sur mesure. Nous prenons en charge l&apos;<strong>organisation événementielle</strong> complète : recherche de lieu, gestion du budget, design floral et pilotage du jour J.</>,
      },
      {
        p1: <>Basés à Lyon, nous intervenons comme <strong>wedding planner à {city.name}</strong> pour organiser des mariages élégants et personnalisés. Notre <strong>coordinatrice jour J</strong> vous accompagne dans toutes les étapes, de la planification initiale à la coordination le jour de votre union.</>,
        p2: <>{city.name}, {city.description} : un cadre inspirant pour célébrer votre amour. Grâce à notre connaissance approfondie du {city.department} et de la {city.region}, nous sélectionnons les prestataires les plus talentueux de {city.name} à {nearbyLink}, en passant par toute la région.</>,
        p3: <>Notre métier d&apos;<strong>organisatrice de mariage</strong> va bien au-delà de la simple planification. Nous concevons une <strong>organisation événementielle</strong> globale qui reflète votre personnalité : scénographie, logistique, gestion des imprévus et coordination de tous les intervenants le jour J.</>,
      },
    );
  } else if (cat === "moyenne") {
    intros.push(
      {
        p1: <>Vous préparez votre mariage à {city.name} ? Notre équipe de <strong>wedding planners</strong> vous accompagne dans l&apos;organisation de votre jour J en {city.department}. Smart Moments Event, c&apos;est une <strong>coordinatrice de mariage</strong> dédiée qui connaît {city.name} et ses environs sur le bout des doigts.</>,
        p2: <>{city.name}, {city.description}. Cette ville du {city.department} offre un cadre authentique et chaleureux pour votre mariage. Nous travaillons en étroite collaboration avec les prestataires locaux de {city.name} et de {nearbyLink} pour vous garantir une prestation d&apos;excellence.</>,
        p3: <>De la recherche du lieu idéal à la <strong>coordination jour J</strong>, notre <strong>organisatrice événementielle</strong> gère l&apos;intégralité de votre projet. Décoration, logistique, planning des prestataires : nous veillons à ce que chaque détail soit parfait pour votre mariage à {city.name}.</>,
      },
      {
        p1: <>Smart Moments Event propose ses services de <strong>wedding planner à {city.name}</strong> et dans tout le {city.department}. Notre <strong>coordinatrice mariage</strong> s&apos;occupe de tout pour que vous puissiez profiter sereinement de chaque instant de votre journée.</>,
        p2: <>Se marier à {city.name}, c&apos;est choisir un lieu empreint de charme en {city.region}. {city.name}, {city.description}, offre de nombreuses possibilités pour votre réception. Notre réseau de prestataires s&apos;étend jusqu&apos;à {nearbyLink} et au-delà.</>,
        p3: <>Notre rôle de <strong>coordinatrice jour J</strong> est de vous libérer de toute charge mentale. Nous assurons la liaison avec vos prestataires, vérifions chaque détail logistique et orchestrons le déroulement de la journée. C&apos;est aussi ça, l&apos;<strong>organisation événementielle</strong> sur mesure.</>,
      },
      {
        p1: <>Vous rêvez d&apos;un mariage unique à {city.name} ? En tant que <strong>wedding planner en {city.department}</strong>, nous transformons vos envies en une célébration inoubliable. Notre <strong>coordinatrice de mariage</strong> vous guide pas à pas dans chaque décision.</>,
        p2: <>{city.name}, {city.description}. Entre tradition et modernité, la ville et ses environs vers {nearbyLink} recèlent des trésors pour votre mariage : domaines viticoles, jardins secrets, demeures de charme. Nous connaissons chaque recoin du {city.department}.</>,
        p3: <>L&apos;<strong>organisation de mariage</strong> est notre passion. De la conception du thème à la <strong>coordination du jour J</strong>, en passant par la gestion du budget et la sélection des prestataires, nous assurons une <strong>organisation événementielle</strong> fluide et élégante.</>,
      },
    );
  } else {
    intros.push(
      {
        p1: <>Envie d&apos;un mariage intimiste à {city.name} ? Smart Moments Event intervient comme <strong>wedding planner en {city.department}</strong> pour organiser votre mariage dans ce cadre enchanteur. Notre <strong>coordinatrice jour J</strong> se déplace à {city.name} et dans les communes environnantes.</>,
        p2: <>{city.name}, {city.description}. Ce lieu de caractère en {city.region} offre un décor authentique pour un mariage à votre image. Nous collaborons avec les artisans et prestataires locaux de {city.name} à {nearbyLink} pour une organisation irréprochable.</>,
        p3: <>Même dans les plus petites communes, notre exigence reste la même. Notre <strong>coordinatrice mariage</strong> s&apos;assure que chaque élément soit à la hauteur : décoration soignée, prestataires de confiance et <strong>coordination jour J</strong> millimétrée. Un mariage d&apos;exception, quel que soit le lieu.</>,
      },
      {
        p1: <>{city.name}, {city.description} : un cadre idyllique pour dire oui. Notre <strong>wedding planner</strong> intervient dans le {city.department} pour organiser des mariages qui sortent de l&apos;ordinaire. Chaque lieu a son charme, et nous savons le sublimer.</>,
        p2: <>En choisissant de vous marier à {city.name} et ses alentours vers {nearbyLink}, vous optez pour l&apos;authenticité. Notre <strong>organisatrice de mariage</strong> connaît les trésors cachés du {city.department} : domaines familiaux, granges rénovées, jardins privatifs, chapelles historiques.</>,
        p3: <>Notre service de <strong>coordination mariage</strong> s&apos;adapte à toutes les configurations. Que votre réception accueille 30 ou 200 convives, nous assurons une <strong>organisation événementielle</strong> sur mesure, du premier rendez-vous jusqu&apos;au dernier accord du DJ.</>,
      },
      {
        p1: <>Pour votre mariage à {city.name}, faites confiance à une <strong>coordinatrice de mariage</strong> passionnée. Smart Moments Event organise des mariages en {city.region}, avec une attention particulière portée aux lieux intimistes et aux célébrations authentiques du {city.department}.</>,
        p2: <>{city.name}, {city.description}. Les environs de {nearbyLink} complètent cette offre avec des lieux de réception variés. Notre <strong>wedding planner</strong> sélectionne pour vous les meilleurs prestataires de la région.</>,
        p3: <>De l&apos;élaboration du concept à la <strong>coordination jour J</strong>, notre <strong>organisatrice événementielle</strong> orchestre votre mariage avec soin. Budget maîtrisé, prestataires coordonnés, décoration pensée dans les moindres détails : c&apos;est la promesse Smart Moments Event.</>,
      },
    );
  }

  const selected = intros[h % intros.length];
  return selected;
}

// Pool de FAQ variées - 12 questions, on en sélectionne 5 par ville
function generateFaq(city: { name: string; slug: string; department: string; region: string; nearbyCity: string; population: string }) {
  const cat = cityCategory(city);
  const isSmall = cat === "petite" || cat === "village";

  const allFaq = [
    {
      q: `Quel est le tarif d'un wedding planner à ${city.name} ?`,
      a: `Chez Smart Moments Event, nos formules de wedding planning à ${city.name} commencent à partir de 200 €. Le budget dépend de la prestation choisie : coordination jour J seule, accompagnement partiel ou organisation complète de votre mariage. Chaque projet étant unique, nous établissons un devis gratuit et personnalisé après une première consultation.`,
    },
    {
      q: `Pourquoi faire appel à une coordinatrice de mariage à ${city.name} ?`,
      a: `Une coordinatrice de mariage vous libère de la charge mentale liée à l'organisation. À ${city.name}, nous connaissons les lieux de réception, les prestataires fiables et les spécificités locales du ${city.department}. Notre expérience en ${city.region} nous permet de vous faire gagner du temps, d'éviter les écueils et de négocier les meilleurs tarifs pour votre mariage.`,
    },
    {
      q: `Comment se déroule la coordination jour J à ${city.name} ?`,
      a: `Notre coordinatrice jour J prend le relais environ 1 mois avant votre mariage à ${city.name}. Elle reprend votre dossier complet, contacte chaque prestataire, effectue une visite technique du lieu de réception et établit un planning minute par minute. Le jour J, elle est sur place de la préparation au départ du dernier invité pour gérer la logistique et les imprévus.`,
    },
    {
      q: `Organisez-vous des mariages à ${city.name} et ${city.nearbyCity} ?`,
      a: `Oui, Smart Moments Event intervient à ${city.name}, ${city.nearbyCity} et dans l'ensemble du ${city.department}. Basées à Lyon, nos coordinatrices se déplacent dans toute la ${city.region} et au-delà pour organiser votre mariage. ${isSmall ? "Nous adorons les mariages dans les petites communes qui offrent souvent les cadres les plus authentiques." : "Notre connaissance du terrain local est un atout majeur pour votre organisation."}`,
    },
    {
      q: `Quels types de mariage organisez-vous à ${city.name} ?`,
      a: `À ${city.name}, nous organisons tous les styles de mariage : champêtre, bohème, romantique, chic et élégant, en plein air ou en intérieur. ${cat === "metropole" || cat === "grande" ? `La diversité des lieux à ${city.name} permet d'imaginer tous les scénarios, du rooftop urbain au domaine en pleine nature.` : `Le charme du ${city.department} se prête particulièrement aux mariages authentiques et intimistes dans des lieux de caractère.`} Chaque mariage est conçu sur mesure selon vos envies.`,
    },
    {
      q: `Combien de temps à l'avance contacter un wedding planner à ${city.name} ?`,
      a: `Nous recommandons de nous contacter 12 à 18 mois avant votre mariage à ${city.name} pour une organisation complète. Pour une coordination jour J, 2 à 3 mois suffisent. Les lieux de réception les plus prisés du ${city.department} se réservent très tôt, surtout pour les mariages estivaux. Plus tôt vous nous contactez, plus nous aurons de choix pour vous.`,
    },
    {
      q: `Quels sont les plus beaux lieux de mariage près de ${city.name} ?`,
      a: `Le ${city.department} en ${city.region} regorge de lieux de réception exceptionnels autour de ${city.name} : ${cat === "village" || cat === "petite" ? "domaines familiaux, granges rénovées, jardins privatifs et demeures de charme" : "châteaux historiques, domaines viticoles, hôtels de prestige et espaces événementiels"}. Notre carnet d'adresses enrichi au fil des années nous permet de vous proposer des lieux adaptés à votre style et votre budget, y compris des pépites méconnues.`,
    },
    {
      q: `Proposez-vous la décoration de mariage à ${city.name} ?`,
      a: `Oui, notre service de wedding design comprend la conception complète de la scénographie de votre mariage à ${city.name} : arches fleuries, compositions florales, décoration de table, mise en lumière et mobilier. Nous travaillons avec les meilleurs fleuristes et décorateurs du ${city.department} pour créer une ambiance unique qui vous ressemble.`,
    },
    {
      q: `Quel budget prévoir pour un mariage à ${city.name} ?`,
      a: `Le budget d'un mariage à ${city.name} varie selon le nombre d'invités, le lieu et les prestations choisies. ${cat === "metropole" || cat === "grande" ? `En ${city.region}, comptez en moyenne 15 000 à 40 000 € pour un mariage de 100 personnes.` : `Dans le ${city.department}, un mariage de 80 à 100 personnes se situe généralement entre 12 000 et 35 000 €.`} Notre rôle d'organisatrice est aussi de vous aider à optimiser votre budget en négociant avec les prestataires.`,
    },
    {
      q: `Quelle est la différence entre coordinatrice jour J et organisation complète ?`,
      a: `La coordination jour J à ${city.name} consiste à reprendre votre organisation 1 mois avant le mariage et à gérer le déroulement le jour même. L'organisation complète, elle, démarre dès le début : recherche de lieu en ${city.department}, sélection de chaque prestataire, conception du thème, gestion du budget et bien sûr coordination intégrale. C'est un accompagnement de A à Z.`,
    },
    {
      q: `Peut-on organiser une cérémonie laïque à ${city.name} ?`,
      a: `Absolument ! La cérémonie laïque est l'une de nos spécialités. À ${city.name} et dans le ${city.department}, de nombreux lieux se prêtent merveilleusement aux cérémonies en extérieur : jardins, parcs, domaines, bords de rivière. Nous nous occupons de tout : scénographie, choix de l'officiant, rédaction des textes et coordination.`,
    },
    {
      q: `Comment choisir son wedding planner à ${city.name} ?`,
      a: `Pour choisir votre wedding planner à ${city.name}, privilégiez l'expérience en ${city.region}, la connaissance des prestataires du ${city.department}, les avis clients vérifiés et le feeling lors du premier rendez-vous. Chez Smart Moments Event, nous proposons une première consultation gratuite pour échanger sur votre projet et vous permettre de juger de notre écoute et de notre professionnalisme.`,
    },
  ];

  // Sélectionner 5 FAQ uniques par ville via le hash
  const h = hashCode(city.slug);
  const indices: number[] = [];
  let i = 0;
  while (indices.length < 5 && i < 20) {
    const idx = (h + i * 7) % allFaq.length;
    if (!indices.includes(idx)) indices.push(idx);
    i++;
  }

  return indices.map((idx) => allFaq[idx]);
}

// Phrases d'accroche H1 variées
function getH1Variant(city: { name: string; slug: string }): { pre: string; styled: string } {
  const variants = [
    { pre: "Wedding Planner", styled: `à ${city.name}` },
    { pre: "Organisatrice de Mariage", styled: `à ${city.name}` },
    { pre: "Coordinatrice Mariage", styled: `à ${city.name}` },
    { pre: "Votre Wedding Planner", styled: `à ${city.name}` },
    { pre: "Organisation Mariage", styled: `à ${city.name}` },
  ];
  return pick(variants, city.slug);
}

// Trouver les villes proches (même département en priorité, puis même région)
function getNearbyCities(city: { slug: string; department: string; region: string }): typeof cities {
  const sameDept = cities.filter((c) => c.department === city.department && c.slug !== city.slug);
  const sameRegion = cities.filter((c) => c.region === city.region && c.department !== city.department && c.slug !== city.slug);

  // Mélanger de façon déterministe
  const h = hashCode(city.slug);
  const shuffled = [...sameDept].sort((a, b) => hashCode(a.slug + city.slug) - hashCode(b.slug + city.slug));
  const shuffledRegion = [...sameRegion].sort((a, b) => hashCode(a.slug + city.slug) - hashCode(b.slug + city.slug));

  // Priorité : 8 du même département + 4 de la même région
  const result = [...shuffled.slice(0, 8), ...shuffledRegion.slice(0, 4)];
  return result.slice(0, 12);
}

export default async function CityWeddingPlannerPage({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) notFound();

  const h = hashCode(city.slug);
  const heroImage = heroImages[h % heroImages.length];
  const intro = generateIntro(city);
  const faq = generateFaq(city);
  const h1 = getH1Variant(city);
  const nearbyCities = getNearbyCities(city);
  const cat = cityCategory(city);

  // Subtitles variés
  const subtitles = [
    `Organisation de mariage sur mesure à ${city.name}, ${city.description}.`,
    `Coordinatrice jour J à ${city.name}. Votre mariage de rêve en ${city.region}.`,
    `Votre organisatrice de mariage en ${city.department}. Devis gratuit.`,
    `Organisation événementielle haut de gamme à ${city.name} et environs.`,
    `Coordinatrice mariage à ${city.name}. De la planification au jour J.`,
  ];

  // H2 de section services variés
  const serviceH2 = pick([
    `Organisation de mariage à ${city.name}`,
    `Nos prestations à ${city.name}`,
    `Services wedding planner à ${city.name}`,
    `Votre mariage à ${city.name} : nos formules`,
  ], city.slug, 1);

  // H2 de section FAQ variés
  const faqH2 = pick([
    `Questions sur l'organisation de mariage à ${city.name}`,
    `Tout savoir sur votre wedding planner à ${city.name}`,
    `FAQ : coordinatrice mariage à ${city.name}`,
    `Vos questions sur l'organisation de mariage en ${city.department}`,
  ], city.slug, 2);

  // Description services adaptée
  const serviceIntro = pick([
    `Des formules flexibles pour votre mariage à ${city.name}, adaptées à chaque budget et chaque envie.`,
    `De la coordination jour J à l'organisation complète, découvrez nos services de wedding planning en ${city.department}.`,
    `Trois formules pour organiser votre mariage à ${city.name}. Choisissez celle qui vous correspond.`,
  ], city.slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Wedding Planner ${city.name} - Smart Moments Event`,
    provider: {
      "@type": "LocalBusiness",
      name: "Smart Moments Event",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lyon",
        addressRegion: "Rhône-Alpes",
        postalCode: "69007",
        addressCountry: "FR",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        reviewCount: "25",
        bestRating: "5",
      },
    },
    serviceType: "Wedding Planning",
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    description: `Wedding planner et coordinatrice de mariage à ${city.name} (${city.department}). Organisation mariage, coordination jour J et organisation événementielle en ${city.region}.`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "200",
    },
  };

  const cityDept = departments.find((d) => d.name === city.department);
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.smartmoments.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wedding Planner",
        item: "https://www.smartmoments.fr/wedding-planner",
      },
      ...(cityDept ? [{
        "@type": "ListItem",
        position: 3,
        name: city.department,
        item: `https://www.smartmoments.fr/wedding-planner/departement/${cityDept.slug}`,
      }] : []),
      {
        "@type": "ListItem",
        position: cityDept ? 4 : 3,
        name: city.name,
        item: `https://www.smartmoments.fr/wedding-planner/${city.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  // Services descriptions variées
  const coordDesc = pick([
    `Vous avez tout organisé vous-même pour votre mariage à ${city.name} ? Notre coordinatrice jour J prend le relais pour que vous profitiez sereinement de chaque instant.`,
    `Vous avez planifié votre mariage à ${city.name} mais souhaitez une professionnelle le jour J ? Notre coordinatrice gère tous les prestataires et la logistique pour un déroulement parfait.`,
    `Votre mariage à ${city.name} est organisé mais vous voulez un jour J sans stress ? Notre coordinatrice reprend votre dossier et orchestre chaque moment avec précision.`,
  ], city.slug, 4);

  const orgaDesc = pick([
    `De la première rencontre au lendemain de votre mariage à ${city.name}, notre organisatrice de mariage prend tout en charge. Un mariage clé en main en ${city.department} pour une sérénité totale.`,
    `Confiez-nous l'intégralité de l'organisation de votre mariage à ${city.name}. Recherche de lieu en ${city.department}, sélection des prestataires, conception du thème et coordination jour J.`,
    `Notre formule d'organisation complète à ${city.name} couvre chaque aspect de votre mariage : du lieu de réception aux derniers détails de décoration, en passant par tous les prestataires du ${city.department}.`,
  ], city.slug, 5);

  const decoDesc = pick([
    `Nos wedding designers créent une scénographie sur mesure pour votre mariage à ${city.name} : arches fleuries, compositions florales, mise en lumière et décoration raffinée.`,
    `Sublimez votre lieu de réception à ${city.name} avec notre service de décoration haut de gamme. Nos décorateurs conçoivent un univers visuel unique qui raconte votre histoire.`,
    `De la conception à l'installation, notre équipe de décorateurs transforme votre lieu de mariage à ${city.name} en un écrin d'exception : fleurs, lumières, mobilier et accessoires.`,
  ], city.slug, 6);

  const coordFeatures = pick([
    ["Reprise du dossier 1 mois avant", `Visite technique du lieu à ${city.name}`, "Coordination de tous les prestataires", "Présence le jour J de 8h au départ", "Gestion du timing et des imprévus"],
    ["Prise en main du dossier complet", `Repérage du lieu de réception à ${city.name}`, "Contact et briefing des prestataires", "Planning minute par minute le jour J", "Gestion de crise et imprévus"],
    ["Rendez-vous de cadrage personnalisé", `Visite du lieu en ${city.department}`, "Liaison avec chaque prestataire", "Présence intégrale le jour J", "Coordination du démontage"],
  ], city.slug, 7);

  // CTA H2 varié
  const ctaH2 = pick([
    <>Votre mariage à {city.name}<br /><span className="text-gold-gradient italic">commence ici</span></>,
    <>Prête pour le plus<br /><span className="text-gold-gradient italic">beau jour de votre vie ?</span></>,
    <>Organisons ensemble<br /><span className="text-gold-gradient italic">votre mariage à {city.name}</span></>,
    <>Votre rêve de mariage<br /><span className="text-gold-gradient italic">prend vie à {city.name}</span></>,
  ], city.slug, 8);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Wedding Planner", href: "/wedding-planner" },
          ...((() => {
            const dept = departments.find((d) => d.name === city.department);
            return dept ? [{ label: city.department, href: `/wedding-planner/departement/${dept.slug}` }] : [];
          })()),
          { label: city.name },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${h1.pre} ${h1.styled} - Organisation de mariage en ${city.department}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/30 to-taupe/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <p className="text-gold text-[10px] uppercase tracking-[0.5em]">
              {pick(["Wedding Planner", "Organisation Mariage", "Coordinatrice Mariage", "Organisatrice Mariage"], city.slug, 9)} {city.name}
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            {h1.pre}
            <br />
            <span className="text-gold-gradient italic">{h1.styled}</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            {pick(subtitles, city.slug, 10)}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Intro */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="luxury-line-left mb-6" />
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
                {pick([
                  `Organisation de mariage à ${city.name}`,
                  `Coordinatrice mariage en ${city.department}`,
                  `Wedding planner à ${city.name}`,
                  `Organisatrice événementielle à ${city.name}`,
                ], city.slug, 11)}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-8 leading-tight">
                {pick([
                  <>Votre wedding planner<br /><span className="text-gold-gradient italic">à {city.name}</span></>,
                  <>Organisatrice de mariage<br /><span className="text-gold-gradient italic">en {city.department}</span></>,
                  <>Coordinatrice mariage<br /><span className="text-gold-gradient italic">à {city.name}</span></>,
                  <>Organisation de mariage<br /><span className="text-gold-gradient italic">à {city.name} ({city.department})</span></>,
                ], city.slug, 12)}
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                {intro.p1}
              </p>
              <p className="text-taupe-soft leading-relaxed mb-6">
                {intro.p2}
              </p>
              <p className="text-taupe-soft leading-relaxed">
                {intro.p3}
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={heroImages[(h + 2) % heroImages.length]}
                  alt={`Décoration mariage ${city.name} ${city.department}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-gold/30" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-gold/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Nos formules
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              {serviceH2}
            </h2>
            <p className="text-taupe-light leading-relaxed">
              {serviceIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Coordination Jour J",
                subtitle: pick(["Sérénité le jour J", "Votre jour J en toute sérénité", "Le jour J sans stress"], city.slug, 13),
                description: coordDesc,
                features: coordFeatures,
              },
              {
                name: "Organisation Complète",
                subtitle: pick(["Mariage clé en main", "Organisation de A à Z", "Votre mariage sur mesure"], city.slug, 14),
                popular: true,
                description: orgaDesc,
                features: [
                  `Recherche du lieu de réception en ${city.department}`,
                  "Sélection des prestataires locaux",
                  "Wedding design et décoration",
                  "Coordination intégrale du jour J",
                  "Gestion complète du budget",
                  "Suivi post-événement",
                ],
              },
              {
                name: "Décoration Haut de Gamme",
                subtitle: pick(["Wedding Design", "Scénographie sur mesure", "Design & Décoration"], city.slug, 15),
                description: decoDesc,
                features: [
                  "Conception de la scénographie",
                  "Arches fleuries spectaculaires",
                  "Décoration de table raffinée",
                  "Mise en lumière et ambiance",
                  "Mobilier et accessoires haut de gamme",
                ],
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`relative luxury-card p-10 ${
                  pkg.popular
                    ? "bg-gold/10 text-taupe border-2 border-gold"
                    : "bg-white border border-gold/10"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[9px] font-bold uppercase tracking-[0.3em] px-6 py-1.5">
                    Populaire
                  </div>
                )}
                <p className="text-[9px] uppercase tracking-[0.3em] mb-2 text-gold">
                  {pkg.subtitle}
                </p>
                <h3 className="text-xl font-heading font-bold mb-3">
                  {pkg.name}
                </h3>
                <p className="text-sm leading-relaxed mb-8 text-taupe-soft">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-gold mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 bg-gold text-white hover:bg-gold-dark"
                >
                  Demander un Devis
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Questions fréquentes
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              {faqH2}
            </h2>
          </div>
          <div className="space-y-6">
            {faq.map((f) => (
              <details
                key={f.q}
                className="group border border-gold/10 bg-white"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-heading font-semibold text-taupe text-base pr-4">
                    {f.q}
                  </h3>
                  <svg
                    className="w-5 h-5 text-gold shrink-0 group-open:rotate-45 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <div className="h-[1px] bg-gradient-to-r from-gold/20 to-transparent mb-4" />
                  <p className="text-taupe-soft text-sm leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi se marier ici - contenu unique enrichi */}
      <section className="py-24 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="luxury-line-left mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-8 leading-tight">
                {pick([
                  <>Pourquoi se marier<br /><span className="text-gold-gradient italic">à {city.name} ?</span></>,
                  <>Se marier à {city.name}<br /><span className="text-gold-gradient italic">un choix d&apos;exception</span></>,
                  <>{city.name}, un cadre<br /><span className="text-gold-gradient italic">idéal pour votre mariage</span></>,
                ], city.slug, 21)}
              </h2>
              {cat === "metropole" || cat === "grande" ? (
                <>
                  <p className="text-taupe-soft leading-relaxed mb-5">
                    Avec ses <strong>{city.population} habitants</strong>, {city.name} est l&apos;une des destinations les plus prisées pour se marier en {city.region}. La ville offre une diversité exceptionnelle de <strong>lieux de réception</strong> : hôtels particuliers, rooftops avec vue panoramique, domaines historiques et espaces événementiels contemporains.
                  </p>
                  <p className="text-taupe-soft leading-relaxed mb-5">
                    {city.name}, {city.description}, séduit les couples par son <strong>accessibilité</strong> (gare TGV, aéroport, autoroutes) et la richesse de son <strong>réseau de prestataires mariage</strong> : traiteurs gastronomiques, photographes de renom, fleuristes créatifs, DJ et musiciens de talent.
                  </p>
                  <p className="text-taupe-soft leading-relaxed">
                    En tant que wedding planner intervenant régulièrement à {city.name}, nous avons tissé des <strong>partenariats privilégiés</strong> avec les meilleurs professionnels du {city.department}. Notre connaissance du terrain vous garantit un mariage à la hauteur de vos rêves, avec des prestataires testés et approuvés.
                  </p>
                </>
              ) : cat === "moyenne" ? (
                <>
                  <p className="text-taupe-soft leading-relaxed mb-5">
                    {city.name}, {city.description}. Avec <strong>{city.population} habitants</strong>, la ville allie le charme d&apos;une taille humaine à la richesse de ses <strong>lieux de réception</strong>. Domaines viticoles, mas provençaux, châteaux de caractère ou salles de prestige : le {city.department} regorge de pépites pour votre mariage.
                  </p>
                  <p className="text-taupe-soft leading-relaxed mb-5">
                    Se marier à {city.name} et dans ses environs, c&apos;est profiter d&apos;un cadre authentique en {city.region}, loin de l&apos;agitation des grandes métropoles. Les <strong>prestataires locaux</strong> — traiteurs, photographes, fleuristes — connaissent parfaitement les lieux et apportent une touche personnelle à chaque célébration.
                  </p>
                  <p className="text-taupe-soft leading-relaxed">
                    Notre équipe de <strong>coordinatrices mariage</strong> sillonne le {city.department} depuis des années. Nous connaissons les domaines cachés, les artisans talentueux et les petites attentions qui font la différence pour votre jour J à {city.name}.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-taupe-soft leading-relaxed mb-5">
                    {city.name}, {city.description}. Ce lieu de caractère en {city.department} offre un <strong>cadre intimiste et authentique</strong> qui séduit de plus en plus de couples pour leur mariage. Loin des sentiers battus, un mariage ici a cette touche d&apos;exception que seuls les lieux préservés peuvent offrir.
                  </p>
                  <p className="text-taupe-soft leading-relaxed mb-5">
                    Les environs de {city.name} recèlent des <strong>trésors pour votre réception</strong> : granges rénovées avec poutres apparentes, jardins privatifs avec vue sur la campagne, demeures historiques pleines de cachet. Le {city.department} est une terre de caractère qui sublime les mariages champêtres et romantiques.
                  </p>
                  <p className="text-taupe-soft leading-relaxed">
                    Même dans les communes plus intimes, notre exigence de <strong>wedding planner</strong> reste identique. Nous sélectionnons des <strong>prestataires de confiance</strong> dans tout le {city.department} pour garantir une prestation irréprochable, de {city.name} à {city.nearbyCity} et au-delà.
                  </p>
                </>
              )}
              {/* Lien vers la page département */}
              {(() => {
                const dept = departments.find((d) => d.name === city.department);
                if (!dept) return null;
                return (
                  <Link
                    href={`/wedding-planner/departement/${dept.slug}`}
                    className="inline-flex items-center gap-2 mt-8 text-gold text-[11px] font-bold uppercase tracking-[0.2em] hover:text-gold-dark transition-colors"
                  >
                    Voir toutes les villes en {city.department}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                );
              })()}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: pick(["Lieux d'exception", "Domaines & Châteaux", "Lieux de réception"], city.slug, 22), desc: `${cat === "metropole" || cat === "grande" ? "Large choix" : "Sélection de pépites"} en ${city.department}` },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: pick(["Coordination jour J", "Gestion du jour J", "Pilotage jour J"], city.slug, 23), desc: "De la préparation au départ" },
                { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: pick(["Sur mesure", "100% personnalisé", "Mariage unique"], city.slug, 24), desc: "Adapté à votre style et budget" },
                { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", label: pick(["Prestataires locaux", "Réseau de confiance", "Artisans sélectionnés"], city.slug, 25), desc: `Les meilleurs du ${city.department}` },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-gold/10 p-6 text-center">
                  <svg className="w-8 h-8 text-gold mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={item.icon} />
                  </svg>
                  <h3 className="font-heading font-bold text-taupe text-sm mb-1">{item.label}</h3>
                  <p className="text-taupe-soft text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Styles de mariage dans cette ville */}
      <section className="py-20 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
              {pick([
                `Quel style de mariage à ${city.name} ?`,
                `Inspirations mariage à ${city.name}`,
                `Votre thème de mariage à ${city.name}`,
                `Styles de mariage en ${city.department}`,
              ], city.slug, 16)}
            </h2>
            <p className="text-taupe-light mt-4">
              {pick([
                `Découvrez nos inspirations pour votre mariage à ${city.name}`,
                `Chaque mariage à ${city.name} est unique : trouvez votre style`,
                `Explorez les tendances mariage pour votre célébration en ${city.department}`,
              ], city.slug, 17)}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((theme) => (
              <Link
                key={theme.slug}
                href={`/wedding-planner/${city.slug}/${theme.slug}`}
                className="group border border-gold/10 bg-white p-6 hover:border-gold transition-all duration-300"
              >
                <h3 className="text-lg font-heading font-bold text-taupe mb-2 group-hover:text-gold transition-colors">
                  {theme.name} à {city.name}
                </h3>
                <p className="text-taupe-soft text-sm leading-relaxed mb-3">
                  {theme.description}
                </p>
                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em]">
                  Découvrir
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Villes proches - 12 villes du même département + région */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
              {pick([
                `Wedding planner en ${city.department} et environs`,
                `Organisation de mariage près de ${city.name}`,
                `Nos interventions en ${city.department}`,
                `Coordinatrice mariage en ${city.department}`,
              ], city.slug, 18)}
            </h2>
            <p className="text-taupe-light mt-4">
              {pick([
                `Nous intervenons également dans ces villes du ${city.department} et de ${city.region}`,
                `Découvrez nos services de wedding planning dans les villes voisines de ${city.name}`,
                `Notre équipe se déplace dans tout le ${city.department} et la ${city.region}`,
              ], city.slug, 19)}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyCities.map((c) => (
              <Link
                key={c.slug}
                href={`/wedding-planner/${c.slug}`}
                className="border border-gold/20 bg-white px-5 py-2.5 text-[11px] text-taupe-soft uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300"
              >
                Wedding planner {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImages[(h + 3) % heroImages.length]}
            alt={`Organisation mariage ${city.name} ${city.department}`}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-[1.1]">
            {ctaH2}
          </h2>
          <p className="text-white/50 text-lg mb-12 font-light">
            {pick([
              "Première consultation gratuite et sans engagement.",
              "Rencontrons-nous pour parler de votre projet. Consultation offerte.",
              "Contactez-nous pour un premier échange gratuit sur votre mariage.",
              "Échangeons sur votre projet. Premier rendez-vous offert.",
            ], city.slug, 20)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-luxury bg-gold text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors"
            >
              Demander un Devis Gratuit
            </Link>
            <a
              href="tel:0756987181"
              className="btn-luxury border border-white/30 text-white px-12 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-white/10 transition-all"
            >
              07 56 98 71 81
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
