

//class Boite Modale
class BoiteModale{

    //varibales privees
    #boiteModaleHTML;
    #livreHTML;
    #livre;
    #elementHTML;

    //constructor
    constructor(boiteModaleHTML, livreHTML, livre){

        this.#boiteModaleHTML = boiteModaleHTML;
        this.#livreHTML = livreHTML;
        this.#livre = livre;
        this.#elementHTML;

        this.#livreHTML.addEventListener("click", this.#injecterHTML.bind(this));
    }

    /**
     * injecterHTML: vas ajouter le code HTML pour creer une boite modale quand l'utilisateur a cliquer sur un livre
     */
    #injecterHTML(){

        this.#boiteModaleHTML.textContent = "";

        const gabarit = `
            <div class="boite">
                <h2 class="fermer"> X </h2>
                <div class="contenuBoite">
                    <img src="${this.#livre.image}" alt="Photo du livre: ${this.#livre.titre}">
                    <div>
                        <h3>Titre: ${this.#livre.titre}</h3>
                        <h4>Auteur: ${this.#livre.auteur}</h4>
                        <h4>Editeur: ${this.#livre.editeur}</h4>
                        <h4>Pages: ${this.#livre.pages}</h4>
                        <h4>${this.#livre.description}</h4>

                    </div>
                </div>
            </div>
        `;

        this.#boiteModaleHTML.insertAdjacentHTML("beforeend", gabarit);
        this.#elementHTML = this.#boiteModaleHTML.lastElementChild;
        document.body.classList.add("pasScroll");

        this.#elementHTML.addEventListener("click", this.#fermer.bind(this));
    }

    /**
     * fermer(): pour fermer la boite modale et retourner sur la page principale
     */
    #fermer() {
        if(this.#elementHTML != null){
            this.#elementHTML.remove();
            document.body.classList.remove("pasScroll");
        }
    }
}

export default BoiteModale;