import { writeFileSync, readFileSync} from "fs"

let tab = [{nom : "toto" , prenom : "tata"},{nom : "tito" , prenom : "tatu"}]


// transforeme obj en sting
writeFileSync("data.json", JSON.stringify(tab) )


let tabRecup = []
console.log("il y a rien" , tabRecup);
const contenu = readFileSync('data.json').toString()

// inverse de stringify
tabRecup = JSON.parse(contenu)
console.log("il y a un truc" , tabRecup);
console.log(tabRecup[0].nom);

