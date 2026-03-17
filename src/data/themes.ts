export interface WeddingTheme {
  name: string;
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  features: string[];
  faqQuestions: { q: string; a: string }[];
}

export const themes: WeddingTheme[] = [
  {
    name: "Mariage Champêtre",
    slug: "mariage-champetre",
    title: "Mariage Champêtre Lyon - Décoration & Organisation",
    description: "Un mariage au cœur de la nature, avec des matériaux bruts, des fleurs sauvages et une ambiance décontractée et chaleureuse.",
    metaDescription: "Organisation de mariage champêtre à Lyon. Wedding planner spécialisé en mariages champêtres : décoration naturelle, fleurs sauvages, lieu de réception en pleine nature. Devis gratuit.",
    heroSubtitle: "Mariage au cœur de la nature",
    intro: "Le mariage champêtre séduit par son authenticité et sa simplicité élégante. Chez Smart Moments Event, nous créons des mariages champêtres qui allient la beauté brute de la nature au raffinement d'une décoration soignée. Granges rénovées, jardins bucoliques, domaines viticoles du Beaujolais : Lyon et sa région regorgent de lieux parfaits pour un mariage champêtre inoubliable.",
    features: [
      "Décoration naturelle avec matériaux bruts (bois, toile de jute, lin)",
      "Compositions florales sauvages et bouquets champêtres",
      "Mobilier rustique chic et guirlandes lumineuses",
      "Cérémonie laïque en plein air sous les arbres",
      "Plan de table sur palette ou porte ancienne",
      "Menu terroir avec produits locaux et de saison",
    ],
    faqQuestions: [
      { q: "Quel lieu pour un mariage champêtre à Lyon ?", a: "Lyon et sa région offrent de nombreux lieux idéaux pour un mariage champêtre : domaines viticoles du Beaujolais, granges rénovées dans le Pilat, fermes du Bugey, jardins en bord de Saône. Notre équipe vous accompagne dans la recherche du lieu parfait." },
      { q: "Quel budget pour un mariage champêtre ?", a: "Un mariage champêtre à Lyon peut s'organiser avec des budgets très variés, à partir de 200€ pour notre prestation. Le style champêtre permet souvent d'optimiser le budget décoration grâce aux matériaux naturels et au DIY encadré par nos décorateurs." },
      { q: "Peut-on organiser un mariage champêtre en hiver ?", a: "Absolument ! Un mariage champêtre hivernal a un charme incomparable : couvertures en laine, bougies, branches de sapin, vin chaud d'accueil. Nous adaptons le concept champêtre à toutes les saisons." },
    ],
  },
  {
    name: "Mariage Bohème",
    slug: "mariage-boheme",
    title: "Mariage Bohème Lyon - Organisation & Décoration Boho",
    description: "Un mariage libre et poétique, mêlant macramé, pampa, couleurs terracotta et une ambiance douce et romantique.",
    metaDescription: "Organisation de mariage bohème à Lyon. Wedding planner expert en mariages boho chic : macramé, pampa, terracotta, cérémonie laïque. Décoration bohème haut de gamme. Devis gratuit.",
    heroSubtitle: "Mariage libre et poétique",
    intro: "Le mariage bohème incarne la liberté, la poésie et l'authenticité. Chez Smart Moments Event, nous créons des univers boho chic où se mêlent herbes de pampa, macramé, touches de terracotta et matières naturelles. Un style intemporel qui se prête magnifiquement aux cérémonies laïques en plein air et aux réceptions dans des lieux atypiques de Lyon et sa région.",
    features: [
      "Décoration en herbes de pampa et macramé artisanal",
      "Palette de couleurs terracotta, ocre, sauge et crème",
      "Arche de cérémonie bohème avec tissus fluides",
      "Tapis berbères et coussins au sol pour le cocktail",
      "Attrape-rêves et éléments en bois flotté",
      "Éclairage tamisé avec bougies et lanternes",
    ],
    faqQuestions: [
      { q: "Quelle est la différence entre mariage bohème et champêtre ?", a: "Le mariage bohème mise sur l'aspect artistique et poétique (macramé, pampa, tissus fluides, couleurs terracotta) tandis que le champêtre est plus ancré dans la nature brute (bois, fleurs sauvages, toile de jute). Les deux styles se combinent très bien pour un résultat unique." },
      { q: "Quelles fleurs pour un mariage bohème ?", a: "Les herbes de pampa sont emblématiques du style boho, accompagnées de roses David Austin, protéas, eucalyptus, graminées séchées et fleurs séchées. Nous créons des compositions aériennes et naturelles qui incarnent l'esprit bohème." },
      { q: "Peut-on faire un mariage bohème haut de gamme ?", a: "Absolument ! Le bohème chic associe l'esprit libre du boho à des matériaux nobles et une exécution raffinée. Macramé artisanal, vaisselle en grès, mobilier vintage sélectionné, compositions florales spectaculaires : nous élevons le bohème au rang du luxe." },
    ],
  },
  {
    name: "Mariage Romantique",
    slug: "mariage-romantique",
    title: "Mariage Romantique Lyon - Organisation & Décoration",
    description: "Un mariage tout en douceur et en élégance, avec des roses, des bougies, des voilages et une ambiance féérique.",
    metaDescription: "Organisation de mariage romantique à Lyon. Wedding planner pour mariages élégants et raffinés : roses, bougies, voilages, lieu de charme. Décoration romantique sur mesure. Devis gratuit.",
    heroSubtitle: "L'élégance du romantisme",
    intro: "Le mariage romantique est l'essence même du rêve amoureux. Des roses par milliers, des bougies à perte de vue, des voilages qui dansent dans la brise : chez Smart Moments Event, nous créons des ambiances féeriques qui font battre les cœurs. Les châteaux et domaines de la région lyonnaise offrent un écrin parfait pour ces célébrations empreintes de douceur et d'élégance.",
    features: [
      "Compositions florales de roses et pivoines par milliers",
      "Mises en lumière féeriques avec bougies et chandeliers",
      "Voilages et drapés élégants en soie et organza",
      "Palette de couleurs pastel : rose poudré, ivoire, doré",
      "Cérémonie dans un château ou un jardin à la française",
      "Touches de cristal et de perles dans la décoration",
    ],
    faqQuestions: [
      { q: "Quel lieu pour un mariage romantique à Lyon ?", a: "Les châteaux du Beaujolais et de la Dombes, les salons avec vue sur le Rhône, les jardins historiques sont idéaux pour un mariage romantique. Nous connaissons les plus beaux lieux de réception de la région lyonnaise." },
      { q: "Quelles couleurs pour un mariage romantique ?", a: "Les couleurs du mariage romantique sont douces et délicates : rose poudré, ivoire, champagne, vieux rose, pêche. Le doré apporte une touche de prestige. Nous créons des palettes harmonieuses qui subliment chaque détail." },
      { q: "Comment rendre un mariage romantique sans être kitsch ?", a: "La clé est dans la subtilité et la qualité. Nous privilégions des matériaux nobles, des compositions florales raffinées plutôt qu'excessives, et un éclairage soigné. L'élégance réside dans les détails, pas dans l'excès." },
    ],
  },
  {
    name: "Mariage Chic & Élégant",
    slug: "mariage-chic",
    title: "Mariage Chic & Élégant Lyon - Organisation Haut de Gamme",
    description: "Un mariage sophistiqué et raffiné, avec des finitions impeccables, des matériaux nobles et une esthétique luxueuse.",
    metaDescription: "Organisation de mariage chic et élégant à Lyon. Wedding planner haut de gamme : décoration luxueuse, lieu de prestige, finitions impeccables. Mariage de prestige clé en main. Devis gratuit.",
    heroSubtitle: "Le prestige à la française",
    intro: "Le mariage chic et élégant incarne le raffinement absolu. Chez Smart Moments Event, nous orchestrons des célébrations d'exception où chaque détail est pensé pour impressionner. Lieux de prestige, décoration luxueuse, service irréprochable : nous créons des mariages dignes des plus belles revues, dans les plus beaux domaines de Lyon et de France.",
    features: [
      "Lieux de prestige : châteaux, palaces, domaines d'exception",
      "Décoration luxueuse avec fleurs premium et mobilier haut de gamme",
      "Service traiteur gastronomique étoilé",
      "Papeterie sur mesure avec calligraphie et dorure à chaud",
      "Coordination millimétrée du déroulé",
      "Mise en lumière architecturale professionnelle",
    ],
    faqQuestions: [
      { q: "Combien coûte un mariage haut de gamme à Lyon ?", a: "Un mariage haut de gamme à Lyon représente généralement un budget de 30 000€ à 100 000€ et plus, selon le nombre d'invités et les prestations souhaitées. Notre rôle est de maximiser chaque euro investi pour un résultat spectaculaire." },
      { q: "Quels prestataires pour un mariage de prestige ?", a: "Nous travaillons avec les meilleurs prestataires de la région : traiteurs gastronomiques, photographes de renom, fleuristes d'art, musiciens professionnels. Notre réseau a été constitué sur des années d'exigence et de collaboration." },
      { q: "Peut-on organiser un mariage chic avec un budget maîtrisé ?", a: "Oui ! L'élégance n'est pas une question de budget mais de choix. Nous savons créer des ambiances sophistiquées en jouant sur la lumière, les lignes épurées et quelques pièces maîtresses. L'élégance est dans la simplicité raffinée." },
    ],
  },
  {
    name: "Mariage en Plein Air",
    slug: "mariage-plein-air",
    title: "Mariage en Plein Air Lyon - Cérémonie & Réception Extérieure",
    description: "Un mariage sous le ciel, dans un jardin, un vignoble ou un domaine, avec la nature comme décor.",
    metaDescription: "Organisation de mariage en plein air à Lyon. Wedding planner pour cérémonies et réceptions extérieures : jardin, vignoble, domaine. Plan B pluie inclus. Devis gratuit.",
    heroSubtitle: "La nature comme écrin",
    intro: "Le mariage en plein air offre une toile de fond incomparable. Sous le ciel de Lyon et de la région Rhône-Alpes, célébrez votre union dans un jardin enchanteur, un vignoble du Beaujolais ou un domaine au bord de la Saône. Chez Smart Moments Event, nous maîtrisons l'art de l'événement en extérieur : logistique, plan B météo, confort des invités, tout est anticipé.",
    features: [
      "Repérage et sélection du lieu en extérieur idéal",
      "Cérémonie laïque en plein air avec arche florale",
      "Plan B pluie systématique (tentes, barnums, repli intérieur)",
      "Gestion de la logistique extérieure (sonorisation, éclairage, sanitaires)",
      "Aménagement des espaces cocktail et repas en extérieur",
      "Coordination avec les prestataires spécialisés plein air",
    ],
    faqQuestions: [
      { q: "Comment gérer la météo pour un mariage en plein air ?", a: "Nous prévoyons systématiquement un plan B : tentes de réception élégantes, barnums cristal, ou repli dans une salle à proximité. Nous surveillons la météo en amont et décidons avec vous de l'option la plus adaptée." },
      { q: "Quelle est la meilleure saison pour un mariage en plein air à Lyon ?", a: "De mai à octobre, Lyon bénéficie d'un climat idéal pour les mariages en extérieur. Juin et septembre sont particulièrement appréciés pour leurs températures douces et leur luminosité exceptionnelle." },
      { q: "Faut-il un permis pour un mariage en plein air ?", a: "Cela dépend du lieu. Sur un domaine privé, généralement non. Pour un lieu public ou un espace particulier, des autorisations peuvent être nécessaires. Nous gérons toutes les démarches administratives pour vous." },
    ],
  },
];

export function getThemeBySlug(slug: string): WeddingTheme | undefined {
  return themes.find((t) => t.slug === slug);
}
