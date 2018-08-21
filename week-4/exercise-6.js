function hitungHuruf(kata) {
    // SPLIT KATA
    var kataBaru = kata + ' '
    var array = [];
    var temp = '';
    for (var i=0; i<kataBaru.length; i++) {
        // console.log(kata[i]);
        if (kataBaru[i] !== ' ') {
            temp += kataBaru[i];
        }
        else {
            array.push(temp);
            temp = '';
        }
    }
    // console.log(array);

    
    var repeatHitung = [];
    for (var i=0; i<array.length; i++) {
        repeatHitung.push(jumlahUlang(array[i]));
        
    }
    return array[repeatHitung.indexOf(Math.max(...repeatHitung))];
}
  


function jumlahUlang(str) {
    var repeatTimes = 0;
    var hurufChecked = [];
    for (var i=0; i<str.length; i++) {
        // console.log(str.indexOf(str[i]), i+1 );
        if (hurufChecked.indexOf(str[i]) === -1) {
            hurufChecked.push(str[i]);
        
            if (str.indexOf(str[i], i+1) !== -1) {
                repeatTimes += 1;
            }
        }
    }
    return repeatTimes;
    
}






// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau


