const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

// const expr1 = "0010101010   0000000010   0010111010   0010111010   0000111111
    // ********** 0000101111   0000111111   0000101110   0010111010   0000111010";

// const expr1 = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";

function decode(expr) {
    // console.log('10-------------------', expr);
    let result = '';
    
   
for (let j = 0; j < expr.length; j = j +10) {
    let decodeWordsMors = '';
    let decodeSimbol = '';
    let simbolTwo = '';

    let simbol = expr.substr(j, 10);
    // console.log('20 /////////', simbol);

        if (simbol === '**********') {
            // console.log('15 *****////', simbol);
            // console.log('16 *****////', decodeWordsMors);
            result = result + ' ';
            // decodeWordsMors = '';
        } else {
                for (let i = 0; i < 10; i = i + 2) {
            // console.log(25, simbolTwo);
            simbolTwo = simbol.substr(i, 2);
            // console.log(30, simbolTwo);
            // simbol = simbol.substr(i+2,10);
            // console.log(35, simbol);

    if (simbolTwo === '10') {
        decodeSimbol = '.';
        } else if (simbolTwo === '11') {
             decodeSimbol = '-';
            } else if (simbolTwo === '00') {
                decodeSimbol = '';
                };

    //  console.log(40, decodeSimbol);    
     decodeWordsMors = decodeWordsMors + decodeSimbol;


      
        
    };
        };

        // console.log(50, decodeWordsMors);

        if (MORSE_TABLE[decodeWordsMors] !== undefined) {
              result = result + MORSE_TABLE[decodeWordsMors];
        }

                                  


        //  console.log(60, result);


};
return result;
}



// decode(expr1);

module.exports = {
    decode
}

// 10 stands for dot(.), 11 stands for dash(-).



        // const result = "hello world";