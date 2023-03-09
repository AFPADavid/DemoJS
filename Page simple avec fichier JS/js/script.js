document.addEventListener("DOMContentLoaded", function() {

  // Récupérer les éléments de la page
  const alertButton = document.querySelector("#alert-button");
  const consoleButton = document.querySelector("#console-button");
  const executeButton = document.querySelector("#execute-button");
  const consoleInput = document.querySelector("#console-input");

  // Ajouter des écouteurs d'événements aux boutons
  alertButton.addEventListener("click", function() {
    alert('Hello world!');
  });

  consoleButton.addEventListener("click", function() {
    console.log(consoleInput.value);
  });

  executeButton.addEventListener("click", handleClick);

  // Exemple de fonction qui est exécutée au clic d'un bouton
  function handleClick() {
    console.log("Le bouton a été cliqué !");
  }


  /*
  
  Dans ce code, nous avons récupéré chaque élément de la page à l'aide de la méthode querySelector() et nous avons stocké ces éléments dans des variables pour une utilisation ultérieure.

  Ensuite, nous avons ajouté des écouteurs d'événements aux boutons à l'aide de la méthode addEventListener(). La syntaxe est la suivante : élément.addEventListener(nom de l'événement, fonction à exécuter).

  Nous avons également remplacé l'attribut "onclick" du bouton "Exécuter la fonction" par une référence à la fonction handleClick().

  En utilisant des écouteurs d'événements, nous avons séparé la logique de notre code JavaScript de la structure HTML de la page, ce qui rend notre code plus modulaire et plus facile à maintenir.

  Si vous souhaitez exécuter le code JavaScript lorsque le DOM est chargé, vous pouvez utiliser un écouteur d'événements "DOMContentLoaded". Voici comment vous pouvez mettre à jour votre code en ajoutant un écouteur d'événements "DOMContentLoaded" :

  Dans ce code, nous avons enveloppé tout notre code JavaScript à l'intérieur d'un écouteur d'événements "DOMContentLoaded". Cela garantit que notre code ne sera exécuté qu'une fois que le DOM est chargé, c'est-à-dire que tous les éléments de la page sont disponibles.

  Notez que le code doit être inclus en bas de la page, juste avant la fermeture de la balise body. Si le script est inclus dans l'en-tête de la page, l'événement "DOMContentLoaded" ne sera pas déclenché car le DOM n'aura pas encore été chargé.








  */

});
