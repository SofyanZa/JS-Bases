/************* SYNTAXE JAVASCRIPT *************/

// Déclaration d'une variable
var age = 33;
//Une instruction qui possède la structure suivante :
var nomDeVariable = valeur;

//On peut aussi créer une variable sans lui donner de valeur, 
//auquelle cas elle vaut en fait undefined (qui représente en JS l'absence de valeur explicite/concrète) :
var taille; // taille stocke la valeur undefined




// ** Types de variables ** 


// En fonction de la valeur stockée dans une variable à un moment m, on dira que la variable est « du type » X ou Y. 
// Selon le type d'une variable, il est possible de lui appliquer certains traitements spécifiques

//1- Number Le type number désigne tous les nombres, entiers et décimaux.
var age = 18;
var salaireHoraire = 10.53;

//2- Boolean
// Un booléen est une donnée binaire, c'est-à-dire qui ne peut avoir que deux états, logiquement opposés.
//Une variable booléenne ne peut prendre que deux valeurs : true ou false. Le sens exact de true et false dépendra du contexte.
var aSonPermis = true;
var voitureDisponible = false;

//3- String

// Une chaîne de caractère, string en anglais, est la version informatique d'un « bout de texte. » 
// Ce peut-être une lettre, un mot, une phrase, un paragraphe ou n'importe quoi de représentable sous la forme d'une entité de type texte.
// "" et '' permettent d'encadrer une chaîne de caractères. Pas de différence entre les deux, en tout cas en JS. 
// \ permet d'"échapper" les caractères spéciaux (par ex les " si je suis dans une chaîne délimitée par des "")

var maChaineDoubleQuotes = "Chaine de caractères entre double quotes \"\" ";
var maChaineSimpleQuotes = 'Chaine de caractères entre simple quotes \'\' ';
// Note 1 : attention à bien différencier, dans le code, le nom d'une variable 
// (interprété par la machine pour aller récupérer sa valeur stockée) et une chaîne de caractère 
// (simple texte, ne contient pas de donnée autre que ce texte lui-même) :

var maVariable = "ceci est du texte intéressant";
var maChaine = "maVariable"; // la variable maChaine contient bien le texte "maVariable" tel quel

//4- Array-  Le type « tableau », c'est-à-dire liste ordonnée.
// Très utile pour stocker plusieurs valeurs dans une même variable. 
// On utilise souvent les tableaux pour contenir une série d'éléments de même type, 
// même s'il n'est pas obligatoire que tous les éléments soient du même types. 
// Exemple: une liste de fruits, d'élèves, de noms de planètes à afficher, de courses…
// Les tableaux en javascript sont ordonnées, c'est-à-dire que leurs éléments sont indexés :
//  à chaque case du tableau est assignée un index numérique, en partant de 0.
// Notez bien que chaque case de tableau peut contenir une variable de tout type (y compris un tableau !).

// déclarer un tableau :
var fruits = ["cerise", "banane", "kiwi"];

// accéder à un élément du tableau avec la syntaxe [index] :
fruits[0]; // => accède à "cerise"
fruits[2]; // => accède à "kiwi"


//5- Objets
// Un objet peut stocker de multiples valeurs (comme un tableau), 
// mais chaque valeur est indexée non pas par un nombre, mais par un nom : sa clé.
// Convention de nommage pour les clés d'objets : camelCase.

// déclarer un objet :
//On parle de structure cle: valeur. Un objet contient zéro, une ou plusieurs paires de cle: valeur.
var fruits = {
  superbon : "cerise",
  sucre : "banane",
  acide : "kiwi"
};

// En JS, on accède aux éléments d'un objet :
avec la notation fruits["key"]
avec la notation fruits.key

// Lire une valeur :
fruits["acide"]; // retourne "kiwi"
// syntaxe alternative, résultat équivalent :
fruits.acide;

// Modifier une valeur :
fruits.acide = "citron";


// ** Inspecter une variable ** 

// Pour voir ce que contient une variable, on peut utiliser la fonction console.log.

prenom = "Clark";
console.log(prenom); // affiche "Clark" dans la console du navigateur (F12 / onglet Console)

notes = [10, 12, 15, 15, 20];
console.log(notes); // affiche le tableau et son contenu dans la console


// ** Type d'une variable ** 

// Type d'une variable
// Le mot-clé typeof permet de vérifier le type d'une variable (ie. de son contenu) :

typeof 12 //=> "number"
typeof 'coucou' //=> "string"
typeof true //=> "boolean"
// Attention, typeof n'est pas une fonction : il n'y a pas de parenthèses, on n'écrit pas typeof(12) par exemple.

// ** Instructions **

// Par opposition aux variables qui stockent simplement les données du programme, les instructions sont les traitements qui manipulent ces données.
// En JS, on écrit une instruction par ligne et on signale explicitement à la machine la fin d'une instruction par un ; final.
// Le ; en fin d'instruction est techniquement facultatif, mais son absence pose problème dans certains cas. 
// La bonne pratique est de systématiquement écrire un ; explicite pour s'éviter des ennuis.

//**** Affectation de variable *****/
// L'attribution d'une valeur à une variable se fait avec l'opérateur =.
// Dans cet exemple, on stocke la chaîne de caractères "Lucie" dans la variable prenom :
var prenom = "Lucie";
// Rappel : l'instruction ci-dessus réalise deux choses, la création d'une variable prenom, 
// et l'affectation de cette variable (stockage d'une valeur dans prenom, en l'occurence la chaîne de caractère "Lucie").

// assignation d'un valeur à une case d'un tableau :
var fruits = ['pomme', 'poire'];
fruits[2] = 'abricot'; // ajoute un élément au tableau

//******** Opérateurs ********/

// Raccourcis
// Certains opérateurs dits raccourcis permettent de faire 2 opérations en 1 instruction :
// L'opérateur += :
// additionne une quantité à la valeur actuellement stockée à une variable,
// et assigne le résultat dans cette même variable.
// On parle d'incrémentation.

// la variable nbLivres est initialisée à 1
var nbLivres = 1;

// avec l'instruction ci-dessous, nbLivres prend la valeur nbLivres + 4
nbLivres += 4; // 5, c'est-à-dire équivalent à avoir écrit : nbLivres = nbLivres + 4;
Fonctionnent sur le même principe : -= (décrémentation), *= et /=.

// Il est possible de gérer l'incrémentation ou la décrémentation de 1 avec un autre raccourci syntaxique :

// la variable nbVies est initialisée à 1
var nbVies = 1;

nbVies++; // j'ajoute 1 à la valeur de nbVies => 2
nbVies--; // j'enlève 1 à la valeur de nbVies => 1

// Concaténation
// Concaténer 2 chaînes de caractères veut dire « les coller bout à bout. » L'ordre de la concaténation importe.
// Pour concaténer deux chaînes, on utilise l'opérateur + 

'salut' + ' ' + 'les gens'; // équivalent à la chaîne de caractère 'salut les gens'
// Cette fois-ci, il ne s'agit pas de l'addition : la sémantique et l'effet de l'opérateur + dépendent de ce à quoi il est appliqué. 
// Quand les opérandes (les éléments à gauche et à droite de l'opérateur) sont des chaînes de caractères, le + signifie « concaténation. »
// Il est possible de concaténer des variables contenant une chaîne de caractères :

var nom = "world";
var message = "Hello " + nom;
// La variable message contient désormais la chaîne "Hello world"


// Opérateurs logiques

// Il est possible de combiner des valeurs booléennes, selon une logique particulière. 
// Le résultat d'une opération booléenne est toujours une valeur booléenne, donc true ou false.
// L'opérateur && signifie "ET" : var canDrive = isEighteen && hasLicence; 
// si isEighteen vaut true ET que hasLicence vaut true, alors canDrive prendra la valeur true.

// L'opérateur || signifie "OU" :
// var takeUmbrella = isRaining || willRainToday ; 
// si isRaining vaut true OU que willRainToday vaut true, ou les deux, alors takeUmbrella prendra la valeur true

// Opérateurs de comparaison
// Les opérateurs de comparaison permettent de vérifier 2 valeurs entre elles. Une comparaison renvoit toujours un boolean.

// égalité
// Le signe = peut signifier des choses différentes, selon comment on l'utilise :

= : opérateur d'affectation (pour changer la valeur d'une variable, d'un élément de tableau…)
== : opérateur de comparaison souple (ne compare que la valeur, pas le type)
=== : opérateur de comparaison stricte (compare type & valeur)
Ainsi :

1 == '1'; // true : les types sont différents (number vs string), mais la valeur est considérée être la même
1 === '1'; // false : la valeur est la même, mais les types sont différents
1 == 1; // true : la valeur est la même (et le type aussi, mais ce n'est pas vérifié)
1 === 1; // true : la valeur et le type sont les mêmes, tout va bien


// supérieur, inférieur
var age = 28;

age < 30; // age (28) est inférieur à 30 ? true
age <= 30; // age (28) est inférieur ou égal à 30 ? true

age > 30; // age (28) est supérieur à 30 ? false
age >= 30; // age (28) est supérieur ou égal à 30 ? false



// --------------------------------------------- //
// *************** Conditions ***************** //

// Condition `if`

if
// Si la condition est vérifiée, alors le bloc d'instructions associé est exécuté.
SI (condition) 
  ALORS Je fais qq chose
if (condition) {
  // instructions si condition vérifiée
}

// Condition if else
// Si la condition est vérifiée, alors le premier bloc d'instructions est exécuté, sinon le deuxième bloc est exécuté.

SI (condition) 
  ALORS Je fais qq chose
SINON
  ALORS Je fais autre chose
if (condition) {
  // instructions si condition vérifiée
}
else {
  // instructions si condition non vérifiée
}

// COndition if else if else

// Si la 1ère condition est vérifiée, alors le premier bloc d'instructions est exécuté ;
// sinon, si la 2ème condition est vraie, alors le 2ème bloc est éxécuté (note : cette 2ème condition n'est testée que si la première est fausse) ;
// ... on peut mettre autant de else if qu'on veut (note : au bout d'un moment, ça devient compliqué/illisible ; on fera alors plutôt un switch) ;
// sinon si aucune des conditions précédentes n'est vraie, exécution du cas par défaut.
SI (la condition est vraie) 
  ALORS Je fais qq chose
SINON SI (la condition est vraie) 
  ALORS Je fais autre chose
SINON 
  ALORS Je fais autre chose
if (condition1) {
  // instructions si condition 2 vérifiée
}
else if (condition2) {
  // instructions si condition 1 non vérifiée, et condition 2 vérifiée
}
else {
  // instructions si aucune condition vérifiée
}


// ************** Condtions et Booléens ********* //

// La structure de contrôle if attend une condition qui s'évalue à true ou false 
// pour savoir si elle doit exécuter le bloc de code qui lui est associé.
var confirmation = true;

if (confirmation === true) {
  // on passe ici !
}

// est équivalent à :

var confirmation = true;
// on peut directement utiliser la valeur booléene "confirmation" dans la condition
if (confirmation) {
  // on passe ici !
}


// Condition switch

Cette structure de contrôle permet de spécifier un traitement différent selon la valeur d'une variable.

var drink = 'coffee';

switch (drink) {
  case 'coffee':
    console.log('Expresso or Latte ?');
    break;
  case 'tea':
    console.log('Earl Grey or Green Tea ?');
    break;
  case 'soda':
  case 'water':
    console.log('Glass or bottle ?');
    break;
  default:
    console.log('Sorry, we don\'t have this here.');
}
Raccourci pour :

if (val === 'val1') {
  // ...
} else if (val === 'val2') {
  // ...
} else {
  // ...
}



// --------------------------------------------- //
// *************** Boucles ***************** //

// Toutes les boucles en JS se basent au minimum sur :

// - une condition de répétition (on dit aussi « de sortie ») ;
// - des instructions à répéter ;
// - et éventuellement sur :

// une gestion fine de la condition de sortie, avec par exemple un compteur numérique (par exemple, boucle for).




// While
//Tant que la condition est vérifiée, j'exécute les instructions :
while(condition) {
  // ... instructions JS
}




// Do while
// J'exécute les instructions une première fois, puis tant que la condition est vérifiée, je recommence :

do {
  // ... instructions
} while(condition)




// For
// Pour chaque nouvelle valeur de ma variable de contrôle de boucle, 
// et ce jusqu'à ce que la condition ne soit plus vérifiée, j'exécute les instructions :

for(var i = 0; i < 3; i++) {
  // ... instructions
}

// Ici, la variable i (comme increment) sera incrémentée de 1 à chaque itération,
//  et la condition ré-évaluée à chaque tour de boucle, jusqu'à ce qu'elle ne soit plus vérifiée et que la boucle s'arrête.




// For in
// Pour chaque proprieté dans l'objet, j'exécute les instructions :

var fruit = {
  nom: 'fraise',
  couleur: 'rouge'
};

for(var propriete in fruit) {
  console.log('Propriété ' + propriete + ' :');
  console.log('Le fruit est ' + fruit[propriete]);
}

// Affichage obtenu en console :
//
// Propriété nom :
// Le fruit est fraise
// Propriété couleur :
// Le fruit est rouge

// NOTES
// Il est possible d'interrompre une boucle avec l'instruction break;.
// Il est possible d'interrompre l'itération courante et de passer à la suivante avec l'instruction continue;.





// --------------------------------------------- //
// *************** Fonctions ***************** //

// La fonction simple
// Des fonctions comme alert() sont disponible par défaut dans JavaScript. Mais on peut aussi définir nous-même nos propres fonctions. 
// Ça va nous permettre d'exécuter une série d'instructions. 
// On va pouvoir lui donner un ou des paramètres qui seront repris dans le corps de la fonction.

// Fonction simple
// Définition
// Pour définir une fonction, on utilise function :

function hello() {
  console.log('hello world !');
}
// Il est également possible de définir une fonction anonyme dans une variable

var hello = function () {
  console.log('hello world !');
};

Exécution
hello(); // produira un 'hello world !' dans la console


// Fonction avec retour
// Dans la définition de notre fonction, on va définir une série d'instructions, avec ce qu'on veut à l'intérieur.
// On va pouvoir aussi faire en sorte que cette fonction "retourne" une valeur, avec return :

function getMessage(name) {
  return 'hello ' + name +' !';
}

// message vaut 'hello Gringo !'
var message = getMessage('Gringo');
// Cette fois-ci, au lieu d'afficher, on retourne une string, qui pourra être utilisée par la suite.

// Attention : Une fois que l'on utilise return, la fonction s'arrête

// Fonction avec des paramètres
// Si on souhaite utiliser une fonction en lui fournissant des arguments (lors de l'exécution), il faut que la définition de la fonction possède des paramètres :

// Définition
// La définition indique que la fonction prend un paramètre name. Le paramètre est comme une variable au sein de la fonction.

function hello(name) {
  console.log('hello ' + name +' !');
}
Exécution
//Lors de l'exécution, on passe en argument la valeur 'Gringo'. Cette valeur est assignée à name dans le corps de la fonction.

hello('Gringo'); // produira un 'hello Gringo !' dans la console
// Qu'est-ce qu'il se passe ?

// J'exécute la fonction hello avec un argument 'Gringo'
// Ma fonction a été définie avec un paramètre name, qui va stocker l'argument donné.
// C'est comme si avant d'exécuter la fonction, on faisait var name = 'Gringo';

// Chaque instruction de la fonction est interpretée
// Plusieurs paramètres
// Dans nos fonctions, on peut aussi avoir plusieurs paramètres.

function addition(a, b) {
	return a + b;
}

// resultat vaut 12
var resultat = addition(5, 7);





// --------------------------------------------- //
// *************** Intéractions ***************** //

// Interactions
//En fenêtre
alert(message) //affiche une pop-up avec un message et un bouton OK :
alert('Hello!');

prompt() // affiche une pop-up / boîte de dialogue permettant à l'utilisateur de saisir une valeur, avec un bouton OK pour valider, et possibliité d'Annuler :
name = prompt('What is your name ?', 'type your name here');
// name contiendra la chaîne de caractères entrée par l'utilisateur
// si l'utilisateur à annuler, name vaut null

confirm() // affiche une boîte de dialogue permettant à l'utilisateur de choisir entre Annuler et OK :
confirmation = confirm('Êtes-vous sûr ?');
// confirmation vaudra true (OK) ou false (Annuler)

// Interactions
//En console
console.log() : // affiche un message dans la console
console.info() :  //alias de console.log()
console.warn() : //affiche un message d'avertissement (jaune avec icône) dans la console
console.error() : //affiche un message d'erreur (rouge avec icône d'erreur) dans la console




// Fonctions sur les variables
Number(string) : //transforme une chaîne de caractère en nombre (ex : Number('42') => 42)

parseInt(string) : //transforme une chaîne de caractère en nombre (comme Number()), 
//mais en plus, est capable de rechercher les chiffres en début de texte pour les transformer en nombre (ex : parseInt('3 pommes') => 3)


// Fonctions sur les chaînes de caractères


// string lenght Permet de recupérer la longueur d'une chaîne de caractères :
chaine = 'Une phrase assez courte.';

console.log(chaine.length); // => 24



// string indexOf : Permet de récupérer le premier index d'un élément dans une chaîne de caractères
'fruits'.indexOf('i'); // => 3 (index 3 de la chaîne)
'fruits'.indexOf('a'); // => -1 ('a' n'est pas trouvé)



// string lastIndexOf: Permet de récupérer l'index de la position de la dernière occurence d'un élément dans une chaîne de caractères :
'banane'.lastIndexOf('a'); // => 3 (index 3 de la chaîne, ie. 4ème lettre)
'banane'.lastIndexOf('f'); // => -1 ('f' n'est pas trouvé, donc -1)


// Fonctions sur les tableaux


// array lenght : Permet de recupérer le nombre d'éléments que possède un tableau :
fruits = ['banane', 'clémentine', 'orange'];

console.log(fruits.length); // => 3




// array indexOf: Permet de recupérer l'index de la position de la première occurence d'un élément dans un tableau :
fruits = ['banane', 'clémentine', 'orange'];

fruits.indexOf('orange'); // => 2 (index 2 du tableau fruits, ie. 3ème élément)
fruits.indexOf('banane'); // => 0 (index 0 du tableau fruits, ie. 1er élément)
fruits.indexOf('pomme'); // => -1 (pomme n'est pas trouvé, donc -1)


// Module Math
Math.random() : // génère un nombre aléatoire entre 0 et 1
Math.round() : // arrondi un nombre à l'entier le plus proche
Math.floor() : // arrondi un nombre à l'entier inférieur
Math.ceil() : // arrondi un nombre à l'entier supérieur





// --------------------------------------------- //
// *************** DEBBUGUER MON CODE ***************** //

// Afficher une donnée en console :
console.log('debug');
console.log(myVar);
console.info(myVar);
console.warn(myVar);
console.error(myVar);

// Lancer le debugger
debugger;

// Gérer des types de données incompatibles
// Attention aux types de données, notamment les données reçues depuis l'utilisateur :

var number1 = prompt('Tapez un nombre');
// si l'utilisateur tape 12 au clavier, le résultat stocké est "12", une chaîne de caractère

console.log(number1 + 10);
// JS détermine que number1 est une chaîne, donc l'opérateur + est la concaténation, pas l'addition
// et la valeur 10 est automatiquement convertit en "10"
// résultat : la chaine de caractère "1210" au lieu de l'entier 22
// Il est possible de convertir des valeurs dans d'autres types avec Number, String, parseInt, etc.



// Récupérer un élément HTML
<p class="introduction">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>

<div id="chapeau">
  <p class="important">
    Contenu important
  </p>
</div>

// Avec getElementById()
var elementChapeau = document.getElementById('chapeau')

// Avec querySelector()
var elemeNtChapeau = document.querySelector('#chapeau')

// Avec querySelectorAll()
var elements = document.querySelector('#chapeau, .introduction');
//elements vaut NodeList [ <p.introduction>, <div#chapeau> ]
var introduction = elements[0]; // <p.introduction>
var chapeau = elements[1]; // <div#chapeau>

// Modifier le contenu d'un élément
// Ajouter du contenu texte
element.textContent = 'Hello!';

// Ajouter du contenu HTML
element.innerHTML = '<strong>Hello!</strong>';

// Modifier les attributs d'un élément
// Récupérer l'élément...
var element = document.getElementById('link');

// ...puis ajouter des attributs
element.id = 'link-contact';
element.href = 'https://oclock.io';
element.className = 'navigation-link';

// Créer un élément
var element = document.createElement('div');

// Ajouter au DOM:
// Création
var item = document.createElement('li');
// Élément du DOM
var list = document.querySelector('ul');
// Ajout de l'élément au DOM
list.appendChild(item);


// Les objets sont très flexibles
var player = {
  name: 'Link',
  alive: true,
  level: 3,
  inventory: [
    'sword',
    'shield',
    'boomerang',
  ],
  move: function() {
    // ...
  }
};


// Exécuter quelque chose suite à un événement
// Lors d'un clic, d'un envoi de formulaire, d'une pression sur une touche du clavier...

// event : 'click', 'submit', 'keyup', 'DOMContentLoaded'...
// handler : fonction exécutée quand l'événement survient
element.addEventListener(type, handler);
En prenant la situation suivante

<button id="change">Change le résultat</button>
<div id="resultat">aucun</div>
// fonction exécutée lorsque l'événement se produira - communément appelée 'handler'
function changeResultat() {
  var resultat = document.querySelector('#resultat');
  resultat.textContent = 'nouveau résultat';
}

var boutonAjouter = document.querySelector('#ajouter');

// on ajoute un écouteur d'événement à notre bouton, il écoute le clic
boutonAjouter.addEventListener('click', changeResultat);
Exécuter quelque chose après un certain temps
<div id="resultat">aucun</div>
function changeResultat() {
  var resultat = document.querySelector('#resultat');
  resultat.textContent = 'nouveau résultat';
}

// la fonction 'changeResultat' sera exécutée au bout 3000ms ou 3 secondes
setTimeout(changeResultat, 3000);

div=["text"]

// --------------------------------------------- //
// *************** MODULES JS ***************** //

// Utilité d'un module
// Un programme s'organise naturellement en thématiques : gérer un compte utilisateur, afficher des notifications à l'écran, 
// réaliser un calcul de score dans un jeu, etc. Pour gagner en lisibilité, 
// faciliter l'évolution du code et éviter les conflits de nommage, chaque thématique peut être isolée des autres grâce à un module.
// L'application JS en entier peut également être considérée comme étant un module en soi 
// (une page web pouvant très bien faire intervenir plusieurs applications JS).




// ***Créer un module****/
// Il existe plusieurs manières de formaliser un module dans le code. La plus simple consiste à utiliser un objet.

// Un objet JS peut contenir des clés, auxquelles sont associées des valeurs. 
// Ces valeurs peuvent être de n'importe quel type (number, string, etc.),
//  y compris des function. Ces fonctions peuvent alors être appelées, comme n'importe quelle autre fonction.

// Quand une valeur est d'un type autre que function, on parle de propriété de l'objet ; 
// quand une valeur est une function, on parle de méthode de l'objet.

// Une bonne pratique pour structurer son code consiste à rassembler les variables 
// (propriétés) et fonctions (méthodes) qui ont trait au même sujet dans un objet, qu'on considère être un module.

// Exemple de module :
var module = {
  propriete: 'Valeur',
  methode: function() {}
};



// Pour une application JS, et par convention, on aura tendance à nommer le module app,
//  et à y inclure une méthode init() qui sert de « point d'entrée » dans le module : init contient tous les 
//  traitements qui « lancent » l'application, par exemple initialiser les valeurs, les écouteurs d'évenements, lancer un timer, etc.

// Exemple d'application :
var app = {
  init: function() {
    console.info('Initialisation');
    app.name = 'Big Brother';
    app.ecouterEvenements();
  },
  
  ecouterEvenements: function() {
    window.addEventListener('click', app.reagir);
  },
  
  reagir: function() {
    console.log(app.name + ' > ' + 'un clic est survenu');
  }
};

// On lance l'application :
app.init(); // dans l'objet `app`, on exécute la fonction (méthode) stockée dans la clé `init`
//Il est courant d'associer l'exécution du point d'entrée init à un écouteur d'événement sur le chargement du DOM :

// Une fois le DOM chargé, la méthode init de l'objet app est exécutée :
document.addEventListener('DOMContentLoaded', app.init);
// Cette façon de faire n'est pas obligatoire : si vous placez le chargement du <script> en bas du <body>, il n'y a pas besoin de le faire !



// ******* Définitions *******//

Array.length
// La propriété length (longueur) est un entier non-signé de 32 bits qui indique le nombre 
// d'éléments présents dans le tableau. Elle est toujours supérieure au plus grand indice du tableau.


document.
// Permet de demander JS de donner le doucment entier demandé, en loccurence body (plus bas)

ctx
// contexte

init
// nom standard d'une fonction qui permet d'initialiser des choses

setTimeout(() => {
}, timeout);
// permet de demander à JS execute moi une certaine fonction
// a chaque fois qu'un certain delay que je demande


// canvas
//imaginer le canvas comme une grille
//avec pour X le nombre de horizontal, et y en nombre vertical ( a là touché-coulé):


// Syntaxe fillRect
void ctx.fillRect(x, y, largeur, hauteur);
// x
// L'ordonnée x des coordonnées du point de départ du rectangle.
// y
// L'abscisse y des coordonnées du point de départ du rectangle.
// largeur
// La largeur du rectangle.
// hauteur
// La hauteur de rectangle.


//SESSIONS
// Retrouver des données qui sont en POST :
$_POST['username']) && isset($_POST['password']))

// $_POST est une variable super globale ( accessible partout)
// c'est php qui rend cette variable globale, pas l'utilisateur


// on appelle ce genre tableau un tableau multidimensionnel
$users = [
  "Arthur" => [
    "pass" => 'kaamelott',
    "data" => [
      "role" => 'Roi de Bretagne',
      "age" => 37,
      "gimmick" => 'à la volette'
    ]
  ],

  //Quand on créer un dossier template il n'y a que du contenu html dedans à require/include
  //dans inc on mettre les formules php à appliquer


// Exemple UDEMY du serpent CANVAS

window.onload
// fonction qui permet de charger le contenu au demarrage de la page

// window.onload = function() {

// var canvas;
// var ctx;
// var delay = 1000;
// var xCoord = 0;
// var yCoord = 0;
// init();
// refreshCanvas

// function init() {

//   canvas = document.createElement('canvas');
//   canvas.width = 900;
//   canvas.height = 600;
//   canvas.style.border = "1px solid";
//   document.body.appendChild(canvas);
//   ctx = canvas.getContext('2d');
//   refreshCanvas();
  
  
// }

// function refreshCanvas() {

//   xCoord += 2;
//   yCoord += 2;
//   ctx.clearRect(0,0, canvas.width, canvas.height);
//   ctx.fillStyle = "#ff0000";
//   ctx.fillRect(xCoord , yCoord, 100, 50 );
//   setTimeout(refreshCanvas,delay);

//   }

// }