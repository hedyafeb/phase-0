function cariPelaku(str) {
    var regexPattern = /abc/g;
    var newStr = str.match(regexPattern);
    // console.log(newStr.length);
    if (newStr) {
        return newStr.length;  
    }
    else {
        console.log('tidak ada pattern abc');
        
    }
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2
console.log(cariPelaku('bdsdsc')); // null