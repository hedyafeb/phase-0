
function changeMe(arr) {
    if (arr.length === 0) {
        console.log('');
    }
    else {
        for (var i=0; i<arr.length; i++) {
            var tahunLahir = arr[i][3];
            // console.log(tahunLahir);
            var age = '';
            if (tahunLahir < 0 || tahunLahir == undefined) { // atau === ??
                age = 'Invalid Birth Year';
            } else if (tahunLahir >= 0) {
                age = 2018 - tahunLahir;
            } 
            // console.log(age);
            
            var baru = { // var nya beda2 ato ga?
                firstName: arr[i][0],
                lastName: arr[i][1],
                gender: arr[i][2],
                age: age,
            }
            console.log((i+1) + '. ' + baru.firstName + ' ' + baru.lastName); // manual kayak gini emang?
            console.log(baru);
        }
    }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""




  /*
if arr[i][3] 

  */

// var lahir = [[[]]];
// var now = 2018;
// console.log(lahir[1]);

// console.log(now-lahir);

// if < 0
// if >= 0
// if undefined
