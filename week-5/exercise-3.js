// HIGHEST SCORE: // quokka
// undefined -> klo key object blom ada sama skali.

function highestScore (students) {
  var obj = {};

  for (var i=0; i<students.length; i++) {
    // console.log(students[i].class);
    var kelas = students[i].class;
    
    // console.log(obj[kelas].score);
    if (obj[kelas] === undefined) { // kalau kelas fox / wolves belum ada
      obj[kelas] = students[i];
    }
    else if (obj[kelas] < students[i].score){
      obj[kelas] = students[i].score
    }
    
    // console.log(obj[kelas].class);
    delete obj[kelas].class;
  }

  return obj;
}

// 

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// highestScore([
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// ]);


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
