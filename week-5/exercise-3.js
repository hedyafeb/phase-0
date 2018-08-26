function highestScore (students) {
  var obj = {};

  for (var i=0; i<students.length; i++) {
    // console.log(students[i].class);
    var kelas = students[i].class;
    

    if (obj[kelas] === undefined) { // kalau kelas fox / wolves belum ada
      obj[kelas] = students[i];
    }
    else if (obj[kelas].score < students[i].score){
      obj[kelas] = students[i]
    }

    delete obj[kelas].class;
  }

  return obj;
}


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
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 100,
    class: 'wolves'
  }
]));

// highestScore([
//   foxes: { name: 'Sergei', score: 100 },
//   wolves: { name: 'Anastasia', score: 100 }
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
