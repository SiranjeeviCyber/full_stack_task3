// 7 

let people=["Greg","Mary","Devon","James"];
var index=0;
//iterate the people using loop
for(index=0;index<people.length;index++)
{
	console.log(people[index]);
}
//print
//Grey
//Mary
//Devon
//James

//command to remove "Greg"
people.shift();
console.log(people);
//print ['Mary', 'Devon', 'James']

//command to remove "James"
people.pop();
console.log(people);
//print ['Mary', 'Devon']

//command to add "Matt" at front
people.unshift("Matt");
console.log(people);
//print ['Matt', 'Mary', 'Devon']

//command to your name at the end
people.push("Siranjeevi");
console.log(people);
//print ['Matt', 'Mary', 'Devon', 'Siranjeevi']


//iterate to "Mary"
for(index=0;index<people.length;index++)
{
	console.log(people[index]);
	if(people[index]=="Mary")
		break;
}
//print 
// Matt
//Mary


// slice and store the value in new array 
var newArray=people.slice(2,people.length);
console.log(newArray);
//print ['Devon', 'Siranjeevi']

//commanmd to find the index of "Mary"
console.log(people.indexOf("Mary"));
//print 1


//commanmd to find the index of "Foo"
console.log(people.indexOf("Foo"));
//print -1

//Redefine
people=["Greg","Mary","Devon","James"];

//splice
people.splice(people.indexOf("Devon"),1,"Elizabeth","Artie");
console.log(people);
//print ['Greg', 'Mary', 'Elizabeth', 'Artie', 'James']



//create new varible withBob and assign "Bob"

var withBob=people+",Bob";
console.log(withBob);
//print Greg,Mary,Elizabeth,Artie,James,Bob