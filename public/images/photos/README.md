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

## État actuel

20 photos du mariage de Kenza & Kevin, fournies par Kevin. Les originaux pleine
résolution sont conservés **hors du dépôt**, dans
`/Users/kevin/Projects/smartmoments-photos-originaux/` — 268 Mo qui n'ont rien à
faire dans un dépôt git.

## Orientation

Chaque entrée porte `orientation: "landscape" | "portrait"`, déduite des
dimensions du fichier. Les bandeaux pleine largeur passent `prefer="landscape"`,
les colonnes `aspect-[3/4]` passent `prefer="portrait"` : sans cela, une photo
verticale placée dans un hero se recadre au point d'en perdre le sujet.

## Si ce dossier est vidé

Le composant `<Photo>` affiche un panneau décoratif aux couleurs de la marque.
Le site reste cohérent, sans image cassée ni trou de mise en page — mais sans
aucune photo de réalisation, ce qui est rédhibitoire pour un métier visuel.
