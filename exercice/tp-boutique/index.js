import express from "express"
import { AppClient } from "./classes/client/appClient.js"
import { AppComande } from "./classes/comande/appCommande.js"
import { AppProduit } from "./classes/produit/appProduit.js"


// Un objet pour gérer des client
const dataserviceClient = new AppClient()
const dataserviceProduit = new AppProduit()
const dataServiceCommande = new AppComande()


//Notre objet express
const api = express()

//Utilisation du middleware json
api.use(express.json())


api.post('/clients', (req,res) => {
    const {prenom, nom, telephone} = req.body
    if( prenom != undefined && nom != undefined && telephone != undefined ){
        dataserviceClient.createclient(prenom,nom,telephone)
        res.json({message : "client ajoutée"})
    }else {
        res.json({message : "Merci de transmettre un prnom , un nom et un telephone"})
    }
})


api.get('/clients', (req,res) => {
    res.json(dataserviceClient.clients)
})


api.get('/clients/:id', (req,res) => {
    const client = dataserviceClient.findclientById(req.params.id)
    if( client != undefined){
        res.json(client)
    }else {
        res.json({message : "client pas trouvé"})
    }
})

// produits
api.post('/produits', (req,res) => {
    const {titre, prix, stock} = req.body
    if( titre != undefined && prix != undefined && stock != undefined ){
        dataserviceProduit.createproduit(titre,prix,stock)
        res.json({message : "produit ajoutée"})
    }else {
        res.json({message : "Merci de transmettre un titre , un prix et un stock"})
    }
})

api.get('/produits', (req,res) => {
    res.json(dataserviceProduit.produits)
})


api.get('/produits/:id', (req,res) => {
    const produit = dataserviceProduit.findproduitById(req.params.id)
    if( produit != undefined){
        res.json(produit)
    }else {
        res.json({message : "produit pas trouvé"})
    }
})

// commande
api.post('/commandes', (req,res) => {
    const {client,produitsListe} = req.body
    if( client != undefined && produitsListe != undefined ){
        dataServiceCommande.createcommande(client,produitsListe)
        res.json({message : "produit ajoutée"})
    }else {
        res.json({message : "Merci de transmettre un titre , un prix et un stock"})
    }
})

api.get('/commandes/:id', (req,res) => {
    const commande = dataServiceCommande.findcommandeById(req.params.id)
    if( commande != undefined){
        res.json(commande)
    }else {
        res.json({message : "commande pas trouvé"})
    }
})
api.get('/commandes', (req,res) => {
    res.json(dataserviceProduit.commandes)
})


api.listen(3000, () => {
    dataserviceClient.read()
    dataserviceProduit.read()
    console.log("api magasin")
})
