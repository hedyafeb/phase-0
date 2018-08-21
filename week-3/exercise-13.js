function targetTerdekat(arr) {
  var indexO = arr.indexOf('o');
  // var jarak = 0;
  var jarakTerdekat = arr.length; // kenapa? karena ini merupakan jarak terjauh
  // console.log(jarakTerdekat);

  if (arr.indexOf('x') === -1) {
    return 0;
  }
// cari semua posisi x, nanti tinggal dipilih yang paling deket
  for (var i=0; i<arr.length; i++) {
    if (arr[i] === 'x') {
      var jarakX = Math.abs(i - indexO);
      if (jarakX < jarakTerdekat) {
        jarakTerdekat = jarakX;
      }
    }
  }
  return jarakTerdekat;
}



// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat([' ', ' ', 'o', ' ', 'x', 'x', ' ', ' '])); // 2
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2



// CARA 2: SUPER RIBET!!!
// function targetTerdekat(arr) {
//   // kalau tidak ada x sama sekali, then return 0
//   if (arr.indexOf('x') === -1) {
//     return 0;
//   } else {
//
//     // hitung jarak dari o ke kanan:
//     var jarakKanan = 0;
//     for (var i=arr.indexOf('o'); i<arr.indexOf('x'); i++) {
//         jarakKanan += 1;
//     }
//
//     // hitung jarak dari o ke kiri:
//     // masalah di arr.indexOf('x') -> index yang diambil adalah index dimana x ditemukan pertama kali dari kiri!
//     // karena ke kiri tidak ditemukan x, jd jarakKiri ketambah terus.
//     // supaya cuma sampe x pertama dari kiri nya o:??
//     var jarakKiri = 0;
//     for (var i=arr.indexOf('o'); i>arr.indexOf('x'); i--) {
//       // supaya cuma sampe x pertama dari kiri nya o:
//         if (arr[i] !== 'x') {
//           jarakKiri += 1;
//         } else {
//           break;
//         }
//     }
//
//     // conditional pemilihan jarak yang paling sedikit
//     if (jarakKanan > jarakKiri) {
//       return jarakKanan;
//     } else if (jarakKiri > jarakKanan) {
//       return jarakKiri;
//     }
//   }
// }
//
// // TEST CASES
// console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
