import { gsap } from "gsap";
// Quiz: Veuillez répondre aux questions ci-dessous. (1 heure) (+20 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. Vous avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE: C'est donner un nom court à une suite de cactère pour ne pas avoir à les réérir à chaque fois mais les appeler simplement par leur nom.

// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.
const firstName = "Victor";
// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.
let age = 18;
// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:
// - Balise HTML: input
// - Classe(s): card-input
// - Attribut(s):type="text"
// name="password"
// placeholder="Créer votre mot de passe"
// id="password-input"
// -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE: une Id est unique, une classe peut ètre appliqué à plusieur éléments

// -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE: Selecionner quelquechose dans le document html lier au document js

// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
// 7.1 Créez une variable appelée "cardContent".
// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.
const cardContent1 = document.querySelector("#card-1 .card-content");
// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
// 8.1 Utilisez la propriété   -> .classList <-   pour ajouter   -> .add("...") <-   la class "highlight" à l'élément HTML.
cardContent1.classList.add("highlight");
// -----------------------
// 9. Récupérez la valeur de l'attribut "placeholder"   -> .getAttribute("...") <-   de l'élément HTML <input> (ligne 17 du code HTML).
const cardInput = document.querySelector("#password-input");
cardInput.getAttribute("placeholder");
// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE: C'est une methode qui permet de surveiller si un action se passe sur un element selectionné et de faire une action si c'est le cas

// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
// 11.2 : Utilisez la méthode   -> .addEventListener("...", function() {...}) <-   sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
// 11.3 : Lorsqu'un.e utilisateurice clique sur le bouton, ajoutez/supprimez (toggle) la class "hide" de l'élément HTML <p> (ligne 29-31 du code HTML).
const cardBtn = document.querySelector("#card-btn");
cardBtn.addEventListener("click", function () {
  const cardContent2 = document.querySelector("#card-3 .card-content");
  cardContent2.classList.toggle("hide");
});
