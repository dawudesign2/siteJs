## Procedure générale git :
- Chacun d'entre nous à le projet qu'il a cloné en local  
  `git clone ...`
- On push jamais sur la branch  `main` sans que l'ensemble de l'équipe ait validé les nouvelles fonctionnalités.
- Tant que le projet n'est pas finit on merge que sur la branch` dev `

## Procédure  pour récupérer la dernière version de la branch dev :
Dès qu'on veut récupérer le travail des autres développeurs :  
- Si je ne suis pas sur `dev`je me remet dessus pour récupérer les modifications `git checkout dev`
- Une fois sur `dev `je vais copier son contenu 
  `git pull dev`
  - Si on a modifié la branch `dev` entre temps on aura un message comme quoi il y a des conflits, on peut les résoudre ou bien force le pull (récupérer forcement la dernière version dev) avec `git pull --force dev`
  - Si on a 2 historiques non liés on peut utiliser la commande `git pull --allow-unrelated-histories dev`

## Procédure  pour créer une nouvelle branch : 
- Pour créer une nouvelle on se positionne sur la branch qu'on veut reproduire `git checkout master`
- Pour créer une nouvelle branch à partir de master on fait `git checkout -b nomDeLaNouvelleBranche`