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
  arr.forEach(function(student) {
    console.log(student.age);
  });
}
secondLoop(students);

//problem 2
function thirdLoop(arr) {
  arr.forEach(function(student) {
    console.log(students.name, students.city);
  });
}
thirdLoop(students);

// problem 3
function fourthLoop(arr) {
  for (i=0;i<3;i++){
    console.log(students.name + " is from " + students.city);
  }
}
fourthLoop(students);

//problem 4
function fifthLoop(arr) {
  arr.forEach(function(student) {
    if (student.age > 25) {
      console.log(student.name + " is older than 25");
    }
  });
}
fifthLoop(students);
