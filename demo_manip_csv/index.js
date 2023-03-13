import fs from "fs"
import LineByLine from "n-readlines"


const nom = 'toto'
const prenom = 'titi'


fs.appendFileSync('data.csv', `${nom};${prenom}\n`)
fs.appendFileSync('data.csv', `${nom};${prenom}\n`)


// lit un fichier line par line
const lineReader = new LineByLine("data.csv")

let line
while(line = lineReader.next()){
    // console.log(line);
    // console.log(lineReader.next());
    console.log(line.toString())
}



const tab = []
console.log("tab avant alout csv", tab);

const reader = new LineByLine("data.csv")
let myline
while(myline = reader.next()){
    const donnees = myline.toString().split(';')
    const contact = {nom : donnees[0], prenom : donnees[1]}
    tab.push(contact)
}
console.log("tab apres alout csv", tab);