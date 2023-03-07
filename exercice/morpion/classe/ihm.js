import { poserUneQuestion } from "../tool/tool.js";




export class Ihm {
    constructor(){
        this.mainTable = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
    }
    
    async menu(){
        
        console.log('choix de le position');
        let x =  await poserUneQuestion('merci de choisir la ligne : ')
        let y =  await poserUneQuestion('merci de choisir la colonne : ')
        this.mainTable[x-1][y-1]=1
        
        
        
        
        
        
    }
    afficheTable(){
    
    
        for(let i = 0; i< this.mainTable.length; i++ ){
            let aff = ""
            for(let j = 0; j< this.mainTable[i].length; j++ ){
                if(this.mainTable[i][j] === 0) {
                    aff += "| |"
                } else if (this.mainTable[i][j] === 1){
                    aff += "|X|"
                }else{
                    aff += "|O|"
                }
               
               
            }
            console.log(aff);
        }
    
    }
}

















