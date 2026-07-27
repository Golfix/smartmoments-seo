/**
 * Pages supprimées du site qui restent indexées et reçoivent du trafic.
 *
 * Le commit `09bb438` (« Focus on ARA/PACA/IDF/BFC ») a ramené `cities.ts` de
 * 1 773 à 1 456 villes, retirant Montpellier, Toulouse, Reims, Nancy, Brest,
 * Le Havre, Angers, Colmar, la Martinique, la Guadeloupe… Les URL correspondantes
 * sont restées indexées par Google et renvoyaient un 404 sec :
 * **143 URL, 113 clics et 4976 impressions sur 12 mois** (Search Console),
 * soit environ 13 % du trafic organique du site qui atterrissait sur une erreur.
 *
 * Chaque URL est redirigée vers la page EXISTANTE la plus proche thématiquement,
 * jamais vers l'accueil : une page ville renvoie vers le service correspondant,
 * une page ville × thème vers la page du même thème. Une redirection trop
 * générique serait requalifiée en soft 404 par Google et ne servirait à rien.
 *
 * Ces villes sont hors de la zone d'intervention déclarée sur /a-propos
 * (Auvergne-Rhône-Alpes, PACA, Île-de-France, Bourgogne-Franche-Comté). Republier
 * des pages pour ces communes reviendrait à revendiquer une couverture qui n'existe
 * pas — d'où la redirection plutôt que la réintégration. Si la zone réellement
 * couverte est plus large, il vaut mieux recréer ces villes dans `cities.ts` :
 * une page dédiée se positionne toujours mieux qu'une redirection.
 *
 * Liste établie à partir de l'export Search Console du 27/07/2026 (12 mois).
 * Les URL mortes au-delà du top 1000 de l'export restent en 404, ce qui est le
 * comportement correct pour une page sans trafic.
 */
export const goneRedirects: [from: string, to: string][] = [
  ["/photobooth-mariage/montpellier", "/services/photobooth"], // 0 clic(s), 268 impr.
  ["/wedding-planner/montpellier", "/wedding-planner"], // 3 clic(s), 262 impr.
  ["/photobooth-mariage/le-lamentin-martinique", "/services/photobooth"], // 5 clic(s), 186 impr.
  ["/photobooth-mariage/montauban", "/services/photobooth"], // 2 clic(s), 184 impr.
  ["/organisation-anniversaire/reims", "/services/anniversaire"], // 0 clic(s), 125 impr.
  ["/wedding-planner/nancy", "/wedding-planner"], // 1 clic(s), 102 impr.
  ["/wedding-planner/montauban", "/wedding-planner"], // 0 clic(s), 102 impr.
  ["/organisation-mariage/albi", "/services/mariage"], // 1 clic(s), 94 impr.
  ["/wedding-planner/brest", "/wedding-planner"], // 0 clic(s), 89 impr.
  ["/wedding-planner/le-havre", "/wedding-planner"], // 0 clic(s), 89 impr.
  ["/wedding-planner/castres", "/wedding-planner"], // 0 clic(s), 87 impr.
  ["/organisation-anniversaire/wattrelos", "/services/anniversaire"], // 2 clic(s), 86 impr.
  ["/decoration-mariage/colmar", "/services/decoration"], // 2 clic(s), 86 impr.
  ["/organisation-mariage/vannes", "/services/mariage"], // 1 clic(s), 76 impr.
  ["/wedding-planner/les-abymes", "/wedding-planner"], // 0 clic(s), 72 impr.
  ["/wedding-planner/thionville", "/wedding-planner"], // 0 clic(s), 71 impr.
  ["/wedding-planner/saint-francois-guadeloupe", "/wedding-planner"], // 0 clic(s), 69 impr.
  ["/organisation-mariage/toulouse", "/services/mariage"], // 0 clic(s), 69 impr.
  ["/decoration-mariage/le-francois", "/services/decoration"], // 0 clic(s), 64 impr.
  ["/wedding-planner/poitiers", "/wedding-planner"], // 0 clic(s), 61 impr.
  ["/organisation-mariage/montpellier", "/services/mariage"], // 0 clic(s), 61 impr.
  ["/wedding-planner/dunkerque", "/wedding-planner"], // 0 clic(s), 60 impr.
  ["/organisation-mariage/cambrai", "/services/mariage"], // 0 clic(s), 56 impr.
  ["/organisation-anniversaire/chartres", "/services/anniversaire"], // 0 clic(s), 55 impr.
  ["/decoration-mariage/angers", "/services/decoration"], // 0 clic(s), 55 impr.
  ["/wedding-planner/la-rochelle", "/wedding-planner"], // 0 clic(s), 54 impr.
  ["/photobooth-mariage/angouleme", "/services/photobooth"], // 0 clic(s), 52 impr.
  ["/wedding-planner/limoges", "/wedding-planner"], // 2 clic(s), 51 impr.
  ["/wedding-planner/duerne/mariage-romantique", "/wedding-planner/style/mariage-romantique"], // 0 clic(s), 51 impr.
  ["/organisation-mariage/perigueux", "/services/mariage"], // 0 clic(s), 51 impr.
  ["/wedding-planner/duerne/mariage-champetre", "/wedding-planner/style/mariage-champetre"], // 2 clic(s), 50 impr.
  ["/organisation-mariage/laval", "/services/mariage"], // 0 clic(s), 48 impr.
  ["/wedding-planner/departement/gard", "/wedding-planner"], // 1 clic(s), 47 impr.
  ["/organisation-mariage/bora-bora", "/services/mariage"], // 0 clic(s), 47 impr.
  ["/seminaire-entreprise/laval", "/services/seminaire-entreprise"], // 0 clic(s), 47 impr.
  ["/organisation-anniversaire/scottsdale", "/services/anniversaire"], // 0 clic(s), 46 impr.
  ["/organisation-anniversaire/nancy", "/services/anniversaire"], // 5 clic(s), 45 impr.
  ["/organisation-mariage/le-havre", "/services/mariage"], // 0 clic(s), 43 impr.
  ["/wedding-planner/angers", "/wedding-planner"], // 0 clic(s), 43 impr.
  ["/organisation-mariage/marseillan", "/services/mariage"], // 0 clic(s), 42 impr.
  ["/wedding-planner/rouen", "/wedding-planner"], // 0 clic(s), 41 impr.
  ["/wedding-planner/ajaccio", "/wedding-planner"], // 0 clic(s), 41 impr.
  ["/wedding-planner/geneve", "/wedding-planner"], // 2 clic(s), 40 impr.
  ["/organisation-mariage/castelnau-le-lez", "/services/mariage"], // 0 clic(s), 40 impr.
  ["/organisation-mariage/cayenne", "/services/mariage"], // 0 clic(s), 38 impr.
  ["/organisation-mariage/anglet", "/services/mariage"], // 0 clic(s), 38 impr.
  ["/organisation-mariage/rennes", "/services/mariage"], // 0 clic(s), 37 impr.
  ["/organisation-mariage/castres", "/services/mariage"], // 0 clic(s), 37 impr.
  ["/wedding-planner/lamentin-guadeloupe", "/wedding-planner"], // 0 clic(s), 35 impr.
  ["/wedding-planner/saint-quentin", "/wedding-planner"], // 0 clic(s), 34 impr.
  ["/wedding-planner/departement/tarn", "/wedding-planner"], // 1 clic(s), 33 impr.
  ["/wedding-planner/caen", "/wedding-planner"], // 0 clic(s), 32 impr.
  ["/organisation-mariage/ales", "/services/mariage"], // 0 clic(s), 32 impr.
  ["/wedding-planner/le-grau-du-roi", "/wedding-planner"], // 0 clic(s), 31 impr.
  ["/organisation-mariage/argeles-sur-mer", "/services/mariage"], // 0 clic(s), 31 impr.
  ["/organisation-mariage/ciboure", "/services/mariage"], // 0 clic(s), 30 impr.
  ["/coordinatrice-jour-j/charleston", "/services/mariage"], // 0 clic(s), 30 impr.
  ["/wedding-planner/villard-de-lans/mariage-chic", "/wedding-planner/style/mariage-chic"], // 1 clic(s), 29 impr.
  ["/organisation-bapteme/lorient", "/services/bapteme"], // 1 clic(s), 29 impr.
  ["/organisation-bar-mitzvah/montpellier", "/services/bar-mitzvah"], // 0 clic(s), 29 impr.
  ["/wedding-planner/nancy/mariage-romantique", "/wedding-planner/style/mariage-romantique"], // 0 clic(s), 29 impr.
  ["/organisation-bapteme/troyes", "/services/bapteme"], // 0 clic(s), 29 impr.
  ["/wedding-planner/nimes/mariage-chic", "/wedding-planner/style/mariage-chic"], // 0 clic(s), 29 impr.
  ["/decoration-mariage/frontignan", "/services/decoration"], // 0 clic(s), 28 impr.
  ["/decoration-mariage/agen", "/services/decoration"], // 0 clic(s), 28 impr.
  ["/organisation-mariage/limoges", "/services/mariage"], // 0 clic(s), 28 impr.
  ["/decoration-mariage/bayonne", "/services/decoration"], // 0 clic(s), 28 impr.
  ["/organisation-anniversaire/castres", "/services/anniversaire"], // 0 clic(s), 28 impr.
  ["/decoration-mariage/lens", "/services/decoration"], // 0 clic(s), 28 impr.
  ["/wedding-planner/mulhouse/mariage-romantique", "/wedding-planner/style/mariage-romantique"], // 0 clic(s), 27 impr.
  ["/organisation-anniversaire/bordeaux", "/services/anniversaire"], // 1 clic(s), 26 impr.
  ["/organisation-mariage/saint-denis-reunion", "/services/mariage"], // 0 clic(s), 26 impr.
  ["/wedding-planner/beziers", "/wedding-planner"], // 0 clic(s), 26 impr.
  ["/organisation-mariage/angouleme", "/services/mariage"], // 1 clic(s), 25 impr.
  ["/coordinatrice-jour-j/papeete", "/services/mariage"], // 0 clic(s), 25 impr.
  ["/decoration-mariage/lausanne", "/services/decoration"], // 0 clic(s), 25 impr.
  ["/decoration-mariage/villeneuve-les-avignon", "/services/decoration"], // 0 clic(s), 25 impr.
  ["/organisation-mariage/sainte-luce-martinique", "/services/mariage"], // 1 clic(s), 24 impr.
  ["/organisation-mariage/angers", "/services/mariage"], // 1 clic(s), 24 impr.
  ["/decoration-mariage/montauban", "/services/decoration"], // 0 clic(s), 24 impr.
  ["/wedding-planner/wattrelos", "/wedding-planner"], // 0 clic(s), 24 impr.
  ["/seminaire-entreprise/tarbes", "/services/seminaire-entreprise"], // 2 clic(s), 23 impr.
  ["/wedding-planner/bastia", "/wedding-planner"], // 1 clic(s), 22 impr.
  ["/wedding-planner/lausanne", "/wedding-planner"], // 2 clic(s), 21 impr.
  ["/wedding-planner/vannes", "/wedding-planner"], // 1 clic(s), 21 impr.
  ["/organisation-mariage/faaa", "/services/mariage"], // 1 clic(s), 18 impr.
  ["/wedding-planner/serignan", "/wedding-planner"], // 2 clic(s), 16 impr.
  ["/photobooth-mariage/beauvais", "/services/photobooth"], // 1 clic(s), 16 impr.
  ["/organisation-anniversaire/lorient", "/services/anniversaire"], // 2 clic(s), 15 impr.
  ["/organisation-mariage/agde", "/services/mariage"], // 1 clic(s), 15 impr.
  ["/organisation-anniversaire/montauban", "/services/anniversaire"], // 1 clic(s), 14 impr.
  ["/organisation-anniversaire/toulouse", "/services/anniversaire"], // 3 clic(s), 13 impr.
  ["/coordinatrice-jour-j/nimes", "/services/mariage"], // 2 clic(s), 13 impr.
  ["/organisation-anniversaire/caen", "/services/anniversaire"], // 1 clic(s), 13 impr.
  ["/wedding-planner/mazamet", "/wedding-planner"], // 1 clic(s), 13 impr.
  ["/decoration-mariage/la-chaux-de-fonds", "/services/decoration"], // 1 clic(s), 13 impr.
  ["/organisation-bapteme/tours", "/services/bapteme"], // 1 clic(s), 13 impr.
  ["/wedding-planner/figeac", "/wedding-planner"], // 1 clic(s), 12 impr.
  ["/wedding-planner/tassin-la-demi-lune/mariage-plein-air", "/wedding-planner/style/mariage-plein-air"], // 1 clic(s), 12 impr.
  ["/organisation-anniversaire/cherbourg-en-cotentin", "/services/anniversaire"], // 2 clic(s), 11 impr.
  ["/wedding-planner/essertines-en-chatelneuf/mariage-boheme", "/wedding-planner/style/mariage-boheme"], // 1 clic(s), 11 impr.
  ["/organisation-mariage/basse-terre", "/services/mariage"], // 1 clic(s), 11 impr.
  ["/wedding-planner/satolas-et-bonce/mariage-plein-air", "/wedding-planner/style/mariage-plein-air"], // 2 clic(s), 10 impr.
  ["/wedding-planner/vezeronce-curtin/mariage-chic", "/wedding-planner/style/mariage-chic"], // 1 clic(s), 10 impr.
  ["/wedding-planner/sainte-foy-tarentaise/mariage-chic", "/wedding-planner/style/mariage-chic"], // 1 clic(s), 9 impr.
  ["/organisation-anniversaire/fribourg-suisse", "/services/anniversaire"], // 1 clic(s), 8 impr.
  ["/decoration-mariage/bastia", "/services/decoration"], // 1 clic(s), 8 impr.
  ["/photobooth-mariage/la-rochelle", "/services/photobooth"], // 1 clic(s), 8 impr.
  ["/wedding-planner/carcassonne", "/wedding-planner"], // 1 clic(s), 7 impr.
  ["/organisation-anniversaire/le-lamentin", "/services/anniversaire"], // 1 clic(s), 7 impr.
  ["/organisation-anniversaire/angouleme", "/services/anniversaire"], // 1 clic(s), 7 impr.
  ["/wedding-planner/perpignan/mariage-romantique", "/wedding-planner/style/mariage-romantique"], // 1 clic(s), 7 impr.
  ["/coordinatrice-jour-j/caen", "/services/mariage"], // 4 clic(s), 6 impr.
  ["/wedding-planner/gif-sur-yvette/mariage-chic", "/wedding-planner/style/mariage-chic"], // 1 clic(s), 5 impr.
  ["/organisation-bapteme/narbonne", "/services/bapteme"], // 1 clic(s), 5 impr.
  ["/wedding-planner/saint-jean-de-vedas", "/wedding-planner"], // 1 clic(s), 5 impr.
  ["/organisation-bapteme/amiens", "/services/bapteme"], // 1 clic(s), 5 impr.
  ["/wedding-planner/saint-christophe-en-oisans/mariage-plein-air", "/wedding-planner/style/mariage-plein-air"], // 1 clic(s), 5 impr.
  ["/coordinatrice-jour-j/lezignan-corbieres", "/services/mariage"], // 1 clic(s), 5 impr.
  ["/coordinatrice-jour-j/rouen", "/services/mariage"], // 3 clic(s), 4 impr.
  ["/wedding-planner/sail-sous-couzan/mariage-boheme", "/wedding-planner/style/mariage-boheme"], // 1 clic(s), 4 impr.
  ["/wedding-planner/aussois/mariage-champetre", "/wedding-planner/style/mariage-champetre"], // 1 clic(s), 4 impr.
  ["/coordinatrice-jour-j/bastia", "/services/mariage"], // 1 clic(s), 4 impr.
  ["/wedding-planner/montalieu-vercieu/mariage-romantique", "/wedding-planner/style/mariage-romantique"], // 1 clic(s), 4 impr.
  ["/organisation-bar-mitzvah/ales", "/services/bar-mitzvah"], // 2 clic(s), 3 impr.
  ["/wedding-planner/trept/mariage-champetre", "/wedding-planner/style/mariage-champetre"], // 1 clic(s), 3 impr.
  ["/wedding-planner/malleval/mariage-plein-air", "/wedding-planner/style/mariage-plein-air"], // 1 clic(s), 3 impr.
  ["/coordinatrice-jour-j/sainte-luce-martinique", "/services/mariage"], // 1 clic(s), 3 impr.
  ["/wedding-planner/jassans-riottier/mariage-chic", "/wedding-planner/style/mariage-chic"], // 1 clic(s), 3 impr.
  ["/organisation-bar-mitzvah/lille", "/services/bar-mitzvah"], // 1 clic(s), 2 impr.
  ["/coordinatrice-jour-j/saint-quentin", "/services/mariage"], // 1 clic(s), 2 impr.
  ["/organisation-bar-mitzvah/strasbourg", "/services/bar-mitzvah"], // 1 clic(s), 2 impr.
  ["/wedding-planner/charbonnieres-les-bains/mariage-boheme", "/wedding-planner/style/mariage-boheme"], // 1 clic(s), 2 impr.
  ["/wedding-planner/vourles/mariage-plein-air", "/wedding-planner/style/mariage-plein-air"], // 1 clic(s), 2 impr.
  ["/wedding-planner/villereversure/mariage-boheme", "/wedding-planner/style/mariage-boheme"], // 1 clic(s), 1 impr.
  ["/organisation-bar-mitzvah/carcassonne", "/services/bar-mitzvah"], // 1 clic(s), 1 impr.
  ["/wedding-planner/alpe-d-huez/mariage-chic", "/wedding-planner/style/mariage-chic"], // 1 clic(s), 1 impr.
  ["/wedding-planner/saintes-maries-de-la-mer/mariage-plein-air", "/wedding-planner/style/mariage-plein-air"], // 1 clic(s), 1 impr.
  ["/wedding-planner/chaponost/mariage-plein-air", "/wedding-planner/style/mariage-plein-air"], // 1 clic(s), 1 impr.
  ["/wedding-planner/lamure-sur-azergues/mariage-champetre", "/wedding-planner/style/mariage-champetre"], // 1 clic(s), 1 impr.
  ["/wedding-planner/saint-georges-de-commiers/mariage-boheme", "/wedding-planner/style/mariage-boheme"], // 1 clic(s), 1 impr.
  ["/wedding-planner/orpierre/mariage-romantique", "/wedding-planner/style/mariage-romantique"], // 1 clic(s), 1 impr.
  ["/wedding-planner/montagnac-montpezat/mariage-boheme", "/wedding-planner/style/mariage-boheme"], // 1 clic(s), 1 impr.
];
