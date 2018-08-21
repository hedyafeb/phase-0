function digitPerkalianMinimum(angka) {
    var min = angka + 1; // sebaiknya diisi berapa?
    for (var i=1; i<=angka; i++) {
        // console.log(i);
        if (angka%i === 0) {
            var hasilMod = angka / i;
            // console.log(hasilMod, i);
            var gabung = String(hasilMod) + String(i);
            // console.log(gabung, gabung.length);
            if (gabung.length < min) {
                min = gabung.length;          
            }
        }
    }
    return min   
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2


/*
bikin var min = angka

24:  
if hasilMod === 0
    var hasilMod = 24/1
    var gabung = String(24) + String(i)
    var panjangGabung = gabung.length
    if gabung.length < min
        min = gabung.length


24%2, 24%3, 24%8=4, 24%5=1
1*24
2*12
3*8
4*6


*/