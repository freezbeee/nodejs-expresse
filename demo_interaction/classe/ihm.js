import { poserUneQuestion } from "../tool/tool.js";

export class Ihm {
    constructor(){
        this.personne = []
    }

    async menu(){
        let choix;
        do {
            console.log("1--- ajout d'une personne");
            console.log("2--- voir ma liste");
            console.log("0--- Quiter");
            choix = await poserUneQuestion('merci de faire un choix : ')
            switch(choix){
                case "1" :
                    const nom = await poserUneQuestion('choix du nom : ')
                    const prenom = await poserUneQuestion('choix du prenom : ')
                    this.personne.push({nom : nom, prenom : prenom})

                    break
                case "2" :
                this.personne.forEach (a => {
                    console.log(`Nom : ${a.nom}, Prenom : ${a.prenom}`);
                })
               
            }

        } while(choix != '0')
    }
}