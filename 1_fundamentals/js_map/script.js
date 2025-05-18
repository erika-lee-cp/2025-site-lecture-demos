// Use .map() to double this array
let input = [3, 6, 9];
let results = input.map(function (i) {
  return i * 2;
});
console.log(results);

// Use .map() to get an array of name
input = [
  {name: "alice", age: 10}, 
  {name: "bob", age: 62},
  {name: "charlie", age: 33}];

const names = input.map(function (i){
  return i.name;
})
console.log(names);