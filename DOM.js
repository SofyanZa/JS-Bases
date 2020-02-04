//****************DOM window: *********************/




alert()
//affiche une pop up avec message + les boutons ok et annuler  
alert("Hello!");

prompt()
//Affiche une pop up / boîte de dialogue qui permet à l'utilisateur de saisir une valeur
name = prompt("What is your name ? ", "your name here");

confirm()
//Affiche une boîte de dialogue qui permet à l'utilisateur de choisir entre annuler et ok,
confirmation = confirm('Êtes-vous sûr ?');

setTimeout() 
//Exécute une fonction après un certain temps (en millisecondes)

<div id="counter">En attente...</div>
function writeOk() {
	var counter = document.getElementById('counter');
	counter.textContent = 'OK';
}

var timer = setTimeout(writeOk, 3000);

// La fonction writeOk() sera exécutée au bout de 3000 millisecondes soit 3 secondes

clearTimeout()
//Annule un timer déclaré par setTimeout
var timer = setTimeout(writeOk, 3000);
clearTimeout(timer);

setInterval() 
//Exécute une fonction à un certain interval de temps (en millisecondes)
var timer = setInterval(writeOk, 3000);

clearInterval() 
//Annule un timer déclaré par setInterval
var timer = setInterval(writeOk, 3000);
clearInterval(timer);



// ************* DOCUMENTS *************

// Méthodes
getElementById()
//Récupération d'un élément du DOM

<p id="zone-contenu">Contenu original</p>
var zoneContenu = document.getElementById('zone-contenu');
zoneContenu.textContent = 'Nouveau contenu';

createElement() 
//Création élément du DOM
var listeItem = document.createElement('li');
//listeItem est un élément de type li, en tant qu'objet du DOM, ces propriétés peuvent être modifiés
listeItem.textContent = 'Un contenu texte';

querySelector() 
//Permet de récupérer le premier élément correspondant à la syntaxe transmise ( à l'image des selector CSS )

<div id="mon-contenu"></div>
var monContenu = document.querySelector('#mon-contenu');

//Propriétés
Partant de ce postulat :

var monElement = document.getElementById('mon-element');

innerHTML
// Permet d'ajouter du HTML dans un élément, le code HTML sera interprété
monElement.innerHTML = '<p>du contenu HTML</p>';

textContent
// Permet d'ajouter du texte dans un élément
monElement.textContent = 'simple texte';

style
// Permet de modifier l'attribut style d'un élément
monElement.style = 'color: #F30';

// Bien que la syntaxe précédente soit viable, il est conseillé d'adopter l'approche par les propriétés que nous offre .style
monElement.style.color = '#F30';
// La syntaxe à adopter suis la logique du camelCase aussi :
monElement.style = 'margin-top: 20px';
//la syntaxe sera à adapter de la façon suivante
monElement.style.marginTop = '20px';


classList 
// Retourne la liste des classes (attribut class="...")

// classList possède plusieurs méthodes intéressantes

monElement.classList.add('info','rouge');
// <div id="mon-element" class="info rouge">
monElement.classList.remove('rouge');
// <div id="mon-element" class="info">
monElement.classList.add('bleu');
// <div id="mon-element" class="info bleu">
monElement.classList.toggle("info");
// <div id="mon-element" class="bleu">



value
//Permet de récupérer le contenu de l'attribut value d'un élément HTML (input par exemple)
var valeur = monInput.value;


// Méthodes
appendChild()
// Ajout d'un élément (enfant) à un noeud parent

<ul id="liste"></ul>
var liste = document.getElementById('liste');
var listeItem = document.createElement('li');

liste.appendChild(listeItem);

focus() 
//Applique le focus sur un élément HTML
document.getElementById("mon-input").focus();

blur()
//Retire le focus d'un élément HTML ( exemple avec les divs border rouge en atelier coop)

 document.getElementById("mon-input").blur();




//  Evénements
// JavaScript est un langage tourné vers la gestion des interactions entre l'utilisateur et le navigateur. On parle d'événements utilisateurs :
// cliquer, scroller, soumettre un formulaire, etc.

addEventListener
// Permet de placer un nouvel écouteur d'événement, c'est-à-dire d'indiquer au navigateur comment réagir à des événements futurs :

element.addEventListener(
  eventType,
  handler
)

où :

// 1- element est une référence vers un nœud du DOM, obtenue auparavant ;
// 2- eventType est une chaîne de caractère décrivant le type d'événement à surveiller, sur element ;
// 3- handler est une fonction anonyme (function() { … }) ou une référence de fonction.
Exemple :

var element = document.getElementById('inscription');
var subscribeUser = function() {
  // TODO: enregistrer l'inscription de l'utilisateur
};
element.addEventListener('click', subscribeUser);


// Objet-événement
// Le handler, aussi appelé callback ou écouteur d'événement, est automatiquement appelé par le navigateur, 
// et reçoit en paramètre un objet décrivant l'événement qui vient de survenir :

var subscribeUser = function(evt) {
  console.log(evt);
  // TODO: enregistrer l'inscription de l'utilisateur
}



// L'objet-événement contient de nombreuses informations utiles, et notamment une méthode preventDefault qui permet, 
// lorsque c'est utile, de bloquer le comportement par défaut du navigateur :
document.getElementByTagName('form').addEventListener('submit', function(evt) {
  evt.preventDefault(); // empêche le rechargement automatique de la page
});


// Plus en détails
// Types d'événements
// Liste des types d'événements

// Il existe de nombreux types d'événements auxquels réagir. Il est même possible de créer ses propres types avec new Event('montype').

// Handler et traitement d'informations
// Un événement, par exemple un 'click' sur un .button, peut survenir plusieurs fois. 
// La fonction handler sera executée à chaque occurence de l'événement, et comme pour toutes les fonctions en JS,
//  il n'y a aucune persistance d'information entre les différents appels de fonction. 
//  Il convient donc de coder ses handlers de façon à ce qu'ils soient autonomes dans leurs traitements d'information.

// Le handler peut toutefois recevoir un objet en paramètre, généralement nommé event ou evt. 
// Cet objet est automatiquement rempli avec des informations diverses sur l'événement auquel le handler réagit. 
// Il n'est pas possible de personnaliser cet objet. Par contre, l'objet donne accès à une référence 
// vers l'élément du DOM qui a subit l'événement : evt.target. Cet élément du DOM peut tout à fait 
// exploiter les attributs data- pour transmettre des informations spécifiques, exploitables en JS dans le handler.

// Supprimer un écouteur d'événement
bouton.removeEventListener('click', cliqueBouton);