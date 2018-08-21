// PELAJARI LAGI!!!:
// var test = 'Eedya Febritanti';
function changeVocals (str) {
    var abjad = 'aiueoAIUEO';
    var gantiAbjad = 'bjvfpBJVFP';
    var result = '';
    var baru = '';
    for (var i=0; i<str.length; i++) {
        baru = str[i]
        for (var j=0; j<abjad.length; j++) {
            if (str[i] === abjad[j]) {
                baru = gantiAbjad[j];
                // console.log(str[i]);
                // console.log(gantiAbjad[j]);
                
            }
        }
        // console.log(baru);
        
        result += baru;
        
    }
    return result;
}

// console.log(changeVocals(test));


        

function reverseWord (str) {
    var result = '';
    for (var i=str.length-1; i>=0; i--) {
        result += str[i];
    }
    return result
}
// option lain: return str.split('').reverse().join('')

// console.log(reverseWord(test));



function setLowerUpperCase (str) {
    var result = '';
    for (var i=0; i<str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
            
        }
        else if (str[i] === str[i].toLowerCase()){
            result += str[i].toUpperCase();
        }
    }
    return result;
}

// console.log(setLowerUpperCase(test));



function removeSpaces (str) {
    var result = '';
    for (var i=0; i<str.length; i++) {
        
        if (str[i] !== ' ') {
            result += str[i];
        }
        else {
            result += '';
        }
    }
    return result;
}

// console.log(removeSpaces(test));

// var test = 'Hedya Febritanti';
function passwordGenerator (name) {
    if (name.length >= 5) {
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
    }
    else {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }   
}

// console.log(passwordGenerator(test));

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'