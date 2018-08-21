function kaliTerusRekursif(angka) {
    var strAngka = String(angka);
    // console.log(strAngka.length);
    if (strAngka.length === 1) {
        return strAngka;
    }
    else {
        var result = 1;
        for (var i=0; i<strAngka.length; i++) {
            result *= Number(strAngka[i]);
        }
        return kaliTerusRekursif(result);
    }
}
  
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
console.log(kaliTerusRekursif(666)); // 6