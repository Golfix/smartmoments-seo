# Photothèque du site

Déposez ici les photos de réalisations. Elles sont servies depuis ce domaine —
**aucune image ne doit être appelée depuis un CDN tiers.**

> Contexte : jusqu'en juillet 2026, les 11 visuels du site étaient des liens directs
> vers `cdn0.mariages.net`. Ce CDN a fermé l'accès externe (403) et **toutes les photos
> des 3 831 pages ont disparu d'un coup**, sans que rien ne le signale.

## Ajouter des photos

1. Exportez en **WebP**, largeur 1600 px, qualité 80 :
   ```bash
   cwebp -q 80 -resize 1600 0 photo-originale.jpg -o ceremonie-arche-fleurie-beaujolais.webp
   ```
2. Nommez le fichier `<categorie>-<description>.webp`.
   Catégories reconnues : `mariage`, `ceremonie`, `decoration`, `details`, `ambiance`, `photobooth`.
3. Déposez le fichier dans ce dossier.
4. Lancez :
   ```bash
   npm run photos:sync
   ```
5. **Relisez les textes alternatifs** générés dans `src/data/photos.ts` — ce sont eux
   que lisent Google Images et les lecteurs d'écran. Décrivez la scène, pas le fichier.
6. `npm run build` puis déployez.

## Tant que ce dossier est vide

Le composant `<Photo>` affiche un panneau décoratif aux couleurs de la marque
(dégradé taupe/or, filet doré). Le site reste cohérent, sans image cassée ni trou
de mise en page — mais **il n'a aucune photo de réalisation**, ce qui reste le point
faible n°1 pour un métier visuel. À remplir dès que possible.

## Combien de photos ?

8 à 12 suffisent : les gabarits piochent dans la photothèque de façon déterministe
(variation par ville, par service et par thème). Idéalement au moins une par catégorie.
