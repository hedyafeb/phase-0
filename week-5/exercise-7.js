function hapusSimbol(str) {
    var regexPattern = /\w/g;
    var newStr = str.match(regexPattern);
    // console.log(newStr);

    // check null array:
    if (newStr) { // if array exist
        var result = '';
        for (var i=0; i<newStr.length; i++) {
            result += newStr[i];
        }
        return result;
    }
    else {
        return ''
    }
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
console.log(hapusSimbol('#%$#%#^%$#^%$#')); // 1352100