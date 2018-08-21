function angkaPrima(angka) {
    if (angka > 1) {
        var jumlahDua = 0; 
        for (var i=angka; i>0; i--) {
            var bagi = angka % i; // prime number: angka % faktornya = 0
            if (bagi === 0) { 
                jumlahDua += 1;
            }
        }
    return jumlahDua === 2; // hanya ada 2, bisa dibagi diri sendiri & bagi 1
    }
    else if (angka <= 1) {
        return false;
    }
}

// TEST CASES
console.log(angkaPrima(0)); // true
console.log(angkaPrima(42)); // true
console.log(angkaPrima(-3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(1)); // false

/*
prima: 2,3,5,7,11,13
prima: hanya bisa dibagi angka itu dan 1

1,2 -> prime (mod === 0 ada brp)
3: 3%3 === 0, 3%1 === 0, 3%2 === 1 // 2
4: 4%4 === 0, 4%3 === 1, 4%2 === 0, 4%1 === 0 // 3
5: 5%5 === 0, 5%4 === 1, 5%3 === 2, 5%2 === 1, 5%1 === 0 // 2
6: 6%6 === 0, 6%5 === 1, 6%4 === 2, 6%3 === 0, 6%2 === 0, 6%1 === 0 // 4

var num = 0;
looping angka dibagi angka yg terus turun sampe bagi 1,
    if angka % i === 0
        num +=

if num === 2
    prime

*/