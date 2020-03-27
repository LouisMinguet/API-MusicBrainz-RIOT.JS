# Projet de musique : MusicBrainz + API

Ce dépot contient mes sources pour mon projet de WIM.
Le projet est disponible à cette adresse : http://dwarves.iut-fbleau.fr/~minguet/music/

### Description

Le but de ce projet était de réaliser un site WEB sur lequel l'utilisateur peut effectuer différentes recherches sur la musique. 
Les données récupérées proviennent du site MusicBrainz (https://musicbrainz.org/), via l'API gratuite fournie.
L'implémentation de l'API se fait par l'utilisation du langage RIOT (https://riot.js.org/).

### Fonctionnalités

Sur le site, l'utilisateur peut alors effectuer plusieurs recherches :
- Rechercher un artiste, ou un groupe
- Rechercher une musique
- Rechercher un album

Les résultats s'affichent sous forme de tableau, contenant les différentes informations.
L'utilisateur peut choisir de trier les différentes colonnes du tableau, en cliquant sur la colonne en question.

Il peut aussi choisir de filtrer les résultats. Il peut décider de n'afficher que les résultats **pertinents**, car l'API renvoi un bon nombre d'éléments incomplets.

Afin d'améliorer la visibilité, l'utilisateur peut choisir de limiter le nombre de résultats disponibles sur la page.
