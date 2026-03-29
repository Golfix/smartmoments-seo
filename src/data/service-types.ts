export interface ServiceType {
  name: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  features: string[];
  faqQuestions: { q: string; a: string }[];
  keywords: string[];
}

export const serviceTypes: ServiceType[] = [
  {
    name: "Organisation de mariage",
    slug: "organisation-mariage",
    title: "Organisation de Mariage à {city} - Wedding Planner",
    metaTitle: "Organisation de Mariage à {city} | Wedding Planner Smart Moments Event",
    metaDescription: "Wedding planner à {city} ({department}) pour l'organisation complète de votre mariage. Smart Moments Event vous accompagne de A à Z : lieu, traiteur, décoration, coordination. Devis gratuit.",
    intro: "Vous recherchez un wedding planner à {city} pour organiser le mariage de vos rêves ? Smart Moments Event, agence d'organisation de mariages basée à Lyon, intervient à {city} et dans tout le département {department} en région {region}. De la recherche du lieu de réception à la coordination le jour J, nous prenons en charge chaque détail pour que vous puissiez profiter pleinement de ce moment unique. Notre expertise et notre réseau de prestataires de qualité à {city} garantissent un mariage à votre image, dans le respect de votre budget.",
    features: [
      "Recherche et sélection du lieu de réception idéal à {city} et ses environs",
      "Gestion complète du budget et négociation avec les prestataires",
      "Sélection et coordination de tous les prestataires (traiteur, photographe, DJ, fleuriste)",
      "Création d'un rétroplanning détaillé et suivi personnalisé",
      "Conception de la décoration et de l'identité visuelle du mariage",
      "Coordination complète le jour J pour un déroulement sans accroc",
    ],
    faqQuestions: [
      {
        q: "Combien coûte un wedding planner à {city} ?",
        a: "Le tarif d'un wedding planner à {city} varie selon l'étendue des prestations souhaitées. Chez Smart Moments Event, nos formules d'organisation complète démarrent à partir de 1 500€. Nous établissons un devis personnalisé après un premier échange gratuit pour comprendre votre projet et vos attentes.",
      },
      {
        q: "Quand faut-il contacter un wedding planner à {city} ?",
        a: "Nous recommandons de nous contacter entre 12 et 18 mois avant la date souhaitée, surtout pour les mariages en haute saison (mai à septembre) à {city}. Cependant, nous sommes également en mesure d'organiser des mariages dans des délais plus courts grâce à notre réseau de prestataires réactifs.",
      },
      {
        q: "Intervenez-vous dans toute la région autour de {city} ?",
        a: "Oui, Smart Moments Event intervient à {city} et dans toutes les communes environnantes. Nous connaissons parfaitement les lieux de réception, domaines, châteaux et salles de la région, ce qui nous permet de vous proposer les meilleures options pour votre mariage.",
      },
    ],
    keywords: [
      "wedding planner {city}",
      "organisation mariage {city}",
      "organisateur mariage {city}",
      "wedding planner pas cher {city}",
      "agence organisation mariage {city}",
    ],
  },
  {
    name: "Coordination jour J",
    slug: "coordinatrice-jour-j",
    title: "Coordinatrice Jour J à {city} - Smart Moments Event",
    metaTitle: "Coordinatrice Jour J à {city} | Coordination Mariage Smart Moments Event",
    metaDescription: "Coordinatrice jour J à {city} ({department}). Smart Moments Event assure la coordination de votre mariage le jour J : gestion des prestataires, timing, imprévus. Profitez sereinement de votre mariage.",
    intro: "Vous avez organisé votre mariage vous-même à {city} mais souhaitez profiter pleinement du jour J sans stress ? Smart Moments Event propose un service de coordination jour J à {city} et dans le {department} en {region}. Notre coordinatrice prend le relais quelques semaines avant votre mariage pour s'assurer que chaque détail est en place, puis gère l'intégralité du déroulement le jour de la célébration. Vous et vos proches pouvez enfin vivre ce moment sans contrainte logistique.",
    features: [
      "Rendez-vous de prise en main 4 à 6 semaines avant le mariage",
      "Vérification et confirmation de tous les prestataires réservés",
      "Élaboration d'un rétroplanning minute par minute du jour J",
      "Présence de la coordinatrice du début des préparatifs jusqu'à la fin de soirée",
      "Gestion des imprévus et résolution de problèmes en temps réel",
      "Point de contact unique pour tous les prestataires le jour J",
    ],
    faqQuestions: [
      {
        q: "Quelle est la différence entre un wedding planner et une coordinatrice jour J à {city} ?",
        a: "Le wedding planner intervient dès le début de l'organisation (recherche de lieu, sélection des prestataires, budget) tandis que la coordinatrice jour J prend le relais sur un mariage déjà organisé, quelques semaines avant l'événement. C'est la solution idéale si vous avez tout planifié mais souhaitez déléguer la logistique le jour J à {city}.",
      },
      {
        q: "Combien de temps avant le mariage faut-il réserver la coordination jour J à {city} ?",
        a: "Nous recommandons de réserver votre coordinatrice jour J à {city} au moins 2 à 3 mois avant la date du mariage. Cela nous laisse le temps de bien comprendre votre événement, de rencontrer vos prestataires et de préparer un plan de coordination sur mesure.",
      },
      {
        q: "Que se passe-t-il en cas d'imprévu le jour du mariage à {city} ?",
        a: "C'est justement notre spécialité ! Notre coordinatrice est formée pour gérer tous types d'imprévus : retard de prestataire, aléa météo, problème technique. Nous avons un plan B pour chaque situation et un réseau de prestataires de secours à {city} et dans la région.",
      },
    ],
    keywords: [
      "coordinatrice jour J {city}",
      "coordination mariage {city}",
      "coordinatrice mariage {city}",
      "coordination jour J mariage {city}",
      "wedding coordinator {city}",
    ],
  },
  {
    name: "Décoration mariage haut de gamme",
    slug: "decoration-mariage",
    title: "Décoration de Mariage à {city} - Décor Haut de Gamme",
    metaTitle: "Décoration Mariage {city} | Décoratrice Haut de Gamme Smart Moments Event",
    metaDescription: "Décoration de mariage haut de gamme à {city} ({department}). Smart Moments Event conçoit des scénographies uniques : fleurs, mobilier, mise en lumière. Décoration mariage sur mesure. Devis gratuit.",
    intro: "La décoration est l'âme de votre mariage. À {city}, Smart Moments Event imagine et réalise des scénographies sur mesure qui transforment n'importe quel lieu en un écrin féérique. De la conception du thème à l'installation complète dans les salles et domaines du {department} en {region}, notre équipe de décorateurs crée des ambiances uniques qui reflètent votre personnalité. Compositions florales spectaculaires, mobilier d'exception, mise en lumière architecturale : chaque élément est pensé pour sublimer votre célébration à {city}.",
    features: [
      "Conception d'un moodboard et d'une direction artistique personnalisée",
      "Compositions florales sur mesure (centres de table, arche, bouquets)",
      "Location et installation de mobilier haut de gamme et accessoires déco",
      "Mise en lumière architecturale et éclairage d'ambiance",
      "Scénographie complète de la cérémonie, du cocktail et de la salle de réception",
      "Installation et désinstallation complète de la décoration",
    ],
    faqQuestions: [
      {
        q: "Quel budget prévoir pour la décoration de mariage à {city} ?",
        a: "Le budget décoration d'un mariage à {city} varie selon l'ampleur du projet : comptez à partir de 800€ pour une décoration soignée et jusqu'à plusieurs milliers d'euros pour une scénographie complète haut de gamme. Nous nous adaptons à votre budget pour créer le plus bel effet possible.",
      },
      {
        q: "Proposez-vous la location de matériel de décoration à {city} ?",
        a: "Oui, Smart Moments Event dispose d'un stock de mobilier et d'accessoires de décoration (vases, chandeliers, arches, nappes, chemins de table) disponibles à la location pour les mariages à {city}. Cela permet d'accéder à des pièces de qualité à moindre coût.",
      },
      {
        q: "Pouvez-vous décorer n'importe quel lieu de réception à {city} ?",
        a: "Absolument. Que ce soit un château, une salle des fêtes, un domaine viticole, un restaurant ou un lieu atypique à {city}, nous adaptons notre décoration à chaque espace. Nous effectuons une visite technique préalable pour optimiser chaque recoin du lieu.",
      },
    ],
    keywords: [
      "décoration mariage {city}",
      "décoratrice mariage {city}",
      "décoration mariage haut de gamme {city}",
      "décor mariage {city}",
      "scénographie mariage {city}",
    ],
  },
  {
    name: "Photobooth & animation mariage",
    slug: "photobooth-mariage",
    title: "Photobooth Mariage à {city} - Animation & Souvenirs",
    metaTitle: "Photobooth Mariage {city} | Animation Photo Smart Moments Event",
    metaDescription: "Location de photobooth pour mariage à {city} ({department}). Smart Moments Event propose des photobooths modernes avec accessoires, impressions instantanées et animations interactives. Devis gratuit.",
    intro: "Ajoutez une touche fun et mémorable à votre mariage à {city} avec le photobooth Smart Moments Event ! Notre borne photo professionnelle, disponible dans tout le {department} en {region}, offre des impressions haute qualité instantanées, un large choix d'accessoires et des animations interactives qui ravissent les invités de tous âges. Plus qu'un simple divertissement, notre photobooth crée des souvenirs uniques que vos invités garderont précieusement. Idéal pour animer le cocktail ou la soirée de votre mariage à {city}.",
    features: [
      "Borne photo professionnelle avec écran tactile et appareil haute résolution",
      "Impressions instantanées illimitées avec personnalisation (cadre, logo, date)",
      "Large sélection d'accessoires et props thématiques",
      "Galerie en ligne privée avec toutes les photos en haute définition",
      "Livre d'or photo : impressions collées avec messages des invités",
      "Installation, animation et désinstallation par notre équipe",
    ],
    faqQuestions: [
      {
        q: "Combien coûte la location d'un photobooth pour un mariage à {city} ?",
        a: "La location de notre photobooth pour un mariage à {city} démarre à partir de 350€ pour 3 heures d'animation, impressions illimitées incluses. Nous proposons plusieurs formules adaptées à la durée de votre événement et aux options souhaitées (livre d'or, galerie en ligne, vidéo).",
      },
      {
        q: "Le photobooth peut-il fonctionner en extérieur à {city} ?",
        a: "Oui, notre photobooth est conçu pour fonctionner aussi bien en intérieur qu'en extérieur (sous abri). Pour les mariages en plein air à {city}, nous prévoyons une installation protégée avec un éclairage adapté pour des photos parfaites en toute circonstance.",
      },
      {
        q: "Quelles animations proposez-vous en plus du photobooth à {city} ?",
        a: "En complément du photobooth classique, nous proposons des animations photo créatives : GIF animés, boomerangs vidéo, filtres personnalisés, et même un mode vidéo slow motion. De quoi surprendre et amuser vos invités tout au long de la soirée à {city} !",
      },
    ],
    keywords: [
      "photobooth mariage {city}",
      "location photobooth {city}",
      "borne photo mariage {city}",
      "animation photo mariage {city}",
      "photomaton mariage {city}",
    ],
  },
  {
    name: "Organisation de baptême",
    slug: "organisation-bapteme",
    title: "Organisation de Baptême à {city} - Smart Moments Event",
    metaTitle: "Organisation Baptême {city} | Décoration & Événement Smart Moments Event",
    metaDescription: "Organisation de baptême à {city} ({department}). Smart Moments Event organise votre baptême clé en main : lieu, décoration, traiteur, animation. Baptême religieux ou républicain. Devis gratuit.",
    intro: "Le baptême de votre enfant mérite une célébration à la hauteur de ce moment de joie. À {city}, Smart Moments Event organise des baptêmes sur mesure, qu'ils soient religieux ou républicains. De la recherche du lieu idéal dans le {department} en {region} à la décoration, en passant par le traiteur et les animations, nous créons un événement harmonieux et élégant. Confiez-nous l'organisation de ce jour si spécial à {city} et concentrez-vous sur l'essentiel : partager ce bonheur avec vos proches.",
    features: [
      "Recherche de salle ou lieu de réception adapté au baptême à {city}",
      "Décoration thématique personnalisée (couleurs, thème au choix)",
      "Coordination avec le traiteur pour le repas ou le cocktail",
      "Organisation des animations pour enfants et adultes",
      "Création de la papeterie assortie (faire-part, menu, dragées)",
      "Coordination complète le jour du baptême",
    ],
    faqQuestions: [
      {
        q: "Quel budget pour organiser un baptême à {city} ?",
        a: "Le budget d'un baptême à {city} dépend du nombre d'invités et des prestations choisies. Pour un baptême de 30 à 50 personnes avec décoration, traiteur et animations, comptez à partir de 1 000€ tout compris. Nous proposons des formules adaptées à chaque budget.",
      },
      {
        q: "Organisez-vous des baptêmes républicains à {city} ?",
        a: "Oui, nous organisons aussi bien des baptêmes religieux que des baptêmes républicains (ou civils) à {city}. Pour un baptême républicain, nous pouvons organiser une cérémonie laïque touchante suivie d'une réception festive dans le lieu de votre choix.",
      },
      {
        q: "Quel lieu choisir pour un baptême à {city} ?",
        a: "À {city} et ses environs, de nombreuses options s'offrent à vous : restaurants avec salle privatisable, domaines, salles de réception, jardins. Nous vous aidons à trouver le lieu parfait en fonction du nombre d'invités, du style souhaité et de votre budget.",
      },
    ],
    keywords: [
      "organisation baptême {city}",
      "décoration baptême {city}",
      "organisateur baptême {city}",
      "baptême clé en main {city}",
      "salle baptême {city}",
    ],
  },
  {
    name: "Organisation d'anniversaire",
    slug: "organisation-anniversaire",
    title: "Organisation d'Anniversaire à {city} - Fêtes Sur Mesure",
    metaTitle: "Organisation Anniversaire {city} | Fête & Événement Smart Moments Event",
    metaDescription: "Organisation de fête d'anniversaire à {city} ({department}). Smart Moments Event crée des anniversaires mémorables : décoration thématique, traiteur, animations, lieu. Enfants et adultes. Devis gratuit.",
    intro: "Un anniversaire marquant mérite une organisation à la hauteur. Que ce soit pour les 1 an de votre enfant, un anniversaire surprise ou une grande fête pour vos 30, 40 ou 50 ans à {city}, Smart Moments Event conçoit des célébrations personnalisées et mémorables. Nous intervenons dans tout le {department} en {region} pour transformer votre vision en réalité. Décoration thématique, lieu d'exception, traiteur, animations : chaque élément est orchestré avec soin pour que cette journée à {city} reste gravée dans les mémoires.",
    features: [
      "Conception d'un thème et d'une ambiance sur mesure",
      "Recherche de lieu adapté : salle, restaurant, espace atypique à {city}",
      "Décoration complète selon le thème choisi (ballons, fleurs, signalétique)",
      "Organisation du traiteur, du gâteau et du bar",
      "Coordination des animations et divertissements (DJ, photobooth, spectacle)",
      "Gestion des invitations et suivi des confirmations",
    ],
    faqQuestions: [
      {
        q: "Comment organiser un anniversaire surprise à {city} ?",
        a: "Smart Moments Event est expert en anniversaires surprises à {city}. Nous gérons la totalité de l'organisation en toute discrétion : réservation du lieu, invitations secrètes, coordination des invités, mise en place de la décoration avant l'arrivée de la personne. Nous avons un protocole éprouvé pour que la surprise soit parfaite.",
      },
      {
        q: "Quel budget prévoir pour une fête d'anniversaire à {city} ?",
        a: "Le budget dépend de l'ampleur de la fête souhaitée. Pour un anniversaire de 20 à 40 personnes à {city} avec décoration, traiteur et animation, comptez à partir de 800€. Nous nous adaptons à tous les budgets et proposons des solutions créatives pour maximiser l'effet.",
      },
      {
        q: "Organisez-vous des anniversaires pour enfants à {city} ?",
        a: "Oui ! Nous créons des anniversaires magiques pour les enfants à {city} : thèmes féeriques (princesse, super-héros, pirates), animations adaptées, goûter gourmand, chasse au trésor. Nous nous occupons de tout pour que parents et enfants profitent pleinement de la fête.",
      },
    ],
    keywords: [
      "organisation anniversaire {city}",
      "fête anniversaire {city}",
      "organisateur anniversaire {city}",
      "anniversaire surprise {city}",
      "salle anniversaire {city}",
    ],
  },
  {
    name: "Séminaire d'entreprise",
    slug: "seminaire-entreprise",
    title: "Séminaire d'Entreprise à {city} - Organisation Professionnelle",
    metaTitle: "Séminaire Entreprise {city} | Organisation Événement Pro Smart Moments Event",
    metaDescription: "Organisation de séminaire d'entreprise à {city} ({department}). Smart Moments Event organise vos événements professionnels : séminaire, team building, soirée d'entreprise, convention. Devis gratuit.",
    intro: "Smart Moments Event accompagne les entreprises de {city} et du {department} en {region} dans l'organisation de leurs séminaires et événements professionnels. Que vous souhaitiez renforcer la cohésion de vos équipes, célébrer un succès ou réunir vos collaborateurs pour un moment stratégique, nous concevons des séminaires sur mesure qui combinent efficacité professionnelle et moments de convivialité. Notre connaissance des lieux et prestataires événementiels à {city} nous permet de vous proposer des formats originaux et impactants.",
    features: [
      "Recherche de lieu adapté au format du séminaire (hôtel, domaine, espace de coworking)",
      "Organisation logistique complète : transport, hébergement, restauration",
      "Conception du programme : plénières, ateliers, team building",
      "Mise en place technique : sonorisation, vidéoprojection, scénographie",
      "Animation de team building sur mesure (activités ludiques, créatives, sportives)",
      "Gestion de la soirée de gala ou du dîner d'entreprise",
    ],
    faqQuestions: [
      {
        q: "Quel lieu choisir pour un séminaire d'entreprise à {city} ?",
        a: "À {city}, nous avons accès à une large sélection de lieux pour séminaires : hôtels avec salles de réunion, domaines au vert pour les séminaires résidentiels, espaces atypiques pour stimuler la créativité, restaurants gastronomiques pour les dîners. Nous sélectionnons le lieu en fonction de vos objectifs, du nombre de participants et de votre budget.",
      },
      {
        q: "Combien de temps faut-il pour organiser un séminaire à {city} ?",
        a: "Nous recommandons un délai de 2 à 3 mois pour l'organisation d'un séminaire à {city}, afin de garantir la disponibilité des meilleurs lieux et prestataires. Cependant, nous sommes capables de monter un événement en quelques semaines pour les demandes urgentes.",
      },
      {
        q: "Proposez-vous des activités de team building à {city} ?",
        a: "Oui, nous proposons un large catalogue d'activités team building à {city} et ses environs : escape game, olympiades, ateliers culinaires, rallye urbain, activités en pleine nature, défis créatifs. Chaque activité est choisie pour renforcer la cohésion d'équipe tout en passant un excellent moment.",
      },
    ],
    keywords: [
      "séminaire entreprise {city}",
      "organisation séminaire {city}",
      "team building {city}",
      "événement entreprise {city}",
      "soirée entreprise {city}",
    ],
  },
  {
    name: "Organisation de bar-mitzvah",
    slug: "organisation-bar-mitzvah",
    title: "Organisation de Bar-Mitzvah à {city} - Smart Moments Event",
    metaTitle: "Organisation Bar-Mitzvah {city} | Événement Sur Mesure Smart Moments Event",
    metaDescription: "Organisation de bar-mitzvah et bat-mitzvah à {city} ({department}). Smart Moments Event crée des célébrations inoubliables : décoration, traiteur casher, animation, salle. Devis gratuit.",
    intro: "La bar-mitzvah ou bat-mitzvah est une étape majeure dans la vie de votre enfant et de votre famille. À {city}, Smart Moments Event met son expertise événementielle au service de cette célébration unique. Nous organisons des bar-mitzvah élégantes et festives dans le {department} en {region}, en respectant les traditions tout en apportant une touche moderne et personnalisée. De la recherche de la salle idéale à {city} à la gestion du traiteur casher, en passant par la décoration et les animations, nous créons un événement à la hauteur de ce passage important.",
    features: [
      "Recherche de salle de réception adaptée aux grandes tablées à {city}",
      "Coordination avec le traiteur casher ou selon vos exigences alimentaires",
      "Décoration personnalisée aux couleurs et au thème choisis par l'enfant",
      "Organisation des animations et du divertissement (DJ, photobooth, danse)",
      "Gestion de la logistique (montage vidéo souvenir, livre d'or, cadeaux invités)",
      "Coordination complète de la journée : cérémonie religieuse et réception",
    ],
    faqQuestions: [
      {
        q: "Quel budget pour une bar-mitzvah à {city} ?",
        a: "Le budget d'une bar-mitzvah à {city} varie considérablement selon le nombre d'invités et le niveau de prestation souhaité. Pour une fête de 80 à 120 personnes avec salle, traiteur, décoration et animation, comptez à partir de 3 000€. Nous travaillons avec vous pour optimiser votre budget et créer une célébration mémorable.",
      },
      {
        q: "Travaillez-vous avec des traiteurs casher à {city} ?",
        a: "Oui, nous collaborons avec des traiteurs casher de confiance à {city} et dans la région. Que vous recherchiez un traiteur strictement casher ou simplement une cuisine respectant certaines règles alimentaires, nous trouvons le prestataire qui correspond à vos exigences.",
      },
      {
        q: "Pouvez-vous organiser une bar-mitzvah et une bat-mitzvah à {city} ?",
        a: "Bien sûr ! Nous organisons aussi bien des bar-mitzvah que des bat-mitzvah à {city}. Chaque célébration est unique et nous adaptons l'organisation, la décoration et les animations en fonction des souhaits de l'enfant et de la famille. Nous pouvons aussi organiser des cérémonies doubles.",
      },
    ],
    keywords: [
      "bar-mitzvah {city}",
      "organisation bar-mitzvah {city}",
      "bat-mitzvah {city}",
      "salle bar-mitzvah {city}",
      "traiteur casher {city}",
    ],
  },
];

export function getServiceTypeBySlug(slug: string): ServiceType | undefined {
  return serviceTypes.find((s) => s.slug === slug);
}
