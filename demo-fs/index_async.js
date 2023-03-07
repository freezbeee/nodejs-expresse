const fs = require('fs')


// demo node js fs (async read)

// let in_data;

// fs.readFile('./fn_input.txt', function(err,data){
//     if(err) return console.error(err)
//     in_data = data
//     console.log('async input file content :'+ in_data);

// })

// console.log('fin de programme');




// demo node js fs (async write)

let out_data = 'Output line 1.\r\noutput line 2.\r\n output line 3. \r\n'

fs.writeFile('./async_output.txt', out_data ,function(err){
    if(err) return console.error(err)
   
    console.log('async output file content :'+ out_data);

})

console.log('fin de programme');