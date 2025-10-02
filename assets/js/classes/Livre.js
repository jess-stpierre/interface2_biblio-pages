// imports

import BoiteModale from "./BoiteModale.js";

// class Livre
class Livre {
  //variables privees
  #conteneurHTML;
  #image;
  #titre;
  #prix;
  #livreHTML;
  #boiteModaleHTML;

  //variables publique
  livre;

  // constructor
  constructor(conteneurHTML, image, titre, prix, livre, boiteModaleHTML) {
    this.#conteneurHTML = conteneurHTML;
    this.#image = image;
    this.#titre = titre;
    this.#prix = prix;
    this.#boiteModaleHTML = boiteModaleHTML;

    this.livre = livre;

    this.#livreHTML;
  }

  /**
   * methode injecterHTML: va ajouter un nouveau livre a la page si il fais parti de la categorie selectionner
   * Va aussi instancier une boite modale si l'utilisateur clique sur le livre
   */
  injecterHTML() {
    const gabarit = `
            <div class="livre">
                <img src="${this.#image}" alt="Photo du livre: ${this.#titre}">
                <h3>${this.#titre}</h3>
                <div>
                    <h4>${this.#prix} $ </h4>
                    <button>Ajouter</button>
                </div>
            </div>
        `;
    this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
    this.#livreHTML = this.#conteneurHTML.lastElementChild;

    new BoiteModale(this.#boiteModaleHTML, this.#livreHTML, this.livre);

  }
}

// exports
export default Livre;
