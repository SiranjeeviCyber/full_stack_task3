//SPLICE
var cargoHold=['20 meters','space suits','parrot','instruction manual','meal packs','space tether',1138]

cargoHold.splice(3,0,'Keys');
console.log(cargoHold);
//print ['20 meters','space suits','parrot','keys','instruction manual','meal packs','space tether',1138]
cargoHold.splice(cargoHold.indexOf('instruction manual'),1);
console.log(cargoHold);
//print ['20 meters','space suits','parrot','keys','meal packs','space tether',1138]
cargoHold.splice(2,3,'cat','fob','string cheese');
console.log(cargoHold);
//print ['20 meters','space suits','cat','fob','string cheese','space tether',1138];