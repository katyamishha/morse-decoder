const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = '';
    let parts = expr.split(/(.{10})/).filter(O => O);
    /*console.log(parts);*/

    for (let i = 0; i < parts.length; i++) {
        if (parts[i] === '**********') {
            result += ' ';
            continue;
        }
        let element = parts[i].split(/(.{2})/).filter(O => O);
        let alph = '';
        for (let j = 0; j < element.length; j++) {
            if (element[j] == '10') {
                alph += '.'
            } else if (element[j] == '11') {
                alph += '-'
            } else if (element[j] == '00') {
                alph += ''
            }
        }
        result += (MORSE_TABLE[alph]);
    }
    return result;
}

module.exports = {
    decode
}