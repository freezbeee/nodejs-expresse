import { Produit } from "./produit.js"
import {  readFileSync, writeFileSync } from "fs"

export class AppProduit {
    constructor() {
        this.produits = []
        this.compteur = 0
        this.file = "produit.json"
    }

    read(){
        const contenu = readFileSync(this.file).toString()
        this.produits = JSON.parse(contenu)
        this.compteur = (this.produits[this.produits.length-1] != undefined) ? this.produits[this.produits.length-1].id : 0
    }

    write(){
        writeFileSync(this.file, JSON.stringify(this.produits))
    }


   
    createproduit(titre,prix,stock){
        const produit = new Produit(++this.compteur,titre,prix,stock)
        this.produits.push(produit)
        this.write()
    }

   
    findproduitById(id){
        return this.produits.find(t => t.id == id)
    }

   

 

   

   
}