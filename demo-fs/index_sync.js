const fs = require('fs')


// demo node js fs (Sync read)

// let in_data = fs.readFileSync('./fn_input.txt')


// console.log('sync input file content :'+ in_data);



// console.log('fin de programme');


// demo node js fs (Sync write)


let out_data = "Output line 1.\r\noutput line 2.\r\n output line 3. \r\n"


fs.writeFileSync('./sync_output.txt', out_data)


console.log('sync output file content :'+ out_data);
console.log('sync output file content :'+ fs.readFileSync('./sync_output.txt')); //result identique



console.log('fin de programme');