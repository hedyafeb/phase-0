function checkAB(num) {
    // hapus space
    // var noSpace = '';
    // // var result = false;
    // for (var i=0; i<num.length; i++) {
    //     if (num[i] !== ' ') {
    //         noSpace += num[i];
    //     }
    // } 

    // looping define location of every a || b
    for (var j=0; j<num.length; j++) {
        if (num[j] === 'a' || num[j] === 'b') {
            // console.log(num[j], num[j+4]);
            // untuk setiap ditemukan a || b, define index+3
            var plusThree = num[j+4];
            return plusThree === 'a' || plusThree === 'b'; 
            // var result = true;
        } 
    }
    // klo di awal set semua jd false gmn? Ga bisa.. tp kenapa?
    // return result;
    return false;
}
  
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
console.log(checkAB('i ms bicka')); //  true
console.log(checkAB('bacna and meat')); // true

/*
- spasi diilangin
- jarak === 3
- ga ada a & b -> false

hilangin spasi
looping noSpace[j]
    if noSpace[i] === a || b
        var plusThree = noSPace[i + 3]
            if plusThree === a || b
            return true
            break
    


kalau tidak ada sama skali
kalau hanya 1 -> ga perlu
kalau ada 2, tp jarak tidak 3
kalau ada 2. dan jarak 3        
*/
