// En JavaScript, let, var et const sont des mots-clés utilisés pour déclarer des variables. Cependant, il y a des différences importantes entre ces trois mots-clés.

// var est la façon originale de déclarer des variables en JavaScript, mais elle a été remplacée par let et const. var a une portée de fonction, ce qui signifie qu'une variable déclarée avec var à l'intérieur d'une fonction est visible partout à l'intérieur de cette fonction, y compris à l'extérieur des blocs {}. var permet également de redéclarer une variable sans générer d'erreur, ce qui peut parfois entraîner des erreurs difficiles à identifier.

// let est un mot-clé introduit dans ECMAScript 6 pour résoudre certains des problèmes liés à var. Une variable déclarée avec let a une portée de bloc, ce qui signifie qu'elle n'est visible que dans le bloc {} où elle est déclarée. De plus, let ne permet pas la redéclaration d'une variable dans le même bloc.

// const est également introduit dans ECMAScript 6 et fonctionne de la même manière que let en termes de portée de bloc. Cependant, une variable déclarée avec const ne peut pas être réaffectée après sa déclaration initiale. Cela signifie que la valeur de la variable reste constante tout au long du programme. Notez cependant que les propriétés d'un objet déclaré avec const peuvent être modifiées.

// En résumé, var est dépassé et doit être évité autant que possible. let est utilisé pour les variables dont la valeur est susceptible de changer et const est utilisé pour les variables dont la valeur ne doit pas changer tout au long du programme.



// Addition
let x = 5;
let y = 10;
let result = x + y;
console.log("Addition: " + result);

// Soustraction
let a = 20;
let b = 15;
let difference = a - b;
console.log("Soustraction: " + difference);

// Multiplication
let c = 5;
let d = 7;
let product = c * d;
console.log("Multiplication: " + product);

// Division
let e = 15;
let f = 3;
let quotient = e / f;
console.log("Division: " + quotient);

// Modulo
let g = 17;
let h = 5;
let remainder = g % h;
console.log("Modulo: " + remainder);

// Incrémentation
let i = 5;
i++;
console.log("Incrémentation: " + i);

// Décrémentation
let j = 10;
j--;
console.log("Décrémentation: " + j);


// Égalité stricte
let x = 5;
let y = "5";
if (x === y) {
  console.log("Égalité stricte: true");
} else {
  console.log("Égalité stricte: false");
}

// Égalité faible
let a = 10;
let b = "10";
if (a == b) {
  console.log("Égalité faible: true");
} else {
  console.log("Égalité faible: false");
}

// Différence stricte
let c = 5;
let d = "5";
if (c !== d) {
  console.log("Différence stricte: true");
} else {
  console.log("Différence stricte: false");
}

// Supériorité
let e = 10;
let f = 5;
if (e > f) {
  console.log("Supériorité: true");
} else {
  console.log("Supériorité: false");
}

// Infériorité
let g = 5;
let h = 10;
if (g < h) {
  console.log("Infériorité: true");
} else {
  console.log("Infériorité: false");
}

// Supériorité ou égalité
let i = 5;
let j = 5;
if (i >= j) {
  console.log("Supériorité ou égalité: true");
} else {
  console.log("Supériorité ou égalité: false");
}

// Infériorité ou égalité
let k = 10;
let l = 15;
if (k <= l) {
  console.log("Infériorité ou égalité: true");
} else {
  console.log("Infériorité ou égalité: false");
}


// Longueur d'une chaîne
let str = "Hello, world!";
let length = str.length;
console.log("Longueur de la chaîne: " + length);

// Concaténation de chaînes
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Nom complet: " + fullName);

// Recherche de sous-chaîne
let text = "The quick brown fox jumps over the lazy dog.";
let searchTerm = "fox";
if (text.includes(searchTerm)) {
  console.log("La chaîne contient '" + searchTerm + "'.");
} else {
  console.log("La chaîne ne contient pas '" + searchTerm + "'.");
}

// Extraction de sous-chaîne
let str2 = "Hello, world!";
let subStr = str2.substring(0, 5);
console.log("Sous-chaîne: " + subStr);

// Conversion en majuscules et en minuscules
let str3 = "Hello, world!";
let upperCase = str3.toUpperCase();
let lowerCase = str3.toLowerCase();
console.log("En majuscules: " + upperCase);
console.log("En minuscules: " + lowerCase);

// Remplacement de caractères
let str4 = "Hello, world!";
let replacedStr = str4.replace("world", "John");
console.log("Chaîne modifiée: " + replacedStr);




// Opérateurs arithmétiques
let a = 5;
let b = 3;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
console.log("Somme: " + sum);
console.log("Différence: " + difference);
console.log("Produit: " + product);
console.log("Quotient: " + quotient);
console.log("Reste: " + remainder);

// Opérateurs de comparaison
let c = 10;
let d = 5;
let e = 10;
console.log(c > d); // true
console.log(c < d); // false
console.log(c >= e); // true
console.log(c === d); // false
console.log(c !== e); // false

// Opérateurs logiques
let f = true;
let g = false;
console.log(f && g); // false
console.log(f || g); // true
console.log(!f); // false

// Opérateurs d'assignation
let h = 5;
h += 10; // équivalent à h = h + 10
console.log(h); // 15
h -= 3; // équivalent à h = h - 3
console.log(h); // 12
h *= 2; // équivalent à h = h * 2
console.log(h); // 24
h /= 4; // équivalent à h = h / 4
console.log(h); // 6

// Opérateurs de concaténation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"

// Opérateur ternaire
let age = 25;
let message = age < 18 ? "Vous êtes mineur" : "Vous êtes majeur";
console.log(message); // "Vous êtes majeur"



// Déclaration d'une fonction qui calcule la somme de deux nombres
function sum(a, b) {
  return a + b;
}

// Appel de la fonction avec deux paramètres
let x = 5;
let y = 10;
let result = sum(x, y);
console.log("Résultat de la fonction sum: " + result);

// Déclaration d'une fonction qui affiche un message dans la console
function showMessage(message) {
  console.log("Message: " + message);
}

// Appel de la fonction avec un paramètre
showMessage("Bonjour, tout le monde!");

// Déclaration d'une fonction qui calcule la factorielle d'un nombre
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Appel de la fonction avec un paramètre
let num = 5;
let fact = factorial(num);
console.log("Factorielle de " + num + ": " + fact);



// Boucle for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Boucle while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
//La boucle while continue à s'exécuter tant que la condition est vraie. Dans l'exemple ci-dessus, la boucle commence avec i initialisé à 0. La condition de la boucle est i < 5, ce qui signifie que la boucle continuera à s'exécuter tant que i est inférieur à 5. À chaque itération de la boucle, i est incrémenté de 1 à l'aide de i++.

// Boucle do-while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
//La boucle do-while est similaire à la boucle while, mais la condition est vérifiée à la fin de chaque itération de la boucle plutôt qu'au début. Cela signifie que le code à l'intérieur de la boucle sera exécuté au moins une fois, même si la condition est fausse dès le départ. Dans l'exemple ci-dessus, la boucle commence avec j initialisé à 0. Le code à l'intérieur de la boucle est exécuté une première fois avant que la condition j < 5 ne soit vérifiée. À chaque itération de la boucle, j est incrémenté de 1 à l'aide de j++, et le code à l'intérieur de la boucle est exécuté tant que la condition est vraie.


// Déclaration d'un tableau
let fruits = ["pomme", "banane", "orange", "kiwi"];
console.log(fruits);

// Accès aux éléments du tableau
console.log(fruits[0]); // "pomme"
console.log(fruits[2]); // "orange"

// Modification d'un élément du tableau
fruits[1] = "fraise";
console.log(fruits);

// Ajout d'un élément à la fin du tableau
fruits.push("ananas");
console.log(fruits);

// Suppression du dernier élément du tableau
fruits.pop();
console.log(fruits);

// Ajout d'un élément au début du tableau
fruits.unshift("raisin");
console.log(fruits);

// Suppression du premier élément du tableau
fruits.shift();
console.log(fruits);

// Recherche d'un élément dans le tableau
console.log(fruits.indexOf("orange")); // 1

// Copie d'un tableau
let copyFruits = fruits.slice();
console.log(copyFruits);

// Boucle à travers un tableau
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
