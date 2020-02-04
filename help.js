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

//exemple
if (number > 0) {
  alert("C'est positif")

} else if(number < 0) {
  alert("C'est négatif")
  
} else {
  alert("C'est zero")
}

//vérifiez si le type de var1 est égal à "string";
if (typeof var1 === 'string'){
  alert("var1 est une chaîne de caractères");
  
} else { 
  alert("var1 n'est pas une chaîne de caractères");}

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
  