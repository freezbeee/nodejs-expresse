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
        let player = 1
        let endGame = false
        this.afficheTable()
        while(!endGame){
            console.log('choix de le position');
            let x =  await poserUneQuestion('merci de choisir la ligne : ')
            console.log('---------------------------------------------------');
            let y =  await poserUneQuestion('merci de choisir la colonne : ')
            this.mainTable[x-1][y-1]= player 
            if(player===1){
                player = 2
            } else player =1
            this.afficheTable()
        }
        
        
        
        
        
        
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

















