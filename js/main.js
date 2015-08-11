// add scripts

console.log("sanity check!");

var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];
//sample
function firstLoop(arr) {
  arr.forEach(function(student) {
    console.log(student.name);
  });
}

firstLoop(students);

//problem 1
function secondLoop(arr) {
  arr.forEach(function(age) {
    console.log(student.age);
  });
}

//problem 2
function thirdLoop(arr) {
  arr.forEach(function(name, city) {
    console.log(student.name, student.city);
  });
}

//problem 3
// function fourthLoop(arr) {
//   arr
// }
