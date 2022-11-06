// MULTI DIMENSIONAL ARRAY

var element1=['hydrogen','H',1.008];
var element2=['helium','He',4.003];
var element26=['iron','Fe',55.85];
var table=[];
table.push(element1,element2,element26);
console.log(table);
//print [['hydrogen','H',1.008],['helium','He',4.003],['iron','Fe',55.85]]
console.log(table[1]);
//print ['helium', 'He', 4.003]
console.log(table[1][1]);
//print He
console.log("element1 mass="+ table[0][2]);
//print element1 mass=1.008
console.log("element2 name="+ table[1][0]);
//print element2 name=helium
console.log("element26 mass="+ table[2][1]);
//print element26 mass=Fe