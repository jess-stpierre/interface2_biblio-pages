// Imports

import livres from "./data/livres.js";
import Filtres from "../classes/Filtres.js";

// variables globale

const livresHTML = document.querySelector(".livres");
const categoriesHTML = document.querySelectorAll(".categorie");
const boiteModaleHTML = document.querySelector(".boiteModale");

// functions

function initialiser() {
  new Filtres(categoriesHTML, livresHTML, livres, boiteModaleHTML);
}

// execution

initialiser();
