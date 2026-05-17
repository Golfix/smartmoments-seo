export interface Destination {
  name: string;
  slug: string;
  country: string;
  region: string;
  description: string;
  whyChoose: string[];
  topPlaces: string[];
  bestSeason: string;
  budgetRange: string;
  travelTime: string;
  imageUrl: string;
  faqQuestions: { q: string; a: string }[];
}

export const destinations: Destination[] = [
  {
    name: "Suisse",
    slug: "suisse",
    country: "Suisse",
    region: "Suisse romande & Alpes suisses",
    description: "Un mariage en Suisse, c'est l'élégance discrète des Alpes, des lacs cristallins et des stations de luxe comme Verbier, Gstaad ou Zermatt. À deux pas de Lyon, la Suisse offre un cadre exceptionnel pour des mariages haut de gamme.",
    whyChoose: [
      "Cadre alpin spectaculaire avec lacs et montagnes",
      "Stations de luxe : Verbier, Gstaad, Zermatt, Crans-Montana",
      "Accessibilité depuis Lyon (1h30 en voiture jusqu'à Genève)",
      "Service haut de gamme à la suisse",
      "Vignobles en terrasses du Lavaux classés UNESCO",
      "Châteaux historiques (Chillon, Aigle, Gruyères)",
    ],
    topPlaces: ["Genève", "Lausanne", "Montreux", "Zermatt", "Verbier", "Gstaad", "Gruyères", "Crans-Montana"],
    bestSeason: "Mai à septembre pour les célébrations en extérieur, décembre à mars pour les mariages d'hiver en montagne",
    budgetRange: "À partir de 40 000€ pour un mariage de 80 invités",
    travelTime: "1h30 depuis Lyon jusqu'à Genève",
    imageUrl: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg",
    faqQuestions: [
      {
        q: "Combien coûte un mariage en Suisse ?",
        a: "Un mariage haut de gamme en Suisse représente généralement un budget entre 40 000€ et 150 000€ pour 80 à 150 invités, selon le lieu choisi (Genève, station alpine, château). Smart Moments Event vous aide à optimiser chaque poste de dépense pour un résultat exceptionnel.",
      },
      {
        q: "Quelle saison choisir pour un mariage en Suisse ?",
        a: "L'été (juin-septembre) est idéal pour les mariages en plein air autour des lacs ou en montagne. L'hiver (décembre-février) offre une ambiance magique dans les stations alpines avec des cérémonies sous la neige.",
      },
      {
        q: "Faut-il un permis pour se marier en Suisse en tant que Français ?",
        a: "Les couples français peuvent se marier civilement en Suisse, mais les démarches administratives sont complexes. La plupart organisent une cérémonie symbolique ou laïque sur place après un mariage civil en France. Nous gérons l'ensemble de la logistique pour vous.",
      },
    ],
  },
  {
    name: "Italie",
    slug: "italie",
    country: "Italie",
    region: "Toscane, Lac de Côme, Amalfi, Sicile",
    description: "L'Italie est LA destination wedding par excellence. Toscane romantique, lac de Côme glamour, côte amalfitaine spectaculaire : chaque région offre un cadre de carte postale pour un mariage inoubliable.",
    whyChoose: [
      "Villas et castelli historiques en Toscane",
      "Lac de Côme : raffinement et hôtels mythiques",
      "Côte amalfitaine : falaises et mer turquoise",
      "Gastronomie italienne d'exception",
      "Climat méditerranéen idéal de mai à octobre",
      "Photographies cinématographiques garanties",
    ],
    topPlaces: ["Toscane", "Lac de Côme", "Côte amalfitaine", "Sicile", "Pouilles", "Florence", "Rome", "Venise"],
    bestSeason: "Mai à octobre, septembre étant le mois préféré pour la lumière dorée",
    budgetRange: "À partir de 35 000€ pour un mariage de 80 invités",
    travelTime: "1h30-2h en avion depuis Lyon",
    imageUrl: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg",
    faqQuestions: [
      {
        q: "Quelle région d'Italie choisir pour son mariage ?",
        a: "La Toscane séduit par ses villas viticoles et son ambiance romantique intemporelle. Le lac de Côme est parfait pour un mariage glamour de prestige. La côte amalfitaine offre des décors spectaculaires entre mer et falaises. Nous vous guidons selon vos envies et votre budget.",
      },
      {
        q: "Comment organiser un mariage en Italie depuis la France ?",
        a: "Smart Moments Event coordonne l'ensemble du projet à distance : repérage du lieu, négociation avec les prestataires italiens, logistique des invités, gestion du jour J sur place. Nous nous déplaçons pour les rendez-vous clés et travaillons avec un réseau de partenaires locaux de confiance.",
      },
      {
        q: "Combien d'invités pour un mariage en Italie ?",
        a: "Les destination weddings en Italie comptent généralement entre 40 et 120 invités. Le format intimiste fonctionne particulièrement bien : les invités présents apprécient un week-end complet de célébration, pas seulement la journée du mariage.",
      },
    ],
  },
  {
    name: "Grèce",
    slug: "grece",
    country: "Grèce",
    region: "Santorin, Mykonos, Crète, Corfou",
    description: "Mer Égée bleu turquoise, maisons blanches et bougainvilliers : la Grèce offre des décors iconiques pour un mariage romantique. Santorin et ses couchers de soleil sont devenus mythiques.",
    whyChoose: [
      "Santorin : couchers de soleil les plus romantiques du monde",
      "Architecture cycladique blanche emblématique",
      "Plages de rêve et eaux cristallines",
      "Soleil quasi-garanti de mai à octobre",
      "Hôtels boutique avec vue mer",
      "Cuisine méditerranéenne et tradition de fête",
    ],
    topPlaces: ["Santorin", "Mykonos", "Crète", "Corfou", "Rhodes", "Athènes", "Paros", "Naxos"],
    bestSeason: "Mai à octobre, juin et septembre étant les plus agréables (moins de touristes)",
    budgetRange: "À partir de 30 000€ pour un mariage de 80 invités",
    travelTime: "3h30 en avion depuis Lyon",
    imageUrl: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg",
    faqQuestions: [
      {
        q: "Pourquoi Santorin est-elle si prisée pour les mariages ?",
        a: "Santorin offre les couchers de soleil les plus célèbres du monde, sur fond de maisons blanches à dômes bleus et de mer Égée. C'est une destination iconique qui combine décor exceptionnel, hébergement de luxe et photographies inoubliables.",
      },
      {
        q: "Combien coûte un mariage en Grèce ?",
        a: "Un mariage en Grèce coûte entre 30 000€ et 80 000€ pour 80 invités. Les prestations sont généralement moins chères qu'en Italie ou en France, mais le transport et l'hébergement des invités représentent un poste important.",
      },
      {
        q: "Peut-on se marier civilement en Grèce ?",
        a: "Oui, le mariage civil en Grèce est reconnu en France, mais les démarches sont longues (3 à 4 mois). La plupart des couples français se marient civilement en France et organisent une cérémonie symbolique ou religieuse en Grèce. Nous gérons toutes les démarches.",
      },
    ],
  },
  {
    name: "États-Unis",
    slug: "usa",
    country: "États-Unis",
    region: "New York, Californie, Hawaï, Floride",
    description: "Des plages d'Hawaï aux toits de New York, en passant par la Napa Valley californienne, les États-Unis offrent une variété incroyable de cadres pour un mariage unique et spectaculaire.",
    whyChoose: [
      "New York : mariages chic sur rooftops avec skyline",
      "Californie : vignobles de Napa Valley, plages de Malibu",
      "Hawaï : plages paradisiaques et fleurs tropicales",
      "Floride : Key West et The Hamptons",
      "Las Vegas : chapelles iconiques pour les fans",
      "Service événementiel américain au top niveau",
    ],
    topPlaces: ["New York", "Los Angeles", "Hawaï", "San Francisco", "Miami", "Napa Valley", "Malibu", "Aspen", "Charleston"],
    bestSeason: "Variable selon la destination — printemps/automne pour New York, été pour Californie, hiver pour Floride",
    budgetRange: "À partir de 50 000€ pour un mariage de 80 invités",
    travelTime: "8h-11h en avion depuis Paris",
    imageUrl: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41_3_306698-168546595030467.jpeg",
    faqQuestions: [
      {
        q: "Quel État américain choisir pour son mariage ?",
        a: "New York pour un mariage urbain chic sur un rooftop ou dans un loft. La Californie pour un wedding boho dans les vignobles de Napa ou face à l'océan à Malibu. Hawaï pour un mariage tropical pieds dans le sable. Las Vegas pour une cérémonie iconique. Nous vous accompagnons dans le choix selon vos envies.",
      },
      {
        q: "Comment se marier légalement aux États-Unis ?",
        a: "Le mariage civil américain est reconnu en France. Les démarches varient selon les États (Las Vegas est la plus simple : licence en 30 minutes). Pour la France, il faut faire transcrire le mariage au consulat. Nous gérons toutes les formalités administratives.",
      },
      {
        q: "Combien prévoir pour un destination wedding aux USA ?",
        a: "Comptez 50 000€ à 150 000€ pour un mariage de 60-80 invités aux États-Unis. Le coût varie énormément selon la ville (Manhattan vs Hawaï vs Las Vegas). Le transport et l'hébergement des invités sont les postes principaux.",
      },
    ],
  },
  {
    name: "Bali",
    slug: "bali",
    country: "Indonésie",
    region: "Ubud, Seminyak, Uluwatu, Nusa Dua",
    description: "Bali, l'île des dieux, offre un cadre exotique pour un mariage spirituel et romantique. Rizières en terrasse à Ubud, plages de Seminyak, falaises d'Uluwatu : chaque décor est un tableau.",
    whyChoose: [
      "Rizières d'Ubud et temples balinais",
      "Cérémonies sur falaise face à l'océan à Uluwatu",
      "Plages paradisiaques de Seminyak et Nusa Dua",
      "Villas privées avec piscine pour la lune de miel",
      "Coût total très compétitif",
      "Photos exceptionnelles garanties",
    ],
    topPlaces: ["Ubud", "Seminyak", "Uluwatu", "Nusa Dua", "Canggu", "Jimbaran"],
    bestSeason: "Mai à septembre (saison sèche), à éviter de décembre à mars (mousson)",
    budgetRange: "À partir de 25 000€ pour un mariage de 50 invités",
    travelTime: "16-20h en avion depuis Paris (avec escale)",
    imageUrl: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg",
    faqQuestions: [
      {
        q: "Pourquoi Bali pour son mariage ?",
        a: "Bali combine décor exotique, hospitalité légendaire, coût total très compétitif et un service événementiel haut de gamme. Les villas privatives avec piscine, les cérémonies au coucher du soleil sur les falaises et les rizières d'Ubud créent une expérience unique.",
      },
      {
        q: "Quel budget pour un mariage à Bali ?",
        a: "Un mariage à Bali revient entre 25 000€ et 70 000€ pour 50-80 invités, transport et hébergement non inclus. Les prestations sur place sont 30-50% moins chères qu'en Europe. C'est une destination accessible pour un mariage de luxe.",
      },
      {
        q: "Le mariage à Bali est-il reconnu en France ?",
        a: "Le mariage civil à Bali nécessite des démarches longues (conversion à l'Islam pour l'un des conjoints dans certains cas). La plupart des couples français se marient civilement en France et organisent une cérémonie symbolique balinaise traditionnelle. Nous coordonnons toute la logistique.",
      },
    ],
  },
  {
    name: "Maroc",
    slug: "maroc",
    country: "Maroc",
    region: "Marrakech, Essaouira, Fès",
    description: "Mariage à Marrakech dans un riad d'exception ou en plein désert : le Maroc offre un dépaysement total à 3h de Paris. Couleurs, parfums, traditions berbères : un cadre magique pour célébrer son union.",
    whyChoose: [
      "Riads historiques de Marrakech transformés en lieux de réception",
      "Mariages dans le désert d'Agafay sous les étoiles",
      "Palais et jardins de Majorelle",
      "Traditions berbères incorporées à la cérémonie",
      "Gastronomie marocaine et tagines de prestige",
      "Proximité (3h depuis Paris)",
    ],
    topPlaces: ["Marrakech", "Essaouira", "Fès", "Désert d'Agafay", "Ouarzazate", "Tanger"],
    bestSeason: "Mars-mai et septembre-novembre (éviter juillet-août, trop chaud)",
    budgetRange: "À partir de 25 000€ pour un mariage de 80 invités",
    travelTime: "3h en avion depuis Paris",
    imageUrl: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg",
    faqQuestions: [
      {
        q: "Pourquoi Marrakech pour son mariage ?",
        a: "Marrakech est devenue une destination wedding majeure : à 3h de Paris, elle offre un dépaysement total avec ses riads, palais et jardins. Les prestations sont abordables, l'hospitalité légendaire et le décor photogénique. Idéal pour un mariage exotique sans aller au bout du monde.",
      },
      {
        q: "Que coûte un mariage à Marrakech ?",
        a: "Un mariage à Marrakech coûte entre 25 000€ et 80 000€ pour 80 invités. Le rapport qualité-prix est exceptionnel : palais privatisés, traiteurs gastronomiques et services au top pour des budgets accessibles. C'est l'une des meilleures destinations wedding rapport qualité/prix.",
      },
      {
        q: "Mariage civil au Maroc, est-ce possible ?",
        a: "Le mariage civil entre Français au Maroc est possible mais administrativement complexe. La plupart des couples se marient en France et organisent au Maroc une cérémonie laïque ou traditionnelle berbère avec hennaouna (henné) et zaffa (entrée en musique). Nous gérons toute la logistique.",
      },
    ],
  },
  {
    name: "Portugal",
    slug: "portugal",
    country: "Portugal",
    region: "Algarve, Lisbonne, Porto, Madère",
    description: "Le Portugal séduit par ses palais romantiques de Sintra, les falaises de l'Algarve et l'élégance de Lisbonne. Une destination encore préservée, accessible et au charme authentique.",
    whyChoose: [
      "Palais de Sintra et Palácio Nacional",
      "Falaises spectaculaires de l'Algarve",
      "Lisbonne : trams, azulejos, vue Tage",
      "Quintas du Douro (vignobles)",
      "Climat doux toute l'année",
      "Excellent rapport qualité-prix",
    ],
    topPlaces: ["Sintra", "Lisbonne", "Porto", "Algarve", "Madère", "Évora", "Comporta"],
    bestSeason: "Mai à octobre, juin et septembre étant les meilleurs mois",
    budgetRange: "À partir de 25 000€ pour un mariage de 80 invités",
    travelTime: "2h30 en avion depuis Lyon",
    imageUrl: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg",
    faqQuestions: [
      {
        q: "Quelle région du Portugal pour son mariage ?",
        a: "Sintra pour les palais romantiques. L'Algarve pour les plages et falaises. Lisbonne pour un mariage urbain chic. Le Douro pour les vignobles et quintas. Comporta pour un mariage bohème en bord de mer. Nous vous guidons selon vos envies.",
      },
      {
        q: "Le Portugal est-il moins cher pour un mariage ?",
        a: "Le Portugal offre un excellent rapport qualité-prix : 20-30% moins cher qu'en Italie ou en France pour des prestations de qualité équivalente. C'est une alternative idéale pour un destination wedding européen accessible.",
      },
      {
        q: "Combien d'invités au Portugal ?",
        a: "Les destination weddings au Portugal accueillent généralement 60 à 120 invités. Le format intimiste fonctionne bien : les invités présents profitent d'un week-end complet de célébration.",
      },
    ],
  },
  {
    name: "Espagne",
    slug: "espagne",
    country: "Espagne",
    region: "Ibiza, Barcelone, Majorque, Andalousie",
    description: "Plages d'Ibiza, palais andalous, élégance catalane : l'Espagne offre des cadres variés pour tous les styles de mariages, du bohème au plus chic, à moins de 2h de la France.",
    whyChoose: [
      "Ibiza : mariages bohèmes en bord de mer",
      "Barcelone : architecture moderniste de Gaudí",
      "Majorque : fincas (mas) traditionnelles",
      "Andalousie : palais mauresques de Séville et Cordoue",
      "San Sebastián : gastronomie étoilée",
      "Climat ensoleillé garanti d'avril à octobre",
    ],
    topPlaces: ["Ibiza", "Majorque", "Barcelone", "Séville", "Marbella", "Valence", "Saint-Sébastien", "Minorque"],
    bestSeason: "Avril à octobre, mai-juin et septembre-octobre étant idéaux",
    budgetRange: "À partir de 25 000€ pour un mariage de 80 invités",
    travelTime: "1h30-2h en avion depuis Lyon",
    imageUrl: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg",
    faqQuestions: [
      {
        q: "Ibiza ou Majorque pour son mariage ?",
        a: "Ibiza pour un style bohème chic en bord de mer, dans une villa privative ou sur la plage. Majorque pour un mariage dans une finca historique au cœur de l'île, plus tranquille et authentique. Les deux îles offrent un cadre méditerranéen exceptionnel.",
      },
      {
        q: "Comment se marier en Espagne en tant que Français ?",
        a: "Le mariage civil en Espagne entre Français nécessite plusieurs mois de démarches. La plupart organisent une cérémonie laïque sur place après un mariage civil en France. Nous coordonnons toutes les formalités.",
      },
      {
        q: "Quel budget pour un mariage en Espagne ?",
        a: "Un mariage en Espagne coûte entre 25 000€ et 80 000€ pour 80 invités. Ibiza est la plus chère (luxe et plage), Majorque et l'Andalousie offrent un excellent rapport qualité-prix.",
      },
    ],
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
