function makanTerusRekursif(waktu) {
    if (waktu <= 0) {
        return 0;
    }
    else {
        var modifWaktu = waktu - 15;
        return 1 + makanTerusRekursif(modifWaktu);
    }
}
  
// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0


// waktu 0 -> 0
// waktu 0 < waktu <= 15 -> 1
// 100 - 15
// 90-15, 75-15, 60-15, 45-15, 