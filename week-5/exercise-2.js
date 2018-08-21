// NAIK ANGKOT
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result = [];

    if (arrPenumpang.length === 0) {
        return result;
    }
    else {
        for (var i=0; i<arrPenumpang.length; i++) {
            var obj = {};

            // penumpang: 
            obj.penumpang = arrPenumpang[i][0];

            // naikDari: 
            obj.naikDari = arrPenumpang[i][1];
            
            // tujuan:
            obj.tujuan = arrPenumpang[i][2];

            // bayar:
            var indexOfTujuan = rute.indexOf(obj.tujuan);
            var indexOfNaik = rute.indexOf(obj.naikDari);
            var selisih = indexOfTujuan - indexOfNaik;
            obj.bayar = 2000 * selisih;
            
            result.push(obj);
        }
    return result;
    }
}
  
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]


/*
jarak index dari 2 ke 1
* 2000

*/