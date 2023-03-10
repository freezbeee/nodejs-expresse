import { Client } from "./client.js"
import {  readFileSync, writeFileSync } from "fs"

export class AppClient {
    constructor() {
        this.clients = []
        this.compteur = 0
        this.file = "client.json"
    }

    read(){
        const contenu = readFileSync(this.file).toString()
        this.clients = JSON.parse(contenu)
        this.compteur = (this.clients[this.clients.length-1] != undefined) ? this.clients[this.clients.length-1].id : 0
    }

    write(){
        writeFileSync(this.file, JSON.stringify(this.clients))
    }

  


    //Méthode création client
    createclient(nom,prenom,telephone){
        const client = new Client(++this.compteur,nom,prenom,telephone)
        this.clients.push(client)
        this.write()
    }

    // Méthode recup client par id
    findclientById(id){
        console.log(this.clients.find(t => t.id == id))
        return this.clients.find(t => t.id == id)
    }

   

 

   

   
}