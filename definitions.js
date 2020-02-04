//La méthode setTimeout(), rattachée au mixin  
// WindowOrWorkerGlobalScope (et qui succède 
// à window.setTimeout()) permet de définir un « minuteur » 
// (timer) qui exécute une fonction ou un code donné après 
// la fin du délai indiqué
setTimeout

//floor pour arrondir, random opur generer un nombre e
Math.floor // Fonction native
var randomIndex = Math.floor(Math.random() * app.modelNames.length);

// Vous allez aborder une série d'exercices introduisant un certain nombre de fonctions et propriétés utiles pour des variables de type string et number.
// Commençons avec la fonction
parseInt().
// À quoi ça sert ?
// Cette fonction retourne en résultat un nombre en analysant une chaîne de caractères;
// Seul le premier nombre trouvé dans la chaîne de caractère est retourné;
// Si le premier caractère de la chaîne ne peut pas être converti en un nombre, la fonction retourne en résultat NaN (Not A Number);
// Exemple :
var texte1 = "Je suis une chaîne de caractère";
var texte2 = "9 février 2016";
parseInt(texte1); // Retourne NaN
parseInt(texte2); // Retourne 9

// L'intérêt principal est donc de pouvoir convertir un nombre écrit dans une chaîne de caractère de type string "10"
// en un vrai nombre de type number 10 sur lequel il est possible d'effectuer des opérations.
// C'est le cas quand vous récupérez une information de l'utilisateur avec prompt().

Remarque :

// Si vous essayez de convertir du texte qui ne peut pas être converti en type number, alors Javascript renverra la valeur NaN pour "Not a Number" :

var test1 = parseInt("1");
var test2 = parseInt("Je suis une chaîne de caractères");
// Ici test1 sera bien de type number et contiendra 1. La conversion est réussie.
// Et test2 sera aussi de type number mais contiendra NaN pour indiquer qu'il y a eu une erreur car la chaîne ne peut pas être convertie en nombre.
// Une division par zéro donnera aussi NaN.

//**** */

// Dans une chaîne de caractères, il peut être utile de 
// récupérer une partie du contenu avec la fonction slice().
// À quoi ça sert ?
slice() //récupère une partie d'une chaîne de caractères;
// la sélection du texte à extraire utilise la position des caractères dans la chaîne (le premier caractère étant à la position 0);
// la position de début est obligatoire, la position de fin est optionnelle et exclusive (le caractère correspondant ne sera pas sélectionné);
// si la position de fin n'est pas indiquée, tous les caractères jusqu'à la fin de la chaîne seront récupérés à partir de la position de début;
// il est possible de commencer par la fin de la chaîne de caractères en utilisant des chiffres négatifs;



// Conseil de greg : ctrl maj + F pour remplacer tous les mots

var maChaine = "Voici du texte";
maChaine.length; // Propriété qui récupère la longueur de la chaîne
maChaine.slice(0,1); // Fonction qui récupère le "v" dans la chaîne de caractère

var monNombre = 956;
monNombre.toString() // Fonction qui convertit 956 en "956"


//utilisez random() pour générer un nombre entier entre 0 et 10 
var result = Math.floor(Math.random()*10)

// Par défaut Math.random() génère un nombre décimal dans l'intervalle [0-1
//     [. Si vous voulez modifier cet intervalle, il va falloir ajouter un peu de code


// utilisez Math.max() pour récupérer le nombre le plus grand;
var var1 = 42
var var2 = 12
var var3 = 7
var var4 = 13
var var5 = 57
var result = Math.max(var1,var2,var3,var4,var5)

Math.min // Pour recuperer le nombre le plus petit

// récupérez le texte d'une longueur de 2 caractères à partir 11ème caractère dans texte1 
// affectez le texte obtenu dans extrait;
// concaténez extrait et texte2 dans cet ordre avec l'opérateur + et mettez le résultat dans concat;
var texte1 = 'Soleil flamboyant '
var texte2 = 'éther et mer rouge sang'

var extrait = texte1.substr(10,2);
var concat = extrait+texte2;

// Les constantes sont des variables qui ne changent jamais


// Définitions :
“surveiller les touches” => _addEventListener_ /
  “insérer dans la page” => _appendChild_ 
   “pour chaque” => _for .. in_ /
    “tant que” => _while_


  /* Votre ternaire */
result = var1 ? "C'est vrai" : "C'est faux"; /* ici */

//
write() //est une fonction native de Javascript qui s'applique à 
document 
//qui représente le squelette html de votre page web.

//tant que i est inférieure ou égale à 10:
//affichez avec document.write() les valeurs paires de i (voir l'astuce);
while(i <= 10) {
    
  document.write(i);
  i+=2;
}

// Recuperez le "un" a la place number
var tableau = ['je', 'suis', 'un', 'tableau', '!']
var result = tableau[2];

// var tableau = ['je', 'suis', 'un', 'tableau', '!']
// modifiez la troisième valeur du tableau par "intrus";
tableau[2] = "intrus";

// récupérez la longueur du troisième élément du tableau et affectez-la à longueur;
var tableau = ['paris', 'tokyo', 'strasbourg']
var longueur = tableau[2].length;

// Dans cet exercice, vous allez ajouter un élément à la fin d'un tableau en utilisant la méthode push().
Exemple :
var tab = ['banane','fraise','pomme'];
tab.push('kiwi'); // Ajoute "kiwi" à la fin du tableau
tableau[3] = "New York";

// OU on peut faire comme ça 
tableau.push('New York');

// Ajouter un element au debut de mon tableau
var tab = ['banane','fraise','pomme'];
tab.unshift('kiwi'); // Ajoute "kiwi" au début du tableau

//supprimer le dernier élément d'un tableau en utilisant la méthode pop().
tableau.pop();

// supprimer le premier élément d'un tableau en utilisant la méthode shift().
tableau.shift();


//vous allez convertir une chaîne de caractères en tableau avec split(). Ajoutez un espace
var texte = 'Voici du texte';
var tableau = texte.split(' ');

// Rajouter des tirets à mon tableau
var tableau = ['paris', 'tokyo', 'strasbourg']
var result = tableau.join('-');



// affectez la longueur de tableau à longueur;
// écrivez une boucle for comme dans la description de l'exercice;
var tableau = ['paris', 'tokyo', 'strasbourg']

var i;
var longueur = tableau.length;

for (i = 0; i < longueur; i++) {
    alert(tableau[i]);

}

//récupérez la valeur de la propriété resolution;
var ecran = {
  marque: 'SamSoule',
  annee: 2019,
  resolution: '1920x1080',
  prix: '400€'
}
var result = ecran.resolution;



// ecran est un objet, marque une propriété, et samsoule une clé de la proprieté
var ecran = {
  marque: 'SamSoule',
  annee: 2019,
  resolution: '1920x1080',
  prix: '400€'
}

// Pour ajouter une nouvelle propriété a mon objet
// ajoutez la propriété taille avec une valeur textuelle (ex: 23 pouces);
//déclarez la variable result et affectez le résultat de la nouvelle propriété à result;
var ecran = {
  marque: 'SamSoule',
  annee: 2019,
  resolution: '1920x1080',
  prix: '400€',
}


ecran.taille = '23pouces'; 
var result = ecran.taille;
alert(result);


// faire une boucle for in pour parcourir tous les elements de mon tableau a partir de l'index

var voiture = {
  marque : 'Bugatti',
  modele : 'Chiron',
  couleur : 'bleue',
  annee : 2016
}

for (var index in voiture) {
  alert(voiture[index]);
}

