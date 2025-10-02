// imports
import Livre from "../classes/Livre.js";

// class Filtres
class Filtres {
  // variables privees
  #filtreCategorie;
  #livreEnvoyer = [];
  #boiteModaleHTML;

  // variables publique
  livresHTML;

  /**
   * Constructor(): Vas initialiser tout ce quon a besoin sur la page
   * @param {*} filtreCategorie : un tableaux de chaque categorie dans la page
   * @param {*} livresHTML : le HTML du conteneur des livres
   * @param {*} livres : la liste de livres
   * @param {*} boiteModaleHTML : le HTML du conteneur de la boite modale
   */
  constructor(filtreCategorie, livresHTML, livres, boiteModaleHTML) {
    this.#filtreCategorie = filtreCategorie;
    this.livresHTML = livresHTML;
    this.#boiteModaleHTML = boiteModaleHTML;

    // Creer une liste de la class livre
    livres.forEach(
      function (livre) {
        this.#livreEnvoyer.push(
          new Livre(
            livresHTML,
            livre.image,
            livre.titre,
            livre.prix,
            livre,
            this.#boiteModaleHTML
          )
        );
      }.bind(this)
    );

    //pour chaque categorie dans la liste ont regarde quel sorte de categorie c'est, et rajoute une possibiliter de cliquer pour changer la categorie
    filtreCategorie.forEach(
      function (element) {
        if (element.textContent === "Tous")
          element.addEventListener(
            "click",
            this.#FiltreTous.bind(this, element)
          );
        else if (element.textContent === "Nouveautés")
          element.addEventListener(
            "click",
            this.#FiltreNouveautes.bind(this, element)
          );
        else {
          element.addEventListener(
            "click",
            this.#FiltreCategorie.bind(this, element, element.textContent)
          );
        }
      }.bind(this)
    );

    //puisque la categorie par default est "Nouveautes"
    this.#FiltreNouveautes(filtreCategorie[1]);
  }

  /**
   * FiltreNouveautes() : afficher un livre sur la page si il est dans la section Nouveaute
   * @param {*} element : represent un des livres
   */
  #FiltreNouveautes(element) {
    this.livresHTML.textContent = "";
    this.#EnleveSousLigne();

    element.classList.toggle("sousLigne");

    this.#livreEnvoyer.forEach(
      function (livre) {
        if (livre.livre.nouveaute === true) {
          livre.injecterHTML();
        }
      }.bind(this)
    );
  }

  /**
   * FiltreTous() : afficher tous les livres
   * @param {*} element : represent un des livres
   */
  #FiltreTous(element) {
    this.livresHTML.textContent = "";
    this.#EnleveSousLigne();
    element.classList.toggle("sousLigne");
    this.#livreEnvoyer.forEach(
      function (livre) {
        livre.injecterHTML();
      }.bind(this)
    );
  }

  /**
   * FiltreCategorie(element, category): Va afficher les livres qui appartiennent a la categorie dans les parametres
   * @param {*} element : represent un des livres
   * @param {*} category : representent la categorie qui a ete cliquer
   */
  #FiltreCategorie(element, category) {
    this.livresHTML.textContent = "";
    this.#EnleveSousLigne();
    element.classList.toggle("sousLigne");
    this.#livreEnvoyer.forEach(
      function (livre) {
        if (livre.livre.categorie === category) {
          livre.injecterHTML();
        }
      }.bind(this)
    );
  }

  /**
   * Va enleve le sous lignage de toute les titre de categories
   */
  #EnleveSousLigne() {
    this.#filtreCategorie.forEach(function (element) {
      element.classList.remove("sousLigne");
    });
  }
}

//exports
export default Filtres;
