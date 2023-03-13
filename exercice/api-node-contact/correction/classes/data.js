import { Contact } from "./contact.js"
import LineByLine from "n-readlines"
import fs, { writeFileSync } from "fs"

export class Data {
    constructor(){
        this.contacts = []
        this.compteur = 0
        this.fichier = 'data.csv'
    }

    ajouterContact(nom , prenom,telephone, email) {
       
       const contact = new Contact(++this.compteur, nom , prenom,telephone, email)
       this.contacts.push(contact)
        fs.appendFileSync(this.fichier,`${contact.id},${contact.nom},${contact.prenom},${contact.telephone},${contact.email}\n`)
    }

    recupContact(id){
        return this.contacts.find(c => c.id == id)
    }

    ecrire(){
        let content = ""
        this.contacts.forEach(contact =>{
            content += `${contact.id},${contact.nom},${contact.prenom},${contact.telephone},${contact.email}\n`

        })
        writeFileSync(this.fichier, content)
    }


    lire(){
        this.contacts = []
    const reader = new LineByLine("data.csv")
    let myline
    
    while(myline = reader.next()){
        const donnees = myline.toString().split(',')
        const contact = new Contact(donnees[0],donnees[1],donnees[2],donnees[3],donnees[4])
        // console.log(contact);
        this.contacts.push(contact)
        // console.log(this.contacts);
       
    }
    if (this.contacts.length != 0){
    this.compteur = this.contacts[this.contacts.length-1].id
    }
    }

    modifierContact(id, nom, prenom,telephone,email){
        const contact = this.recupContact(id)
        if(contact != undefined){
            contact.nom = nom
            contact.prenom = prenom
            contact.telephone = telephone
            contact.email = email
            this.ecrire()
            return true
        }
        return false
    }
    
    supprimerContact(id){
        const contact = this.recupContact(id)
        if(contact != undefined){
            this.contacts = this.contacts.filter(c => c.id != id)
            this.ecrire()
            return true
        }
        return false
    }
}