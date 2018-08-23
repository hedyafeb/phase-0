function graduates (students) {    
    // var listGraduates = Object.values(students);
    // console.log(listGraduates);
    
    // MAKE OUTPUT CLASS:
    var obj = {}
    for (var i=0; i<students.length; i++) {
        var outputClass = students[i].class; // foxes, wolves
        var outputScore = students[i].score; // 78, 43, 65
        // console.log(outputClass, outputScore);
        
        // First Condition -> klo blom ada keysnya, ditambah, klo udah ada yah ga usah diapa2in
        if (obj[outputClass] === undefined) {
            obj[outputClass] = []
        }

        // Second Condition: klo lebih dari 75
        if (outputScore > 75) {
            obj[outputClass].push(students[i])
        }

        delete students[i].class
    }
    return obj;
}

/*



*/

console.log(graduates([
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

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}