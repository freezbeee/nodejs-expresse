

import {  readFileSync, writeFileSync } from "fs"
import { AppClient } from "../client/appClient.js"

import { Commande } from "./comande.js"

export class AppComande {
    constructor() {
        this.commandes = []
        this.compteur = 0
        this.file = "commande.json"
    }

    read(){
        const contenu = readFileSync(this.file).toString()
        this.commandes = JSON.parse(contenu)
        this.compteur = (this.commandes[this.commandes.length-1] != undefined) ? this.commandes[this.commandes.length-1].id : 0
    }

    write(){
        writeFileSync(this.file, JSON.stringify(this.commandes))
    }

  


    //Méthode création commande
        createcommande(client,produitsListe){
        console.log(client);
        const clientCherche = new AppClient()
        const trouver = clientCherche.findclientById(parseInt(client))
        console.log(trouver);
        console.log(clientCherche)
        // if(client == clientCherche.findclientById(client) ){
            // console.log("coucou");
            client = clientCherche
            const commande = new Commande(++this.compteur,trouver,produitsListe)
            this.commandes.push(commande)
            this.write()
        // } 
    }

    // Méthode recup commande par id
    findcommandeById(id){
        return this.commandes.find(t => t.id == id)
    }

   

 

   

   
}