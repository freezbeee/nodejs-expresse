const express = require('express')


const app = express()
const data = []
// mettre le midleware en haut
// app.use(function (req,res,next) {
//     console.log(Date.now());
//     next()
// })
app.use(express.json())


app.get('/',function(req,res){
    res.send('hello world')
    // res.json(req.headers)
})


app.get('/data',function(req,res){
    res.json(data)
   
})


// app.get('/data/:nomparams',function(req,res){
//     // res.end(req.params.nomparams)
//     // res.json(req.headers)
// })

app.get('/data/:id',function(req,res){

    res.send(data[req.params.id])

})


app.post('/',(req,res) => {
    // res.send('renvoie de data')
    data.push(req.body)
    res.json(req.body)
    // res.json(req.headers)
})

app.all('/secret',(req,res) => {
    res.send('cette endroit est secret')
    // res.json(req,headers)
})



app.listen(3000,function(){
    console.log('app.js ecoute sur port 3000');
})