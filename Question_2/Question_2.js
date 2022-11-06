//PUSH,POP,SHIFT AND UNSHIFT
var cargoHold=['oxygen tanks','space suits','parrot','instruction manual','meal packs','slinky','security blanket'];
console.log(cargoHold);
//print  ['oxygen tanks','space suits','parrot','instruction manual','meal packs','slinky','security blanket']
cargoHold[cargoHold.indexOf('slinky')]='space tether';
cargoHold.pop();
//print ['oxygen tanks','space suits','parrot','instruction manual','meal packs','space tether','security blanket']
console.log(cargoHold);
// print ['oxygen tanks','space suits','parrot','instruction manual','meal packs','space tether']
cargoHold.shift();
console.log(cargoHold);
// print ['space suits','parrot','instruction manual','meal packs','space tether']
cargoHold.push(1138);
console.log(cargoHold);
// print [1138,'space suits','parrot','instruction manual','meal packs','space tether']
cargoHold.unshift('20 meters');
console.log(cargoHold);
// print ['20 meters','space suits','parrot','instruction manual','meal packs','space tether',1138]