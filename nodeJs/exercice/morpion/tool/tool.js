import readline from "readline"
import {stdin, stdout} from "process"


// creation d'une fonction pour recup la saisie dans la coonsole

export const poserUneQuestion = async (question) => {
    console.log(question);
    const readlineInterface = readline.createInterface({
        input : stdin,
        output : stdout
    })
    const result = await (await readlineInterface[Symbol.asyncIterator]().next()).value

    readlineInterface.close()
    return result
}

// let test = await poserUneQuestion('merci de saisir un text')
// console.log('vous avez saisi : ' +test );