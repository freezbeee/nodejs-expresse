import { poserUneQuestion } from "../tool/tool.js";




export class Ihm {
    constructor(){
        this.x
        this.y
        this.mainTable = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
    }
    
    async menu(){
        console.log("##-----##--########--###---###---##--########--#---#");
        console.log("###---###--#------#--#--#--#--#--##--#------#--##--#");
        console.log("##-#-#-##--#------#--###---###---##--#------#--#-#-#");
        console.log("##--#--##--#------#--##----#-----##--#------#--#--##");
        console.log("##-----##--########--#-#---#-----##--########--#---#");
        let player = 1
        let endGame = false
        this.afficheTable()
        while(!endGame){
             let isOk = false
             while(!isOk){
            console.log('choix de le position');
            this.x =  await poserUneQuestion('merci de choisir la colone joueur ' + player)
            console.log('---------------------------------------------------');
            this.y =  await poserUneQuestion('merci de choisir la ligne joueur ' + player)
             isOk = this.check(this.x,this.y,this.mainTable)
             if (!isOk){ console.log("/////position non valid\\\\\\")}
            }
            this.mainTable[this.x-1][this.y-1]= player 
            this.afficheTable()
            endGame = this.verifEnDGame(this.mainTable)
            if(endGame){
                console.log('gg au joeur' + player + "tu as gagner");
            }
            if(player===1){
                player = 2
            } else player =1}
        
        
        
        
        
        
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
    
     check(x,y,tableMorpion){
        if (x >= 1 && x <= 3 && y >= 1 && y <= 3 && tableMorpion[x-1][y-1] === 0){
        return true
       } else {
         return false
        }


       
       }
    verifEnDGame(tab){
        for(let i = 0; i < tab.length; i++){
            if(tab[i][0] === tab[i][1] && tab[i][0] === tab[i][2] && tab[i][0]) return true
            if(tab[0][i] === tab[1][i] && tab[0][i] === tab[2][i] && tab[0][i]) return true
           
        }
        if(tab[0][0] === tab[1][1] && tab[0][0] === tab[2][2] && tab[0][0]) return true
        if(tab[2][0] === tab[1][1] && tab[2][0] === tab[0][2] && tab[2][0]) return true
        return false
    }
}

















