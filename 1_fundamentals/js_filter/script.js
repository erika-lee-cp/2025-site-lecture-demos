// Use .fitler() to return only numbers divisble by 3
let input = [3,5,6,7,9];
let results = input.filter(function (i) {
  return i % 3 ==  0;
});
console.log(results);

// Use .fitler() to only keep objects with age > 25
input = [
  {name: "alice", age: 10}, 
  {name: "bob", age: 62},
  {name: "charlie", age: 33},
  {name: "dave", age: 21}];

results = input.filter(function (person) {
    return person.age > 25;
});
console.log(results);