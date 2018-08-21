function cariModus(arr) {
    var max = 0;
    var lokasi = 0;
    // looping array (ex: ambil array[1] = 4)
    for (var i=0; i<arr.length; i++) {
        var jumlah = 0;
        // looping penambahan apabila angka 4 muncul (start from index 0)
        for (var j=0; j<arr.length; j++) {
            if (arr[i] === arr[j]) {
                jumlah += 1;
            } 
        }
        // IF 'jumlah' melebih 'max', maka reassign value max
        if (jumlah > max) {
            max = jumlah;
            lokasi = arr[i];
        } 
    } 
    // IF 1: semua sama, IF ELSE: beda semua, IF ELSE: normal (max > 1)
    if (max === arr.length) {
        return -1;
    } else if (max === 1) {
        return -1;
    } else if (max > 1) {
        return lokasi;
        
    }
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1



/*
var max = 0;
looping arr[i] 
    var jumlah = 0
    looping arr[j]
        if arr[j] === arr[i]
            jumlah += 1
    log jumlah
    if jumlah > max
        max = jumlah




[10, 4, 5,2, 4, 4, 2]
10 -> 4,5,2,4, 4,2 -> result = 1, += 0
4 -> 5,2,4,4,2 -> result = 1, += 2
5 -> 2, 4, 4, -> result = 1, += 0
2 -> 1, +=1
4 -> 6,      
*/