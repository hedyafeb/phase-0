function cariMedian(arr) {
  // kalau length arr nya GANJIL:
  if (arr.length % 2 !== 0) {
    // ambil index ditengah2 (length bagi 2, trs Math.floor)
    return arr[Math.floor(arr.length/2)];

  // kalau length arr nya GENAP:
  } else {
    // ambil index tengah2, (arr[length bagi 2] dan arr[length bagi 2, terus + 1])
    // arr[i] + arr[i+1], terus dibagi 2
    return (arr[arr.length/2] + arr[(arr.length/2) - 1])/2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5

/*
length: 6
if ganjil
  Math.floor(length/2) -> jadi indexnya
if genap
  length/2 = 3 -> jadi index + (i-1) / 2

permudah lagi bacanya!


*/
