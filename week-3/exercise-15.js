function groupAnimals(animals) {
  var abjad = 'abcdefghijklmnopqrstuvwxyz';

  // 1. buat result = [[] x jumlah huruf (26)]
  var result = [];
  for (var a=0; a<26; a++) {
    result.push([]);
  }

  // 2. looping animals
  for (var j=0; j<animals.length; j++) { // looping animals
    // 3. nested looping untuk mencocokan -> melokasikan huruf pertama setiap animal terhadap urutan abjad
    for (var i=0; i<abjad.length; i++) {
      if (animals[j][0] === abjad[i]) {
        // 4. kalau sudah cocok, masukkan kedalam array sesuai urutan abjad
        result[i].push(animals[j]);
      }
    }
  }

  // 5. sort result, supaya index2 awal array merupakan array yang kosong
  var sortedResult = result.sort();

  // 6. looping untuk menghapus array2 awal yang kosong
  while (sortedResult[0].length === 0) {
    sortedResult.shift();
    }

/* ga bisa for looping karena klo for:
.shift() akan menghilangkan index 0 terus, tp for looping akan mengecek looping berikutnya,
jadi akan banyak sortedResult[0] yang ke skip untuk dicek.
    for (var a=0; a<sortedResult.length; a++) {
      if (sortedResult[0].length === 0) {
        // sortedResult.shift();
        console.log(sortedResult);
      } else {
        break;
      }
    }
*/

  // 7. return result
  return sortedResult;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]


// time: 90 mins // 15.5 mins

// coba pake sortedResult[k] === [], undefined, null ga bisa, jd pake sortedResult[0].length.
/* TIDAK BISA push array baru ke dalam array
    var coba = [[], []];

    coba[[25]].push("hedya");
    console.log(coba); // klo index 0 & 1 bisa, tapi lebih dari itu, ga bisa, jadi error.
*/
