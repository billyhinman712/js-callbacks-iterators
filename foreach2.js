/*
	For Each 2:
	Use the .forEach iterator to loop over the following array of objects and say how delicious each one is.
 */
 
var foods = [
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];
foods.forEach(function(pie){
	console.log(pie.name + " is " + pie.level + " delicious");
});
// your code here

// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious