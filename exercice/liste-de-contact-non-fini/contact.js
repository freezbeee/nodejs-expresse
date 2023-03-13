const express = require('express')

const contact = express()

const dataContact = [
//   {  id : -1,
//    nom : "" ,
//     prenom : "" ,
//     telephone : "" ,
//     mail : ""



// }
]

contact.use(express.json())







contact.listen(3000,function(){
    console.log('contact.js ecoute sur port 3000');
})


// tous mes contact
contact.get('/contact',function(req,res){
    res.json(dataContact)
   
})

// recupe par id



// ajout
contact.post('/add',(req,res) => {
    // res.send('renvoie de data')
    dataContact.push(req.body)
    res.json(req.body)
    // res.json(req.headers)
})

