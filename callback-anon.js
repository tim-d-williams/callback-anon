var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }

];
var result = input.map(function(obj) {
  var input2 = ((obj.x * obj.x) + (obj.y * obj.y));
  input2 = Math.sqrt(input2)
  return input2;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);