//CONCAT

var holdCabinet1=['duck','tape','gum',3.14,false,6.022e23];
var holdCabinet2=['orange drink','nerf toys','camera',42,'parsnip'];
holdCabinet1.concat(holdCabinet2);
console.log(holdCabinet1);
//print ['duck','tape','gum',3.14,false,6.022e23]
console.log(holdCabinet1.slice(1,3));
//print['tape','gum']
console.log(holdCabinet1);
//print ['duck','tape','gum',3.14,false,6.022e23]
console.log(holdCabinet2.slice(2,4));
//print ['camera',42]
console.log(holdCabinet2);
//print['orange drink','nerf toys','camera',42,'parsnip']
console.log(holdCabinet1.reverse());
//print [6.022e+23, false, 3.14, 'gum', 'tape', 'duck']
console.log(holdCabinet2.sort());
//print [42, 'camera', 'nerf toys', 'orange drink', 'parsnip']